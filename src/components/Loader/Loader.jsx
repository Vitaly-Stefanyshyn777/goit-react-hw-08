import { CircularProgress, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

/**
 * Loader Component
 * Reusable loader for displaying a loading state.
 *
 * @param {string} message - Optional message to display below the loader.
 */
const Loader = ({ message = "Loading..." }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" mt={2}>
        {message}
      </Typography>
    </Box>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
