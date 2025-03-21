import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // ✅ Importation du FormsModule

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule] // ✅ Ajout de FormsModule ici
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  searchArtisans() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/artisans'], { queryParams: { search: this.searchQuery } });
    }
  }
}
