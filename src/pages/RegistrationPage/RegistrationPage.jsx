import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Box, Container } from "@mui/material";

const RegistrationPage = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <RegistrationForm />
        </Box>
      </Container>
    </>
  );
};

export default RegistrationPage;
