import axios from "axios";

export const addVideos=async(data)=>{
    return await axios.post("http://localhost:3000/videos",data)
}

export const getVideos=async()=>{
    return await axios.get("http://localhost:3000/videos")
}

export const deleteVideo=async(id)=>{
    return await axios.delete(`http://localhost:3000/videos/${id}`)
}

export const addCategory=async(data)=>{
    return await axios.post('http://localhost:3000/category',data)
}

export const getCategories=async()=>{
    return await axios.get('http://localhost:3000/category')
}

export const deletecategory=async(id)=>{
    return await axios.delete(`http://localhost:3000/category/${id}`)
}

export const updateCategory = async (id, data) => {
    return await axios.put(`http://localhost:3000/category/${id}`,data)
}

export const addHistory= async(data)=>{
    return await axios.post('http://localhost:3000/history',data)
}

export const getHistory= async(data)=>{
    return await axios.get('http://localhost:3000/history')
}

export const checkEmailApi= async(email)=>{
    return await axios.get(`http://localhost:3000/users?email=${email}`)
}

export const registerApi= async(data)=>{
    return await axios.post('http://localhost:3000/users',data)
}

export const loginApi= async(email,password)=>{
    return await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
    
}

export const deleteHistory=async(id)=>{
    return await axios.delete(`http://localhost:3000/history/${id}`)
}