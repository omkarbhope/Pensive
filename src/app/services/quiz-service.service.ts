import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private baseUrl = "http://localhost:3000/api/quiz/";

  constructor(private http: HttpClient) { }

  getQuestionData() {
    return this.http.get(this.baseUrl.concat('/'));
  }

  getExamData() {
    return this.http.get(this.baseUrl.concat('/exam'));
  }

  getOneQuestionData(id) {
    return this.http.get(this.baseUrl.concat('/'+id+'/'));
  }



  
}
