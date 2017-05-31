export default (state = 0, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return state + 1
    default:
        return state
    }
}
