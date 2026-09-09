# Pilotenhandbuch für Mobilgeräte

Dieses Dokument gilt für iOS-/Android-Mobilgeräte.

## Grundregel: Bildschirm senkrecht halten

Dies ist die Grundlage für eine präzise Fluglagesteuerung:

![Grundregel: Bildschirm senkrecht halten](/assets/tilt-guide.png)

- ❌ FALSCH: Das Telefon flach oder waagerecht halten. Dabei koppeln Roll- und Gierachse, sodass Rolleingaben nicht zuverlässig unterschieden werden können.
- ✅ STANDARD: Das Gerät mit beiden Händen halten; der Bildschirm steht senkrecht zum Boden und zeigt direkt zu dir.

### Warum muss das Gerät senkrecht stehen?

Die Bewegungssteuerung muss die Rollachse eindeutig erkennen können. Liegt das Gerät flach, koppeln Roll- und Gierachse bei der Lageberechnung. Das System kann dann nicht zuverlässig zwischen Rollen und Gieren unterscheiden. Die aufrechte Haltung ist daher die Ausgangslage für die Bewegungssteuerung.

## Steuereingaben

- Nicken (Höhenruder): Die Oberkante nach hinten zum Körper neigen, um die Nase anzuheben und zu steigen; nach vorn vom Körper weg neigen, um die Nase zu senken und abzutauchen.
- Rollen (Querruder): Das Telefon wie ein Lenkrad nach links oder rechts drehen.

## Virtueller Touch-Joystick

Alternativ zur Bewegungssteuerung unterstützt die mobile Version einen virtuellen Joystick auf dem Bildschirm. Wähle diesen Steuerungsmodus vor dem Flug, wenn du das Gerät ruhig halten möchtest.

![Virtueller Touch-Joystick](/assets/mobile-virtual-stick.jpeg)

- Nicken: Den Stick nach unten ziehen, um die Nase anzuheben, oder nach oben, um sie zu senken.
- Rollen: Den Stick für die entsprechende Rollrichtung nach links oder rechts ziehen.
- Neutralstellung: Beim Loslassen kehrt der Stick automatisch in die Mitte zurück.

Die senkrechte Haltung und Kalibrierung sind nur für die Bewegungssteuerung erforderlich. Beim virtuellen Touch-Joystick kannst du das Gerät in jeder angenehmen Betrachtungsposition halten.

## Vorbereitung und Präzisionstipps

1. Ausgangslage festlegen (Kalibrierung): Nach dem Einsteigen oder vor dem Start bequem sitzen, das Gerät aufrecht ruhig halten und im Hauptmenü Calibrate Gyro antippen. Der aktuelle Winkel wird als neutraler Nullpunkt gespeichert.

    ![Vorbereitung und Präzisionstipps](/assets/mobile-gyro-calibration.jpeg)

2. Steuerung stabilisieren: Bei engen Formationen, Luftbetankung oder Nahluftkampf die Ellbogen auf Knien oder Armlehnen abstützen. Das filtert Körperzittern und ermöglicht Steuerbewegungen von weniger als einem Grad.

## Touch-UI-Bearbeitungsmodus

Tippe viermal schnell hintereinander auf eine freie Bildschirmstelle, um den Bearbeitungsmodus zu öffnen. Alternativ wähle `UI Editor` im Hauptmenü.

![Touch-UI-Bearbeitungsmodus](/assets/mobile-ui-editor.jpeg)

Im Bearbeitungsmodus kannst du:

- Bedienelemente neu anordnen: Elemente auswählen und verschieben, um das Layout anzupassen.
- Transparente Darstellung wählen: Mit `CLEAR MODE` zur transparenten Ansicht wechseln.
- Gesamte Deckkraft anpassen: Die Sichtbehinderung durch die Touch-UI verringern.
- Schwebende MFDs konfigurieren: Größe und Sichtbarkeit der Multifunktionsdisplays anpassen. Details zu Bedienelementen und Bearbeitungsbereich stehen in der [F-15C-Touch-UI-Dokumentation](/de/Docs/aircraft/f15c/touch-ui.html#item-3).
