import { useState } from "react";

//props- AddTodo
const AddTodo = (props) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.addTodo(value);
        setValue('');
    }


    return (
        <div className="container">
            <form onSubmit={onSubmit} >
                <dir className="input-group mb-3">
                    <input type="text" className="form-control"
                        placeholder="Add your todo here"
                        onChange={onChange}
                        value={value}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">
                            Add Todos
                        </button>
                    </div>
                </dir>
            </form>
        </div>
    );

}

export default AddTodo;