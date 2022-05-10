import React, { useState } from "react";
import styles from './todo.css'



const ToDo = () => {
    let [state, setState] = useState({
        todo: ['1', '2', '3']
    })
    let input = ''

    const handleInput = (elem) => {
        input = elem.target.value

    }

    const handleBtn = (e) => {
        e.preventDefault()
        const elem = state.todo
        elem.push(input)
        setState(
            {
                todo: elem
            }
        )

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

    }
    
    return (
        <>
        <form action="#" onSubmit={handleBtn} className={styles.form}>
            <input onChange={handleInput} type="text" className={styles.input} />
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
        </>
    )
}

export default ToDo