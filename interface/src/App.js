import "./App.css";
import QR from "./Components/QRCode";
import classes from "./app.module.css";
import Instructions from "./Components/Instructions";
import { useState, useEffect } from "react";
import Axios from "./Axios";
const URL = "https://3.17.144.158:8000/login?table=";

const tables = {
  A: { range: [1, 4] },
  B: { range: [5, 6] },
  C: { range: [7, 17] },
};

const sendTables = {};

const initialState = { qrCodes: {} };
function App() {
  const [state, setState] = useState({ ...initialState });
  useEffect(() => {
    Object.keys(tables).map((table) => {
      const { range } = tables[table];
      const start = range[0];
      const end = range[1];

      for (let i = start; i <= end; i++) {
        const prepUrl = URL + table + i;
        sendTables[prepUrl] = `${table}${i}`;
      }
      return null;
    });
    const getQr = async () => {
      const response = await Axios.post("/createQR", { urls: sendTables });
      console.log(response);
      const { payload } = response.data;
      if (response.data.success)
        setState((prevState) => ({ ...prevState, qrCodes: payload }));
      else {
        console.log(response.data.payload);
      }
    };
    getQr();
  }, []);
  const { qrCodes } = state;
  const QRs = Object.keys(qrCodes).map((code) => {
    console.log(["hello"],code, qrCodes[code])
    return (
      <>
      <hr/>
      <div>
        <h2>Table {sendTables[code]}</h2>
        <div className={classes.qrCode}>
          <QR qr={qrCodes[code]}/>
          <Instructions />
        </div>
      </div>
      </>
    );
  });

  return <div className="App">{QRs}</div>;
}

export default App;
