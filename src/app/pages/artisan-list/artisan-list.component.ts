import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-artisan-list',
  standalone: true,
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class ArtisanListComponent {
  artisans = [
    { id: 1, nom: 'Jean Dupont', specialite: 'Plombier', ville: 'Lyon' },
    { id: 2, nom: 'Sophie Martin', specialite: 'Électricienne', ville: 'Grenoble' },
    { id: 3, nom: 'Paul Morel', specialite: 'Menuisier', ville: 'Clermont-Ferrand' }
  ];

  filteredArtisans = [...this.artisans];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const search = params['search'] ? params['search'].toLowerCase() : '';
      this.filteredArtisans = this.artisans.filter(artisan =>
        artisan.nom.toLowerCase().includes(search) ||
        artisan.specialite.toLowerCase().includes(search) ||
        artisan.ville.toLowerCase().includes(search)
      );
    });
  }
}
