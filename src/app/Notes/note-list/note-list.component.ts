import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../shared/note';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes: Note[];

  constructor(
    private noteService: NoteService
  ) {}

  getNotes(): void {
    this.noteService.getNotes().then(notes => this.notes = notes);
  }

  ngOnInit(): void {
    this.getNotes();
  }

  addNote(): void {
    this.noteService.addNote();
  }
}