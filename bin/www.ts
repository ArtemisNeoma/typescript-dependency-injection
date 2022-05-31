import { config } from "dotenv";
import { onListening, onError } from "./serverInfo";
import app from 'index'

config({ path: '/config/config.env' })
const port = process.env.PORT || 3000

