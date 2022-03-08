import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { Layout } from '../../shared/Layout';


export { Exploration };

interface Question {
    id: number;
    text: string;
    answer?: boolean;
}

const questions = [
    { id: 0, text: "Do you like driving?" },
    { id: 1, text: "Do you live in a city?" },
] as Question[];

function Exploration() {

    const question = getQuestion();
  
    return (<Layout>
        <Grid>
            <h1>Exploration</h1>
            <Paper sx={{ padding: '20px', width: "700px", margin: "auto" }}>{question.text}</Paper>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <ButtonGroup disableElevation variant="contained" sx={{ margin: "auto" }}>
                    <Button>Yes</Button>
                    <Button>Don't know</Button>
                    <Button>No</Button>
                </ButtonGroup>
            </div>
        </Grid>
      </Layout>);
}

function getQuestion(): Question {
    const unansweredQuestions = questions.filter(question => typeof question.answer === "undefined");
    const randomIndex = Math.floor(Math.random() * questions.length);
    return unansweredQuestions[randomIndex];
}