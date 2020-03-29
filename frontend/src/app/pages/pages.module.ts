import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

// Modules
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

// Routes
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { IncreaserComponent } from '../components/increaser/increaser.component';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncreaserComponent,
        GraphicDoughnutComponent,
        AccountSettingsComponent,
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModule,
        ChartsModule,
        FormsModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
