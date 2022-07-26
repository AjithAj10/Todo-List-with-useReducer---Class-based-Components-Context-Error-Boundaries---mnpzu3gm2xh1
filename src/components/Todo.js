import React from 'react';
const Todo = ({state,dispatch}) => {

    return (
        <>
        {
            state.map(e => {
                if(e.data != null){ 
                return  <div key={e.id} className='todo'><div className='todo-title'>
                        {e.data}
                    </div>
                    <button className='todo-delete' id={e.id} onClick={() => dispatch({type:'delete',id:e.id})}>Delete</button>
                 </div>
                }
            })
           
        }
        </>
    )
}


export { Todo }

