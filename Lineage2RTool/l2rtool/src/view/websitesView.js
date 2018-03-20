import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import Button  from 'material-ui-next/Button';
import Grid from 'material-ui/Grid';


import PlayerInfo from './PlayerInfo';
import SearchInfo from './SearchInfo';

const theme = createMuiTheme();

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0,
  }
};

class WebsitesView extends Component {
  render() {
    return (
      <div style={{padding:20}}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Button variant="raised" style={styles.button} color="secondary">
              Load
              <input
                type="file"
                style={styles.exampleImageInput}
                onChange={e => console.log(e.target.files[0])}/>
            </Button>

            <Button variant="raised" color="primary" style={styles.button}>
              Save
            </Button>

            <Grid container spacing={24}>
              <Grid item xs={12} sm={4}>
                <PlayerInfo/>
              </Grid>
              <Grid item xs={12} sm={7}>
                <SearchInfo/>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default WebsitesView;
