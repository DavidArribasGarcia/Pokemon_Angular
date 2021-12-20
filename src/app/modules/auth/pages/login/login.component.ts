import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      user: ['userTest',[Validators.required]],
      pass: ['Test1234!',[Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z$@$!%*?&].{8,}'
      ),
      //Al menos 8 caracteres
      //Minusculas
      //Mayusculas
      //Numeros
      //Caracteres especiales
    ],
  ],
    });

  }

  //Validaciones del usuario
  get userValid(): boolean | undefined {
    return (this.form.get('user')?.hasError('required') && this.form.get('user')?.touched);
  }

  //Validaciones de la password
  get passValid(): boolean | undefined {
    return (this.form.get('pass')?.hasError('required') && this.form.get('pass')?.touched);
  }


  handleSubmit(): void{
    if(this.form.valid){
      this.authService.autorizado();
      this.router.navigate(['home']);
    }else{
      this.form.markAllAsTouched();
    }
  }
}
