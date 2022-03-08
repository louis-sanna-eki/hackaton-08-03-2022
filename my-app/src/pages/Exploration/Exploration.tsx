import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { Layout } from '../../shared/Layout';
import { useState } from 'react';


export { Exploration };

interface Question {
    id: number;
    text: string;
    answer?: boolean | null;
}

const questionBank = [
    { id: 1, text: "Do you live in a city?" },
    { id: 2, text: "Are you married?" },
    { id: 3, text: "Do you have children?" },
    { id: 4, text: "Do you travel abroad?" },
    { id: 5, text: "Are you above 40 years old?" },
] as Question[];

function Exploration() {

    const [questions, setQuestions] = useState<Question[]>(questionBank);
    const question = getQuestion(questions);
  
    return (<Layout>
        <Grid>
            <h1>🔮 Exploration</h1>
            {question.id !== -1 ? askQuestion(): answer()}
        </Grid>
      </Layout>);

    
    function askQuestion() {
        return (<>
        <Paper sx={{ padding: '20px', width: "700px", margin: "auto" }}>{question.text}</Paper>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <ButtonGroup disableElevation variant="contained" sx={{ margin: "auto" }}>
                    <Button onClick={() => updateQuestion(true)} sx={{ backgroundColor: "#4A9D8F"}}>
                        Yes
                    </Button>
                    <Button onClick={() => updateQuestion(null)} sx={{ backgroundColor: "#4A9D8F"}}>
                        Don't know
                    </Button>
                    <Button onClick={() => updateQuestion(false)} sx={{ backgroundColor: "#4A9D8F"}}>
                        No
                    </Button>
                </ButtonGroup>
            </div>
        </>);
    }

    function answer() {
        return <Paper sx={{ padding: '20px', margin: "auto", fontWeight: 700, width: 'fit-content' }}>🎉 You should buy a bicyle! 🎉</Paper>
    }


      function updateQuestion(answer: boolean | null) {
        setQuestions(questions.map((_question) => {
            if (_question.id !== question.id) {
                return _question;
            }
            return {..._question, answer };
        }))
      }
}

// "#afd9d2"

function getQuestion(questions: Question[]) {
    const unansweredQuestions = getUnansweredQuestions(questions);
    if (unansweredQuestions.length === 0) {
        return {
            id: -1,
            text: 'no question left',
            answer: null,
        }
    }
    const randomIndex = getRandomIndex(questions);
    return unansweredQuestions[randomIndex];
}

function getRandomIndex(questions: Question[]): number {
    const unansweredQuestions = getUnansweredQuestions(questions);
    return Math.floor(Math.random() * unansweredQuestions.length);
}

function getUnansweredQuestions(questions: Question[]): Question[] {
    return questions.filter(question => typeof question.answer === "undefined");
}