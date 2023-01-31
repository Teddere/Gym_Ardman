export class ActivityService{
    private listActivity=[
        {   'id': 1,
            'seat':30,
            'coach':'Clementine Autain',
            'service':'Libre',
            'category':'Physique',
            'title':'Musculation',
            'subtitle':'Développer davantage la masse musculaire',
            'resum':"La capacité du corps à endurer dépend de l'état du corps",
            'descrip':`La capacité du corps à endurer dépend de l'état du corps. voilà pourquoi,
                        L'endurance est nécessaire pour de nombreuses activités de la vie quotidienne. 
                        Notamment la musculation.
                        `
        },
        {
            'id':2,
            'seat':21,
            'coach':'Henri Martin',
            'service':'Abonner',
            'category':'Poids',
            'title':'Fitness',
            'subtitle':'L\'activité physique aide à la santé mentale',
            'resum':"Les modes de vie sains sont abordables pour la plupart des gens.",
            'descrip':`Il existe de nombreuses façons d'exercer votre corps et votre esprit sans rejoindre une équipe sportive.`
        },
        {
            'id':3,
            'seat':12,
            'coach':'Margaux Alexandre',
            'service':'Abonner',
            'category':'Mentale',
            'title':'Yoga',
            'subtitle':'le yoga peut aider avec des maux physiques.',
            'resum':"Pratiquer le yoga peut vous aider à vous sentir plus connecté à la nature.",
            'descrip':`Le yoga peut vous aider à améliorer votre santé mentale en concentrant vos pensées.
            Le yoga permet d'acquérir et de développer la souplesse musculaire des membres inférieurs et supérieurs. `
        },
        {
            'id':4,
            'seat':12,
            'coach':'Clementine Autain',
            'service':'Libre',
            'category':'Physique',
            'title':'Boxe',
            'subtitle':'Chaque boxeur porte une identité de son équipe',
            'resum':'Les règles de la boxe régissent ce qu\'un boxeur peut et ne peut pas faire dans un match.',
            'descrip':`L'entraîneur d'un boxeur le guide tout au long du match de boxe en lui indiquant quand bouger, quand arrêter de bouger et comment gagner le combat.`
        },
        {
            'id':5,
            'seat':10,
            'coach':'Tedi Muller',
            'service':'Abonner',
            'category':'atelier',
            'title':'Atelier de Motivation',
            'subtitle':'La motivation stimule l\'innovation technologique.',
            'resum':'Il existe de nombreuses façons de rafraîchir votre motivation.',
            'descrip':`La résilience et l'optimisme maintiennent votre motivation pendant les moments difficiles.`
        },
        {
            'id':6,
            'seat':6,
            'coach':'Eric Chisphotère',
            'service':'Libre',
            'category':'atelier',
            'title':'Atelier perte de poids',
            'subtitle':'Un régime strict est le moyen le plus efficace pour perdre du poids.',
            'resum':"Ligoter les comportements malsains est le seul moyen de changer définitivement votre corps.",
            'descrip':`Les personnes qui font de l'exercice et qui mangent sainement voient souvent les résultats qu'elles souhaitent.
            Ligoter les comportements malsains est le seul moyen de changer définitivement votre corps.`
        }
    ];

    getActivityAll(){
       return this.listActivity
    }
    getActivityById(id:number){
        const activity=this.listActivity.find(
            (listActivityObject)=>{
                return listActivityObject.id==id;
            }
        );
        return activity;
    }
}