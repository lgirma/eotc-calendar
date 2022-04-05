import { Day, DayOfYear, Month, Feast } from "."
import { getMebajaHamer } from "./base"

export function getNineveh(year: number): DayOfYear {
    const mebajaHamer = getMebajaHamer(year)
    return [mebajaHamer[0] + 4 as Month, mebajaHamer[1]]
}

export const getNenewe = getNineveh

export function getFeast(feast: Feast, year: number): DayOfYear {
    return getFeastFromNineveh(feast, getNineveh(year))
}

export function getFeastFromNineveh(feast: Feast, nineveh: DayOfYear): DayOfYear {
    const day = nineveh[1] + feast
    return [
        nineveh[0] + (day % 30 == 0 ? day/30 - 1 : Math.floor(day / 30)) as Month, 
        ((day % 30) || 30) as Day
    ]
}