import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent implements OnInit {

  personajeForm: FormGroup;

  constructor(private fb: FormBuilder) { 
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
  }

}
