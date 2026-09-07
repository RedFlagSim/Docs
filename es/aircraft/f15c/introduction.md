# F-15C Eagle, caza de superioridad aérea

![F-15C Header](/assets/F-15C/header.jpg)

Este capítulo resume los sistemas del F-15C implementados en Red Flag Sim: control, instrumentos de cabina, radar, armamento y contramedidas. Es una guía de simulación, no un manual real de aeronave.

## Física de vuelo y estados

El estado de vuelo depende de varios parámetros combinados: IAS, TAS/Mach, altitud, actitud, AoA, sobrecarga y combustible. El HUD aporta la referencia principal y los instrumentos de cabina permiten validación cruzada.

No todas las unidades son equivalentes: AoA no es simplemente el ángulo geométrico del morro, y IAS/TAS/Mach/G se interpretan con funciones distintas.

Referencias: [Instrumentos de cabina](/es/Docs/aircraft/f15c/cockpit-instruments.html), [Operación HUD](/es/Docs/aircraft/f15c/hud-operation.html), [Touch UI](/es/Docs/aircraft/f15c/touch-ui.html).

## Radar e información de blancos

AN/APG-63 se muestra en el VSD. Los modos activos son LRS, TWS, STT y adquisición a corta distancia.

LRS sirve para buscar, TWS mantiene rastreo durante escaneo y STT realiza seguimiento único. La distancia mostrada no garantiza por sí sola cobertura de elevación.

Trazas brutas, pistas y lock STT son estados diferentes. Ver [Radar AN/APG-63 y VSD](/es/Docs/aircraft/f15c/radar.html).

## Armamento y pantallas

F-15C soporta cañón, AIM-9, AIM-7 y AIM-120. Los símbolos pueden parecer compartidos, pero los requisitos de enganche varían por arma y modo.

| Arma | Puntos clave |
| --- | --- |
| Cañón | Referencias de tiro adaptadas según la fuente de distancia disponible, incluyendo GDS y BATR. |
| AIM-9 | Seguimiento por buscador con lógica de enganche según el modo de adquisición. |
| AIM-7 | Requiere STT en esta versión y mantiene iluminación tras el disparo. |
| AIM-120 | Utiliza condiciones de radar para lanzar y puede pasar a VISUAL sin PDT. |

ASE, punto de viraje y DLZ dependen de geometría y calidad de datos.

Ver también [Operación HUD](/es/Docs/aircraft/f15c/hud-operation.html) y [Radar AN/APG-63 y VSD](/es/Docs/aircraft/f15c/radar.html).

## Contramedidas y advertencia

TEWS/RWR muestra amenazas de radar y perturbación electrónica. La distancia de los símbolos de RWR no es una distancia física directa.

Consulte [Sistemas defensivos](/es/Docs/aircraft/f15c/defensive-systems.html).

## Orden de lectura recomendado

1. [Touch UI](/es/Docs/aircraft/f15c/touch-ui.html)
2. [Instrumentos de cabina](/es/Docs/aircraft/f15c/cockpit-instruments.html)
3. [Operación del HUD](/es/Docs/aircraft/f15c/hud-operation.html)
4. [Radar AN/APG-63 y VSD](/es/Docs/aircraft/f15c/radar.html)
5. [Sistemas defensivos](/es/Docs/aircraft/f15c/defensive-systems.html)

Abreviaciones: [Apéndice: abreviaturas](/es/Docs/aircraft/f15c/appendix.html).

## Hoja de ruta

Pendiente de implementación:

1. Arranque en frío (arranque completo desde estado apagado)
2. Servicios de suelo (reabastecimiento, armamento, reparación, energía externa)
3. Secuencia completa de eyección
4. Voz táctica interactiva con wingmen/AWACS/GCI/ATC/ground
