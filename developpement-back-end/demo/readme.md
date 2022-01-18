# DEMO IUT

## Variables d'environnement

- ./service/.env

## Commandes utiles

- Installer les dépendances :
`docker-compose run <nom-du-service> npm i`

- Entrer dans le container :
`docker exec -it <nom-du-service> bash`

- Consulter l'API (le service doit être lancé) :
`curl -i localhost:3333`