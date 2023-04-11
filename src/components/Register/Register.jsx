import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Joi, { valid } from 'joi'



const Register = () => {

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: 0
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [errorList, setErrorList] = useState([])

    let navigate = useNavigate()

    async function sendUserDataTOApi() {
        let { data } = await axios.post(`https://route-movies-api.vercel.app/signup`, user)
        if (data.message == "success") {
            navigate("/login")
        }
        else {
            setError(data.message)
            setIsLoading(false)
        }

    }
    function getUserData(e) {
        let users = { ...user }
        users[e.target.name] = e.target.value
        setUser(users)
    }

    function submitDataToApi(e) {
        e.preventDefault();
        setIsLoading(true)
        let validation = validateRegisterForm()
        console.log(validation);
        if (validation.error) {
            setErrorList(validation.error.details)
            setIsLoading(false)
        }
        else {
            sendUserDataTOApi()
        }
    }

    function validateRegisterForm() {
        let schema = Joi.object({
            first_name: Joi.string().min(3).max(10).required(), // min and max is string length
            last_name: Joi.string().min(3).max(10).required(), //min and max the numbers
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
            password: Joi.string().required(),
            age: Joi.number().min(16).max(80).required()
        })
        return schema.validate(user, { abortEarly: false });

    }

    return (
        <>
            {errorList.map((err , index) => {
                if(err.context.label == 'password'){
                    return <div key={index} className="alert alert-danger my-2">Password Invalid</div>
                }
                else {
                    return <div key={index} className="alert alert-danger my-2">{err.message}</div>
                }
            })}
            <form onSubmit={submitDataToApi}>
                <label htmlFor="first_name">First Name:</label>
                <input onChange={getUserData} type="text" name='first_name' className='form-control my-2' />
                <label htmlFor="last_name">Last Name:</label>
                <input onChange={getUserData} type="text" name='last_name' className='form-control my-2' />
                <label htmlFor="email">Email :</label>
                <input onChange={getUserData} type="text" name='email' className='form-control my-2' />
                <label htmlFor="password">Password :</label>
                <input onChange={getUserData} type="password" name='password' className='form-control my-2' />
                <label htmlFor="age">Age :</label>
                <input onChange={getUserData} type="number" name='age' className='form-control my-2' />
                <button className='btn btn-primary'>{isLoading == true ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Register'} </button>
            </form>
        </>
    )
}

export default Register