import React from 'react'
import { useState } from 'react'
import { Button, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
// import Loader from './Loader';

const theme = createMuiTheme(
    {
        palette: {
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#00897b',
          },
        },
      }
);


function DietChooser({ state }) {

    const [button1Disabled, setButton1Disabled] = useState(true)
    const [button2Disabled, setButton2Disabled] = useState(false)
    const [button3Disabled, setButton3Disabled] = useState(false)
    const [button4Disabled, setButton4Disabled] = useState(false)

    return (
        <div>
        {/* <Loader></Loader> */}
        <ThemeProvider theme={theme}>
        <Button onClick={() => {state(0); setButton1Disabled(true); setButton2Disabled(false); setButton3Disabled(false); setButton4Disabled(false);}} variant="contained" disabled={button1Disabled} color="secondary" id="button1">all</Button>
        <Button onClick={() => {state(1); setButton2Disabled(true); setButton1Disabled(false); setButton3Disabled(false); setButton4Disabled(false);}} variant="contained" disabled={button2Disabled} color='secondary' id="button2">pesc</Button>
        <Button onClick={() => {state(2); setButton3Disabled(true); setButton2Disabled(false); setButton1Disabled(false); setButton4Disabled(false);}} variant="contained" disabled={button3Disabled} color='secondary' id="button3">veg</Button>
        <Button onClick={() => {state(3); setButton4Disabled(true); setButton2Disabled(false); setButton3Disabled(false); setButton1Disabled(false);}} variant="contained" disabled={button4Disabled} color='secondary' id="button4">vg</Button>
        </ThemeProvider>
        </div>
    )
}

export default DietChooser