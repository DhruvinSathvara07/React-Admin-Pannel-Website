import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BlogList = () => {
  const [showData, setshowData] = useState([])
  const navigate = useNavigate()

  const showServicesData = () => {
    console.log('hello')
    axios.get('http://localhost:3001/BlogTitle').then((response) => {
      console.log(response.data)
      setshowData(response.data)
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/BlogTitle/${id}`).then((response) => {
      console.log(response, 'Response of id')
      alert('Successfully Deleted')
      showServicesData()
    })
  }

  useEffect(() => {
    showServicesData()
  }, [])
  return (
    <>
      <div className="container my-5">
        <h1>Blog Title List</h1>
        <table className="table table-bordered table-stripped ">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((items, index) => {
              console.log(items, 'this is items')
              return (
                <tr key={index}>
                  <td>{items.BlogTitle}</td>
                  <td>{items.Blogdescription}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash me-5 ps-5 cursor"
                      onClick={() => handleDelete(items.id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square ps-5 cursor"
                      onClick={() => navigate(`/EditPages/Blog/EditBlogList/${items.id}`)}
                    ></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BlogList
