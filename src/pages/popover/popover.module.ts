import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from "./popover";

@NgModule({
  declarations: [PopoverPage],
  imports: [IonicPageModule.forChild(PopoverPage)],
       entryComponents: [PopoverPage]
})
export class PopoverPageModule { }