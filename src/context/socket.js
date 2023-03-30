import { io } from "socket.io-client";
import { createContext } from "react";

export const socket = io.connect(SERVER_URL);
export const SocketContext = createContext();
