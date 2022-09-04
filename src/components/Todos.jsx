import { useState } from "react";
import Todo from './Todo';
import AddTodo from "./AddTodo";


const Todos = () => {

    const [todos, setTodos] = useState(
        localStorage.getItem('todos') ?
            JSON.parse(localStorage.getItem('todos')) :
            []
    );

    const handleDone = todo => {
        const todosarr = [...todos];
        todosarr.map(item => {
            if (item.id === todo.id) {
                item.isDone = !item.isDone;
            }
            return item;
        })

        updateState(todosarr);
    }

    const updateState = (todosarr) => {
        setTodos(todosarr);

        localStorage.setItem("todos",
            JSON.stringify(todosarr)
        );
    }

    const onDelete = todo => {
        const todosarr = todos.filter(item => item.id != todo.id);

        updateState(todosarr);

    }

    const addNewTodo = todo => {
        if (todo) {
            const todoarr = [...todos];
            todoarr.push({
                id: new Date().getTime(),
                value: todo,
                isDone: false
            });
            updateState(todoarr);

        }
    }

    const editTodo = (todo) => {
        const todosarr = [...todos];
        todosarr.map(item => {
            if (item.id === todo.id) {
                item.value = todo.value;
            }
            return item;
        })

        updateState(todosarr);

    }

    return (
        <div>
            {
                todos.length == 0 ? <h1>No todos</h1> :
                    todos.map((item, index) =>
                        <Todo key={index}
                            number={index + 1}
                            handleDone={handleDone}
                            todo={item}
                            editTodo={editTodo}
                            delete={onDelete}
                        />
                    )
            }
            <AddTodo addTodo={addNewTodo} />
        </div>

    );



}


export default Todos;