<script setup>
import rwrSearchImage from '/assets/F-15C/RWR/search-new-signal.png'
import rwrLockImage from '/assets/F-15C/RWR/lock-priority.png'
import rwrThreatImage from '/assets/F-15C/RWR/threat-levels.png'
</script>

# Systèmes défensifs du F-15C

Les systèmes défensifs du F-15C associent brouillage électronique actif, alerte radar passive et leurres électromagnétiques et infrarouges. Le pilote doit comprendre les menaces affichées, décider s’il faut brouiller et utiliser les contre-mesures adaptées pendant ses manœuvres.

<a id="rwr"></a>

## Système de guerre électronique tactique (TEWS)

Le TEWS utilise le récepteur d’alerte radar AN/ALR-56C pour détecter les émissions radar des avions, navires et systèmes terrestres. Ce récepteur est passif : il ne révèle donc pas le F-15C par une émission.

L’écran TEWS est centré sur le symbole de votre avion. La position angulaire d’un signal indique son relèvement relatif. **Sa distance au centre représente le niveau de menace, pas la distance réelle.**

<div class="term-cloud tac-editor-index">
  <a href="#rwr-search">1 Radars de recherche et nouveaux signaux</a>
  <a href="#rwr-lock">2 Verrouillage et menace prioritaire</a>
  <a href="#rwr-threat-levels">3 Trois niveaux de menace</a>
  <a href="#rwr-audio">4 Alertes sonores</a>
</div>

Cliquez sur une capture ci-dessous pour l’afficher dans sa résolution d’origine.

<a id="rwr-search"></a>

### 1. Radars de recherche et nouveaux signaux

<a :href="rwrSearchImage" target="_blank" rel="noopener">
  <img :src="rwrSearchImage" alt="TEWS image 1 : signaux SS et SD de radars de recherche et demi-cercle au-dessus d’un nouveau signal" loading="lazy" />
</a>

| Symbole de l’image 1 | Signification |
| --- | --- |
| `SS` | Radar de recherche. |
| `SD` | Radar de recherche du système de missiles sol-air SA-11 Buk. |
| Demi-cercle au-dessus d’un symbole | Signal nouvellement détecté. À droite, le `SD` surmonté d’un demi-cercle est un nouveau signal de radar de recherche. |

Le demi-cercle indique un nouveau signal ; un cercle complet indique le verrouillage décrit ci-dessous.

<a id="rwr-lock"></a>

### 2. Verrouillage et menace prioritaire

<a :href="rwrLockImage" target="_blank" rel="noopener">
  <img :src="rwrLockImage" alt="TEWS image 2 : deux signaux de radars de conduite de tir SA-11 entourés d’un cercle, celui de droite portant aussi un losange" loading="lazy" />
</a>

| Symbole de l’image 2 | Signification |
| --- | --- |
| `11` | Radar de conduite de tir du système de missiles sol-air SA-11 Buk. |
| Cercle complet autour d’un signal | Ce radar vous verrouille. |
| Losange | Cible évaluée par le système comme la menace prioritaire. |

Les deux `11` sont entourés d’un cercle : les deux systèmes ont verrouillé votre avion. Le `11` à droite porte aussi un losange, car le système le considère comme la menace la plus importante à cet instant.

<a id="rwr-threat-levels"></a>

### 3. Trois niveaux de menace

<a :href="rwrThreatImage" target="_blank" rel="noopener">
  <img :src="rwrThreatImage" alt="TEWS image 3 : menaces verrouillées dans la zone intérieure, nouveau 11 non verrouillé à gauche dans la zone intermédiaire, radars de recherche à l’extérieur" loading="lazy" />
</a>

Le TEWS répartit les signaux dans trois zones radiales selon le niveau de menace, du centre vers l’extérieur :

| Zone d’affichage | Niveau de menace | Exemples |
| --- | --- | --- |
| Intérieure | Élevé | Radars vous verrouillant, missiles et autres menaces prioritaires. |
| Intermédiaire | Moyen | Radars de conduite de tir détectés qui ne vous ont pas verrouillé. |
| Extérieure | Faible | Signaux les moins menaçants, comme les radars de recherche de cet exemple. |

Le nouveau `11` à gauche de l’image 3 est surmonté d’un demi-cercle, signe d’un nouveau signal. Ce radar de conduite de tir ne vous a pas encore verrouillé : il est donc classé comme menace moyenne et placé dans la zone intermédiaire.

**Un symbole plus proche du centre indique une menace plus élevée, pas un émetteur physiquement plus proche.** Examinez ensemble le relèvement, le type d’émetteur et les marques de verrouillage pour évaluer la menace.

<a id="rwr-audio"></a>

### 4. Alertes sonores

Le TEWS utilise des sons distincts pour le balayage, les nouveaux signaux, le verrouillage et les tirs de missiles :

| Événement | Signal sonore | Affichage associé |
| --- | --- | --- |
| Un radar balaie votre avion | Une tonalité de balayage unique. | Le signal radar correspondant. |
| Un nouveau signal apparaît | Une tonalité spécifique, légèrement plus aiguë, répétée 3 fois. | Un demi-cercle apparaît au-dessus du signal. |
| Un radar de conduite de tir vous verrouille | Une tonalité de balayage répétée en continu. | Un cercle complet apparaît autour du signal. |
| Un missile à guidage radar est tiré sur votre avion | 4 tonalités d’alerte de tir rapides et aiguës. | Le cercle du signal correspondant clignote simultanément. |

## Symboles TEWS courants

### Radars aéroportés

| Symbole | Menace |
| --- | --- |
| `23` | MiG-23 |
| `29` | MiG-29 ou Su-27/33 |
| `31` | MiG-31 |
| `30` | Su-30 |
| `14` | F-14 |
| `15` | F-15 |
| `16` | F-16 |
| `18` | F/A-18 |
| `50` | A-50 de veille aérienne (AWACS) |
| `E2` / `E3` | E-2C ou E-3C de veille aérienne (AWACS) |

### Radars terrestres et navals

| Symbole | Menace |
| --- | --- |
| `10` / `CS` / `BB` | Radars de recherche et d’engagement de la famille S-300PS |
| `SD` / `11` | Systèmes Buk / SA-11 |
| `6` | Kub / SA-6 |
| `8` | Osa / SA-8 |
| `13` | Strela-10 / SA-13 |
| `15` | Tor / SA-15 |
| `S6` | 2S6 Tunguska |
| `23` | ZSU-23-4 Shilka |
| `P` | Radar Patriot |
| `H` / `HA` | Radars du système Hawk |

## Leurres électromagnétiques et infrarouges

Les leurres électromagnétiques servent contre les menaces à guidage radar, et les leurres infrarouges contre les menaces à guidage infrarouge. Les indicateurs du cockpit clignotent pendant le largage et signalent les faibles quantités restantes.

Leur emploi défensif est plus efficace lorsqu’il est associé à des manœuvres :

1. Virez pour compliquer la trajectoire d’interception anticipée du missile.
2. Utilisez des leurres électromagnétiques contre les missiles à guidage radar en exécutant un beam ou un notch.
3. Utilisez des leurres infrarouges contre les missiles infrarouges présumés en modifiant votre aspect et votre signature thermique.
4. Évitez de poursuivre un vol rectiligne prévisible après le largage.
5. Réévaluez le TEWS après la première manœuvre défensive ; ne supposez pas que la menace est neutralisée.
