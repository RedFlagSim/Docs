<a id="tac-editor-top"></a>

# Tac Editor

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Mit dem Tac Editor erstellst du eigene Missionen, organisierst Flights, platzierst Einheiten und planst Routen. Die Anleitung besteht aus sieben Teilen: von der nummerierten Oberflächenübersicht bis zu den einzelnen Bearbeitungsschritten.

**Aufbau der Anleitung**

- [Teil 1: Oberflächenübersicht](#part-1)
- [Teil 2: Package und Flight](#part-2)
- [Teil 3: Flugzeugkonfiguration](#part-3)
- [Teil 4: Flugplanung](#part-4)
- [Teil 5: Kartenobjekte](#part-5)
- [Teil 6: Missionseinstellungen](#part-6)
- [Teil 7: Speichern und Testflug](#part-7)

<a id="part-1"></a>

## Teil 1: Oberflächenübersicht

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="Tac Editor mit nummerierten Markierungen 1–11">
</a>

Öffnen Sie das Bild, um es in voller Auflösung anzusehen. Wählen Sie unten eine Nummer, um zur Erklärung zu springen.

<a id="ui-terms-top"></a>

### UI-Verzeichnis

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight — Fluggruppe</a>
  <a href="#item-2">2 Bullseye — Referenzpunkt</a>
  <a href="#item-3">3 Package — Einsatzverband</a>
  <a href="#item-4">4 Zusätzliche KI-Einheiten</a>
  <a href="#item-5">5 Inspector — Informationsbereich</a>
  <a href="#item-6">6 Maßstab</a>
  <a href="#item-7">7 Kartenwerkzeuge</a>
  <a href="#item-8">8 Flugplanroute</a>
  <a href="#item-9">9 Ortszeit und Zulu-Zeit</a>
  <a href="#item-10">10 Geo Fence — Gebietsgrenzen</a>
  <a href="#item-11">11 Editor-Werkzeuge</a>
</div>

<a id="item-1"></a>

### 1. Flight — Fluggruppe

Ein **Flight** ist eine Fluggruppe mit **höchstens 4 Flugzeugen**. Jede Karte oben steht für einen Flight; die Flugzeugsymbole zeigen seine Mitglieder. Wählen Sie eine Karte, um den Flight anzusehen und seine Flugzeuge zu konfigurieren.

[Weiter zu Flight](#part-2-flight)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye — Referenzpunkt

**Bullseye** ist ein gemeinsamer geografischer Referenzpunkt für Richtungs- und Entfernungsangaben. Die gelben konzentrischen Kreise markieren seine Position auf der Karte.

Die Entfernungsringe auf der Karte sind um Bullseye zentriert. Die Radien benachbarter Ringe unterscheiden sich um **20 nautische Meilen (20 NM)**.

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-3"></a>

### 3. Package — Einsatzverband

Ein **Package** fasst Flights derselben Seite zusammen. Die blauen und roten Streifen oben enthalten die Flights der jeweiligen Packages. Wählen Sie ein Package, um seine Flights anzusehen und zu verwalten.

[Weiter zu Package](#part-2-package)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-4"></a>

### 4. Zusätzliche KI-Einheiten

Dies sind zusätzliche KI-gesteuerte Einheiten außerhalb der Package/Flight-Struktur. Das Beispiel zeigt ein unabhängiges Flugzeug und eine Flugabwehrraketeneinheit. Verwalten Sie diese Einheiten über **NP Unit** in den Editor-Werkzeugen.

[Details ansehen: NP Unit](#part-5-np-unit-list)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector — Informationsbereich

Der Bereich rechts zeigt Informationen und Bedienelemente zum ausgewählten Objekt. Im Bild ist die Missionsübersicht mit Missionsname, Szenerie und Schwierigkeitsgrad geöffnet.

**Scenery** kann derzeit nicht ausgewählt werden. Die Auswahl der Kartenregion wird hier in einer zukünftigen Version verfügbar sein, sobald mehrere Regionen unterstützt werden.

**Tippen Sie zweimal auf eine freie Stelle der Karte**, um im Inspector zur Missionsübersicht zurückzukehren.

**Inspector nach Objekttyp**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-6"></a>

### 6. Maßstab

Der Maßstabsbalken zeigt die Entfernung, die seiner Länge bei der aktuellen Zoomstufe entspricht. **NM** steht für nautische Meilen; im Beispiel sind es **16.66 NM**. Damit können Sie Entfernungen auf der Karte abschätzen.

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-7"></a>

### 7. Kartenwerkzeuge

Die Werkzeugleiste unten links enthält von links nach rechts vier Schaltflächen:

- **Verschieben** (vier Pfeile): gedrückt halten, um ein ausgewähltes Kartenelement zu verschieben.
- **Vergrößern** (Lupe mit +): Karte vergrößern.
- **Verkleinern** (Lupe mit −): einen größeren Bereich anzeigen.
- **Home** (Haus): Editor schließen und zum Hauptbildschirm zurückkehren.

::: tip Kartenelemente verschieben
1. Wählen Sie die gewünschte Einheit oder das Element aus.
2. Halten Sie mit der **linken Hand die Verschieben-Schaltfläche** gedrückt.
3. Ziehen Sie gleichzeitig mit der **rechten Hand auf der Karte**, um das ausgewählte Element neu zu positionieren.
:::

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-8"></a>

### 8. Flugplanroute

Die verbundenen Wegpunkte zeigen die geplante Route eines Flights. Wählen Sie den Flight, um seinen Flugplan anzusehen und Wegpunkte zu bearbeiten. Die Route gehört zum jeweiligen Flight und dient seiner Navigation.

[Details ansehen](#part-4)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-9"></a>

### 9. Ortszeit und Zulu-Zeit

Unten wird die Missionszeit in zwei Formen angezeigt: zuerst die **Ortszeit**, dann in Klammern die **Zulu-Zeit (UTC)** mit dem Zusatz **Z**. Im Beispiel bezeichnen **16:00:00** und **23:00:00 Z** denselben Zeitpunkt.

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence — Gebietsgrenzen

Ein **Geo Fence** kennzeichnet ein taktisches Gebiet oder eine Grenze auf der Karte. Es kann kreisförmig oder polygonal sein; das Bild zeigt einen Kreis und ein mit **MEZ** beschriftetes Polygon. Verwalten Sie diese Gebiete über **Geo Fence** in den Editor-Werkzeugen.

[Details ansehen: Geo Fence](#part-5-geofence-list)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-11"></a>

### 11. Editor-Werkzeuge

Diese sechs Schaltflächen stehen im Inspector der Missionsübersicht. Die folgenden Erklärungen entsprechen der Bildschirmreihenfolge: oben von links nach rechts, danach unten.

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time — Wetter und Zeit</a>
  <a href="#item-11-2">11.2 File — Dateien</a>
  <a href="#item-11-3">11.3 Config — Konfiguration</a>
  <a href="#item-11-4">11.4 Geo Fence — Gebietsgrenzen</a>
  <a href="#item-11-5">11.5 NP Unit — KI-Einheiten</a>
  <a href="#item-11-6">11.6 Go Fly — Flug starten</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time — Wetter und Zeit

Öffnet die Wetter- und Zeiteinstellungen der Mission. Hier legen Sie die Umgebungsbedingungen und die Tageszeit fest.

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File — Dateien

Öffnet das Missionsdateimenü: neue Mission erstellen, aktuelle Mission speichern, gespeicherte Mission laden oder löschen.

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config — Konfiguration

Öffnet die Missionskonfiguration und Einschränkungen. Legen Sie fest, ob Beladung, Lackierung, Wetter/Zeit und Zeitstopp geändert beziehungsweise verwendet werden dürfen. Hier lassen sich auch Flugzeug- und Beladungsbeschränkungen einstellen.

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence — Gebietsgrenzen

Öffnet die Geo-Fence-Liste zum Hinzufügen, Auswählen und Bearbeiten taktischer Gebiete und Grenzen.

[Details ansehen: Geo Fence](#part-5-geofence-list)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit — KI-Einheiten

Öffnet die Liste der KI-Einheiten zum Hinzufügen und Verwalten von Einheiten außerhalb der Packages. Wählen Sie eine Einheit, um ihre Details im Inspector zu bearbeiten.

[Details ansehen: NP Unit](#part-5-np-unit-list)

[Zurück zum Verzeichnis](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly — Flug starten

Startet die Mission mit der aktuellen Editor-Konfiguration. Es muss genau ein vom Spieler gesteuertes Flugzeug geben, dessen Modul zugänglich ist. Schlägt der Start fehl, korrigieren Sie die Konfiguration anhand der angezeigten Meldung.

[Zurück zum Verzeichnis](#ui-terms-top)

[Zurück nach oben](#tac-editor-top)

<a id="part-2"></a>

## Teil 2: Package und Flight

Organisiere Flights in einem Package und öffne anschließend einen Flight, um Mitglieder und Auftrag einzustellen. Die folgenden Bedienfelder folgen dieser Hierarchie.

Flugzeuge sind in **Mission → Package → Flight → Slot (ein Flugzeug)** gegliedert. Jeder Flight gehört zu einem Package und umfasst höchstens **4 Flugzeuge**.

<a id="part-2-package"></a>

### Package

Wähle oben auf der Karte ein Package, um seine Flights und Zeitfelder zu sehen. Das Beispiel heißt blue1.

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>Name und Flight-Liste</strong>: Oben steht der Paketname; tippe darauf, um das Package umzubenennen. Darunter stehen Flight1, Flight2 und Flight3. Die Nummern kennzeichnen Flugzeuge innerhalb des jeweiligen Flights.
- <strong>＋</strong>: Flight hinzufügen. Eine vorhandene Karte öffnet den Flight Inspector.
- <strong>Take-off Time</strong>: Startzeit des Packages; im Beispiel 23:03.
- <strong>Time on Target (TOT)</strong>: Zielankunftszeit des Packages; im Beispiel 23:33.

</TacInspectorPanel>

[Zurück zur Oberflächenübersicht](#item-3)

<a id="part-2-flight"></a>

### Flight

Wähle einen Flight im Package, um Mitglieder und Einstellungen zu sehen. Das Beispiel zeigt Flight1 mit 4 Flugzeugen.

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>Mitgliederansicht</strong>: Zeigt Flugzeuge und Nummern. Wähle ein Mitglied, um seinen Slot Inspector zu öffnen.
- <strong>Airbase</strong>: Basis des Flights; im Beispiel NAS_Fallon.
- <strong>Mission Role</strong>: Auftrag des Flights; im Beispiel CAP.
- <strong>Take-off Time / Time on Target</strong>: Start- und Zielankunftszeit; im Beispiel 23:03 und 23:12.
- <strong>Station Time</strong>: Dauer der Patrouille zwischen zwei Wegpunkten vom Zieltyp während eines Patrouillenauftrags, eingestellt in Minuten.
- <strong>Steer Points</strong>: Routenbearbeitung öffnen. Routen und Wegpunkte werden in Teil 4 erläutert.
- <strong>Rebuild</strong>: Die Time on Target (TOT, Zielankunftszeit) des Flights neu berechnen.
- <strong>Delete</strong>: Befindet sich unter Rebuild und löscht die gesamte Flight-Definition, nicht nur einen Flugzeug-Slot.

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### Patrouillenbeispiel: Tanker und Frühwarnflugzeuge

So lässt du einen Tanker oder ein Frühwarnflugzeug an einer bestimmten Position patrouillieren:

1. Setze an der geplanten Patrouillenposition zwei Wegpunkte und stelle beide auf den <strong>Zieltyp</strong> ein.
2. Stelle im Flight Inspector unter <strong>Station Time</strong> die gewünschte Patrouillendauer in Minuten ein.
3. Das Flugzeug patrouilliert für die unter Station Time angegebene Dauer zwischen diesen beiden Zielwegpunkten.

[Zurück zur Oberflächenübersicht](#item-1)

[Details ansehen: Slot](#part-3-slot) · [Steer Points](#part-4)

[Zurück nach oben](#tac-editor-top)

<a id="part-3"></a>

## Teil 3: Flugzeugkonfiguration

<a id="part-3-slot"></a>

### Slot (einzelnes Flugzeug)

Ein Slot steht für ein Flugzeug innerhalb eines Flights. Wähle ein Flugzeug in der Mitgliederansicht, um dessen Inspector zu öffnen.

<TacInspectorPanel panel="slot" alt="Slot (einzelnes Flugzeug) Inspector" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>Flugzeugtyp und Mitgliedsnummer</strong>: Oben ist die F-15C mit Nummer 1 zu sehen. Das Auswahlfeld darunter dient zur Typauswahl.
- <strong>Loadout / Livery</strong>: Bewaffnungs- und Lackierungseinstellungen öffnen.
- <strong>Spawn Type</strong>: Airborne (in der Luft) oder Airbase (auf der Basis) auswählen. Hier ist Airbase aktiv.
- <strong>Spawn Point ID</strong>: Startpunkt auswählen; im Beispiel Auto.
- <strong>Initial State</strong>: Einstellungen zum Anfangszustand des Flugzeugs öffnen.
- <strong>Delete</strong>: Den aktuellen Flugzeug-Slot löschen, nicht den gesamten Flight oder das Package.

</TacInspectorPanel>

[Zurück zur Oberflächenübersicht](#item-1)

[Zurück nach oben](#tac-editor-top)

<a id="part-4"></a>

## Teil 4: Flugplanung

Wähle Steer Points im Flight Inspector, um die Wegpunkte des aktuellen Flights zu bearbeiten. Das Bild zeigt Wegpunkt Nummer 3.

[Details ansehen: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points (Wegpunktansicht)

<TacInspectorPanel panel="steerpoints" alt="Steer Points (Wegpunktansicht)" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>Pfeile und Nummer</strong>: Wechsle mit den Pfeilen den Wegpunkt. In der Mitte steht die gewählte Nummer, hier 3.
- <strong>Wegpunkttyp</strong>: Wähle den Typ im Auswahlfeld. Im Bild ist Target (Zieltyp) ausgewählt.
- <strong>Elev (MSL)</strong>: Geplante Höhe am Wegpunkt über dem mittleren Meeresspiegel (MSL), in Fuß (FT). Das Beispiel zeigt 15000 FT, nicht die Höhe über Grund.
- <strong>KCAS</strong>: Geplante kalibrierte Fluggeschwindigkeit am Wegpunkt in Knoten. Hier 529 KCAS, nicht Geschwindigkeit über Grund oder wahre Fluggeschwindigkeit.
- <strong>Time(Z) Over Steerpoint</strong>: Geplante Überflugzeit des Wegpunkts in Zulu (UTC). Links stehen Stunden, rechts Minuten: hier 23:15 Z, keine Flugdauer.
- <strong>New</strong>: Wegpunkt hinzufügen.
- <strong>Delete</strong>: Den ausgewählten Wegpunkt löschen, nicht den gesamten Flight.

</TacInspectorPanel>

Setze für eine Tanker- oder Frühwarnpatrouille zwei Wegpunkte vom Typ Target an der Patrouillenposition und lege mit Station Time die Patrouillendauer zwischen ihnen fest. Wähle Rebuild im Flight Inspector, um die TOT des Flights neu zu berechnen.

[Beispiel zur Patrouilleneinrichtung](#flight-station-time-example) · [Kartenobjekte verschieben](#item-7)

[Zurück nach oben](#tac-editor-top)

<a id="part-5"></a>

## Teil 5: Kartenobjekte

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Geo-Fence-Liste</a>
  <a href="#part-5-geofence-circle">Kreisförmiger Bereich (Circle)</a>
  <a href="#part-5-geofence-polygon">Polygonaler Bereich (Polygon)</a>
  <a href="#part-5-np-unit-list">NP-Unit-Liste</a>
</div>

### Bullseye

**Bullseye** ist ein gemeinsamer geografischer Referenzpunkt für Richtungs- und Entfernungsangaben. Die gelben konzentrischen Kreise markieren seine Position auf der Karte.

Die Entfernungsringe auf der Karte sind um Bullseye zentriert. Die Radien benachbarter Ringe unterscheiden sich um **20 nautische Meilen (20 NM)**.

### Geo Fence

Öffne Geo Fence in der Missionsübersicht und wähle einen Bereich aus. Kreis und Polygon besitzen unterschiedliche Geometriewerkzeuge.

<a id="part-5-geofence-list"></a>

#### Geo-Fence-Liste

<TacInspectorPanel panel="geofence-list" alt="Geo-Fence-Liste" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>＋</strong>: Geo Fence hinzufügen.
- <strong>Listeneinträge</strong>: Das Beispiel zeigt den Kreis 11 und das Polygon MEZ. Die Symbole unterscheiden die Formen.
- <strong>Eintrag auswählen</strong>: Inspector des Bereichs öffnen, um Rolle, Form, Seite und Geometrie zu bearbeiten.

</TacInspectorPanel>

[Zurück zur Oberflächenübersicht](#item-10)

<a id="part-5-geofence-circle"></a>

#### Kreisförmiger Bereich (Circle)

<TacInspectorPanel panel="geofence-circle" alt="Kreisförmiger Bereich (Circle) Inspector" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>Name</strong>: 11 oben ist der Name des Bereichs.
- <strong>Geo Fence Role / Shape</strong>: Die Beispielrolle ist MEZ, die Form Circle. Name, Rolle und Form sind verschiedene Angaben.
- <strong>Coalition</strong>: Seite des Bereichs; im Beispiel Red.
- <strong>Threat Radius</strong>: Radius des Kreises einstellen.
- <strong>Delete</strong>: Aktuellen Bereich löschen.

</TacInspectorPanel>

[Zurück zur Oberflächenübersicht](#item-10)

<a id="part-5-geofence-polygon"></a>

#### Polygonaler Bereich (Polygon)

<TacInspectorPanel panel="geofence-polygon" alt="Polygonaler Bereich (Polygon) Inspector" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>Name / Geo Fence Role</strong>: Der Name lautet MEZ, die ausgewählte Rolle jedoch ROZ. Name und Rolle sind zu unterscheiden.
- <strong>Shape / Coalition</strong>: Im Beispiel Polygon und Red.
- <strong>Pfeile und Nummer</strong>: Den zu bearbeitenden Eckpunkt auswählen. Angezeigt wird Nummer 0.
- <strong>New Vertice</strong>: Eckpunkt hinzufügen.
- <strong>Rotate</strong>: Polygon drehen.
- <strong>Delete Vertex / Delete</strong>: Delete Vertex löscht den ausgewählten Eckpunkt; Delete ganz unten löscht den gesamten Bereich.

Zum Verschieben auf der Karte gilt die Geste aus Teil 1: Objekt auswählen, Move links gedrückt halten und mit der rechten Hand ziehen.

</TacInspectorPanel>

[Zurück zur Oberflächenübersicht](#item-10)

[Details ansehen](#item-7)

<a id="part-5-np-unit-list"></a>

### NP-Unit-Liste

NP Unit in der Missionsübersicht öffnet die Liste Units für Einheiten außerhalb der Package-/Flight-Struktur.

<TacInspectorPanel panel="np-unit-list" alt="NP-Unit-Liste" open-label="Bild in voller Auflösung öffnen.">

**Felder und Bedienung**

- <strong>＋</strong>: Nicht-Spieler-Einheit hinzufügen.
- <strong>Listeneinträge</strong>: 9K37 Buk np und F-15C np zeigen eine Boden-Luft-Raketeneinheit und ein unabhängiges Flugzeug.
- <strong>Eintrag auswählen</strong>: Inspector dieser Einheit öffnen.

</TacInspectorPanel>

[Zurück zur Oberflächenübersicht](#item-4)

[Zurück nach oben](#tac-editor-top)

<a id="part-6"></a>

## Teil 6: Missionseinstellungen

Tippe zweimal auf eine freie Stelle der Karte, um die Missionsübersicht zu öffnen.

- [Weather / Time](#item-11-1): Wetter und Uhrzeit der Mission einstellen.
- [Config](#item-11-3): Missionsregeln, Beschränkungen und Änderungsrechte festlegen.

[Zurück nach oben](#tac-editor-top)

<a id="part-7"></a>

## Teil 7: Speichern und Testflug

Prüfe Flights, Flugzeug-Slots und Routen, bevor du die Mission speicherst und einen Testflug startest.

- [File](#item-11-2): Mission speichern oder eine vorhandene Mission laden.
- [Go Fly](#item-11-6): Aktuelle Mission starten und prüfen, ob die Einstellungen wie vorgesehen funktionieren.

[Zurück nach oben](#tac-editor-top)
