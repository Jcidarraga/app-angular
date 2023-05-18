import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registarUsuario: FormGroup;
  loading: boolean = false;

  ngOnInit() {
  }

  constructor(private router: Router, private fb: FormBuilder,
    private afAuth: AngularFireAuth, private toastr: ToastrService, 
    private firebaseError: FirebaseCodeErrorService) {

    this.registarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required]
    })
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
        this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error')
      })
  }
}
