import React from "react";
import styled from "styled-components";
import "./SideBarStyle.css";

import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AddIcon from "@material-ui/icons/Add";

import PersonIcon from "@material-ui/icons/Person";
import TuneIcon from "@material-ui/icons/Tune";
import InfoIcon from "@material-ui/icons/Info";

const SideBarComponent = (props) => {
  return (
    <Side>
      <List className="sidebar__list">
        <ListBlock>
          <Typography variant="overline">Dashboard</Typography>
          <Link to="/">
            <ListItem
              button
              className={`sidebar__element ${
                props.value === "home" ? "active" : ""
              }`}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/analytics">
            <ListItem
              button
              className={`sidebar__element ${
                props.value === "analytics" ? "active" : ""
              }`}
            >
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItem>
          </Link>
          <Link to="/add">
            <ListItem
              button
              className={`sidebar__element ${
                props.value === "add" ? "active" : ""
              }`}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Expenses" />
            </ListItem>
          </Link>
        </ListBlock>
        <ListBlock>
          <Typography variant="overline">User</Typography>
          <ListItem button className="sidebar__element">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button className="sidebar__element">
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button className="sidebar__element">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Info" />
          </ListItem>
        </ListBlock>
      </List>
    </Side>
  );
};

export default SideBarComponent;

const Side = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const ListBlock = styled.div`
  margin-bottom: 50px;
`;
