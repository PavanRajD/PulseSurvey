import { Component, OnInit } from '@angular/core';
import { surveyQuestions } from 'src/app/survey-questions';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {
  questions = surveyQuestions;
  constructor() { }

  ngOnInit() {
  }

}
