import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ArtisanDetailComponent {
  artisan: any;
  messageEnvoye = false;

  nom: string = '';
  objet: string = '';
  message: string = '';

  artisans = [
    { id: 1, nom: 'Jean Dupont', specialite: 'Plombier', ville: 'Lyon', description: 'Expert en plomberie depuis 15 ans.', photo: 'assets/plombier.jpg' },
    { id: 2, nom: 'Sophie Martin', specialite: 'Électricienne', ville: 'Grenoble', description: 'Électricienne qualifiée pour tous vos travaux.', photo: 'assets/electricien.jpg' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const artisanId = Number(this.route.snapshot.paramMap.get('id'));
    this.artisan = this.artisans.find(a => a.id === artisanId);
  }

  envoyerMessage() {
    const donneesMessage = {
      destinataire: this.artisan.nom,
      nom: this.nom,
      objet: this.objet,
      message: this.message
    };

    console.log('Message envoyé :', donneesMessage);
    this.messageEnvoye = true;

    // Réinitialiser le formulaire après l'envoi
    this.nom = '';
    this.objet = '';
    this.message = '';

    setTimeout(() => this.messageEnvoye = false, 3000); // Masquer le message après 3s
  }
}
