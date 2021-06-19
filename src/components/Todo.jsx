import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, editItem, deleteItem, changeStatus } from '../actions/TodoAction'

export const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState({
        taskName: '',
        deadline: 0,
    });
    
    const onChangeText = (event) => {
        if(event.target.name === "task") {
            setValue({...value, taskName: event.target.value })
        } else {
            setValue({...value, deadline: Number(event.target.value) })
        }
    }

    const onSubmitAddItem = () => {
        dispatch(addItem(value));
    }

    return (
        <div className="header">
            <h3>Todo List by Redux-Hook</h3>
            <div className="headerContainer">
            <div className="inputContainer">
                <input type="text" name="task" placeholder="Task..." onChange={(event) => onChangeText(event)}/>
                <input type="number" name="deadline" placeholder="Deadline (in Days)..."  onChange={(event) => onChangeText(event)} />  
            </div>
            <button onClick={onSubmitAddItem}>Add Task</button>
            </div>
        </div>
    )
}

export const Todo = (props) => {
    const dispatch = useDispatch();
    const todoList  = useSelector(state => state.todo.list)

    const deleteBtn = (key) => {
        dispatch(deleteItem(key));
    }

    const onChangeStatus = (key) => {
        dispatch(changeStatus(key));
    }

    const onChangeText = (event, key) => {
        dispatch(editItem({key, event}));
    }

    return (
        <>
            <div className="todoList">
                <div className="task">
                    <div className="content">
                        {
                            todoList.map(task => (
                                task.edit
                                ? <div className="itemContent" key={task.key}>
                                    <span><input type="text" name="task" placeholder="Task..." defaultValue={task.taskName} onChange={(event) => onChangeText(event, task.key)}/></span>
                                    <span><input type="number" name="deadline" placeholder="Deadline (in Days)..." defaultValue={task.deadline} onChange={(event) => onChangeText(event, task.key)}/></span>
                                    <button onClick={() => onChangeStatus(task.key)}>
                                        Ok
                                    </button>
                                </div>
                                : <div className="itemContent" key={task.key}>
                                    <span>{task.taskName}</span>
                                    <span>{task.deadline}</span>
                                    <button onClick={() => deleteBtn(task.key)}>
                                        X
                                    </button>
                                    <button onClick={() => onChangeStatus(task.key)}>
                                        edit
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>     
    )
}
