# F-15C Radio Communications

Radio communication keeps the F-15C tied to its flight, AWACS/GCI controllers, ATC, and ground crew. Messages follow a simple pattern: who is being called, what action is requested, and the tactical information needed to execute it.

## Message Structure

Most radio calls contain:

1. **Call sign**: The receiver and speaker, such as `Chevy 22, Chevy 21`.
2. **Command or report**: The action or status, such as `engage bandits` or `missile launch`.
3. **Details**: Bearing, range, altitude, target type, clock direction, or result.

Use short, precise calls. In combat, radio time is also a resource.

## Flight and Wingman Commands

| Command group | Use |
| --- | --- |
| Engage my target | Order the wingman to attack the player's designated target |
| Engage bandits | Order air-to-air search and attack |
| Cover me | Ask the wingman to engage the most immediate threat to the player |
| Rejoin | Return wingman to formation |
| Go to route / RTB | Send the wingman along the planned route or back to base |
| Radar on/off | Control wingman radar emissions |
| ECM on/off | Control wingman jamming |
| Smoke on/off | Visual identification or aerobatic smoke |
| Formation commands | Adjust spacing and geometry |

Wingmen usually acknowledge with short replies such as `Copy`, `Roger`, or `Affirm`. If they cannot comply, expect `Negative` or `Unable`.

## AWACS and GCI Requests

AWACS or ground controllers can provide the tactical picture when the F-15C radar is silent, jammed, or focused elsewhere.

| Request | Information returned |
| --- | --- |
| Bogey dope | Bearing, range, altitude, and aspect to the nearest hostile or unknown aircraft |
| Picture | Summary of detected groups in the area |
| Vector to home plate | Bearing and range to the nearest suitable friendly airfield |
| Vector to tanker | Bearing and range to the nearest friendly tanker |

AWACS reports are only as good as sensor coverage and coalition awareness. Continue to verify with radar, TEWS, and visual lookout.

## Air Traffic Control

ATC is used for ground movement, takeoff, approach, and landing.

Common requests:

- Taxi clearance.
- Takeoff clearance.
- Inbound or approach request.
- Landing clearance.
- Go-around or spacing instructions.

During approach, tower messages can include runway, course, traffic spacing, and glide path corrections.

## Ground Crew

Ground crew commands are available when parked at a valid airbase or service area. Depending on mission conditions, they can refuel, rearm, repair, and adjust loadout.

## Radio Messages From Other Units

| Source | Example meaning |
| --- | --- |
| Wingman | Takeoff roll, wheels up, rejoin, engaging, defensive, RTB |
| Wingman weapons | `Fox One`, `Fox Two`, `Fox Three`, `Guns`, `Winchester` |
| Wingman threat calls | Spike, mud spike, missile launch, SAM launch |
| AWACS/GCI | Hostile picture, merge warning, clean picture, vectors |
| ATC | Taxi, takeoff, landing, orbit, glide path correction |

## Voice Message System

The F-15C's voice warning system, commonly called "Betty", warns the pilot about urgent aircraft states and failures.

| Trigger | Voice message |
| --- | --- |
| Right engine fire | `Engine fire right` |
| Left engine fire | `Engine fire left` |
| Flight control damage | `Flight controls` |
| Gear extended above safe speed | `Gear down` |
| Gear not down during ILS approach | `Gear up` |
| Fuel at bingo setting | `Bingo fuel` |
| Low fuel levels | `Fuel 1500`, `Fuel 800`, `Fuel 500` |
| Autopilot/control system failure | `ACS failure` |
| Navigation computer failure | `NCS failure` |
| ECM failure | `ECM failure` |
| Hydraulic failure | `Hydraulics failure` |
| Radar failure | `Radar failure` |
| Maximum G exceeded | `Maximum G` |
| Maximum AoA exceeded | `Maximum angle of attack` |
| Critical speed | `Critical speed` |
| Missile warning | `Missile`, followed by clock direction and high/low cue |

Treat voice warnings as immediate workload priorities. Acknowledge the threat or failure mentally, fly the aircraft first, then correct configuration or defend.
