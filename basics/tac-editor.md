# Tac Editor

The Tac Editor is the mission planning tool for building custom Red Flag Sim scenarios. It lets you define the battlefield, place packages and flights, set routes, configure player and AI aircraft, add ground or surface entities, and launch the mission through the same runtime flow used by preset missions.

## Mission Structure

A Tac Editor mission is organized in layers:

- **Mission**: title, difficulty, scenery, weather/time, blue and red airbases, bullseye, restrictions, and global options.
- **Package**: a coalition-level task group with takeoff and time-on-target references.
- **Flight**: a formation inside a package. A flight has a callsign, coalition, airbase, role, route, AI behavior, and aircraft slots.
- **Slot**: one aircraft in a flight. The player aircraft is also a slot.
- **Steerpoints**: route points used by the flight for navigation and timing.
- **GeoFence**: areas used for tactical boundaries, training boxes, threat zones, or reference overlays.
- **Non-player entities**: ground, surface, facility, or independent air units that do not belong to a package.

The editor saves these elements into a mission draft. When you press **Go Fly**, the draft is cloned into a runtime mission snapshot before the World scene is loaded.

## Recommended Workflow

Build missions from the outside inward:

1. Choose the scenery and confirm the default blue/red airbases.
2. Set mission title, skill level, weather, time, bullseye, and global options.
3. Create blue and red packages.
4. Add flights to each package and assign roles.
5. Add aircraft slots, then choose aircraft type, spawn method, livery, fuel, and loadout.
6. Build flight routes with steerpoints.
7. Add geofences and non-player entities.
8. Review restrictions and player access requirements.
9. Save the mission, then use **Go Fly** to test it.

Iterate in small steps. A mission that launches successfully with one player flight is easier to debug than a fully populated scenario with many untested units.

## Mission Settings

Mission-level settings define the environment and what the player may change before launch.

Key fields include:

- **Mission title**: shown in editor and mission lists.
- **Scenery**: the terrain and airbase database context.
- **Weather / time**: applied when the World scene starts.
- **Blue and red airbases**: defaults used when new flights or slots are created.
- **Bullseye**: shared tactical reference point used by avionics and tactical displays.
- **Max duration**: optional mission time limit, in seconds.
- **Configuration permissions**: whether the player may change loadout, livery, or weather.

Set scenery and airbases early. Many later defaults, including flight airbase and generated steerpoints, depend on them.

## Packages and Flights

A **package** groups flights by coalition and tactical timing. Use packages to organize attack groups, CAP stations, escorts, training opponents, tankers, or support aircraft.

A **flight** represents one formation. Important flight fields include:

- **Callsign**: displayed in package lists and tactical displays.
- **Coalition**: blue, red, neutral, or civilian depending on mission purpose.
- **Airbase**: used for airbase spawn and route generation.
- **Mission role**: such as CAP, escort, intercept, strike, tanker, training, or ferry.
- **Takeoff / time-on-target**: relative mission timing used by the planner.
- **AI behavior config**: optional behavior profile for non-player aircraft.

Keep callsigns clear and short. During testing, names such as Eagle 1, Bandit 1, Tanker 1, and Range 1 are easier to read than generic labels.

## Aircraft Slots

Each flight contains one or more aircraft slots. A slot controls the actual spawned aircraft definition, formation number, IFF identity, livery, loadout, spawn state, and optional per-aircraft behavior overrides.

For a launchable mission, there must be exactly one player-controlled aircraft slot. If there is no player slot, the mission cannot start. If there are multiple player slots, the launch flow treats this as invalid mission setup.

When creating a new flight member, the editor defaults to an airbase spawn with a warm aircraft state and preloaded loadout. You can then adjust spawn type, fuel, weapons, and route.

## Spawn Types

Aircraft and entities can spawn in different ways:

- **Airbase**: uses an airport and parking spot. This is the safest default for player flights.
- **Airborne**: uses latitude, longitude, altitude, true heading, and calibrated airspeed.
- **Surface**: used for ground, surface, and facility entities.

Current limitation: aircraft surface spawn is not implemented for normal aircraft slots. Use **Airbase** or **Airborne** for aircraft.

For airborne aircraft, heading is true heading: 0 means true north and values increase clockwise. For airbase spawns, the parking point controls the transform and initial ground state.

## Routes and Steerpoints

Flight routes are built from steerpoints. A route can represent departure, marshal, intercept, target, recovery, or training pattern geometry.

Good route practice:

- Start from the departure airbase or initial airborne point.
- Use clear spacing between steerpoints.
- Mark tactical target or push points deliberately.
- Avoid placing low-altitude routes through terrain unless that is the training goal.
- Review timing after changing route distance or cruise speed.

The navigation system and F-15C displays read mission route data, so clean steerpoints directly improve cockpit usability.

## Bullseye and Geofences

**Bullseye** is the shared reference point used for tactical calls and avionics display references. Put it somewhere meaningful: near the operating area, range center, or a known reference feature.

**Geofences** are map overlays and boundaries. Use them for:

- training boxes;
- restricted airspace;
- threat rings;
- target areas;
- ingress/egress corridors;
- no-fire or no-fly zones.

Geofences are useful even when they do not enforce gameplay rules. They make the tactical picture easier to understand.

## Non-Player Entities

Non-player entities can be added outside the package/flight structure. Use them for SAM sites, ground units, ships, facilities, range targets, or independent aircraft.

For aircraft that should fly a route or act as a formation member, prefer package flights. For static or tactical map objects, use non-player entities.

## Mission Restrictions

Mission restrictions control what aircraft and loadouts are allowed. Current restriction categories include aircraft generation/era and loadout or weapon guidance type, such as IR missiles, semi-active radar missiles, active radar missiles, passive radar missiles, and TV-guided weapons.

Use restrictions to keep a training mission focused. For example, a guns-only merge should restrict missiles; a BVR lesson should restrict the aircraft and weapons to the intended setup.

## Save, Load, and Go Fly

Use save/load to keep reusable mission drafts. Saved missions should be tested after major changes, especially when changing aircraft type, spawn type, route timing, or restrictions.

**Go Fly** runs the mission through the unified mission launch flow. Before loading the World scene, the game checks:

- mission data exists;
- exactly one player aircraft can be resolved;
- the player aircraft module is accessible;
- mission snapshot can be created;
- selected aircraft features, variants, and non-default livery packs are allowed.

If launch fails, simplify the mission and test again: one player aircraft, one airbase spawn, default loadout, default livery, then add complexity back step by step.

## Practical Checklist

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
