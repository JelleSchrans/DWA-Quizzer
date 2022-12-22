import Button from "./Button";
import { Link } from "react-router-dom";

function StartQuiz(){
    return (
        <div className="container">
            <h1>Start een nieuwe Quiz</h1>

            <Link to="/teamRequests"><Button id="start-quiz" className="btn" content="Nieuwe quiz starten" /></Link>
        </div>
    )
}

export default StartQuiz;