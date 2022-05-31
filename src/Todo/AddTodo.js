import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'


function AddTodo ({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    } 

    return (
        <Form className='w-75' onSubmit={submitHandler}> 
            <Form.Group controlId="exampleForm.ControlInput1" >
                <Form.Label><h2>Enter Todos</h2></Form.Label>
                <Form.Control className='my-3' value={value} 
                    onChange={event=>setValue(event.target.value)} />
                <Button type='submit' variant="primary">Add Todo</Button>
            </Form.Group>
        </Form>
    )
}

AddTodo.prototype= {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo