<template>
  <div class='home'>
    <div class="home__title">
      <h2>Bonjour et bienvenue dans mon portfolio</h2>
    </div>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/images/csharp.jpg"
              >
              </v-card-media>
              <v-card-title>
                <h2>Formation C#</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Gosslie</span><br>
                <span>Valeur: 10h</span><br>
                <span>Temps réel: 35h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="sharpTICdialog = !sharpTICdialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/images/csharp.jpg"
              >
              </v-card-media>
              <v-card-title>
                  <h2>Formation C#</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Grez-Doiceau</span><br>
                <span>Valeur: 10h</span><br>
                <span>Temps réel: 35h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="sharpdialog = !sharpdialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                contain
                src="/static/images/java.jpg"
              >
              </v-card-media>
              <v-card-title>
                <h2>Formation Java</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Gosslie</span><br>
                <span>Valeur: 10h</span><br>
                <span>Temps réel: 35h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="javadialog = !javadialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                contain
                src="/static/images/ssis.jpg"
              >
              </v-card-media>
              <v-card-title>
                  <h2>Formation Formation SSIS</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Gosslie</span><br>
                <span>Valeur: 10h</span><br>
                <span>Temps réel: 35h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="ssisdialog = !ssisdialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/images/sql.jpg"
              >
              </v-card-media>
              <v-card-title>
                <h2>Formation Sql Server</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Gosslie</span><br>
                <span>Valeur: 10h</span><br>
                <span>Temps réel: 35h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="sqldialog = !sqldialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                contain
                src="/static/images/devday.jpg"
              >
              </v-card-media>
              <v-card-title>
                <h2>Devday</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Mons</span><br>
                  <span>Valeur: 8h</span><br>
                  <span>Temps réel: 8h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="devdialog = !devdialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-flex xs12 sm4>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                contain
                src="/static/images/ephec.jpg"
              >
              </v-card-media>
              <v-card-title>
                <h2>Conférences EPHEC</h2>
              </v-card-title>
              <v-card-text>
                <span>Lieu: Louvain-la-Neuve</span><br>
                <span>Valeur: 7h</span><br>
                <span>Temps réel: 7h</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange" @click="confdialog = !confdialog">En savoir plus</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-container>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <h2 class="text-xs-center" style="font-weight: bold;">65h valorisé sur 155h</h2>
          </v-flex>
        </v-layout>
      </v-container>
    <v-dialog
        v-model="sharpTICdialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="sharpTICdialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Formation C#</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>Durant 1 semaine entière j’ai eu l’occasion d’aller faire une formation au centre Technofutur TIC de Gosselies où j’ai pu découvrir le langage de programmation C#.</p>
            <p>C# est un langage conçu par Microsoft dans le but de créer toutes sortes d’applications diverses et variées peu import le support en question. C’est un langage orienté objet c’est à dire qu’un ensemble de structures de données vont interagir ensemble afin d'exécuter une tâche précise. C’est un langage vraiment puissant qui à l’aide de ses frameworks n’a plus de limite.Par exemple, ASP.net est la libraire C# qui permet de créer des applications ou sites web aussi bien Back-end que Front-End. Il est ainsi une bonne alternative à PHP ou JAVA EE.</p>
            <p>L’un des principaux défaut de C# a été son manque de compatibilité pendant un certain temps mais dernièrement, Microsoft change de politique avec son .Net Core qui est C# au moteur amélioré et aux plus grandes compatibilités  et meilleurs performances ce qui est pour déplaire à JAVA qui est utilisé uniquement pour ses avantages de compatibilités malgré ces performances laissant à désirer.  
            <p>Cette semaine fut dès lors l’occasion de nous rafraîchir la mémoire sur le fonctionnement de l’orienté objet par le développement de minuscules applications consoles tel qu’un système de gestion de transaction bancaire. Outre l’orienté l’objet, nous avons pu découvrir des mécanismes propres à C# comparé à JAVA tel que les paramètres sortant permettant ainsis de récupérer plus d’une donnée lors de l’exécution d’une fonction. Les fonctions lambdas qui permettent l’écriture raccourcies de certaines fonctions ainsi que les déléguées qui permettent l’exécution de plusieurs fonctions d’affilées suivant les conditions.</p>
            <p>Tout ceci s’est achevé sur le développement de jeux sur console. Le premier était un Snake , un jeu assez connu dont le concept est de diriger un serpent afin que celui-ci se nourrit et grandisse le plus possible sans pour autant se manger la queu.
            Il nous a fallu alors une bonne gestion des collections afin de retenir la position du serpent et des différentes parties de sa queue ainsi que la gestion de sa nourriture et les contacts entre les 2 qui doivent amener à un agrandissement du serpent. Toutes ces données devaient alors être retranscrites sur la console par la gestion du curseur de texte de la console qui devait régulièrement redessiner l’écran sans s’arrêter.Le second jeu fut un petit jeu d’aventure où il fallait gérer les déplacements de notre personnage et d’ennemis se promenant sur la carte ainsi que divers obstacles (arbres,rochers,...) et un petit système de pathfinding afin que les monstres se déplacent dans un sens logique soit vers nous.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="sharpdialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="sharpdialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Formation C#</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>Durant 1 semaine entière j’ai eu l’occasion d’aller faire une formation au centre Technofutur TIC de Gosselies où j’ai pu découvrir le langage de programmation C#.</p>
            <p>C# est un langage conçu par Microsoft dans le but de créer toutes sortes d’applications diverses et variées peu import le support en question. C’est un langage orienté objet c’est à dire qu’un ensemble de structures de données vont interagir ensemble afin d'exécuter une tâche précise. C’est un langage vraiment puissant qui à l’aide de ses frameworks n’a plus de limite.Par exemple, ASP.net est la libraire C# qui permet de créer des applications ou sites web aussi bien Back-end que Front-End. Il est ainsi une bonne alternative à PHP ou JAVA EE.</p>
            <p>L’un des principaux défaut de C# a été son manque de compatibilité pendant un certain temps mais dernièrement, Microsoft change de politique avec son .Net Core qui est C# au moteur amélioré et aux plus grandes compatibilités  et meilleurs performances ce qui est pour déplaire à JAVA qui est utilisé uniquement pour ses avantages de compatibilités malgré ces performances laissant à désirer.  
            <p>Cette semaine fut dès lors l’occasion de nous rafraîchir la mémoire sur le fonctionnement de l’orienté objet par le développement de minuscules applications consoles tel qu’un système de gestion de transaction bancaire. Outre l’orienté l’objet, nous avons pu découvrir des mécanismes propres à C# comparé à JAVA tel que les paramètres sortant permettant ainsis de récupérer plus d’une donnée lors de l’exécution d’une fonction. Les fonctions lambdas qui permettent l’écriture raccourcies de certaines fonctions ainsi que les déléguées qui permettent l’exécution de plusieurs fonctions d’affilées suivant les conditions.</p>
            <p>Tout ceci s’est achevé sur le développement de jeux sur console. Le premier était un Snake , un jeu assez connu dont le concept est de diriger un serpent afin que celui-ci se nourrit et grandisse le plus possible sans pour autant se manger la queu.
            Il nous a fallu alors une bonne gestion des collections afin de retenir la position du serpent et des différentes parties de sa queue ainsi que la gestion de sa nourriture et les contacts entre les 2 qui doivent amener à un agrandissement du serpent. Toutes ces données devaient alors être retranscrites sur la console par la gestion du curseur de texte de la console qui devait régulièrement redessiner l’écran sans s’arrêter.Le second jeu fut un petit jeu d’aventure où il fallait gérer les déplacements de notre personnage et d’ennemis se promenant sur la carte ainsi que divers obstacles (arbres,rochers,...) et un petit système de pathfinding afin que les monstres se déplacent dans un sens logique soit vers nous.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="javadialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="javadialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Formation JAVA</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>A la base, je pensais cette formation s’appelait “JAVA avancé” et je pensais que nous allions voir des concepts avancés de l’orienté objet comme des patterns designs que nous ne connaissions pas mais il s’est avéré en réalité qu’il s’agissait d’une formation un framework web de JAVA ce qui allait être l’occasion pour moi de découvrir le développement web orienté objet.</p>
            <p>Pour cela nous avons utilisé l’IDE Eclipse parce qu’il est gratuit et permet l’installation simple et rapide de ce qu’il faut pour pouvoir travailler.</p>
            <p>Simple en théorie puisqu’il aura fallu 1 journée pour pouvoir installer sur toutes les machines Eclipse ainsi que les différents outils nécessaire à la conception du mini projet de la semaine.</p>  
            <p>Ce projet, un forum web fait avec JAVA avec une interaction à la base de données via Hibernate, un framework JAVA qui permet le mapping d’entités soit la conversion d’objets en format adaptée pour l’insertion de données dans une base de données.
               Cependant, JAVA est peu utilisé en entreprise dû à ses problèmes de performances qui va à l’encontre de la politique du développement web. </p>
            <p>Pour les interactions avec la DB, il a fallu mettre au point des méthodes pour gérer le routing pour ce qui ressemblait à une sorte d’API.</p>
            <p>De plus, le formateur étant nouveau, il a été difficile pour lui de gérer tous les problèmes ce qui amené à des pertes de temps assez considérable.</p>
            <p>Personnellement, j’ai trouvé cette formation assez décevante car mes espoirs se amenuisé petit à petit passant d’orienté objet avancé à Java Web à pas grand chose dû aux multiples problèmes rencontrés.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="ssisdialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="ssisdialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Formation SSIS</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>Nous vivons au 21ème siècle, l’ère de l’informatique et qui dit informatique dit information. En effet, la capacité de gestion de l’information est ce qui fait la différence entres les petites et les grandes entreprises. Cette gestion se résume par diverses choses, le développement d'applications, la création d’infrastructures, le déploiement de machines et de services et enfin la collecte de données en tant que tel.</p>

            <p>La Business Intelligence consiste en la récolte de ses données et à son traitement. Pourquoi faire ? Afin de pouvoir prendre les décisions les plus judicieuses pour le profit de l’entreprise. Le traitement consiste en une analyse d’une quantité massive de données et déterminer les corrélations entre ces divers données, les influences qu’elles se portent entre elles même les plus insoupçonnées.C’est là que SSIS fait son office.</p>

            <p>SSIS est une plate forme développé par Microsoft pour la gestion de données de toute source que cela puisse venir le tout de la façon la plus simple possible. Cela consiste notamment entre la création de cases sur un schéma représentant des actions et ces actions sont reliés entre elles afin de définir l’ordre de ces actions pour un traitement précis. Même si le tout peut sembler à premier abord assez simple même simpliste,il n’en est rien car le traitement demande la gestion des erreurs lors de la lecture, l’écriture ou la transformation des données sachant que les différentes sources possibles amènent à divers traitements possibles. En effet, lire les données d’un fichier Excel pour les retranscrire en données et les insérer en base de données demande un tout autre traitement quand il s’agit de faire l’inverse dû au système de typage , l’organisation des données, les données désirées, etc. La chose est dès lors de comprendre quand le traitement pourrait échouer et le prévenir et sinon trouver d’où il vient te faire en sorte que celui-ci ne se reproduise plus.</p>
            <p>L’exercice de la formation aura été d’importer une quantité massive de données d’un fichier csv vers une base de donnée locale tout en gérant les relations entres les différentes tables préétablies de notre base données puisqu’elles devaient correspond à une API composé de films et de divers informations. Ca n’a pas été facile puisque il a fallu d’abord comprendre la logique de la base de données avant de pouvoir déterminer le traitement et transférer les données.</p>

            <p>Cette formation m’a permit de réaliser le casse-tête que représentait le traitement des données bien que SSIS soit vraiment simple d’accès, tout ce qui s'ensuit devient vraiment complexe et demande plus de la réflexion que de la mise en place.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="sqldialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="sqldialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Formation SQL</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>SQL Server est un gestionnaire de base de données développé par Microsoft. Il permet une gestion avancée ainsi que certains outils supplémentaires pour faciliter la création et la gestion de base de données.</p>

            <p>La semain a donc consisté en l’étude de ces outils et leur application dans des exemples pratiques.</p>

            <p>On a commencé par voir les bases des requêtes SQL avec les 4 opérations principales du T-SQL soit SELECT pour sélectionner les données désirées, INSERT pour l’insertion de données dans les tables, CREATE pour créer les structures ou outils nécessaires à la gestion efficace de la base de donnée, UPDATE pour la mise à jour rapide des données.</p>  
            <p>Après quelques exercices avec ces opérateurs, nous avons pu voir les procédures stockées qui permettent une manipulation plus efficace des données et surtout plus rapide car chaque procédure est dès alors optimisé par SQL Server au lieu des simples requêtes qu’il doit exécuter sur le tas.</p>
            <p>Ensuite, il nous a fallu gérer ces manipulations sur notre base de données via les triggers. Les triggers permettent d’exécuter des requêtes lorsqu’une manipulation se fait sur une base de donnée que ce soit avant ou après l’opération. Par exemple, il est tout à fait possible de garder trace de chaque opération par question de sécurité et d’analyse.</p>
            <p>Enfin, on a pu découvrir les views qui sont des base de données virtuelles dérivées des bases de données originels. Elles permettent d’avoir toujours des résultats à jour, de limiter l’accès aux données que par leur intermédiaire au lieu qu’utiliser des requêtes personnelles ce qui pourrait amener à des failles de sécurité ce que l’on veut bien entendu éviter. Elles offrent également une meilleure performance puisque elles offrent une meilleure analyse des données.</p>
            <p>Cette formation fut l’occasion pour moi de bien m’améliorer en ce qui concerne la gestion des bases de données qui était alors limité à l’utilisation des 4 opérateurs principaux. Ces nouvelles connaissances me sont vraiment utiles surtout dans mon TFE qui demande un très grand nombre d'interactions avec ma base de données.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="devdialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="devdialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Dev Day</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>Le DevDay est un événement organisé par le MIC soit le Microsoft Innovation Center de Belgique.</p>
            <p>Il consistait en une suite de conférences au choix que nous pouvions assister sachant que les conférences se déroulaient en même temps 3 par 3.</p>
            <p>Cela aura été l’occasion de découvrir certains concepts de développements avancés ou de technologies que nous n'avions pas entendu parler auparavant.En effet, j’ai eu l’occasion de découvrir le framework Angular, un des frameworks de développement front-end les plus célébres avec React et VueJS. Sa particularité étant l’utilisation du TypeScript, un langage de programmation créé par Microsoft dérivée du Javascript. Il ajoute une notion de typage et d’orienté objet plus avancé ce qui n’est pas pour déplaire aux développeurs .NET qui reste alors dans un domaine proche du C# et n’ont pas développé en Javascript pur.</p>  
            <p>Autre conférence intéressant fut celle sur le concept d’injection de dépendance qui consiste en l'utilisation abusive d’interfaces dans les paramètres d’objets afin d’augmenter la flexibilité du code. Ainsi au lieu de limiter un objet ou une fonction à 1 seul type d’objet en paramètre, on lui fournit plutôt une interface ainsi n’importe quel objet implémentant cette interface pourra être utilisé.Il n’a pas été facile pour moi de comprendre ceci au début ce qui m’a demandé certaines recherches de mon coté.</p>
            <p>La dernière conférence auquel j’ai assisté était concentré sur la découverte du framework React, un framework développé par Facebook qui permet la gestion de template de grande envergure via des web components soit des sortes de modèles HTML miniatures avec leur logique propre le tout assemblé pour donner un seul et même template massif. La découverte de ce framework fut très intéressant, moi même étant très intéressé par le framework VueJs, un framework concurrent à React et Angular.</p>
            <p>Cette journée fut très intéressant et m’a permit de découvrir bien des nouveautés pour mes futurs développement . Pour le reste, tout allait pour le mieux tel que la réception sur les lieux,le confort des conférences vu qu’ils étaient organisé dans des salles de cinémas,la qualité des conférences même si on sentait que certains conférenciers étaient pris un peu de court.Mon unique regret aura été que je n’ai pu assister à certaines conférences tel que celle sur le GraphQL,une technologie m'intéressait assez  bien.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="confdialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon dark @click.native="confdialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Conférences EPHEC</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <h3>Programme Incubator CISCO</h3>
            <p>CISCO est un très grand acteur du monde de l’infrastructure réseau ce qui m’a amené à suivre cette conférence sur la gestion de leurs datacenters. On a pu découvrir du matériel très avancé que ceux-ci utilisent , tellement avancé que je ne pense pas pouvoir en revoir un un jour vu le prix. Cette conférence reste intéressante pour voir leur travaille et également les actions qu’ils jouaient en la recherche de nouveaux talent via la création de divers événements.</p>
            <h3>Conférence sur la propriété intellectuelle</h3>
            <p>La propriété intellectuelle devient un sujet assez délicat avec les nouvelles réformes RGPD apparaissant.De plus la limite entre plagiat et inspiration se fait flou ce qui amène à des bêtes erreurs d’atteintes aux droits intellectuelles.</p>
            <p>Cette conférence fut l’occasion du coup de détourer un peu ces concepts et de définir où est la limite de nos droites en matière d’utilisation de matériaux tel que vidéos, images, citations, etc.</p>
            <p>Cette conférence fut très instructive et un soulage d’un poids sur ce qui est des problèmes de droits puisque je comprends mieux du coup ce qu’il m’est permis de faire.</p>
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      sharpTICdialog: false,
      javadialog: false,
      ssisdialog: false,
      sqldialog: false,
      confdialog: false,
      devdialog: false,
      sharpdialog: false
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.home{
  &__title{
    font-size: 14px;
  }
}
</style>