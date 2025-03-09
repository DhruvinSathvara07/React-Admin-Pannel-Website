import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Mission from '../About/Mission'
import { useNavigate } from 'react-router-dom'

const MissionList = () => {
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
    if (confirm('Successfully Deleted')) {
      await axios.delete(`http://localhost:3001/About/${id}`).then((response) => {
        console.log(response, 'Response of id')
        showServicesData()
      })
    }
  }

  useEffect(() => {
    showServicesData()
  }, [])
  return (
    <>
      <div className="container my-5">
        <h1>About Mission List</h1>
        <table className="table table-bordered table-stripped ">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Sub Title</th>
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
                  <td>{items.aboutimg}</td>
                  <td>{items.subheading}</td>
                  <td>{items.missionheading}</td>
                  <td>{items.ourmissionpara}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash me-5 ps-5 cursor"
                      onClick={() => handleDelete(items.id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square ps-5 cursor"
                      onClick={() => navigate(`/EditPages/About/EditMission/${items.id}`)}
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

export default MissionList
