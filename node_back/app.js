import express from "express";
import cors from 'cors';
import morgan from 'morgan';

import { routerUser } from "./routers/routers.js";

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/usuarios', routerUser)

app.listen(8000, () => {
    console.log(`Server en escucha port ${ 8000 }`)
})