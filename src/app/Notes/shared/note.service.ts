import { Injectable } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable()
export class NoteService {

  lastId = NOTES.length;

  getNotes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }

  addNote(): void {
    this.lastId++;
    let note: Note = {id: this.lastId, title: '', content: '', backgroundColor: 'white'}
    NOTES.push(note);
  }

  removeNote(id: number): void {
    let index = NOTES.findIndex(note => note.id === id)
    NOTES.splice(index, 1);
  }

  search(text: string): Promise<Note[]>{
    return this.getNotes()
      .then(notes => notes.filter(notes => (
        notes.title.toLowerCase().lastIndexOf(text) !== -1)
        || notes.content.toLowerCase().lastIndexOf(text) !== -1
      ))
  }

  changeColor(id: number, color: string): void{
    NOTES.forEach(function(note) {
      if (note.id === id)
        note.backgroundColor = color;
    })
  }
}