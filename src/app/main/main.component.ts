import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public mainNav=false;
  activity=[
    {
      'headline':'Forces',
      'descrip':'Musculation'
    },
    {
      'headline':'Cardio',
      'descrip':'Cyclisme en salle'
    },
    {
      'headline':'Foces',
      'descrip':'kettlebell'
    },
  ];
  activityG=[
    {
      'headline':'Entraînement',
      'descrip':'Boxe'
    },
    {
      'headline':'Cardio',
      'descrip':'Cyclisme en salle'
    }
  ]
  detail_item=[
    {
      'icon':'fas fa-dumbbell',
      'title':'Equipement',
      'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
    },
    {
      'icon':'fab fa-nutritionix',
      'title':'Régime alimentaire sain',
      'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
    },
    {
      'icon':'fas fa-ring',
      'title':'Plan de formation',
      'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
    },
    {
      'icon':'fas fa-heartbeat',
      'title':'Unique à vos besoins',
      'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
    },

  ]
  pricings=[
    {
      'headline':'Class',
      'price':'0.00 €',
      'type':'Gratuit',
      'title':'s\'inscrie',
      'details':['Accès Limites aux machines','2 Séances/Semaine','Boxe','Fitness','Musculation']
    },
    {
      'headline':'Medium',
      'price':'39.99 €',
      'type':'Payant',
      'title':'S\'abonner',
      'details':['Accès illimites','Fitness','Musculation','Boxe','Yoga','Entrainement personalisé','Atelier(Perte de poids)']
    },
    {
      'headline':'Premium',
      'price':'70.00 €',
      'type':'payant',
      'title':'S\'abonner',
      'details':['Accès illimites','Fitness','Musculation','Boxe','Yoga','Trainement personalisé','Atelier(Motivation)','Atelier(Perte de poids)','Parrainage (20 € + 1mois gratuit)']
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
