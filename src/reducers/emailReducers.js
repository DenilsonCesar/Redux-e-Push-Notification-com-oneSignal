const INITIAL_STATE = {
    email: 'denilson@gmail.com'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'envia_email':
            return { ...state, email: action.payload}
    }
    return state;
}