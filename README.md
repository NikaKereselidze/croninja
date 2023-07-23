
![croninja logo](https://github.com/NikaKereselidze/croninja/assets/71851989/b492936f-42e5-4fb8-88c5-de8f8d6807c1)
<p align="center" style="margin: 0px auto; margin-top: 15px; max-width: 600px">
    <a href="https://npmjs.com/package/croninja"><img src="https://img.shields.io/npm/v/croninja"></a>
    <a href="#"><img src="https://img.shields.io/npm/dt/croninja"/></a>
</p>

## Introduction

> A lightweight cron time parser

## Code Samples

#### INPUT
```js
const { Croninja } = require("croninja")

const cron = Croninja({
    second: 10,
    minute: 2,
    hour: 1,
    day: 0,
    month: 0,
  });
```

If current time is for e.g 2023 July 23 SUN 13:43:20, cronjob will run after 1 hour 2 minutes and 10 seconds (at 2023 July 23 SUN 14:45:40)

#### OUTPUT
```
40 45 14 23 7 * 
```

## Example of use
```js
const { Croninja } = require("croninja");
const cron = require("node-cron");

const crontime = Croninja({
  second: 10,
  minute: 1,
  hour: 0,
  day: 0,
  month: 0,
});

cron.schedule(
  crontime,
  async () => {
    try {
      console.log("This job ran after 1 minute and 10 seconds");
    } catch (e) {
      console.error(e);
    }
  },
  { scheduled: true }
);
```

## List of parameters


| Parameters  | Type |Description |
| ------------- | ------------- | ------------- |
| `offsets`  | object | required (fields in object: second, minute, hour, day and month) |
| `dayOfWeek`  | string | optional (value must be mon, tue, wed, thu, fri, sat or sun) |

## Installation

NPM:

```
npm install croninja
```

Yarn:

```
yarn add croninja
```
