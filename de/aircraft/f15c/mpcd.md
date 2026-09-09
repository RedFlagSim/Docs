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

Das Multifunktions-Farbdisplay (MPCD) bietet derzeit zwei Seiten: **SIT** für die taktische Lageübersicht und **AA** für die Luft-Luft-Bewaffnung. **Standardmäßig wird SIT angezeigt.**

SIT führt Missionsinformationen, Datenlink-Meldungen und vom eigenen Radar erfasste Tracks zusammen. AA zeigt Außenlasten, die gewählte Waffenstation, Kanonenmunition und den Vorrat an Täuschkörpern.

<a id="mpcd-index"></a>

## Seitenübersicht

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 SIT-Anzeige und Symbole</a>
  <a href="#sit-mission">2 Missionsinformationen und Anzeigeoptionen</a>
  <a href="#sit-modes">3 Cursorsteuerung und Anzeigemodi</a>
  <a href="#sit-friendly">4 Eigene Kräfte und Bullseye</a>
  <a href="#sit-workflow">5 SIT zusammen mit dem VSD verwenden</a>
  <a href="#mpcd-aa">6 AA-Waffenseite</a>
</div>

Klicken Sie auf einen Screenshot, um ihn in Originalauflösung zu öffnen. Die nummerierten Erläuterungen beziehen sich auf die Markierungen im jeweiligen Bild.

<a id="mpcd-sit"></a>

## SIT-Anzeige und Symbole

SIT zeigt die taktische Lage aus der Draufsicht: Flugzeuge, Flugplan-Wegpunkte, Geofences und Entfernungsreferenzen.

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="SIT-Übersicht mit Markierungen 1–13" /></a>
  <figcaption>SIT-Übersicht. In diesem Beispiel folgt das Erfassungsfenster dem VSD-Cursor.</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### Nummerierte Symbole

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 Zulu-Zeit</a>
  <a href="#sit-item-2">2 Kompass</a>
  <a href="#sit-item-3">3 Datenlink-Informationen</a>
  <a href="#sit-item-4">4 Ring für die halbe Anzeigereichweite</a>
  <a href="#sit-item-5">5 Waffeninformationen</a>
  <a href="#sit-item-6">6 Geofence</a>
  <a href="#sit-item-7">7 Anzeigereichweite</a>
  <a href="#sit-item-8">8 Cursorkoordinaten relativ zum eigenen Flugzeug</a>
  <a href="#sit-item-9">9 SAM-Wirkungsbereich</a>
  <a href="#sit-item-10">10 Flugplan-Wegpunkte</a>
  <a href="#sit-item-11">11 Erfassungsfenster</a>
  <a href="#sit-item-12">12 Täuschkörpervorrat</a>
  <a href="#sit-item-13">13 Cursorkoordinaten relativ zum Bullseye</a>
</div>

<a id="sit-item-1"></a>

### 1. Zulu-Zeit

Die Uhr oben links zeigt die Zulu-Zeit (UTC). `23:00:51Z` bedeutet hier 23:00:51 Uhr Zulu.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. Kompass

Der Kompass liefert eine Peilungsreferenz rund um das eigene Flugzeug. An seinen Richtungsmarkierungen lässt sich die Zielpeilung ablesen.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. Datenlink-Informationen

Die roten Symbole zeigen eine über den Datenlink gemeldete feindliche Formation. Ihre **gestrichelten Umrisse** kennzeichnen Datenlink-Informationen. Den Übergang von der Datenlink-Meldung zum korrelierten Radartrack zeigt [SIT zusammen mit dem VSD verwenden](#sit-workflow).

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. Ring für die halbe Anzeigereichweite

Der innere weiße Ring markiert die Hälfte der unter [Punkt 7](#sit-item-7) angezeigten Reichweite. Bei `80` in dieser zentrierten Ansicht entspricht er 40 Seemeilen Abstand vom eigenen Flugzeug.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. Waffeninformationen

Die Anzeige unten links fasst Waffeninformationen zusammen. Die [AA-Seite](#mpcd-aa) stellt die zugehörige Beladung nach Stationen dar.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. Geofence

Das gestrichelte Polygon ist ein Geofence, also ein in der Mission festgelegtes Gebiet. Seine Grenzen helfen, die taktische Lage den im [Tac Editor](#sit-mission) konfigurierten Gebieten zuzuordnen.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. Anzeigereichweite

In dieser zentrierten Ansicht gibt `80` oben rechts die Entfernung vom eigenen Flugzeug bis zum oberen Rand des Kompasses in Seemeilen an. Im [Decenter-Modus](#sit-decenter) wird das eigene Flugzeug weiter unten dargestellt; die Entfernungsreferenz dafür wird unten erläutert.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. Cursorkoordinaten relativ zum eigenen Flugzeug

Die cyanfarbene Anzeige gibt Peilung und Entfernung des Cursors vom eigenen Flugzeug an. `092-22` entspricht Peilung 092° in 22 Seemeilen Entfernung. Die Anzeige folgt dem Erfassungsfenster [11](#sit-item-11).

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. SAM-Wirkungsbereich

Die roten Kreise zeigen die Wirkungsbereiche von Boden-Luft-Raketensystemen (SAM). Auch diese Bereiche sind Geofences. Sie tragen hier die Bezeichnung `MEZ`, die für **Missile Engagement Zone** (Raketenwirkungsbereich) steht.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. Flugplan-Wegpunkte

Die verbundenen gelben Wegpunktsymbole zeigen die Wegpunktfolge im Flugplan der eigenen Formation.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. Erfassungsfenster

Die beiden senkrechten cyanfarbenen Striche bilden den Cursor beziehungsweise das Erfassungsfenster. **Gestrichelte Striche** bedeuten, dass das SIT-Fenster dem VSD-Cursor folgt. Wird die Cursorsteuerung SIT zugewiesen, werden die Striche **durchgezogen** und der TDC bewegt direkt das SIT-Fenster. Siehe [Cursorsteuerung und Anzeigemodi](#sit-modes).

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. Täuschkörpervorrat

Die grünen Angaben `C 120` und `F 60` zeigen einen Restvorrat von 120 Düppeln und 60 Fackeln.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. Cursorkoordinaten relativ zum Bullseye

Die gelbe Anzeige gibt Peilung und Entfernung des Cursors vom gemeinsamen Bezugspunkt **Bullseye** an. `121-30` entspricht Peilung 121° in 30 Seemeilen Entfernung vom Bullseye. Die cyanfarbene Anzeige oben rechts bezieht sich dagegen auf das eigene Flugzeug.

[Zurück zur Symbolübersicht](#sit-symbol-index)

<a id="sit-mission"></a>

## Missionsinformationen und Anzeigeoptionen

### Informationen aus dem Tac Editor

Ein Großteil der SIT-Informationen stammt aus den im Missionseditor konfigurierten Inhalten. Die Wegpunktfolge und Geofences des Beispiels lassen sich direkt mit der folgenden Missionskonfiguration vergleichen.

Passen Sie Missionen an die Leistungsfähigkeit Ihres Geräts an. Mehr Einheiten beanspruchen mehr Rechenleistung und Arbeitsspeicher.

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="Tac Editor mit Flugplan-Wegpunkten, Bullseye, Flugzeugen und Geofences" loading="lazy" /></a>
  <figcaption>Die Missionskonfiguration liefert den Hintergrund für die SIT-Anzeige.</figcaption>
</figure>

Zur Missionskonfiguration siehe [Tac Editor](/de/Docs/basics/tac-editor.html).

### SIT-Anzeigeinhalte auswählen

Öffnen Sie das [Funktionspanel der Touch UI](/de/Docs/aircraft/f15c/touch-ui.html#item-1) und wählen Sie **MAIN**. Die Zeile **SIT** steuert die Anzeigeinhalte und ob die Anzeigereichweite dem VSD folgt.

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="SIT-Bedienelemente WP, DLK, AUTO RANGE und GEO FENCE auf MAIN, markiert mit 1–4" loading="lazy" /></a>
</figure>

| Nr. | Bedienelement | Funktion |
| --- | --- | --- |
| 1 | `WP` | Flugplan-Wegpunkte ein- oder ausblenden. |
| 2 | `DLK` | Datenlink-Informationen ein- oder ausblenden. |
| 3 | `AUTO RANGE` | Festlegen, ob die SIT-Anzeigereichweite Änderungen der VSD-Anzeigereichweite folgt. |
| 4 | `GEO FENCE` | Geofences ein- oder ausblenden. |

[Zurück zur Seitenübersicht](#mpcd-index)

<a id="sit-modes"></a>

## Cursorsteuerung und Anzeigemodi

### Cursorsteuerung an SIT übergeben

<div class="mpcd-controls">
  <div>
    <p>Wenn der TDC dem VSD zugewiesen ist, betätigen Sie den <strong>Castle-Schalter nach OBEN</strong>, um SIT zum aktiven Display (SOI) zu machen. TDC-Bewegungen steuern dann nur das SIT-Erfassungsfenster; dessen zwei Striche werden <strong>durchgezogen</strong> dargestellt.</p>
    <p>Castle nach oben wechselt die Cursorsteuerung zwischen VSD und SIT. Folgt das Fenster wieder dem VSD, werden seine Striche gestrichelt dargestellt.</p>
    <p>Daneben sind die Touch-UI-Bedienelemente <a href="/de/Docs/aircraft/f15c/touch-ui.html#item-19">Castle-Schalter</a> und <a href="/de/Docs/aircraft/f15c/touch-ui.html#item-18">Cursor (TDC)</a> abgebildet.</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/de/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Castle-Schalter der Touch UI" loading="lazy" /></a>
      <figcaption>Castle-Schalter</figcaption>
    </figure>
    <figure>
      <a href="/de/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Cursor-/TDC-Bedienelement der Touch UI" loading="lazy" /></a>
      <figcaption>Cursor / TDC</figcaption>
    </figure>
  </div>
</div>

Die folgenden Aktionen nach rechts, links und unten gelten, **wenn SIT die Cursorsteuerung hat**.

| Castle-Richtung | SIT-Modus | Zweck |
| --- | --- | --- |
| Rechts | Decenter | Eigenes Flugzeug weiter unten darstellen, um davor mehr Platz zu schaffen. |
| Links | EXP | Lokalen Bereich bei 10 NM Anzeigereichweite vergrößern; den Ausschnitt mit dem Cursor verschieben. |
| Unten | Formation | Die eigene Formation bei festen 5 NM Anzeigereichweite betrachten. |

<a id="sit-decenter"></a>

### Decenter-Modus

Betätigen Sie bei aktiver SIT-Steuerung **Castle nach RECHTS**, um Decenter aufzurufen. Das eigene Flugzeug wird nach unten versetzt, sodass im oberen SIT-Bereich mehr Platz für die vorausliegende Lage bleibt.

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="Dezentriertes SIT mit durchgezogenem Erfassungsfenster 1 und eigenem Flugzeug 2" loading="lazy" /></a>
  <figcaption>1: durchgezogenes Erfassungsfenster unter SIT-Steuerung. 2: eigenes Flugzeug.</figcaption>
</figure>

In dieser Ansicht bedeutet `120` oben rechts **120 Seemeilen vom eigenen Flugzeug bis zum oberen Rand des großen Kreises**.

<a id="sit-exp"></a>

### EXP-Modus

Betätigen Sie bei aktiver SIT-Steuerung **Castle nach LINKS**, um EXP aufzurufen. Der Modus vergrößert einen Bereich bei **10 Seemeilen Anzeigereichweite**, oben rechts als `E10` angegeben. Mit dem Cursor verschieben Sie den Ausschnitt auf den zu betrachtenden Bereich.

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="SIT im EXP-Modus mit E10 und getrennten Datenlink-Flugzeugsymbolen" loading="lazy" /></a>
  <figcaption>EXP vergrößert einen kleinen Bereich, um einzelne Flugzeuge und nahe Geofences besser unterscheiden zu können.</figcaption>
</figure>

<a id="sit-flight"></a>

### Formationsmodus

Betätigen Sie bei aktiver SIT-Steuerung **Castle nach UNTEN**, um den Formationsmodus aufzurufen. Er verwendet **feste 5 Seemeilen Anzeigereichweite**, angezeigt als `F5`, zur Betrachtung der Positionen und Höhen der eigenen Formation.

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="SIT im Formationsmodus F5 mit Flügelmännern 2, 3 und 4 um das eigene Flugzeug" loading="lazy" /></a>
  <figcaption>Der Formationsmodus zeigt die Lage der eigenen Formation im Nahbereich.</figcaption>
</figure>

[Zurück zur Seitenübersicht](#mpcd-index)

<a id="sit-friendly"></a>

## Eigene Kräfte und Bullseye

SIT unterscheidet Flugzeuge der eigenen Formation von anderen Flugzeugen desselben **Package** (Missionsverbands). Das Beispiel zeigt außerdem, wie die Cursorposition relativ zum Bullseye abgelesen wird.

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT mit Package-Flugzeug 1, Bullseye 2, Flügelmännern 3 und eigenem Flugzeug 4" loading="lazy" /></a>
</figure>

| Nr. | Symbol | Bedeutung |
| --- | --- | --- |
| 1 | Grünes Flugzeug des Package | Ein weiteres Flugzeug desselben Package, hier ein Frühwarnflugzeug. Der Punkt in der Mitte bedeutet, dass das eigene Flugzeug dessen Datenlink-Beitrag empfängt. Die `15` darunter steht für 15.000 Fuß Höhe. |
| 2 | Gelber Bullseye | Gemeinsamer Bezugspunkt. Die gelbe Angabe `037-12` unten rechts bezeichnet den Cursor auf Peilung 037° in 12 Seemeilen Entfernung vom Bullseye. |
| 3 | Cyanfarbene Flügelmänner | Die drei anderen Flugzeuge der eigenen Formation. Die Zahlen in den Symbolen sind ihre Positionsnummern 2, 3 und 4; der Formationsführer trägt die 1. Die Zahlen darunter geben die Höhe in Tausend Fuß an. |
| 4 | Cyanfarbenes Eigenflugzeugsymbol | Position des eigenen Flugzeugs auf SIT. |

[Zurück zur Seitenübersicht](#mpcd-index)

<a id="sit-workflow"></a>

## SIT zusammen mit dem VSD verwenden

Ein zweckmäßiger Ablauf ist, mit den Datenlink-Informationen auf SIT den interessierenden Bereich zu finden und die Radarsuche auf VSD dorthin zu richten, um Ziele zu erfassen. Die Abbildungen zeigen den Übergang von Datenlink-Meldungen zu lokalen Radartracks und korrelierten Tracks.

### 1. Den über Datenlink gemeldeten Bereich durchsuchen

Richten Sie die Radarsuche auf VSD anhand der auf SIT gemeldeten Zielpositionen aus. Der **cyanfarbene Sektor auf dem linken SIT** zeigt Suchazimut und Suchentfernung des Radars. Vergleichen Sie ihn mit den gemeldeten Positionen und prüfen Sie auf VSD, ob die Höhenabdeckung die Zielhöhe einschließt.

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="SIT-Datenlink-Kontakte und cyanfarbener Radarsuchsektor neben VSD-Suchechos" loading="lazy" /></a>
  <figcaption>SIT links liefert die taktische Übersicht; VSD rechts zeigt Informationen zur Radarsuche.</figcaption>
</figure>

Zu Antennenelevation, Suchabdeckung und Erfassungsfenster siehe [Radar und VSD: LRS](/de/Docs/aircraft/f15c/radar.html#radar-lrs).

### 2. Lokal erfasste Tracks ablesen

Sobald das Radar Tracks erstellt, zeigt SIT sie hier als **weiße Quadrate mit durchgezogenem Umriss**. Der **durchgezogene Umriss** kennzeichnet einen vom eigenen Radar erfassten Track; **Weiß** bedeutet unbekannte Identität. Die roten gestrichelten Datenlink-Symbole bleiben in dieser Phase hinter den lokalen Tracks sichtbar.

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="Weiße lokale SIT-Tracks über roten gestrichelten Datenlink-Meldungen neben den zugehörigen VSD-Tracks" loading="lazy" /></a>
  <figcaption>1: hervorgehobene Waffenanzeige. 2: lokale Tracks auf SIT. 3: zugehörige Radartracks auf VSD.</figcaption>
</figure>

### 3. Korrelierte Tracks und PDT erkennen

Nach einiger Zeit werden die Trackdateien des eigenen Radars und die über Datenlink empfangenen Trackdateien zugeordnet und zu einem Track zusammengeführt. SIT zeigt dann ein **ausgefülltes Zielsymbol**. Im Beispiel sind die korrelierten feindlichen Flugzeuge rot.

Die mit 1 markierte **blaue gestrichelte Linie** zeigt zum **PDT (Primary Designated Target, primär zugewiesenes Ziel)**.

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="Ausgefüllte korrelierte feindliche SIT-Tracks und blaue gestrichelte Linie zum PDT neben VSD in TWS" loading="lazy" /></a>
  <figcaption>Die blaue gestrichelte Linie zeigt die Richtung zum primär zugewiesenen Ziel.</figcaption>
</figure>

### 4. Die Zielformation mit EXP genauer betrachten

Schalten Sie SIT in den [EXP-Modus](#sit-exp), um die einzelnen Flugzeuge der Zielformation zu betrachten. Die Vergrößerung trennt ihre Symbole und erleichtert den Vergleich ihrer Verteilung und Höhenangaben mit VSD.

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="EXP-Ansicht von vier ausgefüllten feindlichen Symbolen bei 1 und deren VSD-Tracks bei 2" loading="lazy" /></a>
  <figcaption>1: Details der Zielformation auf SIT im EXP-Modus. 2: zugehörige Tracks auf VSD.</figcaption>
</figure>

| Darstellung in diesen Beispielen | Bedeutung |
| --- | --- |
| Gestrichelter Zielumriss | Datenlink-Meldung. |
| Durchgezogener Zielumriss | Vom eigenen Radar erfasster Track. |
| Weißes Ziel | Unbekannte Identität. |
| Ausgefülltes Zielsymbol | Lokale und Datenlink-Tracks wurden korreliert. |
| Blaue gestrichelte Linie | Richtung zum PDT. |

[Zurück zur Seitenübersicht](#mpcd-index)

<a id="mpcd-aa"></a>

## AA-Waffenseite

### AA öffnen

Wenn **der TDC dem VSD zugewiesen ist**, betätigen Sie **Castle nach RECHTS**, um MPCD von SIT auf die **AA-Seite für Luft-Luft-Bewaffnung** umzuschalten. Castle nach links führt in diesem Steuerungskontext zu SIT zurück.

Die Castle-Funktion hängt davon ab, welches Display den Cursor steuert: Rechts öffnet AA bei VSD-Steuerung und wählt Decenter bei SIT-Steuerung.

### Beladung ablesen

AA stellt die Außenlasten um einen Flugzeugumriss dar und zeigt Kanonenmunition sowie Täuschkörpervorrat.

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="Zwei AA-Beispiele mit leerem Pylon, Außentank, Munition, Täuschkörpern und ausgewählter Station" loading="lazy" /></a>
  <figcaption>Die Markierung 3 erscheint zweimal: links bezeichnet sie die Kanonenmunition, rechts den Täuschkörpervorrat.</figcaption>
</figure>

| Markierung | Anzeige | Bedeutung |
| --- | --- | --- |
| 1, linkes Bild | `PYLON` | Leerer Pylon ohne Außenlast. |
| 2, linkes Bild | `FUEL` | Station mit einem externen Kraftstofftank. |
| 3, linkes Bild | `950` | Verbleibende Kanonenmunition: hier 950 Schuss. |
| 3, rechtes Bild | `CHF 120`, `FLR 60` | Verbleibende Täuschkörper: 120 Düppel und 60 Fackeln. |
| 4, rechtes Bild | Hervorgehobenes `AMRM / 120B` | Gewählte Station, mit grüner Hervorhebung und weißem Rahmen um die Waffenbezeichnung. |

### Mit der Flugzeugkonfiguration vergleichen

Die folgende **LOADOUT**-Konfiguration entspricht den AA-Beispielen oben. Vergleichen Sie Außenlasttypen und Munitionsmengen, um die Darstellung der Konfiguration auf MPCD nachzuvollziehen.

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="Passende LOADOUT-Konfiguration: 9M, 120B, 7M, Außentank, 950 Schuss, 120 Düppel und 60 Fackeln" loading="lazy" /></a>
</figure>

| LOADOUT-Konfiguration | Entsprechende AA-Anzeige |
| --- | --- |
| `9M` an Stationen 8A und 2A | Zwei Einträge `SRM / 9M`. |
| `120B` an Stationen 7 und 3 | Zwei Einträge `AMRM / 120B`. |
| `7M` an Stationen 6 und 4 | Zwei Einträge `MRM / 7M`. |
| `Tank` an Station 5 | Mittlerer Eintrag `FUEL`. |
| Gun `950`, Chaff `120`, Flare `60` | Kanonenmunition und Täuschkörpervorrat auf AA. |

[Zurück zur Seitenübersicht](#mpcd-index)
