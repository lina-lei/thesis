import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const LocationStats = ({ visitedCount = 0, faveCount = 0 }) => {
  return (
    <div className="location-stats">
      <Typography variant="body1">
        <p>[{visitedCount}] Wanderers have visited here.</p>
      </Typography>
      <Typography variant="body1">
        <p>[{faveCount}] Wanderers want to visit here.</p>
      </Typography>
    </div>
  );
};

LocationStats.propTypes = {
  visitedCount: PropTypes.number.isRequired,
  faveCount: PropTypes.number.isRequired
};

export default LocationStats;
