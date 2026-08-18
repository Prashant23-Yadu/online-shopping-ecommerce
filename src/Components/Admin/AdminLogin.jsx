import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/style/landingpage.css'


const AdminLogin = () => {
    let [formdata,setFormdata]=useState({email : "",password : ""})

    let errMsz = useRef()

    let navigate = useNavigate() 

    let handleInput = (e) =>{
        let keyName = e.target.name
        let keyValue = e.target.value

        setFormdata({...formdata ,[ keyName ]: keyValue})

    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(formdata)

        // TODO : Here , Collecting Data from the field
        let {email,password} = formdata
        // TODO : Here creating Admin credential 
        let credential = {
            adminMail : 'admin@gmail.com',
            adminPawd : 'Admin@123'
        }
   
        let {adminMail,adminPawd} = credential

        // TODO : Cheak input data & credintial 

        if(email === adminMail && password === adminPawd){
            // console.log("WelCome")

            navigate('/adminportel')
        }
        else{
            // console.log("Moye Moye")

            let err = `solid 1px red`
            e.target[0].style.border = err
            e.target[1].style.border = err
            errMsz.current.innerText = `Email and password are invalid`;
        }
        setFormdata({email : "",password : ""})
    };
  return (
    <>
    <div className="admin_login">
         
         <div className="formbox">
           
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    type="email" 
                    placeholder='Enetr your email'
                    onChange={handleInput}
                    name = "email"
                    value={formdata.email}
                     />
                    <input 
                    type="password" 
                    placeholder='Password' 
                    onChange={handleInput}
                    name = "password"
                    value={formdata.password}
                    />

                    <div
                    ref={errMsz} style={{color: 'red' , textAlign:'right'}}
                    ></div>

                    <button>
                        Admin Login
                    </button>

                </form>
                
                
                    <Link to="/admin-forgot-password" className="forgot-password">Forgotten Password</Link>
                
            </div>
    </div>
    </>
  )
}

export default AdminLogin