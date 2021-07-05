import React, { useState } from "react";
import styled from "styled-components";
import BreadcrumbsComponent from "./BreadcrumbsComponent";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpensesListComponent from "./ExpensesListComponent";

const AddComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Grid container direction="row" spacing={2}>
      <BreadcrumbsComponent category="dashboard" value="add expenses" />

      <Grid item xs={12}>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={6} style={{ height: "500px", overflow: "hidden" }}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Grid container direction="row" spacing={3} justify="flex-end">
                  <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary">
                      Add new expense
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-number"
                      label="Price"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-number"
                      label="Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                      <InputLabel>Age</InputLabel>
                      <Select value="EUR" onChange="d" label="EUR">
                        <MenuItem value="EUR">EUR</MenuItem>
                        <MenuItem value="PLN">PLN</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                      <InputLabel>Category</InputLabel>
                      <Select value="" onChange="d" label="">
                        <MenuItem value="house">House</MenuItem>
                        <MenuItem value="shopping">Shopping</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item justify="flex-end">
                    <IconButton size="small">
                      <AddCircleIcon
                        style={{ fontSize: "50px" }}
                        color="primary"
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} style={{ height: "500px", overflow: "auto" }}>
            <Card>
              <CardContent>
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary">
                      Expenses list
                    </Typography>
                  </Grid>

                  <ExpensesListComponent
                    items={[
                      { id: 1, price: 12.55, date: "03.11.2020" },
                      { id: 2, price: 77.49, date: "10.12.2020" },
                      { id: 3, price: 144.99, date: "27.03.2021" },
                      { id: 4, price: 9.99, date: "06.06.2021" },
                      { id: 1, price: 12.55, date: "03.11.2020" },
                      { id: 2, price: 77.49, date: "10.12.2020" },
                      { id: 3, price: 144.99, date: "27.03.2021" },
                      { id: 4, price: 9.99, date: "06.06.2021" },
                      { id: 1, price: 12.55, date: "03.11.2020" },
                      { id: 2, price: 77.49, date: "10.12.2020" },
                    ]}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddComponent;
