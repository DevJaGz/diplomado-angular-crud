import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _firestore: AngularFirestore) {

  }


  addEmployee(employee: IEmployee): Promise<any> {
    console.log("Adding new employee");
    return this._firestore.collection('employees').add(employee)
  }
}
