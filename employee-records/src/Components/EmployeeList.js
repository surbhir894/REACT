import React,{useState ,useEffect} from 'react';
import axios from 'axios';
const EmployeeList =() =>{

const[employees ,setEmployees]=useState([]);
const[loading,setLoading] =useState(true);
const [error ,setError]= useState(null);

useEffect(()=>{
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response=>{
        setEmployees(response.data);
        setLoading(false);

    })
    .catch(error=>{
        setError('error fetching data')
        setLoading(false);
    })
},[])
return(
 <div className='container mt-3'>
 <h1> EMPLOYEE LIST</h1>
 {loading &&<p>Loading...</p>}
 {error && <p>{error}</p>}
 {!loading &&!error&&
 (
    <table className='table table-bordered'>
        <thead className='thead-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>COMPANY</th>
            </tr>
        </thead>
        <tbody>
            {employees.map(employee =>(
<tr key={employee.id}>
<td>{employee.id}</td>
<td>{employee.name}</td>
<td>{employee.email}</td>
<td>{employee.phone}</td>
<td>{employee.company.name}</td>
</tr>

            ))}
        </tbody>
    </table>
 )}
 </div>
)
 
 } 
 
export default EmployeeList;