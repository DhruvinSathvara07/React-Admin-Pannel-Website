import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const EditHomeCard4List = () => {
  const { register, handleSubmit, reset } = useForm()

  const { id } = useParams()
  const navigate = useNavigate()

  const showServicesData = () => {
    axios.get(`http://localhost:3001/blogs/${id}`).then((response) => {
      console.log(response.data)
      reset(response.data)
    })
  }

  useEffect(() => {
    showServicesData()
  }, [])

  const onSubmit = async (data) => {
    if (confirm("data Successfully added")) {
      await axios.put(`http://localhost:3001/blogs/${id}`, data).then((response) => {
        console.log(response.data, 'This is data')
        navigate('/theme/HomeList/HomeCard4List')
      })
    }
  }

  return (
    <>
      <div className="container">
        <h1>Home List Card4 Edit Page</h1>
        <div className="row">
          <div className="col-lg-12 ">
          <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                   Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter process"
                  {...register('blog_date', { required: true })}
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Image"
                  {...register('blog_img', { required: true })}
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
                  {...register('blog_title', { required: true })}
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
                  {...register('blog_description', { required: true })}
                ></textarea>
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditHomeCard4List
