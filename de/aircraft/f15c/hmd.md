<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# Helmvisier (HMD) der F-15C

Das HMD zeigt Flug-, Freundflugzeug-, Ziel- und Waffeninformationen im Sichtfeld an. Es kann außerdem die Radarantenne oder den Suchkopf einer Infrarotlenkwaffe ausrichten.

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 Einschalten und Selbsttest</a>
  <a href="#datalink">2 Anzeige befreundeter Flugzeuge über Datenlink</a>
  <a href="#sensor-cueing">3 Sensorausrichtung</a>
  <a href="#weapon-range">4 Ziel- und Waffenreichweite</a>
  <a href="#infrared-example">5 Vorführung eines an das HMD gekoppelten Infrarotsuchkopfs</a>
</div>

Klicke auf einen Screenshot, um ihn in Originalauflösung anzuzeigen.

<a id="power-on"></a>

## 1. Einschalten und Selbsttest

Wische auf dem Touch-Bedienelement `BRT` im HMD-Bedienbereich nach oben, um das HMD einzuschalten.

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="Bild 1: Zum Einschalten auf dem HMD-BRT-Bedienelement nach oben wischen" loading="lazy" />
  </a>
  <figcaption>Bild 1: Zum Einschalten auf dem HMD-BRT-Bedienelement nach oben wischen</figcaption>
</figure>

Nach dem Einschalten zeigt das HMD den Selbsttest mit `TESTING` an. Anschließend erscheint die normale Anzeige mit Fluginformationen wie Kurs, Fluggeschwindigkeit und Höhe.

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="Bild 2: HMD-Selbsttest beim Start" loading="lazy" />
  </a>
  <figcaption>Bild 2: HMD-Selbsttest beim Start</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="Bild 3: Normale HMD-Fluganzeige nach dem Selbsttest" loading="lazy" />
  </a>
  <figcaption>Bild 3: Normale HMD-Fluganzeige nach dem Selbsttest</figcaption>
</figure>

<a id="datalink"></a>

## 2. Anzeige befreundeter Flugzeuge über Datenlink

Bei aktiviertem Datenlink erscheinen die Positionen befreundeter Flugzeuge direkt im HMD. Bild 4 zeigt die Mitglieder des eigenen Schwarms auf der SIT-Seite; Bild 5 zeigt ihre Symbole im HMD. So lassen sich befreundete Flugzeuge beim Blick nach draußen lokalisieren.

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="Bild 4: Datenlinkinformationen der Schwarmmitglieder auf SIT" loading="lazy" />
  </a>
  <figcaption>Bild 4: Datenlinkinformationen der Schwarmmitglieder auf SIT</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="Bild 5: Positionen befreundeter Flugzeuge im HMD" loading="lazy" />
  </a>
  <figcaption>Bild 5: Positionen befreundeter Flugzeuge im HMD</figcaption>
</figure>

Informationen zum Datenlink und zu SIT-Symbolen findest du unter [MPCD](/de/Docs/aircraft/f15c/mpcd.html).

<a id="sensor-cueing"></a>

## 3. Sensorausrichtung

Eine der wichtigsten HMD-Funktionen ist die Ausrichtung von Sensoren, etwa der Radarantenne oder des Suchkopfs einer Infrarotlenkwaffe. Sowohl Boresight (BST) als auch Long-Range Boresight (LR BST) unterstützen die Radarantennenausrichtung über das HMD. Bild 6 zeigt die Verwendung im Boresight-Modus.

Innerhalb der Schwenkgrenzen der Radarantenne kann das HMD die Antenne auf ein anvisiertes Ziel ausrichten, um es zu erfassen und aufzuschalten. Die Antennenbewegung bleibt durch ihre mechanischen Schwenkgrenzen begrenzt.

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="Bild 6: Radarantennenausrichtung über das HMD im Boresight-Modus" loading="lazy" />
  </a>
  <figcaption>Bild 6: Radarantennenausrichtung über das HMD im Boresight-Modus</figcaption>
</figure>

Radarmodi und Bedienelemente zur automatischen Erfassung sind unter [AN/APG-63-Radar und VSD](/de/Docs/aircraft/f15c/radar.html) beschrieben.

<a id="weapon-range"></a>

## 4. Ziel- und Waffenreichweite

Das HMD zeigt auch Ziel- und Waffenreichweiteninformationen an. Bild 7 zeigt einen Zielrahmen und eine Entfernungsskala, die der Pilot auch beim Blick außerhalb des HUD ablesen kann.

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="Bild 7: Ziel- und Waffenreichweiteninformationen im HMD" loading="lazy" />
  </a>
  <figcaption>Bild 7: Ziel- und Waffenreichweiteninformationen im HMD</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. Vorführung eines an das HMD gekoppelten Infrarotsuchkopfs

Ein Beispiel für die Ausrichtung eines Infrarot-Lenkwaffensuchkopfs über das HMD zeigt die [Vorführung eines an das HMD gekoppelten Infrarotsuchkopfs (ab Sekunde 7)](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s).
