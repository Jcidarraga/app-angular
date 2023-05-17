import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/compat/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registarUsuario: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
    private afAuth : AngularFireAuth) {

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

    this.afAuth.createUserWithEmailAndPassword(email,password).then((user)=>{
      console.log(user);
    }).catch((error)=>{
      console.log(error)
    })
  }


  goLogin() {
    //  this.isLoggedIn = true;
    //this.router.navigate(['/login']);
    // localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }
}
