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

export interface ICreateModal {
    opened: boolean,
    setOpened: Function,
    refText: RefObject<HTMLTextAreaElement> | null,
    setData: Function
}