import React, { useState } from "react"

const AddTodo = ( {dispatch} ) => {
const [data,setData] = useState('');

    function sub(e){
        e.preventDefault(); 
        if(data != ''){

            dispatch({type:'add',data,id:Date.now()})
            setData('');
        }
    }

    return (
        <>
        <form id='todo-form' onSubmit={sub}>
        <input id="todo-input" value={data} onChange={e => setData(e.target.value)}  placeholder="title"/>
        <button type="submit" >Create</button>

        </form>
        </>
    )
}

export { AddTodo }