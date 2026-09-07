# F-15C Eagle : avion de supériorité aérienne

![F-15C Header](/assets/F-15C/header.jpg)

Ce chapitre présente les systèmes du F-15C actuellement implémentés dans Red Flag Sim : commandes, instruments de cabine, radar, armes et contre-mesures. Il sert d'aperçu de la simulation, pas d'un manuel de maintenance réel.

## Physique de vol et états de pilotage

La conduite de vol dépend de plusieurs paramètres combinés (IAS, TAS, altitude, assiette, AoA, facteur de charge, carburant). Le HUD donne la référence principale, les instruments servent au contrôle croisé.

Les unités diffèrent entre elles : l'AoA affichée n'est pas un angle géométrique classique, et IAS/Mach/G n'ont pas la même signification.

Références utiles : [Instruments de cabine](/fr/Docs/aircraft/f15c/cockpit-instruments.html), [Opération HUD](/fr/Docs/aircraft/f15c/hud-operation.html), [Touch UI](/fr/Docs/aircraft/f15c/touch-ui.html).

## Radar et informations de cible

AN/APG-63 affiche les contacts sur le VSD (Vertical Situation Display). Les modes utilisés dans cette version sont LRS, TWS, STT et acquisition en courte portée.

LRS sert à la recherche, TWS conserve les pistes pendant le balayage, STT traite une seule cible. La distance affichée n'assure pas à elle seule la couverture en altitude.

Les traces radar, pistes et verrouillages STT ne sont pas le même état. Voir [Radar AN/APG-63 et VSD](/fr/Docs/aircraft/f15c/radar.html).

## Armes et affichage

Le F-15C gère le canon, AIM-9, AIM-7 et AIM-120. Les symboles peuvent être partagés, mais les conditions de tir varient selon l'arme et le mode.

| Arme | Point d'application |
| --- | --- |
| Canon | Dépendent des données de distance disponibles ; piper, GDS et indication BATR selon la source. |
| AIM-9 | Guidage tête chercheuse avec logique de pré-désignation selon le mode de verrouillage. |
| AIM-7 | Le lancement exige STT dans l'implémentation actuelle, avec maintien d'illumination après tir. |
| AIM-120 | Utilise les conditions radar de mise à feu et peut passer en VISUAL sans PDT.

ASE, point de virage, DLZ et prévisions de temps de vol sont liés à la géométrie de tir et à la validité des données.

Voir aussi : [Opération HUD](/fr/Docs/aircraft/f15c/hud-operation.html) et [Radar AN/APG-63 et VSD](/fr/Docs/aircraft/f15c/radar.html).

## Défense électronique

TEWS/RWR affiche les menaces radar et les environnements de perturbation. La distance des symboles RWR n'est pas la distance réelle à la cible.

Consultez [Systèmes défensifs](/fr/Docs/aircraft/f15c/defensive-systems.html).

## Ordre de lecture recommandé

Pour une prise en main correcte :

1. [Touch UI](/fr/Docs/aircraft/f15c/touch-ui.html)
2. [Instruments de cabine](/fr/Docs/aircraft/f15c/cockpit-instruments.html)
3. [Opération HUD](/fr/Docs/aircraft/f15c/hud-operation.html)
4. [Radar AN/APG-63 et VSD](/fr/Docs/aircraft/f15c/radar.html)
5. [Systèmes défensifs](/fr/Docs/aircraft/f15c/defensive-systems.html)

Voir l'annexe des abréviations : [Annexe : abréviations](/fr/Docs/aircraft/f15c/appendix.html).

## Feuille de route

Non encore implémentées :

1. Démarrage à froid (vol à partir d'un avion hors tension)
2. Services au sol (ravitaillement, réarmement, maintenance, alimentation externe)
3. Séquence complète d'éjection
4. Communication radio vocale interactive (wingmen/AWACS/GCI/ATC/sol)
