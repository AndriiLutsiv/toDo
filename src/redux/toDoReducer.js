import * as TYPES from './type';
const initialState = {
    tasks: [{
            id: 1,
            task: "to do something1",
            active: true
        },
        {
            id: 2,
            task: "to make something2",
            active: true
        },
        {
            id: 3,
            task: "fall back to the shelter",
            active: true
        },
        {
            id: 4,
            task: "retreat under the enemies pressure",
            active: true
        },
        {
            id: 5,
            task: "did something2",
            active: true
        },
        {
            id: 6,
            task: "zelan zelandos fon de retrigues",
            active: true
        },
        {
            id: 7,
            task: "conosiendo Otras Personas",
            active: true
        },
        {
            id: 8,
            task: "feed the parrot",
            active: true
        },
        {
            id: 9,
            task: "per a ad astra",
            active: true
        },
        {
            id: 10,
            task: "per as ad astra",
            active: true
        },
        {
            id: 11,
            task: "per asp ad astra",
            active: true
        },
        {
            id: 12,
            task: "per aspera ad astra",
            active: true
        },
    ],
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
        case TYPES.TOGGLE_MARK:
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