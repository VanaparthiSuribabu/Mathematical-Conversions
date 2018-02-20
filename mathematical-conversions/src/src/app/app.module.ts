import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CubePipe,PowerPipe,SqrtPipe,CuberootPipe,KbPipe,MbPipe,GbPipe,TbPipe,YearPipe,MonthsPipe,DaysPipe,HoursPipe,MinutesPipe,SecPipe,DecimalHexaPipe,DecimaloctalPipe,BinarydecimalPipe,BinaryhexaPipe,BinaryoctalPipe,DecimalbinaryPipe,HexabinaryPipe,Hexadecimal1Pipe,HexaoctalPipe,OctalbinaryPipe,OctaldecimalPipe,OctalhexaPipe} from './mathematical.pipe';

 import { MathconversionComponent } from './mathconversion/mathconversion.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerPipe,
    SqrtPipe,
    CuberootPipe,
    CubePipe,
    KbPipe,
    MbPipe,
    GbPipe,
    TbPipe,
    YearPipe,
    MonthsPipe,
    DaysPipe,
    HoursPipe,
    MinutesPipe,
    SecPipe,
    MathconversionComponent,
    DecimalHexaPipe,
    DecimalbinaryPipe,
    DecimaloctalPipe,
    BinarydecimalPipe,
    BinaryhexaPipe,
    BinaryoctalPipe,
    DecimalbinaryPipe,
    HexabinaryPipe,
    Hexadecimal1Pipe,
    HexaoctalPipe,
    OctalbinaryPipe,
    OctaldecimalPipe,
    OctalhexaPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

