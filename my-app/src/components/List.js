import { LinearProgress, Paper } from "@material-ui/core";
import React from "react";

function List({ loading, contacts }) {
  console.log(contacts);
  return (
    <Paper square
      elevation={1}
      style={{
        border:"none",
        margin: "20px auto",
        padding: "20px",
        maxWidth: "350px",
        position: "relative",
        background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      }}
    >
      {loading ? (
        <LinearProgress />
      ) : (
        contacts.data.map((contact) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "70px",
                  borderRadius: "50%",
                  margin: "10px 20px 0 0",
                }}
                src={contact.picture}
                alt={contact.firstName}
              ></img>
              <h4>
                {contact.title} {contact.firstName} {contact.lastName}
              </h4>
            </div>
          );
        })
      )}
    </Paper>
  );
}

export default List;
