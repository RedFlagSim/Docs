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

The Multi-Purpose Color Display (MPCD) currently provides two pages: **SIT**, the situational awareness display, and **AA**, the air-to-air weapons page. **SIT is displayed by default.**

SIT brings together mission information, datalink reports, and tracks acquired by your radar. AA shows the aircraft's stores, selected station, gun ammunition, and countermeasure quantities.

<a id="mpcd-index"></a>

## Page index

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 SIT display and symbols</a>
  <a href="#sit-mission">2 Mission information and display controls</a>
  <a href="#sit-modes">3 Cursor control and display modes</a>
  <a href="#sit-friendly">4 Friendly aircraft and Bullseye</a>
  <a href="#sit-workflow">5 Using SIT with VSD</a>
  <a href="#mpcd-aa">6 AA weapons page</a>
</div>

Click any display screenshot to open the original-resolution image. Numbered explanations refer to the markings on each image.

<a id="mpcd-sit"></a>

## SIT display and symbols

SIT presents a top-down view of the tactical situation, including aircraft, flight-plan waypoints, geofences, and range references.

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="SIT overview with numbered callouts 1–13" /></a>
  <figcaption>SIT overview. In this example, the acquisition gate follows the VSD cursor.</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### Numbered symbols

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 Zulu time</a>
  <a href="#sit-item-2">2 Compass</a>
  <a href="#sit-item-3">3 Datalink information</a>
  <a href="#sit-item-4">4 Half-range ring</a>
  <a href="#sit-item-5">5 Weapon information</a>
  <a href="#sit-item-6">6 Geofence</a>
  <a href="#sit-item-7">7 Display range</a>
  <a href="#sit-item-8">8 Cursor coordinates from ownship</a>
  <a href="#sit-item-9">9 SAM engagement zone</a>
  <a href="#sit-item-10">10 Flight-plan waypoints</a>
  <a href="#sit-item-11">11 Acquisition gate</a>
  <a href="#sit-item-12">12 Countermeasure quantities</a>
  <a href="#sit-item-13">13 Cursor coordinates from Bullseye</a>
</div>

<a id="sit-item-1"></a>

### 1. Zulu time

The upper-left clock shows Zulu time (UTC). Here, `23:00:51Z` means 23:00:51 Zulu.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. Compass

The compass provides a bearing reference around ownship. Use its direction markings to read target bearings.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. Datalink information

The red symbols show a hostile flight reported through the datalink. Their **dashed outlines** indicate datalink information. The stages from a datalink report to a correlated radar track are illustrated in [Using SIT with VSD](#sit-workflow).

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. Half-range ring

The inner white ring marks half the display range shown in [item 7](#sit-item-7). With `80` selected in this centered view, the ring represents 40 nautical miles from ownship.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. Weapon information

The lower-left readout summarizes weapon information. The [AA page](#mpcd-aa) provides the corresponding station-by-station view of the loadout.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. Geofence

The dashed polygon is a geofence: an area defined in the mission. These boundaries help relate the tactical situation to areas set up in the [Tac Editor](#sit-mission).

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. Display range

In this centered view, the upper-right `80` is the distance from ownship to the top of the compass, in nautical miles. In [Decenter mode](#sit-decenter), ownship moves lower on the screen; the range reference for that view is explained below.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. Cursor coordinates from ownship

The cyan readout gives the cursor's bearing and range from ownship. `092-22` places the cursor on bearing 092°, 22 nautical miles from your aircraft. This readout follows the acquisition gate marked [11](#sit-item-11).

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. SAM engagement zone

The red circles show the engagement ranges of surface-to-air missile (SAM) systems. These zones are also a type of geofence. The example circles are labeled `MEZ`, which stands for **Missile Engagement Zone**.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. Flight-plan waypoints

The connected yellow waypoint symbols show the waypoint sequence in your flight's flight plan.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. Acquisition gate

The two cyan vertical bars form the cursor, or target acquisition gate. **Dashed bars** mean that the SIT gate is following the VSD cursor. When you give cursor control to SIT, the bars become **solid** and TDC movement controls the SIT gate directly. See [Cursor control and display modes](#sit-modes).

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. Countermeasure quantities

The green `C 120` and `F 60` readouts indicate 120 chaff and 60 flares remaining.

[Back to numbered index](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. Cursor coordinates from Bullseye

The yellow readout gives the cursor's bearing and range from **Bullseye**, the common reference point. `121-30` places the cursor on bearing 121°, 30 nautical miles from Bullseye. The cyan upper-right readout instead uses ownship as its reference.

[Back to numbered index](#sit-symbol-index)

<a id="sit-mission"></a>

## Mission information and display controls

### Information from the Tac Editor

Much of the information displayed on SIT comes from the content you configure in the mission editor. The flight-plan waypoint sequence and geofences in the example can be compared directly with the mission setup below.

Configure missions according to your device's capabilities. Adding more units consumes more computing resources and memory.

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="Tac Editor mission showing flight-plan waypoints, Bullseye, aircraft, and geofences" loading="lazy" /></a>
  <figcaption>The mission setup supplies the context for the SIT display.</figcaption>
</figure>

For mission setup, see [Tac Editor](/Docs/basics/tac-editor.html).

### Choosing what SIT displays

Open the [Touch UI Function Panel](/Docs/aircraft/f15c/touch-ui.html#item-1) and select **MAIN**. The **SIT** row controls the displayed information and whether its range follows VSD.

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="MAIN function panel with SIT controls WP, DLK, AUTO RANGE, and GEO FENCE numbered 1–4" loading="lazy" /></a>
</figure>

| No. | Control | Function |
| --- | --- | --- |
| 1 | `WP` | Show or hide flight-plan waypoints. |
| 2 | `DLK` | Show or hide datalink information. |
| 3 | `AUTO RANGE` | Control whether SIT display range follows changes to VSD display range. |
| 4 | `GEO FENCE` | Show or hide geofences. |

[Back to page index](#mpcd-index)

<a id="sit-modes"></a>

## Cursor control and display modes

### Give cursor control to SIT

<div class="mpcd-controls">
  <div>
    <p>With the TDC assigned to VSD, move the <strong>Castle Switch UP</strong> to make SIT the active display (SOI). TDC movement now controls only the SIT acquisition gate, whose two bars become <strong>solid</strong>.</p>
    <p>Castle UP switches cursor control between VSD and SIT. When the gate follows VSD again, it is drawn with dashed bars.</p>
    <p>The Touch UI controls shown alongside are the <a href="/Docs/aircraft/f15c/touch-ui.html#item-19">Castle Switch</a> and <a href="/Docs/aircraft/f15c/touch-ui.html#item-18">Cursor (TDC)</a>.</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Touch UI Castle Switch" loading="lazy" /></a>
      <figcaption>Castle Switch</figcaption>
    </figure>
    <figure>
      <a href="/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Touch UI Cursor / TDC control" loading="lazy" /></a>
      <figcaption>Cursor / TDC</figcaption>
    </figure>
  </div>
</div>

The left, right, and down actions below apply **while SIT has cursor control**.

| Castle direction | SIT mode | Purpose |
| --- | --- | --- |
| Right | Decenter | Move ownship lower on the display to leave more space ahead. |
| Left | EXP | Expand a local area at a 10 NM scale; use the cursor to control the view offset. |
| Down | Flight | Use a fixed 5 NM scale to inspect your flight's situation. |

<a id="sit-decenter"></a>

### Decenter mode

Move **Castle RIGHT** with SIT in control to enter Decenter mode. Ownship moves toward the lower part of the display, leaving more room in the upper part of SIT to show the situation ahead.

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="Decentered SIT with solid acquisition gate marked 1 and ownship marked 2" loading="lazy" /></a>
  <figcaption>1: solid acquisition gate under SIT control. 2: ownship.</figcaption>
</figure>

The upper-right `120` represents **120 nautical miles from ownship to the top of the large circle** in this view.

<a id="sit-exp"></a>

### EXP mode

Move **Castle LEFT** with SIT in control to enter EXP mode. It focuses on an area at a **10 nautical mile scale**, indicated by `E10` in the upper-right corner. Use the cursor to control the view's offset, enlarging the area you want to inspect.

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="SIT EXP mode showing E10 and separated datalink aircraft symbols" loading="lazy" /></a>
  <figcaption>EXP enlarges a small area so individual aircraft and nearby geofences are easier to distinguish.</figcaption>
</figure>

<a id="sit-flight"></a>

### Flight mode

Move **Castle DOWN** with SIT in control to enter Flight mode. This mode uses a fixed **5 nautical mile scale**, shown as `F5`, to inspect the positions and altitudes of aircraft in your own flight.

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="SIT Flight mode with F5 range and wingmen numbered 2, 3, and 4 around ownship" loading="lazy" /></a>
  <figcaption>Flight mode provides a close view of your flight's situation.</figcaption>
</figure>

[Back to page index](#mpcd-index)

<a id="sit-friendly"></a>

## Friendly aircraft and Bullseye

SIT distinguishes aircraft in your own flight from other aircraft in the same mission **Package**. The example below also shows how to read the cursor's position from Bullseye.

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT with Package aircraft marked 1, Bullseye marked 2, wingmen marked 3, and ownship marked 4" loading="lazy" /></a>
</figure>

| No. | Symbol | Meaning |
| --- | --- | --- |
| 1 | Green Package aircraft | Another aircraft in the same Package, here an airborne early warning aircraft. The center dot means ownship is receiving its datalink contribution. The `15` below it indicates an altitude of 15,000 feet. |
| 2 | Yellow Bullseye | The common reference point. The yellow lower-right `037-12` places the cursor on bearing 037°, 12 nautical miles from Bullseye. |
| 3 | Cyan wingmen | The other three aircraft in your flight. The numbers inside the symbols are their flight numbers: 2, 3, and 4; the flight lead is number 1. Numbers below the symbols give altitude in thousands of feet. |
| 4 | Cyan ownship symbol | Your aircraft's position on SIT. |

[Back to page index](#mpcd-index)

<a id="sit-workflow"></a>

## Using SIT with VSD

A useful workflow is to use datalink information on SIT to locate the area of interest, then direct radar search on VSD to that position and acquire the targets. The screenshots below show the progression from datalink reports to local radar tracks and correlated tracks.

### 1. Search the area indicated by datalink

Use the reported target positions on SIT to guide radar search on VSD. The **cyan sector on the left-hand SIT** represents the radar's search azimuth and range. Use it to compare the radar search area with the reported positions, and check VSD's altitude coverage for the targets' altitude.

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="SIT datalink contacts and cyan radar search sector beside VSD search returns" loading="lazy" /></a>
  <figcaption>SIT on the left provides tactical context; VSD on the right shows radar search information.</figcaption>
</figure>

For antenna elevation, search coverage, and acquisition-gate operation, see [Radar and VSD: LRS](/Docs/aircraft/f15c/radar.html#radar-lrs).

### 2. Read locally acquired tracks

Once the radar establishes tracks, SIT displays them as **white solid-outline squares** in this example. The **solid outline** indicates a track obtained by your own radar; **white** indicates unknown identity. The red dashed datalink symbols remain visible behind the local tracks at this stage.

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="SIT local white square tracks overlapping red dashed datalink reports, beside the corresponding VSD tracks" loading="lazy" /></a>
  <figcaption>1: highlighted weapon readout. 2: local tracks on SIT. 3: corresponding radar tracks on VSD.</figcaption>
</figure>

### 3. Recognize correlated tracks and PDT

After some time, the track files obtained by your radar and those received through datalink are associated and merged into a single track. SIT then shows a **filled target symbol**. In this example, the correlated hostile aircraft are red.

The **blue dashed line** marked 1 points to the **PDT (Primary Designated Target)**.

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="SIT filled correlated hostile tracks and a blue dashed line to PDT, beside VSD in TWS" loading="lazy" /></a>
  <figcaption>The blue dashed line identifies the direction to the Primary Designated Target.</figcaption>
</figure>

### 4. Use EXP to inspect the target flight

Switch SIT to [EXP mode](#sit-exp) to examine the individual aircraft within the target flight. Enlarging the area separates the symbols and makes the flight's distribution and altitude readouts easier to inspect alongside VSD.

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="EXP view of four filled hostile aircraft symbols marked 1 and their VSD tracks marked 2" loading="lazy" /></a>
  <figcaption>1: target-flight detail on SIT in EXP mode. 2: the corresponding tracks on VSD.</figcaption>
</figure>

| Appearance in these examples | Meaning |
| --- | --- |
| Dashed target outline | Datalink report. |
| Solid target outline | Track obtained by ownship's radar. |
| White target | Unknown identity. |
| Filled target symbol | Local and datalink tracks have been correlated. |
| Blue dashed line | Direction to PDT. |

[Back to page index](#mpcd-index)

<a id="mpcd-aa"></a>

## AA weapons page

### Open AA

With **TDC control assigned to VSD**, move **Castle RIGHT** to switch MPCD from SIT to the **AA air-to-air weapons page**. Castle LEFT in the same control context returns to SIT.

The Castle action depends on which display has cursor control: RIGHT opens AA when VSD is in control, and selects Decenter when SIT is in control.

### Read the loadout

AA shows the stores arranged around an aircraft outline, together with gun ammunition and countermeasure quantities.

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="Two AA page examples with an empty pylon, external tank, ammunition, countermeasures, and a selected station annotated" loading="lazy" /></a>
  <figcaption>The image uses 3 twice: left-image 3 marks gun ammunition; right-image 3 marks countermeasure quantities.</figcaption>
</figure>

| Callout | Readout | Meaning |
| --- | --- | --- |
| 1, left image | `PYLON` | An empty pylon with no store mounted. |
| 2, left image | `FUEL` | A station carrying an external fuel tank. |
| 3, left image | `950` | Gun ammunition remaining: 950 rounds in this example. |
| 3, right image | `CHF 120`, `FLR 60` | Countermeasures remaining: 120 chaff and 60 flares. |
| 4, right image | Highlighted `AMRM / 120B` | The selected station, shown with a green highlight and a white box around the weapon designation. |

### Compare with aircraft setup

The **LOADOUT** configuration below corresponds to the AA examples above. Compare the store types and ammunition quantities to see how the setup is represented on MPCD.

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="Aircraft LOADOUT setup matching the AA page, including 9M, 120B, 7M, an external tank, 950 gun rounds, 120 chaff, and 60 flares" loading="lazy" /></a>
</figure>

| LOADOUT configuration | Corresponding AA display |
| --- | --- |
| `9M` at stations 8A and 2A | Two `SRM / 9M` entries. |
| `120B` at stations 7 and 3 | Two `AMRM / 120B` entries. |
| `7M` at stations 6 and 4 | Two `MRM / 7M` entries. |
| `Tank` at station 5 | Center `FUEL` entry. |
| Gun `950`, Chaff `120`, Flare `60` | Gun and countermeasure quantities on AA. |

[Back to page index](#mpcd-index)
