import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopUpComponent } from './UpdatePopUp.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(UpdatePopUpComponent,{ panelClass: 'updatesurvey-dialog-container' });
      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}
}
