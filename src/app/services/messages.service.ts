import Swal from 'sweetalert2'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  successMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      html: message,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: '#375A7F',
      background: '#f7f7f7',
    })
  }

  errorMessage(title: string, message: string, error: string) {
    Swal.fire({
      title: title,
      html: message + "<br>" + `<b>${error}</b>`,
      icon: 'error',
      confirmButtonText: "OK",
      confirmButtonColor: '#375A7F',
      background: '#f7f7f7'
    })
  }
}
