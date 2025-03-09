import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const EditHomeCard1List = () => {
  const { register, handleSubmit, reset } = useForm()

  const { id } = useParams()
  const navigate = useNavigate()

  const showServicesData = () => {
    axios.get(`http://localhost:3001/cardData/${id}`).then((response) => {
      console.log(response.data)
      reset(response.data)
    })
  }

  useEffect(() => {
    showServicesData()
  }, [])

  const onSubmit = async (data) => {
    if (confirm("data Successfully added")) {
      await axios.put(`http://localhost:3001/cardData/${id}`, data).then((response) => {
        console.log(response.data, 'This is data')
        navigate('/theme/HomeList/HomeCard1List')
      })
    }
  }

  return (
    <>
      <div className="container">
        <h1>Home List Card1 Edit Page</h1>
        <div className="row">
          <div className="col-lg-12 ">
            <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
              
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Title"
                  {...register('card_title', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  {...register('description', { required: true })}
                ></textarea>
              </div>

              <button className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditHomeCard1List
