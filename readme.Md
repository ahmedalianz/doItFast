doitfast is a collection of functions that can help you do it FAST .

getIntervalsBetweenShifts :

given the start & end time in 24Hr format this function will return an array of the times in between with interval of of 30 minutes as a default but it can be changes keeping in mind this format "hh:mm" & smaller than the difference between the shift duration

getIntervalsBetweenShifts(startTime,endTime,interval,isItToday?)

```
const { getIntervalsBetweenShifts, isItToday } = require("doitfast");

let shifts = getIntervalsBetweenShifts("09:00", "17:00","00:30", isItToday(new Date()));
//isItToday is a function returns a boolean indicates if the input date is tody or not
// using today as a paramenter will remove the intervals before now,you can use any day instead of new Date() or you can simply input true/false
```

arrangDays :

simple function accepts an array of dates and arrange them accending or decending

```
const { arrangeDays } = require("doitfast");

let arrangedDays = arrangeDays([
"5/22/2012",
"5/21/2012",
"5/20/2012",
new Date(),"accending"
]);
```

appendItem :

simple function to append values to keys helpful when sending api requests that upload images

```
const { appendItem } = require("doitfast");
let data=formData()
let values={
name:"Max",
age:28,
//profile_photo:File  i.e the uploaded file
}
Object.keys(values).forEach((key) => {
      appendItem(data, key, values[key]);
    });
```

calcDiscount is to caculate total price of a product depending on the quantity if more than one the price will be caculated for the discountPrice

calcDiscount (basePrice, discountPrice, quantity, minCharge)

```
const { calcDiscount } = require("doitfast");

let totalPrice = calcDiscount(100, 50, 2, 10);

```

the package will be updated regularly
