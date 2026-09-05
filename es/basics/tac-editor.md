<a id="tac-editor-top"></a>

# Editor Tac

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Usa el Tac Editor para crear misiones, organizar vuelos, colocar unidades y planificar rutas. La guía se divide en siete partes, desde la vista general numerada hasta las instrucciones detalladas de edición.

**Estructura de la guía**

- [Parte 1: Vista general de la interfaz](#part-1)
- [Parte 2: Package y Flight](#part-2)
- [Parte 3: Configuración de aeronaves](#part-3)
- [Parte 4: Planes de vuelo](#part-4)
- [Parte 5: Objetos del mapa](#part-5)
- [Parte 6: Ajustes de la misión](#part-6)
- [Parte 7: Guardado y vuelo de prueba](#part-7)

<a id="part-1"></a>

## Parte 1: Vista general de la interfaz

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="Editor Tac con elementos numerados del 1 al 11">
</a>

Abre la imagen para verla a resolución completa. Selecciona un número para ir a su explicación.

<a id="ui-terms-top"></a>

### Índice de la interfaz

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight — formación</a>
  <a href="#item-2">2 Bullseye — punto de referencia</a>
  <a href="#item-3">3 Package — grupo de formaciones</a>
  <a href="#item-4">4 Unidades adicionales de IA</a>
  <a href="#item-5">5 Inspector — panel de información</a>
  <a href="#item-6">6 Escala</a>
  <a href="#item-7">7 Barra de herramientas del mapa</a>
  <a href="#item-8">8 Ruta del plan de vuelo</a>
  <a href="#item-9">9 Hora local y hora Zulu</a>
  <a href="#item-10">10 Geo Fence — zonas y límites</a>
  <a href="#item-11">11 Barra de herramientas del editor</a>
</div>

<a id="item-1"></a>

### 1. Flight — formación

Un **Flight** es una formación de **hasta 4 aviones**. Cada tarjeta de la parte superior representa una formación; los símbolos de avión indican sus miembros. Selecciona una tarjeta para consultar la formación y configurar sus aviones.

[Continuar a Flight](#part-2-flight)

[Volver al índice](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye — punto de referencia

**Bullseye** es un punto de referencia geográfico común para comunicar direcciones y distancias. Los círculos concéntricos amarillos señalan su posición en el mapa.

Los anillos de distancia del mapa están centrados en Bullseye. Los radios de dos anillos consecutivos difieren en **20 millas náuticas (20 NM)**.

[Volver al índice](#ui-terms-top)

<a id="item-3"></a>

### 3. Package — grupo de formaciones

Un **Package** agrupa formaciones del mismo bando. Las franjas azules y rojas de la parte superior contienen los Flights de sus respectivos grupos. Selecciona un Package para consultar y gestionar sus formaciones.

[Continuar a Package](#part-2-package)

[Volver al índice](#ui-terms-top)

<a id="item-4"></a>

### 4. Unidades adicionales de IA

Son unidades adicionales controladas por la IA, fuera de la estructura Package/Flight. La imagen muestra un avión independiente y una unidad de misiles tierra-aire. Se gestionan desde **NP Unit** en la barra del editor.

[Ver detalles: NP Unit](#part-5-np-unit-list)

[Volver al índice](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector — panel de información

El panel derecho muestra información y controles del objeto seleccionado. En la imagen presenta la información general de la misión: nombre, escenario y dificultad.

Actualmente no se puede seleccionar **Scenery**. La selección de la región del mapa estará disponible aquí en una versión futura, cuando se admitan varias regiones.

**Toca dos veces una zona vacía del mapa** para que el Inspector vuelva a mostrar la información general de la misión.

**Inspector por tipo de objeto**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[Volver al índice](#ui-terms-top)

<a id="item-6"></a>

### 6. Escala

La barra de escala indica la distancia correspondiente a su longitud con el nivel de zoom actual. **NM** significa millas náuticas; el ejemplo muestra **16.66 NM**. Úsala para estimar distancias en el mapa.

[Volver al índice](#ui-terms-top)

<a id="item-7"></a>

### 7. Barra de herramientas del mapa

La barra inferior izquierda contiene cuatro botones, de izquierda a derecha:

- **Mover** (cuatro flechas): mantenlo pulsado para mover un elemento seleccionado del mapa.
- **Acercar** (lupa con +): ampliar el mapa.
- **Alejar** (lupa con −): mostrar una zona más amplia.
- **Home** (casa): cerrar el editor y volver a la pantalla principal.

::: tip Mover un elemento del mapa
1. Selecciona la unidad o el elemento que quieras mover.
2. Mantén pulsado **Mover con la mano izquierda**.
3. Sin soltarlo, **arrastra sobre el mapa con la mano derecha** para cambiar la posición del elemento seleccionado.
:::

[Volver al índice](#ui-terms-top)

<a id="item-8"></a>

### 8. Ruta del plan de vuelo

Los puntos de ruta conectados muestran el recorrido previsto de un Flight. Selecciona la formación para consultar el plan de vuelo y editar sus puntos. La ruta pertenece a ese Flight y se utiliza para su navegación.

[Ver detalles](#part-4)

[Volver al índice](#ui-terms-top)

<a id="item-9"></a>

### 9. Hora local y hora Zulu

La parte inferior muestra la hora de la misión en dos formatos: primero la **hora local**, seguida de la **hora Zulu (UTC)** entre corchetes y con el sufijo **Z**. En el ejemplo, **16:00:00** y **23:00:00 Z** representan el mismo instante.

[Volver al índice](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence — zonas y límites

Un **Geo Fence** marca una zona táctica o un límite en el mapa. Puede ser circular o poligonal; la imagen muestra un círculo y un polígono etiquetado **MEZ**. Estas zonas se gestionan desde **Geo Fence** en la barra del editor.

[Ver detalles: Geo Fence](#part-5-geofence-list)

[Volver al índice](#ui-terms-top)

<a id="item-11"></a>

### 11. Barra de herramientas del editor

Estos seis botones aparecen en el Inspector de información general de la misión. Se explican en el orden de la pantalla: primero la fila superior de izquierda a derecha y después la inferior.

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time — tiempo atmosférico y hora</a>
  <a href="#item-11-2">11.2 File — archivos</a>
  <a href="#item-11-3">11.3 Config — configuración</a>
  <a href="#item-11-4">11.4 Geo Fence — zonas y límites</a>
  <a href="#item-11-5">11.5 NP Unit — unidades de IA</a>
  <a href="#item-11-6">11.6 Go Fly — iniciar vuelo</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time — tiempo atmosférico y hora

Abre los ajustes meteorológicos y de hora de la misión para definir las condiciones y el momento del día.

[Volver al índice](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File — archivos

Abre las operaciones de archivos de misión: crear una misión, guardar la actual, cargar una misión guardada o eliminarla.

[Volver al índice](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config — configuración

Abre la configuración y las restricciones de la misión. Permite decidir si se pueden modificar la carga, la pintura, el tiempo atmosférico y la hora, y si se permite congelar el tiempo. También se configuran restricciones de aviones y carga.

[Volver al índice](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence — zonas y límites

Abre la lista de zonas para añadir, seleccionar y editar áreas tácticas y límites.

[Ver detalles: Geo Fence](#part-5-geofence-list)

[Volver al índice](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit — unidades de IA

Abre la lista de unidades de IA para añadir y gestionar unidades ajenas a los Packages. Selecciona una unidad para editar sus datos en el Inspector.

[Ver detalles: NP Unit](#part-5-np-unit-list)

[Volver al índice](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly — iniciar vuelo

Inicia la misión con la configuración actual del editor. Debe haber exactamente un avión controlado por el jugador y su módulo debe estar disponible. Si no se inicia, corrige la configuración siguiendo el mensaje mostrado.

[Volver al índice](#ui-terms-top)

[Volver arriba](#tac-editor-top)

<a id="part-2"></a>

## Parte 2: Package y Flight

Organiza los vuelos en un Package y abre cada Flight para configurar sus miembros y su tarea. Los paneles siguientes siguen esta jerarquía.

Las aeronaves se organizan en **Mission → Package → Flight → Slot (una aeronave)**. Cada Flight pertenece a un Package y contiene un máximo de **4 aeronaves**.

<a id="part-2-package"></a>

### Package (paquete de misión)

Selecciona un Package en la parte superior del mapa para ver sus vuelos y horarios. El ejemplo se llama blue1.

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>Nombre y lista de Flight</strong>: Arriba aparece el nombre del paquete; tócalo para cambiarlo. Debajo aparecen Flight1, Flight2 y Flight3. Los números identifican aeronaves dentro de cada vuelo.
- <strong>＋</strong>: Añadir un Flight. Selecciona una tarjeta existente para abrir su Flight Inspector.
- <strong>Take-off Time</strong>: Hora de despegue del paquete; el ejemplo muestra 23:03.
- <strong>Time on Target (TOT)</strong>: Hora de llegada del paquete al objetivo; el ejemplo muestra 23:33.

Package y Flight tienen sus propios campos de tiempo. La sincronización y la referencia horaria se explicarán más adelante.

</TacInspectorPanel>

[Volver a la vista general](#item-3)

<a id="part-2-flight"></a>

### Flight (grupo de vuelo)

Selecciona un Flight dentro del Package para ver sus miembros y ajustes. El ejemplo es Flight1 con 4 aeronaves.

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>Diagrama de miembros</strong>: Muestra aeronaves y números. Selecciona un miembro para abrir su Slot Inspector.
- <strong>Airbase</strong>: Base del vuelo; en el ejemplo, NAS_Fallon.
- <strong>Mission Role</strong>: Tarea del vuelo; en el ejemplo, CAP.
- <strong>Take-off Time / Time on Target</strong>: Horas de despegue y llegada al objetivo; el ejemplo muestra 23:03 y 23:12.
- <strong>Station Time</strong>: Duración, en minutos, de la patrulla entre dos puntos de navegación de tipo objetivo durante una tarea de patrulla.
- <strong>Steer Points</strong>: Abrir la edición de la ruta. Las instrucciones de rutas y puntos de navegación están en la parte 4.
- <strong>Rebuild</strong>: Recalcular el Time on Target (TOT, hora de llegada al objetivo) del Flight.
- <strong>Delete</strong>: Está debajo de Rebuild. Elimina la definición completa del Flight, no solo un Slot de aeronave.

La captura actual solo muestra parte de Rebuild; el botón Delete situado debajo no aparece.

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### Ejemplo de patrulla: aviones cisterna y de alerta temprana

Para que un avión cisterna o de alerta temprana patrulle una ubicación determinada:

1. Coloca dos puntos de navegación en la ubicación de patrulla y configura ambos como <strong>tipo objetivo</strong>.
2. En el Flight Inspector, ajusta <strong>Station Time</strong> a la duración deseada de la patrulla en minutos.
3. La aeronave patrullará entre esos dos puntos de tipo objetivo durante el tiempo indicado en Station Time.

[Volver a la vista general](#item-1)

[Ver detalles: Slot](#part-3-slot) · [Steer Points](#part-4)

[Volver arriba](#tac-editor-top)

<a id="part-3"></a>

## Parte 3: Configuración de aeronaves

<a id="part-3-slot"></a>

### Slot (aeronave individual)

Un Slot representa una aeronave de un Flight. Selecciona una aeronave en el diagrama de miembros para abrir su Inspector.

<TacInspectorPanel panel="slot" alt="Slot (aeronave individual) Inspector" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>Tipo de aeronave y número</strong>: Arriba se muestra un F-15C, miembro 1. El desplegable inferior permite seleccionar el modelo.
- <strong>Loadout / Livery</strong>: Abrir la configuración de armamento y pintura.
- <strong>Spawn Type</strong>: Elegir Airborne (en el aire) o Airbase (en una base). En la imagen está seleccionado Airbase.
- <strong>Spawn Point ID</strong>: Seleccionar el punto de aparición; el ejemplo muestra Auto.
- <strong>Initial State</strong>: Abrir los ajustes del estado inicial de la aeronave.
- <strong>Delete</strong>: Eliminar el Slot actual, no todo el Flight ni el Package.

La imagen muestra el estado Airbase. Los paneles Airborne, Loadout / Livery e Initial State se explicarán con próximas capturas.

</TacInspectorPanel>

[Volver a la vista general](#item-1)

[Volver arriba](#tac-editor-top)

<a id="part-4"></a>

## Parte 4: Planes de vuelo

Selecciona Steer Points en el Flight Inspector para editar los puntos de navegación del vuelo actual. La imagen muestra el punto número 3.

[Ver detalles: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points (panel de navegación)

<TacInspectorPanel panel="steerpoints" alt="Steer Points (panel de navegación)" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>Flechas y número</strong>: Usa las flechas para cambiar de punto. El centro muestra el número seleccionado: 3 en el ejemplo.
- <strong>Tipo de punto</strong>: Selecciona el tipo en el desplegable. La imagen muestra Target (tipo objetivo).
- <strong>Elev (MSL)</strong>: Altitud prevista en el punto, respecto al nivel medio del mar (MSL), en pies (FT). El ejemplo es 15000 FT, no altura sobre el terreno.
- <strong>KCAS</strong>: Velocidad aerodinámica calibrada prevista en el punto, en nudos. El ejemplo es 529 KCAS, no velocidad respecto al suelo ni velocidad aerodinámica verdadera.
- <strong>Time(Z) Over Steerpoint</strong>: Hora prevista de paso por el punto en Zulu (UTC). A la izquierda están las horas y a la derecha los minutos: 23:15 Z en el ejemplo. No es una duración de vuelo.
- <strong>New</strong>: Añadir un punto de navegación.
- <strong>Delete</strong>: Eliminar el punto seleccionado, no todo el Flight.

</TacInspectorPanel>

Para una patrulla de cisterna o alerta temprana, coloca dos puntos de tipo Target en la ubicación de patrulla y usa Station Time del Flight para fijar la duración entre ellos. Para recalcular el TOT del Flight, selecciona Rebuild en el Flight Inspector.

[Ejemplo de configuración de patrulla](#flight-station-time-example) · [Mover objetos del mapa](#item-7)

[Volver arriba](#tac-editor-top)

<a id="part-5"></a>

## Parte 5: Objetos del mapa

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Lista de Geo Fence</a>
  <a href="#part-5-geofence-circle">Zona circular (Circle)</a>
  <a href="#part-5-geofence-polygon">Zona poligonal (Polygon)</a>
  <a href="#part-5-np-unit-list">Lista de NP Unit</a>
</div>

### Bullseye

**Bullseye** es un punto de referencia geográfico común para comunicar direcciones y distancias. Los círculos concéntricos amarillos señalan su posición en el mapa.

Los anillos de distancia del mapa están centrados en Bullseye. Los radios de dos anillos consecutivos difieren en **20 millas náuticas (20 NM)**.

### Geo Fence

Abre Geo Fence desde el resumen de la misión y selecciona una zona. Los círculos y polígonos tienen controles de geometría diferentes.

<a id="part-5-geofence-list"></a>

#### Lista de Geo Fence

<TacInspectorPanel panel="geofence-list" alt="Lista de Geo Fence" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>＋</strong>: Añadir un Geo Fence.
- <strong>Elementos de la lista</strong>: El ejemplo contiene un círculo llamado 11 y un polígono llamado MEZ. Los iconos distinguen sus formas.
- <strong>Seleccionar un elemento</strong>: Abrir el Inspector de la zona para editar su función, forma, bando y geometría.

</TacInspectorPanel>

[Volver a la vista general](#item-10)

<a id="part-5-geofence-circle"></a>

#### Zona circular (Circle)

<TacInspectorPanel panel="geofence-circle" alt="Zona circular (Circle) Inspector" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>Nombre</strong>: 11, en la parte superior, es el nombre de la zona.
- <strong>Geo Fence Role / Shape</strong>: La función es MEZ y la forma Circle. Nombre, función y forma son datos distintos.
- <strong>Coalition</strong>: Bando de la zona; el ejemplo muestra Red.
- <strong>Threat Radius</strong>: Radio del área circular. El valor es 22.6; la captura no indica la unidad.
- <strong>Delete</strong>: Eliminar la zona actual.

</TacInspectorPanel>

[Volver a la vista general](#item-10)

<a id="part-5-geofence-polygon"></a>

#### Zona poligonal (Polygon)

<TacInspectorPanel panel="geofence-polygon" alt="Zona poligonal (Polygon) Inspector" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>Nombre / Geo Fence Role</strong>: El nombre es MEZ, pero la función seleccionada es ROZ. No confundas el nombre con la función.
- <strong>Shape / Coalition</strong>: El ejemplo muestra Polygon y Red.
- <strong>Flechas y número</strong>: Seleccionar el vértice que se va a editar. El número mostrado es 0.
- <strong>New Vertice</strong>: Añadir un vértice. Se conserva el texto del botón del juego.
- <strong>Rotate</strong>: Girar el polígono. El incremento y las reglas del ángulo se explicarán más adelante.
- <strong>Delete Vertex / Delete</strong>: Delete Vertex elimina el vértice seleccionado; el botón Delete inferior elimina toda la zona.

Para mover objetos del mapa, usa el gesto de la parte 1: selecciona el objeto, mantén Move con la mano izquierda y arrastra con la derecha.

</TacInspectorPanel>

[Volver a la vista general](#item-10)

[Ver detalles](#item-7)

<a id="part-5-np-unit-list"></a>

### Lista de NP Unit

NP Unit en el resumen de la misión abre la lista Units para gestionar unidades fuera de la estructura Package / Flight.

<TacInspectorPanel panel="np-unit-list" alt="Lista de NP Unit" open-label="Abrir la imagen a resolución completa.">

**Campos y controles**

- <strong>＋</strong>: Añadir una unidad no controlada por un jugador.
- <strong>Elementos de la lista</strong>: Se muestran 9K37 Buk np y F-15C np: una unidad de misiles tierra-aire y una aeronave independiente.
- <strong>Seleccionar un elemento</strong>: Abrir el Inspector de esa unidad. Sus propiedades se explicarán cuando se añadan las capturas correspondientes.

</TacInspectorPanel>

[Volver a la vista general](#item-4)

[Volver arriba](#tac-editor-top)

<a id="part-6"></a>

## Parte 6: Ajustes de la misión

Las instrucciones detalladas con capturas se añadirán a esta parte más adelante.

- Información de la misión, escenario, clima y hora
- Permisos de configuración y restricciones

[Volver arriba](#tac-editor-top)

<a id="part-7"></a>

## Parte 7: Guardado y vuelo de prueba

Las instrucciones detalladas con capturas se añadirán a esta parte más adelante.

- Flujo de trabajo recomendado
- File: guardar y cargar
- Go Fly y comprobaciones previas al vuelo

[Volver arriba](#tac-editor-top)
