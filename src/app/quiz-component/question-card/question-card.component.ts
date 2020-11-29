import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  questionData: any = [];
  constructor(private quizService: QuizServiceService) { 
    this.quizService.getQuestionData().subscribe((data: []) => {
      this.questionData = data;
      console.log(this.questionData);
    });
  }

  ngOnInit(): void {
  }

}
