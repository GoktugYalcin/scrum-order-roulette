import React, { useEffect, useRef } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Roulette from "./components/Roulette";
import History from "./components/History";
import CreateModal from "./components/CreateModal";
import {useAppSelector, useMediaQuery} from "./redux/hooks";

export default function App() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const opened = useAppSelector(store => store.control.modalOpened)
  const media = useMediaQuery('(min-width: 768px)')

    useEffect(() => {
    setTimeout(() => {
      if (opened && ref.current) {
        ref.current.value = JSON.parse(localStorage.getItem("scrum-wheel") || "").map((i: { option: string; }) => i.option).join('\n')
      }
    }, 100);
  }, [opened]);

  return (
      <div className="App">
          <div className="container__roulette">
              <CreateModal refText={ref} />
              <Roulette />
              <Actions />
          </div>
          {media &&
              <div className="container__history">
                <History />
              </div>
          }
      </div>
  );
}
