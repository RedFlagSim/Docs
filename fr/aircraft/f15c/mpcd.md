---
title: MPCD
---

<script setup>
import sitOverviewImage from '/assets/F-15C/MPCD/sit-overview-numbered.png'
import sitEditorImage from '/assets/F-15C/MPCD/sit-tac-editor.png'
import sitControlsImage from '/assets/F-15C/MPCD/sit-controls-numbered.png'
import sitDecenterImage from '/assets/F-15C/MPCD/sit-decenter-numbered.png'
import sitExpImage from '/assets/F-15C/MPCD/sit-exp.png'
import sitFriendlyImage from '/assets/F-15C/MPCD/sit-friendly-flight-numbered.png'
import sitFlightImage from '/assets/F-15C/MPCD/sit-flight.png'
import sitSearchImage from '/assets/F-15C/MPCD/sit-vsd-search.png'
import sitLocalImage from '/assets/F-15C/MPCD/sit-local-tracks-numbered.png'
import sitCorrelatedImage from '/assets/F-15C/MPCD/sit-correlated-tracks-pdt.png'
import sitDetailImage from '/assets/F-15C/MPCD/sit-exp-flight-detail.png'
import aaOverviewImage from '/assets/F-15C/MPCD/aa-overview-numbered.png'
import aaLoadoutImage from '/assets/F-15C/MPCD/aa-loadout.png'
</script>

# MPCD

L’écran couleur multifonction (MPCD) propose actuellement deux pages : **SIT**, pour la connaissance de la situation tactique, et **AA**, pour l’armement air-air. **SIT s’affiche par défaut.**

SIT regroupe les informations de mission, les données de liaison de données et les pistes acquises par votre radar. AA affiche les emports, le point d’emport sélectionné, les munitions du canon et les quantités de contre-mesures.

<a id="mpcd-index"></a>

## Index de la page

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 Affichage et symboles SIT</a>
  <a href="#sit-mission">2 Informations de mission et commandes d’affichage</a>
  <a href="#sit-modes">3 Commande du curseur et modes d’affichage</a>
  <a href="#sit-friendly">4 Avions amis et Bullseye</a>
  <a href="#sit-workflow">5 Utiliser SIT avec le VSD</a>
  <a href="#mpcd-aa">6 Page d’armement AA</a>
</div>

Cliquez sur une capture d’écran pour l’ouvrir dans sa résolution d’origine. Les explications numérotées correspondent aux annotations de chaque image.

<a id="mpcd-sit"></a>

## Affichage et symboles SIT

SIT présente la situation tactique en vue de dessus : avions, points de cheminement du plan de vol, zones géographiques et repères de distance.

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="Vue d’ensemble de SIT, repères 1–13" /></a>
  <figcaption>Vue d’ensemble de SIT. Dans cet exemple, la porte d’acquisition suit le curseur du VSD.</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### Symboles numérotés

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 Heure Zulu</a>
  <a href="#sit-item-2">2 Compas</a>
  <a href="#sit-item-3">3 Informations de liaison de données</a>
  <a href="#sit-item-4">4 Cercle de demi-portée</a>
  <a href="#sit-item-5">5 Informations d’armement</a>
  <a href="#sit-item-6">6 Zone géographique</a>
  <a href="#sit-item-7">7 Distance d’affichage</a>
  <a href="#sit-item-8">8 Coordonnées du curseur par rapport à votre avion</a>
  <a href="#sit-item-9">9 Zone d’engagement SAM</a>
  <a href="#sit-item-10">10 Points de cheminement du plan de vol</a>
  <a href="#sit-item-11">11 Porte d’acquisition</a>
  <a href="#sit-item-12">12 Quantités de contre-mesures</a>
  <a href="#sit-item-13">13 Coordonnées du curseur par rapport au Bullseye</a>
</div>

<a id="sit-item-1"></a>

### 1. Heure Zulu

L’horloge en haut à gauche indique l’heure Zulu (UTC). Ici, `23:00:51Z` signifie 23 h 00 min 51 s Zulu.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. Compas

Le compas fournit un repère de relèvement autour de votre avion. Utilisez ses graduations pour lire le relèvement des cibles.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. Informations de liaison de données

Les symboles rouges représentent une patrouille hostile signalée par liaison de données. Leurs **contours en pointillés** indiquent cette origine. Le passage d’un signalement à une piste radar corrélée est illustré dans [Utiliser SIT avec le VSD](#sit-workflow).

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. Cercle de demi-portée

Le cercle blanc intérieur indique la moitié de la distance d’affichage de l’[élément 7](#sit-item-7). Avec `80` dans cette vue centrée, il représente une distance de 40 milles nautiques depuis votre avion.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. Informations d’armement

L’indication en bas à gauche résume les informations d’armement. La [page AA](#mpcd-aa) présente les emports correspondants, point par point.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. Zone géographique

Le polygone en pointillés est une zone géographique (Geofence) définie dans la mission. Ces limites permettent de rapprocher la situation tactique des zones configurées dans l’[éditeur Tac](#sit-mission).

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. Distance d’affichage

Dans cette vue centrée, `80` en haut à droite indique la distance entre votre avion et le haut du compas, en milles nautiques. En [mode Decenter](#sit-decenter), votre avion est placé plus bas ; le repère de distance de ce mode est expliqué ci-dessous.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. Coordonnées du curseur par rapport à votre avion

L’indication cyan donne le relèvement et la distance du curseur depuis votre avion. `092-22` place le curseur au relèvement 092°, à 22 milles nautiques. Cette indication suit la porte d’acquisition [11](#sit-item-11).

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. Zone d’engagement SAM

Les cercles rouges représentent les zones d’engagement des systèmes de missiles sol-air (SAM). Ce sont aussi des zones géographiques. Ils portent ici la mention `MEZ`, abréviation de **Missile Engagement Zone** (zone d’engagement de missiles).

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. Points de cheminement du plan de vol

Les symboles jaunes reliés entre eux indiquent la séquence des points de cheminement du plan de vol de votre patrouille.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. Porte d’acquisition

Les deux barres verticales cyan forment le curseur, ou porte d’acquisition. Des **barres en pointillés** signifient que la porte SIT suit le curseur VSD. Lorsque SIT reçoit la commande du curseur, les barres deviennent **continues** et le TDC déplace directement la porte SIT. Voir [Commande du curseur et modes d’affichage](#sit-modes).

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. Quantités de contre-mesures

Les indications vertes `C 120` et `F 60` signalent qu’il reste 120 leurres électromagnétiques et 60 leurres infrarouges.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. Coordonnées du curseur par rapport au Bullseye

L’indication jaune donne le relèvement et la distance du curseur depuis le **Bullseye**, point de référence commun. `121-30` place le curseur au relèvement 121°, à 30 milles nautiques du Bullseye. L’indication cyan en haut à droite utilise votre avion comme référence.

[Retour à l’index des symboles](#sit-symbol-index)

<a id="sit-mission"></a>

## Informations de mission et commandes d’affichage

### Informations provenant de l’éditeur Tac

Une grande partie des informations affichées sur SIT provient du contenu configuré dans l’éditeur de mission. La séquence de points de cheminement et les zones géographiques de l’exemple peuvent être comparées directement à la configuration ci-dessous.

Adaptez les missions aux capacités de votre appareil. Un nombre plus élevé d’unités consomme davantage de ressources de calcul et de mémoire.

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="Éditeur Tac avec points de cheminement, Bullseye, avions et zones géographiques" loading="lazy" /></a>
  <figcaption>La configuration de mission fournit le contexte de l’affichage SIT.</figcaption>
</figure>

Pour configurer une mission, voir [Éditeur Tac](/fr/Docs/basics/tac-editor.html).

### Choisir les informations affichées sur SIT

Ouvrez le [panneau de fonctions de l’interface tactile](/fr/Docs/aircraft/f15c/touch-ui.html#item-1) et sélectionnez **MAIN**. La ligne **SIT** détermine les informations affichées et si sa distance d’affichage suit celle du VSD.

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="Commandes SIT du panneau MAIN : WP, DLK, AUTO RANGE et GEO FENCE, repères 1–4" loading="lazy" /></a>
</figure>

| N° | Commande | Fonction |
| --- | --- | --- |
| 1 | `WP` | Afficher ou masquer les points de cheminement. |
| 2 | `DLK` | Afficher ou masquer les informations de liaison de données. |
| 3 | `AUTO RANGE` | Déterminer si la distance d’affichage SIT suit les changements de distance d’affichage VSD. |
| 4 | `GEO FENCE` | Afficher ou masquer les zones géographiques. |

[Retour à l’index de la page](#mpcd-index)

<a id="sit-modes"></a>

## Commande du curseur et modes d’affichage

### Attribuer la commande du curseur à SIT

<div class="mpcd-controls">
  <div>
    <p>Lorsque le TDC est affecté au VSD, actionnez le <strong>commutateur Castle vers le HAUT</strong> pour sélectionner SIT comme écran actif (SOI). Le TDC commande alors uniquement la porte d’acquisition SIT, dont les deux barres deviennent <strong>continues</strong>.</p>
    <p>Castle vers le haut fait basculer la commande du curseur entre VSD et SIT. Lorsque la porte suit de nouveau le VSD, ses barres s’affichent en pointillés.</p>
    <p>Les commandes tactiles illustrées à côté sont le <a href="/fr/Docs/aircraft/f15c/touch-ui.html#item-19">commutateur Castle</a> et le <a href="/fr/Docs/aircraft/f15c/touch-ui.html#item-18">curseur (TDC)</a>.</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/fr/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Commutateur Castle de l’interface tactile" loading="lazy" /></a>
      <figcaption>Commutateur Castle</figcaption>
    </figure>
    <figure>
      <a href="/fr/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Commande tactile du curseur / TDC" loading="lazy" /></a>
      <figcaption>Curseur / TDC</figcaption>
    </figure>
  </div>
</div>

Les actions droite, gauche et bas ci-dessous s’appliquent **lorsque SIT commande le curseur**.

| Direction de Castle | Mode SIT | Utilité |
| --- | --- | --- |
| Droite | Decenter | Placer votre avion plus bas pour laisser davantage d’espace devant lui. |
| Gauche | EXP | Agrandir une zone locale à l’échelle de 10 NM ; décaler la vue avec le curseur. |
| Bas | Patrouille | Utiliser une échelle fixe de 5 NM pour observer votre patrouille. |

<a id="sit-decenter"></a>

### Mode Decenter

Lorsque SIT est actif, actionnez **Castle vers la DROITE** pour passer en mode Decenter. Votre avion est placé plus bas sur l’écran, laissant davantage d’espace dans la partie supérieure pour afficher la situation devant lui.

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="SIT décentré : porte d’acquisition continue 1 et votre avion 2" loading="lazy" /></a>
  <figcaption>1 : porte d’acquisition continue commandée par SIT. 2 : votre avion.</figcaption>
</figure>

Dans cette vue, `120` en haut à droite représente **120 milles nautiques entre votre avion et le haut du grand cercle**.

<a id="sit-exp"></a>

### Mode EXP

Lorsque SIT est actif, actionnez **Castle vers la GAUCHE** pour passer en mode EXP. Ce mode agrandit une zone à l’**échelle de 10 milles nautiques**, signalée par `E10` en haut à droite. Le curseur permet de décaler la vue vers la zone à examiner.

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="SIT en EXP avec E10 et symboles d’avions de liaison de données séparés" loading="lazy" /></a>
  <figcaption>EXP agrandit une petite zone pour mieux distinguer chaque avion et les zones géographiques proches.</figcaption>
</figure>

<a id="sit-flight"></a>

### Mode Patrouille

Lorsque SIT est actif, actionnez **Castle vers le BAS** pour passer en mode Patrouille. Ce mode utilise une **échelle fixe de 5 milles nautiques**, indiquée par `F5`, pour examiner les positions et altitudes des avions de votre patrouille.

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="SIT en mode Patrouille F5 avec les ailiers 2, 3 et 4 autour de votre avion" loading="lazy" /></a>
  <figcaption>Le mode Patrouille offre une vue rapprochée de la situation de votre patrouille.</figcaption>
</figure>

[Retour à l’index de la page](#mpcd-index)

<a id="sit-friendly"></a>

## Avions amis et Bullseye

SIT distingue les avions de votre patrouille des autres avions du même **Package** (groupement de mission). L’exemple montre aussi comment lire la position du curseur par rapport au Bullseye.

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT : avion du Package 1, Bullseye 2, ailiers 3 et votre avion 4" loading="lazy" /></a>
</figure>

| N° | Symbole | Signification |
| --- | --- | --- |
| 1 | Avion du Package en vert | Autre avion du même Package, ici un avion de veille aérienne. Le point central indique que votre avion reçoit sa contribution à la liaison de données. Le `15` en dessous indique une altitude de 15 000 pieds. |
| 2 | Bullseye jaune | Point de référence commun. L’indication jaune `037-12` en bas à droite place le curseur au relèvement 037°, à 12 milles nautiques du Bullseye. |
| 3 | Ailiers cyan | Les trois autres avions de votre patrouille. Les chiffres au centre sont leurs numéros : 2, 3 et 4 ; le chef de patrouille porte le numéro 1. Les chiffres en dessous donnent l’altitude en milliers de pieds. |
| 4 | Symbole cyan de votre avion | Position de votre avion sur SIT. |

[Retour à l’index de la page](#mpcd-index)

<a id="sit-workflow"></a>

## Utiliser SIT avec le VSD

Une méthode pratique consiste à utiliser la liaison de données sur SIT pour localiser la zone d’intérêt, puis à y diriger la recherche radar sur VSD afin d’acquérir les cibles. Les images montrent le passage des signalements par liaison de données aux pistes radar locales, puis aux pistes corrélées.

### 1. Rechercher dans la zone indiquée par liaison de données

Utilisez les positions signalées sur SIT pour orienter la recherche radar sur VSD. Le **secteur cyan sur le SIT à gauche** représente l’azimut et la distance de recherche du radar. Comparez-le aux positions signalées et vérifiez sur VSD que la couverture en altitude inclut celle des cibles.

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="Contacts de liaison de données et secteur radar cyan sur SIT, à côté des échos VSD" loading="lazy" /></a>
  <figcaption>SIT à gauche fournit le contexte tactique ; VSD à droite affiche les informations de recherche radar.</figcaption>
</figure>

Pour l’élévation de l’antenne, la couverture de recherche et la porte d’acquisition, voir [Radar et VSD : LRS](/fr/Docs/aircraft/f15c/radar.html#radar-lrs).

### 2. Lire les pistes acquises localement

Lorsque le radar établit des pistes, SIT les affiche ici sous forme de **carrés blancs à contour continu**. Le **contour continu** indique une piste acquise par votre radar ; le **blanc** indique une identité inconnue. À ce stade, les symboles rouges en pointillés de la liaison de données restent visibles derrière les pistes locales.

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="Pistes locales blanches superposées aux signalements rouges en pointillés sur SIT, avec les pistes VSD correspondantes" loading="lazy" /></a>
  <figcaption>1 : indication d’armement surlignée. 2 : pistes locales sur SIT. 3 : pistes radar correspondantes sur VSD.</figcaption>
</figure>

### 3. Reconnaître les pistes corrélées et le PDT

Après un certain temps, les fichiers de piste de votre radar et ceux reçus par liaison de données sont associés et fusionnés en une seule piste. SIT affiche alors un **symbole de cible plein**. Dans cet exemple, les avions hostiles corrélés sont rouges.

La **ligne bleue en pointillés**, repérée 1, pointe vers le **PDT (Primary Designated Target, cible principale désignée)**.

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="Pistes hostiles corrélées pleines et ligne bleue en pointillés vers PDT sur SIT, avec VSD en TWS" loading="lazy" /></a>
  <figcaption>La ligne bleue en pointillés indique la direction de la cible principale désignée.</figcaption>
</figure>

### 4. Examiner la patrouille cible en EXP

Passez SIT en [mode EXP](#sit-exp) pour examiner les différents avions de la patrouille cible. L’agrandissement sépare les symboles et facilite la lecture de leur répartition et de leurs altitudes en parallèle avec VSD.

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="Quatre avions hostiles pleins en EXP, repère 1, et leurs pistes VSD, repère 2" loading="lazy" /></a>
  <figcaption>1 : détails de la patrouille cible sur SIT en EXP. 2 : pistes correspondantes sur VSD.</figcaption>
</figure>

| Apparence dans ces exemples | Signification |
| --- | --- |
| Contour de cible en pointillés | Signalement par liaison de données. |
| Contour de cible continu | Piste acquise par le radar de votre avion. |
| Cible blanche | Identité inconnue. |
| Symbole de cible plein | Pistes locales et de liaison de données corrélées. |
| Ligne bleue en pointillés | Direction du PDT. |

[Retour à l’index de la page](#mpcd-index)

<a id="mpcd-aa"></a>

## Page d’armement AA

### Ouvrir AA

Avec le **TDC affecté au VSD**, actionnez **Castle vers la DROITE** pour faire passer le MPCD de SIT à la **page d’armement air-air AA**. Dans ce même contexte, Castle vers la gauche revient à SIT.

L’action de Castle dépend de l’écran qui commande le curseur : vers la droite, il ouvre AA lorsque VSD est actif et sélectionne Decenter lorsque SIT est actif.

### Lire les emports

AA représente les emports autour d’une silhouette d’avion, avec les munitions du canon et les quantités de contre-mesures.

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="Deux pages AA annotant un pylône vide, un réservoir externe, les munitions, les contre-mesures et le point sélectionné" loading="lazy" /></a>
  <figcaption>Le numéro 3 apparaît deux fois : à gauche, il indique les munitions du canon ; à droite, les quantités de contre-mesures.</figcaption>
</figure>

| Repère | Indication | Signification |
| --- | --- | --- |
| 1, image gauche | `PYLON` | Pylône vide, sans emport. |
| 2, image gauche | `FUEL` | Point d’emport portant un réservoir externe. |
| 3, image gauche | `950` | Munitions restantes du canon : 950 obus dans cet exemple. |
| 3, image droite | `CHF 120`, `FLR 60` | Contre-mesures restantes : 120 leurres électromagnétiques et 60 leurres infrarouges. |
| 4, image droite | `AMRM / 120B` surligné | Point d’emport sélectionné, indiqué par un surlignage vert et un cadre blanc autour de la désignation de l’arme. |

### Comparer avec la configuration de l’avion

La configuration **LOADOUT** ci-dessous correspond aux exemples AA précédents. Comparez les types d’emports et les quantités de munitions pour comprendre leur représentation sur MPCD.

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="Configuration LOADOUT correspondant à AA : 9M, 120B, 7M, réservoir externe, 950 obus, 120 leurres électromagnétiques et 60 infrarouges" loading="lazy" /></a>
</figure>

| Configuration LOADOUT | Affichage AA correspondant |
| --- | --- |
| `9M` aux points 8A et 2A | Deux indications `SRM / 9M`. |
| `120B` aux points 7 et 3 | Deux indications `AMRM / 120B`. |
| `7M` aux points 6 et 4 | Deux indications `MRM / 7M`. |
| `Tank` au point 5 | Indication `FUEL` centrale. |
| Gun `950`, Chaff `120`, Flare `60` | Quantités de munitions du canon et de contre-mesures sur AA. |

[Retour à l’index de la page](#mpcd-index)
