import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-normal',
  templateUrl: './dashboard-normal.component.html',
  styleUrls: ['./dashboard-normal.component.css']
})
export class DashboardNormalComponent {
  title = 'Note App Materialize';

  constructor(private router: Router) {}

  search(text: string){
    if(text.length > 0)
      this.router.navigate(['/search', text]);
    else
      this.router.navigate(['/notes'])
  }
}