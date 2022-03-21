import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HideForRoleDirective } from './hide-for-role.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HideForRoleDirective],
  bootstrap: [AppComponent],
  exports: [HideForRoleDirective],
})
export class AppModule {}
