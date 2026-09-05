<a id="tac-editor-top"></a>

# Tac エディタ

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Tac エディタでは、カスタムミッションの作成、フライトの編成、ユニットの配置、航路の計画を行います。このガイドは全7部で構成され、番号付きの画面概要から各編集操作の詳細へと進みます。

**章構成**

- [第1部：画面の概要](#part-1)
- [第2部：Package と Flight](#part-2)
- [第3部：機体の設定](#part-3)
- [第4部：飛行計画](#part-4)
- [第5部：マップ上のオブジェクト](#part-5)
- [第6部：ミッションの設定](#part-6)
- [第7部：保存とテスト飛行](#part-7)

<a id="part-1"></a>

## 第1部：画面の概要

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="番号 1–11 を付けた Tac エディタの画面">
</a>

画像を選択すると原寸で表示できます。下の番号を選択すると、対応する説明に移動します。

<a id="ui-terms-top"></a>

### UI 索引

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight（飛行小隊）</a>
  <a href="#item-2">2 Bullseye（ブルズアイ）</a>
  <a href="#item-3">3 Package（パッケージ）</a>
  <a href="#item-4">4 追加の非プレイヤーユニット</a>
  <a href="#item-5">5 Inspector（情報パネル）</a>
  <a href="#item-6">6 縮尺</a>
  <a href="#item-7">7 マップツールバー</a>
  <a href="#item-8">8 フライトの飛行計画航路</a>
  <a href="#item-9">9 現地時刻と Zulu 時刻</a>
  <a href="#item-10">10 Geo Fence（ジオフェンス）</a>
  <a href="#item-11">11 エディタツールバー</a>
</div>

<a id="item-1"></a>

### 1. Flight（飛行小隊）

**Flight** は最大 **4 機**の飛行小隊です。上部の各カードが一つのフライトを表し、機体アイコンがそのメンバーを示します。カードを選択すると、フライトの情報確認や機体の設定ができます。

[Flight の章へ](#part-2-flight)

[番号索引に戻る](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye（ブルズアイ）

**Bullseye** は、方位と距離を伝えるための共通の地理的基準点です。黄色い同心円がマップ上の位置を示します。

マップ上の距離リングは Bullseye を中心とする同心円です。隣り合うリングの半径の差は <strong>20 海里（20 NM）</strong>です。

[番号索引に戻る](#ui-terms-top)

<a id="item-3"></a>

### 3. Package（パッケージ）

**Package** は同じ陣営のフライトをまとめます。上部の青と赤の帯に、それぞれのパッケージに所属するフライトが並びます。パッケージを選択してフライトを確認・管理します。

[Package の章へ](#part-2-package)

[番号索引に戻る](#ui-terms-top)

<a id="item-4"></a>

### 4. 追加の非プレイヤーユニット

Package/Flight の構成に属さない、AI が操作する追加ユニットです。画像には独立した航空機と地対空ミサイルユニットが示されています。エディタツールバーの **NP Unit** から管理します。

[詳しい説明へ: NP Unit](#part-5-np-unit-list)

[番号索引に戻る](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector（情報パネル）

右側のパネルには、選択中の対象の情報と操作項目が表示されます。画像ではミッション名、シーナリー、難易度などのミッション全体の情報を表示しています。

**Scenery** は現在選択できません。今後のバージョンで複数の地域に対応した際に、ここでマップの地域を選択できるようになります。

**マップの何もない場所をダブルタップ**すると、Inspector がミッション全体の情報に戻ります。

**対象別の Inspector**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[番号索引に戻る](#ui-terms-top)

<a id="item-6"></a>

### 6. 縮尺

縮尺バーは、現在のズーム倍率でバーの長さに相当する距離を示します。**NM** は海里を表し、画像の例は **16.66 NM** です。マップ上の距離を見積もる際に使います。

[番号索引に戻る](#ui-terms-top)

<a id="item-7"></a>

### 7. マップツールバー

左下のツールバーには、左から順に四つのボタンがあります。

- **移動**（四方向の矢印）：押し続けると、選択したマップ要素を移動できます。
- **拡大**（+ の虫眼鏡）：マップを拡大します。
- **縮小**（− の虫眼鏡）：より広い範囲を表示します。
- **Home**（家）：エディタを閉じてメイン画面に戻ります。

::: tip マップ要素の移動
1. 移動したいユニットまたは要素を選択します。
2. **左手で移動ボタンを押し続けます**。
3. 押したまま、**右手でマップ上をドラッグ**して選択した要素の位置を調整します。
:::

[番号索引に戻る](#ui-terms-top)

<a id="item-8"></a>

### 8. フライトの飛行計画航路

航点を結ぶ線が、フライトの計画航路を示します。フライトを選択して飛行計画を確認し、航点を編集します。この航路は、そのフライトの航法に使用されます。

[詳しい説明へ](#part-4)

[番号索引に戻る](#ui-terms-top)

<a id="item-9"></a>

### 9. 現地時刻と Zulu 時刻

下部にはミッションの時刻が表示されます。先頭が**現地時刻**、角括弧内で **Z** が付いているものが <strong>Zulu 時刻（UTC）</strong>です。例の **16:00:00** と **23:00:00 Z** は同じ瞬間を表します。

[番号索引に戻る](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence（ジオフェンス）

**Geo Fence** はマップ上の戦術区域や境界を示します。円形または多角形で、画像には円形の区域と **MEZ** と表示された多角形があります。エディタツールバーの **Geo Fence** から管理します。

[詳しい説明へ: Geo Fence](#part-5-geofence-list)

[番号索引に戻る](#ui-terms-top)

<a id="item-11"></a>

### 11. エディタツールバー

ミッション全体の情報を表示する Inspector には六つのボタンがあります。上段の左から右、続いて下段の左から右の順に説明します。

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time（天候と時刻）</a>
  <a href="#item-11-2">11.2 File（ファイル）</a>
  <a href="#item-11-3">11.3 Config（設定）</a>
  <a href="#item-11-4">11.4 Geo Fence（ジオフェンス）</a>
  <a href="#item-11-5">11.5 NP Unit（非プレイヤーユニット）</a>
  <a href="#item-11-6">11.6 Go Fly（飛行開始）</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time（天候と時刻）

ミッションの天候と時刻の設定を開き、環境条件と時間帯を調整します。

[番号索引に戻る](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File（ファイル）

ミッションファイルのメニューを開きます。新規作成、現在のミッションの保存、保存済みミッションの読み込み・削除ができます。

[番号索引に戻る](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config（設定）

ミッション設定と制限を開きます。兵装、塗装、天候・時刻の変更や時間停止を許可するか設定し、機体と兵装の制限を指定できます。

[番号索引に戻る](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence（ジオフェンス）

ジオフェンス一覧を開き、戦術区域や境界を追加・選択・編集します。

[詳しい説明へ: Geo Fence](#part-5-geofence-list)

[番号索引に戻る](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit（非プレイヤーユニット）

非プレイヤーユニット一覧を開き、パッケージに属さないユニットを追加・管理します。ユニットを選択すると Inspector で詳細を編集できます。

[詳しい説明へ: NP Unit](#part-5-np-unit-list)

[番号索引に戻る](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly（飛行開始）

現在のエディタ設定でミッションを開始します。プレイヤーが操作する機体は必ず 1 機で、その機体モジュールの利用権限が必要です。開始できない場合は、表示されたメッセージに従って設定を修正します。

[番号索引に戻る](#ui-terms-top)

[ページの先頭に戻る](#tac-editor-top)

<a id="part-2"></a>

## 第2部：Package と Flight

Package でフライトを編成し、Flight でメンバーと任務を設定します。以下ではこの階層に沿って Inspector を説明します。

機体の階層は **Mission → Package → Flight → Slot（機体1機）** です。各 Flight は一つの Package に属し、最大 **4 機**で構成されます。

<a id="part-2-package"></a>

### Package（パッケージ）

マップ上部で Package を選ぶと、所属する Flight と時間設定が表示されます。例の名前は blue1 です。

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>名前と Flight 一覧</strong>：上部のパッケージ名をタップすると、名前を変更できます。その下に Flight1、Flight2、Flight3 が表示されます。番号は各フライト内の機体を示します。
- <strong>＋</strong>：Flight を追加します。既存のカードを選ぶと Flight Inspector が開きます。
- <strong>Take-off Time</strong>：パッケージの離陸時刻。例は 23:03 です。
- <strong>Time on Target（TOT）</strong>：パッケージの目標到達時刻。例は 23:33 です。

Package と Flight にはそれぞれ時間設定があります。連動の仕組みと時刻の基準は後ほど説明します。

</TacInspectorPanel>

[画面の概要に戻る](#item-3)

<a id="part-2-flight"></a>

### Flight（飛行小隊）

Package 内の Flight を選ぶと、メンバーと任務設定が表示されます。例は4機で構成される Flight1 です。

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>メンバー図</strong>：機体と番号を表示します。メンバーを選ぶと Slot Inspector が開きます。
- <strong>Airbase</strong>：フライトの基地。例では NAS_Fallon を選択しています。
- <strong>Mission Role</strong>：任務の役割。例は CAP です。
- <strong>Take-off Time / Time on Target</strong>：離陸時刻と目標到達時刻。例は 23:03 と 23:12 です。
- <strong>Station Time</strong>：哨戒任務で、目標タイプの2つのステアポイント間を巡回する時間を分単位で設定します。
- <strong>Steer Points</strong>：航路の編集を開きます。航路とステアポイントの詳細は第4部で扱います。
- <strong>Rebuild</strong>：Flight の Time on Target（TOT、目標到達時刻）を再計算します。
- <strong>Delete</strong>：Rebuild の下にあり、Flight の定義全体を削除します。機体 Slot 1つだけの削除ではありません。

現在の画像には Rebuild の一部だけが写っており、その下の Delete ボタンは写っていません。

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### 哨戒の例：空中給油機と早期警戒機

空中給油機や早期警戒機を指定位置で哨戒させるには：

1. 哨戒予定位置にステアポイントを2つ置き、両方を<strong>目標タイプ</strong>に設定します。
2. Flight Inspector の <strong>Station Time</strong> に、希望する哨戒時間を分単位で設定します。
3. 機体は目標タイプの2つのステアポイント間を、Station Time で指定した時間だけ巡回します。

[画面の概要に戻る](#item-1)

[詳しい説明へ: Slot](#part-3-slot) · [Steer Points](#part-4)

[ページの先頭に戻る](#tac-editor-top)

<a id="part-3"></a>

## 第3部：機体の設定

<a id="part-3-slot"></a>

### Slot（個々の機体）

Slot は Flight に属する1機を表します。Flight のメンバー図で機体を選択すると、個別の Inspector が開きます。

<TacInspectorPanel panel="slot" alt="Slot（個々の機体） Inspector" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>機種とメンバー番号</strong>：上部は1番機の F-15C を表示しています。下のドロップダウンで機種を選択します。
- <strong>Loadout / Livery</strong>：兵装と塗装の設定を開きます。
- <strong>Spawn Type</strong>：Airborne（空中）または Airbase（基地）を選択します。画像では Airbase が選択されています。
- <strong>Spawn Point ID</strong>：出現地点を選択します。例は Auto です。
- <strong>Initial State</strong>：機体の初期状態の設定を開きます。
- <strong>Delete</strong>：現在の機体 Slot を削除します。Flight や Package 全体の削除ではありません。

画像は Airbase 選択時のものです。Airborne、Loadout / Livery、Initial State の各画面は後の画像で説明します。

</TacInspectorPanel>

[画面の概要に戻る](#item-1)

[ページの先頭に戻る](#tac-editor-top)

<a id="part-4"></a>

## 第4部：飛行計画

Flight Inspector の Steer Points を選択して、そのフライトのステアポイントを編集します。画像は番号3の地点を表示しています。

[詳しい説明へ: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points（ステアポイント画面）

<TacInspectorPanel panel="steerpoints" alt="Steer Points（ステアポイント画面）" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>左右の矢印と番号</strong>：矢印で地点を切り替えます。中央に選択中の番号が表示され、例では3です。
- <strong>地点のタイプ</strong>：ドロップダウンでタイプを選択します。画像では Target（目標）が選択されています。
- <strong>Elev (MSL)</strong>：地点での計画高度を平均海面（MSL）基準のフィート（FT）で設定します。例は 15000 FT で、対地高度ではありません。
- <strong>KCAS</strong>：地点での計画較正対気速度をノットで示します。例は 529 KCAS で、対地速度や真対気速度ではありません。
- <strong>Time(Z) Over Steerpoint</strong>：地点の計画通過時刻を Zulu（UTC）で示します。左は時、右は分で、例は 23:15 Z です。飛行時間の長さではありません。
- <strong>New</strong>：ステアポイントを追加します。
- <strong>Delete</strong>：選択中のステアポイントを削除します。Flight 全体は削除しません。

</TacInspectorPanel>

空中給油機や早期警戒機の哨戒では、哨戒位置に Target タイプの地点を2つ置き、Flight の Station Time で2点間の巡回時間を設定します。Flight の TOT を再計算するには、Flight Inspector の Rebuild を選択します。

[哨戒設定の例](#flight-station-time-example) · [マップ上の要素の移動](#item-7)

[ページの先頭に戻る](#tac-editor-top)

<a id="part-5"></a>

## 第5部：マップ上のオブジェクト

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Geo Fence 一覧</a>
  <a href="#part-5-geofence-circle">円形フェンス（Circle）</a>
  <a href="#part-5-geofence-polygon">多角形フェンス（Polygon）</a>
  <a href="#part-5-np-unit-list">NP Unit 一覧</a>
</div>

### Bullseye

**Bullseye** は、方位と距離を伝えるための共通の地理的基準点です。黄色い同心円がマップ上の位置を示します。

マップ上の距離リングは Bullseye を中心とする同心円です。隣り合うリングの半径の差は <strong>20 海里（20 NM）</strong>です。

### Geo Fence（ジオフェンス）

ミッション概要パネルの Geo Fence から一覧を開き、フェンスを選択します。円と多角形では形状の編集項目が異なります。

<a id="part-5-geofence-list"></a>

#### Geo Fence 一覧

<TacInspectorPanel panel="geofence-list" alt="Geo Fence 一覧" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>＋</strong>：Geo Fence を追加します。
- <strong>一覧の項目</strong>：円形の 11 と多角形の MEZ が表示されています。左のアイコンで形状を区別できます。
- <strong>項目の選択</strong>：フェンスの Inspector を開き、役割、形状、陣営、幾何情報を編集します。

</TacInspectorPanel>

[画面の概要に戻る](#item-10)

<a id="part-5-geofence-circle"></a>

#### 円形フェンス（Circle）

<TacInspectorPanel panel="geofence-circle" alt="円形フェンス（Circle） Inspector" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>名前</strong>：上部の 11 はフェンスの名前です。
- <strong>Geo Fence Role / Shape</strong>：役割は MEZ、形状は Circle です。名前、役割、形状は別の情報です。
- <strong>Coalition</strong>：フェンスの陣営。例は Red です。
- <strong>Threat Radius</strong>：円形領域の半径。例は 22.6 ですが、画像に単位は表示されていません。
- <strong>Delete</strong>：現在のフェンスを削除します。

</TacInspectorPanel>

[画面の概要に戻る](#item-10)

<a id="part-5-geofence-polygon"></a>

#### 多角形フェンス（Polygon）

<TacInspectorPanel panel="geofence-polygon" alt="多角形フェンス（Polygon） Inspector" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>名前 / Geo Fence Role</strong>：名前は MEZ ですが、役割は ROZ です。名前と役割を区別してください。
- <strong>Shape / Coalition</strong>：例は Polygon と Red です。
- <strong>左右の矢印と番号</strong>：編集する頂点を選択します。表示されている番号は 0 です。
- <strong>New Vertice</strong>：頂点を追加します。表記は画面のボタン名に合わせています。
- <strong>Rotate</strong>：多角形を回転します。刻み幅と角度の規則は後ほど説明します。
- <strong>Delete Vertex / Delete</strong>：Delete Vertex は選択した頂点、最下部の Delete はフェンス全体を削除します。

マップ上の位置を変える場合は、第1部の操作を使います。対象を選び、左手で移動ボタンを押し続けながら右手でドラッグします。

</TacInspectorPanel>

[画面の概要に戻る](#item-10)

[詳しい説明へ](#item-7)

<a id="part-5-np-unit-list"></a>

### NP Unit 一覧

ミッション概要パネルの NP Unit から Units 一覧を開き、Package / Flight に属さないユニットを管理します。

<TacInspectorPanel panel="np-unit-list" alt="NP Unit 一覧" open-label="画像を選択すると原寸で表示します。">

**項目と操作**

- <strong>＋</strong>：非プレイヤーユニットを追加します。
- <strong>一覧の項目</strong>：例は 9K37 Buk np と F-15C np で、地対空ミサイルユニットと独立した航空機を示します。
- <strong>項目の選択</strong>：そのユニットの Inspector を開きます。個別の NP Unit の設定画面は画像が揃ってから説明します。

</TacInspectorPanel>

[画面の概要に戻る](#item-4)

[ページの先頭に戻る](#tac-editor-top)

<a id="part-6"></a>

## 第6部：ミッションの設定

この章には、スクリーンショットを用いた詳しい操作説明を順次追加します。

- ミッション情報、シーナリー、天候、時刻
- 設定の権限と制限

[ページの先頭に戻る](#tac-editor-top)

<a id="part-7"></a>

## 第7部：保存とテスト飛行

この章には、スクリーンショットを用いた詳しい操作説明を順次追加します。

- 推奨される編集手順
- File：保存と読み込み
- Go Fly と飛行前チェック

[ページの先頭に戻る](#tac-editor-top)
