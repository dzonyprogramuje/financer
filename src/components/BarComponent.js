import React from "react";
import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const BarComponent = () => {
  return (
    <>
      <Bar>
        <Typography variant="h6">
          <b>Financer</b>
        </Typography>
        <Right>
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
          <IconButton>
            <Avatar alt="Remy Sharp" src="1.jpg" />
          </IconButton>
        </Right>
      </Bar>
    </>
  );
};
export default BarComponent;

const Bar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
