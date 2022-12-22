import * as Redux from 'redux';

export function selectQuestionAction(question){
    return { type: "SELECT_QUESTION", payload: question };
}

function getQuestionsAction(questions){
    return { type: "GET_QUESTIONS", payload: questions };
}

export function asyncGetQuestions(){
    return async (dispatch) => {
        const response = await fetch('http://localhost:4000/questions');
        const questions = await response.json();
        dispatch(getQuestionsAction(questions));
    }
}

let initialQuizMasterState = {
    roomCode: "",
    name: '',
    questions: []
}

function quizMasterReducer(state = initialQuizMasterState, action) {
    switch (action.type) {
        case "SELECT_QUESTION":
            return { ...state, selectedQuestion: action.payload }
        case "GET_QUESTIONS":
            return { ...state, questions: action.payload }
        default:
            return state;
    }
}

const mainReducer = Redux.combineReducers({
    quizMaster: quizMasterReducer
});

export default mainReducer;