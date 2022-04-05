import { Day, Evangelist, Month } from ".";
import {EVANGELIST_JOHN, MONTH_MESKEREM, MONTH_TIKIMT} from "./constants";

export function getEvangelist(year: number): Evangelist {
    const aa = 5500 + year
    return ((aa % 4) || EVANGELIST_JOHN) as Evangelist
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

export function getMebacha(year: number): Day {
    const aa = 5500 + year
    const rem = (aa + getRabit(year)) % 7
    return (rem + 1) as Day
}

export function getMebajaHamer(year: number): [a: Month, d: Day] {
    const mebacha = getMebacha(year)
    const meTq = getMeTq(year)

    const meTqMonth = (meTq >= 2 && meTq <= 14) ? MONTH_TIKIMT : MONTH_MESKEREM;
    const meTqDay = (((meTqMonth-1) * 30 + mebacha + meTq - 1) % 7) || 7
    const tewsakTable = [0, 6, 5, 4, 3, 2, 8, 7]
    const meTqAndDayTewsak = meTq + tewsakTable[meTqDay]
    //console.log({meTqDay, meTqMonth, meTq, meTqAndDayTewsak})

    return [
        meTqMonth + (meTqAndDayTewsak > 30 ? 1 : 0) as Month, 
        meTqAndDayTewsak % 30 as Day
    ]
}