import * as Redux from 'redux';

import { checkFetchError } from '../serverCommunication';

export function selectQuestionAction(question){
    return { type: "SELECT_QUESTION", payload: question };
}

export function setRoomAction(newRoom){
    return { type: "SET_ROOM", payload: newRoom };
}

function getQuestionsAction(questions){
    return { type: "GET_QUESTIONS", payload: questions };
}

export function asyncGetQuestions(){
    return async (dispatch) => {
        fetch('http://localhost:4000/questions')
        .then(response => checkFetchError(response))
        .then(questions => dispatch(getQuestionsAction(questions)))
    }
}

export function updateCurrentRoom(){
    return async (dispatch) => {
        fetch(`http://localhost:4000/quizrooms/currentRoom`)
        .then(response => checkFetchError(response))
        .then(room => dispatch(setRoomAction(room)))
    }
}

let initialQuizMasterState = {
    roomCode: "",
    questions: [],
    selectedQuestion: null
}

function quizMasterReducer(state = initialQuizMasterState, action) {
    switch (action.type) {
        case "SET_ROOM":
            return { ...state, currentRoom: action.payload };
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