import { getMebajaHamer } from "./base"

export function getNineveh(year: number) {
    const mebajaHamer = getMebajaHamer(year)
    return [mebajaHamer[0] + 5, mebajaHamer[1]]
}

export function getAbiyTsom(year: number) {
    const nineveh = getNineveh(year)
    return [nineveh[0], 0]
}

export function getDebrezeit(year: number) {
    return [0, 0]
}

export function getHosaena(year: number) {
    return [0, 0]
}

export function getSiqlet(year: number) {
    return [0, 0]
}

export function getTinsae(year: number) {
    return [0, 0]
}

export function getErget(year: number) {
    return [0, 0]
}

export function getPeraqliTos(year: number) {
    return [0, 0]
}

export function getTsomeHawariat(year: number) {
    return [0, 0]
}