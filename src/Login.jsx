import React from 'react'
import useStore from './Store';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
    const navigate=useNavigate();
    const {username,password,toggle,handle,handled}=useStore()
    const submit=()=>{
        if(username!=="H"&&password!==31){
            
            alert("enter valid username and password")
        }
        else{ toggle();
            navigate('/secondtask/datas');}
       
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f4f7fc'
        }}>
            <label style={{
                    fontSize: '1rem',marginBottom: '8px', color: '#333',alignSelf: 'flex-start',marginLeft: '10px'}}>
             UserName:
            <input type='text' onChange={handle} style={{
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        width: '100%',
                        fontSize: '1rem'
                    }}/></label><br />
            <label style={{
                    fontSize: '1rem',
                    marginBottom: '8px',
                    color: '#333',
                    alignSelf: 'flex-start',
                    marginLeft: '10px'
                }}>password:<input type='Password' onChange={handled} style={{
                    padding: '10px',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '100%',
                    fontSize: '1rem'
                }}/></label><br />
            <button  style={{marginBottom:'600px', marginLeft:'100px'}}onClick={submit}>Submit</button>
        </div>
    )
}

export default Login
