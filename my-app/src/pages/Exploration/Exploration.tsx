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
    { id: 0, text: "Do you like driving?" },
    { id: 1, text: "Do you live in a city?" },
] as Question[];

function Exploration() {

    const [questions, setQuestions] = useState<Question[]>(questionBank);
    const question = getQuestion(questions);
  
    return (<Layout>
        <Grid>
            <h1>Exploration</h1>
            <Paper sx={{ padding: '20px', width: "700px", margin: "auto" }}>{question.text}</Paper>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <ButtonGroup disableElevation variant="contained" sx={{ margin: "auto" }}>
                    <Button onClick={() => setQuestions(questions.map((_question) => {
                        if (_question.id !== question.id) {
                            return _question;
                        }
                        return {..._question, answer: true };
                    }))}>
                        Yes
                    </Button>
                    <Button onClick={() => setQuestions(questions.map((_question) => {
                        if (_question.id !== question.id) {
                            return _question;
                        }
                        return {..._question, answer: null };
                    }))}>
                        Don't know
                    </Button>
                    <Button onClick={() => setQuestions(questions.map((_question) => {
                        if (_question.id !== question.id) {
                            return _question;
                        }
                        return {..._question, answer: false };
                    }))}>
                        No
                    </Button>
                </ButtonGroup>
            </div>
        </Grid>
      </Layout>);
}

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