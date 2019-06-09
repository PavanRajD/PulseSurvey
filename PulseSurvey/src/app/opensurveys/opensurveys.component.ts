import { Component, OnInit } from '@angular/core';
import { SurveyDetails } from '../survey-details';
import { MatDialog } from '@angular/material/dialog';
import { TakesurveyComponent } from './takesurvey/takesurvey.component';

@Component({
  selector: 'app-opensurveys',
  templateUrl: './opensurveys.component.html',
  styleUrls: ['./opensurveys.component.css']
})
export class OpensurveysComponent implements OnInit {
  surveyDetailsList = SurveyDetails;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(TakesurveyComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'takesurvey-dialog-container'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
