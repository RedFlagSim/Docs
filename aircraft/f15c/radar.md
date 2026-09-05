---
title: AN/APG-63 Radar and VSD
---

## Long Range Search

Long Range Search (LRS) is the normal medium and long-range search mode.

![Figure 54. VSD in LRS mode](/assets/F-15C/Manual/fig-54-vsd-lrs-mode.png)

The VSD shows:

- Current range scale: 10, 20, 40, 80, or 160 nautical miles.
- Antenna elevation coverage on the left side of the display.
- Target returns as symbols within the scan volume.
- The Target Designation Cursor (TDC), used to select and lock a contact.
- PRF state and radar operating cues.

Use the range scale and antenna elevation together. A narrow elevation scan at the wrong altitude can miss a target even when the target is inside the selected range.

## Single Target Track

Single Target Track (STT) focuses the radar on one target and provides precise target data for missile employment.

![Figure 55. VSD in STT mode](/assets/F-15C/Manual/fig-55-vsd-stt-mode.png)

STT shows target range, closure, aspect, altitude, heading, and weapon timing cues. It is required for normal AIM-7 guidance and can support AIM-120 launch.

Tactical consequences:

- The radar no longer searches for other contacts.
- The target's RWR normally receives a hard lock warning.
- NCTR may attempt to identify the target from radar return features when conditions are suitable.
- A hard break, notch, or antenna-limit problem can break the track.

## Track While Scan

Track While Scan (TWS) maintains track files while the radar continues scanning.

![Figure 56. TWS mode](/assets/F-15C/Manual/fig-56-tws-mode.png)

TWS allows the pilot to manage multiple targets and employ AIM-120s with less warning than STT. It is powerful, but less robust than STT because the radar only revisits each target once per scan cycle.

Use TWS when:

- You need a tactical picture of multiple aircraft.
- You want to support AMRAAM launches without immediately forcing a hard-lock warning.
- Targets are not maneuvering aggressively enough to break scan-track prediction.

Avoid relying on TWS when a target is close, maneuvering hard, or already forcing defensive action.

## Home On Jam

When a target uses strong electronic jamming, the radar may show a jamming strobe instead of normal range and altitude.

![Figure 57. HOJ mode](/assets/F-15C/Manual/fig-57-hoj-mode.png)

Home On Jam (HOJ) allows radar-guided missiles to fly down the bearing of the jamming source. Until burn-through, the radar cannot provide a normal target solution, so range and altitude data may be unavailable or imprecise.

Use HOJ as a pressure tool, not as a substitute for a clean radar picture. If burn-through occurs, the radar can transition to a normal track.

## Close-Range Automatic Acquisition

Close-range radar modes search predefined volumes and automatically lock the first valid target.

### Vertical Scan

Vertical Scan searches a tall narrow area above the nose. It is useful after the merge, especially when the target is crossing the lift vector.

![Figure 58. Vertical scan mode](/assets/F-15C/Manual/fig-58-radar-vertical-scan-mode.png)

### Boresight

Boresight mode searches a narrow cone straight ahead. Point the nose at the target and let the radar capture it.

![Figure 59. Boresight mode](/assets/F-15C/Manual/fig-59-radar-boresight-mode.png)

### Gun Acquisition

Gun acquisition mode scans the gun employment area and transitions to STT when a target is captured.

![Figure 60. Gun automatic acquisition mode](/assets/F-15C/Manual/fig-60-radar-gun-acquisition-mode.png)

### Flood

Flood mode illuminates a broad cone for AIM-7 employment without a normal lock.

![Figure 61. Flood mode](/assets/F-15C/Manual/fig-61-radar-flood-mode.png)

Keep the target inside the flood circle until impact. If the target leaves the illuminated volume, the missile loses the reflected radar energy it needs to guide.

## Practical Radar Workflow

1. Start in LRS with a range scale appropriate to the expected intercept.
2. Set antenna elevation for the target altitude block, not just the current display range.
3. Use TWS when sorting multiple targets and supporting AIM-120s.
4. Use STT when you need the most stable track, when firing AIM-7, or when the target is close.
5. Use AACQ modes after the merge; do not waste time slewing the cursor inside visual range.
6. When jammed, evaluate HOJ but keep maneuvering for burn-through or an AWACS-supported intercept.
