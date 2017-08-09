import { Component, Input } from '@angular/core';

import { Note } from '../shared/note';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'note-single',
  templateUrl: 'note-single.component.html',
  styleUrls: ['note-single.component.css']
})
export class NoteSingle {
  @Input() note: Note;

  constructor(
    private noteService: NoteService
  ) { }

  removeNote(id: number){
    this.noteService.removeNote(id);
  }

  changeColor(id: number, color: string) : void {
    this.noteService.changeColor(id, color);
  }
}