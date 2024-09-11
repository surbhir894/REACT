import React, { Component } from 'react'

class HobbyRadioSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHobby: '',
        }
    }

        update = (event) => {
            this.setState({
                selectedHobby: event.target.value,

            })
        }
    

    render() {
        return (
         <>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-6 bg-info text-white'>
                            <div className='form-check'>
                                <input
                                    onChange={this.update}
                                    className='form-check-input'
                                    type="radio"
                                    name="hobby"
                                    value="Eating"
                                    id="eating"
                                    checked={
                                        this.state.selectedHobby === 'Eating'
                                    }/>
                                <label className='form-check-label' htmlFor="eating">
                                    Eating
                                </label>
                            </div>

                            <div className='form-check'>
                                <input
                                    onChange={this.update}
                                    className='form-check-input'
                                    type='radio'
                                    name='hobby'
                                    value='Drinking'
                                    id='drinking'
                                    checked={this.state.selectedHobby === 'Drinking'}
                                />

                                <label className='form-check-label' htmlFor='drinking'>
                                    Drinking</label>
                            </div>

                            <div className='form-check'>
                                <input
                                    onChange={this.update}
                                    className='form-check-input'
                                    type='radio'
                                    name='hobby'
                                    value='Sleeping'
                                    id='sleeping'
                                    checked={
                                        this.state.selectedHobby === 'Sleeping'}

                                     />

                                <label className='form-check-label' htmlFor='sleeping'>
                                    Sleeping
                                </label>
                                
                            </div>
                        </div>

                        <div className='col-md-3'>
              {this.state.selectedHobby === 'Eating' && (
                <div className='card bg-danger text-white'>
                  <h1>Eating</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              )}

              {this.state.selectedHobby === 'Drinking' && (
                <div className='card bg-white text-black'>
                  <h1>Drinking</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              )}

              {this.state.selectedHobby === 'Sleeping' && (
                <div className='card bg-success text-white'>
                  <h1>Sleeping</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HobbyRadioSelector;
