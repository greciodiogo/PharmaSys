import { BoxModule } from '../../../shared/components/box/box.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ConnectionModule } from '@app/shared/components/connection/connection.module';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { SharedMaterialModule } from '@app/shared/sharedMaterial.module';
import { SharedGlobalModule } from '@app/shared/sharedGlobal.module';
import { NgApexchartsModule } from 'ng-apexcharts';

  @NgModule({
  declarations: [ DashboardComponent, BarChartComponent, PieChartComponent ],
  imports: [
    DashboardRoutingModule,
    ConnectionModule,
    BoxModule,
    SharedMaterialModule,
    SharedGlobalModule,
    NgApexchartsModule
  ],
})
export class DashboardModule { }
