import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './Reducers/todosSlice'

const Store = configureStore({
    reducer: {
        todos: todosReducer,
        // products: productsSlice.reducer,
    },
})

export default Store