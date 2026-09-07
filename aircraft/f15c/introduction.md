# F-15C "Eagle" air superiority fighter

![F-15C Header](/assets/F-15C/header.jpg)

This chapter describes the systems currently implemented in Red Flag Sim for the F-15C and how they are linked together. It is an in-simulator implementation guide and does not replace real flight or maintenance manuals.

## Flight and control states

Flight state is determined by several parameters at once (indicated airspeed, Mach, altitude, attitude, angle of attack, load factor, and fuel state). HUD references are primary, while cockpit instruments are required for cross-check.

The units differ by type, so do not read AoA as geometric attitude and do not treat TAS/Mach as interchangeable with IAS.

Relevant pages: [Cockpit Instruments](/Docs/aircraft/f15c/cockpit-instruments.html), [HUD operation](/Docs/aircraft/f15c/hud-operation.html), [Touch UI](/Docs/aircraft/f15c/touch-ui.html).

## Radar and target data

AN/APG-63 tracking and search are displayed on VSD (Vertical Situation Display). Core modes covered here are Long Range Search (LRS), Track-While-Scan (TWS), Single Target Track (STT), and Close-Range Auto Acquisition.

LRS is primarily for search, TWS maintains track continuity while scanning, and STT is single-target pursuit mode. Distance scale and antenna elevation define the active coverage; being inside distance scale does not guarantee altitude coverage.

Radar data contributes to HUD target, range, and weapon-display logic. Raw return, track data, and STT lock states differ, so target symbols must be interpreted by mode.

Relevant page: [AN/APG-63 Radar and VSD](/Docs/aircraft/f15c/radar.html).

## Weapons and display behavior

F-15C weapons workflows include cannon, AIM-9, AIM-7, and AIM-120. Shared symbols exist, but launch constraints and guidance readiness differ by weapon and mode.

| Weapon | Typical display and requirements |
| --- | --- |
| Cannon | Depending on available ranging data, it supports different pipper references including GDS and post-launch BATR prompts. |
| AIM-9 | Uses seeker-state guidance; use radar or IR lock state according to current mode and targeting logic. |
| AIM-7 | In this game, launch requires STT and sustained radar support after release. |
| AIM-120 | Uses radar-supported launch timing and can also be fired in VISUAL mode when no PDT is available. |

HUD values such as ASE, turn point, and DLZ are dynamic by mode and closure geometry; ASE activation and guidance state should be evaluated before shot decisions.

Relevant pages: [HUD Operation](/Docs/aircraft/f15c/hud-operation.html), [Radar and VSD](/Docs/aircraft/f15c/radar.html).

## Countermeasure and warning systems

TEWS/RWR indicates radar threats and electronic attack activity. RWR symbol distance is relative to threat direction/rate indications, not geometric slant range.

Different warnings represent different cue families (search, track, hard lock, launch-related cues). Infrared warnings are not always represented in the RWR stream. See [Defensive Systems](/Docs/aircraft/f15c/defensive-systems.html).

## Reading order

For first-time onboarding of this aircraft:

1. [Touch UI](/Docs/aircraft/f15c/touch-ui.html)
2. [Cockpit Instruments](/Docs/aircraft/f15c/cockpit-instruments.html)
3. [HUD Operation](/Docs/aircraft/f15c/hud-operation.html)
4. [AN/APG-63 Radar and VSD](/Docs/aircraft/f15c/radar.html)
5. [Defensive Systems](/Docs/aircraft/f15c/defensive-systems.html)

Acronym references are listed in [Appendix: Acronyms](/Docs/aircraft/f15c/appendix.html).

## Roadmap

Current implementation does not yet include:

1. Cold start from dead-air state
2. Ground crew service interactions (refuelling, rearm, repair, external power)
3. Full ejection sequence chain
4. In-sim interactive radio voice with AWACS, wingmen, ATC, and ground support
