import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 Import this

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound {

}
