<a id="tac-editor-top"></a>

# Tac Editor

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Use the Tac Editor to build custom missions, organize flights, place units, and plan routes. The guide is divided into seven parts, starting with the numbered interface overview and continuing with detailed editing instructions.

**Guide structure**

- [Part 1: Interface Overview](#part-1)
- [Part 2: Package and Flight](#part-2)
- [Part 3: Aircraft Configuration](#part-3)
- [Part 4: Flight Plans](#part-4)
- [Part 5: Map Objects](#part-5)
- [Part 6: Mission Settings](#part-6)
- [Part 7: Saving and Test Flights](#part-7)

<a id="part-1"></a>

## Part 1: Interface Overview

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="Tac Editor overview with numbered callouts 1–11">
</a>

Open the image to view it at full resolution. Select a number below to jump to its explanation.

<a id="ui-terms-top"></a>

### UI Index

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight</a>
  <a href="#item-2">2 Bullseye</a>
  <a href="#item-3">3 Package</a>
  <a href="#item-4">4 Additional Non-Player Units</a>
  <a href="#item-5">5 Inspector</a>
  <a href="#item-6">6 Map Scale</a>
  <a href="#item-7">7 Map Toolbar</a>
  <a href="#item-8">8 Flight Plan Route</a>
  <a href="#item-9">9 Local and Zulu Time</a>
  <a href="#item-10">10 Geo Fence</a>
  <a href="#item-11">11 Editor Toolbar</a>
</div>

<a id="item-1"></a>

### 1. Flight

A **Flight** is a flight of up to **4 aircraft**. Each card at the top represents one flight; its aircraft symbols show the members. Select a card to inspect the flight and configure its aircraft.

[Continue to Flight](#part-2-flight)

[Back to index](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye

**Bullseye** is a shared geographical reference point for reporting bearings and distances. The yellow concentric-circle symbol marks its position on the map.

The map's range rings are centered on Bullseye. Adjacent rings differ in radius by **20 nautical miles (20 NM)**.

[Back to index](#ui-terms-top)

<a id="item-3"></a>

### 3. Package

A **Package** groups flights on the same side. The blue and red strips at the top contain the flights in their respective packages. Select a package to view and manage its flights.

[Continue to Package](#part-2-package)

[Back to index](#ui-terms-top)

<a id="item-4"></a>

### 4. Additional Non-Player Units

These are additional AI-controlled units outside the Package/Flight structure. The example shows an independent aircraft and a SAM unit. Use **NP Unit** in the editor toolbar to manage these units.

[View details: NP Unit](#part-5-np-unit-list)

[Back to index](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector

The panel on the right shows information and controls for the selected object. In this image, it shows the mission overview, including the mission name, scenery, and difficulty.

**Scenery** cannot currently be selected. Map region selection will become available in a future version when multiple regions are supported.

**Double-tap an empty area of the map** to return to the mission overview in the Inspector.

**Inspectors by object**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[Back to index](#ui-terms-top)

<a id="item-6"></a>

### 6. Map Scale

The scale bar shows the distance represented by its length at the current zoom level. **NM** means nautical miles; the example reads **16.66 NM**. Use it to estimate distances on the map.

[Back to index](#ui-terms-top)

<a id="item-7"></a>

### 7. Map Toolbar

The lower-left toolbar contains four controls, from left to right:

- **Move** (four arrows): hold to move a selected map element.
- **Zoom in** (magnifying glass with +): enlarge the map.
- **Zoom out** (magnifying glass with −): show a wider area.
- **Home** (house): close the editor and return to the main screen.

::: tip Moving a map element
1. Select the unit or element you want to move.
2. Hold the **Move** button with your **left hand**.
3. Keep holding it while dragging on the map with your **right hand** to reposition the selected element.
:::

[Back to index](#ui-terms-top)

<a id="item-8"></a>

### 8. Flight Plan Route

The connected steerpoints show a flight's planned route. Select the flight to inspect its plan and edit its steerpoints. The route belongs to the flight and provides its navigation path.

[View details](#part-4)

[Back to index](#ui-terms-top)

<a id="item-9"></a>

### 9. Local and Zulu Time

The bottom display shows mission time in two forms: local time first, followed by **Zulu time (UTC)** in brackets with a **Z** suffix. In this example, **16:00:00** local and **23:00:00 Z** refer to the same instant.

[Back to index](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence

A **Geo Fence** marks a tactical area or boundary on the map. It can be circular or polygonal, as shown by the circle and the polygon labelled **MEZ**. Use **Geo Fence** in the editor toolbar to manage these areas.

[View details: Geo Fence](#part-5-geofence-list)

[Back to index](#ui-terms-top)

<a id="item-11"></a>

### 11. Editor Toolbar

These six buttons appear in the mission overview Inspector. They are explained below in screen order, from left to right across the top row, then the bottom row.

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time</a>
  <a href="#item-11-2">11.2 File</a>
  <a href="#item-11-3">11.3 Config</a>
  <a href="#item-11-4">11.4 Geo Fence</a>
  <a href="#item-11-5">11.5 NP Unit</a>
  <a href="#item-11-6">11.6 Go Fly</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time

Open the mission weather and time settings. Use this to set the conditions and time of day for the mission.

[Back to index](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File

Open mission file operations: create a new mission, save the current mission, load a saved mission, or delete a saved mission.

[Back to index](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config

Open mission configuration and restrictions. Set whether loadout, livery, weather/time editing, and time freeze are allowed, and configure aircraft and loadout restrictions.

[Back to index](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence

Open the Geo Fence list to add, select, and edit tactical areas and boundaries.

[View details: Geo Fence](#part-5-geofence-list)

[Back to index](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit

Open the non-player unit list to add and manage units outside the packages. Select a unit to edit its details in the Inspector.

[View details: NP Unit](#part-5-np-unit-list)

[Back to index](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly

Launch the mission using the current editor setup. The mission must contain exactly one player-controlled aircraft, and the selected player aircraft module must be accessible. If launch fails, follow the displayed message to correct the setup.

[Back to index](#ui-terms-top)

[Back to top](#tac-editor-top)

<a id="part-2"></a>

## Part 2: Package and Flight

Use a Package to organize flights, then open a Flight to configure its members and mission settings. The panels below follow this hierarchy.

Aircraft are organized as **Mission → Package → Flight → Slot (one aircraft)**. Each Flight belongs to a Package and contains up to **4 aircraft**.

<a id="part-2-package"></a>

### Package

Select a Package at the top of the map to see its flights and package timing. The example package is named blue1.

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>Name and Flight list</strong>: The package name appears at the top; tap it to rename the package. Flight1, Flight2, and Flight3 are listed below; member numbers identify aircraft within each flight.
- <strong>＋</strong>: Add a Flight. Select an existing flight card to open its Flight Inspector.
- <strong>Take-off Time</strong>: The package takeoff time; the example shows 23:03.
- <strong>Time on Target (TOT)</strong>: The package target arrival time; the example shows 23:33.

</TacInspectorPanel>

[Back to interface overview](#item-3)

<a id="part-2-flight"></a>

### Flight

Select a Flight in its Package to view members and flight settings. The example is Flight1 with 4 aircraft.

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>Member diagram</strong>: Shows aircraft and member numbers. Select a member to open its Slot Inspector.
- <strong>Airbase</strong>: The flight's base; NAS_Fallon is selected in the example.
- <strong>Mission Role</strong>: The flight's task; CAP is selected in the example.
- <strong>Take-off Time / Time on Target</strong>: Flight takeoff and target arrival times; the example shows 23:03 and 23:12.
- <strong>Station Time</strong>: The duration, in minutes, spent patrolling between two target-type steerpoints during a patrol task.
- <strong>Steer Points</strong>: Open flight route editing. Detailed route and steerpoint instructions belong in Part 4.
- <strong>Rebuild</strong>: Recalculate the Flight's Time on Target (TOT).
- <strong>Delete</strong>: Located below Rebuild. Delete the entire Flight definition, not just one aircraft Slot.

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### Patrol Example: Tankers and Early Warning Aircraft

To have a tanker or airborne early warning aircraft patrol a chosen location:

1. Place two steerpoints at the intended patrol location and set both to the <strong>target type</strong>.
2. In the Flight Inspector, set <strong>Station Time</strong> to the desired patrol duration in minutes.
3. The aircraft will patrol between these two target-type steerpoints for the duration specified by Station Time.

[Back to interface overview](#item-1)

[View details: Slot](#part-3-slot) · [Steer Points](#part-4)

[Back to top](#tac-editor-top)

<a id="part-3"></a>

## Part 3: Aircraft Configuration

<a id="part-3-slot"></a>

### Slot (Individual Aircraft)

A Slot represents one aircraft in a Flight. Select an aircraft in the Flight member diagram to open its individual Inspector.

<TacInspectorPanel panel="slot" alt="Slot (Individual Aircraft) Inspector" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>Aircraft type and member number</strong>: The top shows F-15C, member 1. Use the aircraft dropdown below to select the aircraft type.
- <strong>Loadout / Livery</strong>: Open weapon loadout and livery settings.
- <strong>Spawn Type</strong>: Choose Airborne or Airbase. Airbase is selected in this image.
- <strong>Spawn Point ID</strong>: Select the spawn point; the example shows Auto.
- <strong>Initial State</strong>: Open initial aircraft state settings.
- <strong>Delete</strong>: Delete the current aircraft Slot, not its whole Flight or Package.

</TacInspectorPanel>

[Back to interface overview](#item-1)

Each flight contains up to 4 aircraft slots. A slot controls the actual spawned aircraft definition, formation number, IFF identity, livery, loadout, spawn state, and optional per-aircraft behavior overrides.

For a launchable mission, there must be exactly one player-controlled aircraft slot. If there is no player slot, the mission cannot start. If there are multiple player slots, the launch flow treats this as invalid mission setup.

When creating a new flight member, the editor defaults to an airbase spawn with a warm aircraft state and preloaded loadout. You can then adjust spawn type, fuel, weapons, and route.

### Spawn Types

Aircraft and entities can spawn in different ways:

- **Airbase**: uses an airport and parking spot. This is the safest default for player flights.
- **Airborne**: uses latitude, longitude, altitude, true heading, and calibrated airspeed.
- **Surface**: used for ground, surface, and facility entities.

Current limitation: aircraft surface spawn is not implemented for normal aircraft slots. Use **Airbase** or **Airborne** for aircraft.

For airborne aircraft, heading is true heading: 0 means true north and values increase clockwise. For airbase spawns, the parking point controls the transform and initial ground state.

[Back to top](#tac-editor-top)

<a id="part-4"></a>

## Part 4: Flight Plans

Select Steer Points in the Flight Inspector to edit the current flight's steerpoints. The image shows steerpoint number 3.

[View details: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points Inspector

<TacInspectorPanel panel="steerpoints" alt="Steer Points Inspector" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>Arrows and number</strong>: Use the arrows to switch steerpoints. The center shows the selected steerpoint number, 3 in this example.
- <strong>Steerpoint type</strong>: Use the dropdown to choose the type. Target is selected in the image.
- <strong>Elev (MSL)</strong>: Planned altitude at the steerpoint, referenced to mean sea level (MSL), in feet (FT). The example is 15000 FT, not height above the ground.
- <strong>KCAS</strong>: Planned calibrated airspeed at the steerpoint, in knots. The example is 529 KCAS, not groundspeed or true airspeed.
- <strong>Time(Z) Over Steerpoint</strong>: Planned Zulu time (UTC) over the current steerpoint. The left and right fields are hours and minutes: 23:15 Z in the example, not a flight duration.
- <strong>New</strong>: Add a steerpoint.
- <strong>Delete</strong>: Delete the selected steerpoint, not the entire Flight.

</TacInspectorPanel>

For a tanker or early warning patrol, place two Target-type steerpoints at the patrol location and set the duration between them with the Flight's Station Time. To recalculate the Flight's TOT, select Rebuild in the Flight Inspector.

[Patrol setup example](#flight-station-time-example) · [Moving map elements](#item-7)

### Routes and Steerpoints

Flight routes are built from steerpoints. A route can represent departure, marshal, intercept, target, recovery, or training pattern geometry.

Good route practice:

- Start from the departure airbase or initial airborne point.
- Use clear spacing between steerpoints.
- Mark tactical target or push points deliberately.
- Avoid placing low-altitude routes through terrain unless that is the training goal.
- Review timing after changing route distance or cruise speed.

The navigation system and F-15C displays read mission route data, so clean steerpoints directly improve cockpit usability.

[Back to top](#tac-editor-top)

<a id="part-5"></a>

## Part 5: Map Objects

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Geo Fence List</a>
  <a href="#part-5-geofence-circle">Circular Fence (Circle)</a>
  <a href="#part-5-geofence-polygon">Polygon Fence (Polygon)</a>
  <a href="#part-5-np-unit-list">NP Unit List</a>
</div>

<a id="bullseye-and-geofences"></a>

### Bullseye

**Bullseye** is the shared reference point used for tactical calls and avionics display references. Put it somewhere meaningful: near the operating area, range center, or a known reference feature.

### Geo Fence

Open Geo Fence from the mission overview panel, then select a fence in the list. Circular and polygon fences have different geometry controls.

**Geofences** are map overlays and boundaries. Use them for:

- training boxes;
- restricted airspace;
- threat rings;
- target areas;
- ingress/egress corridors;
- no-fire or no-fly zones.

Geofences are useful even when they do not enforce gameplay rules. They make the tactical picture easier to understand.

<a id="part-5-geofence-list"></a>

#### Geo Fence List

<TacInspectorPanel panel="geofence-list" alt="Geo Fence List" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>＋</strong>: Add a Geo Fence.
- <strong>List entries</strong>: The example contains a circle named 11 and a polygon named MEZ. The icons distinguish their shapes.
- <strong>Select an entry</strong>: Open that fence's Inspector to edit its role, shape, coalition, and geometry.

</TacInspectorPanel>

[Back to interface overview](#item-10)

<a id="part-5-geofence-circle"></a>

#### Circular Fence (Circle)

<TacInspectorPanel panel="geofence-circle" alt="Circular Fence (Circle) Inspector" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>Name</strong>: 11 at the top is the fence name.
- <strong>Geo Fence Role / Shape</strong>: The example role is MEZ and the shape is Circle. Name, role, and shape are separate information.
- <strong>Coalition</strong>: The fence's side; the example shows Red.
- <strong>Threat Radius</strong>: Set the circular area's radius.
- <strong>Delete</strong>: Delete the current fence.

</TacInspectorPanel>

[Back to interface overview](#item-10)

<a id="part-5-geofence-polygon"></a>

#### Polygon Fence (Polygon)

<TacInspectorPanel panel="geofence-polygon" alt="Polygon Fence (Polygon) Inspector" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>Name / Geo Fence Role</strong>: The name is MEZ, but the selected role is ROZ. Do not confuse the name with the role.
- <strong>Shape / Coalition</strong>: The example shows Polygon and Red.
- <strong>Arrow buttons and number</strong>: Select the vertex to edit. The displayed vertex number is 0.
- <strong>New Vertice</strong>: Add a vertex.
- <strong>Rotate</strong>: Rotate the polygon.
- <strong>Delete Vertex / Delete</strong>: Delete Vertex removes the selected vertex; the bottom Delete button removes the entire fence.

To reposition map elements, use the Part 1 gesture: select an element, hold Move with the left hand, and drag with the right.

</TacInspectorPanel>

[Back to interface overview](#item-10)

[View details](#item-7)

<a id="part-5-np-unit-list"></a>

### NP Unit List

Open NP Unit from the mission overview panel to manage units outside the Package / Flight structure in the Units list.

<TacInspectorPanel panel="np-unit-list" alt="NP Unit List" open-label="Open the image at full resolution.">

**Fields and controls**

- <strong>＋</strong>: Add a non-player unit.
- <strong>List entries</strong>: The example lists 9K37 Buk np and F-15C np, showing a SAM unit and an independent aircraft.
- <strong>Select an entry</strong>: Open that unit's Inspector.

</TacInspectorPanel>

[Back to interface overview](#item-4)

Non-player entities can be added outside the package/flight structure. Use them for SAM sites, ground units, ships, facilities, range targets, or independent aircraft.

For aircraft that should fly a route or act as a formation member, prefer package flights. For static or tactical map objects, use non-player entities.

[Back to top](#tac-editor-top)

<a id="part-6"></a>

## Part 6: Mission Settings


### Mission Structure

A Tac Editor mission is organized in layers:

- **Mission**: title, difficulty, scenery, weather/time, blue and red airbases, bullseye, restrictions, and global options.
- **Package**: a coalition-level task group with takeoff and time-on-target references.
- **Flight**: a formation inside a package. A flight has a callsign, coalition, airbase, role, route, AI behavior, and aircraft slots.
- **Slot**: one aircraft in a flight. The player aircraft is also a slot.
- **Steerpoints**: route points used by the flight for navigation and timing.
- **GeoFence**: areas used for tactical boundaries, training boxes, threat zones, or reference overlays.
- **Non-player entities**: ground, surface, facility, or independent air units that do not belong to a package.

The editor saves these elements into a mission draft. When you press **Go Fly**, the draft is cloned into a runtime mission snapshot before the World scene is loaded.

### Mission Settings

Mission-level settings define the environment and what the player may change before launch.

Key fields include:

- **Mission title**: shown in editor and mission lists.
- **Scenery**: the terrain and airbase database context, shown read-only in the mission Inspector.
- **Weather / time**: applied when the World scene starts.
- **Blue and red airbases**: defaults used when new flights or slots are created.
- **Bullseye**: shared tactical reference point used by avionics and tactical displays.
- **Configuration permissions**: whether the player may change loadout, livery, or weather.

Confirm the current scenery and set airbases early. Many later defaults, including flight airbase and generated steerpoints, depend on them.

### Mission Restrictions

Mission restrictions control what aircraft and loadouts are allowed. Current restriction categories include aircraft generation/era and loadout or weapon guidance type, such as IR missiles, semi-active radar missiles, active radar missiles, passive radar missiles, and TV-guided weapons.

Use restrictions to keep a training mission focused. For example, a guns-only merge should restrict missiles; a BVR lesson should restrict the aircraft and weapons to the intended setup.

[Back to top](#tac-editor-top)

<a id="part-7"></a>

## Part 7: Saving and Test Flights


### Recommended Workflow

Build missions from the outside inward:

1. Confirm the current scenery and the default blue/red airbases.
2. Set mission title, skill level, weather, time, bullseye, and global options.
3. Create blue and red packages.
4. Add flights to each package and assign roles.
5. Add aircraft slots, then choose aircraft type, spawn method, livery, fuel, and loadout.
6. Build flight routes with steerpoints.
7. Add geofences and non-player entities.
8. Review restrictions and player access requirements.
9. Save the mission, then use **Go Fly** to test it.

Iterate in small steps. A mission that launches successfully with one player flight is easier to debug than a fully populated scenario with many untested units.

### Save, Load, and Go Fly

Use save/load to keep reusable mission drafts. Saved missions should be tested after major changes, especially when changing aircraft type, spawn type, route timing, or restrictions.

**Go Fly** runs the mission through the unified mission launch flow. Before loading the World scene, the game checks:

- mission data exists;
- exactly one player aircraft can be resolved;
- the player aircraft module is accessible;
- mission snapshot can be created;
- selected aircraft features, variants, and non-default livery packs are allowed.

If launch fails, simplify the mission and test again: one player aircraft, one airbase spawn, default loadout, default livery, then add complexity back step by step.

### Practical Checklist

Before saving or flying:

- Mission has a clear title and scenery.
- Blue/red airbases are valid.
- Bullseye is placed near the tactical area.
- Exactly one player aircraft slot exists.
- Player aircraft uses Airbase or Airborne spawn.
- Each flight has a callsign, coalition, role, and route.
- Loadout and livery match mission permissions.
- Geofences and target areas are visually clear.
- Restrictions match the training objective.
- The mission has been tested from **Go Fly** at least once.

[Back to top](#tac-editor-top)
