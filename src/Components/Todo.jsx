import React, { useState } from "react";
import styles from './Todo.module.css'



const ToDo = (props) => {
    let [state, setState] = useState(props.state)
    let [style, setStyle] = useState({
        transform: 'scale(1)'
    })
    /*let [state, setState] = useState({
        todo: ['1', '2', '3']
    })*/
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

        e.target.reset()
    }
    const handleDelete = (index) => {
        //Надо добавить таймер срабатывания + добавить срабатывание только на нажимаемом объекте
        //setStyle({
        //    transform: 'scale(0.5)'
        //})
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
        <div className={styles.ToDo}>
            <form action="#" onSubmit={handleBtn} className={styles.form}>
                <input onChange={handleInput} type="text" className={styles.input} placeholder = 'Add ToDo' />
                <button type="submit" className={styles.btn}>Add</button>
            </form>

            <ul className={styles.todoList}>
                {
                state.todo.map((e, index) => {
                    return(
                        <li /*style={style}*/ onClick={() => handleDelete(index)} key={index} className={styles.todoItem}>
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