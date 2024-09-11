import React, { Component } from 'react'
import { Axios } from 'axios'

class GitHubApi extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            username: "",
            profile: null
        }

    }
 update=(e)=>
 {
    this.setState(
        {
            ...this.state,
            data:e.target.username
        }
    )
 }
 searchProfile=()=>
 {
    let url='https://api.github.com/users/${this.state.username}/?client_id=${clientid}$client_secret=${clienSecret)';
   Axios.get(url.then((res)=>
   {
    this.setState(
        {
            ...this.state,
            profile:res.data
        }
    )

   }).catch((error)=>
{
  console.log(error)
})
)
 }

 submitValue=(e)=>
    {
    e.preventDefault()
    this.searchProfile()
    
 }
    
    render() {
        return (
            <>
            <pre>{JSON.stringify(this.state)}</pre>
                <div className='container mt-3'>
                    <div className='row' >
                        <div className='col-md-10'>
                         <div className='card'>
                         <div className='card-header bg-secondary text-white'>
                                <h2>GitHubUser Search</h2>
                            </div>
                            <div className='card-body'>
                                <form className='d-flex'onSubmit={this.submitValue}>
                                    <div className='form-group m-1'>
                                        <input 
                                        onChange={this.update}
                                        value={this.state.username}
                                        type='text' placeholder='username' size={50}>
                                        </input>
                                    </div>
                                    <div className='m-1'>
                                        <input className='btn btn-sm btn-danger' type='submit' value='submit'>
                                        </input>
                                    </div>
                                </form>
                            </div>

                         </div>


                        </div>


                    </div>
                </div>

            </>
        )
    }
}
export default GitHubApi;
