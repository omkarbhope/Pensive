import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/quiz-component/home-component', 
    pathMatch: 'full' 
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'quiz-component',
    loadChildren: () =>
      import('./quiz-component/quiz-component.module').then(m => m.QuizComponentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
