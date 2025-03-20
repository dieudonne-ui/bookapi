API de gestion de livres et auteurs
 Description
Cette API permet de gérer une bibliothèque de livres et d’auteurs avec un système d’authentification. Elle est construite avec Node.js, Express et MongoDB, et utilise JWT pour l’authentification.
 Installation et Configuration
 Prérequis	
 •	Node.js installé	
 •	MongoDB en cours d’exécution (localement ou via un service cloud)
2 cloner le ripo
git clone git@github.com:dieudonne-ui/bookapi.git
cd book-api
 Installer les dépendancesnpm install

 Installer les dépendances
 npm install
 
3. Configurer l’environnement

Créer un fichier .env à la racine :

MONGO_URI = mongodb+srv//<user>:<password>@cluster.mongodb.net/bookDB
JWT_SECRET=monsecret
PORT=5000


4. Lancer le serveur
node server.js

l'API sera accessible sur http://localhost:5000.


//ROUTES DE L'API 
Authentification 

POST            /api/auth/signup          Créer un compte utilisateur


 


POST           /api/auth/login             Se connecter



Méthode               Route                   Description


GET           /api/books                        Obtenir tous les livres
 
POST          /api/books                         Ajouter un livre

PUT           /api/books/:id                    Modifier un livre

DELETE          /api/books/:id                    Supprimer un livre

GET             /api/book/:id                   Obtenir  un livre par son id 



AUTEUR
Méthode               Route                   Description


GET           /api/authors                        Obtenir tous les auteurs
 
POST          /api/authors                         Ajouter un auteur

PUT           /api/authors/:id                    Modifier un auteur

DELETE          /api/authors/:id                    Supprimer un auteur

GET             /api/authors/:id                   Obtenir  un auteur par son id 


OUTILS ET TECHNOLOGIES
Node.js +Express.js
MongoDB+ Mongoose
JWT pour l'authentification
Postman pour les test


AUTEUR
Developpé par DIEUDONNE N'WEMOU dans le cadre de la formation DCLIC Afrikedutech  & OIF 


















