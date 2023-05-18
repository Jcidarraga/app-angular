import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }


  codeError(code: string) {
    switch (code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El email ya esta registrado'

      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es debil'

      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo invalido'

      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta'

      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El email no esta registrado'

      default:
        return 'error desconocido'
    }
  }
}
