import { useState } from "react";

function JoinQuiz(){
    const [quizcode, setQuizcode] = useState("");
    const [teamname, setTeamname] = useState("");

        return(
            <div>
                <h1>Meedoen met een Quiz</h1> 

                <form id="joinQuizForm">
                    <label>Quiz code:</label>
                    <input type="text" name="quizcode" placeholder="Quiz code" />
                    <label>Team naam:</label>
                    <input type="text" name="teamnaam" placeholder="Team naam" />
                    <button type="submit" value="Submit">Doe mee met een Quiz!</button>
                </form>

            </div>
        )
}

export default JoinQuiz;