# F-15C HUD Operation

The Head-Up Display (HUD) is the primary flight and weapons reference in the F-15C. It combines attitude, navigation, air data, target, and weapon information so the pilot can keep looking outside during maneuvering and engagements.

## Basic HUD Symbology

Many HUD symbols remain visible regardless of the selected master mode.

![Figure 38. F-15C HUD basic symbology](/assets/F-15C/Manual/fig-38-hud-basic-symbology.png)

| Symbol | Meaning |
| --- | --- |
| Heading scale | Magnetic heading tape. The center mark is the current aircraft heading. |
| Bank angle reference | Shows bank attitude at the top of the HUD. |
| Airspeed scale | Indicated airspeed in knots. Below low speed the tape may be blank. |
| Altitude scale | Barometric altitude in feet unless replaced by radio-altitude landing references. |
| Velocity vector | Actual flight path of the aircraft. During high AoA it may sit well below the nose reference. |
| Aircraft waterline | Aircraft longitudinal reference line. |
| Gun cross | Fixed reference aligned with the internal M61 cannon. |
| Pitch ladder | Pitch attitude in 5-degree increments, tied to aircraft roll attitude. |
| G readout | Current G and maximum recorded G. |

## Navigation Modes

### Navigation Mode

In NAV mode the HUD gives steering to the selected route point.

![Figure 39. HUD navigation mode](/assets/F-15C/Manual/fig-39-hud-navigation-mode.png)

Key cues:

- The heading scale includes a steering marker for the selected waypoint bearing.
- The lower-right mode line shows the current route point and NAV state, for example `1NAV`.
- Distance to the selected point is shown in nautical miles, for example `N 42.1`.
- Estimated time to the selected point appears below the distance, computed from current groundspeed.

### Instrument Landing System Navigation

ILSN mode adds approach steering and landing references to the normal navigation display.

![Figure 40. HUD landing mode](/assets/F-15C/Manual/fig-40-hud-landing-mode.png)

During ILS approach, keep the flight path marker centered on the landing steering references. At low altitude, the right-side altitude reference changes to radio altitude. The AoA bracket helps hold the correct landing AoA; keep the velocity vector in the bracket rather than chasing pitch angle alone.

## Gun Modes

The F-15C has two practical gun HUD presentations: one without radar lock and one with radar-directed gun solution.

### Gun Without Radar Lock

Select the M61 cannon with no radar lock to display the no-lock gun sight. The HUD shows a fixed aiming reference and gun ammunition remaining in the lower-left data area.

![Figure 41. No-radar-lock gun mode](/assets/F-15C/Manual/fig-41-gun-no-lock-mode.png)

Use this mode as a backup when radar ranging is unavailable. Place the target in the sight picture, fire short bursts, and correct from tracer impact.

### Gun Director Sight

When the radar has a single target track and the gun is selected, the HUD enters Gun Director Sight (GDS) mode.

![Figure 42. Gun Director Sight mode](/assets/F-15C/Manual/fig-42-gun-gds-mode.png)

GDS adds:

- A Target Designator (TD) box around the locked target.
- A computed gun solution cue.
- Target range and closure information.
- Current weapon, ammunition, own Mach, and target Mach in the lower-left data area.

Fire only when the computed pipper and target relationship is stable. Long bursts waste ammunition and expose the aircraft to overshoot.

## AIM-9 Sidewinder Modes

The AIM-9 seeker is infrared and can be used with or without radar support. It does not require radar illumination after launch.

### Caged Mode

In caged mode the seeker is held near the aircraft boresight.

![Figure 43. AIM-9 caged mode](/assets/F-15C/Manual/fig-43-aim9-caged-mode.png)

This is useful when selecting a specific target in a dense formation because the seeker will not freely wander outside the caged reference.

### Uncaged / Scan Mode

Press the cage/uncage control to switch between caged and scan behavior.

![Figure 44. AIM-9 uncaged scan mode](/assets/F-15C/Manual/fig-44-aim9-uncaged-scan-mode.png)

The larger circle represents the seeker field of view. The smaller circle shows the current seeker line of sight. Once the seeker locks a heat source, the outer reference disappears and the seeker circle tracks the target within its gimbal limits.

### Radar-Slaved AIM-9

With a radar lock, the AIM-9 seeker can be slaved toward the radar target.

![Figure 45. AIM-9 radar-assisted mode](/assets/F-15C/Manual/fig-45-aim9-radar-slaved-mode.png)

The HUD shows the TD box, range scale, closure rate, and launch range cues. The missile still guides on infrared energy, but radar ranging improves the pilot's launch judgment.

## AIM-7 Sparrow Modes

The AIM-7 is semi-active radar homing. The F-15C radar must illuminate the target until impact.

### Flood Mode

Flood mode is a close-range backup mode for AIM-7 employment when a normal radar lock is unavailable.

![Figure 46. AIM-7 flood mode](/assets/F-15C/Manual/fig-46-aim7-flood-mode.png)

The HUD displays a large flood circle. Keep the target inside that circle for the full missile flight so the missile can guide on reflected radar energy. Flood mode is not a fire-and-forget mode.

### Single Target Track Mode

In STT, the HUD presents Sparrow launch steering.

![Figure 47. AIM-7 STT mode](/assets/F-15C/Manual/fig-47-aim7-stt-mode.png)

Important cues:

- The TD box shows target position.
- The ASE circle shows allowable steering error.
- The target range scale shows current range and launch limits.
- The target aspect cue shows target heading relative to own aircraft.
- A launch cue appears when the target is in range and the steering solution is valid.

After launch, maintain lock until missile impact. Breaking lock deprives the missile of guidance.

## AIM-120 AMRAAM Modes

The AIM-120 can receive mid-course support from the F-15C and then guide itself after its own active radar seeker turns on.

### Visual Mode

Visual mode is a close-range active missile mode.

![Figure 48. AIM-120 visual mode](/assets/F-15C/Manual/fig-48-aim120-visual-mode.png)

The HUD shows a visual acquisition circle and the `VISUAL` cue. A missile fired in this condition searches within its seeker volume. Use it only when the target is visually confirmed and the risk of guiding on the wrong aircraft is acceptable.

### STT Before Launch

With a radar lock, the HUD provides normal AMRAAM launch steering and range cues before firing.

![Figure 49. AIM-120 STT before launch](/assets/F-15C/Manual/fig-49-aim120-stt-before-launch.png)

The display resembles AIM-7 STT but supports active missile timing. Confirm the target is inside valid launch parameters before release.

### STT After Launch

After launch, the HUD displays missile time cues.

![Figure 50. AIM-120 STT after launch](/assets/F-15C/Manual/fig-50-aim120-stt-after-launch.png)

Typical cues include time to active seeker and estimated time to impact. Continue supporting the missile until it goes active when tactics allow; then crank, recommit, or defend based on threat state.

## Auto-Acquisition Radar Modes

Auto-acquisition modes are intended for visual-range combat where manually slewing the radar cursor is too slow.

### Boresight / BORE

BORE searches a narrow cone in front of the aircraft and locks the first target that enters the scan volume.

![Figure 51. AIM-7, AIM-9, and AIM-120 boresight mode](/assets/F-15C/Manual/fig-51-aacq-boresight-mode.png)

### Vertical Scan

Vertical scan searches a tall, narrow volume above the nose. It is useful during high-G nose-up maneuvering when the bandit is crossing through the lift vector.

![Figure 52. AIM-7, AIM-9, and AIM-120 vertical scan mode](/assets/F-15C/Manual/fig-52-aacq-vertical-scan-mode.png)
