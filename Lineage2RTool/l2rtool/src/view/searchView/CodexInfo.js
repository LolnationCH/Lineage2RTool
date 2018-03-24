import React, { Component } from 'react';
import Grid from 'material-ui-next/Grid';
import { withStyles } from 'material-ui-next/styles';
import Select from 'material-ui-next/Select';
import { MenuItem } from 'material-ui-next/Menu';
import TextField from 'material-ui-next/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import monster_codex from "../../data/codex/monster_codex.json"

const fields = ['name', 'mob_drop', 'location', 'stat_type', 'grade']

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  body: {
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: 'center',
  },
}))(TableCell);

class CodexInfo extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fieldType: 'name',
        searchQuery: '',
        codexInfo: [],
      };
  }

  searchQuery() {
    var arrCodex = [];
    for (var i = 0; i < monster_codex.length; ++i) {
        if (monster_codex[i][this.state.fieldType] === this.state.searchQuery){
            console.log(monster_codex[i][this.state.fieldType])
            arrCodex.push(monster_codex[i]);
        }
    }
    this.setState({
      codexInfo : arrCodex,
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    },
    this.searchQuery
    );
  };

  render() {
    return (
      <Grid container spacing={24} style={{marginTop:"10px"}}>
        <Grid item xs={12}>
          <Select
              value={this.state.fieldType}
              onChange={this.handleChange('fieldType')}
              style={{margin:"10px"}}
            >
            {fields.map(n => {
              return (
                <MenuItem key={n} value={n}>{n}</MenuItem>
              );
            })}
          </Select>

          <TextField
            id="searchQuery"
            label="Search Query"
            value={this.state.searchQuery}
            onChange={this.handleChange('searchQuery')}
            margin="normal"
          />
        </Grid>

        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell numeric>Mob drop</CustomTableCell>
                <CustomTableCell numeric>Location</CustomTableCell>
                <CustomTableCell numeric>Stat type</CustomTableCell>
                <CustomTableCell numeric>Stat increase per level</CustomTableCell>
                <CustomTableCell numeric>Total Needed</CustomTableCell>
                <CustomTableCell numeric>Codex Grade</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.codexInfo.map(n => {
                return (
                  <TableRow key={n.name}>
                    <CustomTableCell>{n.name}</CustomTableCell>
                    <CustomTableCell numeric>{n.mob_drop}</CustomTableCell>
                    <CustomTableCell numeric>{n.location}</CustomTableCell>
                    <CustomTableCell numeric>{n.stat_type}</CustomTableCell>
                    <CustomTableCell numeric>{n.stat_inc_p_lvl}</CustomTableCell>
                    <CustomTableCell numeric>{n.total_needed}</CustomTableCell>
                    <CustomTableCell numeric>{n.grade}</CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>

      </Grid>
    );
  }
}

export default CodexInfo;
