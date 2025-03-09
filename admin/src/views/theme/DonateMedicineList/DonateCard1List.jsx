import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DonateMedicineList = () => {
  const [showData, setshowData] = useState([])
  const navigate = useNavigate()

  const showServicesData = () => {
    console.log('hello')
    axios.get('http://localhost:3001/posts').then((response) => {
      setshowData(response.data)
    })
  }

  const handleDelete = async (id) => {
    if (confirm('Successfully Deleted')) {
      await axios.delete(`http://localhost:3001/posts/${id}`).then((response) => {
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
      <div className="container-fluid my-5">
        <h1 className="mb-5">Donate Medicine List</h1>

        <table className="table table-bordered table-stripped ">
          <thead className="table-dark">
            <tr>
              <th>image</th>
              <th>date</th>
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
                  <td>{items.Cardimg}</td>
                  <td>{items.CardDate}</td>
                  <td>{items.CardHeading}</td>
                  <td>{items.Cardpargraph}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash me-5 ps-5 cursor"
                      onClick={() => handleDelete(items.id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square ps-5 cursor"
                      onClick={() =>
                        navigate(`/EditPages/DonateMedicine/EditDonateCard1/${items.id}`)
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
