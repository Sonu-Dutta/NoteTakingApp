import React from 'react'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import { useState } from 'react'

export default function CreateNote(props) {
    const [expand, setExpand]=useState(false)
    const [note, setNote]=useState({
        title:'',
        content:''
    })

    const inputEvent=(event)=>{
        const {name, value}=event.target
        setNote((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const addEvent=()=>{
        props.passNote(note)
        setNote({
            title:'',
            content:''
        })
    }

    const expandIt=()=>{
        setExpand(true)
    }
    const back=()=>{
        setExpand(false)
    }
  return (
    <>
    <div className='main-note col-sm-10 col-md-4 col-lg-3 alert alert-secondary d-flex m-auto mt-2 mb-3'  onDoubleClick={back} style={{width:"20.3rem", boxShadow:"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"}}>
<form className='form-group d-flex flex-column gap-2 position-relative' >
{   expand?
    <input className='form-control fs-4' type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />:null}
    <textarea className='form-control ' style={{width:"18rem"}} rows='3' name='content' value={note.content} onChange={inputEvent} placeholder='Write a note...' onClick={expandIt}/>
    {   expand?    <Button onClick={addEvent} className=' text-white rounded-circle w-25 h-50 position-absolute' style={{transform:'scale(0.6)', backgroundImage: "linear-gradient(to right, #f2709c, #ff9472)",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", bottom:"-2.5rem",right:"-1.5rem"}}> <Add className='fs-1'/> </Button>:null}
</form>
    </div>
    </>
  ) 
}
