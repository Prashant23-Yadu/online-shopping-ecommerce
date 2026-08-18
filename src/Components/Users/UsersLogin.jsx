// import React, { useEffect, useState } from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import '../../assets/style/landingpage.css'
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const UsersLogin = () => {

//   let [data,setData]=useState([]);

//   let userApi = async () =>{
//     let userApidata = await axios.get(`http://localhost:4000/users`);
//     setData(userApidata.data)

//   };

//   useEffect(()=>{
//     userApi();
//   },[])


//   let allEmail = data.map(elem=>elem.email)
//   console.log(allEmail)

//   let allPwd = data.map(elem => elem.password)
//   console.log(allPwd)


//   let [formdata,setFormdata]=useState({email :"",password:""})

//   let handleInput = (e)=>{
//     let keyName = e.targrt.value
//     let keyValue = e.targrt.value

//     setFormdata({...formdata,[keyName]:keyValue})

    

//   }

  

//   let handleSubmit = (e) =>{
//     e.preventDefault();
//     let err = `solid 1px red`

//     let {email,password} = formdata

//     let emailIndexPos = allEmail.indexOf(email)

//     if(emailIndexPos !== -1){
//       if(allPwd[emailIndexPos]===password){
//         navigator(`/userportel`)
//         toast.success('Login Succes')
//       }
//       else{
//         // console.log('Password Is Invalid')
//         e.targrt[1].style.border=err
//         toast.error('Password is Incorrect')
//       }
//     }else{
//       // console.error('email is invalid')
//       e.targrt[0].style.border=err
//       toast.error('Email is Incorrect')

     
//     }
//     console.log(formdata)
//   }
    
//   return (
//     <>
     
//     <div className="users_login">
        
//         <div className="formbox">
           
//                 <form action="" onSubmit={handleSubmit}>
//                     <input type="text" placeholder='Enetr your email'  value={FormData.email} onChange={handleInput}/>
//                     <input type="password" placeholder='Password' value={FormData.password} onChange={handleInput}/>

//                     <button>
//                         Users Login
//                     </button>

//                 </form>
                
                
//                     <Link>Forgotten Password</Link>
                    
                
//             </div>
//     </div>
//     </>
//   )
// }

// export default UsersLogin


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/style/landingpage.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const UsersLogin = () => {

  let [data, setData] = useState([]);
  let [formdata, setFormdata] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  let userApi = async () => {
    let userApidata = await axios.get(`http://localhost:4000/users`);
    setData(userApidata.data)
  };

  useEffect(() => {
    userApi();
  }, [])

  let handleInput = (e) => {
    let keyName = e.target.name
    let keyValue = e.target.value

    setFormdata({ ...formdata, [keyName]: keyValue })
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    let { email, password } = formdata

    let user = data.find(elem => elem.email === email);

    if (user) {
      if (user.password === password) {

        localStorage.setItem("user", JSON.stringify(user));

        toast.success('Login Success ✅')

        setTimeout(() => {
          navigate("/userportel")
        }, 1500);

      } else {
        toast.error('Password is Incorrect ❌')
      }
    } else {
      toast.error('Email is Incorrect ❌')
    }
  }

  return (
    <div className="users_login">
      <div className="formbox">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="email"
            placeholder='Enter your email'
            value={formdata.email}
            onChange={handleInput}
          />

          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formdata.password}
            onChange={handleInput}
          />

          <button>
            Users Login
          </button>

        </form>

        <Link to="/forgot-password" className="forgot-password">Forgotten Password</Link>

        <p className="register-text">
         New user?{" "}
        <Link to="/register" className="register-link">
           Create Account
       </Link>
       </p>

        
        

      </div>
    </div>
  )
}

export default UsersLogin

