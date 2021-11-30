//---------------
//--- Angular --- 
//---------------

//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';


//--------------
//--- Custom --- 
//--------------

//Modules
import { SharedModule } from './components/views/shared/shared.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
