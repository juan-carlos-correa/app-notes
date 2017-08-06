import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListComponent } from './Notes/note-list/note-list.component';
import { NoteSearchComponent } from './Notes/note-search/note-search.component';
import { DashboardNormalComponent } from './Dashboard/dashboard-normal/dashboard-normal.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'notes', pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NoteListComponent
  },
  {
    path: 'dashboard',
    component: DashboardNormalComponent
  },
  {
    path: 'search/:search',
    component: NoteSearchComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}