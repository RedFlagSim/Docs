---
title: AN/APG-63 レーダーとVSD
---

<script setup>
import lrsOverviewImage from '/assets/F-15C/Radar/lrs-overview-numbered.png'
import sttOverviewImage from '/assets/F-15C/Radar/stt-overview-numbered.png'
import sttAspectImage from '/assets/F-15C/Radar/stt-aspect-numbered.png'
import sttRtrImage from '/assets/F-15C/Radar/stt-rtr.png'
import sttBreakImage from '/assets/F-15C/Radar/stt-break-x.png'
import twsNdtImage from '/assets/F-15C/Radar/tws-ndt-numbered.png'
import twsDesignatedImage from '/assets/F-15C/Radar/tws-designated-numbered.png'
import twsInRangeImage from '/assets/F-15C/Radar/tws-in-range.png'
import twsRtrImage from '/assets/F-15C/Radar/tws-rtr.png'
import twsMissileSupportImage from '/assets/F-15C/Radar/tws-missile-support-numbered.png'
import twsMissileActiveImage from '/assets/F-15C/Radar/tws-missile-active-numbered.png'
import floodVsdImage from '/assets/F-15C/Radar/flood-vsd.png'
</script>

## 長距離捜索（LRS）

LRSはロック前の遠方の航空目標を捜索し、自機からの方位と距離を表示します。通常は **40～80海里** のVSD表示レンジを使用します。これは表示範囲であり、すべての目標をその距離で探知できるという意味ではありません。

予想される目標位置に合わせてアンテナ仰角と方位走査幅を調整します。反応を[捕捉ゲート](#lrs-item-9)で囲んで手動捕捉すると、成功時にSTTへ移行します。LRSは目標の所在を把握し、その後の追尾モードが精密な追尾を担当します。

横軸は方位、縦軸は距離です。上ほど遠方を表します。

Touch UIの **AA（自動捕捉）ボタン** を1回タップすると待機からLRSへ移行し、もう1回タップすると待機に戻ります。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="長距離捜索（LRS）">

ほかの操作は [Touch UI：自動捕捉スイッチ](/ja/Docs/aircraft/f15c/touch-ui.html#item-28)を参照してください。

### 走査バー数

最初にAAでLRSを開始すると、初期設定は **方位幅120°・6バー** です。

バーとは、一定の仰角で行う1回の水平走査です。仰角を変えた複数の走査で高度範囲を覆い、6バーでは6回を順に走査します。隣接バーの間隔は捜索距離範囲に応じて変わり、固定ではありません。

バー数は [Touch UI：1. 機能パネル](/ja/Docs/aircraft/f15c/touch-ui.html#item-1)の **MAINページ** で選択できます。

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="走査バー数">
</a>

画像をクリックすると原寸表示、下の番号をクリックすると説明へ移動します。

<a id="lrs-index"></a>

### 記号の番号

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 レーダー反応</a>
  <a href="#lrs-item-2">2 高度カバー範囲</a>
  <a href="#lrs-item-3">3 アンテナ仰角指示</a>
  <a href="#lrs-item-4">4 反応の履歴</a>
  <a href="#lrs-item-5">5 走査バーとPRF</a>
  <a href="#lrs-item-6">6 ゲートのブルズアイ座標</a>
  <a href="#lrs-item-7">7 自機の対地速度</a>
  <a href="#lrs-item-8">8 VSDの最大表示距離</a>
  <a href="#lrs-item-9">9 捕捉ゲート</a>
  <a href="#lrs-item-10">10 局地水平線基準</a>
  <a href="#lrs-item-11">11 ブルズアイ基準点</a>
  <a href="#lrs-item-12">12 航法点3</a>
  <a href="#lrs-item-13">13 アンテナ方位指示</a>
  <a href="#lrs-item-14">14 方位走査範囲の境界</a>
  <a href="#lrs-item-15">15 自機の真対気速度</a>
</div>

<a id="lrs-item-1"></a>

### 1. レーダー反応

緑の短いブロックは探知した反応です。位置から方位と距離を読み取れますが、ロックや敵味方識別を意味しません。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-2"></a>

### 2. 高度カバー範囲

左の2つの円と数値は、ゲートの距離における走査上限・下限を千フィート単位で示します。`29` と `-2` は約29,000～-2,000フィートです。負値は走査の幾何学的範囲であり地下の目標ではありません。ゲート距離や仰角の変更後は読み直します。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-3"></a>

### 3. アンテナ仰角指示

左目盛の山形記号はアンテナ仰角です。番号2の高度範囲と併読し、目標高度の記号と区別します。

6区分の目盛は上60°～下60°を表します。中央が0°、上が正、下が負の仰角です。

**ELEノブ** で仰角を操作します。タッチ操作では下図のコントロールを使い、左の山形記号と高度範囲を確認します。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="3. アンテナ仰角指示">

[Touch UI：アンテナ仰角](/ja/Docs/aircraft/f15c/touch-ui.html#item-25)を参照。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-4"></a>

### 4. 反応の履歴

過去の走査位置を残して移動を示します。履歴と現在の反応を区別し、各ブロックを別々の目標と見なさないでください。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-5"></a>

### 5. 走査バーとPRF

`6HI` は走査バーとパルス繰り返し周波数（PRF）の状態です。`HI` は高PRFを表します。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-6"></a>

### 6. ゲートのブルズアイ座標

共通基準点Bullseyeから[ゲート（9）](#lrs-item-9)までの方位と距離です。`310-12` はブルズアイから310°、12海里を意味します。

将来のマルチプレイでは、この座標で味方に位置を伝えられます。報告する位置へゲートを動かし、座標を読み取ります。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-7"></a>

### 7. 自機の対地速度

`G 589` は対地速度589ノットです。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-8"></a>

### 8. VSDの最大表示距離

右上の `80` は表示レンジ80海里です。目標距離でもレーダーの最大探知距離でもありません。

[ゲート](#lrs-item-9)を画面端より外へ動かすとレンジを変更できます。

- 上端を越える：最大表示距離を拡大。
- 下端を越える：最大表示距離を縮小。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-9"></a>

### 9. 捕捉ゲート

2本の縦線で構成され、位置や生の反応を選びます。ゲート距離は番号2の高度範囲の算出位置にも使われます。

Touch UI右側の **Cursor（TDC操作）ボタン** で動かします。画面端を越えると[表示距離](#lrs-item-8)や[方位走査幅](#lrs-item-14)も変えられます。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="9. 捕捉ゲート">

[Touch UI：Cursor](/ja/Docs/aircraft/f15c/touch-ui.html#item-18)を参照。

手動捕捉の操作：

1. 生のレーダー反応をゲートで囲みます。
2. 右のCursorをダブルタップして捕捉を開始します。
3. 成功すると自動的に **STT（単一目標追尾）** へ移行します。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-10"></a>

### 10. 局地水平線基準

端が下向きに折れた横線は局地水平線基準です。中央なら水平飛行、回転は機体のロールを表します。レーダーを見ながら姿勢を確認できます。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-11"></a>

### 11. ブルズアイ基準点

Bullseyeは方位と距離を報告する共通基準です。ゲート座標は[番号6](#lrs-item-6)を参照。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-12"></a>

### 12. 航法点3

空の三角形が航法点の位置、`3` が番号です。矢印は航法点3を指しています。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-13"></a>

### 13. アンテナ方位指示

下部の山形記号は現在のアンテナ方位です。円形の範囲境界や目標針路とは区別します。

走査中は左右へ動き、アンテナの向きをリアルタイムで示します。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-14"></a>

### 14. 方位走査範囲の境界

下の左右の円は走査幅の境界で、矢印は右端を指します。2機の航空機を表す記号ではありません。

[ゲート](#lrs-item-9)を左右の端から外へ動かします。

- 左端を越える：走査幅を縮小。
- 右端を越える：走査幅を拡大。

範囲は **10°～120°** です。変更するのは方位幅で、番号8の表示距離ではありません。

[番号索引に戻る](#lrs-index)

<a id="lrs-item-15"></a>

### 15. 自機の真対気速度

`T 589` は周囲の空気に対する真対気速度589ノットです。番号7の対地速度とは異なり、数値が同じでも混同しないでください。

[番号索引に戻る](#lrs-index)

## 単一目標追尾（STT）

STTは1つの目標を集中的に追尾し、位置・運動・兵器計算用データを継続して提供します。LRSで反応を囲みCursorをダブルタップし、捕捉に成功するとSTTへ移行します。[捕捉ゲート](#lrs-item-9)を参照。

LRSの領域捜索と異なり、STTは選択した目標の追尾を維持して機関砲やミサイルを支援します。本ゲームのAIM-7は発射時にSTT、その後もレーダー照射が必要です。AIM-120も支援できますが、誘導条件は同一ではありません。

STTは敵機のロック警報を作動させます。近距離ではチャフやノッチ機動によって追尾を断ったり発射条件を悪化させたりする可能性があります。機動、追尾状態、DLZの変化を監視します。

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="単一目標追尾（STT）">
</a>

図1：最大射程外でASE円は縮小しています。

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 目標の真対気速度</a>
  <a href="#stt-item-2">2 H/Tアスペクトと目標針路</a>
  <a href="#stt-item-3">3 目標高度</a>
  <a href="#stt-item-4">4 PDT — 主指定目標</a>
  <a href="#stt-item-5">5 ステアリングドット</a>
  <a href="#stt-item-6">6 ASE円</a>
  <a href="#stt-item-7">7 接近率</a>
  <a href="#stt-item-8">8 目標距離指示</a>
  <a href="#stt-item-9">9 Rmax — 最大射程</a>
  <a href="#stt-item-10">10 最適化された最大射程</a>
  <a href="#stt-item-11">11 RTR射程基準</a>
  <a href="#stt-item-12">12 最小射程</a>
  <a href="#stt-item-13">13 ミサイル時間表示</a>
  <a href="#stt-item-14">14 目標方位と距離</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="単一目標追尾（STT）">
</a>

図2：最大射程内に入り、ASE円が拡大し始めます。

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 目標アスペクト角</a>
  <a href="#stt-item-16">16 拡大したASE円</a>
  <a href="#stt-item-17">17 図2の距離と接近率</a>
</div>

画像で原寸表示、番号で説明へ移動できます。両図とも **AIM-7を選択** しています。距離グリッド、水平線、航法点などはLRSを参照。図1の `40` は40海里、図2の `20` は20海里の表示レンジです。

<a id="stt-item-1"></a>

### 1. 目標の真対気速度

左上の `397` は目標の真対気速度397ノットで、自機速度ではありません。図2の `577` は577ノットです。

[番号索引に戻る](#stt-index)

<a id="stt-item-2"></a>

### 2. H/Tアスペクトと目標針路

`H` は **HOT**、目標が自機へ機首を向けた状態で、敵機なら危険な姿勢です。背を向けると `T` を表示します。これは相対姿勢で、敵味方識別ではありません。

続く `313` は目標針路313°です。H/Tは相対方向、数値は針路を示します。左右のアスペクト角は[番号15](#stt-item-15)を参照。

[番号索引に戻る](#stt-index)

<a id="stt-item-3"></a>

### 3. 目標高度

左の `13-4` は13,400フィートMSL、平均海面からの高度です。

[番号索引に戻る](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT — 主指定目標

五芒星が方位・距離表示内のPDT（Primary Designated Target）です。前方の長い線は目標速度の方向を表します。

[番号索引に戻る](#stt-index)

<a id="stt-item-5"></a>

### 5. ステアリングドット

輝点はステアリングドットです。発射時にASE円（6）で囲むと必要な旋回を減らし、ミサイルのエネルギーを節約できます。[HUDのドット説明](/ja/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2)と同じ表示ロジックです。

[番号索引に戻る](#stt-index)

<a id="stt-item-6"></a>

### 6. ASE円

ASEは許容操舵誤差です。円が拡大して初めて発射条件を満たし始めます。小さい円の中にドットがあっても、それだけで発射可能とは判断できません。

拡大後もドット、距離、選択ミサイルの誘導条件を確認します。[HUDのASE説明](/ja/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1)を参照。

[番号索引に戻る](#stt-index)

<a id="stt-item-7"></a>

### 7. 接近率

`1006` は自機と目標の接近率で単位はノットです。距離の変化率であり、目標自身の速度ではありません。

[番号索引に戻る](#stt-index)

<a id="stt-item-8"></a>

### 8. 目標距離指示

右の `>` は現在の `40` 海里スケール上の目標位置です。横の `1006` は接近率で距離ではありません。

[番号索引に戻る](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax — 最大射程

最上部の1本目の短線はRmax、現在条件で計算した最大射程です。

[番号索引に戻る](#stt-index)

<a id="stt-item-10"></a>

### 10. 最適化された最大射程

2本目の短線は最適化された最大射程です。

[番号索引に戻る](#stt-index)

<a id="stt-item-11"></a>

### 11. RTR射程基準

長方形の上端がRTR（Range Turn and Run）です。目標が反転して逃走する場合を考慮した射程で、一般に回避不能射程と呼ばれます。有利な条件を示しますが命中保証ではありません。

[番号索引に戻る](#stt-index)

<a id="stt-item-12"></a>

### 12. 最小射程

長方形の下端はRMinです。目標距離と比較し、近いほど常に有利とは考えないでください。

9、10、11、12がDLZ（動的発射領域）を構成します。自機高度、高度差、目標の方向と速度、自機速度などで変動します。

発射前に総合判断し、自機の安全と最小射程を守りながら可能な範囲で接近して発射します。

[番号索引に戻る](#stt-index)

<a id="stt-item-13"></a>

### 13. ミサイル時間表示

`53SEC` は今発射すれば53秒後に命中するという現状の運動条件による予測です。発射済みミサイルのカウントダウンではありません。

予測は目標が旋回せず運動を維持する場合に有効です。針路や速度が変われば実際の命中時間も変わります。

[番号索引に戻る](#stt-index)

<a id="stt-item-14"></a>

### 14. 目標方位と距離

右下の `129-21` は自機基準の方位129°、距離21海里です。ブルズアイ座標とは区別します。

[番号索引に戻る](#stt-index)

<a id="stt-item-15"></a>

### 15. 目標アスペクト角

図2の `13L` は機首方向130°左、`13R` なら130°右です。数値は10度単位、`L`/`R` は左/右を示します。

相対アスペクトであり針路130°ではありません。続く `351` が目標針路351°です。[番号2](#stt-item-2)と併読します。

[番号索引に戻る](#stt-index)

<a id="stt-item-16"></a>

### 16. 拡大したASE円

図1では射程外で小さく、図2では計算上の最大射程へ入って拡大します。[番号6](#stt-item-6)と同じくドットと射程も確認します。AIM-7の追尾・照射要件は変わりません。

[番号索引に戻る](#stt-index)

<a id="stt-item-17"></a>

### 17. 図2の距離と接近率

[番号8](#stt-item-8)と同じ `>` です。図1の40海里でなく、この図の20海里スケールで読み取ります。

`915` は接近率915ノットで、[番号7](#stt-item-7)と同じ読み方です。

[番号索引に戻る](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="17. 図2の距離と接近率">
    </a>
    <figcaption>図3 · RTR内：三角形の発射指示</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="17. 図2の距離と接近率">
    </a>
    <figcaption>図4 · 最小射程未満：Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### 図3 · RTR内：三角形の発射指示

RTR内では下部に三角形が現れ、有利な発射条件を示します。図では中央下、`8SEC` の左です。

ASE、ドット、最小射程を確認し、AIM-7に必要な追尾・照射を維持します。三角形は命中保証ではありません。

[番号索引に戻る](#stt-index)

<a id="stt-break-x"></a>

### 図4 · 最小射程未満：Break X

最小射程未満では中央に **Break X** が現れ、発射不可を示します。

近すぎると必要速度まで加速できず、命中しても自機が破片領域を通過する恐れがあります。ロックと近さだけで判断せず最小射程を守ります。

[番号索引に戻る](#stt-index)

## 捜索中追尾（TWS）

TWSは走査を続けながら複数の航跡を維持します。主に40海里以内で使用し、主にAIM-120を支援します。

更新率確保のため、バー数と方位幅の組み合わせを制限します。幅が広いほどバー数は少なくなり、方位幅を選ぶとバー数も自動選択されます。

| 方位幅 | 自動選択バー数 |
| --- | --- |
| 60° | 2バー |
| 30° | 4バー |
| 15° | 6バー |

### TWSへ移行

2つの方法があります。

1. **ロック中：** STTからAAを下へ操作します。
2. **未ロック：** 空白へゲートを置き、TDC（右のCursor）をダブルタップして手動捕捉し、同時に素早くAAを下へ操作します。

[Cursor](/ja/Docs/aircraft/f15c/touch-ui.html#item-18)と[自動捕捉スイッチ](/ja/Docs/aircraft/f15c/touch-ui.html#item-28)を参照。

ほかの空域も走査するため、各目標の更新率はSTTより低く、遠距離では分解能も制限されます。高G機動、チャフ、1目標として見えていた編隊の分散により反応と航跡の対応付けが失敗し、追尾を失う場合があります。

### TWSを終了

- **PDTあり：** **AA Down** でPDTのSTTへ移行し、ほかの全航跡を破棄します。
- **PDTなし：** **AA** を1回タップしてLRSへ戻ります。

### 航跡の種類

未指定、主指定、副指定を区別します。以下の数は本ゲームの仕様です。

TWSでは探知目標の航跡を自動作成します。初期は速度ベクトルのない四角形で、後続走査で十分な情報を得ると航跡が確立してベクトルが現れます。

| 種類 | 意味 | 上限 |
| --- | --- | --- |
| NDT（Non-designated Target） | 主・副に未指定の目標 | 16個 |
| PDT（Primary Designated Target） | 現在の主な観測・交戦目標 | 同時に1個 |
| SDT（Secondary Designated Target） | 後で選択できる副指定目標 | 7個 |

指定状態であり敵味方識別ではありません。PDTなしはNDTWS、ありはDTWSです。

<a id="tws-designation"></a>

### PDTの指定と切替

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="PDTの指定と切替">

航跡確立後、**Coolie Up（上方向）** で指定します。

- **自動指定：** PDTとSDTを自動で選びます。
- **順次切替：** 再操作で各SDTから次のPDTを選びます。
- **手動指定：** NDTまたはSDTを囲み、Coolie UpでPDTにします。

PDTは1つだけです。別の目標を指定すると以前のPDTはSDTになります。

**Coolie Down** で全指定を解除し、PDT・SDTをNDTに戻してNDTWSへ移行します。

[Touch UI：Coolie](/ja/Docs/aircraft/f15c/touch-ui.html#item-26)を参照。

### AIM-120による複数目標交戦

TWSで発射できる相手は現在のPDTだけです。PDTを切り替えて順に発射することで複数目標へ同時交戦できます。

1. 現在のPDTへAIM-120を発射。
2. Coolie Upの循環選択、またはゲートで次のPDTを指定。
3. 新しいPDTへ発射。

以前の目標がSDTになっても、データリンクは発射済みミサイルへ更新を続けられます。PDT切替は支援終了ではなく、関連航跡を維持する必要があります。

<a id="tws-ndt-index"></a>

### 図1 · 未指定目標

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="図1 · 未指定目標">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 航跡確立前の目標</a>
  <a href="#tws-ndt-item-2">2 NDT — 未指定目標</a>
  <a href="#tws-ndt-item-3">3 TWS状態表示</a>
</div>

画像をクリックすると原寸表示、下の番号をクリックすると説明へ移動します。

<a id="tws-ndt-item-1"></a>

#### 1. 航跡確立前の目標

矢印は新しい反応の塗りつぶし四角形です。情報不足で速度ベクトルはまだありません。後続走査で航跡が確立すると番号2のベクトルが現れます。

[番号索引に戻る](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT — 未指定目標

塗りつぶし記号とベクトルは確立済みNDTです。線は運動方向を示します。手動指定なしで自動作成され、PDTやSDTには未指定です。最大16個です。

[番号索引に戻る](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. TWS状態表示

左下の `2TWSM` は、`TWS` が捜索中追尾、`M` が中PRF（MPRF）、先頭数字が走査バーを表します。

[番号索引に戻る](#tws-ndt-index)

<a id="tws-designated-index"></a>

### 図2 · 主指定目標と副指定目標

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="図2 · 主指定目標と副指定目標">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT — 副指定目標</a>
  <a href="#tws-designated-item-2">2 PDT — 主指定目標</a>
  <a href="#tws-designated-item-3">3 ゲート内目標の高度</a>
  <a href="#tws-designated-item-4">4 AIM-120のアクティブ化距離</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT — 副指定目標

空の記号と方向ベクトルは、指定済みだが現在のPDTではないSDTです。最大7個です。

[番号索引に戻る](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT — 主指定目標

五芒星がPDT、前方の長線が速度方向です。図ではゲートがその上にあります。VSDの目標データと兵器計算は主目標であるPDTを基準にします。

PDTは1つで、ほかの指定目標はSDTです。優先順位の違いでありSTTロックの有無ではありません。

[番号索引に戻る](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. ゲート内目標の高度

目盛外側の小さな四角はゲート内目標の高度位置です。走査上限と下限の間なら範囲内、外なら仰角調整が必要です。

生の反応からNDT・SDT・PDTまで、ゲートで囲めばその高度を確認できます。

[番号索引に戻る](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. AIM-120のアクティブ化距離

右の距離目盛の空円がアクティブ化距離です。目標距離がこれより短いと、発射直後に自身のレーダーを起動して能動捕捉します。

[番号索引に戻る](#tws-designated-index)

### 射程内・RTRの指示

画像をクリックすると原寸表示します。

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="射程内・RTRの指示">
    </a>
    <figcaption>図3 · 射程内：破線ASE円の拡大</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="射程内・RTRの指示">
    </a>
    <figcaption>図4 · RTR：六芒星とASE点滅</figcaption>
  </figure>
</div>

**図3：** 射程内に入ると破線ASE円が拡大し、発射条件を満たし始めます。

**図4：** RTRでは中央下に六芒星が現れASEが点滅し、有利な発射条件を示します。画像は円が消える点滅位相です。

### 発射後のミサイル支援

TWSでAIM-120を発射後、レーダーは航跡を維持しデータリンクで更新します。特に自身のレーダーを起動して捕捉する前は、追尾状態を確認します。

**PDT切替だけで以前のミサイル支援は終了しません。** 次のPDTを指定して発射でき、以前のPDTがSDTになっても航跡があれば更新は続きます。

支援中の目標を走査範囲内に保ちます。機動、妨害、範囲外への移動で追尾を失うと最新情報を送れません。STTはほかの航跡を破棄するため、切替前に他のミサイルへの影響を考慮します。

AIM-120は自身のレーダー起動後に能動捕捉します。発射時に[アクティブ化距離](#tws-designated-item-4)内なら直ちに開始します。

<a id="tws-missile-support-index"></a>

画像をクリックすると原寸表示、下の番号をクリックすると説明へ移動します。

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="発射後のミサイル支援">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 アクティブ化進行マーカー</a>
  <a href="#tws-missile-support-item-2">2 発射済みミサイルのマーカー</a>
  <a href="#tws-missile-support-item-3">3 アクティブ化までの残り時間</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. アクティブ化進行マーカー

短い横線は番号2の点へ移動します。到達すると発射時条件による計算上、レーダーが起動して能動捜索を開始した時点です。

[番号索引に戻る](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. 発射済みミサイルのマーカー

点はこの目標へAIM-120を1発発射し、データリンク支援中であることを示します。番号1が推定起動時刻に到達する基準位置でもあります。

[番号索引に戻る](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. アクティブ化までの残り時間

右上 `A 9` はレーダー起動・能動捜索まで推定9秒です。番号1とともに進行を示します。

[番号索引に戻る](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### アクティブ化後の表示

起動後は **AがTへ変化** し、目標との予測会合までの残り時間になります。`T 17` は17秒後の会合・命中予測です。

画像をクリックすると原寸表示、下の番号をクリックすると説明へ移動します。

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="アクティブ化後の表示">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 アクティブ化済みマーカー</a>
  <a href="#tws-missile-active-item-2">2 ミサイル飛行進行マーカー</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. アクティブ化済みマーカー

番号1は、この目標へ発射したミサイルが自身のレーダーを起動し能動捜索を開始したことを示します。

[番号索引に戻る](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. ミサイル飛行進行マーカー

Xは目標の五芒星へ移動し、飛行進行を示します。事前計算した会合時刻に星へ到達します。

時間と進行は発射時の条件で計算しています。目標の機動・対抗措置で実際の飛行時間は通常長くなります。ゼロやXの到達は予測会合時点であり、命中確認ではありません。

[番号索引に戻る](#tws-missile-active-index)

## 近距離自動捕捉とFlood

自動捕捉の走査とFlood照射は **機体縦軸** を基準に姿勢へ追従します。LRS・TWSは **ジンバルで水平を維持した面** を基準とします。

主に **WVR（目視範囲内戦闘）** 用です。長距離ボアサイトは **40海里以内**、ほかの自動捕捉モードは **10海里以内** で動作します。

### モード選択

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="モード選択">

**AAを上へ** 操作すると順に切り替わります。

1. **SS（スーパーサーチ）**。
2. **VS（垂直走査）**。
3. **ボアサイト**。
4. **長距離ボアサイト**。

**AAを上方向に長押し** すると **Flood** です。

### SS — スーパーサーチ

最初のAA上操作でSSです。大きなHUD円は **20°** の捜索範囲で、内部の **10海里以内** の目標を自動捕捉します。

仰角操作で上下最大 **10°** 偏移できます。画像は中央・上・下の順で、偏移すると円の一部がHUD外へ出る場合があります。

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS — スーパーサーチ" loading="lazy">
    <figcaption>中央</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS — スーパーサーチ" loading="lazy">
    <figcaption>上へ10°</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS — スーパーサーチ" loading="lazy">
    <figcaption>下へ10°</figcaption>
  </figure>
</div>

### 垂直走査

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="垂直走査" loading="lazy">
  <figcaption>VS 垂直走査</figcaption>
</figure>

機首上方の細長い領域を捜索し、交差後に目標が機首上を通る場面に適します。

### ボアサイト

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="ボアサイト" loading="lazy">
  <figcaption>BST ボアサイト</figcaption>
</figure>

前方の狭い円錐を捜索し、最初に入った目標をロックします。

### 長距離ボアサイト

LR BSTはBSTと同様ですが、HUD円が小さく、自動ロック範囲は **40海里** です。小円内に目標を保ちます。

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="長距離ボアサイト" loading="lazy">
  <figcaption>LR BST 長距離ボアサイト</figcaption>
</figure>

### Flood

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood" loading="lazy">
  <figcaption>FloodのHUD</figcaption>
</figure>

AIM-7へ広いビームの照射を提供します。命中まで目標を照射円内に保ちます。

VSD左上に `FLOOD` が現れ距離グリッドが消えます。水平線、捕捉ゲート、航法点は残ります。

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood">
  </a>
  <figcaption>FloodのVSD（クリックで原寸）</figcaption>
</figure>

## 操作の流れ

1. LRSで遠方の状況を把握。
2. 目標高度に合わせて仰角調整。
3. TWSで複数目標を優先付け。
4. 集中追尾や安定照射が必要ならSTT。
5. 交差後は自動捕捉を使用。
