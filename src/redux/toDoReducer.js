import * as TYPES from './type';
const initialState = {
    tasks: [],     //tasks addeed by user will be set in array
    usersInputValue: ''     
}
const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.newTask]
            };
        case TYPES.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    return task.id !== action.taskId
                })
            };
        case TYPES.TOGGLE_MARK:              //allows user to toggle task as done or as active
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.taskId) {
                        return {
                            ...item,
                            active: !item.active
                        }
                    } else {
                        return item;
                    }
                })
            };
        case TYPES.USER_TYPING:
            return {
                ...state,
                usersInputValue: action.text
            }
            default:
                return state;
    }
}
export default toDoReducer;