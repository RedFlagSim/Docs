<script setup>
import rwrSearchImage from '/assets/F-15C/RWR/search-new-signal.png'
import rwrLockImage from '/assets/F-15C/RWR/lock-priority.png'
import rwrThreatImage from '/assets/F-15C/RWR/threat-levels.png'
</script>

# F-15C Defensivsysteme

Die Defensivsysteme der F-15C verbinden aktive elektronische Störmaßnahmen, passive Radarwarnung sowie Düppel und Fackeln. Der Pilot muss die angezeigten Bedrohungen verstehen, über den Störsendereinsatz entscheiden und beim Manövrieren die passenden Gegenmaßnahmen einsetzen.

<a id="rwr"></a>

## Taktisches elektronisches Kampfführungssystem (TEWS)

TEWS verwendet den Radarwarnempfänger AN/ALR-56C, um Radaremissionen von Flugzeugen, Schiffen und Bodensystemen zu erkennen. Der Empfänger arbeitet passiv und verrät die F-15C daher nicht durch eigene Aussendungen.

Die TEWS-Anzeige ist um das Eigenflugzeugsymbol zentriert. Die Winkelposition eines Signals zeigt seine Peilung relativ zum eigenen Flugzeug. **Der Abstand vom Zentrum gibt die Bedrohungsstufe an, nicht die tatsächliche Entfernung.**

<div class="term-cloud tac-editor-index">
  <a href="#rwr-search">1 Suchradare und neue Signale</a>
  <a href="#rwr-lock">2 Radaraufschaltung und höchste Bedrohung</a>
  <a href="#rwr-threat-levels">3 Drei Bedrohungsstufen</a>
  <a href="#rwr-audio">4 Akustische Warnungen</a>
</div>

Klicken Sie auf einen Screenshot, um ihn in Originalauflösung anzuzeigen.

<a id="rwr-search"></a>

### 1. Suchradare und neue Signale

<a :href="rwrSearchImage" target="_blank" rel="noopener">
  <img :src="rwrSearchImage" alt="TEWS Bild 1: SS- und SD-Suchradarsignale mit einem Halbkreis über einem neu erkannten Signal" loading="lazy" />
</a>

| Symbol in Bild 1 | Bedeutung |
| --- | --- |
| `SS` | Suchradar. |
| `SD` | Suchradar des Boden-Luft-Raketensystems SA-11 Buk. |
| Halbkreis über einem Symbol | Neu erkanntes Signal. Das rechte `SD` mit Halbkreis ist ein neues Suchradarsignal. |

Der Halbkreis kennzeichnet ein neues Signal; ein vollständiger Kreis kennzeichnet die unten beschriebene Radaraufschaltung.

<a id="rwr-lock"></a>

### 2. Radaraufschaltung und höchste Bedrohung

<a :href="rwrLockImage" target="_blank" rel="noopener">
  <img :src="rwrLockImage" alt="TEWS Bild 2: zwei eingekreiste SA-11-Feuerleitradarsignale, das rechte zusätzlich mit einer Raute" loading="lazy" />
</a>

| Symbol in Bild 2 | Bedeutung |
| --- | --- |
| `11` | Feuerleitradar des Boden-Luft-Raketensystems SA-11 Buk. |
| Vollständiger Kreis um ein Signal | Das Radar hat Ihr Flugzeug aufgeschaltet. |
| Raute | Vom System als höchste Bedrohung eingestuftes Ziel. |

Beide `11` sind eingekreist: Beide Systeme haben Ihr Flugzeug aufgeschaltet. Die rechte `11` trägt zusätzlich eine Raute, da das System sie derzeit als größte Bedrohung bewertet.

<a id="rwr-threat-levels"></a>

### 3. Drei Bedrohungsstufen

<a :href="rwrThreatImage" target="_blank" rel="noopener">
  <img :src="rwrThreatImage" alt="TEWS Bild 3: aufgeschaltete Bedrohungen innen, links eine neue nicht aufgeschaltete 11 in der Mitte und Suchsignale außen" loading="lazy" />
</a>

TEWS ordnet Signale nach Bedrohungsstufe drei radialen Zonen zu, von innen nach außen:

| Anzeigezone | Bedrohungsstufe | Beispiele |
| --- | --- | --- |
| Innerste | Hoch | Auf Ihr Flugzeug aufgeschaltete Radare, Flugkörper und weitere vorrangige Bedrohungen. |
| Mittlere | Mittel | Erkannte Feuerleitradare, die Ihr Flugzeug noch nicht aufgeschaltet haben. |
| Äußerste | Niedrig | Die am wenigsten bedrohlichen Signale, etwa die Suchradare in diesem Beispiel. |

Die neue `11` links in Bild 3 hat einen Halbkreis über sich und kennzeichnet somit ein neues Signal. Dieses Feuerleitradar hat Ihr Flugzeug noch nicht aufgeschaltet. Es wird deshalb als mittlere Bedrohung eingestuft und in der mittleren Zone angezeigt.

**Ein Symbol näher am Zentrum bedeutet eine höhere Bedrohung, keinen räumlich näheren Sender.** Bewerten Sie die Bedrohung anhand von Peilung, Sendertyp und Aufschaltungsmarkierungen gemeinsam.

<a id="rwr-audio"></a>

### 4. Akustische Warnungen

TEWS verwendet unterschiedliche Töne für Radarabtastung, neue Signale, Aufschaltung und Flugkörperstarts:

| Ereignis | Tonsignal | Zugehörige Anzeige |
| --- | --- | --- |
| Ein Radar tastet Ihr Flugzeug ab | Ein einzelner Abtastton. | Das zugehörige Radarsignal. |
| Ein neues Signal erscheint | Ein charakteristischer, etwas höherer Ton, 3-mal wiederholt. | Ein Halbkreis erscheint über dem Signal. |
| Ein Feuerleitradar schaltet Ihr Flugzeug auf | Ein fortlaufend wiederholter Abtastton. | Ein vollständiger Kreis erscheint um das Signal. |
| Ein radargelenkter Flugkörper wird auf Ihr Flugzeug abgefeuert | 4 rasche, hohe Startwarntöne. | Gleichzeitig blinkt der Kreis des zugehörigen Signals. |

## Häufige TEWS-Symbole

### Luftgestützte Radare

| Symbol | Bedrohung |
| --- | --- |
| `23` | MiG-23 |
| `29` | MiG-29 oder Su-27/33 |
| `31` | MiG-31 |
| `30` | Su-30 |
| `14` | F-14 |
| `15` | F-15 |
| `16` | F-16 |
| `18` | F/A-18 |
| `50` | A-50-Frühwarnflugzeug (AWACS) |
| `E2` / `E3` | E-2C- oder E-3C-Frühwarnflugzeug (AWACS) |

### Boden- und Schiffsradare

| Symbol | Bedrohung |
| --- | --- |
| `10` / `CS` / `BB` | Such- und Feuerleitradare der S-300PS-Familie |
| `SD` / `11` | Buk-/SA-11-Systeme |
| `6` | Kub / SA-6 |
| `8` | Osa / SA-8 |
| `13` | Strela-10 / SA-13 |
| `15` | Tor / SA-15 |
| `S6` | 2S6 Tunguska |
| `23` | ZSU-23-4 Shilka |
| `P` | Patriot-Radar |
| `H` / `HA` | Radare des Hawk-Systems |

## Düppel und Fackeln

Düppel werden gegen radargelenkte Bedrohungen eingesetzt, Fackeln gegen infrarotgelenkte Bedrohungen. Die Cockpitanzeigen blinken beim Ausstoß und warnen bei geringem Restvorrat.

Die defensive Wirkung ist in Verbindung mit Flugmanövern am größten:

1. Drehen Sie ab, um dem Flugkörper einen einfachen Vorhalte-Abfangkurs zu erschweren.
2. Setzen Sie gegen radargelenkte Flugkörper Düppel ein, während Sie beamen oder notchen.
3. Setzen Sie gegen vermutete Infrarotflugkörper Fackeln ein und verändern Sie dabei Ausrichtung und Wärmesignatur.
4. Vermeiden Sie nach dem Ausstoß einen vorhersehbaren geradlinigen Flug.
5. Prüfen Sie TEWS nach dem ersten Ausweichmanöver erneut; nehmen Sie nicht an, dass die Bedrohung bereits abgewehrt ist.
