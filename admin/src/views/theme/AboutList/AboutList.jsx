import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AboutList = () => {
  const [showData, setshowData] = useState([])
  const navigate = useNavigate()

  const showServicesData = () => {
    console.log('hello')
    axios.get('http://localhost:3001/About').then((response) => {
      console.log(response.data)
      setshowData(response.data)
    })
  }

  const handleDelete = async (id) => {
      await axios.delete(`http://localhost:3001/About/${id}`)
          .then((response) => {
              console.log(response, 'Response of id')
              alert("Successfully Deleted")
              showServicesData();
          })
  }

  useEffect(() => {
    showServicesData()
  }, [])
  return (
    <>
      <div className="container my-5">
        <h1>About Title List</h1>
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
                  <td>{items.aboutheading}</td>
                  <td>{items.aboutpara}</td>
                  <td>
                  <i
                      className="fa-solid fa-trash ps-5  cursor me-5"
                      onClick={() => handleDelete(items.id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square ps-5 cursor"
                      onClick={() => navigate(`/EditPages/About/EditAboutList/${items.id}`)}
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

export default AboutList
