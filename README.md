Healthcare Dashboard Application
Ce projet est une application Angular intégrée avec des dashboards Power BI pour fournir une interface interactive de gestion des rôles et des prédictions de durée de séjour des patients. Le système utilise également Flask pour la prédiction des données basées sur des modèles de Machine Learning.

Table des matières
Introduction

Fonctionnalités

Technologies utilisées

Installation

Utilisation

Prédictions avec Machine Learning

Rôles utilisateurs

Contributeurs

Introduction
Ce projet permet de gérer le suivi des patients dans une clinique avec l'intégration de Power BI pour visualiser des données critiques et des rapports en temps réel. L'application prend en charge deux types de décideurs : les administrateurs et les médecins, chacun ayant accès à des dashboards spécifiques.

En outre, nous avons utilisé des techniques de Machine Learning et de Python pour fournir des prédictions sur la durée de séjour des patients, en se basant sur leurs caractéristiques médicales (comme les maladies).

Fonctionnalités
Dashboards interactifs via Power BI pour visualiser des données clés :

Dashboard Administrateur : Vue globale de la gestion des patients, des statistiques et des informations de l'organisation.

Dashboard Médecin : Vue des informations liées aux patients sous leur responsabilité, y compris les statistiques de santé et les prédictions.

Dashboard Patient : Vue des informations spécifiques aux patients, y compris les prédictions sur leur durée de séjour à la clinique.

Prédictions de durée de séjour des patients à l'aide de Machine Learning avec Flask et des modèles prédictifs. Les prédictions sont basées sur des features médicales comme les maladies.

Gestion des rôles avec des utilisateurs distincts pour les administrateurs et les médecins, chacun ayant accès à des dashboards différents.

Technologies utilisées
Angular : Frontend de l'application, permettant d'afficher les dashboards Power BI.

Power BI Embedded : Intégration des dashboards Power BI pour afficher les rapports et les visualisations.

Flask : Backend pour le service de prédiction de durée de séjour des patients.

Machine Learning : Modèle de prédiction basé sur des features médicales pour estimer la durée de séjour des patients.

Python : Utilisé pour la prédiction des données dans Flask.

GitHub Actions (optionnel) : Pour l'intégration continue et la gestion des déploiements.

Bootstrap : Pour la mise en page responsive et la gestion des UI.

Une fois l'application Angular lancée, ouvrez votre navigateur et accédez à l'adresse suivante :


http://localhost:4200
Connexion en tant que Administrateur
Nom d'utilisateur : admin

Mot de passe : admin

Cela vous donnera accès au Dashboard Administrateur.

Connexion en tant que Médecin
Nom d'utilisateur : doctor

Mot de passe : doctor

Cela vous donnera accès au Dashboard Médecin, avec la possibilité de naviguer vers le Dashboard Patient.

Prédiction de durée de séjour
Le modèle prédit la durée de séjour d'un patient dans la clinique, en fonction des features médicales saisies, comme les maladies du patient. Une fois les données entrées, le modèle renverra une estimation du temps que le patient pourrait rester dans la clinique.

Prédictions avec Machine Learning
Le modèle de prédiction de la durée de séjour des patients utilise des algorithmes de Machine Learning. Le backend Flask fournit une API pour prédire la durée de séjour en fonction des données médicales.

Features utilisées :
Maladies

Âge du patient

Antécédents médicaux

Comment cela fonctionne :
Les features du patient sont envoyées à un modèle d'apprentissage machine dans Flask.

Le modèle prédit la durée de séjour du patient dans la clinique.

Le résultat est renvoyé au frontend où il est affiché à l'utilisateur.

Rôles utilisateurs
Administrateur :

Accès au Dashboard Administrateur.

Gestion des utilisateurs, des patients, et des rapports.

Médecin :

Accès au Dashboard Médecin.

Consultation des informations des patients, prédictions sur la durée de séjour, et consultation des rapports.

Patient :

Accès au Dashboard Patient, avec des informations liées à son séjour dans la clinique et les prédictions.

Contributeurs
Nom : melki mohamed aziz 

Nom : amrou bousslimi 

Note :
Le projet utilise des API Power BI Embedded pour l'intégration des visualisations dans Angular. Assurez-vous que vous avez configuré correctement l'API Power BI et que vous avez un Token d'authentification valide pour l'intégration.

Conclusion
Ce projet vous offre une interface complète pour la gestion des patients, la visualisation des données médicales via Power BI, ainsi qu'une prédiction basée sur le Machine Learning pour la durée de séjour des patients. Il est conçu pour être utilisé à la fois par les administrateurs de la clinique et les médecins.

