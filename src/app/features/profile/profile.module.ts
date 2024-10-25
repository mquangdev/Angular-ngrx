import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routing';

@NgModule({
  imports: [CommonModule, RouterModule, ProfileRoutes],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
