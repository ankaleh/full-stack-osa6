
const filterReducer = (state='ALL', action) => {
    switch(action.type) {
        case 'SET_FILTER':
            return action.filter
        default: return state
    }
}

//actionit:
export const setFilter = (written) => {
    return {
        type: 'SET_FILTER',
        filter: written
    }
}

export default filterReducer