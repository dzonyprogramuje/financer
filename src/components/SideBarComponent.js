import React from "react";
import styled from "styled-components";
import "./SideBarStyle.css";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AddIcon from "@material-ui/icons/Add";

const SideBarComponent = () => {
  return (
    <Side>
      <List className="sidebar__list">
        <Typography variant="overline">Dashboard</Typography>
        <ListItem button className="sidebar__element active">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button className="sidebar__element">
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button className="sidebar__element">
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Expenses" />
        </ListItem>
      </List>
    </Side>
  );
};

export default SideBarComponent;

const Side = styled.div`
  display: flex;
  position: fixed;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 300px;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;
