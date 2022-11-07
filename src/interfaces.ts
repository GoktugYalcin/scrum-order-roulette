import {RefObject} from "react";

export interface IOption {
    option: string
}

export interface IRoulette {
    mustSpin: boolean,
    setMustSpin: Function,
    prizeNumber: number,
    data: Array<IOption>,
    setData: Function
}

export interface IActions {
    setPrizeNumber: Function,
    setMustSpin: Function,
    setOpened: Function,
    data: Array<IOption>
}

export interface IRef {
    current: HTMLTextAreaElement
}