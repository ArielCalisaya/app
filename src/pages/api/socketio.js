import { Server } from 'socket.io';

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const users = {};
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      socket.on('input-change', (msg) => {
        socket.broadcast.emit('update-input', msg);
      });

      socket.on('user-connection', (data) => {
        console.log('front_data:', data);
        const userIds = Object.values(users);
        if (userIds.every((id) => id !== data.userId)) {
          users[socket.id] = data.userId;
          socket.broadcast.emit('user-info', users);
        }
        // remove repeated userId in usersOnline array
        // if (usersOnline.every((user) => user.userId !== data.userId)) {
        //   usersOnline.push(data);
        // }
      });
      socket.on('user-disconnection', () => {
        delete users[socket.id];
        socket.broadcast.emit('user-info', users);
      });

      socket.on('disconnect', () => {
        console.log(`user ${users[socket.id]} disconnected`);
        // remove saved socket from users object
        delete users[socket.id];
        socket.broadcast.emit('user-info', users);
      });
    });

    res.socket.server.io = io;
  } else {
    console.log('socket.io already running');
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;

// io.on('connection', (socket) => {
//   socket.on('input-change', (msg) => {
//     socket.broadcast.emit('update-input', msg);
//   });

//   socket.on('user-connection', (data) => {
//     console.log('front_data:', data);
//     users[data.userId] = socket.id;

//     socket.emit('user-info', users);

//     // remove repeated userId in usersOnline array
//     // if (usersOnline.every((user) => user.userId !== data.userId)) {
//     //   usersOnline.push(data);
//     // }
//   });
//   socket.on('user-disconnection', (data) => {
//     delete users[data.userId];
//     socket.broadcast.emit('user-info', users);
//   });

//   socket.on('disconnect', () => {
//     console.log(`user ${users[socket.id]} disconnected`);
//     // remove saved socket from users object
//     delete users[socket.id];
//     socket.emit('user-info', users);
//   });
// });
