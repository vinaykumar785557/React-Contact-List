import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Paper from "@material-ui/core/Paper";
import Footer from "./components/Footer";
import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "619a95fd3a6480a793efc0bc";
function App() {
  const [contacts, setContacts] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/user?limit=14`, { headers: { "app-id": APP_ID } })
      .then(({ data }) => setContacts(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <Paper>
      <Header />
      <List loading={loading} contacts={contacts} />
      <Footer />
    </Paper>
  );
}
export default App;
