<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# Visor montado en el casco (HMD) del F-15C

El HMD presenta información de vuelo, aeronaves amigas, objetivos y armas en tu campo de visión. También puede orientar la antena radar o el buscador de un misil infrarrojo.

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 Encendido y autocomprobación</a>
  <a href="#datalink">2 Aeronaves amigas mediante enlace de datos</a>
  <a href="#sensor-cueing">3 Orientación de sensores</a>
  <a href="#weapon-range">4 Objetivo y alcance de las armas</a>
  <a href="#infrared-example">5 Demostración del buscador infrarrojo esclavizado al HMD</a>
</div>

Haz clic en una captura para verla en su resolución original.

<a id="power-on"></a>

## 1. Encendido y autocomprobación

Desliza hacia arriba el control táctil `BRT` del panel HMD para encenderlo.

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="Imagen 1: desliza hacia arriba el control BRT del HMD para encenderlo" loading="lazy" />
  </a>
  <figcaption>Imagen 1: desliza hacia arriba el control BRT del HMD para encenderlo</figcaption>
</figure>

Al encenderse, el HMD muestra la pantalla de autocomprobación `TESTING`. Al terminar, la pantalla normal presenta información de vuelo como rumbo, velocidad y altitud.

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="Imagen 2: autocomprobación del HMD durante el arranque" loading="lazy" />
  </a>
  <figcaption>Imagen 2: autocomprobación del HMD durante el arranque</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="Imagen 3: pantalla de vuelo normal del HMD tras la autocomprobación" loading="lazy" />
  </a>
  <figcaption>Imagen 3: pantalla de vuelo normal del HMD tras la autocomprobación</figcaption>
</figure>

<a id="datalink"></a>

## 2. Aeronaves amigas mediante enlace de datos

Con el enlace de datos activado, puedes ver las posiciones de las aeronaves amigas directamente en el HMD. La imagen 4 muestra los miembros de la formación en la página SIT; la imagen 5 muestra sus símbolos en el HMD para localizarlos mientras miras al exterior.

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="Imagen 4: información de enlace de datos de la formación en SIT" loading="lazy" />
  </a>
  <figcaption>Imagen 4: información de enlace de datos de la formación en SIT</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="Imagen 5: posiciones de aeronaves amigas en el HMD" loading="lazy" />
  </a>
  <figcaption>Imagen 5: posiciones de aeronaves amigas en el HMD</figcaption>
</figure>

Para los símbolos SIT y el enlace de datos, consulta [MPCD](/es/Docs/aircraft/f15c/mpcd.html).

<a id="sensor-cueing"></a>

## 3. Orientación de sensores

Una de las funciones principales del HMD es orientar sensores, como la antena radar o el buscador de un misil infrarrojo. Tanto el modo boresight (BST) como el boresight de largo alcance (LR BST) permiten orientar la antena radar con el HMD. La imagen 6 muestra su uso en modo boresight.

Dentro de los límites de movimiento de la antena radar, apuntar el HMD hacia un objetivo permite dirigir la antena hacia él para adquirirlo y fijarlo. El movimiento de la antena sigue limitado por su recorrido mecánico.

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="Imagen 6: orientación de la antena radar con el HMD en modo boresight" loading="lazy" />
  </a>
  <figcaption>Imagen 6: orientación de la antena radar con el HMD en modo boresight</figcaption>
</figure>

Para los modos radar y los controles de adquisición automática, consulta [Radar AN/APG-63 y VSD](/es/Docs/aircraft/f15c/radar.html).

<a id="weapon-range"></a>

## 4. Objetivo y alcance de las armas

El HMD también incluye información del objetivo y del alcance de las armas. La imagen 7 muestra un recuadro de objetivo y una escala de distancia, que el piloto puede leer mientras mira fuera del HUD.

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="Imagen 7: información del objetivo y del alcance de las armas en el HMD" loading="lazy" />
  </a>
  <figcaption>Imagen 7: información del objetivo y del alcance de las armas en el HMD</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. Demostración del buscador infrarrojo esclavizado al HMD

Para ver cómo orientar el buscador de un misil infrarrojo con el HMD, mira la [demostración del buscador infrarrojo esclavizado al HMD (desde el segundo 7)](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s).
