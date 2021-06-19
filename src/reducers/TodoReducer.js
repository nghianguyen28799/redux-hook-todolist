import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, CHANGE_STATUS } from "../actions/type";

const initialState = {
    list: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: 
            return { 
                ...state,
                list: state.list.concat({
                    taskName: action.payload.taskName,
                    deadline: action.payload.deadline,
                    edit: false,
                    key: Math.random()
                })
            }

        case EDIT_ITEM:
            let data = [];
            const { event } = action.payload
            state.list.map((item) => {
                data.push(item.key !== action.payload.key ? item : event.target.name === "task" ? {...item, taskName: event.target.value} : {...item, deadline: event.target.value})
            })
            return {list: data}
            
        case CHANGE_STATUS:
            var dataOfChangeStatus = [];
            state.list.map((item) => {
                dataOfChangeStatus.push(item.key !== action.payload ? item : {...item, edit: !item.edit})
            })
            return { list: dataOfChangeStatus }
            

        case DELETE_ITEM:
            return {
                ...state,
                list: state.list.filter(item => {
                    return item.key !== action.payload
                })
            }
        default: 
            return state
    }
}

export default todoReducer;