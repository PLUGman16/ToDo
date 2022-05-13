import React, { useEffect, useState } from "react";
import styles from './Todo.module.css'


const ToDo = (props) => {
    let [state, setState] = useState(
        {
            todo: JSON.parse(localStorage.getItem('state')) || props.state.todo
        }
    )
    let input = ''
    const handleInput = (elem) => {
        input = elem.target.value

    }

    const handleBtn = (e) => {
        e.preventDefault()
        const elem = state.todo
        if(input.length > 0) {
            elem.push(input)
            setState(
                {
                    todo: elem
                }
            )
        }

        localStorage.setItem('state', JSON.stringify(state.todo))

        e.target.reset()
    }
    const handleDelete = (index) => {
        const elem = state.todo
        elem.splice(index, 1)
        setState(
            {
                todo: elem
            }
        )

        localStorage.setItem('state', JSON.stringify(elem))
    }
    
    return (
        <>
        <div className={styles.ToDo}>
            <form action="#" onSubmit={handleBtn} className={styles.form}>
                <input onChange={handleInput} type="text" className={styles.input} placeholder = 'Add ToDo' />
                <button type="submit" className={styles.btn}>Add</button>
            </form>

            <ul className={styles.todoList}>
                {
                state.todo.map((e, index) => {
                    return(
                        <li onClick={() => handleDelete(index)} key={index} className={styles.todoItem}>
                            {e}
                        </li>
                    )
                })
                }
            </ul>
        </div>
        </>
    )
}

export default ToDo