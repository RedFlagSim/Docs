---
title: AN/APG-63 Radar und VSD
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

## Langstreckensuche (LRS)

LRS sucht vor der Zielaufschaltung nach entfernten Luftzielen und liefert Peilung und Entfernung zum eigenen Flugzeug. Üblich ist eine VSD-Skala von **40–80 Seemeilen**. Das ist der Darstellungsbereich, keine garantierte Erfassungsreichweite für jedes Ziel.

Antennenhöhe und Azimutbereich werden auf den erwarteten Zielraum eingestellt. Einen Kontakt mit dem [Erfassungstor](#lrs-item-9) umrahmen und manuell erfassen; bei Erfolg folgt STT. LRS lokalisiert Ziele, nachfolgende Verfolgungsmodi verfolgen sie gezielt.

Horizontal wird der Azimut dargestellt, vertikal die nach oben zunehmende Entfernung.

Einmaliges Tippen auf **AA (automatische Erfassung)** wechselt von Radar-Standby zu LRS. Erneutes Tippen schaltet zurück in Standby.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Langstreckensuche (LRS)">

Weitere Bedienung: [Touch UI: automatische Erfassung](/de/Docs/aircraft/f15c/touch-ui.html#item-28).

### Abtastzeilen

Die anfängliche LRS-Suche verwendet **120° Azimut und 6 Zeilen**.

Eine Zeile (bar) ist ein horizontaler Antennendurchlauf bei einer bestimmten Elevation. Mehrere Durchläufe auf unterschiedlichen Höhen erfassen ein Höhenvolumen; sechs Zeilen bedeuten sechs Durchläufe. Der Zeilenabstand hängt vom Suchentfernungsbereich ab und ist nicht konstant.

Die Zeilenzahl lässt sich auf der **MAIN-Seite** unter [Touch UI: 1. Funktionspanel](/de/Docs/aircraft/f15c/touch-ui.html#item-1) wählen.

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="Abtastzeilen">
</a>

Bild anklicken: Originalauflösung. Nummer anklicken: zugehörige Erklärung.

<a id="lrs-index"></a>

### Nummerierte Symbole

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 Radarechos</a>
  <a href="#lrs-item-2">2 Höhenabdeckung</a>
  <a href="#lrs-item-3">3 Antennenelevationsanzeige</a>
  <a href="#lrs-item-4">4 Echoverlauf</a>
  <a href="#lrs-item-5">5 Abtastzeilen und PRF</a>
  <a href="#lrs-item-6">6 Bullseye-Koordinaten des Erfassungstors</a>
  <a href="#lrs-item-7">7 Eigene Geschwindigkeit über Grund</a>
  <a href="#lrs-item-8">8 Maximale VSD-Darstellungsentfernung</a>
  <a href="#lrs-item-9">9 Erfassungstor</a>
  <a href="#lrs-item-10">10 Lokale Horizontreferenz</a>
  <a href="#lrs-item-11">11 Bullseye-Referenz</a>
  <a href="#lrs-item-12">12 Navigationspunkt 3</a>
  <a href="#lrs-item-13">13 Antennenazimutanzeige</a>
  <a href="#lrs-item-14">14 Azimut-Suchgrenzen</a>
  <a href="#lrs-item-15">15 Eigene wahre Fluggeschwindigkeit</a>
</div>

<a id="lrs-item-1"></a>

### 1. Radarechos

Kurze grüne Blöcke sind erfasste Suchkontakte. Ihre Position zeigt Peilung und Entfernung, bedeutet aber weder Aufschaltung noch eine Freund-Feind-Klassifizierung anhand der Form.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-2"></a>

### 2. Höhenabdeckung

Zwei Kreise mit Zahlen links zeigen die obere und untere Suchgrenze an der Entfernung des Erfassungstors in Tausend Fuß. `29` und `-2` entsprechen etwa 29.000 und -2.000 Fuß. Negative Werte beschreiben Suchgeometrie, keine unterirdischen Ziele. Nach Änderungen an Torentfernung oder Elevation erneut ablesen.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-3"></a>

### 3. Antennenelevationsanzeige

Die Winkelmarke links zeigt die Antennenelevation. Zusammen mit Nummer 2 lesen; sie ist keine Zielhöhenmarkierung.

Sechs Skalenabschnitte decken +60° bis -60° ab. Die Mitte entspricht 0°, darüber ist die Elevation positiv, darunter negativ.

Die Elevation wird mit dem **ELE-Drehregler** eingestellt. Bei Touch-Bedienung den abgebildeten Regler nutzen und Winkelmarke sowie Höhenabdeckung beobachten.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="3. Antennenelevationsanzeige">

Siehe [Touch UI: Antennenelevation](/de/Docs/aircraft/f15c/touch-ui.html#item-25).

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-4"></a>

### 4. Echoverlauf

Frühere Kontaktpositionen zeigen die Bewegung über mehrere Suchdurchläufe. Historische Positionen von aktuellen Echos unterscheiden; nicht jeder Block ist ein eigenes Ziel.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-5"></a>

### 5. Abtastzeilen und PRF

`6HI` zeigt Zeilen- und Impulsfolgefrequenzstatus (PRF); `HI` steht für hohe PRF.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-6"></a>

### 6. Bullseye-Koordinaten des Erfassungstors

Diese Anzeige gibt Peilung und Entfernung des [Erfassungstors (9)](#lrs-item-9) vom gemeinsamen Bullseye aus an. `310-12` bedeutet 310° und 12 Seemeilen von Bullseye.

Im künftigen Mehrspielermodus dienen diese Koordinaten zur Positionsmeldung an Mitspieler. Das Tor auf die zu meldende Position bewegen und Bullseye-Koordinaten ablesen.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-7"></a>

### 7. Eigene Geschwindigkeit über Grund

`G 589` bedeutet 589 Knoten Geschwindigkeit über Grund.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-8"></a>

### 8. Maximale VSD-Darstellungsentfernung

`80` oben rechts steht für eine Darstellung bis 80 Seemeilen, nicht für Zielentfernung oder maximale Radar-Erfassungsreichweite.

Das [Erfassungstor](#lrs-item-9) über den Rand bewegen, um die Skala zu ändern:

- Über den oberen Rand: Darstellungsentfernung erhöhen.
- Unter den unteren Rand: Darstellungsentfernung verringern.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-9"></a>

### 9. Erfassungstor

Zwei senkrechte Linien bilden das Tor zum Wählen einer Position oder eines Rohkontakts. Seine Entfernung bestimmt auch den Bezug der Höhenabdeckung aus Nummer 2.

Das Tor mit **Cursor (TDC-Steuerung)** rechts im Touch UI bewegen. Über die Ränder hinaus werden auch [Entfernungsskala](#lrs-item-8) und [Azimutabdeckung](#lrs-item-14) geändert.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="9. Erfassungstor">

Siehe [Touch UI: Cursor](/de/Docs/aircraft/f15c/touch-ui.html#item-18).

Manuelle Erfassung:

1. Einen Rohkontakt mit dem Tor umrahmen.
2. Rechts zweimal auf Cursor tippen, um die Erfassung zu starten.
3. Bei Erfolg erfolgt automatisch **STT (Einzelzielverfolgung)**.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-10"></a>

### 10. Lokale Horizontreferenz

Die waagerechte Linie mit abgewinkelten Enden ist die lokale Horizontreferenz. In der Mitte zeigt sie Horizontalflug, ihre Drehung zeigt die Rollbewegung. So bleibt beim Radarlesen eine Lagereferenz erhalten.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-11"></a>

### 11. Bullseye-Referenz

Bullseye ist der gemeinsame Bezug für Peilungs- und Entfernungsmeldungen. Die Torkoordinaten werden unter [Nummer 6](#lrs-item-6) erklärt.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-12"></a>

### 12. Navigationspunkt 3

Das offene Dreieck markiert Navigationspunkt 3; `3` ist seine Nummer.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-13"></a>

### 13. Antennenazimutanzeige

Die untere Winkelmarke zeigt den aktuellen Antennenazimut, nicht den Zielkurs. Sie ist von den runden Bereichsgrenzen zu unterscheiden.

Während der Suche bewegt sie sich mit der Antenne nach links und rechts und zeigt deren momentane Richtung.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-14"></a>

### 14. Azimut-Suchgrenzen

Die beiden unteren Kreise begrenzen die Suchbreite; der Pfeil zeigt auf die rechte Grenze. Sie sind keine Flugzeugsymbole.

Das [Tor](#lrs-item-9) seitlich über den Rand bewegen:

- Links hinaus: Suchbereich verengen.
- Rechts hinaus: Suchbereich erweitern.

Der Bereich reicht von **10°** bis **120°**. Dies verändert die Azimutbreite, nicht die Entfernungsskala aus Nummer 8.

[Zurück zum Nummernindex](#lrs-index)

<a id="lrs-item-15"></a>

### 15. Eigene wahre Fluggeschwindigkeit

`T 589` bedeutet 589 Knoten wahre Fluggeschwindigkeit relativ zur Luft. Sie unterscheidet sich von der Geschwindigkeit über Grund (7), auch wenn beide hier gleich sind.

[Zurück zum Nummernindex](#lrs-index)

## Einzelzielverfolgung (STT)

STT verfolgt ein Ziel konzentriert und liefert laufend Position, Bewegung und Waffendaten. In LRS einen Rohkontakt umrahmen und Cursor doppelt antippen; erfolgreiche Erfassung aktiviert STT. Siehe [Erfassungstor](#lrs-item-9).

Anders als die Flächensuche LRS verfolgt STT das gewählte Ziel für Kanone und Flugkörper. Im Spiel erfordert AIM-7 STT beim Start und anschließend Radarbeleuchtung. STT unterstützt auch AIM-120, dessen Lenkbedingungen aber anders sind.

STT löst beim Gegner eine Radar-Aufschaltwarnung aus. Besonders nahe Ziele können Düppel einsetzen oder notchen, um die Aufschaltung zu brechen oder die Abschussbedingungen zu verschlechtern. Manöver, Verfolgungsstatus und DLZ weiter beobachten.

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="Einzelzielverfolgung (STT)">
</a>

Bild 1: Ziel außerhalb der Maximalreichweite, kleiner ASE-Kreis.

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 Wahre Zielgeschwindigkeit</a>
  <a href="#stt-item-2">2 H/T-Aspekt und Zielkurs</a>
  <a href="#stt-item-3">3 Zielhöhe</a>
  <a href="#stt-item-4">4 PDT — primär zugewiesenes Ziel</a>
  <a href="#stt-item-5">5 Steuerpunkt</a>
  <a href="#stt-item-6">6 ASE-Kreis</a>
  <a href="#stt-item-7">7 Annäherungsgeschwindigkeit</a>
  <a href="#stt-item-8">8 Zielentfernungsanzeige</a>
  <a href="#stt-item-9">9 Rmax — maximale Reichweite</a>
  <a href="#stt-item-10">10 Optimierte maximale Reichweite</a>
  <a href="#stt-item-11">11 RTR-Reichweitenreferenz</a>
  <a href="#stt-item-12">12 Mindestreichweite</a>
  <a href="#stt-item-13">13 Flugkörperzeit</a>
  <a href="#stt-item-14">14 Zielpeilung und Entfernung</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="Einzelzielverfolgung (STT)">
</a>

Bild 2: Ziel innerhalb der Maximalreichweite; ASE beginnt sich zu vergrößern.

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 Zielaspektwinkel</a>
  <a href="#stt-item-16">16 Vergrößerter ASE-Kreis</a>
  <a href="#stt-item-17">17 Entfernung und Annäherung in Bild 2</a>
</div>

Bilder lassen sich in Originalauflösung öffnen, Nummern führen zu Erklärungen. In beiden Beispielen ist **AIM-7 gewählt**. Gemeinsame Symbole wie Gitter, Horizont und Navigationspunkte siehe LRS. `40` in Bild 1 steht für 40 Seemeilen, `20` in Bild 2 für 20 Seemeilen.

<a id="stt-item-1"></a>

### 1. Wahre Zielgeschwindigkeit

`397` oben links bedeutet 397 Knoten wahre Zielgeschwindigkeit, nicht Eigengeschwindigkeit. `577` in Bild 2 bedeutet 577 Knoten.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-2"></a>

### 2. H/T-Aspekt und Zielkurs

`H` bedeutet **HOT**: die Zielnase zeigt zum eigenen Flugzeug, bei einem Gegner eine gefährliche Lage. `T` zeigt die abgewandte Richtung. Dies ist relativer Aspekt, keine Freund-Feind-Erkennung.

Die folgende `313` ist der Zielkurs 313°, nicht der eigene Kurs. H/T beschreibt die relative Ausrichtung. Links-/Rechts-Aspektwinkel siehe [Nummer 15](#stt-item-15).

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-3"></a>

### 3. Zielhöhe

`13-4` links bedeutet 13.400 Fuß MSL über dem mittleren Meeresspiegel.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT — primär zugewiesenes Ziel

Der fünfzackige Stern ist das PDT im Azimut-Entfernungsfeld. Die lange Linie davor zeigt die Richtung seiner Geschwindigkeit.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-5"></a>

### 5. Steuerpunkt

Der helle Punkt ist der Steuerpunkt. Beim Abschuss den ASE-Kreis (6) darum legen, um nötige Flugkörperkurven und Energieverlust zu verringern. Die Logik entspricht dem [HUD-Steuerpunkt](/de/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2).

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-6"></a>

### 6. ASE-Kreis

ASE ist der zulässige Steuerfehler. Erst mit der Vergrößerung beginnen die Abschussbedingungen erfüllt zu sein. Ein Punkt innerhalb eines kleinen Kreises genügt dafür nicht.

Auch nach der Vergrößerung Steuerpunkt, Entfernung und Lenkbedingungen berücksichtigen. Siehe [ASE im HUD](/de/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1).

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-7"></a>

### 7. Annäherungsgeschwindigkeit

`1006` ist die Annäherung zwischen eigenem Flugzeug und Ziel in Knoten: Entfernungsänderung, nicht Ziel-Eigengeschwindigkeit.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-8"></a>

### 8. Zielentfernungsanzeige

`>` rechts zeigt die Zielposition auf der aktuellen `40`-Seemeilen-Skala. Daneben ist `1006` die Annäherung, nicht Entfernung.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax — maximale Reichweite

Der erste, oberste Strich ist Rmax, die unter aktuellen Bedingungen berechnete maximale Reichweite.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-10"></a>

### 10. Optimierte maximale Reichweite

Der zweite Strich zeigt die optimierte maximale Reichweite.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-11"></a>

### 11. RTR-Reichweitenreferenz

Die obere Rechteckkante ist RTR (Range Turn and Run), die Reichweite unter Berücksichtigung eines abdrehenden, fliehenden Ziels, oft No-Escape-Reichweite genannt. Sie zeigt günstige Bedingungen, keine Treffergarantie.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-12"></a>

### 12. Mindestreichweite

Die untere Rechteckkante ist RMin. Die Zielentfernung damit vergleichen: Näher bedeutet nicht immer besser.

Die Marken 9, 10, 11 und 12 bilden die DLZ (dynamische Abschusszone). Sie hängt unter anderem von eigener Höhe, Höhenunterschied, Zielrichtung, Zielgeschwindigkeit und eigener Geschwindigkeit ab.

Vor dem Abschuss alles abwägen. Unter Wahrung der eigenen Sicherheit und Mindestreichweite möglichst nahe herankommen.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-13"></a>

### 13. Flugkörperzeit

`53SEC` prognostiziert einen Treffer 53 Sekunden nach einem jetzigen Start anhand der aktuellen Geometrie. Es ist kein Countdown eines bereits gestarteten Flugkörpers.

Die Prognose gilt bei unveränderter Zielbewegung ohne Kurve. Kurs- oder Geschwindigkeitsänderungen verändern die tatsächliche Flugzeit.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-14"></a>

### 14. Zielpeilung und Entfernung

`129-21` unten rechts bedeutet 129° und 21 Seemeilen vom eigenen Flugzeug. Nicht mit Bullseye-Koordinaten verwechseln.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-15"></a>

### 15. Zielaspektwinkel

`13L` in Bild 2 bedeutet 130° nach links gerichtete Zielnase; `13R` entspräche 130° nach rechts. Zahlen sind Zehnergrade, `L`/`R` stehen für links/rechts.

Das ist relativer Aspekt, kein Kurs von 130°. Erst `351` danach gibt den Zielkurs 351° an. Zusammen mit [H/T und Kurs (2)](#stt-item-2) lesen.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-16"></a>

### 16. Vergrößerter ASE-Kreis

In Bild 1 bleibt ASE außerhalb der Reichweite klein. Bild 2 zeigt die Vergrößerung beim Eintritt in die berechnete Maximalreichweite. Wie bei [Nummer 6](#stt-item-6) Steuerpunkt und Reichweitenmarken beachten; AIM-7 verlangt weiter Verfolgung und Beleuchtung.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-item-17"></a>

### 17. Entfernung und Annäherung in Bild 2

Das `>` entspricht [Nummer 8](#stt-item-8). Hier die 20-Seemeilen-Skala nutzen, nicht die 40-Seemeilen-Skala von Bild 1.

`915` bedeutet 915 Knoten Annäherung, wie bei [Nummer 7](#stt-item-7).

[Zurück zum Nummernindex](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="17. Entfernung und Annäherung in Bild 2">
    </a>
    <figcaption>Bild 3 · RTR: dreieckiger Abschusshinweis</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="17. Entfernung und Annäherung in Bild 2">
    </a>
    <figcaption>Bild 4 · Unter Mindestreichweite: Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### Bild 3 · RTR: dreieckiger Abschusshinweis

Innerhalb RTR erscheint unten ein Dreieck für günstige Abschussbedingungen. Es steht mittig links von `8SEC`.

ASE, Steuerpunkt und Mindestreichweite weiter prüfen und AIM-7-Verfolgung und Beleuchtung erhalten. Das Dreieck garantiert keinen Treffer.

[Zurück zum Nummernindex](#stt-index)

<a id="stt-break-x"></a>

### Bild 4 · Unter Mindestreichweite: Break X

Unter der Mindestreichweite erscheint zentral **Break X**: nicht schießen.

Der Flugkörper kann möglicherweise nicht rechtzeitig beschleunigen. Selbst bei einem Treffer könnte das eigene Flugzeug die Splitterzone durchfliegen. Aufschaltung und Nähe genügen nicht; Mindestreichweite beachten.

[Zurück zum Nummernindex](#stt-index)

## Verfolgung während der Suche (TWS)

TWS hält mehrere Zielspuren bei fortlaufender Suche. Es arbeitet vorwiegend innerhalb 40 Seemeilen und unterstützt hauptsächlich AIM-120.

Für hohe Aktualisierungsrate begrenzt TWS Zeilen-/Azimutkombinationen. Mehr Breite bedeutet weniger Zeilen. Die Azimutwahl stellt die Zeilenzahl automatisch ein.

| Azimutabdeckung | Automatische Zeilenzahl |
| --- | --- |
| 60° | 2 Zeilen |
| 30° | 4 Zeilen |
| 15° | 6 Zeilen |

### TWS aufrufen

Zwei Möglichkeiten:

1. **Mit aufgeschaltetem Ziel:** aus STT AA nach unten bewegen.
2. **Ohne Aufschaltung:** Tor auf leere Fläche setzen, TDC (Cursor rechts) doppelt antippen und gleichzeitig rasch AA nach unten bewegen.

Siehe [Cursor](/de/Docs/aircraft/f15c/touch-ui.html#item-18) und [automatische Erfassung](/de/Docs/aircraft/f15c/touch-ui.html#item-28).

Da TWS auch andere Bereiche absucht, werden Ziele seltener aktualisiert als in STT. Bei großer Entfernung ist zudem die Auflösung begrenzt. Hohe Lastvielfache, Düppel oder das Auflösen einer zuvor als Einzelziel erfassten Formation können die Zuordnung neuer Echos zu Spuren verhindern und zum Spurverlust führen.

### TWS verlassen

- **Mit PDT:** **AA Down** wechselt auf dieses PDT in STT und verwirft alle anderen Spuren.
- **Ohne PDT:** einmal **AA** antippen, um LRS aufzurufen.

### Zielspurarten

Unterschieden werden nicht zugewiesene, primär und sekundär zugewiesene Ziele. Die folgenden Kapazitäten gelten für dieses Spiel.

Spuren entstehen automatisch. Neue Ziele sind zunächst Quadrate ohne Geschwindigkeitsvektor. Nach ausreichend weiteren Messungen wird die Spur etabliert und der Vektor angezeigt.

| Art | Bedeutung | Kapazität |
| --- | --- | --- |
| NDT (Non-designated Target) | Weder primär noch sekundär zugewiesen | Bis 16 |
| PDT (Primary Designated Target) | Aktuelles Hauptziel für Beobachtung und Bekämpfung | Eines |
| SDT (Secondary Designated Target) | Sekundärziel für spätere Auswahl | Bis 7 |

Dies ist Zuweisungsstatus, keine Freund-Feind-Kennung. Ohne PDT: NDTWS; mit PDT: DTWS.

<a id="tws-designation"></a>

### PDT zuweisen und wechseln

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="PDT zuweisen und wechseln">

Nach Aufbau der Spuren mit **Coolie Up (nach oben)** zuweisen:

- **Automatisch:** ein PDT und SDTs werden gewählt.
- **Zyklisch:** weitere Eingaben wechseln das PDT durch die SDTs.
- **Manuell:** Tor über NDT oder SDT setzen und mit Coolie Up zum PDT machen.

Es gibt nur ein PDT. Ein neues PDT stuft das vorige zu SDT zurück.

**Coolie Down** löscht alle Zuweisungen, macht PDT/SDTs zu NDTs und kehrt zu NDTWS zurück.

Siehe [Touch UI: Coolie](/de/Docs/aircraft/f15c/touch-ui.html#item-26).

### Mehrzielbekämpfung mit AIM-120

In TWS kann nur das aktuelle PDT beschossen werden. AIM-120 unterstützt mehrere gleichzeitige Bekämpfungen durch PDT-Wechsel zwischen Starts:

1. AIM-120 auf das PDT starten.
2. Nächstes PDT zyklisch mit Coolie Up oder manuell mit dem Tor wählen.
3. AIM-120 auf das neue PDT starten.

Das frühere Ziel erhält als SDT weiterhin Datenlink-Unterstützung für den gestarteten Flugkörper. Der PDT-Wechsel beendet diese nicht; die betreffenden Spuren müssen erhalten bleiben.

<a id="tws-ndt-index"></a>

### Bild 1 · Nicht zugewiesene Ziele

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="Bild 1 · Nicht zugewiesene Ziele">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 Ziel ohne etablierte Spur</a>
  <a href="#tws-ndt-item-2">2 NDT — nicht zugewiesenes Ziel</a>
  <a href="#tws-ndt-item-3">3 TWS-Statusanzeige</a>
</div>

Bild anklicken: Originalauflösung. Nummer anklicken: zugehörige Erklärung.

<a id="tws-ndt-item-1"></a>

#### 1. Ziel ohne etablierte Spur

Der Pfeil zeigt ein frisch erfasstes, gefülltes Quadrat ohne Vektor. Weitere Suchdurchläufe liefern die nötigen Informationen für Spur und Vektor aus Nummer 2.

[Zurück zum Nummernindex](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT — nicht zugewiesenes Ziel

Ein gefülltes Symbol mit Vektor ist eine etablierte NDT-Spur; die Linie zeigt die Bewegung. Die Spur entsteht automatisch und ist weder PDT noch SDT. Bis 16 NDTs werden unterstützt.

[Zurück zum Nummernindex](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. TWS-Statusanzeige

`2TWSM` unten links zeigt den Radarstatus: `TWS` ist Verfolgung während der Suche, `M` mittlere PRF (MPRF), die vorangestellte Zahl die Zeilenanzeige.

[Zurück zum Nummernindex](#tws-ndt-index)

<a id="tws-designated-index"></a>

### Bild 2 · Primär- und Sekundärziele

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="Bild 2 · Primär- und Sekundärziele">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT — sekundär zugewiesenes Ziel</a>
  <a href="#tws-designated-item-2">2 PDT — primär zugewiesenes Ziel</a>
  <a href="#tws-designated-item-3">3 Höhe des Ziels im Erfassungstor</a>
  <a href="#tws-designated-item-4">4 AIM-120-Aktivierungsentfernung</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT — sekundär zugewiesenes Ziel

Ein offenes Symbol mit Vektor ist ein SDT: zugewiesen, aber nicht aktuelles PDT. Das Spiel erlaubt bis 7 SDTs.

[Zurück zum Nummernindex](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT — primär zugewiesenes Ziel

Der fünfzackige Stern ist das PDT; die lange Linie zeigt die Geschwindigkeitsrichtung. Hier liegt das Tor darüber. VSD-Zieldaten und Waffenberechnungen beziehen sich auf dieses Hauptziel.

Nur ein PDT ist möglich; die anderen zugewiesenen Ziele bleiben SDTs. Der Unterschied ist Priorität, nicht STT-Aufschaltung.

[Zurück zum Nummernindex](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. Höhe des Ziels im Erfassungstor

Das kleine äußere Quadrat markiert die Höhe des Ziels im Tor. Zwischen Suchober- und -untergrenze bedeutet Abdeckung; außerhalb muss die Elevation angepasst werden.

Vom Rohkontakt bis zu NDT, SDT oder PDT lässt sich die Höhe durch Umrahmen mit dem Tor ablesen.

[Zurück zum Nummernindex](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. AIM-120-Aktivierungsentfernung

Der offene Kreis rechts markiert die Aktivierungsentfernung. Ist das Ziel näher, aktiviert AIM-120 direkt beim Start sein Radar und erfasst aktiv.

[Zurück zum Nummernindex](#tws-designated-index)

### Reichweiten- und RTR-Hinweise

Bild für Originalauflösung anklicken.

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="Reichweiten- und RTR-Hinweise">
    </a>
    <figcaption>Bild 3 · In Reichweite: gestricheltes ASE wächst</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="Reichweiten- und RTR-Hinweise">
    </a>
    <figcaption>Bild 4 · RTR: sechszackiger Stern und blinkendes ASE</figcaption>
  </figure>
</div>

**Bild 3:** Innerhalb der Flugkörperreichweite wächst der gestrichelte ASE-Kreis; Abschussbedingungen beginnen erfüllt zu sein.

**Bild 4:** RTR zeigt unten mittig einen sechszackigen Stern und blinkendes ASE für günstige Bedingungen. Der Screenshot zeigt die ausgeblendete Blinkphase.

### Flugkörperunterstützung nach dem Start

Nach AIM-120-Start in TWS hält das Radar die Spur und sendet Datenlink-Aktualisierungen. Den Status besonders vor Radaraktivierung und eigener Zielerfassung des Flugkörpers beobachten.

**PDT-Wechsel beendet die Unterstützung nicht automatisch.** Ein neues PDT kann gewählt und beschossen werden. Das vorherige wird SDT und liefert weiter Aktualisierungen, solange seine Spur besteht.

Die unterstützten Ziele im Suchvolumen halten. Spurverlust durch Manöver, Störung oder Verlassen des Bereichs verhindert neue Zieldaten. STT verwirft andere Spuren; vor einem Wechsel die Wirkung auf bereits gestartete Flugkörper berücksichtigen.

Nach Radaraktivierung erfasst AIM-120 selbst. Innerhalb der [Aktivierungsentfernung](#tws-designated-item-4) beim Start beginnt dies sofort.

<a id="tws-missile-support-index"></a>

Bild anklicken: Originalauflösung. Nummer anklicken: zugehörige Erklärung.

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="Flugkörperunterstützung nach dem Start">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 Aktivierungsfortschritt</a>
  <a href="#tws-missile-support-item-2">2 Markierung eines gestarteten Flugkörpers</a>
  <a href="#tws-missile-support-item-3">3 Restzeit bis zur Aktivierung</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. Aktivierungsfortschritt

Der kurze Strich bewegt sich zum Punkt 2. Beim Erreichen sollte der Flugkörper laut Berechnung der Startbedingungen sein Radar aktiviert und die aktive Suche begonnen haben.

[Zurück zum Nummernindex](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. Markierung eines gestarteten Flugkörpers

Der Punkt zeigt eine auf dieses Ziel gestartete AIM-120 mit laufender Datenlink-Unterstützung. Er ist auch das Ziel von Marke 1 zum geschätzten Aktivierungszeitpunkt.

[Zurück zum Nummernindex](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. Restzeit bis zur Aktivierung

`A 9` oben rechts bedeutet geschätzt 9 Sekunden bis Radaraktivierung und aktiver Suche. Der Countdown ergänzt Marke 1.

[Zurück zum Nummernindex](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### Anzeige nach Aktivierung

Nach Aktivierung wird **A zu T**, der geschätzten Restzeit bis zum Zusammentreffen. `T 17` prognostiziert Abfangpunkt und Treffer in 17 Sekunden.

Bild anklicken: Originalauflösung. Nummer anklicken: zugehörige Erklärung.

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="Anzeige nach Aktivierung">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 Aktivmarkierung</a>
  <a href="#tws-missile-active-item-2">2 Flugfortschrittsmarkierung</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. Aktivmarkierung

Marke 1 zeigt, dass der auf dieses Ziel gestartete Flugkörper sein Radar aktiviert hat und aktiv sucht.

[Zurück zum Nummernindex](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. Flugfortschrittsmarkierung

Das X wandert zum Zielstern und stellt den Anflug dar. Zum vorausberechneten Abfangzeitpunkt erreicht es den Stern.

Zeit und Fortschritt basieren auf Startbedingungen. Zielmanöver und Gegenmaßnahmen verlängern meist die reale Flugzeit. Countdown-Ende oder Ankunft des X bedeuten nur den berechneten Abfangzeitpunkt, keinen bestätigten Treffer.

[Zurück zum Nummernindex](#tws-missile-active-index)

## Nahbereichs-Autoerfassung und Flood

Autoerfassung und Flood-Beleuchtung beziehen sich auf die **Flugzeuglängsachse** und folgen der Fluglage. LRS und TWS nutzen die **kardanisch stabilisierte Horizontalebene**.

Autoerfassung dient hauptsächlich **WVR (Luftkampf in Sichtweite)**. Langstrecken-Boresight erfasst innerhalb **40 Seemeilen**, die anderen automatischen Modi innerhalb **10 Seemeilen**.

### Moduswahl

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Moduswahl">

**AA nach oben** wählt nacheinander:

1. **SS (Supersearch)**.
2. **VS (Vertikalsuche)**.
3. **Boresight**.
4. **Langstrecken-Boresight**.

**AA nach oben halten** aktiviert **Flood**.

### SS — Supersearch

Der erste AA-Aufwärtsbefehl aktiviert SS. Der große HUD-Kreis zeigt **20°** Suchbereich; Ziele darin können innerhalb **10 Seemeilen** automatisch erfasst werden.

Die Elevation verschiebt den Suchbereich um bis zu **10°** nach oben oder unten. Die Bilder zeigen mittige, obere und untere Lage; der Kreis kann dabei teilweise außerhalb des HUD liegen.

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>Mittig</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>10° nach oben</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS — Supersearch" loading="lazy">
    <figcaption>10° nach unten</figcaption>
  </figure>
</div>

### Vertikalsuche

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="Vertikalsuche" loading="lazy">
  <figcaption>VS — Vertikalsuche</figcaption>
</figure>

Sucht einen hohen, schmalen Bereich über der Nase, nützlich nach der Begegnung, wenn ein Ziel darüber hinwegfliegt.

### Boresight

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="Boresight" loading="lazy">
  <figcaption>BST — Boresight</figcaption>
</figure>

Sucht einen schmalen Kegel nach vorne und erfasst das erste eintretende Ziel.

### Langstrecken-Boresight

LR BST arbeitet wie BST, aber mit kleinerem HUD-Kreis und automatischer Erfassung bis **40 Seemeilen**. Das Ziel im kleinen Kreis halten.

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="Langstrecken-Boresight" loading="lazy">
  <figcaption>LR BST — Langstrecken-Boresight</figcaption>
</figure>

### Flood

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood" loading="lazy">
  <figcaption>HUD im Flood-Modus</figcaption>
</figure>

Flood bietet breitstrahlige Beleuchtung für AIM-7. Das Ziel bis zum Treffer im Beleuchtungskreis halten.

In Flood erscheint links oben `FLOOD`, das Entfernungsgitter entfällt. Horizontreferenz, Tor und Navigationspunkte bleiben sichtbar.

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood">
  </a>
  <figcaption>VSD in Flood (Originalbild anklicken)</figcaption>
</figure>

## Praktischer Ablauf

1. Fernlage mit LRS erfassen.
2. Elevation der Zielhöhe anpassen.
3. Mehrere Ziele mit TWS priorisieren.
4. STT für konzentrierte Verfolgung oder stabile Beleuchtung nutzen.
5. Nach der Begegnung Autoerfassung verwenden.
