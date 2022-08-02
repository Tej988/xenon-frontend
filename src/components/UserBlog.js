import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Blog from './Blog'
const UserBlog = () => {

  const [blogs, setBlogs] = useState()

  const id = localStorage.getItem("userId");
  const sendRequest = async()=>{
    const res = await axios.get(`https://xenon-blog.herokuapp.com/api/blog/user/${id}`)
    .catch((err)=> console.log(err))
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data)=> setBlogs(data.blogs.blogs))
  
  }, [])
  console.log(blogs)
  return (
    <div> {
      blogs && blogs.map((blog, index)=>(
        <Blog title={blog.title} 
        description={blog.description }
         user={blog.user} 
         image={blog.image}/>
      ))
    }</div>
  )
}

export default UserBlog
