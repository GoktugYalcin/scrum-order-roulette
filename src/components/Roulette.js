import React from 'react'
import JSConfetti from "js-confetti";
import Swal from "sweetalert2";
import {Wheel} from "react-custom-roulette";

const Roulette = ({mustSpin, setMustSpin, prizeNumber, data, setData}) => {
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

    const handleStopSpinning = () => {
        setMustSpin(false);
        const confetti = new JSConfetti();
        confetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 500
        });
        setTimeout(() => {
            if (data.length) {
                Swal.fire({
                    icon: "info",
                    html: `Chosen one is <b>${data[prizeNumber].option}</b> for talk now!`
                });
                setData(data.filter((d, i) => i !== prizeNumber));
            }
        }, 400);
    }

    return <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
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