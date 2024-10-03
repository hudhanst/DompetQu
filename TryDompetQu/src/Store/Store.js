// import { createStore, applyMiddleware, compose } from 'redux'

// import RootReducer from './Reducers/Root.Reducer'

// const initialState = {}
// const middleware = []

// const Store = createStore(RootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? isDev() && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f))

// import { configureStore } from '@reduxjs/toolkit'

// import todosReducer from './Reducers/todosSlice'

// export const Store = configureStore({
//     reducer: {
//         todos: todosReducer
//     }
// })

import { configureStore } from '@reduxjs/toolkit'
// import { productsSlice } from './productsSlice'
import todosReducer from './Reducers/todosSlice'

const Store = configureStore({
    reducer: {
        todos: todosReducer,
        // products: productsSlice.reducer,
    },
})

export default Store