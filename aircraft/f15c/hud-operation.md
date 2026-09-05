<a id="hud-page-top"></a>

# F-15C HUD Operation

The Head-Up Display (HUD) is the primary flight and weapons reference in the F-15C. It combines attitude, navigation, air data, target, and weapon information so the pilot can keep looking outside during maneuvering and engagements.

Jump to a section:

<nav class="term-cloud tac-editor-index" aria-label="HUD chapter index">
  <a href="#hud-symbols-top">Basic HUD Symbology</a>
  <a href="#hud-gun">Gun Modes</a>
  <a href="#hud-aim9">AIM-9 Sidewinder Modes</a>
  <a href="#hud-aim7">AIM-7 Sparrow Modes</a>
  <a href="#hud-aim120">AIM-120 AMRAAM Modes</a>
  <a href="#hud-auto-acquisition">Auto-Acquisition Radar Modes</a>
</nav>

<a id="hud-symbols-top"></a>

## Basic HUD Symbology

Many HUD symbols remain visible regardless of the selected master mode.

The small angled pointers on the heading, airspeed, altitude, and angle-of-attack scales are called carets. Each caret points to the current value on its scale.

![Figure 38. Numbered F-15C HUD basic symbology](/assets/F-15C/Manual/fig-38-hud-basic-symbology.png)

### Symbology Index

Select a numbered item to jump to its detailed explanation.

<div class="term-cloud tac-editor-index">
  <a href="#hud-item-1">1 Heading Scale</a>
  <a href="#hud-item-2">2 Airspeed Scale</a>
  <a href="#hud-item-3">3 Velocity Vector</a>
  <a href="#hud-item-4">4 Angle-of-Attack Scale</a>
  <a href="#hud-item-5">5 Mach and G Readouts</a>
  <a href="#hud-item-6">6 Gun Cross</a>
  <a href="#hud-item-7">7 Altitude Scale</a>
  <a href="#hud-item-8">8 Aircraft Symbol</a>
  <a href="#hud-item-9">9 Bank Steering Cue</a>
  <a href="#hud-item-10">10 Pitch Scale</a>
  <a href="#hud-item-11">11 Navigation Data</a>
  <a href="#hud-item-12">12 Horizon Line</a>
</div>

### Detailed Explanation

<a id="hud-item-1"></a>
#### 1. Heading Scale

The horizontal tape shows magnetic heading. Two-digit labels represent tens of degrees, so `35` means 350° and `00` means 000°. The caret points to the aircraft's current heading on the scale.

The vertical line extending below the tape indicates the bearing to the selected navigation point. In this example, the marker is to the right of the current heading, so a right turn is needed to fly toward the navigation point.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-2"></a>
#### 2. Airspeed Scale

The left vertical tape shows indicated airspeed in knots. The caret points to the current indicated airspeed on the scale.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-3"></a>
#### 3. Velocity Vector

The circular flight-path marker shows where the aircraft is actually moving. Its position relative to the aircraft symbol reveals the difference between nose attitude and flight path, including drift caused by wind or sideslip.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-4"></a>
#### 4. Angle-of-Attack Scale

The inner scale beside the airspeed tape shows angle of attack in AoA units. The caret points to the current AoA on the scale. AoA rises as the nose-to-flight-path angle increases.

The thickest tick mark on the scale represents on-speed AoA. During landing, align the current AoA caret with this mark to maintain the correct landing angle of attack.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-5"></a>
#### 5. Mach and G Readouts

The upper value is current Mach. The lower pair shows current G and maximum allowable G; in this compact display format, `10` represents 1.0 G and `87` represents 8.7 G.

The F-15C's maximum allowable load factor is 9 G, but the system recalculates the allowable limit based on the current Mach number and external stores configuration. The HUD therefore shows the limit for the current conditions, which is not always 9 G.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-6"></a>
#### 6. Gun Cross

The fixed cross is aligned with the M61 cannon boresight and appears when master arm is on. Computed gun modes add their own aiming solution in addition to this reference.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-7"></a>
#### 7. Altitude Scale

The right vertical tape shows barometric altitude in feet during normal navigation. The caret points to the current altitude on the scale.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-8"></a>
#### 8. Aircraft Symbol

The W-shaped symbol is a fixed aircraft waterline reference. Comparing it with the velocity vector makes the aircraft's angle of attack and flight-path displacement easy to see.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-9"></a>
#### 9. Bank Steering Cue

This cue provides steering toward the selected navigation point. Bank to bring the velocity vector toward the cue, then reduce bank as the cue and flight path come together.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-10"></a>
#### 10. Pitch Scale

The pitch ladder shows aircraft pitch attitude in 5-degree increments and rotates with bank angle. Positive pitch lines appear above the horizon and negative pitch lines below it.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-11"></a>
#### 11. Navigation Data

The lower-right block identifies the selected route point and navigation mode, followed by source/distance and estimated time to go. In the example, `1 NAV`, `N 30.3`, and `5 MIN` indicate route point 1, 30.3 NM remaining, and approximately five minutes to arrival.

[Back to symbology index](#hud-symbols-top)

<a id="hud-item-12"></a>
#### 12. Horizon Line

The horizon line is the 0° pitch reference. It remains an attitude reference when the outside horizon is difficult to see and moves relative to the aircraft symbol as pitch changes.

[Back to symbology index](#hud-symbols-top) · [Back to top](#hud-page-top)

<a id="hud-gun"></a>

## Gun Modes

The gun HUD presentation depends on whether radar ranging is available. The following three figures show the no-lock aiming reference, the GDS reticle with an STT lock, and the BATR cue after firing.

<nav class="term-cloud tac-editor-index" aria-label="Gun modes index">
  <a href="#hud-gun-no-lock">Figure 1 · No Radar Lock</a>
  <a href="#hud-gun-gds">Figure 2 · GDS Reticle</a>
  <a href="#hud-gun-batr">Figure 3 · BATR Cue</a>
</nav>

<a id="hud-gun-no-lock"></a>

### Gun Without Radar Lock

![Gun figure 1: aiming reference without radar lock](/assets/F-15C/HUD/gun-no-lock.png)

Without radar lock, the gun aiming point is calculated for a fixed assumed range of **2,000 feet**. It represents the predicted bullet position at that range, not a solution based on the target's actual radar-measured distance.

Unlike the F-16 or F/A-18, the F-15C does not display a gun funnel when radar ranging is unavailable. It uses this fixed-range aiming reference instead.

[Back to gun index](#hud-gun) · [Back to top](#hud-page-top)

<a id="hud-gun-gds"></a>

### Gun Director Sight

With the gun selected, the Gun Director Sight (GDS) reticle appears only when the radar is in Single Target Track (STT) and the target is within gun range.

![Gun figure 2: GDS reticle and target data, numbered 1 through 7](/assets/F-15C/HUD/gun-gds.png)

<nav class="term-cloud tac-editor-index" aria-label="GDS numbered index">
  <a href="#hud-gds-item-1">1. GDS Reticle</a>
  <a href="#hud-gds-item-2">2. Target Designator Box</a>
  <a href="#hud-gds-item-3">3. Gun Ammunition</a>
  <a href="#hud-gds-item-4">4. Range Cue</a>
  <a href="#hud-gds-item-5">5. Closure Rate</a>
  <a href="#hud-gds-item-6">6. Radar Range Scale</a>
  <a href="#hud-gds-item-7">7. Target Slant Range</a>
</nav>

<a id="hud-gds-item-1"></a>

#### 1. GDS Reticle

Each tick around the reticle represents **1,000 feet**. The small center dot is the computed gun aiming pipper.

To fire, hold the center pipper steadily on the target, or sweep it across the target in the direction of the target's lift vector while firing. GDS provides a predicted aiming solution; a hit also depends on how the target moves during the bullets' time of flight.

[Back to GDS index](#hud-gun-gds)

<a id="hud-gds-item-2"></a>

#### 2. Target Designator Box

The Target Designator (TD) box marks the radar-locked target's Line of Sight (LOS). It shows the target's current direction, not the lead-compensated gun aiming point.

[Back to GDS index](#hud-gun-gds)

<a id="hud-gds-item-3"></a>

#### 3. Gun Ammunition

This readout shows the number of gun rounds remaining. In the figure, `950` means 950 rounds remain.

[Back to GDS index](#hud-gun-gds)

<a id="hud-gds-item-4"></a>

#### 4. Range Cue

The bright dot near the reticle's circumference is a range cue that helps assess gun range. It changes with current conditions rather than representing a fixed distance reference.

[Back to GDS index](#hud-gun-gds)

<a id="hud-gds-item-5"></a>

#### 5. Closure Rate

Closure rate shows how quickly the distance between your aircraft and the target is changing, in knots. Positive values mean the distance is decreasing; negative values mean it is increasing. The figure shows `0`.

[Back to GDS index](#hud-gun-gds)

<a id="hud-gds-item-6"></a>

#### 6. Radar Range Scale

The radar range scale on the right side of the HUD indicates target range. The `10` at the top means the current full-scale range is **10 nautical miles**; the middle `5` marks 5 nautical miles.

[Back to GDS index](#hud-gun-gds)

<a id="hud-gds-item-7"></a>

#### 7. Target Slant Range

All three locations marked by number 7 show target slant range: the straight-line distance from your aircraft to the target.

- **Range mark on the reticle circumference:** read at 1,000 feet per tick; the illustrated position is visually estimated at about 3,300 feet.
- **Pointer on the radar range scale:** indicates target range against a scale in nautical miles.
- **Lower-right numeric readout:** `R 0.6` indicates a target slant range of 0.6 nautical miles.

Distinguish the reticle's feet scale from the nautical miles used by the radar scale and numeric readout.

[Back to GDS index](#hud-gun-gds) · [Back to gun index](#hud-gun) · [Back to top](#hud-page-top)

<a id="hud-gun-batr"></a>

### Bullets at Target Range (BATR)

![Gun figure 3: number 1 marks the BATR triangle; number 2 marks closure rate](/assets/F-15C/HUD/gun-batr.png)

<nav class="term-cloud tac-editor-index" aria-label="BATR numbered index">
  <a href="#hud-batr-item-1">1. BATR Triangle</a>
  <a href="#hud-batr-item-2">2. Negative Closure Rate</a>
</nav>

<a id="hud-batr-item-1"></a>

#### 1. BATR Triangle

BATR stands for Bullets at Target Range. After the gun fires, the HUD displays a triangle at the bullets' position when they reach the target's current range.

The GDS pipper is a prediction made when firing. Even with the pipper on the target, a hit is possible only if the target's acceleration does not change substantially during the bullets' time of flight. BATR provides post-shot assessment instead, showing whether the fired bullets overlap the target when they reach its range.

If the BATR triangle remains superimposed on the target, this indicates that the bullet stream is hitting it. If the cue is separated from the target, the bullets are passing beside it at target range.

[Back to BATR index](#hud-gun-batr)

<a id="hud-batr-item-2"></a>

#### 2. Negative Closure Rate

The `-11` in the figure is closure rate in knots. The minus sign means the target is opening: the distance between the two aircraft is increasing at approximately 11 knots.

[Back to BATR index](#hud-gun-batr) · [Back to gun index](#hud-gun) · [Back to top](#hud-page-top)

<a id="hud-aim9"></a>

## AIM-9 Sidewinder Modes

The following sequence describes this game's HUD: seeker modes, radar-assisted launch cues, and the changes as a target closes from beyond maximum range to below minimum range.

Assess range conditions separately from seeker lock. An expanded ASE circle or `IN RNG` does not confirm a seeker lock; also confirm that the seeker points at the target and produces the high-pitched lock tone.

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 modes index">
  <a href="#hud-aim9-caged">Figure 1 · SM and Caged Mode</a>
  <a href="#hud-aim9-uncaged">Figure 2 · Uncaged Mode</a>
  <a href="#hud-aim9-dlz">Figure 3 · PDT and Dynamic Launch Zone</a>
  <a href="#hud-aim9-in-range">Figure 4 · In Range, but Still Caged</a>
  <a href="#hud-aim9-slaved">Figure 5 · Uncaging and Slaving to the PDT</a>
  <a href="#hud-aim9-rtr">Figure 6 · Inside RTR and the Close-Range Ring</a>
  <a href="#hud-aim9-too-close">Figure 7 · Below Minimum Range: Break X</a>
  <a href="#hud-aim9-gun-composite">Gun Composite Mode</a>
</nav>

<a id="hud-aim9-caged"></a>

### Figure 1 · SM and Caged Mode

Selecting short-range missiles (SM) displays the AIM-9 weapon status and seeker symbols on the HUD. The seeker defaults to caged mode, pointing near the aircraft boresight.

![Figure 1 · SM and Caged Mode](/assets/F-15C/HUD/aim9-01-caged.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 1 numbered index">
  <a href="#hud-aim9-caged-item-1">1. Weapon Status: S 2M</a>
  <a href="#hud-aim9-caged-item-2">2. Seeker Direction</a>
  <a href="#hud-aim9-caged-item-3">3. Seeker Search Area (Not Yet Implemented)</a>
</nav>

<a id="hud-aim9-caged-item-1"></a>

#### 1. Weapon Status: S 2M

The lower-left `S 2M` readout identifies the selected weapon and remaining quantity:

- `S`: SM, short-range missiles.
- `2`: two missiles remaining.
- `M`: the selected variant is AIM-9M.

[Back to figure 1 index](#hud-aim9-caged)

<a id="hud-aim9-caged-item-2"></a>

#### 2. Seeker Direction

The small circle shows the missile seeker's current direction. Here it remains caged near the aircraft boresight rather than following the target.

[Back to figure 1 index](#hud-aim9-caged)

<a id="hud-aim9-caged-item-3"></a>

#### 3. Seeker Search Area (Not Yet Implemented)

The larger outer circle represents the seeker search area. The corresponding search function is not yet implemented; this circle must not be interpreted as confirmation that a search or target lock has been completed.

[Back to figure 1 index](#hud-aim9-caged) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-uncaged"></a>

### Figure 2 · Uncaged Mode

Uncaging releases the seeker from its caged position. In this figure, the small circle has moved away from the boresight area and is tracking the target.

![Figure 2 · Uncaged Mode](/assets/F-15C/HUD/aim9-02-uncaged.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 2 numbered index">
  <a href="#hud-aim9-uncaged-item-1">1. U: Uncaged Status</a>
  <a href="#hud-aim9-uncaged-item-2">2. Tracking Seeker Direction</a>
</nav>

<a id="hud-aim9-uncaged-item-1"></a>

#### 1. U: Uncaged Status

The `U` at the lower right indicates that the seeker is uncaged. It identifies the seeker mode, not a confirmed target lock by itself.

[Back to figure 2 index](#hud-aim9-uncaged)

<a id="hud-aim9-uncaged-item-2"></a>

#### 2. Tracking Seeker Direction

The small circle shows the line of sight of the seeker tracking the target. Before launch, confirm that it points at the intended target and that the high-pitched lock tone is audible in the headset.

[Back to figure 2 index](#hud-aim9-uncaged) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-dlz"></a>

### Figure 3 · PDT and Dynamic Launch Zone

Once the radar has a Primary Designated Target (PDT), its target data allows the system to calculate the missile's Dynamic Launch Zone (DLZ) and display the ASE circle, steering dot, target box, and range cues. The target in this figure is still beyond maximum range.

![Figure 3 · PDT and Dynamic Launch Zone](/assets/F-15C/HUD/aim9-03-dlz.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 3 numbered index">
  <a href="#hud-aim9-dlz-item-1">1. ASE and Target Velocity Vector</a>
  <a href="#hud-aim9-dlz-item-2">2. Steering Dot</a>
  <a href="#hud-aim9-dlz-item-3">3. Target Designator Box</a>
  <a href="#hud-aim9-dlz-item-4">4. RMax: Maximum Range</a>
  <a href="#hud-aim9-dlz-item-5">5. RTR: Range Turn and Run</a>
  <a href="#hud-aim9-dlz-item-6">6. RMin: Minimum Range</a>
</nav>

<a id="hud-aim9-dlz-item-1"></a>

#### 1. ASE and Target Velocity Vector

The Allowable Steering Error (ASE) circle is reduced in size while the target is beyond maximum range.

The line extending from the circle represents the target's velocity vector in a top-down view. It is not a trace of the target's vertical movement across the HUD.

[Back to figure 3 index](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-2"></a>

#### 2. Steering Dot

The bright dot is the steering dot. Maneuvering to place the dot inside the ASE circle helps reduce the turning required for the missile to track the target after launch, conserving missile energy and improving the engagement geometry.

The dot is a launch steering reference, not a seeker-lock symbol. The target here remains beyond maximum range, so placing the dot inside ASE alone is not a reason to launch.

[Back to figure 3 index](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-3"></a>

#### 3. Target Designator Box

The TD Box marks the radar PDT's Line of Sight (LOS). It locates the radar-designated target but does not confirm that the AIM-9 infrared seeker has locked onto it.

[Back to figure 3 index](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-4"></a>

#### 4. RMax: Maximum Range

The upper DLZ cue marks the calculated maximum range under current conditions. A target beyond RMax is outside the computed launch envelope.

[Back to figure 3 index](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-5"></a>

#### 5. RTR: Range Turn and Run

RTR estimates missile range against a target that turns and runs away, commonly described as no-escape range. A target inside RTR presents more favorable launch conditions, but this is not a guarantee of a hit.

[Back to figure 3 index](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-6"></a>

#### 6. RMin: Minimum Range

The lower DLZ cue marks minimum range. Do not launch when target range is below RMin; see [Figure 7](#hud-aim9-too-close) for the corresponding HUD warning.

[Back to figure 3 index](#hud-aim9-dlz) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-in-range"></a>

### Figure 4 · In Range, but Still Caged

When the target enters maximum range, the ASE circle expands and the HUD displays `IN RNG`. The range conditions now allow a potential hit, but this does not confirm an infrared seeker lock.

![Figure 4 · In Range, but Still Caged](/assets/F-15C/HUD/aim9-04-in-range.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 4 numbered index">
  <a href="#hud-aim9-in-range-item-1">1. Expanded ASE Circle</a>
  <a href="#hud-aim9-in-range-item-2">2. Closure Rate and Range Pointer</a>
</nav>

<a id="hud-aim9-in-range-item-1"></a>

#### 1. Expanded ASE Circle

The ASE circle is expanded, but the small seeker circle remains near the boresight rather than pointing at the target in the TD Box to the left. Do not launch in this state.

The seeker must point at the target and produce the high-pitched lock tone. Assess these together with range before launching; an expanded ASE circle or `IN RNG` alone is insufficient.

[Back to figure 4 index](#hud-aim9-in-range)

<a id="hud-aim9-in-range-item-2"></a>

#### 2. Closure Rate and Range Pointer

Number 2 points to the radar range pointer and the adjacent closure-rate readout. `709` is in knots; the positive value means the distance between the aircraft is decreasing. It is not a seeker-lock cue.

[Back to figure 4 index](#hud-aim9-in-range) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-slaved"></a>

### Figure 5 · Uncaging and Slaving to the PDT

With a radar PDT available, uncaging slaves the seeker to that target's Line of Sight (LOS).

![Figure 5 · Uncaging and Slaving to the PDT](/assets/F-15C/HUD/aim9-05-slaved.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 5 numbered index">
  <a href="#hud-aim9-slaved-item-1">1. Seeker Slaved to Target LOS</a>
</nav>

<a id="hud-aim9-slaved-item-1"></a>

#### 1. Seeker Slaved to Target LOS

The small seeker circle overlaps the target box, and `U` appears at the lower right. The radar supplies the target direction to point the seeker toward it.

Slaving to the target direction is not the same as acquiring an infrared lock. Confirm the high-pitched seeker lock tone and acceptable range conditions before launch.

[Back to figure 5 index](#hud-aim9-slaved) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-rtr"></a>

### Figure 6 · Inside RTR and the Close-Range Ring

When the target enters RTR, a triangle appears beneath the TD Box and the ASE circle flashes. These cues indicate very favorable launch conditions; seeker lock and the RMin restriction still apply.

![Figure 6 · Inside RTR and the Close-Range Ring](/assets/F-15C/HUD/aim9-06-rtr.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 6 numbered index">
  <a href="#hud-aim9-rtr-item-1">1. Close-Range Ring</a>
  <a href="#hud-aim9-rtr-item-2">2. Triangle Beneath the TD Box</a>
</nav>

<a id="hud-aim9-rtr-item-1"></a>

#### 1. Close-Range Ring

An additional circular range indication appears when target range falls below 12,000 feet. It provides a close-range slant-range reference and has a different purpose from the outer ASE circle.

The inner range arc in this figure is approximately a half-circle, indicating that the target has just entered about 6,000 feet. The lower-right numeric readout also shows `R 1.0`.

[Back to figure 6 index](#hud-aim9-rtr)

<a id="hud-aim9-rtr-item-2"></a>

#### 2. Triangle Beneath the TD Box

The triangle below the target box indicates that the target is inside RTR. Together with the flashing ASE circle, it signals favorable launch conditions. A still image cannot show the ASE flashing.

[Back to figure 6 index](#hud-aim9-rtr) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-too-close"></a>

### Figure 7 · Below Minimum Range: Break X

When the target is closer than minimum range, the ASE circle disappears and a flashing Break X replaces it.

![Figure 7 · Below Minimum Range: Break X](/assets/F-15C/HUD/aim9-07-break-x.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 figure 7 numbered index">
  <a href="#hud-aim9-too-close-item-1">1. Break X: Target Too Close</a>
</nav>

<a id="hud-aim9-too-close-item-1"></a>

#### 1. Break X: Target Too Close

The large X is the Break X cue. Do not launch: at this short distance, the missile may not have time to accelerate to an effective speed, and explosion fragments may intersect your aircraft's flight path.

Do not disregard the minimum-range warning even if the seeker remains on the target or the triangle is still visible beneath the TD Box. Increase separation before reassessing launch conditions.

[Back to figure 7 index](#hud-aim9-too-close) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-gun-composite"></a>

### Gun Composite Mode

With SM (short-range missiles) selected, command **Coolie Up** to enter gun composite mode. The gun becomes available for selection and use while retaining the SM missile selection, and the HUD combines missile and gun symbology.

<nav class="term-cloud tac-editor-index" aria-label="Gun composite mode figure index">
  <a href="#hud-aim9-gun-composite-normal">Figure 1 · Normal HUD</a>
  <a href="#hud-aim9-gun-composite-rej">Figure 2 · HUD REJ</a>
</nav>

<a id="hud-aim9-gun-composite-normal"></a>

#### Figure 1 · Normal HUD

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite.png" alt="SM gun composite mode with heading, airspeed, and altitude tapes, the GDS reticle, and missile seeker direction" />
  <figcaption>Gun composite mode with the normal HUD presentation</figcaption>
</figure>

The figure combines the gun GDS reticle, target box, and missile seeker direction. The lower-left `S2M950` readout combines SM weapon status and gun ammunition: `S2M` indicates two AIM-9M missiles, and `950` indicates 950 gun rounds remaining.

See the [GDS explanation](#hud-gun-gds) for the gun reticle and its use, and [SM seeker direction](#hud-aim9-uncaged-item-2) for the small seeker circle.

[Back to gun composite index](#hud-aim9-gun-composite) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim9-gun-composite-rej"></a>

#### Figure 2 · HUD REJ

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite-rej.png" alt="Gun composite mode in HUD REJ with heading, airspeed, and altitude tapes hidden while the gun reticle and target symbols remain" />
  <figcaption>HUD REJ: gun composite display with three flight tapes hidden</figcaption>
</figure>

Figure 2 shows the same gun composite mode with HUD REJ selected. **The heading, airspeed, and altitude tapes are hidden** to reduce clutter. The gun reticle, seeker direction, target box, and radar range scale remain visible.

This changes the HUD's level of detail without leaving gun composite mode. The `0–10` scale still visible on the right is the radar range scale, not the altitude tape.

[Back to gun composite index](#hud-aim9-gun-composite) · [Back to AIM-9 index](#hud-aim9) · [Back to top](#hud-page-top)

<a id="hud-aim7"></a>

## AIM-7 Sparrow Modes

Most AIM-7 HUD symbols are shared with the [AIM-9M presentation](#hud-aim9), including the ASE circle, steering dot, Target Designator (TD) box, Dynamic Launch Zone (DLZ), and target range readouts. This section focuses on the differences.

**In this game, the AIM-7 must be launched with the radar in Single Target Track (STT).** It uses semi-active radar homing and requires continued illumination from your radar after launch until impact. Do not apply the AIM-9's seeker cage/uncage and infrared lock-tone checks to the Sparrow.

<nav class="term-cloud tac-editor-index" aria-label="AIM-7 modes index">
  <a href="#hud-aim7-selected">Figure 1 · AIM-7 Selected</a>
  <a href="#hud-aim7-stt">Figure 2 · STT and Launch Cues</a>
  <a href="#hud-aim7-rtr">Figure 3 · Inside RTR</a>
  <a href="#hud-aim7-flood">Figure 4 · FLOOD Illumination</a>
</nav>

<a id="hud-aim7-selected"></a>

### Figure 1 · AIM-7 Selection and the 12° Illumination Circle

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-01-selected.png" alt="AIM-7 selected with a 12-degree FLOOD illumination reference circle but no FLOOD annunciation" />
  <figcaption>AIM-7 selected: the outer circle is the FLOOD illumination reference</figcaption>
</figure>

Selecting MR (medium-range missiles) with AIM-7 selected displays a **12° circle** representing the radar illumination area in FLOOD mode. In FLOOD, keep the target inside this circle.

This large circle is neither the ASE circle nor the AIM-9 seeker search area. It appears when AIM-7 is selected, so **the circle alone does not mean the radar is already in FLOOD mode**. See [Figure 4](#hud-aim7-flood) for the actual FLOOD presentation.

[Back to AIM-7 index](#hud-aim7) · [Back to top](#hud-page-top)

<a id="hud-aim7-stt"></a>

### Figure 2 · STT and Launch Cues

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-02-stt.png" alt="AIM-7 STT presentation with the outer FLOOD reference, inner ASE circle, steering dot, TD box, and DLZ" />
  <figcaption>STT launch cues: IN RNG, target range 9.3 nautical miles</figcaption>
</figure>

With the radar tracking the target in STT, the HUD provides range and steering cues similar to AIM-9. The outer circle remains the FLOOD illumination reference; the smaller inner circle is ASE, and the bright dot is the steering dot.

- [ASE circle and target velocity vector](#hud-aim9-dlz-item-1): use the AIM-9M interpretation. The line extending from ASE represents the target velocity vector in a top-down view.
- [Steering dot](#hud-aim9-dlz-item-2): place the dot inside the ASE circle to reduce post-launch missile turning and conserve missile energy.
- [TD box](#hud-aim9-dlz-item-3): marks the radar-tracked target's line of sight.
- [DLZ range cues](#hud-aim9-dlz-item-4): interpret RMax, RTR, and RMin as in the AIM-9 section, using the current AIM-7 calculations.

The figure shows an expanded ASE circle and `IN RNG`; `R 9.3` indicates a slant range of 9.3 nautical miles. These cues help assess range and steering, but **the radar must still be in STT when launching**. Continue tracking and illuminating the target after launch.

[Back to AIM-7 index](#hud-aim7) · [Back to top](#hud-page-top)

<a id="hud-aim7-rtr"></a>

### Figure 3 · Inside RTR

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-03-rtr.png" alt="AIM-7 target inside RTR with a triangle beneath the TD box and a range of 7.4 nautical miles" />
  <figcaption>Inside RTR: a triangle appears beneath the target box</figcaption>
</figure>

A triangle is visible beneath the target box, and `R 7.4` indicates 7.4 nautical miles. Interpret the triangle and flashing ASE as described in the [AIM-9 RTR section](#hud-aim9-rtr): they indicate more favorable launch conditions, not a guaranteed hit. A still image cannot show the flashing.

The key difference remains guidance support. AIM-7 requires STT at launch and continued radar illumination afterward. Being inside RTR does not make the missile autonomous.

[Back to AIM-7 index](#hud-aim7) · [Back to top](#hud-page-top)

<a id="hud-aim7-flood"></a>

### Figure 4 · FLOOD Illumination Mode

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-04-flood.png" alt="AIM-7 FLOOD mode with FLOOD annunciated and the target inside the 12-degree illumination circle" />
  <figcaption>FLOOD mode: keep the target inside the 12° illumination circle</figcaption>
</figure>

The final figure shows actual FLOOD mode, identified by `FLOOD` at the lower right. Maneuver to keep the target continuously inside the 12° circle so the radar illuminates it and supplies reflected energy for AIM-7 guidance.

If an AIM-7 has already been launched in STT and the STT lock is lost during missile flight, FLOOD can provide continued illumination support. This describes post-launch support after loss of lock; **it does not change this game's requirement to launch AIM-7 in STT**.

FLOOD does not automatically establish STT tracking or turn AIM-7 into an autonomous missile. See also [FLOOD in the auto-acquisition section](#hud-aacq-flood).

[Back to AIM-7 index](#hud-aim7) · [Back to top](#hud-page-top)

<a id="hud-aim120"></a>

## AIM-120 AMRAAM Modes

The AMRAAM's ASE circle, steering dot, TD box, and DLZ are interpreted much like those in the preceding [AIM-9](#hud-aim9) and [AIM-7](#hud-aim7) sections. This section describes AIM-120 visual launches in this game and its different target-box cue inside RTR.

<nav class="term-cloud tac-editor-index" aria-label="AMRAAM modes index">
  <a href="#hud-aim120-visual">Figure 1 · Visual Launch Without PDT</a>
  <a href="#hud-aim120-pdt">Figure 2 · PDT and Range Cues</a>
  <a href="#hud-aim120-in-range">Figure 3 · In Range</a>
  <a href="#hud-aim120-rtr">Figure 4 · Six-Point RTR Cue</a>
</nav>

<a id="hud-aim120-visual"></a>

### Figure 1 · Visual Launch Without a PDT

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-01-visual.png" alt="AIM-120 visual mode without a PDT: dashed 12-degree circle and VISUAL annunciation" />
  <figcaption>VISUAL mode: the dashed 12° circle is the visual launch reference</figcaption>
</figure>

**AIM-120 can be launched without a radar PDT.** The HUD displays `VISUAL` and a dashed **12° circle**. For a visual launch, confirm that the target is **within 10 nautical miles** and place it inside this circle.

For more distant targets within that envelope, allow lead for target movement rather than aiming only at the target's current position.

The dashed circle is the AIM-120 visual-mode reference, not an ASE circle or the AIM-7 FLOOD illumination circle. The AIM-7 requirement to launch in STT does not apply to this visual mode.

[Back to AMRAAM index](#hud-aim120) · [Back to top](#hud-page-top)

<a id="hud-aim120-pdt"></a>

### Figure 2 · PDT and Range Cues

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-02-pdt.png" alt="AIM-120 with a PDT: reduced ASE circle, steering dot, TD box, and DLZ at 40.7 nautical miles" />
  <figcaption>Pre-launch presentation with a PDT: target still beyond maximum range</figcaption>
</figure>

With a radar PDT, the HUD shows the target box, ASE circle, steering dot, and DLZ. Here, `R 40.7` indicates a target slant range of 40.7 nautical miles. The ASE circle is reduced, and the target remains beyond the currently calculated maximum range.

Refer to the preceding explanations for the shared symbols:

- [ASE and target velocity vector](#hud-aim9-dlz-item-1): interpret ASE size changes and the vector extending from the circle in the same way.
- [Steering dot](#hud-aim9-dlz-item-2): place the dot inside ASE to improve launch steering.
- [TD box](#hud-aim9-dlz-item-3): marks the radar PDT's line of sight.
- [RMax](#hud-aim9-dlz-item-4), [RTR](#hud-aim9-dlz-item-5), and [RMin](#hud-aim9-dlz-item-6): use the same interpretation, but read the current AIM-120 DLZ calculations.

The 10-nautical-mile condition in Figure 1 applies to visual launches without a PDT. It is not a universal AIM-120 range limit when a PDT is available.

[Back to AMRAAM index](#hud-aim120) · [Back to top](#hud-page-top)

<a id="hud-aim120-in-range"></a>

### Figure 3 · In Range

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-03-in-range.png" alt="AIM-120 in range with an expanded ASE circle, IN RNG, and R 27.6" />
  <figcaption>Inside the current launch envelope: IN RNG, range 27.6 nautical miles</figcaption>
</figure>

The target is inside the currently calculated launch envelope. The ASE circle expands and `IN RNG` appears; `R 27.6` indicates a slant range of 27.6 nautical miles.

Interpret ASE and DLZ as in the preceding missile sections. Assess the steering dot together with the current range cues; `IN RNG` does not guarantee a hit. AIM-9 cage/uncage status and infrared lock tones are not the launch criteria here.

[Back to AMRAAM index](#hud-aim120) · [Back to top](#hud-page-top)

<a id="hud-aim120-rtr"></a>

### Figure 4 · Six-Point Cue Inside RTR

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-04-rtr.png" alt="AIM-120 inside RTR with a six-pointed star cue beneath the TD box" />
  <figcaption>Inside RTR: a six-pointed cue appears beneath the TD box</figcaption>
</figure>

**When the target enters RTR, a six-pointed cue appears beneath the TD box**, shown here as a six-pointed star. This differs from the triangular cue used for AIM-9 and AIM-7.

See the [RTR explanation](#hud-aim9-dlz-item-5) for its meaning. The cue indicates more favorable launch conditions, not a guaranteed hit; continue to assess ASE, DLZ, and minimum range.

The figure shows `R 28.8`, or 28.8 nautical miles. RTR changes with current conditions, so the distance shown in any one screenshot is not a fixed threshold.

[Back to AMRAAM index](#hud-aim120) · [Back to top](#hud-page-top)

<a id="hud-auto-acquisition"></a>

## Auto-Acquisition Radar Modes

Radar auto-acquisition modes quickly lock targets within the search volume without manual radar-cursor designation. SS, VS, and BST have a maximum automatic lock-on range of 10 NM; LR BST extends this range to 40 NM.

<nav class="term-cloud tac-editor-index" aria-label="Auto-acquisition mode index">
  <a href="#hud-aacq-ss">SS Supersearch</a>
  <a href="#hud-aacq-vs">VS Vertical Scan</a>
  <a href="#hud-aacq-bst">BST Boresight</a>
  <a href="#hud-aacq-lr-bst">LR BST Long-Range Boresight</a>
  <a href="#hud-aacq-flood">FLOOD Illumination</a>
</nav>

<a id="hud-aacq-ss"></a>

### SS — Supersearch

The large HUD circle represents a 20° search area. In this game, use the radar antenna elevation control to shift the search area up or down by as much as 10°. Place the target within the search area for automatic acquisition out to 10 NM.

The images below show the centered, upward-shifted, and downward-shifted search circles. Part of the circle may extend outside the HUD when the search area is shifted.

<div class="hud-scan-gallery">
  <figure>
    <img src="/assets/F-15C/HUD/ss-center.png" alt="SS Supersearch with the search circle centered" loading="lazy">
    <figcaption>Centered</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-up.png" alt="SS Supersearch with the search area shifted 10° up" loading="lazy">
    <figcaption>Shifted 10° up</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-down.png" alt="SS Supersearch with the search area shifted 10° down" loading="lazy">
    <figcaption>Shifted 10° down</figcaption>
  </figure>
</div>

[Back to mode index](#hud-auto-acquisition) · [Back to top](#hud-page-top)

<a id="hud-aacq-vs"></a>

### VS — Vertical Scan

VS uses a two-bar scan covering +5° to +55° above the fuselage reference line (FRL), with an azimuth width of 7.5°.

The vertical HUD line indicates the scan direction; the search volume extends above the HUD. Bring the target into this tall, narrow volume for automatic lock-on out to 10 NM.

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/vs.png" alt="VS Vertical Scan with the vertical scan cue extending upward on the HUD" loading="lazy">
  <figcaption>VS Vertical Scan</figcaption>
</figure>

[Back to mode index](#hud-auto-acquisition) · [Back to top](#hud-page-top)

<a id="hud-aacq-bst"></a>

### BST — Boresight

BST searches along the radar boresight. Place the target inside the HUD boresight circle for automatic lock-on out to 10 NM.

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/bst.png" alt="BST Boresight with the search circle at the center of the HUD" loading="lazy">
  <figcaption>BST Boresight</figcaption>
</figure>

[Back to mode index](#hud-auto-acquisition) · [Back to top](#hud-page-top)

<a id="hud-aacq-lr-bst"></a>

### LR BST — Long-Range Boresight

LR BST works similarly to BST, but uses a smaller HUD search circle and extends the maximum automatic lock-on range to 40 NM. Keep the target inside the smaller circle to acquire it at greater distances than SS, VS, or BST allows.

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/lr-bst.png" alt="LR BST Long-Range Boresight with the smaller HUD search circle" loading="lazy">
  <figcaption>LR BST Long-Range Boresight</figcaption>
</figure>

[Back to mode index](#hud-auto-acquisition) · [Back to top](#hud-page-top)

<a id="hud-aacq-flood"></a>

### FLOOD — Flood Illumination

FLOOD is normally used with the semi-active radar-homing AIM-7. It illuminates an area ahead of the aircraft without establishing an STT lock as the auto-acquisition modes do.

If STT lock is lost while an AIM-7 is in flight, switch to FLOOD to continue illuminating the target and provide reflected radar energy for missile guidance. Maneuver the aircraft to keep the target inside the HUD illumination circle for continued guidance support.

The HUD displays the illumination circle and the `FLOOD` cue. The target must remain illuminated after switching modes; the missile does not become self-guiding.

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/flood.png" alt="FLOOD illumination circle and FLOOD cue on the HUD" loading="lazy">
  <figcaption>FLOOD Illumination</figcaption>
</figure>

[Back to mode index](#hud-auto-acquisition) · [Back to top](#hud-page-top)
