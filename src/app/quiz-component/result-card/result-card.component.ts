import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  constructor(private router: Router,public quizService: QuizServiceService) { }
  answerData: any = [];
  answers = [];
  ngOnInit(): void {
    
    this.quizService.getAnswerData().subscribe((data: any) => {
      this.answerData = data;
      this.answers = this.answerArray(this.answerData);
      console.log(this.answers);
      this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if (e.answer == this.answers[i])
              this.quizService.correctAnswerCount++;
            e.correct = this.answers[i];
          });
    });

    
  }

  answerArray(item) {
    let ans = item.map(item => {
       return item.ANS;
  })
    return ans;
  }

  Reset() {
    this.router.navigate(['/quiz-component/question-card']);
  }
}


