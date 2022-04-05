import { getAbiyTsom, getMeTq, getNineveh, i18n_Months_am } from ".";
import {getEvangelist, getMebacha} from "./base";
import {i18n_Days_am, i18n_Evangelists_am} from "./i18n";

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<div>
    <style>
        .lbl {text-decoration: underline;}
    </style>
    <div>Year: <input type="number" value="2001" id="inputYear"> <button id="btnCalc">Calculate</button></div>
    <div>ወንጌላዊ፡ <span id="lblEvangelist" class="lbl"></span></div>
    <div>ዘመን መለወጫ፡ <span id="lblMebacha" class="lbl"></span></div>
    <div>መጥቅዕ፡ <span id="lblMeTq" class="lbl"></span></div>
    <div>ጾመ ነነዌ፡ <span id="lblNineveh" class="lbl"></span></div>
    <div>ዐቢይ ጾም፡ <span id="lblAbiyTsom" class="lbl"></span></div>
</div>`

document.getElementById('btnCalc')!.onclick = _ => {
    const year = parseInt((document.getElementById('inputYear')! as HTMLInputElement).value)
    document.getElementById('lblEvangelist')!.innerText = i18n_Evangelists_am[getEvangelist(year)]
    document.getElementById('lblMebacha')!.innerText = i18n_Days_am[getMebacha(year)]
    document.getElementById('lblMeTq')!.innerText = getMeTq(year).toString()
    const nineveh = getNineveh(year)
    document.getElementById('lblNineveh')!.innerText = i18n_Months_am[nineveh[0]] + ' ' + nineveh[1]
    const abiy = getAbiyTsom(year)
    document.getElementById('lblAbiyTsom')!.innerText = i18n_Months_am[abiy[0]] + ' ' + abiy[1]
}
