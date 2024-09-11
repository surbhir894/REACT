import React, { Component } from 'react'

class Autocard extends Component {
    constructor(props){
        super(props)
        this.state=
        {
            islogin:false,

        }
    }
    login=()=>
    {
        this.setState(
            {
                islogin:true
            }
        )
    }
    logout=()=>
    {
      this.setState(
        {
            islogin:false
        }
      )
    }
    
  render() {
    return (
    <>
    <div className='container mt-3'>
        <div className='row'>
            <div className='col md-8'>
                <div className='card'>
                    <div className='card-header bg-info'>
                        <h1>AuthCard</h1>
                    </div>
                    <div className='card-body bg-light'>
                        { 
                          this.state.islogin?
                           <React.Fragment>
                            <div>
                                <h1> Virat Kohli</h1>
                                <p>Virat Kohli is a Criketer .His wife name is Anuska Sharma ,Who is a famous Bollywood Actress.</p>
                            </div>
                            </React.Fragment>   
                            : 
                            <React.Fragment>
                            <div>
                            <h1>Rohit Sharma</h1> 
                            <p>Rohit Sharma is also a famous criketer.Recently Rohit Sharma was in lime light becoz of World Cup 2024.</p>   
                            </div>    
                            </React.Fragment>    
                      }               
                    </div>
                    <div className='card-footer bg-dark text-white'>
                        {this.state.islogin? 
                         <button onClick={this.logout} className='btn btn-sm btn-danger'>logout</button>
                        :
                        <button onClick={this.login} className='btn btn-sm btn-success m-3'>login</button>
                        }
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    )
  }
}

export default Autocard;
