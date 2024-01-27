import { Grid, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ikeaLogo from "./ikeaIcon.jpg";

function DataEnter() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (event: { target: { value: string } }) => {
    const numericInput = event.target.value.replace(/[^0-9]/g, "");
    const limitedInput = numericInput.slice(0, 3);

    setCode(limitedInput);

    if (limitedInput === "339") {
      navigate("/riddle");
    }
  };

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
      <Grid
        container
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
      >
        <img
          src={ikeaLogo}
          style={{ width: "50%", height: "auto" }}
          alt="Ikea Logo"
        />
        <Grid item xs={12}>
          <Typography sx={{ fontSize: "36px" }}>Enter 4 digit code</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              width: "250px",
              borderRadius: "4px",
              fontSize: "16px",
              padding: "12px",
              backgroundColor: "#ffffff",
            }}
            id="standard-basic"
            label="Enter your code here"
            variant="standard"
            type="text"
            value={code}
            onChange={handleCodeChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DataEnter;
