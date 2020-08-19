
const notificationDev = ''


const notificationReducer = (state=notificationDev, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.data.content
        case 'REMOVE_NOTIFICATION':
            return notificationDev

        default: return state
    }
}

//actionit:
export const setNotification = (content, time) => {
    return async dispatch => { 
        await  dispatch({
            type: 'SET_NOTIFICATION',
                data: {
                    content,
                }
        }, time)
       
    setTimeout(()=> {
        dispatch(removeNotification())
    }, time)
     
}}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer