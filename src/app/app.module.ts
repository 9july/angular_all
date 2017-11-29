import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DesignComponent } from './component/design/design.component';
import { HeaderComponent } from './component/design/header.component';
import { FooterComponent } from './component/design/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    HeaderComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
