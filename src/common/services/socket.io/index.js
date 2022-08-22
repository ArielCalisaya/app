import io from 'socket.io-client';
import userConnection from './userConnection';

const socket = io();
// Production side handlers
export default {
  userConnection,
  io: socket,
};
