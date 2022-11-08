import React from 'react'
import EmptyState from '../emptyHistory.svg'
import {RouletteData} from "../redux/slices/rouletteSlice";
import {useAppSelector} from "../redux/hooks";

const History = () => {
    const history: RouletteData[] = useAppSelector(store => store.roulette.historyValue)
    return <>
        <div className="roulette__history">
            <div className="roulette__history-header">
                History
            </div>
            <div className="roulette__history-container">
                {
                    history.length ? history.map((step: RouletteData, index: number) => {
                        return <div className="roulette__history-container_item" key={index}>
                            {`${index+1}. ${step.option}`}
                        </div>
                    }) : <div className="roulette__history-container_empty">
                        <div className="roulette__history-container_empty-container">
                            <img src={EmptyState} alt={"History is empty."}/>
                            No one has selected on roulette.
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
}

export default History