import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizServiceService } from 'src/app/services/quiz-service.service';


@Component({
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.css']
})
export class ExamCardComponent implements OnInit {

  examData: any = [];
  register: FormGroup;
  examID = 0;
  constructor(private quizService: QuizServiceService) { 
    this.quizService.getExamData().subscribe((data: []) => {
      this.examData = data;
      console.log(this.examData);
    });
  };

  ngOnInit() :void {
    
  }

  getExamID(id) {
    this.examID = id;
    console.log(this.examID);
  }
  

}
