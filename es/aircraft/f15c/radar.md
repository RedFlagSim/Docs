---
title: Radar AN/APG-63 y VSD
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

## Búsqueda de largo alcance (LRS)

LRS busca blancos aéreos lejanos antes del bloqueo e indica su marcación y distancia respecto al avión propio. Normalmente se usa una escala VSD de **40–80 millas náuticas**. Esta es la distancia representada, no una garantía de detección de cualquier blanco a ese alcance.

Ajuste la elevación y cobertura azimutal según la zona probable del blanco. Encierre un eco con la [puerta de adquisición](#lrs-item-9) e inicie la adquisición manual; si tiene éxito, entrará en STT. LRS localiza blancos y los modos de seguimiento posteriores los siguen con precisión.

El eje horizontal representa azimut; el vertical, distancia creciente hacia arriba.

Toque una vez **AA (adquisición automática)** en la interfaz táctil para pasar de espera a LRS. Otro toque vuelve a espera.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Búsqueda de largo alcance (LRS)">

Consulte las demás acciones en [Interfaz táctil: adquisición automática](/es/Docs/aircraft/f15c/touch-ui.html#item-28).

### Barras de exploración

La exploración LRS inicial usa **120° de azimut y 6 barras**.

Una barra es un barrido horizontal a una elevación determinada. Los barridos sucesivos a distintas elevaciones cubren un volumen de altitud; seis barras completan seis barridos. La separación entre barras depende del alcance de búsqueda y no es fija.

Cambie las barras en la **página MAIN** de [Interfaz táctil: 1. Panel de funciones](/es/Docs/aircraft/f15c/touch-ui.html#item-1).

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="Barras de exploración">
</a>

Pulse una imagen para verla a resolución original, o un número para saltar a su explicación.

<a id="lrs-index"></a>

### Símbolos numerados

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 Ecos radar</a>
  <a href="#lrs-item-2">2 Cobertura de altitud</a>
  <a href="#lrs-item-3">3 Indicador de elevación de antena</a>
  <a href="#lrs-item-4">4 Historial de ecos</a>
  <a href="#lrs-item-5">5 Barras y PRF</a>
  <a href="#lrs-item-6">6 Coordenadas Bullseye de la puerta</a>
  <a href="#lrs-item-7">7 Velocidad propia sobre el suelo</a>
  <a href="#lrs-item-8">8 Alcance máximo representado en VSD</a>
  <a href="#lrs-item-9">9 Puerta de adquisición</a>
  <a href="#lrs-item-10">10 Referencia de horizonte local</a>
  <a href="#lrs-item-11">11 Referencia Bullseye</a>
  <a href="#lrs-item-12">12 Punto de navegación 3</a>
  <a href="#lrs-item-13">13 Indicador de azimut de antena</a>
  <a href="#lrs-item-14">14 Límites de exploración en azimut</a>
  <a href="#lrs-item-15">15 Velocidad aerodinámica verdadera propia</a>
</div>

<a id="lrs-item-1"></a>

### 1. Ecos radar

Los bloques verdes cortos son ecos detectados. Su posición indica marcación y distancia, pero no implica bloqueo ni identifica amigo o enemigo por su forma.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-2"></a>

### 2. Cobertura de altitud

Los dos círculos y cifras de la izquierda indican techo y suelo de exploración a la distancia de la puerta, en miles de pies. `29` y `-2` equivalen aproximadamente a 29.000 y -2.000 pies. El valor negativo describe geometría de exploración, no un blanco subterráneo. Compruebe las cifras al cambiar distancia de la puerta o elevación.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-3"></a>

### 3. Indicador de elevación de antena

El indicador angular de la escala izquierda muestra la elevación de antena. Se lee junto con la cobertura del número 2; no es un marcador de altitud del blanco.

Sus seis divisiones abarcan de +60° a -60°. El centro es 0°; arriba es positivo y abajo negativo.

Controle la elevación con la **rueda ELE**. En pantalla táctil utilice el control mostrado y observe el indicador izquierdo y los límites de altitud.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="3. Indicador de elevación de antena">

Véase [Interfaz táctil: elevación de antena](/es/Docs/aircraft/f15c/touch-ui.html#item-25).

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-4"></a>

### 4. Historial de ecos

El historial conserva posiciones de barridos anteriores para mostrar movimiento. Distinga esas posiciones del eco actual: cada bloque no representa un blanco independiente.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-5"></a>

### 5. Barras y PRF

`6HI` es la lectura de barras y frecuencia de repetición de impulsos (PRF); `HI` indica PRF alta.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-6"></a>

### 6. Coordenadas Bullseye de la puerta

Esta lectura da la marcación y distancia de la [puerta (9)](#lrs-item-9) desde la referencia común Bullseye. `310-12` significa marcación 310° y 12 millas náuticas desde Bullseye.

En el futuro modo multijugador se podrán comunicar posiciones a los compañeros con estas coordenadas. Mueva la puerta a la posición que quiera comunicar y lea sus datos Bullseye.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-7"></a>

### 7. Velocidad propia sobre el suelo

`G 589` indica una velocidad sobre el suelo de 589 nudos.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-8"></a>

### 8. Alcance máximo representado en VSD

El `80` superior derecho indica una escala de 80 millas náuticas. No es la distancia de un blanco ni el alcance máximo de detección.

Mueva la [puerta](#lrs-item-9) más allá de los bordes para cambiar la escala:

- Más allá del borde superior: aumentar el alcance representado.
- Más allá del borde inferior: reducir el alcance representado.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-9"></a>

### 9. Puerta de adquisición

Dos líneas verticales forman la puerta, utilizada para seleccionar una posición o eco bruto. Su distancia también determina dónde se calcula la cobertura del número 2.

Muévala con **Cursor (control TDC)** a la derecha de la interfaz táctil. Al cruzar los bordes también ajusta [la escala de distancia](#lrs-item-8) y [la cobertura azimutal](#lrs-item-14).

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="9. Puerta de adquisición">

Véase [Interfaz táctil: Cursor](/es/Docs/aircraft/f15c/touch-ui.html#item-18).

Para adquirir manualmente:

1. Encierre un eco bruto con la puerta.
2. Toque dos veces Cursor, a la derecha, para iniciar la adquisición.
3. Si tiene éxito, el radar entra en **STT (seguimiento de un solo blanco)**.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-10"></a>

### 10. Referencia de horizonte local

La línea horizontal con extremos hacia abajo es el horizonte local. Centrada indica vuelo nivelado; su giro representa alabeo. Mantiene una referencia de actitud mientras observa el radar.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-11"></a>

### 11. Referencia Bullseye

Bullseye es la referencia común para comunicar marcaciones y distancias. Consulte las coordenadas de la puerta en el [número 6](#lrs-item-6).

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-12"></a>

### 12. Punto de navegación 3

La flecha señala el punto 3. El triángulo vacío muestra su posición y `3` su número.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-13"></a>

### 13. Indicador de azimut de antena

El indicador angular inferior muestra el azimut actual de antena, distinto de los límites circulares. Es la dirección de la antena, no el rumbo del blanco.

Se desplaza de lado a lado durante la exploración, reflejando la dirección de antena en tiempo real.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-14"></a>

### 14. Límites de exploración en azimut

Los círculos inferiores delimitan la anchura del barrido; la flecha señala el límite derecho. No representan dos aviones.

Mueva la [puerta](#lrs-item-9) más allá de los bordes laterales:

- Por la izquierda: estrechar el barrido.
- Por la derecha: ampliar el barrido.

La cobertura varía entre **10°** y **120°**. Se ajusta anchura azimutal, no la escala de distancia del número 8.

[Volver al índice numerado](#lrs-index)

<a id="lrs-item-15"></a>

### 15. Velocidad aerodinámica verdadera propia

`T 589` indica 589 nudos de velocidad verdadera respecto al aire. Es distinta de la velocidad sobre el suelo del número 7 aunque las cifras coincidan.

[Volver al índice numerado](#lrs-index)

## Seguimiento de un solo blanco (STT)

STT se concentra en un blanco y proporciona continuamente datos de posición, movimiento y solución de armas. Desde LRS, encierre un eco y toque dos veces Cursor; una adquisición correcta entra en STT. Véase [Puerta de adquisición](#lrs-item-9).

A diferencia de la búsqueda de área LRS, STT mantiene seguimiento concentrado para cañón y misiles. En este juego AIM-7 exige STT al lanzar e iluminación radar después. STT también admite AIM-120, pero sus requisitos de guiado son distintos.

STT activa la alerta de bloqueo radar enemiga. A corta distancia el blanco puede lanzar chaff o hacer notch para romper el seguimiento o perjudicar sus condiciones de lanzamiento. Vigile maniobras, seguimiento y DLZ.

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="Seguimiento de un solo blanco (STT)">
</a>

Figura 1: blanco fuera del alcance máximo y círculo ASE reducido.

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 Velocidad verdadera del blanco</a>
  <a href="#stt-item-2">2 Aspecto H/T y rumbo del blanco</a>
  <a href="#stt-item-3">3 Altitud del blanco</a>
  <a href="#stt-item-4">4 PDT — blanco designado principal</a>
  <a href="#stt-item-5">5 Punto de guiado</a>
  <a href="#stt-item-6">6 Círculo ASE</a>
  <a href="#stt-item-7">7 Velocidad de acercamiento</a>
  <a href="#stt-item-8">8 Indicador de distancia del blanco</a>
  <a href="#stt-item-9">9 Rmax — alcance máximo</a>
  <a href="#stt-item-10">10 Alcance máximo optimizado</a>
  <a href="#stt-item-11">11 Referencia RTR</a>
  <a href="#stt-item-12">12 Alcance mínimo</a>
  <a href="#stt-item-13">13 Tiempo del misil</a>
  <a href="#stt-item-14">14 Marcación y distancia del blanco</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="Seguimiento de un solo blanco (STT)">
</a>

Figura 2: el blanco entra en alcance máximo y ASE comienza a ampliarse.

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 Ángulo de aspecto del blanco</a>
  <a href="#stt-item-16">16 Círculo ASE ampliado</a>
  <a href="#stt-item-17">17 Distancia y acercamiento de la figura 2</a>
</div>

Pulse las imágenes para verlas a resolución original y los números para las explicaciones. En ambas está seleccionado **AIM-7**. Consulte LRS para cuadrícula, horizonte y puntos de navegación. El `40` de la figura 1 indica 40 millas náuticas; el `20` de la figura 2 indica 20.

<a id="stt-item-1"></a>

### 1. Velocidad verdadera del blanco

`397`, arriba a la izquierda, indica 397 nudos de velocidad verdadera del blanco, no propia. `577` en la figura 2 indica 577 nudos.

[Volver al índice numerado](#stt-index)

<a id="stt-item-2"></a>

### 2. Aspecto H/T y rumbo del blanco

`H` significa **HOT**: el blanco apunta su morro hacia usted, una situación amenazante si es hostil. `T` aparece cuando apunta en sentido contrario. Describe aspecto relativo, no identificación amigo/enemigo.

El `313` siguiente es el rumbo del blanco, 313°, no el propio. H/T indica orientación relativa y la cifra indica rumbo. Véanse ángulos izquierda/derecha en el [número 15](#stt-item-15).

[Volver al índice numerado](#stt-index)

<a id="stt-item-3"></a>

### 3. Altitud del blanco

`13-4`, a la izquierda, significa 13.400 pies MSL, sobre el nivel medio del mar.

[Volver al índice numerado](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT — blanco designado principal

La estrella de cinco puntas representa el PDT en el plano azimut–distancia. Su línea larga hacia delante indica la dirección de velocidad del blanco.

[Volver al índice numerado](#stt-index)

<a id="stt-item-5"></a>

### 5. Punto de guiado

El punto brillante es el punto de guiado. Al lanzar, encierre el punto con ASE (6) para reducir el giro exigido al misil y ahorrar energía. Funciona como el [punto de guiado HUD](/es/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2).

[Volver al índice numerado](#stt-index)

<a id="stt-item-6"></a>

### 6. Círculo ASE

ASE representa el error de dirección admisible. Las condiciones de lanzamiento empiezan a cumplirse solo cuando el círculo crece. Un punto dentro de un círculo pequeño no basta para indicar que se puede disparar.

Tras ampliarse, evalúe también punto de guiado, alcance y requisitos del misil. Véase [ASE en el HUD](/es/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1).

[Volver al índice numerado](#stt-index)

<a id="stt-item-7"></a>

### 7. Velocidad de acercamiento

`1006` indica acercamiento entre el avión propio y el blanco en nudos. Es la variación de distancia, no la velocidad propia del blanco.

[Volver al índice numerado](#stt-index)

<a id="stt-item-8"></a>

### 8. Indicador de distancia del blanco

El `>` derecho sitúa al blanco en la escala actual de `40` millas náuticas. `1006` es acercamiento, no distancia.

[Volver al índice numerado](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax — alcance máximo

La primera marca, la superior, es Rmax: alcance máximo calculado en las condiciones actuales.

[Volver al índice numerado](#stt-index)

<a id="stt-item-10"></a>

### 10. Alcance máximo optimizado

La segunda marca indica el alcance máximo optimizado.

[Volver al índice numerado](#stt-index)

<a id="stt-item-11"></a>

### 11. Referencia RTR

El extremo superior del rectángulo es RTR (Range Turn and Run), que considera un blanco que vira para huir, comúnmente llamado alcance sin escape. Indica condiciones favorables, no un impacto garantizado.

[Volver al índice numerado](#stt-index)

<a id="stt-item-12"></a>

### 12. Alcance mínimo

El extremo inferior es RMin. Compare la distancia del blanco con esta marca: acercarse no siempre mejora las condiciones.

Las marcas 9, 10, 11 y 12 forman la DLZ (zona dinámica de lanzamiento). Varía con altitud propia, separación vertical, dirección y velocidad del blanco, velocidad propia y otros factores.

Evalúe todo antes del tiro. Acérquese tanto como sea práctico manteniendo la seguridad propia y respetando el alcance mínimo.

[Volver al índice numerado](#stt-index)

<a id="stt-item-13"></a>

### 13. Tiempo del misil

`53SEC` estima un impacto 53 segundos después de lanzar ahora. Se calcula según la geometría actual; no es una cuenta atrás de un misil ya disparado.

La estimación supone que el blanco conserva su movimiento sin virar. Cambios de rumbo o velocidad alteran el tiempo real de impacto.

[Volver al índice numerado](#stt-index)

<a id="stt-item-14"></a>

### 14. Marcación y distancia del blanco

`129-21`, abajo a la derecha, significa 129° y 21 millas náuticas respecto al avión propio. No son coordenadas Bullseye.

[Volver al índice numerado](#stt-index)

<a id="stt-item-15"></a>

### 15. Ángulo de aspecto del blanco

`13L` en la figura 2 indica morro orientado 130° a la izquierda; `13R` indicaría 130° a la derecha. La cifra está en decenas de grados y `L`/`R` indican izquierda/derecha.

Es aspecto relativo, no rumbo 130°. El `351` siguiente sí indica rumbo 351°. Léalo junto con [H/T y rumbo (2)](#stt-item-2).

[Volver al índice numerado](#stt-index)

<a id="stt-item-16"></a>

### 16. Círculo ASE ampliado

En la figura 1, fuera de alcance, ASE es pequeño. En la figura 2 crece al entrar en alcance máximo calculado. Como en el [número 6](#stt-item-6), valore punto y marcas de alcance. AIM-7 sigue requiriendo seguimiento e iluminación.

[Volver al índice numerado](#stt-index)

<a id="stt-item-17"></a>

### 17. Distancia y acercamiento de la figura 2

Es el mismo `>` del [número 8](#stt-item-8). Léalo en la escala de 20 millas náuticas, no en la de 40 de la figura 1.

`915` indica 915 nudos de acercamiento, como el [número 7](#stt-item-7).

[Volver al índice numerado](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="17. Distancia y acercamiento de la figura 2">
    </a>
    <figcaption>Figura 3 · RTR: triángulo de lanzamiento</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="17. Distancia y acercamiento de la figura 2">
    </a>
    <figcaption>Figura 4 · Bajo alcance mínimo: Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### Figura 3 · RTR: triángulo de lanzamiento

Al entrar en RTR aparece un triángulo abajo en el VSD indicando condiciones favorables. Está en el centro inferior, a la izquierda de `8SEC`.

Evalúe ASE, punto y alcance mínimo, manteniendo el seguimiento e iluminación que exige AIM-7. El triángulo no garantiza el impacto.

[Volver al índice numerado](#stt-index)

<a id="stt-break-x"></a>

### Figura 4 · Bajo alcance mínimo: Break X

Por debajo del alcance mínimo aparece **Break X** en el centro, indicando que no se debe disparar.

El misil puede no tener tiempo de acelerar suficientemente. Incluso al impactar, su avión podría atravesar la zona de fragmentos. Bloqueo y cercanía no bastan: respete el alcance mínimo.

[Volver al índice numerado](#stt-index)

## Seguimiento durante exploración (TWS)

TWS mantiene varias pistas mientras explora. Opera principalmente dentro de 40 millas náuticas y sirve sobre todo a AIM-120.

Para aumentar el refresco, TWS limita las combinaciones de barras y azimut. Mayor anchura permite menos barras. El sistema selecciona automáticamente las barras al elegir azimut.

| Cobertura azimutal | Barras automáticas |
| --- | --- |
| 60° | 2 barras |
| 30° | 4 barras |
| 15° | 6 barras |

### Entrar en TWS

Hay dos métodos:

1. **Con blanco bloqueado:** desde STT, mueva AA hacia abajo.
2. **Sin bloqueo:** coloque la puerta en espacio vacío, toque dos veces TDC (Cursor derecho) para adquisición manual y mueva rápidamente AA hacia abajo al mismo tiempo.

Véanse [Cursor](/es/Docs/aircraft/f15c/touch-ui.html#item-18) y [adquisición automática](/es/Docs/aircraft/f15c/touch-ui.html#item-28).

Cada blanco se actualiza menos que en STT porque TWS explora otras zonas. A gran distancia también limita la resolución. Maniobras de alta G, chaff o una formación que se dispersa tras verse como un solo blanco pueden causar fallos de correlación con las pistas y pérdida de seguimiento.

### Salir de TWS

- **Con PDT:** **AA Down** entra en STT sobre ese PDT y descarta todas las demás pistas.
- **Sin PDT:** toque **AA** una vez para volver a LRS.

### Categorías de pistas

Se distinguen blancos no designados, principales y secundarios. Las capacidades siguientes corresponden al juego.

TWS crea pistas automáticamente. Un blanco recién detectado es un cuadrado sin vector de velocidad. El vector aparece cuando los barridos posteriores aportan información suficiente para establecer la pista.

| Categoría | Significado | Capacidad |
| --- | --- | --- |
| NDT (Non-designated Target) | Blanco todavía no seleccionado como principal o secundario | Hasta 16 |
| PDT (Primary Designated Target) | Blanco principal de interés y ataque | Uno |
| SDT (Secondary Designated Target) | Blanco secundario disponible para selección posterior | Hasta 7 |

Indican designación, no amigo/enemigo. Sin PDT: NDTWS; con PDT: DTWS.

<a id="tws-designation"></a>

### Designar y cambiar PDT

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="Designar y cambiar PDT">

Con las pistas establecidas, use **Coolie Up (hacia arriba)**:

- **Automático:** designa un PDT y SDT.
- **Cíclico:** las siguientes acciones recorren los SDT para elegir PDT.
- **Manual:** encierre un NDT o SDT y use Coolie Up para hacerlo PDT.

Solo puede existir un PDT. Al elegir otro, el anterior pasa a SDT.

**Coolie Down** cancela todas las designaciones, devuelve PDT y SDT a NDT y restaura NDTWS.

Véase [Interfaz táctil: Coolie](/es/Docs/aircraft/f15c/touch-ui.html#item-26).

### Ataque multiblanco con AIM-120

En TWS solo se puede disparar al PDT actual. Para atacar varios blancos con AIM-120, cambie de PDT entre lanzamientos:

1. Dispare AIM-120 al PDT actual.
2. Seleccione el siguiente con Coolie Up o manualmente con la puerta.
3. Dispare al nuevo PDT.

Tras pasar a SDT, el blanco anterior puede seguir enviando actualizaciones al misil por enlace de datos. Cambiar PDT no termina ese apoyo; mantenga las pistas pertinentes.

<a id="tws-ndt-index"></a>

### Figura 1 · Blancos no designados

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="Figura 1 · Blancos no designados">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 Blanco sin pista establecida</a>
  <a href="#tws-ndt-item-2">2 NDT — blanco no designado</a>
  <a href="#tws-ndt-item-3">3 Estado TWS</a>
</div>

Pulse una imagen para verla a resolución original, o un número para saltar a su explicación.

<a id="tws-ndt-item-1"></a>

#### 1. Blanco sin pista establecida

La flecha señala un cuadrado relleno recién detectado, sin vector por falta de información. Los barridos posteriores establecen la pista y añaden el vector del número 2.

[Volver al índice numerado](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT — blanco no designado

Un símbolo relleno con vector representa una pista NDT establecida; la línea indica movimiento. La pista se crea automáticamente sin designación manual, y no es PDT ni SDT. Se admiten hasta 16 NDT.

[Volver al índice numerado](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. Estado TWS

`2TWSM`, abajo a la izquierda, muestra el estado radar: `TWS` es seguimiento durante exploración, `M` es PRF media (MPRF) y la cifra anterior indica barras.

[Volver al índice numerado](#tws-ndt-index)

<a id="tws-designated-index"></a>

### Figura 2 · Blancos principal y secundarios

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="Figura 2 · Blancos principal y secundarios">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT — blanco designado secundario</a>
  <a href="#tws-designated-item-2">2 PDT — blanco designado principal</a>
  <a href="#tws-designated-item-3">3 Altitud del blanco dentro de la puerta</a>
  <a href="#tws-designated-item-4">4 Distancia de activación AIM-120</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT — blanco designado secundario

El símbolo vacío con vector es un SDT, designado pero no PDT actual. El juego admite hasta 7 SDT.

[Volver al índice numerado](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT — blanco designado principal

La estrella de cinco puntas es el PDT y su línea larga indica dirección de velocidad. Aquí la puerta lo encierra. Sus datos son la base de las lecturas de blanco y solución de armas del VSD.

Solo hay un PDT; los demás designados son SDT. La diferencia es prioridad, no bloqueo STT.

[Volver al índice numerado](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. Altitud del blanco dentro de la puerta

El pequeño cuadrado exterior indica la altitud del blanco en la puerta. Entre techo y suelo significa cobertura; fuera de ellos requiere ajustar elevación.

Desde eco bruto hasta NDT, SDT o PDT, encuadrarlo permite consultar su altitud.

[Volver al índice numerado](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. Distancia de activación AIM-120

El círculo vacío en la escala derecha indica distancia de activación. Si el blanco está más cerca, AIM-120 activa su radar y adquiere activamente desde el lanzamiento.

[Volver al índice numerado](#tws-designated-index)

### Indicaciones de alcance y RTR

Pulse la imagen para ver su resolución original.

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="Indicaciones de alcance y RTR">
    </a>
    <figcaption>Figura 3 · En alcance: ASE discontinuo ampliado</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="Indicaciones de alcance y RTR">
    </a>
    <figcaption>Figura 4 · RTR: estrella de seis puntas y ASE intermitente</figcaption>
  </figure>
</div>

**Figura 3:** al entrar en alcance, ASE discontinuo crece e indica el inicio de condiciones de lanzamiento.

**Figura 4:** en RTR aparece una estrella de seis puntas en el centro inferior y ASE parpadea, indicando buenas condiciones. La imagen captura la fase apagada del círculo.

### Apoyo al misil tras el lanzamiento

Después de lanzar AIM-120 en TWS, el radar mantiene la pista y envía actualizaciones por enlace de datos. Vigile el seguimiento, especialmente antes de que el misil active su radar y adquiera por sí mismo.

**Cambiar PDT no interrumpe automáticamente el apoyo anterior.** Puede seleccionar otro y volver a disparar. El antiguo PDT, ya SDT, sigue proporcionando actualizaciones mientras se conserve su pista.

Mantenga los blancos apoyados dentro del volumen explorado. Perder la pista por maniobras, interferencias o salida del volumen impide enviar datos nuevos. STT descarta las otras pistas: valore su efecto sobre otros misiles antes de cambiar de modo.

AIM-120 adquiere activamente al activar su radar. Si el blanco está dentro de la [distancia de activación](#tws-designated-item-4), empieza inmediatamente al lanzar.

<a id="tws-missile-support-index"></a>

Pulse una imagen para verla a resolución original, o un número para saltar a su explicación.

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="Apoyo al misil tras el lanzamiento">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 Progreso de activación</a>
  <a href="#tws-missile-support-item-2">2 Marca de misil lanzado</a>
  <a href="#tws-missile-support-item-3">3 Tiempo restante hasta activación</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. Progreso de activación

La marca corta avanza hacia el punto 2. Al llegar, según el cálculo de condiciones de lanzamiento, el misil debería haber activado su radar e iniciado búsqueda activa.

[Volver al índice numerado](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. Marca de misil lanzado

El punto indica que se disparó un AIM-120 al blanco y se le proporciona enlace de datos. También es la referencia que alcanza la marca 1 al estimarse la activación.

[Volver al índice numerado](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. Tiempo restante hasta activación

`A 9`, arriba a la derecha, estima 9 segundos hasta activar radar e iniciar búsqueda activa. La cuenta atrás complementa la marca 1.

[Volver al índice numerado](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### Presentación tras activarse

Tras activación, **A cambia a T**, tiempo estimado hasta la intercepción. `T 17` prevé encuentro e impacto en 17 segundos.

Pulse una imagen para verla a resolución original, o un número para saltar a su explicación.

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="Presentación tras activarse">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 Marca de misil activo</a>
  <a href="#tws-missile-active-item-2">2 Progreso de vuelo del misil</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. Marca de misil activo

La marca 1 indica que el misil disparado al blanco activó su radar e inició búsqueda activa.

[Volver al índice numerado](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. Progreso de vuelo del misil

La X se acerca a la estrella del blanco, representando el vuelo hacia él. Llega a la estrella en el instante de intercepción precalculado.

Las indicaciones se calculan con las condiciones al lanzar. Maniobras y contramedidas suelen alargar el tiempo real. Llegar a cero o alcanzar la estrella significa solo intercepción prevista, no impacto confirmado.

[Volver al índice numerado](#tws-missile-active-index)

## Adquisición automática cercana y Flood

Exploración automática e iluminación Flood usan el **eje longitudinal del avión** y siguen su actitud. LRS y TWS usan el **plano horizontal estabilizado por cardán**.

La adquisición automática sirve principalmente para **WVR (combate visual)**. Boresight de largo alcance bloquea dentro de **40 millas náuticas**; los demás modos automáticos operan dentro de **10 millas náuticas**.

### Selección de modo

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Selección de modo">

Mueva **AA hacia arriba** sucesivamente:

1. Primera vez: **SS (Supersearch)**.
2. Segunda: **VS (exploración vertical)**.
3. Tercera: **Boresight**.
4. Cuarta: **Boresight de largo alcance**.

**Mantenga AA hacia arriba** para entrar en **Flood**.

### SS — Supersearch

El primer AA arriba entra en SS. El círculo HUD cubre **20°**; un blanco dentro puede adquirirse automáticamente a menos de **10 millas náuticas**.

La elevación desplaza la zona hasta **10°** arriba o abajo. Las imágenes muestran centro, arriba y abajo; parte del círculo puede quedar fuera del HUD.

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>Centrado</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>10° arriba</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>10° abajo</figcaption>
  </figure>
</div>

### Exploración vertical

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="Exploración vertical" loading="lazy">
  <figcaption>VS — exploración vertical</figcaption>
</figure>

Explora una zona estrecha sobre el morro, útil tras el cruce cuando el blanco pasa por encima.

### Boresight

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="Boresight" loading="lazy">
  <figcaption>BST — boresight</figcaption>
</figure>

Explora un cono estrecho delante y bloquea el primer blanco que entra.

### Boresight de largo alcance

LR BST funciona como BST, con círculo menor y bloqueo automático hasta **40 millas náuticas**. Mantenga al blanco dentro del pequeño círculo.

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="Boresight de largo alcance" loading="lazy">
  <figcaption>LR BST — boresight de largo alcance</figcaption>
</figure>

### Flood

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood" loading="lazy">
  <figcaption>HUD en Flood</figcaption>
</figure>

Flood proporciona iluminación amplia a AIM-7. Mantenga el blanco dentro del círculo hasta el impacto.

En Flood aparece `FLOOD` arriba a la izquierda del VSD y desaparece la cuadrícula. Permanecen horizonte local, puerta y puntos de navegación.

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood">
  </a>
  <figcaption>VSD en Flood (pulse para el original)</figcaption>
</figure>

## Flujo práctico

1. Establezca la situación lejana con LRS.
2. Ajuste elevación a la altitud del blanco.
3. Priorice varios blancos con TWS.
4. Use STT para seguimiento concentrado o iluminación estable.
5. Tras el cruce use adquisición automática.
