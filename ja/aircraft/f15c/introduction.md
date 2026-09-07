# F-15C イーグルの空中優勢戦闘機

![F-15C Header](/assets/F-15C/header.jpg)

この章では、Red Flag Sim の F-15C 実装範囲（操縦系、コックピット計器、レーダー、兵装、対抗システム）を説明します。これは機体の実運用マニュアルではなく、シミュレーション上での扱いを示すための章です。

## 飛行物理と状態判断

飛行状態は IAS、TAS／MACH、対気高度、姿勢、迎角（AoA）、G、燃料量など複数の値の組み合わせで決まります。HUD は主表示ですが、コックピット計器で必ずクロスチェックします。

単位は同一ではありません。AoA は機体幾何角と同義ではなく、IAS/TAS/Mach/G も用途が異なります。

参照: [コックピット計器](/ja/Docs/aircraft/f15c/cockpit-instruments.html)、[HUD 操作](/ja/Docs/aircraft/f15c/hud-operation.html)、[Touch UI](/ja/Docs/aircraft/f15c/touch-ui.html)。

## レーダーと目標情報

AN/APG-63 は VSD により表示されます。現行実装の主要モードは LRS、TWS、STT、近距離自動捕捉です。

LRS は検索用、TWS は走査しながら追跡を保持、STT は単一目標追跡です。距離目盛りがそのまま高度カバレッジを保証するわけではありません。

生のレーダー戻り（raw）、トラック、STT ロックは別状態です。詳細は [AN/APG-63 レーダーと VSD](/ja/Docs/aircraft/f15c/radar.html)。

## 兵装と表示

F-15C は砲、AIM-9、AIM-7、AIM-120 を扱います。見た目が似たシンボルでも、兵器とモードで条件は異なります。

| 兵装 | 重要なポイント |
| --- | --- |
| 砲 | 距離情報の入手状態により GDS/BATR を含む照準参照が変化します。 |
| AIM-9 | シーカー状態とロック条件で誘導方式が変化します。 |
| AIM-7 | 本実装では STT を要求し、発射後も照射追従が必要です。 |
| AIM-120 | レーダー条件に基づく発射判定を行い、PDT が無い場合は VISUAL 運用もあります。 |

ASE、ターンポイント、DLZ の有効性は、射撃幾何とデータ品質に依存して変化します。

参照: [HUD 操作](/ja/Docs/aircraft/f15c/hud-operation.html)、[AN/APG-63 レーダーと VSD](/ja/Docs/aircraft/f15c/radar.html)。

## 警報と対抗

TEWS/RWR はレーダー警報と電子妨害環境を表示します。RWR シンボルの距離は実距離ではありません。

詳しくは [防御システム](/ja/Docs/aircraft/f15c/defensive-systems.html) を参照してください。

## 読み順

初回学習の推奨順:

1. [Touch UI](/ja/Docs/aircraft/f15c/touch-ui.html)
2. [コックピット計器](/ja/Docs/aircraft/f15c/cockpit-instruments.html)
3. [HUD 操作](/ja/Docs/aircraft/f15c/hud-operation.html)
4. [AN/APG-63 レーダーと VSD](/ja/Docs/aircraft/f15c/radar.html)
5. [防御システム](/ja/Docs/aircraft/f15c/defensive-systems.html)

略語は [付録：略語](/ja/Docs/aircraft/f15c/appendix.html)。

## ロードマップ

未実装の項目:

1. コールドスタート（電源オフ状態からの始動）
2. 地上整備/燃料/再武装/修理/外部電源などのサービス機能
3. 完全なエジェクト連鎖
4. 対応的音声通信（僚機、AWACS/GCI、ATC、地上）
