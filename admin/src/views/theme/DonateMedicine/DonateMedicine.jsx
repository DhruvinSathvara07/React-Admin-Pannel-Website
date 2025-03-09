import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const DonateMedicine = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data, 'data')
    axios.post('http://localhost:3001/heading', data).then((response) => {
      console.log(response.data, 'This is data')
      alert('data Successfully added')
      reset()
    })
  }

  return (
    <>
      <div className="container my-5">
        <h1>DonateMedicine Title</h1>

        <div className="row">
          <div className="col-lg-12 ">
            <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('herotitle', { required: true })}
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
                  {...register('heropara', { required: true })}
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

export default DonateMedicine
