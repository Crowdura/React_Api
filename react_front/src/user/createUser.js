import React, { useState } from "react";
import axios from "axios";
import { Input } from "../component/ui/input";
import { Button } from "../component/ui/button";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/usuarios/"

const CreacteUser = () => {
    const [Name, setName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [user, setUser] = useState(' ') 
    const [email, setEmail] = useState(' ')
    const [tel, setTel] = useState(' ')
    const [andress, setAndress] = useState(' ') 

    const navigate = useNavigate()

    const createUser = async (e) => {
        e.preventDefault()
        console.log( Name + last_name )
        await axios.post(URI, {
            Name: Name,
            lastName: last_name,
            user: user,
            email: email,
            tel: tel,
            andress: andress
        })
        navigate('/')

    }

    return(<>
        <div className="divContain">
            <div className="divContainI">
                <label className="block text-gray-700 text-sm font-bold mb-2" style={{ textAlign: 'center' }} htmlFor="Title">
                    Registro de usuario
                </label>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nombre">
                        Nombre
                    </label>
                    <Input onChange={ (e) => setName(e.target.value) } id="grid-first-name" type="text" placeholder="Nombre"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Apellido">
                        Apellido
                    </label>
                    <Input onChange={ (e) => setLastName(e.target.value) } id="grid-first-name" type="text" placeholder="Apellido"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                        Usuario
                    </label>
                    <Input onChange={ (e) => setUser(e.target.value) } id="grid-first-name" type="text" placeholder="Usuario"></Input>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                        EmaiL
                    </label>
                    <Input onChange={ (e) => setEmail(e.target.value) } id="grid-first-name" type="text" placeholder="Email"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Tel">
                        Tel 
                    </label>
                    <Input onChange={ (e) => setTel(e.target.value) } id="grid-first-name" type="text" placeholder="Tel"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direcc">
                        Dirección 
                    </label>
                    <Input onChange={ (e) => setAndress(e.target.value) } id="grid-first-name" type="text" placeholder="Dirección"></Input>
                </div>
                <Button onClick={ (e) => createUser(e) }>Crear</Button>
            </div>
        </div>
    </>)
}

export default CreacteUser