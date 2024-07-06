import React, { useEffect } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Roulette from "./components/Roulette";
import CreateModal from "./components/CreateModal";
import History from "./components/History";
import {useHistoryStore} from "./bears/HistoryBear";

export default function App() {
  const setRouletteList = useHistoryStore(state => state.setRouletteList)

  useEffect(() => {
    const dataOld = localStorage.getItem("scrum-wheel");
    if (dataOld) {
        setRouletteList(JSON.parse(dataOld));
    }
  }, [setRouletteList]);

  return (
      <div className="App">
          <div className="container__roulette">
            <CreateModal />
            <Roulette />
            <Actions />
          </div>
          <div className="container__history">
            <History />
          </div>
      </div>
  );
}
