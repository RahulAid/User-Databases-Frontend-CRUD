import axios from 'axios'


const headerConfig = {
  headers: {
    Authorization: `bearer ${localStorage.getItem("auth")}`,
  },
};

const baseUrl = "http://localhost:4000/users/"
//Fetch All Users
export const fetchUsers = async () => {

  const response = await axios.get(`${baseUrl}`)
  return response;
  
}

 //Create a User
export const createUser = async (data) => {

  const response = await axios.post('http://localhost:4000/users',data)
  return response;
  
}

//Delete User by Id
export const deleteUserById = async (id) => {
  const response = await axios.delete(`http://localhost:4000/users/${id}`)
} 

//Update User by Id
export const updateUserById = async (id,data) => {
  const response = await axios.put(`http://localhost:4000/users/${id}`,data)

  return response;
}

//Fetch User by Id
export const fetchUserById = async (id) => {
  const response = await axios.get(`http://localhost:4000/users/${id}`)

  return response;
}


