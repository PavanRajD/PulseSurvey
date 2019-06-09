import { Component, OnInit,Input } from '@angular/core';
import { SurveyDetails } from 'src/app/survey-details';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-takesurvey',
  templateUrl: './takesurvey.component.html',
  styleUrls: ['./takesurvey.component.css']
})
export class TakesurveyComponent implements OnInit {
  step = 1;
  survey = SurveyDetails[0];
  constructor(public dialog:MatDialog) { }

  ngOnInit() { 
  }
  onClick(n) {
    this.step = n;
  }
  openPopup(){
    const dialogRef = this.dialog.open(ConfirmationPopupComponent,{
      width:'27%',
      height:'22%',
      panelClass: 'confirmation-dialog-container' 
      });
      
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
