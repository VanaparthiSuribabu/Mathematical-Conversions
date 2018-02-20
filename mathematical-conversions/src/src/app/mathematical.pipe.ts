import { Pipe, PipeTransform } from '@angular/core';
 
 
@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
  transform(value: number): number {
     if(value!=null){
    return Math.sqrt(value);
    }
     else{
       return;
     }
  }
}



@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  
  transform(value: number): number {
      if(value!=null){
    return Math.pow(value, 2);
     }
     else{
       return;
     }
    
  }
}

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {
  transform(value: number): number {
     if(value!=null){
    return value * value * value;
      }
     else{
       return;
     }
  }
}

@Pipe({
  name: 'cuberoot'
})
export class CuberootPipe implements PipeTransform {
  transform(value: number): any {
     if(value!=null){
    return (Math.cbrt(value));
      }
     else{
       return;
     }
  }
}

@Pipe({
  name: 'kb'
})
export class KbPipe implements PipeTransform {
  transform(value: number): number {
     if(value!=null){
    return value;
      }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'mb'
})
export class MbPipe implements PipeTransform {

  transform(value: number): number {
      if(value!=null){
    
    return value /1024;
      }
     else{
       return;
     }
    
  }
}


@Pipe({
  name: 'gb'
})
export class GbPipe implements PipeTransform {
  
  transform(value: number): number {
      if(value!=null){
    return value / (1024 * 1024);
      }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'tb'
})
export class TbPipe implements PipeTransform {
  mb = 1024;
  gb = 1024 * this.mb;
  transform(value: number): number {
     if(value!=null){
    return value /(1024*1024*1024);
      }
     else{
       return;
     }
    
  }
}

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {
year=1;

  transform(value: number): number {
      if(value!=null){
    return value/(1*this.year);
      }
     else{
       return;
     }

  }

} @Pipe({
  name: 'months'
})
export class MonthsPipe implements PipeTransform {
 year=1;
  transform(value: number): number {
     if(value!=null){
    return value*12 
      }
     else{
       return;
     }
      }

  }


 @Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {


  transform(value: number): number {
     if(value!=null){
    return value*365; 
      }
     else{
       return;
     }
     }
}
@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(value: number): number {
     if(value!=null){
    return value*365*24; 
      }
     else{
       return;
     }
    
     }

}
@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

 transform(value: number): number {
    if(value!=null){
    return value*365*24*60;
       }
     else{
       return;
     }
  }

}
@Pipe({
  name: 'sec'
})
export class SecPipe implements PipeTransform {

  transform(value: number): number {
      if(value!=null){
    return value*365*24*60*60;
       }
     else{
       return;
     } }
  

}
@Pipe({
  name: 'decimalHexa'
})
export class DecimalHexaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,10).toString(16);
       }
     else{
       return;
     }
  }
}

@Pipe({
  name: 'decimalbinary'
})
export class DecimalbinaryPipe implements PipeTransform {

   transform(value: any, args?: any): any {
       if(value!=null){
    return parseInt(value,10).toString(2);
       }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'decimaloctal'
})
export class DecimaloctalPipe implements PipeTransform {

 
  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,10).toString(8);
       }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'binarydecimal'
})
export class BinarydecimalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,2).toString(10);
       }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'binaryhexa'
})
export class BinaryhexaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,2).toString(16);
       }
     else{
       return;
     }
  }

}

@Pipe({
  name: 'binaryoctal'
})
export class BinaryoctalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,2).toString(8);
       }
     else{
       return;
     }
  }

}


@Pipe({
  name: 'hexabinary'
})
export class HexabinaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     if(value!=null){
    return parseInt(value,16).toString(2);
       }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'hexadecimal1'
})
export class Hexadecimal1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
     if(value!=null){
    return parseInt(value,16).toString(10);
      }
     else{
       return;
     }
  }
}
@Pipe({
  name: 'hexaoctal'
})
export class HexaoctalPipe implements PipeTransform {

 
  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,16).toString(8);
      }
     else{
       return;
     }
  }


}
@Pipe({
  name: 'octalbinary'
})
export class OctalbinaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,8).toString(2);
     }
     else{
       return;
     }
    
  }

}
@Pipe({
  name: 'octaldecimal'
})
export class OctaldecimalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     if(value!=null){
    return parseInt(value,8).toString(10);
     }
     else{
       return;
     }
  }

}
@Pipe({
  name: 'octalhexa'
})
export class OctalhexaPipe implements PipeTransform {

   transform(value: any, args?: any): any {
      if(value!=null){
    return parseInt(value,8).toString(16);
      }
     else{
       return;
     }
  }

}

