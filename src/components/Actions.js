import React from 'react'
import {Button} from "@mantine/core";

const Actions = ({setPrizeNumber, setMustSpin, setOpened, data}) => {
    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    const handleCreateClick = () => {
        setOpened(true);
    };
    return <div className="n4b__scrumroulette-actions">
        <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={() => handleSpinClick()}
            disabled={data.length < 2}
            color="green"
            size="xl"
        >
            Turn
        </Button>
        <Button
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            onClick={() => handleCreateClick()}
            color="green"
            size="xl"
        >
            Create
        </Button>
    </div>
}

export default Actions;