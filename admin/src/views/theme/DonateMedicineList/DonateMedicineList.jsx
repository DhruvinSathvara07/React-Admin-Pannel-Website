import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DonateMedicineList = () => {
  const [showData, setshowData] = useState([])
  const navigate = useNavigate()

  const showServicesData = () => {
    console.log('hello')
    axios.get('http://localhost:3001/heading').then((response) => {
      setshowData(response.data)
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/heading/${id}`).then((response) => {
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
      <div className="container-fluid my-5">
        <h1 className="mb-5">Donate Medicine List</h1>

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
                  <td>{items.herotitle}</td>
                  <td>{items.heropara}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash text-dark ps-5  cursor me-5"
                      onClick={() => handleDelete(items.id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square ps-5 cursor"
                      onClick={() =>
                        navigate(`/EditPages/DonateMedicine/EditDonateMedicine/${items.id}`)
                      }
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

export default DonateMedicineList
