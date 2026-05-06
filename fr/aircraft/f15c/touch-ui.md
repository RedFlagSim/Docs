# Interface tactile

Cette page s'applique aux appareils tactiles iOS et Android.

## Navigation + AA Mode

### Navigation Mode

![Navigation Mode](/assets/F-15C/TouchUI/navigation_mode.png)

### AA Mode

![AA Mode](/assets/F-15C/TouchUI/aa_mode.png)

<a id="ui-terms-top"></a>

## Index UI

<div class="term-cloud">
  <a href="#item-1">1 Panneau de fonctions</a>
  <a href="#item-2">2 Sélecteur de mode</a>
  <a href="#item-3">3 Édition des éléments UI</a>
  <a href="#item-4">4 Menu principal</a>
  <a href="#item-5">5 Indicateur d'entrée</a>
  <a href="#item-6">6 Interrupteur du train d'atterrissage</a>
  <a href="#item-7">7 Interrupteur des volets</a>
  <a href="#item-8">8 Manette des gaz</a>
  <a href="#item-9">9 Sélecteur de mode de gaz</a>
  <a href="#item-10">10 Interrupteur d'aérofrein</a>
  <a href="#item-11">11 Afficher MFD</a>
  <a href="#item-12">12 Afficher la carte tactique</a>
  <a href="#item-13">13 Interrupteur paddle</a>
  <a href="#item-15">15 Gouverne de direction</a>
  <a href="#item-16">16 Padlock</a>
  <a href="#item-17">17 Menu de changement de caméra</a>
  <a href="#item-18">18 Cursor</a>
  <a href="#item-19">19 Interrupteur castle</a>
  <a href="#item-20">20 Barre d'état</a>
  <a href="#item-21">21 Libération chaff/flare</a>
  <a href="#item-22">22 Interrupteur master arm</a>
  <a href="#item-23">23 Détente canon</a>
  <a href="#item-24">24 Sélecteur d'arme</a>
  <a href="#item-25">25 Antenna Elevation</a>
  <a href="#item-26">26 Interrupteur coolie</a>
  <a href="#item-27">27 Largage arme</a>
  <a href="#item-28">28 Interrupteur auto acquisition</a>
</div>

## Explication détaillée

<a id="item-1"></a>
### 1. Panneau de fonctions

Un appui long ou un double appui active le panneau tactile de fonctions temporaire. Le panneau contient 4 onglets:

<div class="panel-grid">
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_main.png" alt="Touch Panel MAIN" />
    <figcaption>MAIN</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_nav.png" alt="Touch Panel NAV" />
    <figcaption>NAV</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_hud.png" alt="Touch Panel HUD" />
    <figcaption>HUD</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_misc.png" alt="Touch Panel MISC" />
    <figcaption>MISC</figcaption>
  </figure>
</div>

[Retour en haut](#ui-terms-top)

<a id="item-2"></a>
### 2. Sélecteur de mode

Permet de basculer entre le mode Navigation et le mode AA (air-air).

[Retour en haut](#ui-terms-top)

<a id="item-3"></a>
### 3. Édition des éléments UI

Passe en mode d'édition des éléments UI. Dans ce mode, la sélection d'un élément UI affiche un rappel de fonction. Vous pouvez déplacer les éléments UI vers la position souhaitée, et le système enregistre automatiquement la disposition de façon persistante.

![Edit Mode](/assets/F-15C/TouchUI/edit_mode.png)

[Retour en haut](#ui-terms-top)

<a id="item-4"></a>
### 4. Menu principal

Ouvre le menu principal du jeu, avec les entrées suivantes:

- `Aircraft Setup`: Ouvrir l'interface de configuration de l'avion du joueur
- `Preferences`: Ouvrir l'interface des préférences du jeu
- `Weather / Time`: Ouvrir l'interface de configuration météo/heure
- `Tac Map`: Ouvrir la carte tactique
- `Tactical`: Menu tactique
- `Freeze / Resume`: Mettre le jeu en pause/reprendre
- `Playback`: Entrer en mode relecture
- `Restart`: Redémarrer la mission en cours
- `Calibrate`: Calibrer le gyroscope
- `Quit`: Quitter la mission en cours

![Main Menu](/assets/F-15C/TouchUI/main_menu.png)

[Retour en haut](#ui-terms-top)

<a id="item-5"></a>
### 5. Indicateur d'entrée

Affiche les entrées actuelles du joueur et les sorties des commandes de vol, y compris tangage, roulis, direction et gaz. Ces données sont disponibles en relecture.

[Retour en haut](#ui-terms-top)

<a id="item-6"></a>
### 6. Interrupteur du train d'atterrissage

Commande la sortie/rentrée du train d'atterrissage. Le train doit être sorti sous 250 nœuds; au-dessus de 250 nœuds, la sortie endommage le train.

[Retour en haut](#ui-terms-top)

<a id="item-7"></a>
### 7. Interrupteur des volets

Commande la sortie/rentrée des volets.

[Retour en haut](#ui-terms-top)

<a id="item-8"></a>
### 8. Manette des gaz

La plage de commande des gaz va du ralenti à la postcombustion maximale. Glisser en continu vers la droite pendant 2 secondes bascule vers le mode de commande des gaz mono-moteur.

![Single Throttle](/assets/F-15C/TouchUI/single_throttle.png)

[Retour en haut](#ui-terms-top)

<a id="item-9"></a>
### 9. Sélecteur de mode de gaz

Cet interrupteur a trois positions:

- Bas: Mode manuel.
- Milieu: Mode de suivi IAS. Dans ce mode, déplacer la manette des gaz définit l'IAS cible, puis le contrôle de vol suit automatiquement.
- Haut: Mode de suivi AoA on-speed. Dans ce mode, les gaz maintiennent automatiquement l'AoA on-speed, utile pour les débutants à l'atterrissage.

[Retour en haut](#ui-terms-top)

<a id="item-10"></a>
### 10. Interrupteur d'aérofrein

Il s'agit d'un interrupteur maintenu à trois positions:

- Centre: Aérofrein arrêté.
- Haut: Déployer l'aérofrein.
- Bas: Rentrer l'aérofrein.

La logique d'utilisation est similaire à un interrupteur de vitre électrique automobile, mais cet interrupteur ne revient pas automatiquement au centre.

[Retour en haut](#ui-terms-top)

<a id="item-11"></a>
### 11. Afficher MFD

En vue cockpit, maintenir l'un de ces deux boutons verrouille la caméra sur l'écran correspondant. À ce moment, le pouce droit peut contrôler le curseur et d'autres boutons de fonction. Les deux images ci-dessous montrent les angles de vue correspondants.

![VSD View](/assets/F-15C/TouchUI/vsd_.png)

![MPCD View](/assets/F-15C/TouchUI/mpcd_.png)

[Retour en haut](#ui-terms-top)

<a id="item-12"></a>
### 12. Afficher la carte tactique

Affiche la carte tactique en cours d'exécution.

![Runtime Tac Map](/assets/F-15C/TouchUI/runtime_tacmap.png)

[Retour en haut](#ui-terms-top)

<a id="item-13"></a>
### 13. Interrupteur paddle

Lorsque le pilote automatique est activé, maintenir ce bouton enfoncé désengage temporairement le pilote automatique.

[Retour en haut](#ui-terms-top)

<a id="item-15"></a>
### 15. Gouverne de direction

Glisser à gauche/droite contrôle la gouverne de direction et la direction de la roue avant. Glisser vers le haut contrôle les freins du train principal ainsi que l'interrupteur `cage/uncage` des capteurs ou des armes.

[Retour en haut](#ui-terms-top)

<a id="item-16"></a>
### 16. Padlock

Utilisé pour le verrouillage automatique de la vue. S'il y a d'autres entités à proximité de votre appareil, maintenir ce bouton verrouille la vue sur cette entité. S'il y a plusieurs entités, maintenez `padlock` avec la main droite et double-cliquez sur une zone vide avec la main gauche pour passer à l'entité suivante.

[Retour en haut](#ui-terms-top)

<a id="item-17"></a>
### 17. Menu de changement de caméra

Permet de changer de position de caméra:

- Appui simple: Basculer automatiquement vers la position de caméra suivante.
- Appui maintenu: Ouvrir le menu caméra; maintenir et faire glisser vers la position cible, puis relâcher pour valider.

[Retour en haut](#ui-terms-top)

<a id="item-18"></a>
### 18. Cursor

Contrôle le curseur sur les écrans `VSD` et `SIT`. Un double appui sur ce bouton permet de désigner manuellement une cible.

[Retour en haut](#ui-terms-top)

<a id="item-19"></a>
### 19. Interrupteur castle

Permet de gérer les écrans et le SOI (sensor of interest):

- `castle` vers le haut: Basculer le SOI entre `VSD` et `SIT`; le contrôle du curseur suivant s'applique au SOI actif.
- Quand `VSD` est SOI:
  - `castle` vers la droite: Basculer `MPCD` vers la page de gestion de l'emport.
  - `castle` vers la gauche: Revenir à la page d'affichage `SIT`.
- Quand `SIT` est SOI:
  - `castle` vers la droite: Passer en mode non centré.
  - `castle` vers la gauche: Passer en mode étendu.
  - `castle` vers le bas: Passer en mode groupe de vol (dans ce mode, la portée d'affichage est fixée à 5 NM).

[Retour en haut](#ui-terms-top)

<a id="item-20"></a>
### 20. Barre d'état

De droite à gauche, la barre d'état affiche:

- FPS du jeu
- Vitesse du vent (nœuds)
- Direction du vent (relative à la ligne de visée)
- Masse brute de l'avion du joueur
- Heure du jeu
- Indicateur d'activation du pilote automatique

[Retour en haut](#ui-terms-top)

<a id="item-21"></a>
### 21. Libération chaff/flare

Logique de libération:

- Appui: Libère 1 `chaff` et 1 `flare`.
- Glisser vers le haut: Libère 1 `chaff`.
- Glisser vers le bas: Libère 1 `flare`.
- Glisser vers la gauche: Libère 5 `chaff` et 5 `flare`.
- Glisser vers la droite: Libère 10 `chaff` et 10 `flare`.

[Retour en haut](#ui-terms-top)

<a id="item-22"></a>
### 22. Interrupteur master arm

Avant de tirer une arme, cet interrupteur doit être en position ON.

[Retour en haut](#ui-terms-top)

<a id="item-23"></a>
### 23. Détente canon

Lorsque l'arme actuellement sélectionnée est le canon, appuyez pour tirer.

[Retour en haut](#ui-terms-top)

<a id="item-24"></a>
### 24. Sélecteur d'arme

Glisser vers le haut/bas permet de basculer entre `AAM` (advanced medium-range missile), `MRM` (medium-range missile), `SRM` (short-range missile) et `GUN`; glisser vers la gauche/droite permet de faire défiler les missiles.

[Retour en haut](#ui-terms-top)

<a id="item-25"></a>
### 25. Antenna Elevation

Lorsque le radar est en mode LRW/TWS, permet d'ajuster l'angle de tangage de référence du balayage antenne.

[Retour en haut](#ui-terms-top)

<a id="item-26"></a>
### 26. Interrupteur coolie

À compléter.

[Retour en haut](#ui-terms-top)

<a id="item-27"></a>
### 27. Largage arme

À compléter.

[Retour en haut](#ui-terms-top)

<a id="item-28"></a>
### 28. Interrupteur auto acquisition

Interrupteur de verrouillage automatique. Appuyez pour changer de mode radar.

[Retour en haut](#ui-terms-top)
<style scoped>
.term-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 6px;
}

.term-cloud a {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  line-height: 1.2;
  font-size: 13px;
  transition: border-color .16s ease, background-color .16s ease, transform .16s ease;
}

.term-cloud a:hover {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  transform: translateY(-1px);
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 12px 0 4px;
}

.panel-grid figure {
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  overflow: hidden;
}

.panel-grid img {
  display: block;
  width: 100%;
  height: auto;
}

.panel-grid figcaption {
  padding: 6px 8px;
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}

@media (max-width: 640px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
