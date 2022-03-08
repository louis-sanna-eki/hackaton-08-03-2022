import * as React from 'react';
import {Layout} from '../../shared/Layout';
import Paper from '@mui/material/Paper';

export { About };

function About() {
    return (<Layout>
      <div>
        <h1>📖 About</h1>
        <Paper sx={{ padding: '20px' }}>
          <h2>🤹 Our team</h2>
          <ul>
            <li>Alexander NINUA</li>
            <li>François POITRINE</li>
            <li>Gabriel MURET</li>
            <li>Lola SPASOJEVIC</li>
            <li>Louis SANNA</li>
            <li>Owen XOUAL</li>
            <li>Thomas WOILLEZ</li>
          </ul>
        </Paper>
      </div>
    </Layout>);
}