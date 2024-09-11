import React, { Component } from 'react';


class UserName extends Component {
constructor(props)
{
    super(props)
    this.state={
        name:''
    }
}
update=(event)=>
{
   
    this.setState(
        {
            name:event.target.value
        }
    )
    
}

  render() {
    return (
        <>
    
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header bg-dark text-white'>
              <h2>UserName App</h2>
            </div>
            <div className='card-body bg-light' >
              <div className='from-group'>
                <input onChange={this.update}
                value ={this.state.name} 
                type='text' placeholder='uername' className='form-control'>
                </input>
              </div>
            </div>
            <div className='card-footer bg-warning'>
               <h3>{this.state.name}</h3>

            </div>
          </div>
        </div>
      </div>
    </div>

    </>
    )
  }
}

export default UserName;
