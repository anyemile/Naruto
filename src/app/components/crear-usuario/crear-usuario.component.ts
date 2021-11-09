import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.usuarioForm = this.fb.group({
      usuarioTipIdentificacion:['', Validators.required],
      usuarioIdentificacion:['', Validators.required],
      usuarioEmail:['', Validators.required],
      usuarioTelefono:['', Validators.required],
      usuarioContraseña:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
    this.router.navigate(['/lista-usuario']);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
