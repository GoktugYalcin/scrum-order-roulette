import React from 'react'
import EmptyState from '../emptyHistory.svg'
import {useHistoryStore} from "../bears/HistoryBear";

const History = () => {
    const history = useHistoryStore(state => state.history)
    return <>
        <div className="roulette__history">
            <div className="roulette__history-header">
                History
            </div>
            <div className="roulette__history-container">
                {
                    history.length ? history.map((step, index) => {
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