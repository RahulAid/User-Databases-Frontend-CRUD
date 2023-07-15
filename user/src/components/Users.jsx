import React, { useEffect, useState } from 'react'
import './User.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchUsers, fetchUserById, updateUserById, deleteUserById, createUser } from '../Service/UserService'
import { Link, useNavigate } from 'react-router-dom';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


const Users = () => {

  const [user, setUser] = useState([])
  const [userinput, setUserInput] = useState({
    name: "",
    email: "",
    phone: ""

  })

  const [searchedUser, setSearchedUser] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const getusers = () => {
      fetchUsers()
        .then((res) => {
          //console.log("Data from backend", res.data)
          var resarr = res.data
          setUser(resarr)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    getusers()


  }, [])


  const [searchItem, setSearchItem] = useState(null)

  //Register a new User
  const register = () => {

    createUser(userinput)
      .then((res) => {
        console.log("Data after registration", res)
      })
      .catch((err) => {
        console.log("Registration Error", err)
      })


  }

  //Search a User
  const search = () => {
    const searchid = searchItem

    navigate(`/search/${searchid}`)
    
  }


  //Delete User Details
  const handledelete = (id) => {

    deleteUserById(id)
      .then(res => console.log("Response after Deleting", res))
      .catch(err => console.log("Delete Error", err))

  }




  return (
    <div><div className="view">
      <div className="form">

        <div className="data">
          <div className='datahead'>USER DATABASE</div>
          <div className='databody'>
            <p>View and Register Users</p><div className="searchbar"><input className="search" type="text" defaultValue="Search User by ID....." onChange={(e) => setSearchItem(e.target.value)} /><PersonSearchIcon sx={{"cursor":'pointer'}} onClick={search} /></div>


            <div className="bodyfit">



              <div className="bodyleft">
                {user.map((item, key) => {
                  return < div className='card' key={item._id}>
                    <div className="cardhead">{item.name}</div>
                    <div className="cardcontent">
                      <p className="key">UserId :- {item._id}</p>
                      <p className="key">Name :- {item.name}</p>
                      <p className="key">Email :- {item.email}</p>
                      <p className="key">Phone :- {item.phone}</p>
                      <span className='cardicon' >
                        <Link className='icon1' to={`update/${item._id}`}><EditIcon /></Link>
                        <div className='icon2' onClick={(e) => handledelete(item._id)}><DeleteIcon /></div>
                      </span>
                    </div> </div>
                })}
              </div>


              <div className="bodyright"><div className="rightform"><div className="formhead">Register</div><div className="formbody">

                <span className='rbinput'>Name   <div><input className='isection' type="text" onChange={(e) => setUserInput((prev) => ({ ...prev, name: e.target.value }))} /></div></span>
                <span className='rbinput'>Email  <div><input className='isection' type="text" onChange={(e) => setUserInput((prev) => ({ ...prev, email: e.target.value }))} /></div></span>
                <span className='rbinput'>Phone  <div><input className='isection' type="text" onChange={(e) => setUserInput((prev) => ({ ...prev, phone: e.target.value }))} /></div></span>
                <button className='rbbutton' onClick={register}>Submit</button>
              </div></div></div>
            </div></div>
        </div>

      </div>
    </div></div >
  )
}

export default Users