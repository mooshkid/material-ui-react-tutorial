import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { orange, green } from '@mui/material/colors'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Typography } from '@mui/material';

import Container from '@mui/material/Container'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';


const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white!important',
    padding: '5px 30px',
    marginBottom: 15,
  },
  rootBeer: {
    background: 'linear-gradient(45deg, turquoise, magenta)',
    border: 0,
    borderRadius: 15,
    color: 'white!important',
    padding: '5px 30px',
    marginBottom: 15,
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.rootBeer}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  const label = checked ? 'Testing Checkbox' : 'Delete?'

  return (
    <FormControlLabel 
      control={
        <Checkbox 
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          icon={<DeleteIcon color='secondary'/>}
          checkedIcon={<SaveIcon />}
          inputProps={{ 
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label={label}
    />

  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar position="sticky" color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="The Date"
              placeholder="test@example.com"
            />
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={3} sm={6} lg={9}>
                <Paper style={{ height:75, width: '100%'}} />
              </Grid>
              <Grid item xs={3} sm={6} lg={12}>
                <Paper style={{ height:75, width: '100%'}} />
              </Grid>
              <Grid item xs={3} sm={6} lg={9}>
                <Paper style={{ height:75, width: '100%'}} />
              </Grid>
            </Grid>

            <CheckboxExample />
            {/* <Button onClick={()=>alert('Hello')}  variant="contained" color="secondary"> */}
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                size="large"
                variant="contained"
                color="primary">
                  Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                size="large"
                variant="contained"
                color="secondary">
                  Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
