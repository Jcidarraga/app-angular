import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registarUsuario: FormGroup;

  loading: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,
    private afAuth: AngularFireAuth, private toastr: ToastrService) {

    this.registarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required]
    })
  }

  ngOnInit() {
  }


  registrar() {
    const email = this.registarUsuario.value.email;
    const password = this.registarUsuario.value.password;
    const repetirPassword = this.registarUsuario.value.repetirPassword;


    if (password !== repetirPassword) {
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error');
      return;
    }

    this.loading = true;

    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.loading = false;
        this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado')
        this.router.navigate(['./login'])

      }).catch((error) => {
        console.log(error)
        this.toastr.error(this.firebaseError(error.code), 'Error')
      })
  }

  firebaseError(code: string) {
    this.loading = false;
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El email ya esta registrado'
      case 'auth/weak-password':
        return 'La contraseña es debil'
      case 'auth/invalid-email':
        return 'Correo invalido'
      default:
        return 'error x'
    }
  }

  goLogin() {
    //  this.isLoggedIn = true;
    //this.router.navigate(['/login']);
    // localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }
}
