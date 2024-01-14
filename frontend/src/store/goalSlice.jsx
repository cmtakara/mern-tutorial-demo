// https://medium.com/@ishdagnesh/how-to-use-react-vite-js-with-redux-0aaf60835052
// things to be defined in here:
// initial state
// name - the name of the reducer 
// reducers - the functions that will affect the initialState.goals

// initial state
// goals matches up better than to do - but there isn't technically a complete/incomplete - that would be easy to update, though
// name of the reducer is goals
const initialState = {
    goals: [
        { id: 1, text: "finish full stack tutorial"},
        { id: 2, text: "finish full stack project"},
        { id: 3, text: "create a full stack project with more complex models"},
    ]
};

export const goalSlice = createSlice({

})

export const { } = goalSlice.actions;

export default todoSlice.reducer;