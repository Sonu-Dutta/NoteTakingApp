import React from 'react'
import Delete from '@material-ui/icons/Delete'
import { Button } from '@material-ui/core'

export default function Note(props) {

  const deleteNote=()=>{
    props.deleteItem(props.id)
  }
  return (
    <div className='note alert alert-danger m-2 text-capitalize col-sm-12 col-md-5 col-lg-3 d-flex flex-column align-items-start' style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
        <h1 >{props.title}</h1>
        <p>{props.content} </p>
        <Button className='col-sm bg-transparent rounded-circle' onClick={deleteNote} style={{width:'35px', height:'53px' ,transform:"scale(0.8)"}}>
          <Delete className='text-danger fs-1'/>
        </Button>

    </div>
  )
}
