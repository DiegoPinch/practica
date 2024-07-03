import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-ingresareditarpersona',
  templateUrl: './ingresareditarpersona.component.html',
  styleUrl: './ingresareditarpersona.component.css'
})
export class IngresareditarpersonaComponent implements OnInit {
  persona: Persona = { id: 0, nombre: '', apellido: '', edad: 0, cedula: '', generoId: 0 };
  modo: 'crear' | 'editar' = 'crear';

  constructor(
    private dialogRef: MatDialogRef<IngresareditarpersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { modo: 'crear' | 'editar', persona?: Persona },
    private personasService: PersonasService
  ) { }

  ngOnInit(): void {
    this.modo = this.data.modo;
    if (this.modo === 'editar') {
      if (this.data.persona) {
        this.persona = { ...this.data.persona }; 
      } else {
        console.error('Persona no recibida para editar.');
        this.cerrarModal();
      }
    }
  }

  guardarPersona(): void {
    if (this.modo === 'crear') {
      this.personasService.crearPersona(this.persona)
        .subscribe((response: Persona) => {
          this.dialogRef.close(response); 
        });
    } else {
      this.personasService.actualizarPersona(this.persona)
        .subscribe((response: Persona) => {
          this.dialogRef.close(response);
        });
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
