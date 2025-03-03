import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavItem } from '@interfaces/nav-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { name: 'Home',  path: 'home', image: 'home' },
    { name: 'Fruits',  path: 'fruits', image: 'fruits' },
    { name: 'Profile',  path: 'profile', image: 'profile' },
  ]
}
