import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/Models/personaje';
import { PersonajeService } from 'src/app/services/personaje.service';
import Swal from 'sweetalert2';


	@Component({
	selector: 'app-crear-personaje',
	templateUrl: './crear-personaje.component.html',
	styleUrls: ['./crear-personaje.component.css']
	})
	export class CrearPersonajeComponent implements OnInit {

	personajeForm: FormGroup;
	tituloForm = "Crear Personaje";
	id: string | null;

	constructor(private fb: FormBuilder, private router: Router, private _personajeService: PersonajeService, private idRoute: ActivatedRoute){ 
		this.personajeForm = this.fb.group({
		personajeNombre : ['', [Validators.required]],
		personajeGenero : ['', Validators.required ],
		personajeTecnicas : ['', Validators.required ],
		personajeClan : ['', Validators.required ],
		personajeChakra : ['', Validators.required ],
		})
		this.id = this.idRoute.snapshot.paramMap.get('id');
		
	}

	ngOnInit(): void {
		this.accionSolicitada()
	}

	modificacion_data_Personaje(){
		console.log(this.personajeForm);

		// console.log(this.personajeForm.get('personajeNombre')?.value);

		const PERSONAJE: Personaje = {
				nombre: this.personajeForm.get('personajeNombre')?.value,
				genero: this.personajeForm.get('personajeGenero')?.value,
				tecnicas: this.personajeForm.get('personajeTecnicas')?.value,
				clan: this.personajeForm.get('personajeClan')?.value,
				chakra: this.personajeForm.get('personajeChakra')?.value
		}

		console.log(PERSONAJE)

		if(this.id !== null){
			//Editamos Personaje
			this._personajeService.putPersonaje(this.id, PERSONAJE).subscribe(data => {
				this.router.navigate(['/listar-personajes']);
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Datos Actualizados!',
					text: "Los datos del personaje se han actualizado con éxtio",
					showConfirmButton: false,
					timer: 3000
				})
				}, error => {
				console.log(error)
				}) 
		}else{
			//Creamos Personaje
			this._personajeService.postPersonajes(PERSONAJE).subscribe(data => {
				this.router.navigate(['/listar-personajes']);
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Personaje Creado!',
					text: "El personaje se ha creado con éxtio",
					showConfirmButton: false,
					timer: 3000
				})
				}, error => {
				console.log(error)
				})  
		}
		
	}

	accionSolicitada(){
		if(this.id !== null){
			
			this.tituloForm = "Editar Personaje";
			this._personajeService.getPersonaje(this.id).subscribe(data =>{
			this.personajeForm.setValue({
				personajeNombre : data.nombre,
				personajeGenero : data.genero,
				personajeTecnicas : data.tecnicas,
				personajeClan : data.clan,		
				personajeChakra : data.chakra  	
			})
		})

		}
			
	}

	}