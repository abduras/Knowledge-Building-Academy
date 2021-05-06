import React, {Component} from 'react';
import Question from '../question/Question';
import Answer from '../answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '_____ is a picture in which the flows of computational paths are depicted.',
            2: 'Among unary operation which operator represents increment?',
            3: 'The function scanf is used to ___',
            4: 'If the function returns no value then it is called ____',
            5: 'A function _____'

        },
        answers: {
            1: {
                1: 'Flow chart',
                2: 'Algorithm',
                3: 'Program'
            },
            2: {
                1: '--',
                2: '++',
                3: '!'
            },
            3: {
                1: 'To take logical decisions',
                2: 'Print a set of values',
                3: 'Input a set of values'
            },
            4: {
                1: 'Void function',
                2: 'Data type function',
                3: 'Main function'
            },
            5: {
                1: 'May or may not need input data',
                2: 'May or may not return a value',
                3: 'Both a and b'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '3',
            4: '1',
            5: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}