import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
  {
    path: 'exam-card',
    component: ExamCardComponent
  },

  {
    path: 'question-card',
    component: QuestionCardComponent
  }, 

  {
    path: 'home-component',
    component: HomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizComponentRoutingModule { }
