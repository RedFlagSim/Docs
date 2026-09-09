<script setup>
import rwrSearchImage from '/assets/F-15C/RWR/search-new-signal.png'
import rwrLockImage from '/assets/F-15C/RWR/lock-priority.png'
import rwrThreatImage from '/assets/F-15C/RWR/threat-levels.png'
</script>

# F-15C Defensive Systems

The F-15C defensive suite combines active electronic countermeasures, passive radar warning, and expendable chaff and flares. The pilot's task is to understand what the threat display is saying, decide whether to jam, and dispense the correct countermeasure while maneuvering.

<a id="rwr"></a>

## Tactical Electronic Warfare System (TEWS)

TEWS uses the AN/ALR-56C radar warning receiver to detect radar emissions from aircraft, ships, and ground systems. The receiver is passive, so it does not reveal the F-15C by transmitting.

The TEWS display is centered on the ownship symbol. A signal's angular position represents its bearing relative to your aircraft. **Its distance from the center represents threat level, not actual range.**

<div class="term-cloud tac-editor-index">
  <a href="#rwr-search">1 Search radars and new signals</a>
  <a href="#rwr-lock">2 Lock-on and highest-priority threat</a>
  <a href="#rwr-threat-levels">3 Three threat levels</a>
  <a href="#rwr-audio">4 Audio warnings</a>
</div>

Click a screenshot below to view it at its original resolution.

<a id="rwr-search"></a>

### 1. Search radars and new signals

<a :href="rwrSearchImage" target="_blank" rel="noopener">
  <img :src="rwrSearchImage" alt="TEWS image 1: SS and SD search radar signals, with a semicircle above a newly detected signal" loading="lazy" />
</a>

| Symbol in image 1 | Meaning |
| --- | --- |
| `SS` | Search radar. |
| `SD` | Search radar of the SA-11 Buk surface-to-air missile system. |
| Semicircle above a symbol | A newly detected signal. The `SD` with a semicircle on the right is a new search-radar signal. |

The semicircle marks a new signal; a full circle marks the lock-on state described below.

<a id="rwr-lock"></a>

### 2. Lock-on and highest-priority threat

<a :href="rwrLockImage" target="_blank" rel="noopener">
  <img :src="rwrLockImage" alt="TEWS image 2: two circled SA-11 fire-control radar signals, with an additional diamond around the right-hand signal" loading="lazy" />
</a>

| Symbol in image 2 | Meaning |
| --- | --- |
| `11` | Fire-control radar of the SA-11 Buk surface-to-air missile system. |
| Full circle around a signal | The radar is locking onto your aircraft. |
| Diamond | The target assessed by the system as the highest-priority threat. |

Both `11` symbols are circled, meaning that both systems have locked onto your aircraft. The right-hand `11` also has a diamond: the system judges it to be the greatest current threat.

<a id="rwr-threat-levels"></a>

### 3. Three threat levels

<a :href="rwrThreatImage" target="_blank" rel="noopener">
  <img :src="rwrThreatImage" alt="TEWS image 3: locked threats in the inner zone, a new unlocked 11 on the left in the middle zone, and search signals in the outer zone" loading="lazy" />
</a>

TEWS assigns signals to three radial zones according to threat level, from the center outward:

| Display zone | Threat level | Examples |
| --- | --- | --- |
| Innermost | High | Radars locking onto your aircraft, missiles, and other high-priority threats. |
| Middle | Medium | Detected fire-control radars that have not locked onto your aircraft. |
| Outermost | Low | The least threatening signals, such as the search radars in this example. |

The new `11` on the left of image 3 has a semicircle above it, identifying a new signal. This fire-control radar has not yet locked onto your aircraft, so it is classified as a medium threat and appears in the middle zone.

**A symbol closer to the center indicates a higher threat level, not a physically closer emitter.** Read its bearing, emitter type, and lock-on markings together to assess the threat.

<a id="rwr-audio"></a>

### 4. Audio warnings

TEWS uses distinct sounds for scans, new signals, lock-on, and missile launches:

| Event | Audio cue | Associated display |
| --- | --- | --- |
| A radar scans your aircraft | A single scan tone. | The corresponding radar signal. |
| A new signal appears | A distinctive, slightly higher-pitched tone repeated 3 times. | A semicircle appears above the signal. |
| A fire-control radar locks onto your aircraft | A continuously repeating scan tone. | A full circle appears around the signal. |
| A radar-guided missile is launched at your aircraft | 4 rapid, high-pitched missile-launch warning tones. | The corresponding signal's circle flashes at the same time. |

## Common TEWS Symbols

### Airborne Radars

| Symbol | Threat |
| --- | --- |
| `23` | MiG-23 |
| `29` | MiG-29 or Su-27/33 |
| `31` | MiG-31 |
| `30` | Su-30 |
| `14` | F-14 |
| `15` | F-15 |
| `16` | F-16 |
| `18` | F/A-18 |
| `50` | A-50 AWACS |
| `E2` / `E3` | E-2C or E-3C AWACS |

### Ground and Ship Radars

| Symbol | Threat |
| --- | --- |
| `10` / `CS` / `BB` | S-300PS family search and engagement radars |
| `SD` / `11` | Buk / SA-11 systems |
| `6` | Kub / SA-6 |
| `8` | Osa / SA-8 |
| `13` | Strela-10 / SA-13 |
| `15` | Tor / SA-15 |
| `S6` | 2S6 Tunguska |
| `23` | ZSU-23-4 Shilka |
| `P` | Patriot radar |
| `H` / `HA` | Hawk system radars |

## Chaff and Flares

Chaff is used against radar-guided threats. Flares are used against infrared threats. The cockpit indicators flash during dispense and warn when counts are low.

Defensive use is most effective when combined with maneuver:

1. Turn to deny the missile an easy lead pursuit path.
2. Use chaff against radar-guided missiles while beaming or notching.
3. Use flares against suspected infrared missiles while changing aspect and heat signature.
4. Avoid predictable straight-line flight after dispense.
5. Reassess the TEWS after the first defensive break; do not assume the threat is defeated.
