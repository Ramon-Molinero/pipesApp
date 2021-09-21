import { NgModule } from '@angular/core';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/noComunes/noComunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';




@NgModule({
  imports: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    PersonalizadosComponent,
  ],
  exports: [
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,
    PersonalizadosComponent,
  ],
})
export class VentasModule {}
