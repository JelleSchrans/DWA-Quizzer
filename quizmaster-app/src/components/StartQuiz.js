import Button from "./Button";
import { Link } from "react-router-dom";

import * as ReactRedux from "react-redux";

import { setRoomAction, updateCurrentRoom } from "../redux/reducers";
import { createNewRoom } from "../serverCommunication";

function StartQuizUI(props){
    return (
        <div className="container">
            <h1>Start een nieuwe Quiz</h1>

            <Link to="/teamRequests"><Button id="start-quiz" className="btn" handleClick={handleButtonClick} content="Nieuwe quiz starten" /></Link>
        </div>
    )

    function handleButtonClick(){
        createNewRoom().then(room => {
            props.doSetRoom(room);
        })
        props.onOpenSocket();
    }
}

function mapDispatchToProps(dispatch){
    return {
        doSetRoom: (room) => dispatch(setRoomAction(room))
    }
}

export const StartQuiz = ReactRedux.connect(null, mapDispatchToProps)(StartQuizUI);