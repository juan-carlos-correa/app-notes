import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../shared/note';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'notes',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: []
})

export class NoteListComponent implements OnInit{
  title = 'Note App';
  notes: Note[];
  notesCopy: Note[];

  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes().then(notes => this.notes = notes);
    this.assignCopy();
  }

  ngOnInit(): void {
    this.getNotes();
  }

  addNote(): void {
    this.noteService.addNote();
    this.getNotes();
  }

  removeNote(id: number): void {
    this.noteService.removeNote(id);
    this.getNotes();
  }

  changeColor(id: number, color: string) : void {
    this.noteService.changeColor(id, color);
    this.getNotes();
  }

  assignCopy(){
    this.notesCopy = Object.assign([], this.notes);
    console.log(this.notesCopy)
  }

  search(value){
    if(!value){
      return this.getNotes();
    }else{
      this.notes = Object.assign([], this.notes).filter(
        note => note.title.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
    }
    
  }

}
