
// import Login from './components/Login';
// import React, { useContext, useState } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { FaPencilAlt } from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";



// const login = () => {
// const[email,setEmail]=useState("");
// const[password,setPassword]=useState("");


// const[role,setRole]=useState("");

// const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);
// const handleLogin=async (e)=>{
//   e.preventDefault();
//   try{
// const {data}=await axios.post("http://localhost:4000/api/v1/user/login"
//   ,
//   {email,password,role}
//   ,{withCredentials:true,
//   headers:{
// "Content-Type":"application/json",
//   },
// });

// toast.success(data.message);

// setEmail("");

// setRole("");
// setPassword("");
// setIsAuthorized(true);

//   }
//   catch(error){
// toast.error(error.response.data.message)
//   }
// };

// if(isAuthorized){
//   return <Navigate to={"/"}/>;
// }

//   return (
//     <>
//       <div className="authPage">
// <div className="container">
//   <div className="header">
//     <img src="https://th.bing.com/th/id/OIP.TpGXAo8FbjWo6vH7fkeK5QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7" alt="logo"/>
//     <h3>Login to existing account</h3>
//   </div>
//   <form>
//     <div className="inputTag">
//       <label>
// Login As 
//       </label>
//       <div>
//         <select value={role} onChange={(e)=>setRole(e.target.value)}>
// <option value="">Select Role</option>
// <option value="Employer">Employer</option>
// <option value="Job Seeker">Job Seeker</option>
//         </select>
//         <FaRegUser/>
//       </div>
//     </div>


//     <div className="inputTag">
//       <label>
// Email Address
//       </label>
//       <div>
//         <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
//         placeholder="komalme7@gmail.com"
//         />
//  <MdOutlineMailOutline/>
//       </div>
//     </div>



  

//     <div className="inputTag">
//       <label>
// Password
//       </label>
//       <div>
//         <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
//         placeholder="password"
//         />
//         <RiLock2Fill/>
//       </div>
//     </div>



// <button onClick={handleLogin} type="submit">Login</button>
// <Link to={"/register"}>Register now</Link>
//   </form>
// </div>
// <div className="banner"></div>
// <img src="https://th.bing.com/th/id/OIP.moKlNRJzfLhUNNbtubNyHgHaCj?w=313&h=120&c=7&r=0&o=5&pid=1.7" alt="login"/>
//       </div>
//     </>
//   );
// };

// export default login;


import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Context } from "../../main";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="https://th.bing.com/th/id/OIP.TpGXAo8FbjWo6vH7fkeK5QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7" alt="logo" />
            <h3>Login to your account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="zk@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="https://th.bing.com/th/id/OIP.qAGCi3cMcex8MzDwh2xkjQHaHa?w=180&h=181&c=7&r=0&o=5&pid=1.7" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;