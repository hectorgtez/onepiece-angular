import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {
  public showSidebar: boolean = true;

  public toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
