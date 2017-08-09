import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Note } from '../shared/note';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css']
})
export class NoteSearchComponent implements OnInit {
  public search: string;
  @Input() notes: Note[];

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
  ) {}

  getNotes(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.noteService.search(params.get('search')))
      .subscribe(notes => this.notes = notes);
  }

  ngOnInit(){
    this.getNotes();
  }
}