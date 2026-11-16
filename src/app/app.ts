
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  nom = 'Mamadou Bhoye Sow';

  profession = 'Développeur Web';

  description = "Étudiant en Licence 4 MIAGE, spécialisé en Programmation et Développement Web. Passionné par la conception d'applications modernes et de solutions numériques.";

  competences = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'PHP',
    'Java',
    'C#',
    'SQL Server',
    'Git & GitHub'
  ];

  projets = [
    {
      nom: 'EcolePro',
      categorie: 'Application de gestion scolaire',
      description: 'Une solution numérique destinée à faciliter la gestion administrative et pédagogique des établissements scolaires.'
    },
    {
      nom: 'Portfolio personnel',
      categorie: 'Développement Web',
      description: 'Un site web personnel pour présenter mon parcours, mes compétences et mes réalisations.'
    },
    {
      nom: 'Applications Web',
      categorie: 'Programmation',
      description: 'Conception et développement de solutions informatiques adaptées aux besoins des utilisateurs.'
    }
  ];

  annee = new Date().getFullYear();
}
