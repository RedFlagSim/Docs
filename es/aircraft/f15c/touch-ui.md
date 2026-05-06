# Interfaz táctil

Esta página aplica a dispositivos táctiles iOS y Android.

## Navigation + AA Mode

### Navigation Mode

![Navigation Mode](/assets/F-15C/TouchUI/navigation_mode.png)

### AA Mode

![AA Mode](/assets/F-15C/TouchUI/aa_mode.png)

<a id="ui-terms-top"></a>

## Índice de UI

<div class="term-cloud">
  <a href="#item-1">1 Panel de funciones</a>
  <a href="#item-2">2 Conmutador de modo</a>
  <a href="#item-3">3 Edición de elementos UI</a>
  <a href="#item-4">4 Menú principal</a>
  <a href="#item-5">5 Indicador de entrada</a>
  <a href="#item-6">6 Conmutador de tren de aterrizaje</a>
  <a href="#item-7">7 Conmutador de flaps</a>
  <a href="#item-8">8 Acelerador</a>
  <a href="#item-9">9 Conmutador de modo de acelerador</a>
  <a href="#item-10">10 Conmutador de aerofreno</a>
  <a href="#item-11">11 Mostrar MFD</a>
  <a href="#item-12">12 Mostrar mapa táctico</a>
  <a href="#item-13">13 Conmutador paddle</a>
  <a href="#item-15">15 Timón</a>
  <a href="#item-16">16 Padlock</a>
  <a href="#item-17">17 Menú de cambio de cámara</a>
  <a href="#item-18">18 Cursor</a>
  <a href="#item-19">19 Conmutador castle</a>
  <a href="#item-20">20 Barra de estado</a>
  <a href="#item-21">21 Liberación de chaff/flare</a>
  <a href="#item-22">22 Conmutador master arm</a>
  <a href="#item-23">23 Gatillo del cañón</a>
  <a href="#item-24">24 Conmutador de selección de arma</a>
  <a href="#item-25">25 Antenna Elevation</a>
  <a href="#item-26">26 Conmutador coolie</a>
  <a href="#item-27">27 Liberación de arma</a>
  <a href="#item-28">28 Conmutador auto acquisition</a>
</div>

## Explicación detallada

<a id="item-1"></a>
### 1. Panel de funciones

Mantén pulsado o toca dos veces para activar el panel táctil temporal de funciones. El panel tiene 4 pestañas:

<div class="panel-grid">
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_main.png" alt="Touch Panel MAIN" />
    <figcaption>MAIN</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_nav.png" alt="Touch Panel NAV" />
    <figcaption>NAV</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_hud.png" alt="Touch Panel HUD" />
    <figcaption>HUD</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_misc.png" alt="Touch Panel MISC" />
    <figcaption>MISC</figcaption>
  </figure>
</div>

[Volver arriba](#ui-terms-top)

<a id="item-2"></a>
### 2. Conmutador de modo

Cambia entre el modo Navigation y el modo AA (aire-aire).

[Volver arriba](#ui-terms-top)

<a id="item-3"></a>
### 3. Edición de elementos UI

Entra en el modo de edición de elementos UI. En este modo, al seleccionar un elemento UI se muestra una breve sugerencia de función. Puedes mover los elementos UI a la posición deseada y el sistema los guarda de forma persistente.

![Edit Mode](/assets/F-15C/TouchUI/edit_mode.png)

[Volver arriba](#ui-terms-top)

<a id="item-4"></a>
### 4. Menú principal

Abre el menú principal del juego, que incluye:

- `Aircraft Setup`: Abre la UI de configuración del avión del jugador
- `Preferences`: Abre la UI de preferencias del juego
- `Weather / Time`: Abre la UI de configuración de clima y hora
- `Tac Map`: Abre el mapa táctico
- `Tactical`: Menú táctico
- `Freeze / Resume`: Pausar/reanudar el juego
- `Playback`: Entrar en modo de repetición
- `Restart`: Reiniciar la misión actual
- `Calibrate`: Calibrar el giroscopio
- `Quit`: Salir de la misión actual

![Main Menu](/assets/F-15C/TouchUI/main_menu.png)

[Volver arriba](#ui-terms-top)

<a id="item-5"></a>
### 5. Indicador de entrada

Muestra los datos de entrada actuales del jugador y de salida del control de vuelo, incluyendo cabeceo, alabeo, timón y acelerador. Estos datos están disponibles en repetición.

[Volver arriba](#ui-terms-top)

<a id="item-6"></a>
### 6. Conmutador de tren de aterrizaje

Controla la extensión/retracción del tren. El tren debe bajarse por debajo de 250 nudos; bajarlo por encima de 250 nudos dañará el tren.

[Volver arriba](#ui-terms-top)

<a id="item-7"></a>
### 7. Conmutador de flaps

Controla la extensión/retracción de flaps.

[Volver arriba](#ui-terms-top)

<a id="item-8"></a>
### 8. Acelerador

El rango de entrada del acelerador va desde ralentí hasta postcombustión máxima. Arrastrar continuamente hacia la derecha durante 2 segundos cambia al modo de control de acelerador de un solo motor.

![Single Throttle](/assets/F-15C/TouchUI/single_throttle.png)

[Volver arriba](#ui-terms-top)

<a id="item-9"></a>
### 9. Conmutador de modo de acelerador

Este conmutador tiene tres posiciones:

- Inferior: Modo manual.
- Central: Modo de seguimiento IAS. En este modo, moviendo el acelerador se define una IAS objetivo y el control de vuelo la sigue automáticamente.
- Superior: Modo de seguimiento de AoA on-speed. En este modo, el acelerador mantiene automáticamente la AoA on-speed, útil para principiantes durante el aterrizaje.

[Volver arriba](#ui-terms-top)

<a id="item-10"></a>
### 10. Conmutador de aerofreno

Este es un conmutador mantenido de tres posiciones:

- Centro: Aerofreno detenido.
- Arriba: Desplegar aerofreno.
- Abajo: Replegar aerofreno.

La lógica de operación es similar a la de un elevalunas eléctrico de automóvil, pero este conmutador no vuelve automáticamente al centro.

[Volver arriba](#ui-terms-top)

<a id="item-11"></a>
### 11. Mostrar MFD

En la vista de cámara de cabina, mantener pulsado cualquiera de estos dos botones fija la cámara en la pantalla correspondiente. En ese momento, el pulgar derecho puede operar el cursor y otros botones de función. Las dos imágenes siguientes muestran los ángulos de vista correspondientes.

![VSD View](/assets/F-15C/TouchUI/vsd_.png)

![MPCD View](/assets/F-15C/TouchUI/mpcd_.png)

[Volver arriba](#ui-terms-top)

<a id="item-12"></a>
### 12. Mostrar mapa táctico

Muestra el mapa táctico en tiempo de ejecución.

![Runtime Tac Map](/assets/F-15C/TouchUI/runtime_tacmap.png)

[Volver arriba](#ui-terms-top)

<a id="item-13"></a>
### 13. Conmutador paddle

Cuando el piloto automático está activado, mantener este botón pulsado desconecta temporalmente el piloto automático.

[Volver arriba](#ui-terms-top)

<a id="item-15"></a>
### 15. Timón

Arrastrar a izquierda/derecha controla el timón y la dirección de la rueda de morro. Arrastrar hacia arriba controla los frenos del tren principal y el conmutador `cage/uncage` de sensores o armas.

[Volver arriba](#ui-terms-top)

<a id="item-16"></a>
### 16. Padlock

Se usa para bloqueo automático de vista. Si hay otras entidades cerca de tu aeronave, mantener pulsado bloquea la vista sobre esa entidad. Si hay múltiples entidades, mantén `padlock` con la mano derecha y toca dos veces un área en blanco con la mano izquierda para pasar a la siguiente entidad.

[Volver arriba](#ui-terms-top)

<a id="item-17"></a>
### 17. Menú de cambio de cámara

Se usa para cambiar posiciones de cámara:

- Un toque: Cambia automáticamente a la siguiente posición de cámara.
- Mantener pulsado: Abre el menú de cámara; mantén pulsado y arrastra a la posición objetivo, luego suelta para cambiar.

[Volver arriba](#ui-terms-top)

<a id="item-18"></a>
### 18. Cursor

Controla el cursor en las pantallas `VSD` y `SIT`. Toca dos veces este botón para designar un objetivo manualmente.

[Volver arriba](#ui-terms-top)

<a id="item-19"></a>
### 19. Conmutador castle

Se usa para gestionar pantallas y SOI (sensor de interés):

- `castle` hacia arriba: Cambia el SOI entre `VSD` y `SIT`; el control de cursor posterior se aplica al SOI actual.
- Cuando `VSD` es SOI:
  - `castle` hacia la derecha: Cambia `MPCD` a la página de gestión de carga de armas.
  - `castle` hacia la izquierda: Vuelve a la página de visualización `SIT`.
- Cuando `SIT` es SOI:
  - `castle` hacia la derecha: Cambia al modo no centrado.
  - `castle` hacia la izquierda: Cambia al modo expandido.
  - `castle` hacia abajo: Cambia al modo de grupo de vuelo (en este modo el rango de visualización queda fijo en 5 NM).

[Volver arriba](#ui-terms-top)

<a id="item-20"></a>
### 20. Barra de estado

De derecha a izquierda, la barra de estado muestra:

- FPS del juego
- Velocidad del viento (nudos)
- Dirección del viento (relativa a la línea de visión)
- Peso bruto del avión del jugador
- Hora del juego
- Indicador de piloto automático activado

[Volver arriba](#ui-terms-top)

<a id="item-21"></a>
### 21. Liberación de chaff/flare

Lógica de liberación:

- Toque: Libera 1 `chaff` y 1 `flare`.
- Deslizar arriba: Libera 1 `chaff`.
- Deslizar abajo: Libera 1 `flare`.
- Deslizar izquierda: Libera 5 `chaff` y 5 `flare`.
- Deslizar derecha: Libera 10 `chaff` y 10 `flare`.

[Volver arriba](#ui-terms-top)

<a id="item-22"></a>
### 22. Conmutador master arm

Antes de disparar armas, este conmutador debe estar en ON.

[Volver arriba](#ui-terms-top)

<a id="item-23"></a>
### 23. Gatillo del cañón

Cuando el arma seleccionada actualmente es el cañón, toca para disparar.

[Volver arriba](#ui-terms-top)

<a id="item-24"></a>
### 24. Conmutador de selección de arma

Deslizar arriba/abajo cambia entre `AAM` (advanced medium-range missile), `MRM` (medium-range missile), `SRM` (short-range missile) y `GUN`; deslizar izquierda/derecha recorre cíclicamente los misiles.

[Volver arriba](#ui-terms-top)

<a id="item-25"></a>
### 25. Antenna Elevation

Cuando el radar está en modo LRW/TWS, se usa para ajustar el ángulo de referencia de cabeceo del barrido de antena.

[Volver arriba](#ui-terms-top)

<a id="item-26"></a>
### 26. Conmutador coolie

Pendiente.

[Volver arriba](#ui-terms-top)

<a id="item-27"></a>
### 27. Liberación de arma

Pendiente.

[Volver arriba](#ui-terms-top)

<a id="item-28"></a>
### 28. Conmutador auto acquisition

Conmutador de bloqueo automático. Toca para cambiar el modo de radar.

[Volver arriba](#ui-terms-top)
<style scoped>
.term-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 6px;
}

.term-cloud a {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  line-height: 1.2;
  font-size: 13px;
  transition: border-color .16s ease, background-color .16s ease, transform .16s ease;
}

.term-cloud a:hover {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  transform: translateY(-1px);
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 12px 0 4px;
}

.panel-grid figure {
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  overflow: hidden;
}

.panel-grid img {
  display: block;
  width: 100%;
  height: auto;
}

.panel-grid figcaption {
  padding: 6px 8px;
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}

@media (max-width: 640px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
