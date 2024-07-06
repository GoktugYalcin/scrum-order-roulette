import React from 'react'
import {Button} from "@mantine/core";
import {useHistoryStore} from "../bears/HistoryBear";
import {useRouletteStore} from "../bears/RouletteBear";

const Actions = () => {

    const rouletteList = useHistoryStore(state => state.rouletteList)
    const setHistory = useHistoryStore(state => state.setHistory)
    const setRouletteList = useHistoryStore(state => state.setRouletteList)
    const setModalOpened = useHistoryStore(state => state.setModalOpened)
    const isSpinning = useRouletteStore(state => state.isSpinning)
    const setIsSpinning = useRouletteStore(state => state.setIsSpinning)
    const setPrizeNumber = useRouletteStore(state => state.setPrizeNumber)


    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * rouletteList.length);
        setPrizeNumber(newPrizeNumber);
        setIsSpinning(true);
    };

    const handleCreateClick = () => {
        setModalOpened(true);
    };

    const handleRewind = () => {
        if(localStorage.getItem("scrum-wheel"))
        setRouletteList(JSON.parse(localStorage.getItem("scrum-wheel")))
        setHistory([])
    };

    return <div className="n4b__scrumroulette-actions">
        <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={() => handleSpinClick()}
            disabled={rouletteList.length < 2 || isSpinning}
            color="green"
            size="xl"
        >
            Turn
        </Button>
        <Button
            variant="gradient"
            gradient={{ from: "#D4CB92", to: "#E6E1C5", deg: 60 }}
            onClick={() => handleRewind()}
            color="green"
            size="xl"
            disabled={!localStorage.getItem("scrum-wheel") || isSpinning}
        >
            Rewind
        </Button>
        <Button
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            onClick={() => handleCreateClick()}
            color="green"
            size="xl"
            disabled={isSpinning}
        >
            Create
        </Button>
    </div>
}

export default Actions;