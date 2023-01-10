import { useState } from "react";

import { sendRequest } from "../serverCommunication";

function JoinQuiz(){
    const [quizcode, setQuizcode] = useState("");
    const [teamname, setTeamname] = useState("");

    function handleButtonClick(event){
        event.preventDefault();
        sendRequest(quizcode, teamname);
    }

        return(
            <div>
                <h1>Meedoen met een Quiz</h1> 

                <form id="joinQuizForm">
                    <label>Quiz code:</label>
                    <input type="text" name="quizcode" placeholder="Quiz code" onChange={evt => {
                        setQuizcode(evt.target.value);
                    }} />
                    <label>Team naam:</label>
                    <input type="text" name="teamnaam" placeholder="Team naam" onChange={evt => {
                        setTeamname(evt.target.value);
                    }} />
                    <button type="submit" value="Submit" onClick={handleButtonClick}>Doe mee met een Quiz!</button>
                </form>

            </div>
        )
}

export default JoinQuiz;