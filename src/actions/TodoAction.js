import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, CHANGE_STATUS } from './type'

export const addItem = (item) => (
    {
        type: ADD_ITEM,
        payload: item
    }
)

export const changeStatus = (item) => (
    {
        type: CHANGE_STATUS,
        payload: item
    }
)

export const editItem = (item) => (
    {
        type: EDIT_ITEM,
        payload: item
    }
)

export const deleteItem = (item) => (
    {
        type: DELETE_ITEM,
        payload: item
    }
)