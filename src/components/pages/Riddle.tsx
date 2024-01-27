import { Typography, Container } from "@mui/material";

function Riddle() {
  return (
    <Container
      sx={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Typography variant="body1" width="75%" fontSize="50px">
        Your items have been verified for checkout! The current wait time for
        checkout is 25 minutes. You don’t know me but I can help you get to the
        front of the line right away! Come get me in the backpack near the front
        of the store. They locked me away to keep my secrets hidden but my
        passcode is 3245.
      </Typography>
    </Container>
  );
}

export default Riddle;
