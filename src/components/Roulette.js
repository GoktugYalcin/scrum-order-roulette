import React from 'react'
import JSConfetti from "js-confetti";
import Swal from "sweetalert2";
import {Wheel} from "react-custom-roulette";

const Roulette = ({mustSpin, setHistory, history, setMustSpin, prizeNumber, data, setData}) => {
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

    const handleAddHistory = (prizeNumber) => {
        const mainData = JSON.parse(localStorage.getItem("scrum-wheel"))
        if(mainData && mainData[prizeNumber]) {
            setHistory([...history, data[prizeNumber]])
        }
    }

    const handleStopSpinning = () => {
        setMustSpin(false);
        const confetti = new JSConfetti();
        if (data.length) {
            Swal.fire({
                icon: "info",
                html: `<b>${data[prizeNumber].option}</b> can talk now!`
            });
            handleAddHistory(prizeNumber)
            setData(data.filter((d, i) => i !== prizeNumber));
        }
        setTimeout(() => {
            confetti.addConfetti({
                confettiNumber: 180,
                confettiColors: colors
            });
        }, 500);
    }

    return <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data.map(i => {
            const item = {}
            item.optionShortname = i.option
            if(i.option.length > 12) {
                item.option = i.option.substring(0, 10) + '...'
            }
            else {
                item.option = i.option
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