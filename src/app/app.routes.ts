import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans', component: ArtisanListComponent },
  { 
    path: 'artisan/:id', 
    component: ArtisanDetailComponent, 
    data: {
      prerenderParams: async () => {
        return [
          { id: '1' },
          { id: '2' },
          { id: '3' }
        ];
      }
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];
