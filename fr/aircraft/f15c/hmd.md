<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# Affichage de casque (HMD) du F-15C

Le HMD présente les informations de vol, les avions alliés, les cibles et les armes dans votre champ de vision. Il peut également orienter l’antenne radar ou l’autodirecteur d’un missile infrarouge.

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 Mise sous tension et autotest</a>
  <a href="#datalink">2 Affichage des alliés par liaison de données</a>
  <a href="#sensor-cueing">3 Orientation des capteurs</a>
  <a href="#weapon-range">4 Cible et portée des armes</a>
  <a href="#infrared-example">5 Démonstration de l’autodirecteur infrarouge asservi au HMD</a>
</div>

Cliquez sur une capture pour l’afficher dans sa résolution d’origine.

<a id="power-on"></a>

## 1. Mise sous tension et autotest

Faites glisser vers le haut la commande tactile `BRT` du panneau HMD pour allumer le HMD.

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="Image 1 : faites glisser la commande BRT du HMD vers le haut pour l’allumer" loading="lazy" />
  </a>
  <figcaption>Image 1 : faites glisser la commande BRT du HMD vers le haut pour l’allumer</figcaption>
</figure>

À l’allumage, le HMD affiche l’écran d’autotest `TESTING`. Une fois le test terminé, l’affichage normal présente notamment le cap, la vitesse et l’altitude.

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="Image 2 : autotest du HMD au démarrage" loading="lazy" />
  </a>
  <figcaption>Image 2 : autotest du HMD au démarrage</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="Image 3 : affichage de vol normal après l’autotest" loading="lazy" />
  </a>
  <figcaption>Image 3 : affichage de vol normal après l’autotest</figcaption>
</figure>

<a id="datalink"></a>

## 2. Affichage des alliés par liaison de données

Lorsque la liaison de données est activée, les positions des avions alliés apparaissent directement dans le HMD. L’image 4 montre les membres de la patrouille sur la page SIT ; l’image 5 montre leurs symboles dans le HMD, pour repérer les alliés tout en regardant à l’extérieur.

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="Image 4 : informations de liaison de données de la patrouille sur SIT" loading="lazy" />
  </a>
  <figcaption>Image 4 : informations de liaison de données de la patrouille sur SIT</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="Image 5 : positions des avions alliés dans le HMD" loading="lazy" />
  </a>
  <figcaption>Image 5 : positions des avions alliés dans le HMD</figcaption>
</figure>

Pour les symboles SIT et la liaison de données, consultez [MPCD](/fr/Docs/aircraft/f15c/mpcd.html).

<a id="sensor-cueing"></a>

## 3. Orientation des capteurs

L’une des fonctions principales du HMD consiste à orienter les capteurs, notamment l’antenne radar ou l’autodirecteur d’un missile infrarouge. Les modes boresight (BST) et boresight longue portée (LR BST) permettent tous deux d’orienter l’antenne radar avec le HMD. L’image 6 illustre cette utilisation en mode boresight.

Dans les limites de débattement de l’antenne radar, regarder une cible avec le HMD permet de diriger l’antenne vers elle pour l’acquérir et la verrouiller. Le mouvement de l’antenne reste limité par son débattement mécanique.

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="Image 6 : orientation de l’antenne radar par le HMD en mode boresight" loading="lazy" />
  </a>
  <figcaption>Image 6 : orientation de l’antenne radar par le HMD en mode boresight</figcaption>
</figure>

Pour les modes radar et les commandes d’acquisition automatique, consultez [Radar AN/APG-63 et VSD](/fr/Docs/aircraft/f15c/radar.html).

<a id="weapon-range"></a>

## 4. Cible et portée des armes

Le HMD affiche également les informations de cible et de portée des armes. L’image 7 présente un cadre de cible et une échelle de distance, lisibles même lorsque le pilote regarde hors du HUD.

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="Image 7 : informations de cible et de portée des armes dans le HMD" loading="lazy" />
  </a>
  <figcaption>Image 7 : informations de cible et de portée des armes dans le HMD</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. Démonstration de l’autodirecteur infrarouge asservi au HMD

Pour un exemple d’orientation d’un autodirecteur de missile infrarouge avec le HMD, regardez la [démonstration de l’autodirecteur infrarouge asservi au HMD (à partir de 7 secondes)](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s).
