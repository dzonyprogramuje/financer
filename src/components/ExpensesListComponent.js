import React from "react";
import "./ExpensesListStyle.css";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ExpensesListComponent = (props) => {
  let items = props.items;

  return items.map((item) => (
    <Grid item xs={12}>
      <Grid
        container
        spacing={2}
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <Avatar>
                <ShoppingCartIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Grid container alignItems="flex-start" direction="column">
                <Grid item>
                  <Typography variant="subtitle2" color="textPrimary">
                    <b>{item.price} €</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="textSecondary">
                    {item.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton size="small">
            <EditIcon />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  ));
};

export default ExpensesListComponent;
