const filterInitialContent = {
    byPriority:"",
    priority:true,
    bysort:"",
    byLable:""
}

const filterNoteContentReducer = (state, action)=>{
    switch (action.type) {
        case "LOW":
            return{...state, byPriority:action.payload}
        case "MEDIUM":
            return{...state, byPriority:action.payload}
        case "HIGH":
            return{...state, byPriority:action.payload}
        case "BUSSINESS":
            return{...state, byLable:action.payload}
        case "EDUCATION":
            return{...state, byLable:action.payload}
        case "HEALTH":
            return{...state, byLable:action.payload}
        case "BIRTHDAY":
            return{...state, byLable:action.payload}
        case "WORK":
            return{...state, byLable:action.payload}
        case "OTHERS":
            return{...state, byLable:action.payload}
    }
}

export{filterInitialContent, filterNoteContentReducer}