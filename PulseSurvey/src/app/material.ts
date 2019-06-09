import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports:[MatMenuModule,MatDialogModule],
  exports:[MatMenuModule,MatDialogModule]
})
export class MaterialModule { }