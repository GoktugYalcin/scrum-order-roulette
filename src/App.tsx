import React, { useEffect, useRef } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Roulette from "./components/Roulette";
import CreateModal from "./components/CreateModal";
import {useAppSelector} from "./redux/hooks";

export default function App() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const opened = useAppSelector(store => store.control.modalOpened)

  useEffect(() => {
    setTimeout(() => {
      if (opened && ref.current) {
        ref.current.value = JSON.parse(localStorage.getItem("scrum-wheel") || "").map((i: { option: string; }) => i.option).join('\n')
      }
    }, 100);
  }, [opened]);

  return (
      <div className="App">
        <CreateModal refText={ref} />
        <Roulette />
        <Actions />
      </div>
  );
}