import React from 'react'
import JSConfetti from "js-confetti";
import Swal from "sweetalert2";
import {Wheel} from "react-custom-roulette";
import {useRouletteStore} from '../bears/RouletteBear'
import {useHistoryStore} from "../bears/HistoryBear";

const Roulette = () => {
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

    const rouletteList = useHistoryStore(state => state.rouletteList)
    const history = useHistoryStore(state => state.history)
    const setHistory = useHistoryStore(state => state.setHistory)
    const setRouletteList = useHistoryStore(state => state.setRouletteList)
    const isSpinning = useRouletteStore(state => state.isSpinning)
    const setIsSpinning = useRouletteStore(state => state.setIsSpinning)
    const prizeNumber = useRouletteStore(state => state.prizeNumber)

    const handleAddHistory = (prizeNumber) => {
        const mainData = JSON.parse(localStorage.getItem("scrum-wheel"))
        if(mainData && mainData[prizeNumber]) {
            setHistory([...history, rouletteList[prizeNumber]])
        }
    }

    const handleStopSpinning = () => {
        setIsSpinning(false);
        const confetti = new JSConfetti();
        if (rouletteList.length) {
            Swal.fire({
                icon: "info",
                html: `<b>${rouletteList[prizeNumber].option}</b> can talk now!`
            });
            handleAddHistory(prizeNumber)
            setRouletteList(rouletteList.filter((d, i) => i !== prizeNumber));
        }
        setTimeout(() => {
            confetti.addConfetti({
                confettiNumber: 180,
                confettiColors: colors
            });
        }, 500);
    }

    return <Wheel
        mustStartSpinning={isSpinning}
        prizeNumber={prizeNumber}
        data={rouletteList.map(i => {
            const opt = i.option
            return {
                option: opt.length > 12 ? opt.substring(0, 10) + '...' : opt
            }
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