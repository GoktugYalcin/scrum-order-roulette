import React from 'react'
import {Button} from "@mantine/core";

const Actions = ({mustSpin, setData, setHistory, setPrizeNumber, setMustSpin, setOpened, data}) => {
    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    const handleCreateClick = () => {
        setOpened(true);
    };

    const handleRewind = () => {
        if(localStorage.getItem("scrum-wheel"))
        setData(JSON.parse(localStorage.getItem("scrum-wheel")))
        setHistory([])
    };

    return <div className="n4b__scrumroulette-actions">
        <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={() => handleSpinClick()}
            disabled={data.length < 2 || mustSpin}
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
            disabled={!localStorage.getItem("scrum-wheel") || mustSpin}
        >
            Rewind
        </Button>
        <Button
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            onClick={() => handleCreateClick()}
            color="green"
            size="xl"
            disabled={mustSpin}
        >
            Create
        </Button>
    </div>
}

export default Actions;