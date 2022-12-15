import * as Redux from 'redux';

let initialQuizMasterState = {
    id: 0,
    name: '',
}

function quizMasterReducer(state = initialQuizMasterState, action) {
    switch (action.type) {
        case 'ADD_QUIZMASTER':
            return [...state, action.quizMaster];
        case 'REMOVE_QUIZMASTER':
            return state.filter(quizMaster => quizMaster.id !== action.id);
        default:
            return state;
    }
}

const mainReducer = Redux.combineReducers({
    quizMaster: quizMasterReducer
});

export default mainReducer;