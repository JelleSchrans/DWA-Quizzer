import * as ReactRedux from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from './Button';

function ShowQuestion(props){
    if(props.currentQuestion){
        return (
            <div className="container">
                <h1>Vraag:</h1>
                <h2>{props.currentQuestion.question}</h2>
                <p>Antwoord: <em>{props.currentQuestion.answer}</em></p>

                <Button className="btn" content="Volgende vraag" handleClick={() => {props.history.push('/selectQuestion')}} />
            </div>
        )
    } else {
        return <Redirect to="/selectQuestion" />
    }
}

function mapStateToProps(state){
    return {
        currentQuestion: state.quizMaster.selectedQuestion
    }
}

export const Question = ReactRedux.connect(mapStateToProps)(ShowQuestion);