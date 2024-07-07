import { UserModel } from "../model/userModel.js";
import { doc, getDocs, deleteDoc, updateDoc, setDoc, getDoc, query, where} from "firebase/firestore";

export const getAlluser = async (req, res) => {
    const docs = []
    try {
        const users = await getDocs(UserModel)
        users.forEach((doc) => {
            docs.push({ ...doc.data(), id:doc.id })
        })
        res.json(docs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const refDoc = doc( UserModel, req.params.id )
        const users = await getDoc(refDoc)
        res.json(users.data())
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const creatUser = async (req, res)=>{
    try {
        const refDoc = doc( UserModel )
        const docdate = await getDoc(refDoc)
        if (docdate.exists()) {
            res.json({
                message: error.message
            })
        } else {
            await setDoc( refDoc,  req.body)
            res.json({
                message: "Se creo el registro "
            })   
        }
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const updateUser = async (req, res)=>{
    try {
        const docRef = doc( UserModel, req.params.id )
        await updateDoc( docRef, req.body)
        res.json({
            message: 'Se actualizo satisfatoriaente'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const deleteUser = async (req, res) =>{
    try {
        const docRef = doc( UserModel, req.params.id )
        console.log(docRef)
        const docdata = await getDoc( docRef )
        if (docdata.exists()) {
            await deleteDoc(docRef)
            res.json({
                message: 'Se elemino el usuario'
            })
        } else {
            res.json({
                message: 'El usuario no existe'
            })
        }
           
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}