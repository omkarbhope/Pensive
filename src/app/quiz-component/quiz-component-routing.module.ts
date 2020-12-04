import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExamCardComponent } from './exam-card/exam-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';


const routes: Routes = [
  {
    path: 'exam-card',
    component: ExamCardComponent
  },

  {
    path: 'contact-card',
    component: ContactCardComponent
  },

  {
    path: 'question-card',
    component: QuestionCardComponent
  }, 

  {
    path: 'result-card',
    component: ResultCardComponent
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
