import { Paper } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img
        style={{ width: "50px", marginRight: "15px" }}
        src={"https://cdn-icons-png.flaticon.com/512/6151/6151841.png"}
        alt="contact icon"
      ></img>
      <h1 style={{ margin: "0", fontWeight: "100" }}>Contact List</h1>
    </Paper>
  );
}

export default Header;
