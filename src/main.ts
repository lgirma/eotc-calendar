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
</div>`

document.getElementById('btnCalc')!.onclick = _ => {
    const year = parseInt((document.getElementById('inputYear')! as HTMLInputElement).value)
    document.getElementById('lblEvangelist')!.innerText = i18n_Evangelists_am[getEvangelist(year)]
    document.getElementById('lblMebacha')!.innerText = i18n_Days_am[getMebacha(year)]
}
