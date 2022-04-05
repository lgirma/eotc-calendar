import { 
    DayOfYear, FEAST_DEBREZEIT, FEAST_ERGET, getMeTq, FEAST_HOSAENA,
    FEAST_PERAQLITOS, FEAST_SIQLET, FEAST_TINSAE, FEAST_RIKBE_KAHINAT, FEAST_TSOME_HAWARIAT, 
    i18n_Months_am, getNenewe, FEAST_ABIY_TSOM, getFeastFromNineveh 
} from ".";
import {getEvangelist, getMebacha} from "./base";
import {i18n_Days_am, i18n_Evangelists_am} from "./i18n";

const app = document.querySelector<HTMLDivElement>('#app')!

function dayToStr(day: DayOfYear): string {
    return i18n_Months_am[day[0]] + ' ' + day[1]
}

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
    <div>ደብረ ዘይት፡ <span id="lblDebrezeit" class="lbl"></span></div>
    <div>ሆሳዕና፡ <span id="lblHosana" class="lbl"></span></div>
    <div>ስቅለት፡ <span id="lblSiqlet" class="lbl"></span></div>
    <div>ትንሣኤ፡ <span id="lblTinsae" class="lbl"></span></div>
    <div>ርክበ ካህናት፡ <span id="lblRikbeKahinat" class="lbl"></span></div>
    <div>ዕርገት፡ <span id="lblErget" class="lbl"></span></div>
    <div>ጰራቅሊጦስ፡ <span id="lblPeraqliTos" class="lbl"></span></div>
    <div>ጾመ ሐዋርያት፡ <span id="lblTsomeHawariat" class="lbl"></span></div>
</div>`

document.getElementById('btnCalc')!.onclick = _ => {
    const year = parseInt((document.getElementById('inputYear')! as HTMLInputElement).value)
    document.getElementById('lblEvangelist')!.innerText = i18n_Evangelists_am[getEvangelist(year)]
    document.getElementById('lblMebacha')!.innerText = i18n_Days_am[getMebacha(year)]
    document.getElementById('lblMeTq')!.innerText = getMeTq(year).toString()
    const nenewe = getNenewe(year)
    document.getElementById('lblNineveh')!.innerText = dayToStr(nenewe)
    document.getElementById('lblAbiyTsom')!.innerText = dayToStr(getFeastFromNineveh(FEAST_ABIY_TSOM, nenewe))
    document.getElementById('lblDebrezeit')!.innerText = dayToStr(getFeastFromNineveh(FEAST_DEBREZEIT, nenewe))
    document.getElementById('lblHosana')!.innerText = dayToStr(getFeastFromNineveh(FEAST_HOSAENA, nenewe))
    document.getElementById('lblSiqlet')!.innerText = dayToStr(getFeastFromNineveh(FEAST_SIQLET, nenewe))
    document.getElementById('lblTinsae')!.innerText = dayToStr(getFeastFromNineveh(FEAST_TINSAE, nenewe))
    document.getElementById('lblRikbeKahinat')!.innerText = dayToStr(getFeastFromNineveh(FEAST_RIKBE_KAHINAT, nenewe))
    document.getElementById('lblErget')!.innerText = dayToStr(getFeastFromNineveh(FEAST_ERGET, nenewe))
    document.getElementById('lblPeraqliTos')!.innerText = dayToStr(getFeastFromNineveh(FEAST_PERAQLITOS, nenewe))
    document.getElementById('lblTsomeHawariat')!.innerText = dayToStr(getFeastFromNineveh(FEAST_TSOME_HAWARIAT, nenewe))
}
