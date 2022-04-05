import {Evangelists} from "./constants";

export function getEvangelist(year: number) {
    const aa = 5500 + year
    return (aa % 4) || Evangelists.JOH
}

export function getRabit(year: number) {
    const aa = 5500 + year
    return Math.floor(aa / 4)
}

export function getWenber(year: number) {
    const aa = 5500 + year
    return (aa % 19) - 1
}

export function getMeTq(year: number) {
    return (getWenber(year) * 19) % 30
}

export function getMebacha(year: number) {
    const aa = 5500 + year
    const rem = (aa + getRabit(year)) % 7
    return rem + 1
}