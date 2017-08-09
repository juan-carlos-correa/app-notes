import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NoteSearchComponent } from './Notes/note-search/note-search.component';
import { NoteListComponent } from './Notes/note-list/note-list.component';
import { NoteService } from './Notes/shared/note.service';
import { DashboardNormalComponent } from './Dashboard/dashboard-normal/dashboard-normal.component';
import { AppRoutingModule }     from './app-routing.module';
import { NoteSingle } from './Notes/note-single/note-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteSingle,
    NoteSearchComponent,
    NoteListComponent,
    DashboardNormalComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
