import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const EditMission = () => {
  const { register, handleSubmit, reset } = useForm()

  const { id } = useParams()
  const navigate = useNavigate()

  const showServicesData = () => {
    axios.get(`http://localhost:3001/About/${id}`).then((response) => {
      console.log(response.data)
      reset(response.data)
    })
  }

  useEffect(() => {
    showServicesData()
  }, [])

  const onSubmit = async (data) => {
    if (confirm('data Successfully added')) {
      await axios.put(`http://localhost:3001/About/${id}`, data).then((response) => {
        console.log(response.data, 'This is data')
        navigate('/theme/AboutList/MissionList')
      })
    }
  }

  return (
    <>
      <div className="container">
        <h1>About card List Edit Page</h1>
        <div className="row">
          <div className="col-lg-12 ">
            <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {' '}
                  Image{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter image"
                  {...register('aboutimg', { required: true })}
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {' '}
                  subheading{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="subheading"
                  {...register('subheading', { required: true })}
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {' '}
                  mission{' '}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="mission"
                  {...register('missionheading', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  {...register('ourmissionpara', { required: true })}
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

export default EditMission
