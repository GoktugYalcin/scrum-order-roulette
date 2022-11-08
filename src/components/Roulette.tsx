import React from 'react'
import JSConfetti from "js-confetti";
import Swal from "sweetalert2";
import {Wheel} from "react-custom-roulette";
import {IOption} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setHistoryValue, setPrizeNumber, setRouletteOutCandidate} from "../redux/slices/rouletteSlice";
import {switchMustSpin} from "../redux/slices/controlSlice";

const Roulette = () => {
    const dispatch = useAppDispatch()

    const mustSpin = useAppSelector((store) => store.control.mustSpin)
    const history = useAppSelector((store) => store.roulette.historyValue)
    const data = useAppSelector((store) => store.roulette.value)
    const prizeNumber = useAppSelector((store) => store.roulette.prizeNumber)

    const colors = [
        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93",
        "#A7D3A6",
        "#706F6F",
        "#731DD8",
        "#B0D0D3",
        "#462521",
        "#7B287D"
    ]

    const handleAddHistory = (prizeNumber: number) : any => {
        // @ts-ignore
        const mainData = JSON.parse(localStorage.getItem("scrum-wheel"))
        if(mainData[prizeNumber]) {
            dispatch(setHistoryValue([...history, mainData[prizeNumber]]))
        }
    }

    const handleStopSpinning = () => {
        dispatch(switchMustSpin())

        if (data.length) {
            Swal.fire({
                icon: "info",
                html: `<b>${data[prizeNumber].option}</b> can talk now!`
            });
            dispatch(setPrizeNumber(prizeNumber))
            dispatch(setRouletteOutCandidate(prizeNumber))
            handleAddHistory(prizeNumber)
        }

        setTimeout(() => {
            const confetti = new JSConfetti();
            confetti.addConfetti({
                confettiNumber: 180,
                confettiColors: colors
            });
        }, 500);
    }

    return <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data.map((i: IOption) => {
            const item: IOption = i
            if(item.option.length > 12 ) {
                item.option = item.option.substring(0, 10) + '...'
            }

            return item
        })}
        spinDuration={0.23}
        innerBorderColor="#000000"
        radiusLineWidth={0}
        outerBorderColor="#FFFFFF"
        textColors={["#fff"]}
        backgroundColors={colors}
        onStopSpinning={() => handleStopSpinning()}
    />
}

export default Roulette;