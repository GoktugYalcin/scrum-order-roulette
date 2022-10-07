import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Roulette from "./components/Roulette";
import CreateModal from "./components/CreateModal";

export default function App() {
  const ref = useRef(null);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataOld = localStorage.getItem("scrum-wheel");
    if (dataOld) {
      setData(JSON.parse(dataOld));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (opened && ref.current) {
        ref.current.value = JSON.parse(localStorage.getItem("scrum-wheel")).map(i => i.option).join('\n')
      }
    }, 100);
  }, [opened]);

  return (
      <div className="App">
          <CreateModal opened={opened} setData={setData} setOpened={setOpened} refText={ref} />
          <Roulette setMustSpin={setMustSpin} data={data} mustSpin={mustSpin} prizeNumber={prizeNumber} setData={setData} />
          <Actions setOpened={setOpened} data={data} setMustSpin={setMustSpin} setPrizeNumber={setPrizeNumber} />
      </div>
  );
}
