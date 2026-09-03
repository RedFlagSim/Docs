# F-15C Defensive Systems

The F-15C defensive suite combines active electronic countermeasures, passive radar warning, and expendable chaff and flares. The pilot's task is to understand what the threat display is saying, decide whether to jam, and dispense the correct countermeasure while maneuvering.

## Electronic Countermeasures

The AN/ALQ-135 is the Eagle's internal jammer. It can degrade hostile radar search, track, and missile guidance, but it also announces that the aircraft is emitting.

![Figure 62. ECM indication on the TEWS display](/assets/F-15C/Manual/fig-62-ecm-tews-indicator.png)

The TEWS shows jammer state in the center of the display:

- A flashing open `X` indicates the jammer is starting or actively cycling.
- A steady open `X` indicates the jammer is operating.

Use ECM deliberately. Jamming can reduce enemy engagement quality, but hostile aircraft may use Home On Jam (HOJ) techniques against the jamming source.

## Radar Warning Receiver

The AN/ALR-56C warning receiver detects radar emissions from aircraft, ships, and ground systems. It is passive, so it does not reveal the F-15C by transmitting.

The TEWS display is centered on the aircraft symbol. Threat position around the circle represents bearing relative to the aircraft. Distance from the center is not physical range; it reflects threat priority and signal strength.

![Figure 63. TEWS threat symbols](/assets/F-15C/Manual/fig-63-tews-threat-symbols.png)

Threat priority is influenced by:

- Whether the emitter is searching, tracking, or supporting a weapon.
- Emitter category, such as airborne radar, long-range SAM, medium-range SAM, short-range SAM, early warning radar, or AWACS.
- Signal strength and recent activity.
- Missile launch indications.

## Missile Launch Warnings

The TEWS changes threat symbology when a radar-guided missile is launched.

![Figure 64. Active radar missile warning](/assets/F-15C/Manual/fig-64-tews-active-missile-warning.png)

Common warning states:

| State | Typical indication | Pilot response |
| --- | --- | --- |
| Search | Intermittent radar warning | Build situational awareness; do not overreact |
| Lock / STT | More urgent tone and prioritized symbol | Prepare to defend, notch, jam, or shoot first |
| Missile launch | Flashing missile/launch indication | Defend immediately with maneuver and countermeasures |
| Active missile | Standalone missile symbol such as `M` | Treat as immediate terminal threat |

Infrared missiles normally do not create RWR warnings. Visual lookout and flare discipline remain essential in close combat.

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
