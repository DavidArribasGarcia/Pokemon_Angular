import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  @ViewChild('img') img: ElementRef;
  image: string;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private teamService : TeamService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Math.floor(Math.random() * 10) + 1000],
      name: ['', [Validators.required]],
      pic: ['', [Validators.required]],
      inTeam: [false],
      upload: [''],
    });
  }

  get nameValid(): boolean | undefined {
    return (
      this.form.get('name')?.hasError('required') &&
      this.form.get('name')?.touched
    );
  }
  get spriteValid(): boolean | undefined {
    return (
      this.form.get('pic')?.hasError('required') &&
      this.form.get('pic')?.touched
    );
  }

  handleSubmit() {
    if (this.form.valid) {
      this.teamService.crearPokemonCustom(this.form.value);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${this.form.get('name')?.value} se creó correctamente!`,
        showConfirmButton: false,
        timer: 2000,
      });
      this.router.navigate(['/pokemon']);
    } else {
      this.form.markAllAsTouched();
    }
  }
  handleClick(): void {
    this.img.nativeElement.click();
  }
  uploadImg(path: string): void {
    if (path) {
      let newPath = path
        .replace(/\\/g, '')
        .replace('fakepath', '/assets/img/')
        .replace('C:', '');
      this.form.get('pic')?.setValue(newPath);
    }
  }
}
