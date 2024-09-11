import React, { Component } from 'react'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state =
    {
      user:
      {
        name: "",
        password: "",
        email: "",
        Designation: "",
        termsAccepted:""
      }
    }
  }
  update = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        user:
        {
          ...this.state.user,
          [event.target.name]: event.target.value
        }
      }
    )
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      }
    }))
  }
  handleCheckboxChange=(event)=>
  {
    const{name,checked}=event.target;
    this.setState((prevState)=>({
      user:{
        ...prevState.user,
        [name]:checked,
      }
    }))
  }
  formSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.user)
  }

  render() {
    return (
      <>

        <section className='p-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card'>
                  <div className='card-header bg-warning text-white'>
                  <p className='h4 text-center'>Registeration Form</p>
                  </div>
                  <div className='card-body'>
                    <form onSubmit={this.formSubmit}>
                      <div className='form-froup mt-3'>
                        <input
                          value={this.state.user.name}
                          name='name'
                          onChange={this.update}
                          type='text' className='form-control' placeholder='Username'>
                        </input>

                      </div>
                      <div className='form-group mt-3'>
                        <input
                          value={this.state.user.email}
                          name='email'
                          onChange={this.update}
                          type='email' className='form-control' placeholder='Email' />

                      </div>
                      <div className='form-group mt-3'>
                        <input
                          value={this.state.user.password}
                          name='password'
                          onChange={this.update}
                          type='password' className='form-control' placeholder='Password' />


                      </div>
                      <div className='form-group mt-3'>
                        <select
                          value={this.state.user.Designation}
                          name='Designation'
                          onChange={this.update}
                          className='form-control'>
                          <option value=''>Select Designation</option>
                          <option value='Developer'>Developer</option>
                          <option value='Designer'>Designer</option>
                          <option value='Manager'>Manager</option>
                          <option value="Tester">Tester</option>
                        </select>
             
                      </div>

                      <div className='form-group mt-3'>
                        <div className='form-check form-check-inline'>
                        <input
                        type='checkbox'
                        className='form-check-input'
                        id='termsAndCondition'
                        name='termsAccepted'
                        checked={this.state.user.termsAceepted}
                        onChange={this.handleCheckboxChange}
                        ></input>
                        <label className='form-check-label' htmlFor="termsAndCondition">
                          I agree to the terms and condition
                        </label>
                        </div>
                      </div>
                      <div className='form-group mt-3 d-flex justify-content-center'>
                        <input type='submit' value="Register" className='btn btn-warning text-white ' />
                      </div>


                    </form>


                  </div>


                </div>




              </div>



            </div>

          </div>




        </section>


      </>
    )
  }
}
export default Register;
