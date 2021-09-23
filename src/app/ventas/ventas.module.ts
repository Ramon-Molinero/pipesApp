import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../primeNg/primeNg.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/noComunes/noComunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';
import { CommonModule } from '@angular/common';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { SortPipe } from './pipes/sort.pipe';





@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    PersonalizadosComponent,
    MayusculasPipe,
    SortPipe
  ],
  exports: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    PersonalizadosComponent,
  ],
  imports: [
    PrimeNgModule,
    CommonModule
  ]
})
export class VentasModule {}
