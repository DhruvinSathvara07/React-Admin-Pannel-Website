import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const EditDonateCard1 = () => {
  const { register, handleSubmit, reset } = useForm()

  const { id } = useParams()
  const navigate = useNavigate()

  const showServicesData = () => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
      console.log(response.data)
      reset(response.data)
    })
  }

  useEffect(() => {
    showServicesData()
  }, [])

  const onSubmit = async (data) => {
    if (confirm('data Successfully added')) {
      await axios.put(`http://localhost:3001/posts/${id}`, data).then((response) => {
        console.log(response.data, 'This is data')
        navigate('/theme/DonateMedicineList/DonateCard1List')
      })
    }
  }

  return (
    <>
      <div className="container">
        <h1>Donate List Edit Page</h1>
        <div className="row">
          <div className="col-lg-12 ">
            <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {' '}
                  image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  {...register('Cardimg', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  {...register('CardDate', { required: true })}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {' '}
                  DonateMedicine Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter title"
                  {...register('CardHeading', { required: true })}
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
                  {...register('Cardpargraph', { required: true })}
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

export default EditDonateCard1
