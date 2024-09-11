import React, { Component } from 'react'

class StudentBoard extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            student:
                [
                    {
                        Id: "101",
                        Name: "Keshav",
                        Age: 22,
                        Course: "MCA"
                    },
                    {
                        Id: "102",
                        Name: "Surbhi",
                        Age: 22,
                        Course: "MCA"
                    },
                    {
                        Id: "101",
                        Name: "Anushka",
                        Age: 22,
                        Course: "MCA"
                    },
                    {
                        Id: "101",
                        Name: "Yashika",
                        Age: 22,
                        Course: "MCA"
                    },
                ]

        }
    }


    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='card'>

                                <table class="table table-striped  table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Course</th>
                                        </tr>
                                    </thead>
                                    <tbody> {
                                        this.state.student.map((item)  => {
                                            return (
                                                <tr>
                                                    <td>
                                                        {item.Id}
                                                    </td>
                                                    <td>
                                                        {item.Name}
                                                    </td>
                                                    <td>
                                                        {item.Age}
                                                    </td>
                                                    <td>
                                                        {item.Course}
                                                    </td>
                                                </tr>
                                            )
                                        }

                                        )}
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}
export default StudentBoard;
