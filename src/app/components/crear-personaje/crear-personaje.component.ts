import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent implements OnInit {

  personajeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.personajeForm = this.fb.group({
      personajeNombre : ['', [Validators.required]],
      personajeGenero : ['', Validators.required ],
      personajeTecnicas : ['', Validators.required ],
      personajeClan : ['', Validators.required ],
      personajeChakra : ['', Validators.required ],
    })
  }

  ngOnInit(): void {
  }

  agregarPersonaje(){
    console.log(this.personajeForm);
    this.router.navigate(['/listar-personajes']);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Personaje Creado',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
