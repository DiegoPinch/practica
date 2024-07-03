import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { IngresareditarpersonaComponent } from './ingresareditarpersona/ingresareditarpersona.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    PersonasComponent,
    IngresareditarpersonaComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    PersonasComponent,
    IngresareditarpersonaComponent
  ]
})
export class PersonasModule { }
