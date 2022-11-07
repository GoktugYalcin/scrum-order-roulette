import React from 'react'
import {Button} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {switchModalOpened, switchMustSpin} from "../redux/slices/controlSlice";
import {setPrizeNumber} from "../redux/slices/rouletteSlice";

const Actions = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((store) => store.roulette.value)

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        dispatch(setPrizeNumber(newPrizeNumber))
        dispatch(switchMustSpin())
    };

    const handleCreateClick = () => {
        dispatch(switchModalOpened())
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