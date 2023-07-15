import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserById , updateUserById} from '../Service/UserService';
import './User.css'
import {useNavigate} from 'react-router-dom'

const Popup = () => {

    const {id} = useParams();

    const navigate = useNavigate()
    const [values, setValues] = useState({
        id:id,
        name: "",
        email: "",
        phone: ""

    })

    useEffect(() => {
        fetchUserById(id)
        .then(res => 
            setValues({...values,name:res.data.name,email:res.data.email,phone:res.data.phone}))
        .then(err => console.log(err))
        
    },[])
    

    const handleSave=() => {
        console.log(values,"Data after saving changes")
        updateUserById(id,values)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        navigate('/')
    }

    return (
        <div >(<div className="popup">
            <div className="popuphead"> {values.name}</div>
            <div className="popupbody"> 
            <div className="popupbodyitem"> 
            <span className='spans'>Name : <input className='popupkey' type="textbox"  value ={values.name} onChange={e => setValues((prev) => ({...prev,name:e.target.value}))}/></span>  
            <span className='spans'>Email : <input className='popupkey' type="textbox" value ={values.email} onChange={e => setValues((prev) => ({...prev,email:e.target.value}))}/></span> 
            <span className='spans'>Phone : <input className='popupkey' type="textbox" value ={values.phone} onChange={e => setValues((prev) => ({...prev,phone:e.target.value}))}/></span> 
            <div className="popupbutton">
            <div className="buttonicon1" onClick={(e)=>navigate('/')}>
            <button>Cancel</button>
            </div>
            <div className="buttonicon2" onClick={e=>handleSave()} >
            <button>Save</button>
            </div>
            
            </div>
            </div>
            </div></div>)</div>


    )
}
export default Popup