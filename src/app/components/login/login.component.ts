import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;
  loading: boolean = false;
  isLoggedIn = false;

  ngOnInit(): void {

  }

  constructor(private router: Router, private fb: FormBuilder,
    private afAuth: AngularFireAuth, private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
  goForgotPass() {
    this.router.navigate(['/forgotPass']);
  }

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.loading = true

    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {

      if (user.user?.emailVerified) {
        this.isLoggedIn = !this.isLoggedIn;
        this.router.navigate(['/pedirServicio']);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
      } else {
        this.router.navigate(['/verificarCorreo']);
      }
    }).catch((error) => {
      this.loading = false
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error')
    })
  }

  signInWithGoogle() {
    this.firebaseError.googleSignIn();
    this.isLoggedIn = !this.isLoggedIn;
    
    localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }
}