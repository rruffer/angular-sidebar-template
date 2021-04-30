import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    PerfectScrollbarModule,
    BsDropdownModule,
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
})
export class SharedModule { }
