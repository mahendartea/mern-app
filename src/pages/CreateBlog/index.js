import React from 'react'
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
   let history = useHistory();
   return (
      <div>
        <p>Content Create Blog</p> 
        <p onClick={()=>history.push('/')} className="cursor-pointer">Kembali</p>
      </div>
   )
}

export default CreateBlog
