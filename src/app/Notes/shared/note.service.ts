import { Injectable } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable()
export class NoteService {

  notes: Note[] = NOTES;
  lastId = 11;
  
  getNotes(): Promise<Note[]> {
    return Promise.resolve(this.notes);
  }

  addNote(): void {
    this.lastId++;
    this.notes.push({ id: this.lastId, title: 'Add title', text: 'Add text', backgroundColor: 'white' });
  }

  removeNote(id: number): void {
    this.notes = this.notes
      .filter(note => note.id !== id);
  }

  changeColor(id: number, color: string): void {
    this.notes.forEach(function (note) {
      if (note.id === id)
        note.backgroundColor = color;
    })
  }

  search(str: string): void {
    // let notes = Object.assign({}, this.notes)
    // this.notes = this.notes.filter(
    //       note => note.title.search(str));
    // console.log(this.notes)
    
  }
}