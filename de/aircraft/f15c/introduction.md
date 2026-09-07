# F-15C "Eagle“ Luftüberlegenheitsjäger

![F-15C Header](/assets/F-15C/header.jpg)

Dieses Kapitel beschreibt die im Spiel vorhandenen F-15C-Systeme: Steuerung, Cockpit-Instrumente, Radar, Waffeneinsatz und Abwehr. Es ist ein Simulationsleitfaden und ersetzt kein echtes Flugzeughandbuch.

## Flugphysik und Flugzustände

Der Flugzustand wird durch kombinierte Werte bestimmt: IAS, TAS, Höhe, Lage, AoA, Lastvielfaches und Treibstoffzustand. HUD ist Referenz, Cockpit-Instrumente sind Pflicht zur Gegenprüfung.

Einheiten sind nicht vollständig austauschbar: AoA ist nicht nur eine geometrische Winkelzahl, IAS/TAS/Mach/G haben jeweils unterschiedliche Bedeutung.

Zentrale Referenzen: [Cockpit-Instrumente](/de/Docs/aircraft/f15c/cockpit-instruments.html), [HUD-Bedienung](/de/Docs/aircraft/f15c/hud-operation.html), [Touch UI](/de/Docs/aircraft/f15c/touch-ui.html).

## Radar und Zielinformationen

AN/APG-63 wird im VSD angezeigt. In dieser Version sind LRS, TWS, STT und Kurzstrecken-Autoerfassung relevant.

LRS ist für die Suche, TWS für Nachverfolgung im Scanbetrieb, STT für Einzelzielbetrieb. Eine Distanzmarke allein sagt nichts über die Elevationsabdeckung aus.

Rohretour, Track und STT-Lock sind unterschiedliche Zustände. Siehe [AN/APG-63 Radar und VSD](/de/Docs/aircraft/f15c/radar.html).

## Waffen und Anzeige

Unterstützt werden Kanone, AIM-9, AIM-7 und AIM-120. Symbole können ähnlich wirken, sind aber laut Modus und Waffe unterschiedlich einzustufen.

| Waffe | Wichtige Punkte |
| --- | --- |
| Kanone | Zielhilfen variieren je nach Verfügbarkeitsmodus der Entfernungsdaten; GDS/BATR-Hinweise einschließend. |
| AIM-9 | Kopf-/Suchlogik nach Modi; IR- und Radardaten getrennt bewerten. |
| AIM-7 | Erfordert STT im aktuellen Build; nach dem Start bleibt Radarnachführung erforderlich. |
| AIM-120 | Basiert auf Radarbedingungen, optional VISUAL bei fehlendem PDT. |

ASE/Turnpoint/DLZ sind dynamisch und abhängig von Geometrie und Datenqualität.

Siehe [HUD-Bedienung](/de/Docs/aircraft/f15c/hud-operation.html) und [AN/APG-63 Radar und VSD](/de/Docs/aircraft/f15c/radar.html).

## Abwehrsysteme

TEWS/RWR zeigt Radarwarnungen und elektronische Bedrohungen. Symbolabstand ist nicht direkt die reale Distanz.

Mehr dazu: [Defensivsysteme](/de/Docs/aircraft/f15c/defensive-systems.html).

## Lernreihenfolge

Empfohlen:

1. [Touch UI](/de/Docs/aircraft/f15c/touch-ui.html)
2. [Cockpit-Instrumente](/de/Docs/aircraft/f15c/cockpit-instruments.html)
3. [HUD-Bedienung](/de/Docs/aircraft/f15c/hud-operation.html)
4. [AN/APG-63 Radar und VSD](/de/Docs/aircraft/f15c/radar.html)
5. [Defensivsysteme](/de/Docs/aircraft/f15c/defensive-systems.html)

Abkürzungen: [Anhang: Abkürzungen](/de/Docs/aircraft/f15c/appendix.html).

## Roadmap

Noch nicht enthalten:

1. Kalter Start (ohne vorbereitete Systeme)
2. Vollständige Bodenservice-Flows
3. Vollständige Notausstiegssequenz
4. Interaktive Sprachfunktionen (Wingmen/AWACS/GCI/ATC/ground)
