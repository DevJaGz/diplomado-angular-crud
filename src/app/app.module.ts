//---------------
//--- Angular --- 
//---------------

//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//Components
import { AppComponent } from './app.component';

//Environments
import { environment } from '../environments/environment';

//-------------------
//--- Third Party --- 
//-------------------


//--------------
//--- Custom --- 
//--------------

//Modules
import { SharedModule } from './components/views/shared/shared.module';

//Services
import { EmployeesService } from './services/employees.service';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BlockUIModule.forRoot()
  ],

  // TODO: Preguntar si se deja así o no?
  // providers: [
  //   EmployeesService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
