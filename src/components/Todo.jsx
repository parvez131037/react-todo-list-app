
/*
<Todo key={index}
                        number={index + 1}
                        handleDone={handleDone}
                        todo={item}
                        delete={onDelete}
                    />
*/
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Todo = (props) => {

    const [show, setShow] = useState(false);
    const [value, setValue] = useState(props.todo.value);

    const done = () => {
        setShow(false);
        props.editTodo({
            id: props.todo.id, // id
            value: value // new value
        });
    }

    const cancel = () => {
        setShow(false);
        setValue(props.todo.value);
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const showModal = () => {
        setShow(true);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    {props.number}
                </div>

                <div className="col-md-1">
                    <input type="checkbox"
                        onChange={() => props.handleDone(props.todo)}
                        checked={props.todo.isDone}
                    />
                </div>
                <div className="col-md-6"
                    style={{ textDecoration: props.todo.isDone ? 'line-through' : '' }}
                >
                    {value}
                </div>
                <div className="col-md-2">
                    <button
                        onClick={showModal}
                        className="btn btn-warning">
                        Edit
                    </button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger"
                        onClick={() => props.delete(props.todo)}
                    >
                        Delete
                    </button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header>Edit Todo Value</Modal.Header>
                <Modal.Body>
                    <input type="text" className='form-control'
                        onChange={onChange}
                        placeholder={value}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary'
                        onClick={cancel}
                    >Cancel</button>
                    <button className="btn btn-success"
                        onClick={done}
                    >Done</button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}


export default Todo;