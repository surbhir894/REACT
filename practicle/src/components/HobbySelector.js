import React, { Component } from 'react'

class HobbySelector extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            selector:
            {
                Eating: false,
                Drinking: false,
                Sleeping: false
            }
        }
    }
    update = (event) => {
        if (event.target.name==="Eating") {
            this.setState(
                {
                    selector:
                    {
                        ...this.state.selector,
                        [event.target.name]: event.target.checked
                    }
                }
            )
        }
        if (event.target.name==="Drinking") {
            this.setState(
                {
                    selector:
                    {
                        ...this.state.selector,
                        [event.target.name]: event.target.checked
                    }
                }
            )
        }
        if (event.target.name==="Sleeping") {
            this.setState(
                {
                    selector:
                    {
                        ...this.state.selector,
                        [event.target.name]: event.target.checked
                    }
                }
            )
        }
    }
    render() {
        return (
            <>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-6 bg-info text-white'>
                            <div class="form-check">
                                <input
                                    onChange={this.update}
                                    class="form-check-input" type="checkbox" name='Eating' checked={this.state.selector.Eating}
                                    id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Eating
                                </label>
                            </div>

                            <div class="form-check">
                                <input
                                    onChange={this.update}
                                    class="form-check-input" type="checkbox"   name='Drinking' checked={this.state.selector.Drinking} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Drinking
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name='Sleeping' checked={this.state.selector.Sleeping} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Sleeping
                                </label>
                            </div>

                        </div>
                        <div className='col-md-3'>
                            {
                                this.state.selector.Eating
                                &&

                                <React.Fragment>
                                    <div className='card bg-danger text-white'>
                                        <h1>Eating</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </React.Fragment>
                            }

                            {this.state.selector.Drinking &&
                                <React.Fragment>
                                    <div className='card bg-white text-black'>
                                        <h1>Drinking</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </React.Fragment>

                            }
                            {
                                this.state.selector.Sleeping &&

                                <React.Fragment>
                                    <div className='card bg-success text-white'>
                                        <h1>Sleeping</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default HobbySelector;