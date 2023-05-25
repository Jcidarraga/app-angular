import { Injectable } from '@angular/core';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }


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

  googleSignIn() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/pedirServicio']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}
