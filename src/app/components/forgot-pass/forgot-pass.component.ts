import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  recuperarUser: FormGroup;
  loading: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,
    private afAuth: AngularFireAuth, private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService) {
    this.recuperarUser = this.fb.group({
      correo: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  recuperar() {
    const email = this.recuperarUser.value.correo
    this.loading = true;

    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.toastr.info('Le envie el correo mmhuevo', 'Recuperar contraseña')
      this.router.navigate(['/login'])
    }).catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error')
    })
  }
}
