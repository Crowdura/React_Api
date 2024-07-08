import express from 'express'
import { getAlluser, getUser, updateUser, deleteUser, creatUser } from '../controllers/userControllers.js'

export const routerUser = express.Router()

//configuración de router de Usuario
routerUser.get('/', getAlluser)
routerUser.get('/:id', getUser)
routerUser.post('/', creatUser)
routerUser.delete('/:id', deleteUser)
routerUser.put('/:id', updateUser)