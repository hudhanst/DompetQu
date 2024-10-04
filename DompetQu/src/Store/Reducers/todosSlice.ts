import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as SQLite from 'expo-sqlite'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state, action) {
            console.log(1)
        },
        todoToggled(state, action) {
            console.log(1)
        },
        LoadDB(state) {
            console.log(111111111111)
        }
    }
})


export const { todoAdded, todoToggled, LoadDB } = todosSlice.actions
export default todosSlice.reducer