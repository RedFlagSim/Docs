# Touch UI

This page applies to iOS and Android touch devices.

## Navigation + AA Mode

### Navigation Mode

![Navigation Mode](/assets/F-15C/TouchUI/navigation_mode.png)

### AA Mode

![AA Mode](/assets/F-15C/TouchUI/aa_mode.png)

<a id="ui-terms-top"></a>

## UI Index

<div class="term-cloud">
  <a href="#item-1">1 Function Panel</a>
  <a href="#item-2">2 Mode Switch</a>
  <a href="#item-3">3 UI Element Edit</a>
  <a href="#item-4">4 Main Menu</a>
  <a href="#item-5">5 Input Indicator</a>
  <a href="#item-6">6 Landing Gear Switch</a>
  <a href="#item-7">7 Flaps Switch</a>
  <a href="#item-8">8 Throttle</a>
  <a href="#item-9">9 Throttle Mode Switch</a>
  <a href="#item-10">10 Speed Brake Switch</a>
  <a href="#item-11">11 Show MFD</a>
  <a href="#item-12">12 Show Tac Map</a>
  <a href="#item-13">13 Paddle Switch</a>
  <a href="#item-15">15 Rudder</a>
  <a href="#item-16">16 Padlock</a>
  <a href="#item-17">17 Camera Switch Menu</a>
  <a href="#item-18">18 Cursor</a>
  <a href="#item-19">19 Castle Switch</a>
  <a href="#item-20">20 Status Bar</a>
  <a href="#item-21">21 Chaff/Flare Release</a>
  <a href="#item-22">22 Master Arm Switch</a>
  <a href="#item-23">23 Gun Trigger</a>
  <a href="#item-24">24 Weapon Select Switch</a>
  <a href="#item-25">25 Antenna Elevation</a>
  <a href="#item-26">26 Coolie Switch</a>
  <a href="#item-27">27 Weapon Release</a>
  <a href="#item-28">28 Auto Acquisition Switch</a>
</div>

## Detailed Explanation

<a id="item-1"></a>
### 1. Function Panel

Long-press or double-tap to activate the temporary function touch panel. The panel has 4 tabs:

<div class="panel-grid">
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_main.png" alt="Touch Panel MAIN" />
    <figcaption>MAIN</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_nav.png" alt="Touch Panel NAV" />
    <figcaption>NAV</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_hud.png" alt="Touch Panel HUD" />
    <figcaption>HUD</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_misc.png" alt="Touch Panel MISC" />
    <figcaption>MISC</figcaption>
  </figure>
</div>

[Back to top](#ui-terms-top)

<a id="item-2"></a>
### 2. Mode Switch

Switch between Navigation mode and AA (air-to-air) mode.

[Back to top](#ui-terms-top)

<a id="item-3"></a>
### 3. UI Element Edit

Enter UI element edit mode. In this mode, selecting a UI element shows a brief function hint. You can move UI elements to your preferred positions, and the system saves them persistently.

![Edit Mode](/assets/F-15C/TouchUI/edit_mode.png)

[Back to top](#ui-terms-top)

<a id="item-4"></a>
### 4. Main Menu

Open the main game menu, including:

- `Aircraft Setup`: Open the player aircraft setup UI
- `Preferences`: Open the game preferences UI
- `Weather / Time`: Open weather and time setup UI
- `Tac Map`: Open tactical map
- `Tactical`: Tactical menu
- `Freeze / Resume`: Pause/resume game
- `Playback`: Enter replay mode
- `Restart`: Restart current mission
- `Calibrate`: Calibrate gyroscope
- `Quit`: Quit current mission

![Main Menu](/assets/F-15C/TouchUI/main_menu.png)

[Back to top](#ui-terms-top)

<a id="item-5"></a>
### 5. Input Indicator

Displays current player input and flight-control output data, including pitch, roll, rudder, and throttle. This data is available in replay.

[Back to top](#ui-terms-top)

<a id="item-6"></a>
### 6. Landing Gear Switch

Controls landing gear up/down. Landing gear must be lowered below 250 knots; lowering above 250 knots will damage the gear.

[Back to top](#ui-terms-top)

<a id="item-7"></a>
### 7. Flaps Switch

Controls flap up/down.

[Back to top](#ui-terms-top)

<a id="item-8"></a>
### 8. Throttle

Throttle input range is from idle to max afterburner. Dragging continuously to the right for 2 seconds switches to single-engine throttle control mode.

![Single Throttle](/assets/F-15C/TouchUI/single_throttle.png)

[Back to top](#ui-terms-top)

<a id="item-9"></a>
### 9. Throttle Mode Switch

This is a three-position switch:

- Bottom: Manual mode.
- Middle: IAS follow mode. In this mode, move the throttle to set target IAS, and flight control follows automatically.
- Top: On-speed AoA follow mode. In this mode, throttle automatically holds on-speed AoA, useful for beginner landings.

[Back to top](#ui-terms-top)

<a id="item-10"></a>
### 10. Speed Brake Switch

This is a three-position maintained switch:

- Center: Speed brake stop.
- Up: Deploy speed brake.
- Down: Retract speed brake.

Its logic is similar to a car power-window switch, but it does not auto-return to center.

[Back to top](#ui-terms-top)

<a id="item-11"></a>
### 11. Show MFD

In cockpit camera view, holding either of these two buttons locks the camera to the corresponding display. At this time, your right thumb can operate the cursor and other function buttons. The two images below show the corresponding viewing angles.

![VSD View](/assets/F-15C/TouchUI/vsd_.png)

![MPCD View](/assets/F-15C/TouchUI/mpcd_.png)

[Back to top](#ui-terms-top)

<a id="item-12"></a>
### 12. Show Tac Map

Show the runtime tactical map.

![Runtime Tac Map](/assets/F-15C/TouchUI/runtime_tacmap.png)

[Back to top](#ui-terms-top)

<a id="item-13"></a>
### 13. Paddle Switch

When autopilot is on, holding this button temporarily disconnects autopilot.

[Back to top](#ui-terms-top)

<a id="item-15"></a>
### 15. Rudder

Drag left/right to control rudder and nosewheel steering. Drag up to control main gear wheel brakes, and the sensor or weapon `cage/uncage` switch.

[Back to top](#ui-terms-top)

<a id="item-16"></a>
### 16. Padlock

Used for automatic view lock. If other entities are near your aircraft, holding this button locks view to that entity. If multiple entities exist, hold `padlock` with the right hand and double-tap blank area with the left hand to switch to the next entity.

[Back to top](#ui-terms-top)

<a id="item-17"></a>
### 17. Camera Switch Menu

Used to switch camera positions:

- Single tap: Automatically switch to the next camera position.
- Hold: Open camera menu. Keep holding and drag to target camera position, then release to switch.

[Back to top](#ui-terms-top)

<a id="item-18"></a>
### 18. Cursor

Controls the cursor on `VSD` and `SIT` screens. Double-tap this button to manually designate a target.

[Back to top](#ui-terms-top)

<a id="item-19"></a>
### 19. Castle Switch

Used to manage displays and SOI (sensor of interest):

- `castle` up: Switch SOI between `VSD` and `SIT`; subsequent cursor control applies to the current SOI.
- When `VSD` is SOI:
  - `castle` right: Switch `MPCD` to the stores management page.
  - `castle` left: Switch back to the `SIT` display page.
- When `SIT` is SOI:
  - `castle` right: Switch to non-center mode.
  - `castle` left: Switch to expanded mode.
  - `castle` down: Switch to flight-group mode (this mode fixes display range to 5 NM).

[Back to top](#ui-terms-top)

<a id="item-20"></a>
### 20. Status Bar

From right to left, the status bar shows:

- Game FPS
- Wind speed (knots)
- Wind direction (relative to line of sight)
- Player aircraft gross weight
- Game time
- Autopilot on indicator

[Back to top](#ui-terms-top)

<a id="item-21"></a>
### 21. Chaff/Flare Release

Release logic:

- Tap: Release 1 `chaff` and 1 `flare`.
- Flick up: Release 1 `chaff`.
- Flick down: Release 1 `flare`.
- Flick left: Release 5 `chaff` and 5 `flare`.
- Flick right: Release 10 `chaff` and 10 `flare`.

[Back to top](#ui-terms-top)

<a id="item-22"></a>
### 22. Master Arm Switch

Before firing weapons, this switch must be set to ON.

[Back to top](#ui-terms-top)

<a id="item-23"></a>
### 23. Gun Trigger

When the currently selected weapon is gun, tap to fire.

[Back to top](#ui-terms-top)

<a id="item-24"></a>
### 24. Weapon Select Switch

Flick up/down to switch among `AAM` (advanced medium-range missile), `MRM` (medium-range missile), `SRM` (short-range missile), and `GUN`; flick left/right to cycle through missile entities.

[Back to top](#ui-terms-top)

<a id="item-25"></a>
### 25. Antenna Elevation

When radar is in LRW/TWS mode, this controls pitch reference for antenna scan.

[Back to top](#ui-terms-top)

<a id="item-26"></a>
### 26. Coolie Switch

Used for page and display management. In the F-15C workflow, treat the coolie switch as a quick way to move cockpit attention between tactical pages without opening the main menu. Confirm the active display before using cursor or designate commands.

[Back to top](#ui-terms-top)

<a id="item-27"></a>
### 27. Weapon Release

Releases the currently selected missile or store when master arm is ON and the selected weapon is ready. For air-to-air missiles, confirm target source, range cue, and aircraft attitude before pressing. This button is separate from the gun trigger.

[Back to top](#ui-terms-top)

<a id="item-28"></a>
### 28. Auto Acquisition Switch

Auto lock switch. Tap to toggle radar mode.

[Back to top](#ui-terms-top)
<style scoped>
.term-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 6px;
}

.term-cloud a {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  line-height: 1.2;
  font-size: 13px;
  transition: border-color .16s ease, background-color .16s ease, transform .16s ease;
}

.term-cloud a:hover {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  transform: translateY(-1px);
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 12px 0 4px;
}

.panel-grid figure {
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  overflow: hidden;
}

.panel-grid img {
  display: block;
  width: 100%;
  height: auto;
}

.panel-grid figcaption {
  padding: 6px 8px;
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}

@media (max-width: 640px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
