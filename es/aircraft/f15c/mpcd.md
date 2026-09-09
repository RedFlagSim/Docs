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

La pantalla multifunción en color (MPCD) ofrece actualmente dos páginas: **SIT**, para la conciencia situacional, y **AA**, para el armamento aire-aire. **SIT se muestra de forma predeterminada.**

SIT reúne información de misión, informes del enlace de datos y trazas adquiridas por tu radar. AA muestra las cargas, la estación seleccionada, la munición del cañón y las cantidades de contramedidas.

<a id="mpcd-index"></a>

## Índice de la página

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 Pantalla y símbolos de SIT</a>
  <a href="#sit-mission">2 Información de misión y controles de visualización</a>
  <a href="#sit-modes">3 Control del cursor y modos de visualización</a>
  <a href="#sit-friendly">4 Aviones amigos y Bullseye</a>
  <a href="#sit-workflow">5 Uso de SIT junto con VSD</a>
  <a href="#mpcd-aa">6 Página de armamento AA</a>
</div>

Haz clic en una captura para abrirla a su resolución original. Las explicaciones numeradas corresponden a las marcas de cada imagen.

<a id="mpcd-sit"></a>

## Pantalla y símbolos de SIT

SIT presenta una vista superior de la situación táctica, con aviones, puntos de ruta del plan de vuelo, zonas geográficas y referencias de distancia.

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="Vista general de SIT con marcas 1–13" /></a>
  <figcaption>Vista general de SIT. En este ejemplo, la puerta de adquisición sigue al cursor del VSD.</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### Símbolos numerados

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 Hora Zulu</a>
  <a href="#sit-item-2">2 Compás</a>
  <a href="#sit-item-3">3 Información del enlace de datos</a>
  <a href="#sit-item-4">4 Anillo de medio alcance</a>
  <a href="#sit-item-5">5 Información de armamento</a>
  <a href="#sit-item-6">6 Zona geográfica</a>
  <a href="#sit-item-7">7 Distancia de visualización</a>
  <a href="#sit-item-8">8 Coordenadas del cursor respecto a tu avión</a>
  <a href="#sit-item-9">9 Zona de alcance SAM</a>
  <a href="#sit-item-10">10 Puntos de ruta del plan de vuelo</a>
  <a href="#sit-item-11">11 Puerta de adquisición</a>
  <a href="#sit-item-12">12 Cantidades de contramedidas</a>
  <a href="#sit-item-13">13 Coordenadas del cursor respecto al Bullseye</a>
</div>

<a id="sit-item-1"></a>

### 1. Hora Zulu

El reloj de la esquina superior izquierda indica la hora Zulu (UTC). Aquí, `23:00:51Z` significa las 23:00:51 Zulu.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. Compás

El compás proporciona una referencia de marcación alrededor de tu avión. Utiliza sus marcas de dirección para leer la marcación de los objetivos.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. Información del enlace de datos

Los símbolos rojos representan una formación enemiga notificada por el enlace de datos. Sus **contornos discontinuos** indican este origen. La transición de un informe a una traza radar correlacionada se ilustra en [Uso de SIT junto con VSD](#sit-workflow).

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. Anillo de medio alcance

El anillo blanco interior marca la mitad de la distancia de visualización del [elemento 7](#sit-item-7). Con `80` seleccionado en esta vista centrada, representa 40 millas náuticas desde tu avión.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. Información de armamento

La indicación inferior izquierda resume la información de armamento. La [página AA](#mpcd-aa) muestra la carga correspondiente de cada estación.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. Zona geográfica

El polígono discontinuo es una zona geográfica (Geofence) definida en la misión. Sus límites permiten relacionar la situación táctica con las zonas configuradas en el [editor Tac](#sit-mission).

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. Distancia de visualización

En esta vista centrada, el `80` de la esquina superior derecha indica la distancia desde tu avión hasta la parte superior del compás, en millas náuticas. En [modo Decenter](#sit-decenter), tu avión aparece más abajo; la referencia de distancia de ese modo se explica más adelante.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. Coordenadas del cursor respecto a tu avión

La indicación cian muestra la marcación y distancia del cursor desde tu avión. `092-22` sitúa el cursor en la marcación 092°, a 22 millas náuticas. Esta lectura sigue a la puerta de adquisición [11](#sit-item-11).

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. Zona de alcance SAM

Los círculos rojos muestran el alcance de ataque de los sistemas de misiles superficie-aire (SAM). También son un tipo de zona geográfica. En el ejemplo llevan la etiqueta `MEZ`, abreviatura de **Missile Engagement Zone** (zona de alcance de misiles).

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. Puntos de ruta del plan de vuelo

Los símbolos amarillos conectados muestran la secuencia de puntos de ruta del plan de vuelo de tu formación.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. Puerta de adquisición

Las dos barras verticales cian forman el cursor o puerta de adquisición. Las **barras discontinuas** indican que la puerta SIT sigue al cursor VSD. Al asignar el control del cursor a SIT, las barras se vuelven **continuas** y el TDC mueve directamente la puerta SIT. Consulta [Control del cursor y modos de visualización](#sit-modes).

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. Cantidades de contramedidas

Las indicaciones verdes `C 120` y `F 60` señalan que quedan 120 cargas de chaff y 60 bengalas.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. Coordenadas del cursor respecto al Bullseye

La indicación amarilla muestra la marcación y distancia del cursor desde **Bullseye**, el punto de referencia común. `121-30` sitúa el cursor en la marcación 121°, a 30 millas náuticas del Bullseye. La indicación cian de la esquina superior derecha usa tu avión como referencia.

[Volver al índice de símbolos](#sit-symbol-index)

<a id="sit-mission"></a>

## Información de misión y controles de visualización

### Información del editor Tac

Gran parte de la información de SIT procede del contenido que configuras en el editor de misiones. La secuencia de puntos de ruta y las zonas geográficas del ejemplo pueden compararse directamente con la configuración que aparece a continuación.

Configura las misiones según las capacidades de tu dispositivo. Un mayor número de unidades consume más recursos de cálculo y memoria.

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="Editor Tac con puntos de ruta, Bullseye, aviones y zonas geográficas" loading="lazy" /></a>
  <figcaption>La configuración de la misión proporciona el contexto de la pantalla SIT.</figcaption>
</figure>

Para configurar misiones, consulta [Editor Tac](/es/Docs/basics/tac-editor.html).

### Elegir qué muestra SIT

Abre el [panel de funciones de la interfaz táctil](/es/Docs/aircraft/f15c/touch-ui.html#item-1) y selecciona **MAIN**. La fila **SIT** controla la información mostrada y si la distancia de visualización sigue a la del VSD.

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="Controles SIT de MAIN: WP, DLK, AUTO RANGE y GEO FENCE, numerados 1–4" loading="lazy" /></a>
</figure>

| N.º | Control | Función |
| --- | --- | --- |
| 1 | `WP` | Mostrar u ocultar los puntos de ruta del plan de vuelo. |
| 2 | `DLK` | Mostrar u ocultar la información del enlace de datos. |
| 3 | `AUTO RANGE` | Determinar si la distancia de visualización SIT sigue los cambios de distancia de visualización VSD. |
| 4 | `GEO FENCE` | Mostrar u ocultar las zonas geográficas. |

[Volver al índice de la página](#mpcd-index)

<a id="sit-modes"></a>

## Control del cursor y modos de visualización

### Asignar el control del cursor a SIT

<div class="mpcd-controls">
  <div>
    <p>Con el TDC asignado al VSD, mueve el <strong>interruptor Castle hacia ARRIBA</strong> para convertir SIT en la pantalla activa (SOI). El TDC controla entonces únicamente la puerta de adquisición SIT, cuyas dos barras se vuelven <strong>continuas</strong>.</p>
    <p>Castle hacia arriba alterna el control del cursor entre VSD y SIT. Cuando la puerta vuelve a seguir al VSD, sus barras se muestran discontinuas.</p>
    <p>Los controles táctiles de las imágenes contiguas son el <a href="/es/Docs/aircraft/f15c/touch-ui.html#item-19">interruptor Castle</a> y el <a href="/es/Docs/aircraft/f15c/touch-ui.html#item-18">cursor (TDC)</a>.</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/es/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Interruptor Castle de la interfaz táctil" loading="lazy" /></a>
      <figcaption>Interruptor Castle</figcaption>
    </figure>
    <figure>
      <a href="/es/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Control táctil del cursor / TDC" loading="lazy" /></a>
      <figcaption>Cursor / TDC</figcaption>
    </figure>
  </div>
</div>

Las acciones derecha, izquierda y abajo indicadas a continuación se aplican **cuando SIT tiene el control del cursor**.

| Dirección de Castle | Modo SIT | Finalidad |
| --- | --- | --- |
| Derecha | Decenter | Desplazar tu avión hacia abajo para dejar más espacio por delante. |
| Izquierda | EXP | Ampliar una zona a escala de 10 NM y desplazar la vista con el cursor. |
| Abajo | Formación | Usar una escala fija de 5 NM para observar tu formación. |

<a id="sit-decenter"></a>

### Modo Decenter

Con SIT al mando del cursor, mueve **Castle hacia la DERECHA** para activar Decenter. Tu avión aparece en la parte inferior de la pantalla, dejando más espacio en la parte superior de SIT para mostrar la situación por delante.

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="SIT descentrado con puerta continua marcada 1 y tu avión marcado 2" loading="lazy" /></a>
  <figcaption>1: puerta de adquisición continua bajo control de SIT. 2: tu avión.</figcaption>
</figure>

En esta vista, `120` en la esquina superior derecha representa **120 millas náuticas desde tu avión hasta la parte superior del círculo grande**.

<a id="sit-exp"></a>

### Modo EXP

Con SIT al mando, mueve **Castle hacia la IZQUIERDA** para activar EXP. Este modo amplía una zona a **escala de 10 millas náuticas**, indicada por `E10` arriba a la derecha. Utiliza el cursor para desplazar la vista y ampliar la zona que quieras examinar.

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="SIT en EXP con E10 y símbolos de aviones del enlace de datos separados" loading="lazy" /></a>
  <figcaption>EXP amplía una zona pequeña para distinguir mejor cada avión y las zonas geográficas cercanas.</figcaption>
</figure>

<a id="sit-flight"></a>

### Modo Formación

Con SIT al mando, mueve **Castle hacia ABAJO** para activar el modo Formación. Usa una **escala fija de 5 millas náuticas**, indicada por `F5`, para examinar las posiciones y altitudes de los aviones de tu formación.

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="SIT en modo Formación F5 con los aviones 2, 3 y 4 alrededor de tu avión" loading="lazy" /></a>
  <figcaption>El modo Formación ofrece una vista cercana de la situación de tu formación.</figcaption>
</figure>

[Volver al índice de la página](#mpcd-index)

<a id="sit-friendly"></a>

## Aviones amigos y Bullseye

SIT distingue los aviones de tu formación de otros aviones del mismo **Package** (grupo de misión). El ejemplo también muestra cómo leer la posición del cursor respecto al Bullseye.

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT: avión del Package 1, Bullseye 2, aviones de tu formación 3 y tu avión 4" loading="lazy" /></a>
</figure>

| N.º | Símbolo | Significado |
| --- | --- | --- |
| 1 | Avión del Package en verde | Otro avión del mismo Package; aquí, un avión de alerta temprana. El punto central indica que tu avión recibe su contribución al enlace de datos. El `15` inferior indica una altitud de 15 000 pies. |
| 2 | Bullseye amarillo | Punto de referencia común. La indicación amarilla `037-12` abajo a la derecha sitúa el cursor en la marcación 037°, a 12 millas náuticas del Bullseye. |
| 3 | Aviones de tu formación en cian | Los otros tres aviones de tu formación. Los números interiores son sus posiciones: 2, 3 y 4; el líder es el 1. Los números inferiores indican la altitud en miles de pies. |
| 4 | Símbolo cian de tu avión | Posición de tu avión en SIT. |

[Volver al índice de la página](#mpcd-index)

<a id="sit-workflow"></a>

## Uso de SIT junto con VSD

Un procedimiento útil es localizar la zona de interés con la información del enlace de datos en SIT y dirigir allí la búsqueda radar en VSD para adquirir objetivos. Las imágenes muestran la progresión desde los informes del enlace de datos hasta las trazas radar locales y correlacionadas.

### 1. Buscar en la zona indicada por el enlace de datos

Usa las posiciones notificadas en SIT para orientar la búsqueda radar en VSD. El **sector cian del SIT de la izquierda** representa el azimut y la distancia de búsqueda del radar. Compáralo con las posiciones notificadas y comprueba en VSD que la cobertura en altitud incluye la de los objetivos.

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="Contactos del enlace de datos y sector radar cian en SIT junto a los ecos de búsqueda VSD" loading="lazy" /></a>
  <figcaption>SIT, a la izquierda, proporciona el contexto táctico; VSD, a la derecha, muestra la búsqueda radar.</figcaption>
</figure>

Para la elevación de antena, la cobertura de búsqueda y la puerta de adquisición, consulta [Radar y VSD: LRS](/es/Docs/aircraft/f15c/radar.html#radar-lrs).

### 2. Leer las trazas adquiridas localmente

Una vez que el radar establece trazas, SIT las muestra aquí como **cuadrados blancos de contorno continuo**. El **contorno continuo** indica una traza adquirida por tu radar; el **blanco** indica identidad desconocida. En esta fase, los símbolos rojos discontinuos del enlace de datos siguen visibles detrás de las trazas locales.

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="Trazas locales blancas superpuestas a informes rojos discontinuos en SIT y sus trazas VSD" loading="lazy" /></a>
  <figcaption>1: indicación de armamento resaltada. 2: trazas locales en SIT. 3: trazas radar correspondientes en VSD.</figcaption>
</figure>

### 3. Reconocer trazas correlacionadas y PDT

Tras un tiempo, los archivos de seguimiento obtenidos por tu radar y los recibidos por enlace de datos se asocian y fusionan en una sola traza. SIT muestra entonces un **símbolo de objetivo relleno**. En este ejemplo, los aviones enemigos correlacionados aparecen en rojo.

La **línea azul discontinua** marcada con 1 apunta al **PDT (Primary Designated Target, objetivo principal designado)**.

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="Trazas enemigas correlacionadas rellenas y línea azul discontinua al PDT en SIT, con VSD en TWS" loading="lazy" /></a>
  <figcaption>La línea azul discontinua indica la dirección al objetivo principal designado.</figcaption>
</figure>

### 4. Examinar la formación objetivo con EXP

Cambia SIT al [modo EXP](#sit-exp) para examinar cada avión de la formación objetivo. La ampliación separa los símbolos y facilita comparar su distribución y altitudes con VSD.

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="Cuatro aviones enemigos rellenos en EXP, marca 1, y sus trazas VSD, marca 2" loading="lazy" /></a>
  <figcaption>1: detalle de la formación objetivo en SIT con EXP. 2: trazas correspondientes en VSD.</figcaption>
</figure>

| Apariencia en estos ejemplos | Significado |
| --- | --- |
| Contorno de objetivo discontinuo | Informe del enlace de datos. |
| Contorno de objetivo continuo | Traza adquirida por tu radar. |
| Objetivo blanco | Identidad desconocida. |
| Símbolo de objetivo relleno | Trazas locales y del enlace de datos correlacionadas. |
| Línea azul discontinua | Dirección al PDT. |

[Volver al índice de la página](#mpcd-index)

<a id="mpcd-aa"></a>

## Página de armamento AA

### Abrir AA

Con **el TDC asignado al VSD**, mueve **Castle hacia la DERECHA** para cambiar MPCD de SIT a la **página AA de armamento aire-aire**. En ese mismo contexto, Castle hacia la izquierda vuelve a SIT.

La acción de Castle depende de qué pantalla controla el cursor: hacia la derecha abre AA si controla VSD y selecciona Decenter si controla SIT.

### Leer las cargas

AA muestra las cargas alrededor de una silueta del avión, junto con la munición del cañón y las cantidades de contramedidas.

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="Dos páginas AA con pilón vacío, depósito externo, munición, contramedidas y estación seleccionada anotados" loading="lazy" /></a>
  <figcaption>La imagen usa el número 3 dos veces: el 3 izquierdo señala la munición del cañón y el derecho, las contramedidas.</figcaption>
</figure>

| Marca | Indicación | Significado |
| --- | --- | --- |
| 1, imagen izquierda | `PYLON` | Pilón vacío, sin carga montada. |
| 2, imagen izquierda | `FUEL` | Estación con un depósito de combustible externo. |
| 3, imagen izquierda | `950` | Munición restante del cañón: 950 proyectiles en este ejemplo. |
| 3, imagen derecha | `CHF 120`, `FLR 60` | Contramedidas restantes: 120 cargas de chaff y 60 bengalas. |
| 4, imagen derecha | `AMRM / 120B` resaltado | Estación seleccionada, con resaltado verde y un recuadro blanco alrededor de la designación del arma. |

### Comparar con la configuración del avión

La configuración **LOADOUT** siguiente corresponde a los ejemplos AA anteriores. Compara los tipos de carga y las cantidades de munición para ver cómo se representan en MPCD.

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="LOADOUT correspondiente a AA: 9M, 120B, 7M, depósito externo, 950 proyectiles, 120 cargas de chaff y 60 bengalas" loading="lazy" /></a>
</figure>

| Configuración LOADOUT | Indicación correspondiente en AA |
| --- | --- |
| `9M` en las estaciones 8A y 2A | Dos indicaciones `SRM / 9M`. |
| `120B` en las estaciones 7 y 3 | Dos indicaciones `AMRM / 120B`. |
| `7M` en las estaciones 6 y 4 | Dos indicaciones `MRM / 7M`. |
| `Tank` en la estación 5 | Indicación central `FUEL`. |
| Gun `950`, Chaff `120`, Flare `60` | Cantidades de munición del cañón y contramedidas en AA. |

[Volver al índice de la página](#mpcd-index)
