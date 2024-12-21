import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

/**
 * DocumentTitle Component
 * Updates the document's title dynamically based on the passed children prop.
 *
 * @param {string} children - The title to be set for the document.
 * @returns {JSX.Element}
 */
const DocumentTitle = ({ children }) => {
  const title = children || "Default Title"; // Default title as fallback

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

DocumentTitle.propTypes = {
  children: PropTypes.string.isRequired, // Ensures that children is a string
};

export default DocumentTitle;
