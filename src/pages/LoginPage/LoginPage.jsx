import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Box, Container } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
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
          <LoginForm />
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
