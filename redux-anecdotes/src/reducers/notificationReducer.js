
const notificationDev = ''


const notificationReducer = (state=notificationDev, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION_VOTED':
            return action.data.content
        case 'SET_NOTIFICATION_ADDED':
            return action.data.content
        case 'REMOVE_NOTIFICATION':
            return notificationDev

        default: return state
    }
}

//actionit:
export const setNotificationVoted = (andecdoteContent) => {
    return {
      type: 'SET_NOTIFICATION_VOTED',
      data: {
        content: `You voted anecdote: "${andecdoteContent}"`,
      }
    }
}

export const setNotificationAdded = (andecdoteContent) => {
    return {
      type: 'SET_NOTIFICATION_ADDED',
      data: {
        content: `You added a new anecdote: "${andecdoteContent}"`
      }
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer