---
title: MPCD
---

<script setup>
import sitOverviewImage from '/assets/F-15C/MPCD/sit-overview-numbered.png'
import sitEditorImage from '/assets/F-15C/MPCD/sit-tac-editor.png'
import sitControlsImage from '/assets/F-15C/MPCD/sit-controls-numbered.png'
import sitDecenterImage from '/assets/F-15C/MPCD/sit-decenter-numbered.png'
import sitExpImage from '/assets/F-15C/MPCD/sit-exp.png'
import sitFriendlyImage from '/assets/F-15C/MPCD/sit-friendly-flight-numbered.png'
import sitFlightImage from '/assets/F-15C/MPCD/sit-flight.png'
import sitSearchImage from '/assets/F-15C/MPCD/sit-vsd-search.png'
import sitLocalImage from '/assets/F-15C/MPCD/sit-local-tracks-numbered.png'
import sitCorrelatedImage from '/assets/F-15C/MPCD/sit-correlated-tracks-pdt.png'
import sitDetailImage from '/assets/F-15C/MPCD/sit-exp-flight-detail.png'
import aaOverviewImage from '/assets/F-15C/MPCD/aa-overview-numbered.png'
import aaLoadoutImage from '/assets/F-15C/MPCD/aa-loadout.png'
</script>

# MPCD

多目的カラー表示器（MPCD）には、現在 <strong>SIT（状況認識表示）</strong>と <strong>AA（空対空兵装ページ）</strong>の2つのページが実装されています。<strong>既定では SIT が表示されます。</strong>

SIT はミッション情報、データリンク情報、自機レーダーが取得したトラックをまとめて表示します。AA は搭載物、選択中のステーション、機関砲弾数、対抗手段の残数を表示します。

<a id="mpcd-index"></a>

## ページ索引

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 SIT の表示とシンボル</a>
  <a href="#sit-mission">2 ミッション情報と表示設定</a>
  <a href="#sit-modes">3 カーソル操作と表示モード</a>
  <a href="#sit-friendly">4 友軍機とブルズアイ</a>
  <a href="#sit-workflow">5 SIT と VSD の併用</a>
  <a href="#mpcd-aa">6 AA 兵装ページ</a>
</div>

表示器の画像をクリックすると、元の解像度で開きます。番号付きの説明は各画像の注記に対応しています。

<a id="mpcd-sit"></a>

## SIT の表示とシンボル

SIT は戦術状況を上から見た形で表示し、航空機、飛行計画のウェイポイント、ジオフェンス、距離の基準を示します。

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="SIT 全体表示、注記1～13" /></a>
  <figcaption>SIT の全体表示。この例では、捕捉ゲートが VSD のカーソルに追従しています。</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### シンボル番号

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 ズールー時刻</a>
  <a href="#sit-item-2">2 コンパス</a>
  <a href="#sit-item-3">3 データリンク情報</a>
  <a href="#sit-item-4">4 半距離リング</a>
  <a href="#sit-item-5">5 兵装情報</a>
  <a href="#sit-item-6">6 ジオフェンス</a>
  <a href="#sit-item-7">7 表示距離</a>
  <a href="#sit-item-8">8 自機基準のカーソル座標</a>
  <a href="#sit-item-9">9 SAM の交戦範囲</a>
  <a href="#sit-item-10">10 飛行計画のウェイポイント</a>
  <a href="#sit-item-11">11 捕捉ゲート</a>
  <a href="#sit-item-12">12 対抗手段の残数</a>
  <a href="#sit-item-13">13 ブルズアイ基準のカーソル座標</a>
</div>

<a id="sit-item-1"></a>

### 1. ズールー時刻

左上の時計はズールー時刻（UTC）を表示します。`23:00:51Z` はズールー時刻の23時00分51秒です。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. コンパス

コンパスは自機周囲の方位の基準です。方向目盛りから目標方位を読み取れます。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. データリンク情報

赤いシンボルは、データリンクで報告された敵編隊を示します。<strong>破線の輪郭</strong>は情報源がデータリンクであることを表します。データリンク情報からレーダートラックとの相関処理までの流れは、[SIT と VSD の併用](#sit-workflow)を参照してください。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. 半距離リング

内側の白いリングは、[番号7](#sit-item-7)の表示距離の半分を示します。この中心表示で `80` が選択されている場合、リングは自機から40海里です。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. 兵装情報

左下には兵装情報がまとめて表示されます。[AA ページ](#mpcd-aa)では、対応する搭載物をステーションごとに確認できます。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. ジオフェンス

破線の多角形は、ミッションで定義した区域であるジオフェンスです。[Tac エディター](#sit-mission)で設定した区域と現在の戦術状況を対応づけるために使います。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. 表示距離

この中心表示では、右上の `80` は自機からコンパス上端までの距離を海里で示します。[Decenter モード](#sit-decenter)では自機表示が下に移動します。その場合の距離基準は後述します。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. 自機基準のカーソル座標

シアンの数値は、自機から見たカーソルの方位と距離です。`092-22` は自機から方位092°、距離22海里の位置を示します。この数値は[番号11](#sit-item-11)の捕捉ゲートに追従します。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. SAM の交戦範囲

赤い円は地対空ミサイル（SAM）の交戦範囲を示し、これもジオフェンスの一種です。例の `MEZ` は <strong>Missile Engagement Zone（ミサイル交戦範囲）</strong>の略です。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. 飛行計画のウェイポイント

線で結ばれた黄色のウェイポイントは、自編隊の飛行計画におけるウェイポイントの順序を示します。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. 捕捉ゲート

2本のシアンの縦線がカーソル、または目標捕捉ゲートです。<strong>破線</strong>は SIT のゲートが VSD のカーソルに追従していることを示します。カーソルの操作対象を SIT にすると、縦線が<strong>実線</strong>に変わり、TDC で SIT のゲートを直接操作できます。[カーソル操作と表示モード](#sit-modes)を参照してください。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. 対抗手段の残数

緑色の `C 120` と `F 60` は、チャフ120発、フレア60発が残っていることを示します。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. ブルズアイ基準のカーソル座標

黄色の数値は、共通基準点<strong>ブルズアイ（Bullseye）</strong>から見たカーソルの方位と距離です。`121-30` はブルズアイから方位121°、距離30海里を示します。右上のシアンの数値は自機を基準としています。

[シンボル索引に戻る](#sit-symbol-index)

<a id="sit-mission"></a>

## ミッション情報と表示設定

### Tac エディターからの情報

SIT の情報の多くは、ミッションエディターで設定した内容に基づいています。例の飛行計画のウェイポイント列やジオフェンスは、以下のミッション設定と直接照合できます。

端末の性能に合わせてミッションを設定してください。ユニット数が多いほど、計算資源とメモリーを多く消費します。

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="飛行計画のウェイポイント、ブルズアイ、航空機、ジオフェンスを示す Tac エディター" loading="lazy" /></a>
  <figcaption>ミッション設定が SIT 表示の背景情報になります。</figcaption>
</figure>

ミッションの設定方法は [Tac エディター](/ja/Docs/basics/tac-editor.html)を参照してください。

### SIT に表示する情報の選択

[Touch UI の機能パネル](/ja/Docs/aircraft/f15c/touch-ui.html#item-1)を開き、<strong>MAIN</strong> を選択します。<strong>SIT</strong> の行で表示内容と、表示距離を VSD に追従させるかどうかを設定します。

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="MAIN パネルの SIT 設定、WP・DLK・AUTO RANGE・GEO FENCE、番号1～4" loading="lazy" /></a>
</figure>

| 番号 | 操作項目 | 機能 |
| --- | --- | --- |
| 1 | `WP` | 飛行計画のウェイポイントを表示／非表示にします。 |
| 2 | `DLK` | データリンク情報を表示／非表示にします。 |
| 3 | `AUTO RANGE` | SIT の表示距離を VSD の表示距離変更に追従させるかどうかを設定します。 |
| 4 | `GEO FENCE` | ジオフェンスを表示／非表示にします。 |

[ページ索引に戻る](#mpcd-index)

<a id="sit-modes"></a>

## カーソル操作と表示モード

### カーソルの操作対象を SIT にする

<div class="mpcd-controls">
  <div>
    <p>TDC が VSD に割り当てられている状態で、<strong>キャッスルスイッチを上（UP）</strong>に操作すると、SIT が操作対象の表示器（SOI）になります。TDC は SIT の捕捉ゲートだけを動かし、その2本の縦線は<strong>実線</strong>になります。</p>
    <p>キャッスルを上に操作すると、カーソルの操作対象が VSD と SIT の間で切り替わります。再び VSD に追従する状態になると、ゲートは破線で表示されます。</p>
    <p>横の画像は Touch UI の<a href="/ja/Docs/aircraft/f15c/touch-ui.html#item-19">キャッスルスイッチ</a>と<a href="/ja/Docs/aircraft/f15c/touch-ui.html#item-18">カーソル（TDC）</a>です。</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/ja/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Touch UI のキャッスルスイッチ" loading="lazy" /></a>
      <figcaption>キャッスルスイッチ</figcaption>
    </figure>
    <figure>
      <a href="/ja/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Touch UI のカーソル / TDC 操作部" loading="lazy" /></a>
      <figcaption>カーソル / TDC</figcaption>
    </figure>
  </div>
</div>

以下の右・左・下への操作は、<strong>SIT がカーソルの操作対象になっている場合</strong>に適用されます。

| キャッスルの方向 | SIT モード | 用途 |
| --- | --- | --- |
| 右 | Decenter | 自機を画面下側に移し、前方の表示空間を広げます。 |
| 左 | EXP | 10海里スケールで局所を拡大し、カーソルで表示範囲を移動します。 |
| 下 | 編隊 | 固定5海里スケールで自編隊の状況を確認します。 |

<a id="sit-decenter"></a>

### Decenter モード

SIT が操作対象のときに<strong>キャッスルを右</strong>に操作すると、Decenter モードになります。自機表示が画面下側に移り、SIT 上部に前方の状況を表示するための空間が広がります。

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="Decenter の SIT、実線の捕捉ゲート1と自機2" loading="lazy" /></a>
  <figcaption>1：SIT で直接操作している実線の捕捉ゲート。2：自機。</figcaption>
</figure>

この画面の右上の `120` は、<strong>自機から大きな円の上端までの距離が120海里</strong>であることを示します。

<a id="sit-exp"></a>

### EXP モード

SIT が操作対象のときに<strong>キャッスルを左</strong>に操作すると、EXP モードになります。<strong>10海里スケール</strong>で局所を拡大し、右上には `E10` が表示されます。カーソルで表示範囲の位置を動かし、確認したい領域を拡大できます。

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="E10 と分離したデータリンク航空機シンボルを表示する EXP の SIT" loading="lazy" /></a>
  <figcaption>EXP は狭い領域を拡大し、個々の航空機や周辺のジオフェンスを見分けやすくします。</figcaption>
</figure>

<a id="sit-flight"></a>

### 編隊モード

SIT が操作対象のときに<strong>キャッスルを下</strong>に操作すると、編隊モードになります。`F5` で示される<strong>固定5海里スケール</strong>を使用し、自編隊の各機の位置と高度を確認できます。

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="自機の周囲に2・3・4番僚機を表示する F5 編隊モードの SIT" loading="lazy" /></a>
  <figcaption>編隊モードでは、自編隊の状況を近距離で表示します。</figcaption>
</figure>

[ページ索引に戻る](#mpcd-index)

<a id="sit-friendly"></a>

## 友軍機とブルズアイ

SIT は、自編隊の航空機と同じ <strong>Package（ミッション編成）</strong>に属する他の航空機を区別します。この例では、ブルズアイを基準としたカーソル位置の読み方も示します。

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT：Package 所属機1、ブルズアイ2、僚機3、自機4" loading="lazy" /></a>
</figure>

| 番号 | シンボル | 意味 |
| --- | --- | --- |
| 1 | 緑色の Package 所属機 | 同じ Package に属する別の機体で、この例では早期警戒機です。中央の点は、自機がその機体のデータリンク情報を受信していることを示します。下の `15` は高度15,000フィートです。 |
| 2 | 黄色のブルズアイ | 共通基準点です。右下の黄色の `037-12` は、カーソルがブルズアイから方位037°、距離12海里にあることを示します。 |
| 3 | シアンの僚機 | 自編隊の他の3機です。シンボル内部の数字は2、3、4番機の番号で、編隊長は1番機です。下の数字は高度を千フィート単位で示します。 |
| 4 | シアンの自機シンボル | SIT 上の自機位置です。 |

[ページ索引に戻る](#mpcd-index)

<a id="sit-workflow"></a>

## SIT と VSD の併用

実用的な手順は、まず SIT のデータリンク情報で注目する領域を見つけ、VSD でその位置へレーダー捜索を向けて目標を取得することです。以下の画像は、データリンク情報から自機レーダーのトラック、相関処理されたトラックへ進む過程を示します。

### 1. データリンクが示す領域を捜索する

SIT で報告された目標位置を基に、VSD のレーダー捜索を調整します。<strong>左側の SIT にあるシアンの扇形</strong>は、レーダーの捜索方位と距離を示します。報告位置と比較し、VSD の高度カバー範囲に目標高度が含まれるかも確認してください。

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="SIT のデータリンク目標とシアンの捜索扇形、および VSD の捜索反射" loading="lazy" /></a>
  <figcaption>左側の SIT は戦術状況を、右側の VSD はレーダーの捜索情報を表示します。</figcaption>
</figure>

アンテナ仰角、捜索範囲、捕捉ゲートの操作については、[レーダーと VSD：LRS](/ja/Docs/aircraft/f15c/radar.html#radar-lrs)を参照してください。

### 2. 自機が取得したトラックを読む

レーダーが追尾を確立すると、この例では SIT に<strong>白い実線の四角形</strong>が表示されます。<strong>実線の輪郭</strong>は自機レーダーが取得したトラック、<strong>白色</strong>は識別不明を意味します。この段階では、背景に赤い破線のデータリンク目標も残っています。

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="SIT の白い自機トラックと赤い破線のデータリンク情報、および対応する VSD トラック" loading="lazy" /></a>
  <figcaption>1：強調表示された兵装情報。2：SIT の自機トラック。3：対応する VSD のレーダートラック。</figcaption>
</figure>

### 3. 相関処理されたトラックと PDT を識別する

しばらくすると、自機レーダーが取得したトラックファイルとデータリンクで受信したファイルが関連づけられ、1つのトラックに統合されます。SIT の目標は<strong>塗りつぶされたシンボル</strong>になります。この例の相関処理済みの敵機は赤色です。

番号1の<strong>青い破線</strong>は、<strong>PDT（Primary Designated Target、主要指定目標）</strong>を指します。

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="SIT の塗りつぶされた相関処理済み敵機と PDT への青い破線、および TWS の VSD" loading="lazy" /></a>
  <figcaption>青い破線は主要指定目標の方向を示します。</figcaption>
</figure>

### 4. EXP で目標編隊の詳細を確認する

SIT を [EXP モード](#sit-exp)に切り替えると、目標編隊の各機を詳しく確認できます。拡大によってシンボルが分離し、配置や高度の表示を VSD と併せて確認しやすくなります。

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="EXP の塗りつぶされた敵機4機を示す1と、対応する VSD トラックを示す2" loading="lazy" /></a>
  <figcaption>1：EXP モードの SIT に表示された目標編隊の詳細。2：対応する VSD のトラック。</figcaption>
</figure>

| この例での表示 | 意味 |
| --- | --- |
| 破線の目標輪郭 | データリンク情報。 |
| 実線の目標輪郭 | 自機レーダーが取得したトラック。 |
| 白い目標 | 識別不明。 |
| 塗りつぶされた目標シンボル | 自機とデータリンクのトラックが関連づけられています。 |
| 青い破線 | PDT の方向。 |

[ページ索引に戻る](#mpcd-index)

<a id="mpcd-aa"></a>

## AA 兵装ページ

### AA を開く

<strong>TDC が VSD に割り当てられている状態</strong>で<strong>キャッスルを右</strong>に操作すると、MPCD が SIT から <strong>AA 空対空兵装ページ</strong>に切り替わります。同じ操作状態でキャッスルを左に操作すると SIT に戻ります。

キャッスルの動作は、カーソルの操作対象によって異なります。右への操作は、VSD が対象なら AA を開き、SIT が対象なら Decenter を選択します。

### 搭載物を確認する

AA は機体の輪郭の周りに搭載物を配置して表示し、機関砲弾数と対抗手段の残数も示します。

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="空パイロン、増槽、弾数、対抗手段、選択中ステーションを注記した2枚の AA 表示" loading="lazy" /></a>
  <figcaption>画像では番号3が2回使われています。左の3は機関砲弾数、右の3は対抗手段の残数です。</figcaption>
</figure>

| 注記 | 表示 | 意味 |
| --- | --- | --- |
| 左図1 | `PYLON` | 搭載物のない空のパイロン。 |
| 左図2 | `FUEL` | 増槽を搭載しているステーション。 |
| 左図3 | `950` | 機関砲の残弾数。この例では950発。 |
| 右図3 | `CHF 120`、`FLR 60` | 対抗手段の残数：チャフ120発、フレア60発。 |
| 右図4 | 強調表示された `AMRM / 120B` | 選択中のステーション。緑色の強調表示と兵装名を囲む白枠で示されます。 |

### 機体設定との照合

以下の <strong>LOADOUT</strong> 設定は、上の AA の例に対応しています。搭載物の種類と弾数を比較すると、設定内容が MPCD でどう表示されるかを確認できます。

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="AA に対応する LOADOUT 設定：9M、120B、7M、増槽、機関砲950発、チャフ120発、フレア60発" loading="lazy" /></a>
</figure>

| LOADOUT の設定 | 対応する AA 表示 |
| --- | --- |
| ステーション8A、2A の `9M` | 2か所の `SRM / 9M`。 |
| ステーション7、3 の `120B` | 2か所の `AMRM / 120B`。 |
| ステーション6、4 の `7M` | 2か所の `MRM / 7M`。 |
| ステーション5 の `Tank` | 中央の `FUEL`。 |
| Gun `950`、Chaff `120`、Flare `60` | AA の機関砲弾数と対抗手段の残数。 |

[ページ索引に戻る](#mpcd-index)
