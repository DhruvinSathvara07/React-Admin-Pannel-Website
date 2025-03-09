import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeCard1List = () => {
  const [showData, setshowData] = useState([])
  const navigate = useNavigate()

  const showServicesData = () => {
    axios.get('http://localhost:3001/cardData').then((response) => {
      setshowData(response.data)
    })
  }

  const handleDelete = async (id) => {
    if (confirm("Successfully Deleted")) {
      await axios.delete(`http://localhost:3001/cardData/${id}`).then((response) => {
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
        <h1 className="mb-5">Home Card 1 List</h1>

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
                  <td>{items.card_title}</td>
                  <td>{items.description}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash ps-5  cursor me-5"
                      onClick={() => handleDelete(items.id)}
                    ></i>
                    <i
                      className="fa-solid fa-pen-to-square ps-5 cursor"
                      onClick={() => navigate(`/EditPages/Home/EditHomeCard1List/${items.id}`)}
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

export default HomeCard1List
