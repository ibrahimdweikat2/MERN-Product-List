
const Data=(state=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
        return action.payload;
        case 'SEARCH':
        return action.payload;
        default:
        return state;
    }
}


export default Data;