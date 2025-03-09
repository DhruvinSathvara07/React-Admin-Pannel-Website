import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const EditHomeCard3List = () => {
  const { register, handleSubmit, reset } = useForm()

  const { id } = useParams()
  const navigate = useNavigate()

  const showServicesData = () => {
    axios.get(`http://localhost:3001/Swiping-images/${id}`).then((response) => {
      console.log(response.data)
      reset(response.data)
    })
  }

  useEffect(() => {
    showServicesData()
  }, [])

  const onSubmit = async (data) => {
    if (confirm("data Successfully added")) {
      await axios.put(`http://localhost:3001/Swiping-images/${id}`, data).then((response) => {
        console.log(response.data, 'This is data')
        navigate('/theme/HomeList/HomeCard3List')
      })
    }
  }

  return (
    <>
      <div className="container">
        <h1>Home List Card3 Edit Page</h1>
        <div className="row">
          <div className="col-lg-12 ">
          <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Image"
                  {...register('image', { required: true })}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Title"
                  {...register('title', { required: true })}
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

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                   Process
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter process"
                  {...register('progress', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  donations
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter donation"
                  {...register('donations', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    needed
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter needed"
                  {...register('needed', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    button
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter button"
                  {...register('buttonText', { required: true })}
                />
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditHomeCard3List
