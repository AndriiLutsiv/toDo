const {
    combineReducers,
    createStore
} = require("redux");
const {
    default: toDoReducer
} = require("./toDoReducer");

const reducers = combineReducers({
    toDo: toDoReducer,
});
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;
export default store;
