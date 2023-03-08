import React, { useState } from "react";
import Grid from "./components/Grid";
import "./App.css";
import { M, N } from './utils/calculateDistance.js'
import Form from "./components/Form";

function App() {

  const [ROWS, setROWS] = useState(4);
  const [COLS, setCOLS] = useState(4);
  return (
    <main>
      <Form setRow={setROWS} setCol={setCOLS} />
      <Grid rows={ROWS} cols={COLS} />
    </main>
  );
}
export default App;
