import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // הפנייה לדף הבית כברירת מחדל
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact},
  { path: '**', redirectTo: 'home' } // במקרה של ניווט לדף לא קיים, יחזיר לבית
];