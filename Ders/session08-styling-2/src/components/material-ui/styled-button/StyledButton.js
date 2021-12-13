import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    background: "Linear-gradient(45deg,#ff688b,#ff8e53)",
    border: 0,
    borderRadius: 7,
    color: "#fff",
    padding: "5px 30px",
    marginBottom: "1rem",
  },
});

const StyledButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.btn}>Styled Button</Button>
    </div>
  );
};

export default StyledButton;
