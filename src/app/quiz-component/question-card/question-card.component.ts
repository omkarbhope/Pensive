import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  answerData: any = [];
  answers = [];
  constructor(private router: Router,public quizService: QuizServiceService) { };
  ngOnInit(): void {
    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;
    this.quizService.getQuestionData().subscribe((data: any) => {
      this.quizService.qns = data;
      this.startTimer();
    });
    
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    },1000);
  }

  Answer(QnID,choice) {
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    this.quizService.qnProgress++;
    if (this.quizService.qnProgress == this.quizService.qns.length) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/quiz-component/result-card']);
    }
  }

  

  

}
