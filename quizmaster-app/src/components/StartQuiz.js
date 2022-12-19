import Button from "./Button";

function StartQuiz(){
    return (
        <div className="container">
            <h1>Start een nieuwe Quiz</h1>

            <Button id="start-quiz" className="btn" content="Start Quiz" />
        </div>
    )
}

export default StartQuiz;