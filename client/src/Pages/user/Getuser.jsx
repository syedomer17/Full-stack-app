import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { get } from 'mongoose';

const Getuser = () => {
    const [user,setUser] = useState([]);
    
    let token = localStorage.getItem("token")

    const getAll = async ()=>{
        try {
            const apiurl = "http://localhost:5001/api/user/getall"
            const response = await axios.get(apiurl,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data.msg);
            setUser(response.data.msg)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAll()
    },[])
  return (
    <>
    <h1>user</h1>
    {user.map((x,index)=>{
        return(
            <div key={index}>
                <p>{x.fullName}</p>
                <p>{x.email}</p>
                <p>{x.phone}</p>
                <p>{x.role}</p>
            </div>
        )
    })}
    </>
  )
}

export default Getuser