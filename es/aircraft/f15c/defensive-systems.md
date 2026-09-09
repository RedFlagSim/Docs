<script setup>
import rwrSearchImage from '/assets/F-15C/RWR/search-new-signal.png'
import rwrLockImage from '/assets/F-15C/RWR/lock-priority.png'
import rwrThreatImage from '/assets/F-15C/RWR/threat-levels.png'
</script>

# Sistemas defensivos del F-15C

Los sistemas defensivos del F-15C combinan contramedidas electrónicas activas, alerta radar pasiva, chaff y bengalas. El piloto debe interpretar la pantalla de amenazas, decidir si activa la interferencia y emplear la contramedida adecuada mientras maniobra.

<a id="rwr"></a>

## Sistema de guerra electrónica táctica (TEWS)

El TEWS utiliza el receptor de alerta radar AN/ALR-56C para detectar emisiones de aeronaves, buques y sistemas terrestres. El receptor es pasivo, por lo que no delata al F-15C mediante transmisiones.

La pantalla del TEWS está centrada en el símbolo del avión propio. La posición angular de una señal indica su dirección respecto a tu aeronave. **Su distancia al centro representa el nivel de amenaza, no la distancia real.**

<div class="term-cloud tac-editor-index">
  <a href="#rwr-search">1 Radares de búsqueda y señales nuevas</a>
  <a href="#rwr-lock">2 Adquisición y amenaza prioritaria</a>
  <a href="#rwr-threat-levels">3 Tres niveles de amenaza</a>
  <a href="#rwr-audio">4 Alertas sonoras</a>
</div>

Haz clic en una captura para verla en su resolución original.

<a id="rwr-search"></a>

### 1. Radares de búsqueda y señales nuevas

<a :href="rwrSearchImage" target="_blank" rel="noopener">
  <img :src="rwrSearchImage" alt="TEWS, imagen 1: señales de radares de búsqueda SS y SD, con un semicírculo sobre una señal nueva" loading="lazy" />
</a>

| Símbolo de la imagen 1 | Significado |
| --- | --- |
| `SS` | Radar de búsqueda. |
| `SD` | Radar de búsqueda del sistema de misiles tierra-aire SA-11 Buk. |
| Semicírculo sobre un símbolo | Señal recién detectada. El `SD` con un semicírculo a la derecha es una nueva señal de radar de búsqueda. |

El semicírculo identifica una señal nueva; el círculo completo indica la adquisición descrita a continuación.

<a id="rwr-lock"></a>

### 2. Adquisición y amenaza prioritaria

<a :href="rwrLockImage" target="_blank" rel="noopener">
  <img :src="rwrLockImage" alt="TEWS, imagen 2: dos señales de radares de control de tiro SA-11 rodeadas por círculos, con un rombo adicional en la señal derecha" loading="lazy" />
</a>

| Símbolo de la imagen 2 | Significado |
| --- | --- |
| `11` | Radar de control de tiro del sistema de misiles tierra-aire SA-11 Buk. |
| Círculo completo alrededor de una señal | El radar ha adquirido tu aeronave. |
| Rombo | El objetivo que el sistema considera la amenaza de máxima prioridad. |

Los dos símbolos `11` están rodeados por círculos: ambos sistemas han adquirido tu aeronave. El `11` de la derecha también tiene un rombo, porque el sistema lo considera la mayor amenaza en ese momento.

<a id="rwr-threat-levels"></a>

### 3. Tres niveles de amenaza

<a :href="rwrThreatImage" target="_blank" rel="noopener">
  <img :src="rwrThreatImage" alt="TEWS, imagen 3: amenazas con adquisición en la zona interior, un nuevo 11 sin adquisición a la izquierda en la zona intermedia y señales de búsqueda en la zona exterior" loading="lazy" />
</a>

El TEWS distribuye las señales en tres zonas radiales según su nivel de amenaza, desde el centro hacia el exterior:

| Zona de la pantalla | Nivel de amenaza | Ejemplos |
| --- | --- | --- |
| Interior | Alto | Radares que han adquirido tu aeronave, misiles y otras amenazas prioritarias. |
| Intermedia | Medio | Radares de control de tiro detectados que todavía no han adquirido tu aeronave. |
| Exterior | Bajo | Las señales menos amenazantes, como los radares de búsqueda de este ejemplo. |

El nuevo `11` de la izquierda de la imagen 3 tiene un semicírculo encima que lo identifica como una señal nueva. Este radar de control de tiro aún no ha adquirido tu aeronave, por lo que se clasifica como amenaza media y aparece en la zona intermedia.

**Un símbolo más cercano al centro indica una amenaza mayor, no un emisor físicamente más cercano.** Evalúa la amenaza combinando su dirección, tipo de emisor e indicaciones de adquisición.

<a id="rwr-audio"></a>

### 4. Alertas sonoras

El TEWS utiliza sonidos distintos para los barridos, las señales nuevas, la adquisición y los lanzamientos de misiles:

| Evento | Alerta sonora | Indicación asociada |
| --- | --- | --- |
| Un radar barre tu aeronave | Un único tono de barrido. | La señal de radar correspondiente. |
| Aparece una señal nueva | Un tono distintivo, ligeramente más agudo, repetido 3 veces. | Aparece un semicírculo sobre la señal. |
| Un radar de control de tiro adquiere tu aeronave | Un tono de barrido que se repite continuamente. | Aparece un círculo completo alrededor de la señal. |
| Se lanza un misil guiado por radar contra tu aeronave | 4 tonos de alerta de lanzamiento rápidos y agudos. | El círculo de la señal correspondiente parpadea simultáneamente. |

## Símbolos habituales del TEWS

### Radares aerotransportados

| Símbolo | Amenaza |
| --- | --- |
| `23` | MiG-23 |
| `29` | MiG-29 o Su-27/33 |
| `31` | MiG-31 |
| `30` | Su-30 |
| `14` | F-14 |
| `15` | F-15 |
| `16` | F-16 |
| `18` | F/A-18 |
| `50` | A-50 de alerta temprana (AWACS) |
| `E2` / `E3` | E-2C o E-3C de alerta temprana (AWACS) |

### Radares terrestres y navales

| Símbolo | Amenaza |
| --- | --- |
| `10` / `CS` / `BB` | Radares de búsqueda y control de tiro de la familia S-300PS |
| `SD` / `11` | Sistemas Buk / SA-11 |
| `6` | Kub / SA-6 |
| `8` | Osa / SA-8 |
| `13` | Strela-10 / SA-13 |
| `15` | Tor / SA-15 |
| `S6` | 2S6 Tunguska |
| `23` | ZSU-23-4 Shilka |
| `P` | Radar Patriot |
| `H` / `HA` | Radares del sistema Hawk |

## Chaff y bengalas

El chaff se utiliza contra amenazas guiadas por radar. Las bengalas se emplean contra amenazas infrarrojas. Los indicadores de cabina parpadean durante el lanzamiento y avisan cuando quedan pocas unidades.

Las contramedidas defensivas son más eficaces cuando se combinan con maniobras:

1. Gira para dificultar que el misil mantenga una trayectoria de interceptación adelantada.
2. Emplea chaff contra misiles guiados por radar mientras vuelas perpendicularmente a la amenaza o realizas un notch.
3. Emplea bengalas contra posibles misiles infrarrojos mientras cambias el aspecto y la firma térmica.
4. Evita volar en línea recta de forma predecible después de lanzar las contramedidas.
5. Vuelve a evaluar el TEWS tras el primer viraje defensivo; no des por neutralizada la amenaza.
