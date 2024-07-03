import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';
import { PersonasService } from '../services/personas.service';
import { MatDialog } from '@angular/material/dialog';
import { IngresareditarpersonaComponent } from './ingresareditarpersona/ingresareditarpersona.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  displayedColumns: string[] = ['id', 'cedula', 'nombre', 'apellido', 'edad', 'generoid', 'acciones'];


  constructor(private personasService: PersonasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personasService.obtenerPersonas()
      .subscribe(personas => {
        this.personas = personas;
      });
  }

  abrirModalIngreso(): void {
    const dialogRef = this.dialog.open(IngresareditarpersonaComponent, {
      width: '500px', 
      data: { modo: 'crear' } 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarPersonas();
    });
  }

  abrirModalEdicion(persona: Persona): void {
    const dialogRef = this.dialog.open(IngresareditarpersonaComponent, {
      width: '500px',
      data: { modo: 'editar', persona }
    });

    dialogRef.afterClosed().subscribe(result => {
        this.cargarPersonas();
    });
  }

  eliminarPersona(id: number): void {
    this.personasService.eliminarPersona(id)
      .subscribe(() => {
        this.cargarPersonas();
      });
  }

}
