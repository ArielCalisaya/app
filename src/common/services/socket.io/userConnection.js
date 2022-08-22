import io from 'socket.io-client';

const userConnection = (args) => {
  fetch('/api/socketio').finally(() => {
    const socket = io();

    const isOnlineButton = document.querySelector('#isOnline');
    const checkSocketStatus = () => {
      console.log('Socket status:', socket.connected);
    };

    socket.on('connect', () => {
      checkSocketStatus();
      socket.emit('user_connection', args?.userId);
    });

    socket.on('message', (data) => {
      console.log('welcome_user', data);
      isOnlineButton.innerHTML = 'User is online';
    });

    socket.on('disconnect', () => {
      checkSocketStatus();
      isOnlineButton.innerHTML = 'User is offline';
    });
  });
};

export default userConnection;
