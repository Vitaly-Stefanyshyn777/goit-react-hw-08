import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { Box, Typography } from "@mui/material";
import erorImage from "../../../public/hello.jpg";
const HomePage = () => {
  const styles = {
    container: {
      minHeight: "calc(100vh - 50px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    heading: {
      fontWeight: 500,
      fontSize: { xs: 32, sm: 48 },
    },
  };

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <Box sx={styles.container}>
        <Typography variant="h1" sx={styles.heading}>
          Hello, my friend!!{" "}
          <span role="./" aria-label="./">
            <img
              src={erorImage}
              alt="Error Page"
              style={{ width: "100%", maxWidth: "1200px", marginTop: "3rem" }}
            />
            😊👋
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
