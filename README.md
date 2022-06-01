# Application France passion

## Prérequis
  * Installer Node v12 : <https://nodejs.org/>
  * Installer yarn : <https://classic.yarnpkg.com/en/docs/install/>
  * Installer expo-cli : `npm install --global expo-cli`
  * Télécharger l'application expo sur votre smartphone

## Installer le projet
  * Cloner le répertoire
  * Installer les modules : `yarn`

## Lancer le projet
  * Lancer le serveur expo : `expo start`
  * Scanner le QR code avec l'application expo (Android) ou la caméra (iOS) pour voir le projet

## Travailler sur le projet
### Avant de commencer à coder
  * Installer l'extension eslint de vsCode : <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
  * Aller sur la branche dev : `git checkout dev`
  * Mettre à jour la branche dev : `git pull origin dev`
  * Créer une branche pour travailler sur une fonctionnalité : `git checkout -b "nom-branche"`
### Avant de faire une demande de pull request
  * Aller sur la branche dev : `git checkout dev`
  * Mettre à jour la branche dev : `git pull origin dev`
  * Aller sur votre branche de fonctionnalité : `git checkout nom-branche`
  * Mettre à jour votre branche de fonctionnalité : `git rebase dev nom-branche`
  * Résoudre les conflits
  * Une fois les conflits résolus, finir le rebase : `git rebase --continue`
  * Vérifier que ça fonctionne toujours après le reabase
  * Push de la branche : `git push origin nom-branche`
### Faire une demande de pull request
  * Faire la demande de pull request sur Bitbucket : <https://www.atlassian.com/fr/git/tutorials/making-a-pull-request>