import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Head from "./COMP/Head";
import Amount from "./COMP/Amount";
import Fromto from "./COMP/From";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [datas, setdatas] = useState([]);
  const [options, setoptions] = useState([]);
  const [result, setresult] = useState();
  useEffect(() => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((res) => {
        setdatas(res.data.rates);
        console.log(from.length);
      })
      .catch((err) => alert(err));
  }, [from]);

  useEffect(() => {
    setoptions(Object.keys(datas));
    convert();
  }, [datas]);

  const convert = () => {
    const rate = datas[to];
    setresult(amount * rate);
  };
  return (
    <>
      <Head></Head>
      <Amount setamount={setamount}></Amount>
      <Fromto
        from={from}
        to={to}
        setTo={setTo}
        options={options}
        setfrom={setfrom}
        amount={amount}
        result={result}
        convert={convert}
      ></Fromto>
    </>
  );
}

export default App;
