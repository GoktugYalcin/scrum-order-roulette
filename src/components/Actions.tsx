import React from 'react'
import {Button} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {switchModalOpened, switchMustSpin} from "../redux/slices/controlSlice";
import {rewindRoulette, setPrizeNumber} from "../redux/slices/rouletteSlice";

const Actions = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((store) => store.roulette.value)
    const mustSpin = useAppSelector((store) => store.control.mustSpin)

    const handleSpinClick = (): void => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        dispatch(setPrizeNumber(newPrizeNumber))
        dispatch(switchMustSpin())
    };

    const handleRewind = (): void => {
        dispatch(rewindRoulette())
    }

    const handleCreateClick = (): void => {
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
            disabled={mustSpin}
            color="green"
            size="xl"
        >
            Create
        </Button>
    </div>
}

export default Actions;