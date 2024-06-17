import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-lay-out-admin',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './lay-out-admin.component.html',
  styleUrl: './lay-out-admin.component.css'
})
export class LayOutAdminComponent {

}
