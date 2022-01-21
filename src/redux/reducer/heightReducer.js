const initialState={
    height:window.innerHeight
}

const heightReducer=(state=initialState,action)=>{
    switch(action.type){
        case "height":
            return {...state,height:action.payload}
            default:
                return state
    }

}
export default heightReducer