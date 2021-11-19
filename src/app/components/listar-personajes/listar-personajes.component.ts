import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/Models/personaje';
import { PersonajeService } from 'src/app/services/personaje.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-listar-personajes',
	templateUrl: './listar-personajes.component.html',
	styleUrls: ['./listar-personajes.component.css']
	})
	export class ListarPersonajesComponent implements OnInit {

	listaPersonajes: Personaje[] = []

	constructor(private _personajeService: PersonajeService) { }

	ngOnInit(): void {
		this.obtenerPersonajes();
	}

	obtenerPersonajes(){
		this._personajeService.getPersonajes().subscribe(data => {
			console.log(data)
			this.listaPersonajes = data;
		}, error => {
			console.log(error)
		})
	}

	eliminarPersonaje(id: any){
		Swal.fire({
			title: 'Esta seguro de eliminar el personaje?',
			text: "Esta acción no será reversible",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '¡Deberas que si!'
		}).then((result) => {
			if (result.isConfirmed) {
				this._personajeService.deletePersonaje(id).subscribe(data => {
					Swal.fire({
						icon: 'success',
						title: 'Personaje eliminado!',
					})
					this.obtenerPersonajes();
				}, error => {
					console.log(error)
				})
			}
		})
	}

}
