import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    NavBarComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
