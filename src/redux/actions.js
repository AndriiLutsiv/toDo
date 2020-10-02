import * as TYPES from './type';
export const addTaskActionCreator = (newTask) => {
    return {
        type: TYPES.ADD_TASK,
        newTask: newTask
    };
};

export const remooveTaskActionCreator = (taskId) => {
    return {
        type: TYPES.REMOVE_TASK,
        taskId: taskId,
    };
};

export const toggleMarkActionCreator = (taskId) => {
    return {
        type: TYPES.TOGGLE_MARK,
        taskId: taskId
    };
};

export const userTypingActionCreator = (text) => {
    return {
        type: TYPES.USER_TYPING,
        text: text
    };
};