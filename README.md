
# Mathematical Conversions

In this, pipes are used to convert from one unit to another unit. For each converter, I have created one pipe. The pipes are cube pipe, square pipe, sqrt pipe ,cuberoot, mb pipe,gb pipe,tb pipe,months pipe ,days pipe,hours pipe, minutes pipe, seconds pipe,decimalbinary pipe,decimaloctal pipe and decimalhexa pipe. This is used to convert  mathematical numbers to cube,sqrt,cuberoot,square of that number ,years to months,hours,minutes,days,seconds ,memory units to mb,gb,tb and decimal to binary,octal,hexa decimal .

## Using the complete angular project

Download the mathematical-conversions project into your project and run the application.

### Installing

```
> npm install
```

### Run server

```
> ng serve
``` 

## How To Use
- number | mathmatical operations: "Number":"Cube"
- memory | memory conversions: "kb":"mb"
- time | time conversions: "year":"months"
- numbering system | numbering system conversions: "decimal":"octal"

<table>
  <tr><th>Pipe Name</th><th>Convert From(unit)</th><th>Convert To(units)</th><th>Description</th><th>Example</th></tr>
  <tr><td>number Pipe</td><td>number</td><td>sqrt<br>square<br>cube<br>cuberoot<td>'number pipe' converts one number to its other formats, number to the sqrt etc.</td><td>Example For Inputs are:<br>number:2,3,4<br>square:4,9,16,..<br>and etc</td></tr>
  <tr><td>memory Pipe</td><td>memory unit</td><td>kb/mb<br>kb/gb<br>kb/tb<br><td>'memory pipe' converts the input values from kb/mb and to all other units like gb and tb. </td><td>Examples are:<br>1024<br>mb:1</td></tr>
  <tr><td>time pipe</td><td>year</td><td>months<br>days<br>hours<br>minutes<br>seconds</td><td>'time pipe' converts from year to month, days,minutes,hours and seconds .</td>><td>Examples are:<br>Any digits 1<br>Months:12</td></tr>
  <tr><td>numbersystem conversions pipe</td><td>decimal number</td><td><br>Binary<br>Octal<br>Hexadecimal<td>'number system conversion pipe' converts from decimal to binary,octal and hexadecimal.</td>><td>Examples are:<br>Any decimal values for all units like 10<br>Binary:1010</td></tr>
</table>

## Output Format: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/Screenshot (13).png">

**To preview the demo of this Component please [Click here](https://stackblitz.com/edit/angular-uoz1z7-ls8t7m?embed=1&file=src/app/converters/converters.component.html&hideNavigation=1&view=preview)**


### For creating pipes
Custom pipes use transform method for pipes execution.
### Eg: 
```
  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,10).toString(16);
       }

```

## Input
Inputs for the component is numerical value. 
## Output
Output of this component is user required converted numerical value in that corresponding units.

