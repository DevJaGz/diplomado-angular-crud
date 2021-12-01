import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _firestore: AngularFirestore) {

  }


  addEmployee(employee: IEmployee): Promise<DocumentReference<IEmployee>> {
    console.log("Adding new employee");
    return this._firestore.collection<IEmployee>('employees').add(employee)
  }

  // getEmployees(): Observable<IEmployee[]> {
  //   return this._firestore.collection<IEmployee>('employees').valueChanges()
  // }

  getEmployees$(): Observable<DocumentChangeAction<IEmployee>[]> {
    return this._firestore.collection<IEmployee>('employees').snapshotChanges()
  }



}
