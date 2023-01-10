function Results(){
    return (
        <div className="container">
            <h1>Resultaten van de Quiz </h1>
            <div id="firstPlace">
                <h1>1st place</h1>
                <h3>Team 1</h3>
                <p>10 punten</p>
            </div>
            <div className="runnerUps">
            <div id="secondPlace">
                <h1>2nd place</h1>
                <h3>Team 2</h3>
                <p>8 punten</p>
            </div>
            <div id="thirdPlace">
                <h1>3rd place</h1>
                <h3>Team 3</h3>
                <p>6 punten</p>
            </div>
            </div>
        </div>
    )
}

export default Results;