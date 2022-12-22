import * as ReactRedux from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';

import { selectQuestionAction } from '../redux/reducers';

function SelectQuestion(props){
    return (
        <div className='container'>
            <h1>Kies een vraag</h1>
            <p>Kies uit onderstaande vragen een volgende vraag voor de huidige ronde. 
            Vragen die in deze ronde al aan de beurt geweest zijn kunnen niet gekozen worden</p>
         <div id='questions'>
            {props.allQuestions.map((question, index) => {
                return (
                <Link to="/question">
                <Button buttonKey={index} className="questionButton" handleClick={(evt) => { 
                    props.setSelectedQuestion(question); 
                    delete props.allQuestions[index];
                }} 
                content={
                    <div>
                        <h3>Vraag: {question.question}</h3>
                        <p><strong>Antwoord:</strong> {question.answer}</p>
                    </div>
                } />
                </Link>
                )
            })
            }
         </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        allQuestions: state.quizMaster.questions
    }
}

function mapDispatchToProps(dispatch){
    return {
        setSelectedQuestion: (question) => dispatch(selectQuestionAction(question))
    }
}

export const SelectQuestions = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SelectQuestion);