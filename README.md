# eotc-calendar

A javascript (written in Typescript) library to calculate movable feasts in the Ethiopian Orthodox Tewahedo Church calendar

## Quick Start

Install the library from npm:

```
npm i eotc-calendar
```

## Usage

Import the appropriate method from the module. For example, to get the evangelist for a given year:

```javascript
import {getEvangelist} from 'eotc-calendar'

getEvangelist(2014) // returns 2 (which means St. Mark / ቅዱስ ማርቆስ)
```

To get dates of the great lent (ዐቢይ ጾም) and easter (ትንሣኤ) dates:

```javascript
import {getFeast, FEAST_TINSAE, FEAST_ABIY_TSOM} from 'eotc-calendar'

getFeast(FEAST_ABIY_TSOM, 2014) // returns [6, 21]
getFeast(FEAST_TINSAE, 2014) // returns [8, 16]
```

## API

### Evangelists (ወንጌላውያን)

To get evangelist for a given year, use `getEvangelist()` which returns one of:

```javascript
EVANGELIST_MATTHEW = 1
EVANGELIST_MARK = 2
EVANGELIST_LUKE = 3
EVANGELIST_JOHN = 4
```

For example,


```javascript
console.log(getEvangelist(2014)) // logs 2 
```

## New Years Day (መባቻ)

To get on which day of the week new year falls on, use `getMebacha()` which returns one of:

```javascript
DAY_MON = 1
DAY_TUE = 2
DAY_WED = 3
DAY_THU = 4
DAY_FRI = 5
DAY_SAT = 6
DAY_SUN = 7
```

For example,

```javascript
console.log(getMebacha(2014)) // logs 6 (which is Saturday)
```

## Moving Feasts

To get on which day of the year a feast falls on, use `getFeast(feast, year)`. The `feast` parameter is one of the numbers:

```javascript
FEAST_ABIY_TSOM = 14
FEAST_DEBREZEIT = 41
FEAST_HOSAENA = 62
FEAST_SIQLET = 67
FEAST_TINSAE = 69
FEAST_RIKBE_KAHINAT = 93
FEAST_ERGET = 108
FEAST_PERAQLITOS = 118
FEAST_TSOME_HAWARIAT = 119
```

For example, to get the date of start of the great lent (ዐቢይ ጾም) for the year 2014 E.C.

```javascript
import {getFeast, FEAST_ABIY_TSOM} from 'eotc-calendar'

getFeast(FEAST_ABIY_TSOM, 2014) // returns [6, 21]
```

The return value is a two-element array in the format: `[month, date]`

To get the start date of the fast of Nineveh (ጾመ ነነዌ) use `getNineveh(year)` method.

```javascript
import {getNineveh} from 'eotc-calendar'

getNineveh(2014) // returns [6,7]
```

## i18n

The library contains utility methods to display day, month, etc. values in Amharic/Geez.

For evangelists (ወንጌላውያን), use `i18n_Evangelists_am`, as:

```javascript
import {i18n_Evangelists_am, EVANGELIST_LUKE} from 'eotc-calendar'

i18n_Evangelists_am[EVANGELIST_LUKE] // Outputs ሉቃስ
i18n_Evangelists_am[4] // Outputs ዮሐንስ
```

For days of the week, use `i18n_Days_am`, as:

```javascript
import {i18n_Days_am, DAY_MON} from 'eotc-calendar'

i18n_Days_am[DAY_MON] // Outputs ሰኞ
i18n_Days_am[2] // Outputs ማክሰኞ
```

For months of the year, use `i18n_Months_am`, as:

```javascript
import {i18n_Months_am, MONTH_MESKEREM} from 'eotc-calendar'

i18n_Months_am[MONTH_MESKEREM] // Outputs መስከረም
i18n_Months_am[2] // Outputs ጥቅምት
```