import Chart from './Chart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Layout } from '../../shared/Layout';


export { Dashboard };

function Dashboard() {
  
    return (<Layout>
    <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
      </Grid></Layout>);
  }