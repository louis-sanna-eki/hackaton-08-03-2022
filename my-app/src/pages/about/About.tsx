import * as React from 'react';
import {Layout} from '../../shared/Layout';
import Paper from '@mui/material/Paper';

export { About };

function About() {
    return (<Layout>
      <div>
        <h1>📖 About</h1>
        <Paper sx={{ padding: '20px' }}>Eki.Hackathon</Paper>
      </div>
    </Layout>);
}