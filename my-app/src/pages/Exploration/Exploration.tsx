import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { Layout } from '../../shared/Layout';


export { Exploration };

function Exploration() {
  
    return (<Layout>
        <Grid>
            <h1>Exploration</h1>
            <Paper sx={{ padding: '20px', width: "700px", margin: "auto" }}>Do you like driving?</Paper>
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