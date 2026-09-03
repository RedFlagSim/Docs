# Frequently Asked Questions

This page describes behavior implemented in the current project. The installed build and the access shown for your signed-in account are always authoritative.

## Project and access

### What stage is Red Flag Sim in, and which aircraft are available?

Red Flag Sim is in active development. The F-15C is the primary and most extensively documented core module. Other aircraft, including the F-5E, are at different implementation stages. An aircraft appearing in the client or documentation does not mean it is enabled in every build, game mode, or account. Use the module browser in your installed build as the current source of truth. See [About Red Flag Sim](/about) and [Aircraft Modules](/Docs/aircraft/index).

### Which platforms and control methods are supported?

Red Flag Sim is designed for mobile and VR. The current mobile guide covers iOS and Android and uses device tilt plus touch controls. Hold the device upright, calibrate it in your normal flying posture, and recalibrate after changing your seating position. Platform availability and feature coverage depend on the current release. See the [Mobile Platform Pilot's Manual](/Docs/basics/mobile-platform).

### Why can I see a module, variant, feature, or livery but not launch it?

Listing and access are separate. Mission launch checks the aircraft module, enabled variant features, and non-default livery packs independently against your account. A store page or catalog entry is not proof of ownership. Check that you are online, signed into the intended account, and that the required content is owned or available in that game mode.

## Accounts, network, and purchases

### Can I play offline, and how do I protect my progress?

Do not assume full offline support. Some records are kept locally, but sign-in, cloud synchronization, access checks, purchases, and leaderboards depend on online services. An anonymous account also depends on account state retained on that device. Link or sign in with a Unity Player Account before reinstalling, changing devices, or building long-term progress. See [Account & Profile](/Docs/game/account-profile).

### What should I do if purchased content is missing?

Confirm that you are using the same linked player account and platform-store account used for the purchase. Reconnect, refresh the store, and use **Restore Purchases** when available. If access is still missing, contact support with your player ID, product name, platform, approximate purchase time, and platform transaction ID. Never send a payment-card number or password.

## Progress, scores, and rewards

### What progress is saved, and why can updates be delayed?

Account progress can include your pilot profile, Career XP, rank, flight time, module records, best skill scores, qualifications, medals, patches, unlocks, and ownership. Some detailed session history is stored locally. Session results, cloud summaries, rewards, and leaderboard aggregation are separate steps, so a temporary connection problem can delay a popup or ranking. Reconnect, allow synchronization to finish, then reopen the logbook or leaderboard. See [Game Systems](/Docs/game/index).

### Why did my manual landing or boom refueling attempt not receive a score?

Manual airfield landing scoring requires a valid approach and complete rollout. Common rejection causes include entering the scoring area outside the supported speed range, leaving ILS or prohibited automatic assistance active, exceeding approach or touchdown limits, or failing to slow sufficiently before the runway end. Boom refueling is recorded after successful completion; its score considers connection time, entry speed, drift, and centerline accuracy. Requirements may vary by aircraft configuration.

### What is the difference between qualifications, medals, and patches?

- **Qualifications** certify a skill. Some expire and must be renewed.
- **Medals** are permanent achievements once awarded.
- **Patches** are account collectibles, not proof of qualification.

Some entries are reserved for gameplay that is not fully connected yet and may remain locked. See [Qualifications](/Docs/game/qualifications), [Medals](/Docs/game/medals), and [Patches](/Docs/game/patches).

## Flight behavior and documentation

### Why can a mission heading differ from the magnetic heading shown in the cockpit?

Airborne mission spawn headings and internal flight heading use true north. Cockpit or navigation displays may apply local magnetic variation and show magnetic heading. The difference is expected and changes with location.

### Will systems and documentation change between versions?

Yes. System behavior, access rules, scoring thresholds, and UI workflows may be refined. English is the source documentation; the other eight language editions are maintained in parallel and checked for page parity. If a translated page and the installed build disagree, follow the current build and report the mismatch.

### How should I report a bug or request account help?

Email **support@redflagsim.com** or follow the [Feedback](/feedback) page. Include the game version, device model, operating-system version, player ID when relevant, reproduction steps, expected and actual results, and screenshots or video if available. For privacy or deletion requests, see the [Privacy Policy](/privacy-policy).
