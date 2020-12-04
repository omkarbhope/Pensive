import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private baseUrl = "http://localhost:3000/api/quiz/";
  qns: any[];
  timer;
  seconds: number;
  qnProgress: number;
  correctAnswerCount: number = 0;
  constructor(private http: HttpClient) { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getQuestionData() {
    return this.http.get(this.baseUrl.concat('/'));
  }

  getExamData() {
    return this.http.get(this.baseUrl.concat('/exam'));
  }

  getAnswerData() {
    return this.http.get(this.baseUrl.concat('/answer'));
  }

  getOneQuestionData(id) {
    return this.http.get(this.baseUrl.concat('/'+id+'/'));
  }


  
}
