const todoReducer = (state, action) => {
   
    switch (action.type) {
     
        case 'add':
            return [...state,action];
        case 'delete':
            return state.filter((t) => t.id !== action.id )
        default:
            return  state;
    }
}

export { todoReducer }