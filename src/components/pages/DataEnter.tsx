import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DataEnter() {
  const [code, setCode] = useState("");
  //get access to the navigation history
  const navigate = useNavigate();

  const handleCodeChange = (event: { target: { value: string } }) => {
    // Use a regular expression to allow only numeric input
    const numericInput = event.target.value.replace(/[^0-9]/g, "");
    // Ensure only up to 4 digits are allowed
    const limitedInput = numericInput.slice(0, 3);

    setCode(limitedInput);

    // Check if the entered code is the specific number
    if (limitedInput === "339") {
      // Navigate to a different page (e.g., "/riddle")
      navigate("/riddle");
    }
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: "36px",
          }}
        >
          Enter 4 digit code
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{
            width: "500px",
            borderRadius: "10px",
            fontSize: "500px",
            padding: "6px",
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
  );
}

export default DataEnter;
