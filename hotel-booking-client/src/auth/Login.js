import React,{useState} from 'react'
import { toast } from "react-toastify";
import LoginForm from '../booking/components/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
const Login = ({history}) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch=useDispatch()
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
     var res= await login({email,password})
     if(res.data)
     {
         window.localStorage.setItem('auth',JSON.stringify(res.data))
         dispatch({
             type:"LOGGED_IN_USER",
             payload:res.data
         })
     }
      toast.success("successfully login")
     history.push("/dashboard")
      }
      catch(err)
      {
          console.log(err)
         //toast.success(err.response.data)
      }
    };
    return (
        <div className="container-fluid text-white p-5 text-center">
         <h1 className="rounded p-5 bg-success mb-5">Login</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <LoginForm 
              password={password}
              setpassword={setpassword}
              email={email}
              setemail={setemail}
              handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login