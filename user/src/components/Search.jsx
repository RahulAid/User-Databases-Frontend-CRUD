import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserById , deleteUserById} from '../Service/UserService';
import './User.css'
import {useNavigate} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Search = () => {

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
    

    const handledelete = () => {

        deleteUserById(id)
          .then(res => console.log("Response after Deleting", res))
          .catch(err => console.log("Delete Error", err))
          alert('User Deleted')
          navigate('/')
      }
    

    return (
        <div >(<div className="popup">
            <div className="popuphead"> {values.name}</div>
            <div className="popupbody"> 
            <div className="popupbodyitem"> 
            <span className='spanish'>Name : <div className='popupkey' >{values.name}</div></span>  
            <span className='spanish'>Email : <div className='popupkey' >{values.email}</div></span> 
            <span className='spanish'>Phone : <div className='popupkey' >{values.phone}</div></span> 
            <div className="popupbutton">
            <div className="buttonicon1" onClick={(e)=>navigate(`/update/${id}`)}>
            <EditIcon/>
            </div>
            <div className="buttonicon2" onClick={e=>handledelete()} >
            <DeleteIcon/>
            </div>
            
            </div>
            </div>
            </div></div>)</div>


    )
}
export default Search