<a id="tac-editor-top"></a>

# Éditeur Tac

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Le Tac Editor permet de créer des missions, d’organiser des patrouilles, de placer des unités et de planifier des itinéraires. Ce guide comporte sept parties, de la vue d’ensemble numérotée aux instructions détaillées d’édition.

**Structure du guide**

- [Partie 1 : Vue d’ensemble de l’interface](#part-1)
- [Partie 2 : Package et Flight](#part-2)
- [Partie 3 : Configuration des avions](#part-3)
- [Partie 4 : Plans de vol](#part-4)
- [Partie 5 : Objets de la carte](#part-5)
- [Partie 6 : Paramètres de mission](#part-6)
- [Partie 7 : Sauvegarde et vol d’essai](#part-7)

<a id="part-1"></a>

## Partie 1 : Vue d’ensemble de l’interface

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="Éditeur Tac avec repères numérotés de 1 à 11">
</a>

Ouvrez l’image pour l’afficher en pleine résolution. Sélectionnez un numéro ci-dessous pour accéder à son explication.

<a id="ui-terms-top"></a>

### Index de l’interface

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight — formation</a>
  <a href="#item-2">2 Bullseye — point de référence</a>
  <a href="#item-3">3 Package — groupe de formations</a>
  <a href="#item-4">4 Unités IA supplémentaires</a>
  <a href="#item-5">5 Inspector — panneau d’information</a>
  <a href="#item-6">6 Échelle</a>
  <a href="#item-7">7 Barre d’outils de la carte</a>
  <a href="#item-8">8 Route du plan de vol</a>
  <a href="#item-9">9 Heure locale et heure Zulu</a>
  <a href="#item-10">10 Geo Fence — zones et limites</a>
  <a href="#item-11">11 Barre d’outils de l’éditeur</a>
</div>

<a id="item-1"></a>

### 1. Flight — formation

Un **Flight** est une formation de **4 avions au maximum**. Chaque carte en haut représente une formation ; les symboles d’avion indiquent ses membres. Sélectionnez une carte pour consulter la formation et configurer ses avions.

[Consulter Flight](#part-2-flight)

[Retour à l’index](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye — point de référence

**Bullseye** est un point de référence géographique commun pour communiquer des directions et des distances. Les cercles concentriques jaunes indiquent sa position sur la carte.

Les anneaux de distance de la carte sont centrés sur Bullseye. Les rayons de deux anneaux consécutifs diffèrent de **20 milles nautiques (20 NM)**.

[Retour à l’index](#ui-terms-top)

<a id="item-3"></a>

### 3. Package — groupe de formations

Un **Package** regroupe des formations du même camp. Les bandes bleues et rouges en haut contiennent les Flights de leurs groupes respectifs. Sélectionnez un Package pour consulter et gérer ses formations.

[Consulter Package](#part-2-package)

[Retour à l’index](#ui-terms-top)

<a id="item-4"></a>

### 4. Unités IA supplémentaires

Il s’agit d’unités supplémentaires contrôlées par l’IA, en dehors de la structure Package/Flight. L’image montre un avion indépendant et une unité de missiles sol-air. Gérez-les depuis **NP Unit** dans la barre de l’éditeur.

[Voir les détails: NP Unit](#part-5-np-unit-list)

[Retour à l’index](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector — panneau d’information

Le panneau de droite affiche les informations et les commandes de l’objet sélectionné. L’image présente les informations générales de la mission : nom, scène et difficulté.

La sélection de **Scenery** n’est pas disponible actuellement. Il sera possible de choisir la région de la carte ici dans une future version, lorsque plusieurs régions seront prises en charge.

**Touchez deux fois une zone vide de la carte** pour revenir aux informations générales de la mission dans l’Inspector.

**Inspector par type d’objet**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[Retour à l’index](#ui-terms-top)

<a id="item-6"></a>

### 6. Échelle

La barre d’échelle indique la distance correspondant à sa longueur au niveau de zoom actuel. **NM** signifie milles nautiques ; l’exemple affiche **16.66 NM**. Utilisez-la pour estimer les distances sur la carte.

[Retour à l’index](#ui-terms-top)

<a id="item-7"></a>

### 7. Barre d’outils de la carte

La barre en bas à gauche comprend quatre boutons, de gauche à droite :

- **Déplacer** (quatre flèches) : maintenez ce bouton pour déplacer un élément sélectionné sur la carte.
- **Zoom avant** (loupe avec +) : agrandir la carte.
- **Zoom arrière** (loupe avec −) : afficher une zone plus large.
- **Home** (maison) : fermer l’éditeur et revenir à l’écran principal.

::: tip Déplacer un élément de la carte
1. Sélectionnez l’unité ou l’élément à déplacer.
2. **Maintenez le bouton Déplacer avec la main gauche**.
3. Tout en le maintenant, **faites glisser la main droite sur la carte** pour repositionner l’élément sélectionné.
:::

[Retour à l’index](#ui-terms-top)

<a id="item-8"></a>

### 8. Route du plan de vol

Les points de navigation reliés montrent la route prévue d’un Flight. Sélectionnez la formation pour consulter son plan de vol et modifier ses points. Cette route appartient au Flight concerné et sert à sa navigation.

[Voir les détails](#part-4)

[Retour à l’index](#ui-terms-top)

<a id="item-9"></a>

### 9. Heure locale et heure Zulu

L’affichage inférieur présente l’heure de la mission sous deux formes : d’abord l’**heure locale**, puis l’**heure Zulu (UTC)** entre crochets avec le suffixe **Z**. Dans l’exemple, **16:00:00** et **23:00:00 Z** désignent le même instant.

[Retour à l’index](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence — zones et limites

Un **Geo Fence** délimite une zone tactique ou une frontière sur la carte. Il peut être circulaire ou polygonal ; l’image montre un cercle et un polygone portant la mention **MEZ**. Gérez ces zones depuis **Geo Fence** dans la barre de l’éditeur.

[Voir les détails: Geo Fence](#part-5-geofence-list)

[Retour à l’index](#ui-terms-top)

<a id="item-11"></a>

### 11. Barre d’outils de l’éditeur

Ces six boutons figurent dans l’Inspector des informations générales de la mission. Ils sont expliqués dans l’ordre à l’écran : rangée supérieure de gauche à droite, puis rangée inférieure.

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time — météo et heure</a>
  <a href="#item-11-2">11.2 File — fichiers</a>
  <a href="#item-11-3">11.3 Config — configuration</a>
  <a href="#item-11-4">11.4 Geo Fence — zones et limites</a>
  <a href="#item-11-5">11.5 NP Unit — unités IA</a>
  <a href="#item-11-6">11.6 Go Fly — commencer le vol</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time — météo et heure

Ouvre les réglages de météo et d’heure de la mission pour définir les conditions et le moment de la journée.

[Retour à l’index](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File — fichiers

Ouvre les opérations sur les fichiers de mission : créer une mission, enregistrer la mission actuelle, charger une mission enregistrée ou la supprimer.

[Retour à l’index](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config — configuration

Ouvre la configuration et les restrictions de la mission. Définissez si les modifications d’emport, de livrée, de météo et d’heure ainsi que le gel du temps sont autorisés. Vous pouvez aussi définir les restrictions d’avions et d’emport.

[Retour à l’index](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence — zones et limites

Ouvre la liste des zones pour ajouter, sélectionner et modifier des zones tactiques et des limites.

[Voir les détails: Geo Fence](#part-5-geofence-list)

[Retour à l’index](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit — unités IA

Ouvre la liste des unités IA pour ajouter et gérer des unités en dehors des Packages. Sélectionnez une unité pour modifier ses détails dans l’Inspector.

[Voir les détails: NP Unit](#part-5-np-unit-list)

[Retour à l’index](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly — commencer le vol

Lance la mission avec la configuration actuelle de l’éditeur. Elle doit comporter exactement un avion contrôlé par le joueur, dont le module doit être accessible. Si le lancement échoue, corrigez la configuration selon le message affiché.

[Retour à l’index](#ui-terms-top)

[Retour en haut](#tac-editor-top)

<a id="part-2"></a>

## Partie 2 : Package et Flight

Organisez les patrouilles dans un Package, puis ouvrez chaque Flight pour configurer ses membres et sa tâche. Les panneaux ci-dessous suivent cette hiérarchie.

Les avions suivent la hiérarchie **Mission → Package → Flight → Slot (un avion)**. Chaque Flight appartient à un Package et comprend au maximum **4 avions**.

<a id="part-2-package"></a>

### Package (groupe de mission)

Sélectionnez un Package en haut de la carte pour voir ses patrouilles et ses horaires. L’exemple se nomme blue1.

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>Nom et liste des Flight</strong>: Le nom du groupe apparaît en haut ; touchez-le pour renommer le groupe. Flight1, Flight2 et Flight3 figurent dessous. Les numéros identifient les avions de chaque patrouille.
- <strong>＋</strong>: Ajouter un Flight. Sélectionnez une carte existante pour ouvrir son Flight Inspector.
- <strong>Take-off Time</strong>: Heure de décollage du groupe ; l’exemple indique 23:03.
- <strong>Time on Target (TOT)</strong>: Heure d’arrivée du groupe sur l’objectif ; l’exemple indique 23:33.

Package et Flight disposent chacun de champs horaires. Leur synchronisation et la référence horaire seront expliquées ultérieurement.

</TacInspectorPanel>

[Revenir à la vue d’ensemble](#item-3)

<a id="part-2-flight"></a>

### Flight (patrouille)

Sélectionnez un Flight dans le Package pour afficher ses membres et ses réglages. L’exemple montre Flight1 avec 4 avions.

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>Schéma des membres</strong>: Affiche les avions et leurs numéros. Sélectionnez un membre pour ouvrir son Slot Inspector.
- <strong>Airbase</strong>: Base de la patrouille ; ici NAS_Fallon.
- <strong>Mission Role</strong>: Rôle de la patrouille ; ici CAP.
- <strong>Take-off Time / Time on Target</strong>: Heures de décollage et d’arrivée sur l’objectif ; ici 23:03 et 23:12.
- <strong>Station Time</strong>: Durée, en minutes, de la patrouille entre deux points de navigation de type objectif lors d’une tâche de patrouille.
- <strong>Steer Points</strong>: Ouvrir l’édition de l’itinéraire. Les routes et points de navigation sont détaillés dans la partie 4.
- <strong>Rebuild</strong>: Recalculer le Time on Target (TOT, heure d’arrivée sur l’objectif) du Flight.
- <strong>Delete</strong>: Situé sous Rebuild. Supprime toute la définition du Flight, et non un seul Slot d’avion.

La capture actuelle ne montre qu’une partie de Rebuild ; le bouton Delete situé en dessous n’est pas visible.

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### Exemple de patrouille : ravitailleurs et avions de guet aérien

Pour faire patrouiller un ravitailleur ou un avion de guet aérien à un endroit donné :

1. Placez deux points de navigation à l’endroit prévu pour la patrouille et définissez-les tous les deux comme <strong>type objectif</strong>.
2. Dans le Flight Inspector, réglez <strong>Station Time</strong> sur la durée de patrouille souhaitée en minutes.
3. L’avion patrouillera entre ces deux points de type objectif pendant la durée définie par Station Time.

[Revenir à la vue d’ensemble](#item-1)

[Voir les détails: Slot](#part-3-slot) · [Steer Points](#part-4)

[Retour en haut](#tac-editor-top)

<a id="part-3"></a>

## Partie 3 : Configuration des avions

<a id="part-3-slot"></a>

### Slot (avion individuel)

Un Slot représente un avion d’un Flight. Sélectionnez un avion dans le schéma des membres pour ouvrir son Inspector.

<TacInspectorPanel panel="slot" alt="Slot (avion individuel) Inspector" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>Type d’avion et numéro</strong>: En haut figure le F-15C numéro 1. La liste déroulante située dessous permet de choisir le type d’avion.
- <strong>Loadout / Livery</strong>: Ouvrir les réglages d’armement et de livrée.
- <strong>Spawn Type</strong>: Choisir Airborne (en vol) ou Airbase (sur une base). L’image montre Airbase sélectionné.
- <strong>Spawn Point ID</strong>: Choisir le point d’apparition ; l’exemple indique Auto.
- <strong>Initial State</strong>: Ouvrir les réglages de l’état initial de l’avion.
- <strong>Delete</strong>: Supprimer le Slot actuel, et non l’ensemble du Flight ou du Package.

L’image montre les réglages Airbase. Les sous-panneaux Airborne, Loadout / Livery et Initial State seront décrits avec les prochaines captures.

</TacInspectorPanel>

[Revenir à la vue d’ensemble](#item-1)

[Retour en haut](#tac-editor-top)

<a id="part-4"></a>

## Partie 4 : Plans de vol

Sélectionnez Steer Points dans le Flight Inspector pour modifier les points de navigation de la patrouille actuelle. L’image montre le point numéro 3.

[Voir les détails: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points (points de navigation)

<TacInspectorPanel panel="steerpoints" alt="Steer Points (points de navigation)" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>Flèches et numéro</strong>: Utilisez les flèches pour changer de point. Le centre indique le numéro sélectionné : 3 dans l’exemple.
- <strong>Type de point</strong>: Choisissez le type dans la liste déroulante. L’image montre Target (type objectif).
- <strong>Elev (MSL)</strong>: Altitude prévue au point, par rapport au niveau moyen de la mer (MSL), en pieds (FT). L’exemple indique 15000 FT, et non une hauteur au-dessus du sol.
- <strong>KCAS</strong>: Vitesse conventionnelle prévue au point, en nœuds. L’exemple indique 529 KCAS, et non une vitesse sol ou une vitesse vraie.
- <strong>Time(Z) Over Steerpoint</strong>: Heure prévue de passage au point en Zulu (UTC). À gauche les heures, à droite les minutes : ici 23:15 Z. Il ne s’agit pas d’une durée de vol.
- <strong>New</strong>: Ajouter un point de navigation.
- <strong>Delete</strong>: Supprimer le point sélectionné, et non tout le Flight.

</TacInspectorPanel>

Pour une patrouille de ravitailleur ou de guet aérien, placez deux points de type Target à l’endroit prévu et réglez la durée entre eux avec Station Time du Flight. Pour recalculer le TOT du Flight, sélectionnez Rebuild dans le Flight Inspector.

[Exemple de réglage d’une patrouille](#flight-station-time-example) · [Déplacer les objets de la carte](#item-7)

[Retour en haut](#tac-editor-top)

<a id="part-5"></a>

## Partie 5 : Objets de la carte

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Liste Geo Fence</a>
  <a href="#part-5-geofence-circle">Zone circulaire (Circle)</a>
  <a href="#part-5-geofence-polygon">Zone polygonale (Polygon)</a>
  <a href="#part-5-np-unit-list">Liste NP Unit</a>
</div>

### Bullseye

**Bullseye** est un point de référence géographique commun pour communiquer des directions et des distances. Les cercles concentriques jaunes indiquent sa position sur la carte.

Les anneaux de distance de la carte sont centrés sur Bullseye. Les rayons de deux anneaux consécutifs diffèrent de **20 milles nautiques (20 NM)**.

### Geo Fence

Ouvrez Geo Fence depuis le résumé de mission, puis sélectionnez une zone. Les cercles et les polygones ont des commandes géométriques différentes.

<a id="part-5-geofence-list"></a>

#### Liste Geo Fence

<TacInspectorPanel panel="geofence-list" alt="Liste Geo Fence" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>＋</strong>: Ajouter un Geo Fence.
- <strong>Entrées de la liste</strong>: L’exemple contient un cercle nommé 11 et un polygone nommé MEZ. Les icônes distinguent leurs formes.
- <strong>Sélection d’une entrée</strong>: Ouvrir l’Inspector de la zone pour modifier son rôle, sa forme, son camp et sa géométrie.

</TacInspectorPanel>

[Revenir à la vue d’ensemble](#item-10)

<a id="part-5-geofence-circle"></a>

#### Zone circulaire (Circle)

<TacInspectorPanel panel="geofence-circle" alt="Zone circulaire (Circle) Inspector" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>Nom</strong>: 11, en haut, est le nom de la zone.
- <strong>Geo Fence Role / Shape</strong>: Le rôle est MEZ et la forme Circle. Nom, rôle et forme sont des informations distinctes.
- <strong>Coalition</strong>: Camp de la zone ; ici Red.
- <strong>Threat Radius</strong>: Rayon de la zone circulaire. La valeur est 22.6 ; aucune unité n’est indiquée dans la capture.
- <strong>Delete</strong>: Supprimer la zone actuelle.

</TacInspectorPanel>

[Revenir à la vue d’ensemble](#item-10)

<a id="part-5-geofence-polygon"></a>

#### Zone polygonale (Polygon)

<TacInspectorPanel panel="geofence-polygon" alt="Zone polygonale (Polygon) Inspector" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>Nom / Geo Fence Role</strong>: Le nom est MEZ, mais le rôle sélectionné est ROZ. Ne confondez pas le nom avec le rôle.
- <strong>Shape / Coalition</strong>: L’exemple indique Polygon et Red.
- <strong>Flèches et numéro</strong>: Choisir le sommet à modifier. Le numéro affiché est 0.
- <strong>New Vertice</strong>: Ajouter un sommet. Le libellé reprend celui du bouton dans le jeu.
- <strong>Rotate</strong>: Faire pivoter le polygone. Le pas et les règles d’angle seront expliqués ultérieurement.
- <strong>Delete Vertex / Delete</strong>: Delete Vertex supprime le sommet sélectionné ; le bouton Delete du bas supprime toute la zone.

Pour déplacer un objet sur la carte, utilisez le geste de la partie 1 : sélectionnez-le, maintenez Move de la main gauche et faites glisser de la droite.

</TacInspectorPanel>

[Revenir à la vue d’ensemble](#item-10)

[Voir les détails](#item-7)

<a id="part-5-np-unit-list"></a>

### Liste NP Unit

NP Unit dans le résumé de mission ouvre la liste Units pour gérer les unités hors de la structure Package / Flight.

<TacInspectorPanel panel="np-unit-list" alt="Liste NP Unit" open-label="Ouvrir l’image en pleine résolution.">

**Champs et commandes**

- <strong>＋</strong>: Ajouter une unité non-joueur.
- <strong>Entrées de la liste</strong>: L’exemple montre 9K37 Buk np et F-15C np : une unité de missiles sol-air et un avion indépendant.
- <strong>Sélection d’une entrée</strong>: Ouvrir l’Inspector de cette unité. Ses propriétés individuelles seront décrites avec les captures correspondantes.

</TacInspectorPanel>

[Revenir à la vue d’ensemble](#item-4)

[Retour en haut](#tac-editor-top)

<a id="part-6"></a>

## Partie 6 : Paramètres de mission

Des instructions détaillées avec captures d’écran seront ajoutées à cette partie.

- Informations de mission, région, météo et heure
- Autorisations et restrictions

[Retour en haut](#tac-editor-top)

<a id="part-7"></a>

## Partie 7 : Sauvegarde et vol d’essai

Des instructions détaillées avec captures d’écran seront ajoutées à cette partie.

- Ordre d’édition recommandé
- File : sauvegarder et charger
- Go Fly et vérifications avant le vol

[Retour en haut](#tac-editor-top)
