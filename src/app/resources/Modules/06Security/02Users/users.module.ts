import { NgModule } from '@angular/core';
import { ArchwizardModule } from 'angular-archwizard';

import { UsersRoutingModule } from './users-routing.module';
import { SharedGlobalModule } from '@app/shared/sharedGlobal.module';
import { SharedMaterialModule } from '@app/shared/sharedMaterial.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    SharedGlobalModule,
    SharedMaterialModule,
    UsersRoutingModule,
    ArchwizardModule,
    MatTableModule,
    MatCheckboxModule
  ],
})
export class UsersModule {}
