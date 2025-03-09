import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const HomeCard1 = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if (confirm("data Successfully added")) {
      axios.post('http://localhost:3001/cardData', data).then((response) => {
        console.log(response.data, 'This is data')
        reset()
      })
    }
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-5">Card 1 title</h1>
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
                  Title Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  {...register('description', { required: true })}
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

export default HomeCard1
