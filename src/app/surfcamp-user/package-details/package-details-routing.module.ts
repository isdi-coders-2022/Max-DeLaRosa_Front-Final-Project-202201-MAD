import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageDetailsComponent } from './package-details.component';

const routes: Routes = [{ path: '', component: PackageDetailsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PackageDetailsRoutingModule {}
