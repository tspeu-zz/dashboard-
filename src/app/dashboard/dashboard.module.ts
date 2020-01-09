import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
//

@NgModule({
  declarations: [Page1Component, Page2Component, Page3Component],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
