import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos : [{id:1 , text :"Hello World"}]
}

export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers :{
        addTodo :(state,action) =>{
            const todo = {
                id :nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
              todo.text = text;
            }
          },
          toggleComplete: (state, action) => {
            const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
            if (todoIndex !== -1) {
              state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
            }
          },
          
        // toggleComplete: (state, action) => {
        //     const todo = state.todos.findIndex((todo) => todo.id === action.payload);
        //     if (todo) {
        //       todo.completed = !todo.completed;
        //     }
        //   },
    }
})

export const {addTodo,removeTodo,editTodo,toggleComplete} =todoSlice.actions

export default todoSlice.reducer