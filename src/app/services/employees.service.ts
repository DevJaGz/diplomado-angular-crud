import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // employees$  = new Observable<IEmployee[]>();

  constructor(private _firestore: AngularFirestore) {
    // this.getEmployees();
  }


  addEmployee(employee: IEmployee): Promise<DocumentReference<IEmployee>> {
    console.log("Adding new employee");
    return this._firestore.collection<IEmployee>('employees').add(employee)
  }


  editEmployee(id: string, employee: IEmployee): Promise<void> {
    return this._firestore.collection<IEmployee>('employees').doc(id).update(employee)
  }

  deleteEmployee(id: string | undefined): Promise<void> {
    return this._firestore.collection<IEmployee>('employees').doc(id).delete()
  }

  getEmployee$(id: string) {
    return this._firestore.collection<IEmployee>('employees').doc(id).snapshotChanges()
      .pipe(
        map(action => {
          return {
            id: action.payload.id,
            ...action.payload.data() as IEmployee
          }
        })
      )
  }

  getEmployees$(): Observable<IEmployee[]> {
    return this._firestore.collection<IEmployee>('employees').snapshotChanges()
      .pipe(
        map(actions => actions.map(action => {
          return {
            id: action.payload.doc.id,
            ...action.payload.doc.data() as IEmployee
          }
        }))
      )
  }




  // getEmployees(): Observable<IEmployee[]> {
  //   return this._firestore.collection<IEmployee>('employees').valueChanges()
  // }

  // getEmployees$(): Observable<DocumentChangeAction<IEmployee>[]> {
  //   return this._firestore.collection<IEmployee>('employees').snapshotChanges()
  // }

}
