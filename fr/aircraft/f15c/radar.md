---
title: Radar AN/APG-63 et VSD
---

<script setup>
import lrsOverviewImage from '/assets/F-15C/Radar/lrs-overview-numbered.png'
import sttOverviewImage from '/assets/F-15C/Radar/stt-overview-numbered.png'
import sttAspectImage from '/assets/F-15C/Radar/stt-aspect-numbered.png'
import sttRtrImage from '/assets/F-15C/Radar/stt-rtr.png'
import sttBreakImage from '/assets/F-15C/Radar/stt-break-x.png'
import twsNdtImage from '/assets/F-15C/Radar/tws-ndt-numbered.png'
import twsDesignatedImage from '/assets/F-15C/Radar/tws-designated-numbered.png'
import twsInRangeImage from '/assets/F-15C/Radar/tws-in-range.png'
import twsRtrImage from '/assets/F-15C/Radar/tws-rtr.png'
import twsMissileSupportImage from '/assets/F-15C/Radar/tws-missile-support-numbered.png'
import twsMissileActiveImage from '/assets/F-15C/Radar/tws-missile-active-numbered.png'
import floodVsdImage from '/assets/F-15C/Radar/flood-vsd.png'
</script>

## Recherche à longue portée (LRS)

Le LRS recherche les cibles aériennes éloignées avant le verrouillage et indique leur relèvement et leur distance par rapport à votre avion. Une échelle VSD de **40 à 80 milles nautiques** permet habituellement d’observer les échos lointains ; cette échelle ne garantit pas la détection de toutes les cibles à cette distance.

Réglez l’élévation de l’antenne et la couverture en azimut selon la position probable des cibles. Encadrez un écho avec la [porte d’acquisition](#lrs-item-9) et lancez une acquisition manuelle : sa réussite fait passer en STT. Le LRS localise les cibles ; les modes suivants assurent leur poursuite précise.

L’axe horizontal représente l’azimut et l’axe vertical la distance, croissante vers le haut.

Touchez une fois le bouton **AA (acquisition automatique)** de l’interface tactile pour passer de la veille au LRS. Touchez-le à nouveau pour revenir en veille.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Recherche à longue portée (LRS)">

Les autres actions sont décrites dans [Interface tactile : acquisition automatique](/fr/Docs/aircraft/f15c/touch-ui.html#item-28).

### Barres de balayage

Le balayage LRS initial utilise par défaut **120° en azimut et 6 barres**.

Une barre est un passage horizontal de l’antenne à une élévation donnée. Plusieurs barres couvrent un volume en altitude par passages successifs à différentes élévations ; six barres correspondent à six passages. Leur espacement varie avec la portée de recherche et n’est pas fixe.

Pour modifier ce nombre, ouvrez [Interface tactile : 1. Panneau de fonctions](/fr/Docs/aircraft/f15c/touch-ui.html#item-1) et sélectionnez les barres sur la **page MAIN**.

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="Barres de balayage">
</a>

Cliquez sur l’image pour sa résolution d’origine, ou sur un numéro pour accéder à son explication.

<a id="lrs-index"></a>

### Symboles numérotés

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 Échos radar</a>
  <a href="#lrs-item-2">2 Couverture en altitude</a>
  <a href="#lrs-item-3">3 Indicateur d’élévation d’antenne</a>
  <a href="#lrs-item-4">4 Historique des échos</a>
  <a href="#lrs-item-5">5 Barres et PRF</a>
  <a href="#lrs-item-6">6 Coordonnées Bullseye de la porte</a>
  <a href="#lrs-item-7">7 Vitesse sol de votre avion</a>
  <a href="#lrs-item-8">8 Portée maximale affichée</a>
  <a href="#lrs-item-9">9 Porte d’acquisition</a>
  <a href="#lrs-item-10">10 Référence d’horizon local</a>
  <a href="#lrs-item-11">11 Référence Bullseye</a>
  <a href="#lrs-item-12">12 Point de navigation 3</a>
  <a href="#lrs-item-13">13 Indicateur d’azimut d’antenne</a>
  <a href="#lrs-item-14">14 Limites de balayage en azimut</a>
  <a href="#lrs-item-15">15 Vitesse vraie de votre avion</a>
</div>

<a id="lrs-item-1"></a>

### 1. Échos radar

Les petits blocs verts sont les échos détectés. Leur position indique relèvement et distance, sans signifier un verrouillage ni permettre d’identifier ami ou ennemi par leur seule forme.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-2"></a>

### 2. Couverture en altitude

Les deux cercles et nombres à gauche indiquent le plafond et le plancher du balayage à la distance de la porte, en milliers de pieds. `29` et `-2` correspondent à environ 29 000 et -2 000 pieds. Une valeur négative décrit la géométrie du balayage, pas une cible souterraine. Relisez ces limites après toute modification de la distance de la porte ou de l’élévation.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-3"></a>

### 3. Indicateur d’élévation d’antenne

Le chevron de l’échelle gauche indique l’élévation d’antenne. Il se lit avec la couverture du numéro 2 ; ce n’est pas un repère d’altitude cible.

Les six divisions couvrent +60° à -60°. Le centre correspond à 0°, les valeurs positives sont au-dessus et les négatives au-dessous.

La **molette ELE** commande l’élévation. Sur écran tactile, utilisez la commande illustrée en surveillant le chevron et les limites d’altitude.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="3. Indicateur d’élévation d’antenne">

Voir [Interface tactile : élévation d’antenne](/fr/Docs/aircraft/f15c/touch-ui.html#item-25).

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-4"></a>

### 4. Historique des échos

L’historique conserve les positions des balayages précédents pour montrer le mouvement. Distinguez ces anciennes positions de l’écho courant : chaque bloc ne représente pas une cible différente.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-5"></a>

### 5. Barres et PRF

`6HI` indique l’état des barres et de la fréquence de répétition des impulsions (PRF) ; `HI` signifie PRF élevée.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-6"></a>

### 6. Coordonnées Bullseye de la porte

Ce relevé donne le relèvement et la distance de la [porte (numéro 9)](#lrs-item-9) depuis le point commun Bullseye. `310-12` signifie 310°, à 12 milles nautiques de Bullseye.

En multijoueur futur, ces coordonnées permettront de communiquer les positions aux équipiers. Placez la porte sur la position à signaler, puis lisez ses coordonnées Bullseye.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-7"></a>

### 7. Vitesse sol de votre avion

`G 589` indique une vitesse sol de 589 nœuds, mesurée par rapport au sol.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-8"></a>

### 8. Portée maximale affichée

Le `80` en haut à droite indique une échelle VSD de 80 milles nautiques, et non la distance d’une cible ou la portée maximale de détection du radar.

Déplacez la [porte](#lrs-item-9) au-delà des bords pour changer l’échelle :

- Au-delà du bord supérieur : augmenter la portée affichée.
- Au-delà du bord inférieur : réduire la portée affichée.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-9"></a>

### 9. Porte d’acquisition

Les deux traits verticaux forment la porte d’acquisition, qui sélectionne une position ou un écho brut. Sa distance sert aussi au calcul de la couverture du numéro 2.

Déplacez-la avec le bouton **Cursor (commande TDC)** à droite de l’interface tactile. En franchissant les bords, elle règle aussi [l’échelle de distance](#lrs-item-8) et [la couverture en azimut](#lrs-item-14).

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="9. Porte d’acquisition">

Voir [Interface tactile : Cursor](/fr/Docs/aircraft/f15c/touch-ui.html#item-18).

Acquisition manuelle :

1. Encadrez un écho brut avec la porte.
2. Touchez deux fois le bouton Cursor à droite pour lancer l’acquisition.
3. Une acquisition réussie engage automatiquement **STT (poursuite d’une cible unique)**.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-10"></a>

### 10. Référence d’horizon local

La ligne horizontale aux extrémités rabattues est la référence d’horizon local. Au centre, elle indique le vol en palier ; sa rotation représente le roulis. Elle fournit une référence d’attitude pendant l’observation du radar.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-11"></a>

### 11. Référence Bullseye

Bullseye est la référence commune pour les relèvements et distances. Les coordonnées de la porte sont expliquées au [numéro 6](#lrs-item-6).

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-12"></a>

### 12. Point de navigation 3

La flèche désigne le point de navigation 3. Le triangle vide indique sa position et `3` son numéro.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-13"></a>

### 13. Indicateur d’azimut d’antenne

Le chevron inférieur indique l’azimut actuel de l’antenne, à distinguer des limites circulaires. Il représente sa direction et non le cap cible.

Il se déplace de gauche à droite pendant le balayage pour refléter la direction instantanée de l’antenne.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-14"></a>

### 14. Limites de balayage en azimut

Les deux cercles inférieurs délimitent la largeur balayée ; la flèche désigne la limite droite. Ils ne représentent pas deux avions.

Déplacez la [porte](#lrs-item-9) au-delà des bords latéraux :

- À gauche : réduire la largeur de balayage.
- À droite : augmenter la largeur de balayage.

La couverture va de **10°** à **120°**. Ce réglage modifie la largeur en azimut, pas l’échelle de distance du numéro 8.

[Retour à l’index numéroté](#lrs-index)

<a id="lrs-item-15"></a>

### 15. Vitesse vraie de votre avion

`T 589` indique 589 nœuds de vitesse vraie par rapport à l’air. Cette donnée diffère de la vitesse sol du numéro 7, même si les valeurs sont ici identiques.

[Retour à l’index numéroté](#lrs-index)

## Poursuite d’une cible unique (STT)

Le STT se concentre sur une cible et fournit en continu position, mouvement et données de calcul des armes. Depuis le LRS, encadrez un écho et touchez deux fois Cursor : une acquisition réussie engage STT. Voir [Porte d’acquisition](#lrs-item-9).

Contrairement à la recherche de zone LRS, le STT maintient la poursuite de la cible choisie pour le canon et les missiles. Dans ce jeu, AIM-7 exige STT au lancement puis une illumination radar. STT prend aussi en charge AIM-120, mais leurs exigences de guidage diffèrent.

STT déclenche l’alerte de verrouillage radar adverse. À courte distance, la cible peut larguer des paillettes ou effectuer un notch pour rompre la poursuite ou dégrader les conditions de tir. Surveillez ses manœuvres, la poursuite et la zone de lancement dynamique.

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="Poursuite d’une cible unique (STT)">
</a>

Figure 1 : cible hors de portée maximale, cercle ASE réduit.

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 Vitesse vraie cible</a>
  <a href="#stt-item-2">2 Aspect H/T et cap cible</a>
  <a href="#stt-item-3">3 Altitude cible</a>
  <a href="#stt-item-4">4 PDT — cible désignée principale</a>
  <a href="#stt-item-5">5 Point de guidage</a>
  <a href="#stt-item-6">6 Cercle ASE</a>
  <a href="#stt-item-7">7 Vitesse de rapprochement</a>
  <a href="#stt-item-8">8 Indicateur de distance cible</a>
  <a href="#stt-item-9">9 Rmax — portée maximale</a>
  <a href="#stt-item-10">10 Portée maximale optimisée</a>
  <a href="#stt-item-11">11 Référence RTR</a>
  <a href="#stt-item-12">12 Portée minimale</a>
  <a href="#stt-item-13">13 Temps du missile</a>
  <a href="#stt-item-14">14 Relèvement et distance cible</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="Poursuite d’une cible unique (STT)">
</a>

Figure 2 : la cible entre dans la portée maximale et le cercle ASE s’agrandit.

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 Angle d’aspect cible</a>
  <a href="#stt-item-16">16 Cercle ASE agrandi</a>
  <a href="#stt-item-17">17 Distance et rapprochement de la figure 2</a>
</div>

Cliquez sur les images pour leur résolution d’origine et sur les numéros pour les explications. **AIM-7 est sélectionné** dans les deux exemples. Les symboles communs — grille, horizon et points de navigation — sont décrits dans LRS. Le `40` de la figure 1 correspond à 40 milles nautiques ; le `20` de la figure 2 à 20 milles nautiques.

<a id="stt-item-1"></a>

### 1. Vitesse vraie cible

Le `397` en haut à gauche indique la vitesse vraie cible de 397 nœuds, pas votre vitesse. `577` dans la figure 2 signifie 577 nœuds.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-2"></a>

### 2. Aspect H/T et cap cible

`H` signifie **HOT** : la cible présente son nez vers vous, une situation menaçante pour une cible hostile. `T` apparaît lorsqu’elle s’éloigne dos à vous. Ces indications décrivent l’aspect, pas l’identification ami/ennemi.

Le `313` suivant est son cap de 313°, pas le vôtre. H/T décrit l’orientation relative et le nombre donne le cap. Voir le [numéro 15](#stt-item-15) pour les angles gauche/droite.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-3"></a>

### 3. Altitude cible

À gauche, `13-4` signifie 13 400 pieds MSL, au-dessus du niveau moyen de la mer.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT — cible désignée principale

L’étoile à cinq branches représente le PDT dans le plan azimut–distance. La longue ligne vers l’avant indique la direction de sa vitesse.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-5"></a>

### 5. Point de guidage

Le point lumineux est le point de guidage. Au lancement, placez le cercle ASE (6) autour de lui pour réduire le virage demandé au missile et économiser son énergie. La logique est identique au [point de guidage HUD](/fr/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2).

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-6"></a>

### 6. Cercle ASE

Le cercle indique l’erreur de guidage admissible (ASE). Les conditions de tir commencent à être satisfaites seulement lorsqu’il s’agrandit. Un point de guidage dans un petit cercle ne suffit pas à autoriser le tir.

Après agrandissement, tenez encore compte du point, de la distance et du guidage du missile. Voir [ASE sur le HUD](/fr/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1).

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-7"></a>

### 7. Vitesse de rapprochement

`1006` indique le rapprochement entre vous et la cible, en nœuds : c’est la variation de distance et non la vitesse propre de la cible.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-8"></a>

### 8. Indicateur de distance cible

Le `>` à droite situe la cible sur l’échelle courante de `40` milles nautiques. Le `1006` adjacent est le rapprochement, pas la distance.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax — portée maximale

Le premier trait, le plus haut, est Rmax : la portée maximale calculée dans les conditions présentes.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-10"></a>

### 10. Portée maximale optimisée

Le deuxième trait indique la portée maximale optimisée.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-11"></a>

### 11. Référence RTR

Le haut du rectangle est RTR (Range Turn and Run), une portée prenant en compte une cible qui fait demi-tour pour fuir, souvent appelée portée sans échappatoire. Elle indique des conditions favorables, sans garantir l’impact.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-12"></a>

### 12. Portée minimale

Le bas du rectangle est RMin. Comparez-y la distance cible : se rapprocher n’améliore pas toujours les conditions de tir.

Les repères 9, 10, 11 et 12 forment la DLZ (zone de lancement dynamique), variable selon votre altitude, l’écart d’altitude, la direction et la vitesse cible, votre vitesse et d’autres facteurs.

Évaluez l’ensemble avant le tir. Rapprochez-vous autant que raisonnablement possible tout en préservant votre sécurité et en respectant la portée minimale.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-13"></a>

### 13. Temps du missile

`53SEC` prédit un impact 53 secondes après un lancement immédiat, selon la géométrie actuelle. Ce n’est pas le compte à rebours d’un missile déjà lancé.

L’estimation suppose que la cible conserve son mouvement sans tourner. Un changement de cap ou de vitesse modifie le temps réel d’impact.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-14"></a>

### 14. Relèvement et distance cible

`129-21` en bas à droite donne le relèvement et la distance depuis votre avion : 129° et 21 milles nautiques. Ne les confondez pas avec les coordonnées Bullseye.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-15"></a>

### 15. Angle d’aspect cible

Dans la figure 2, `13L` indique un nez orienté de 130° vers la gauche ; `13R` signifierait 130° vers la droite. Le nombre est en dizaines de degrés, `L` et `R` signifiant gauche et droite.

C’est l’aspect relatif, pas un cap de 130°. Le `351` suivant donne le cap cible de 351°. Voir aussi [H/T et cap, numéro 2](#stt-item-2).

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-16"></a>

### 16. Cercle ASE agrandi

Hors de portée en figure 1, le cercle reste petit. En figure 2, il s’agrandit à l’entrée dans la portée maximale calculée. Comme au [numéro 6](#stt-item-6), il faut aussi lire le point et les repères de portée. AIM-7 exige toujours poursuite et illumination.

[Retour à l’index numéroté](#stt-index)

<a id="stt-item-17"></a>

### 17. Distance et rapprochement de la figure 2

La flèche désigne le même `>` qu’au [numéro 8](#stt-item-8). Utilisez l’échelle de 20 milles nautiques de cette figure, pas celle de 40 de la figure 1.

Le `915` adjacent indique 915 nœuds de rapprochement, comme au [numéro 7](#stt-item-7).

[Retour à l’index numéroté](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="17. Distance et rapprochement de la figure 2">
    </a>
    <figcaption>Figure 3 · Entrée dans RTR : triangle de tir</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="17. Distance et rapprochement de la figure 2">
    </a>
    <figcaption>Figure 4 · Sous la portée minimale : Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### Figure 3 · Entrée dans RTR : triangle de tir

Dans RTR, un triangle apparaît en bas du VSD pour signaler des conditions favorables. Il est au centre inférieur, à gauche de `8SEC`.

Vérifiez encore ASE, point de guidage et portée minimale, et maintenez poursuite et illumination pour AIM-7. Le triangle ne garantit pas l’impact.

[Retour à l’index numéroté](#stt-index)

<a id="stt-break-x"></a>

### Figure 4 · Sous la portée minimale : Break X

Sous la portée minimale, une croix **Break X** apparaît au centre et indique de ne pas tirer.

Le missile peut manquer de temps pour accélérer. Même en cas d’impact, votre trajectoire peut traverser la zone de fragmentation. Verrouillage et proximité ne suffisent donc pas : respectez la portée minimale.

[Retour à l’index numéroté](#stt-index)

## Poursuite sur balayage (TWS)

TWS maintient plusieurs pistes tout en poursuivant le balayage. Il s’utilise principalement à moins de 40 milles nautiques, surtout pour AIM-120.

Pour conserver un rafraîchissement élevé, TWS limite les combinaisons de barres et de largeur en azimut. Une largeur accrue impose moins de barres. Le choix d’azimut sélectionne automatiquement le nombre de barres.

| Couverture en azimut | Barres automatiques |
| --- | --- |
| 60° | 2 barres |
| 30° | 4 barres |
| 15° | 6 barres |

### Entrer en TWS

Deux méthodes sont disponibles :

1. **Cible verrouillée :** depuis STT, poussez AA vers le bas.
2. **Sans verrouillage :** placez la porte sur une zone vide, touchez deux fois TDC (Cursor à droite) pour l’acquisition manuelle et poussez rapidement AA vers le bas en même temps.

Voir [Cursor](/fr/Docs/aircraft/f15c/touch-ui.html#item-18) et [acquisition automatique](/fr/Docs/aircraft/f15c/touch-ui.html#item-28).

Chaque cible est rafraîchie moins souvent qu’en STT, car TWS balaie aussi le reste de l’espace. À grande distance, la résolution est limitée. Une manœuvre à fort facteur de charge, des paillettes ou la dispersion d’une formation auparavant vue comme une cible peuvent empêcher la corrélation entre nouveaux échos et pistes et faire perdre la poursuite.

### Quitter TWS

- **Avec PDT :** **AA Down** engage STT sur ce PDT et supprime tous les autres fichiers de piste.
- **Sans PDT :** touchez **AA** une fois pour revenir en LRS.

### Catégories de pistes

TWS distingue les cibles non désignées, principales et secondaires. Les limites suivantes s’appliquent au jeu.

Les fichiers de piste se créent automatiquement. Un écho nouvellement détecté apparaît comme un carré sans vecteur vitesse. Celui-ci apparaît après accumulation d’informations suffisantes lors des balayages suivants.

| Catégorie | Signification | Capacité |
| --- | --- | --- |
| NDT (Non-designated Target) | Cible ni principale ni secondaire | Jusqu’à 16 |
| PDT (Primary Designated Target) | Cible principale d’intérêt et d’engagement | Une seule |
| SDT (Secondary Designated Target) | Cible secondaire disponible pour une sélection ultérieure | Jusqu’à 7 |

Il s’agit de désignation, pas d’identification ami/ennemi. Sans PDT : NDTWS ; avec PDT : DTWS.

<a id="tws-designation"></a>

### Désigner et changer le PDT

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="Désigner et changer le PDT">

Une fois les pistes établies, utilisez **Coolie Up (vers le haut)** pour désigner :

- **Automatiquement :** Coolie Up désigne un PDT et des SDT.
- **En cycle :** les actions suivantes parcourent les SDT pour choisir le PDT.
- **Manuellement :** encadrez un NDT ou SDT, puis Coolie Up pour en faire le PDT.

Un seul PDT est possible. Désigner une autre cible rétrograde l’ancien PDT en SDT.

**Coolie Down** annule toutes les désignations, rend PDT et SDT à l’état NDT et rétablit NDTWS.

Voir [Interface tactile : Coolie](/fr/Docs/aircraft/f15c/touch-ui.html#item-26).

### Engagement multicible AIM-120

En TWS, le tir vise uniquement le PDT courant. Pour engager plusieurs cibles avec AIM-120, changez de PDT entre les tirs :

1. Tirez AIM-120 sur le PDT courant.
2. Sélectionnez le PDT suivant par Coolie Up ou manuellement avec la porte.
3. Tirez sur le nouveau PDT.

Une fois l’ancienne cible devenue SDT, la liaison de données peut continuer d’actualiser le missile déjà lancé. Changer de PDT ne termine pas ce soutien ; maintenez les pistes concernées.

<a id="tws-ndt-index"></a>

### Figure 1 · Cibles non désignées

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="Figure 1 · Cibles non désignées">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 Cible sans fichier de piste établi</a>
  <a href="#tws-ndt-item-2">2 NDT — cible non désignée</a>
  <a href="#tws-ndt-item-3">3 État TWS</a>
</div>

Cliquez sur l’image pour sa résolution d’origine, ou sur un numéro pour accéder à son explication.

<a id="tws-ndt-item-1"></a>

#### 1. Cible sans fichier de piste établi

La flèche pointe un carré plein nouvellement détecté, sans vecteur faute d’informations suffisantes. Les balayages suivants établissent la piste et ajoutent le vecteur du numéro 2.

[Retour à l’index numéroté](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT — cible non désignée

Un symbole plein avec vecteur représente une piste NDT établie ; la ligne indique son mouvement. La piste est créée automatiquement, sans désignation manuelle, et n’est ni PDT ni SDT. Jusqu’à 16 NDT sont pris en charge.

[Retour à l’index numéroté](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. État TWS

En bas à gauche, `2TWSM` indique l’état radar : `TWS` pour poursuite sur balayage, `M` pour PRF moyenne (MPRF), précédés de l’indication de barre.

[Retour à l’index numéroté](#tws-ndt-index)

<a id="tws-designated-index"></a>

### Figure 2 · Cibles principale et secondaires

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="Figure 2 · Cibles principale et secondaires">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT — cible désignée secondaire</a>
  <a href="#tws-designated-item-2">2 PDT — cible désignée principale</a>
  <a href="#tws-designated-item-3">3 Altitude de la cible dans la porte</a>
  <a href="#tws-designated-item-4">4 Distance d’activation AIM-120</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT — cible désignée secondaire

Un symbole vide avec vecteur représente un SDT, désigné mais non PDT courant. Le jeu permet jusqu’à 7 SDT.

[Retour à l’index numéroté](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT — cible désignée principale

L’étoile à cinq branches est le PDT et sa longue ligne indique la direction de vitesse. La porte l’encadre ici. Les données cible et les calculs d’armes du VSD portent sur ce PDT.

Un seul PDT existe ; les autres cibles désignées restent SDT. La différence est la priorité, pas un verrouillage STT.

[Retour à l’index numéroté](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. Altitude de la cible dans la porte

Le petit carré à l’extérieur de l’échelle repère l’altitude de la cible dans la porte. Entre plafond et plancher, la cible est couverte ; au-delà, réglez l’élévation d’antenne.

D’un écho brut à un NDT, SDT ou PDT, il suffit de l’encadrer pour consulter son altitude.

[Retour à l’index numéroté](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. Distance d’activation AIM-120

Le cercle vide sur l’échelle droite indique la distance d’activation AIM-120. Si la cible est plus proche, le missile active son radar et acquiert activement la cible dès le lancement.

[Retour à l’index numéroté](#tws-designated-index)

### Indications de portée et RTR

Cliquez sur l’image pour sa résolution d’origine.

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="Indications de portée et RTR">
    </a>
    <figcaption>Figure 3 · En portée : agrandissement ASE pointillé</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="Indications de portée et RTR">
    </a>
    <figcaption>Figure 4 · RTR : étoile à six branches et ASE clignotant</figcaption>
  </figure>
</div>

**Figure 3 :** en entrant dans la portée missile, le cercle ASE pointillé s’agrandit et les conditions de tir commencent à être satisfaites.

**Figure 4 :** en RTR, une étoile à six branches apparaît au centre inférieur et ASE clignote, signalant de bonnes conditions. L’image montre la phase éteinte du clignotement.

### Soutien des missiles après lancement

Après lancement AIM-120 en TWS, le radar maintient la piste et transmet les mises à jour par liaison de données. Surveillez cette poursuite, surtout avant activation du radar missile et acquisition autonome.

**Changer de PDT n’arrête pas automatiquement le soutien précédent.** Vous pouvez désigner puis tirer sur un nouveau PDT. L’ancien, devenu SDT, continue de fournir des mises à jour tant que sa piste est maintenue.

Gardez les cibles soutenues dans le volume balayé. Une perte de piste par manœuvre, interférence ou sortie du volume empêche les nouvelles mises à jour. STT abandonne les autres pistes ; évaluez l’effet sur les missiles déjà lancés avant de changer de mode.

AIM-120 acquiert activement après activation de son radar. Si la cible est dans la [distance d’activation](#tws-designated-item-4) au lancement, cette activation et l’acquisition commencent immédiatement.

<a id="tws-missile-support-index"></a>

Cliquez sur l’image pour sa résolution d’origine, ou sur un numéro pour accéder à son explication.

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="Soutien des missiles après lancement">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 Progression vers l’activation</a>
  <a href="#tws-missile-support-item-2">2 Repère de missile lancé</a>
  <a href="#tws-missile-support-item-3">3 Temps restant avant activation</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. Progression vers l’activation

Le petit trait se déplace vers le point du numéro 2. À son arrivée, selon les calculs faits au lancement, le missile devrait avoir activé son radar et commencé la recherche active.

[Retour à l’index numéroté](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. Repère de missile lancé

Le point signifie qu’un AIM-120 a été tiré sur cette cible et reçoit le soutien de liaison de données. C’est aussi la destination du repère 1 au moment estimé de l’activation.

[Retour à l’index numéroté](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. Temps restant avant activation

`A 9` en haut à droite signifie environ 9 secondes avant activation du radar missile et recherche active. Ce compte à rebours complète le repère 1.

[Retour à l’index numéroté](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### Affichage après activation

Après activation, **A devient T**, le temps restant estimé avant l’interception. `T 17` prédit rencontre et impact dans 17 secondes.

Cliquez sur l’image pour sa résolution d’origine, ou sur un numéro pour accéder à son explication.

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="Affichage après activation">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 Repère de missile actif</a>
  <a href="#tws-missile-active-item-2">2 Progression du vol missile</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. Repère de missile actif

Le repère 1 indique que le missile lancé sur cette cible a activé son radar et commencé la recherche active.

[Retour à l’index numéroté](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. Progression du vol missile

Le X avance vers l’étoile de la cible, représentant le missile en approche. Il atteint l’étoile au moment d’interception précalculé.

Ces temps et progressions reposent sur les conditions au lancement. Manœuvres et contre-mesures allongent généralement le temps réel. L’expiration du compte à rebours ou l’arrivée du X indique seulement l’interception prévue, pas un impact confirmé.

[Retour à l’index numéroté](#tws-missile-active-index)

## Acquisition automatique rapprochée et Flood

Le balayage automatique et l’illumination Flood se réfèrent à **l’axe longitudinal de l’avion** et suivent son attitude ; LRS et TWS utilisent le **plan horizontal stabilisé par cardan**.

L’acquisition automatique sert surtout au **WVR (combat à portée visuelle)**. Le boresight longue portée verrouille à moins de **40 milles nautiques** ; les autres modes automatiques travaillent dans **10 milles nautiques**.

### Sélection du mode

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Sélection du mode">

Actionnez **AA vers le haut** pour parcourir :

1. Première action : **SS (Supersearch)**.
2. Deuxième : **VS (balayage vertical)**.
3. Troisième : **Boresight**.
4. Quatrième : **Boresight longue portée**.

**Maintenez AA vers le haut** pour entrer en **Flood**.

### SS — Supersearch

La première action AA vers le haut engage SS. Le grand cercle HUD couvre **20°** ; une cible dans le cercle peut être acquise automatiquement dans **10 milles nautiques**.

L’élévation décale la recherche de **10°** au maximum vers le haut ou le bas. Les images montrent les positions centrée, haute et basse ; une partie du cercle peut sortir du HUD.

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>Centré</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>Décalage de 10° vers le haut</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>Décalage de 10° vers le bas</figcaption>
  </figure>
</div>

### Balayage vertical

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="Balayage vertical" loading="lazy">
  <figcaption>VS — balayage vertical</figcaption>
</figure>

Le balayage vertical couvre une zone étroite au-dessus du nez, utile après le croisement lorsqu’une cible passe au-dessus.

### Boresight

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="Boresight" loading="lazy">
  <figcaption>BST — boresight</figcaption>
</figure>

Le boresight balaie un cône étroit devant l’avion et verrouille la première cible qui y entre.

### Boresight longue portée

LR BST fonctionne comme BST avec un cercle HUD plus petit et une portée automatique portée à **40 milles nautiques**. Maintenez la cible dans le petit cercle.

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="Boresight longue portée" loading="lazy">
  <figcaption>LR BST — boresight longue portée</figcaption>
</figure>

### Flood

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood" loading="lazy">
  <figcaption>HUD en Flood</figcaption>
</figure>

Flood fournit une illumination large pour AIM-7. Gardez la cible dans le cercle jusqu’à l’impact.

En Flood, `FLOOD` apparaît en haut à gauche du VSD et la grille disparaît. L’horizon local, la porte et les points de navigation restent affichés.

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood">
  </a>
  <figcaption>VSD en Flood (cliquer pour l’original)</figcaption>
</figure>

## Procédure pratique

1. Établissez la situation lointaine en LRS.
2. Réglez l’élévation selon l’altitude cible.
3. Utilisez TWS pour prioriser plusieurs cibles.
4. Utilisez STT pour une poursuite concentrée ou une illumination stable.
5. Après le croisement, utilisez l’acquisition automatique.
