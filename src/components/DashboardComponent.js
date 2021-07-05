import React from "react";
import styled from "styled-components";

import BreadcrumbsComponent from "./BreadcrumbsComponent";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import ApexChartsComponent from "./ApexChartsComponent";

const DashboardComponent = () => {
  return (
    <Dashboard>
      <Grid container direction="row" spacing={2}>
        <BreadcrumbsComponent category="dashboard" value="home" />

        <Grid item xs={12}>
          <Grid container direction="row" spacing={2} alignItems="stretch">
            <Grid item xs={4}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5" color="textPrimary">
                        Current expenses
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography variant="h5" color="textPrimary">
                            <b>$999</b>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TrendingDownIcon
                            style={{ color: "#66bb6a", fontSize: "30px" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle2" color="textPrimary">
                            -12.5%
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="overline" color="inherit">
                        Sum of current expenses for <b>this month</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5" color="textPrimary">
                        Annual expenses
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography variant="h5" color="textPrimary">
                            <b>$999</b>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TrendingUpIcon
                            style={{ color: "#dd0000", fontSize: "30px" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle2" color="textPrimary">
                            +30%
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="overline" color="inherit">
                        The sum of all expenses <b>this year</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5" color="textPrimary">
                        All expenses
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography variant="h5" color="textPrimary">
                            <b>$999</b>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TrendingUpIcon
                            style={{ color: "#dd0000", fontSize: "30px" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" color="textPrimary">
                            +2.5%
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="overline" color="inherit">
                        Total expenses for <b>all years</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} style={{ height: "400px" }}>
              {/* Charts */}
              <ApexChartsComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default DashboardComponent;

const Dashboard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;
