import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/baseUrl';

function Hometable({displayData,removeUser}) {
  console.log(displayData);
  return (
    <>
     <Table striped bordered hover size="sm mt-3 ">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          displayData.length>0?displayData.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.fname} {item.lname}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td><span className={item.status==="Active"?"btn btn-primary":"btn btn-danger"}>{item.status}</span></td>
            <td><img className='d-flex align-items-center' style={{width:'70px',height:'70px',borderRadius:'50%'}} src={`${BASE_URL}/Uploads/${item.profile}`} alt="" /></td>
            <td>
              {/* view */}
              <Link to={`/view/${item._id}`} ><span className='btn' ><i className="fa-solid fa-eye" style={{color:'white'}}></i></span></Link>
              {/* edit */}
              <Link to={`/edit/${item._id}`} ><span className='btn' ><i className="fa-solid fa-pen" style={{color:'yellow'}}></i></span></Link>
              {/* delete */} 
              <span className='btn' ><i onClick={()=>removeUser(item._id)} className="fa-solid fa-trash" style={{color:'red'}}></i></span>
            </td>
          </tr>

  )):
          <tr className='mt-5 w-100 text-danger'>
            Nothing To Display
          </tr>
        }
      </tbody>
    </Table>
    </>
  )
}

export default Hometable