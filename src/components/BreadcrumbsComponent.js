import React from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const BreadcrumbsComponent = (props) => {
  return (
    <Grid item xs={12}>
      <Breadcrumbs>
        <Link variant="overline" color="inherit" href="/">
          Financer
        </Link>
        <Link
          variant="overline"
          color="inherit"
          href="/getting-started/installation/"
        >
          {props.category}
        </Link>
        <Typography variant="overline" color="textPrimary">
          {props.value}
        </Typography>
      </Breadcrumbs>
    </Grid>
  );
};

export default BreadcrumbsComponent;
