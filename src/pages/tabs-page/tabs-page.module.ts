import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from "./tabs-page";
@NgModule({
  declarations: [TabsPage],
  imports: [IonicPageModule.forChild(TabsPage)],
    entryComponents: [TabsPage]
})
export class TabsPageModule { }