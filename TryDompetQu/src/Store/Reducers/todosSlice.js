import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as SQLite from 'expo-sqlite';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        },
        todoToggled(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        LoadDB(state) {
            console.log(111111111111)
        }
    }
})

export const LoadUser = createAsyncThunk(
    'content/fetchContent',
    async () => {
        console.log(2)
        const db = await SQLite.openDatabaseAsync('myDabaseName.db');
        // `execAsync()` is useful for bulk queries when you want to execute altogether.
        // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
        INSERT INTO test (value, intValue) VALUES ('test1', 123);
        INSERT INTO test (value, intValue) VALUES ('test2', 456);
        INSERT INTO test (value, intValue) VALUES ('test3', 789);
        `);

        // `runAsync()` is useful when you want to execute some write operations.
        const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
        console.log(result.lastInsertRowId, result.changes);
        await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
        await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
        await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

        // `getFirstAsync()` is useful when you want to get a single row from the database.
        const firstRow = await db.getFirstAsync('SELECT * FROM test');
        console.log(firstRow.id, firstRow.value, firstRow.intValue);

        // `getAllAsync()` is useful when you want to get all results as an array of objects.
        const allRows = await db.getAllAsync('SELECT * FROM test');
        for (const row of allRows) {
            console.log(row.id, row.value, row.intValue);
        }

        // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
        for await (const row of db.getEachAsync('SELECT * FROM test')) {
            console.log(row.id, row.value, row.intValue);
        }
        console.log(3)
        return null
    }
)
export const LoadUserData = createAsyncThunk(
    'content/LoadUserData',
    async () => {
        console.log('---------------------------')
        const db = await SQLite.openDatabaseAsync('myDabaseName.db');

        const allRows = await db.getAllAsync('SELECT * FROM test');
        for (const row of allRows) {
            console.log(row.id, row.value, row.intValue);
        }


        return null
    }
)

export const { todoAdded, todoToggled, LoadDB } = todosSlice.actions
export default todosSlice.reducer