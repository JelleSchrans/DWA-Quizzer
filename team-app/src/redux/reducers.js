import * as Redux from 'redux';

let initialTeamState = {
    id: 0,
    teamName: '',
    score: 0
}

function teamReducer(state = initialTeamState, action) {
    switch (action.type) {
        case 'ADD_TEAM':
            return {...state, teamName: action.payload};
        case 'REMOVE_TEAM':
            return "";
        default:
            return state;
    }
}

export const mainReducer = Redux.combineReducers({
    team: teamReducer
});