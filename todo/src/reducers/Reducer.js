export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_MARKED = "CLEAR_MARKED";

export const initialStateObject = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about redux',
        completed: false,
        id: 3892987566
    }
];

export function reducer(state, action) {
    switch(action.type){
        case ADD_TODO: {
            const newInitialStateObject ={
                completed: false,
                id: Date.now(),
                item: action.payload.item
            }
            return [...state, newInitialStateObject]
        }
        case TOGGLE_TODO: {
            const markedTodo = state.find(todo => todo.id === action.payload.id)
            markedTodo.completed = !markedTodo.completed

            const unMarked = state.filter(todo => todo.id !== action.payload.id)
            return [ ...unMarked, markedTodo ]
        }
        case CLEAR_MARKED : {
            const unMarked =  state.filter(todo => todo.completed !== true)
            return [...unMarked]
        }
        default: return state;
    }
}