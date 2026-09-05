<a id="hud-page-top"></a>

# F-15C HUD 操作

HUD（ヘッドアップディスプレイ）は、F-15Cの飛行と兵装操作の主要な表示装置です。姿勢、航法、飛行諸元、目標、兵装の情報をまとめ、機動や交戦中も機外を見続けられるようにします。

以下の索引から各章に移動できます。

<nav class="term-cloud tac-editor-index" aria-label="索引 · F-15C HUD 操作">
  <a href="#hud-symbols-top">HUDの基本シンボル</a>
  <a href="#hud-gun">機関砲モード</a>
  <a href="#hud-aim9">AIM-9サイドワインダー・モード</a>
  <a href="#hud-aim7">AIM-7スパロー・モード</a>
  <a href="#hud-aim120">AIM-120 AMRAAMモード</a>
  <a href="#hud-auto-acquisition">レーダー自動捕捉モード</a>
</nav>

<a id="hud-symbols-top"></a>

## HUDの基本シンボル

多くのシンボルは、選択したマスターモードにかかわらず表示されます。方位、対気速度、高度、迎角の各目盛にある山形の指示マークはキャレット（caret）と呼ばれ、それぞれの現在値を示します。

![HUDの基本シンボル](/assets/F-15C/Manual/fig-38-hud-basic-symbology.png)

### 索引

番号を選択すると詳しい説明へ移動します。

<div class="term-cloud tac-editor-index">
  <a href="#hud-item-1">1. 方位目盛</a>
  <a href="#hud-item-2">2. 対気速度目盛</a>
  <a href="#hud-item-3">3. 速度ベクトル</a>
  <a href="#hud-item-4">4. 迎角目盛</a>
  <a href="#hud-item-5">5. マッハ数とG表示</a>
  <a href="#hud-item-6">6. 機関砲十字</a>
  <a href="#hud-item-7">7. 高度目盛</a>
  <a href="#hud-item-8">8. 機体基準シンボル</a>
  <a href="#hud-item-9">9. バンク誘導指示</a>
  <a href="#hud-item-10">10. ピッチ目盛</a>
  <a href="#hud-item-11">11. 航法データ</a>
  <a href="#hud-item-12">12. 地平線</a>
</div>

### 各シンボルの説明

<a id="hud-item-1"></a>

#### 1. 方位目盛

上部の水平目盛は磁方位を示します。2桁の数字は10°単位で、`35`は350°、`00`は000°です。キャレットが現在の機首方位を指します。

目盛の下に伸びる縦線は、選択した航法ポイントの方向を示します。この例では現在方位の右側にあるため、ポイントへ向かうには右旋回が必要です。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-2"></a>

#### 2. 対気速度目盛

左の縦目盛は指示対気速度をノットで表示します。キャレットが現在値を指します。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-3"></a>

#### 3. 速度ベクトル

円形の飛行経路マーカーは、機体が実際に進む方向を示します。機体基準シンボルとの位置関係から、機首方向と飛行経路の差や、風・横滑りによる偏移を読み取れます。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-4"></a>

#### 4. 迎角目盛

対気速度目盛の内側にあり、迎角を**度ではなくAoA単位**で示します。キャレットは現在の迎角です。機首方向と飛行経路のなす角が大きくなると迎角も増えます。

最も太い目盛は適正進入迎角（on-speed AoA）です。着陸時は迎角キャレットをこの目盛に合わせ、適正な迎角を保ちます。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-5"></a>

#### 5. マッハ数とG表示

上の値は現在のマッハ数、下の2つは現在Gと最大許容Gです。この簡略表示では、`10`は1.0 G、`87`は8.7 Gを意味します。

F-15Cの最大許容荷重倍数は9 Gですが、システムはマッハ数と外部搭載物に応じて許容値を再計算します。HUDは現在の条件での制限値を示すため、常に9 Gとは限りません。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-6"></a>

#### 6. 機関砲十字

固定十字はM61機関砲の軸線に一致し、主兵装スイッチをオンにすると表示されます。計算式の機関砲モードでは、この基準とは別に照準解を表示します。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-7"></a>

#### 7. 高度目盛

通常の航法時、右の縦目盛は気圧高度をフィートで表示します。キャレットが現在高度を指します。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-8"></a>

#### 8. 機体基準シンボル

固定されたW形は機体の縦方向基準を示します。速度ベクトルと比較すると、迎角や飛行経路のずれを確認できます。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-9"></a>

#### 9. バンク誘導指示

選択した航法ポイントへ誘導します。バンクさせて速度ベクトルを指示に近づけ、両者が重なってきたらバンク角を減らします。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-10"></a>

#### 10. ピッチ目盛

ピッチ姿勢を5°刻みで示し、バンクに合わせて回転します。正のピッチ線は地平線より上、負の線は下に表示されます。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-11"></a>

#### 11. 航法データ

右下の表示は選択中のルートポイント、航法モード、情報源・距離、到着までの予想時間です。`1 NAV`、`N 30.3`、`5 MIN`は、ポイント1、残距離30.3海里、到着まで約5分を意味します。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top)

<a id="hud-item-12"></a>

#### 12. 地平線

ピッチ0°の基準線です。機外の地平線が見づらいときも姿勢基準になり、ピッチの変化に応じて機体シンボルに対して移動します。

[索引に戻る · HUDの基本シンボル](#hud-symbols-top) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-gun"></a>

## 機関砲モード

HUD表示はレーダー測距情報の有無で変わります。以下の3枚は、ロックなしの照準、STTロック時のGDS照準、発砲後のBATR表示です。

<nav class="term-cloud tac-editor-index" aria-label="索引 · 機関砲モード">
  <a href="#hud-gun-no-lock">図1 · レーダーロックなしの機関砲</a>
  <a href="#hud-gun-gds">図2 · GDS機関砲照準</a>
  <a href="#hud-gun-batr">図3 · 目標距離到達時の弾位置（BATR）</a>
</nav>

<a id="hud-gun-no-lock"></a>

### 図1 · レーダーロックなしの機関砲

![図1 · レーダーロックなしの機関砲](/assets/F-15C/HUD/gun-no-lock.png)

ロックがない場合、照準点は**固定の想定距離2,000フィート**で計算されます。その距離での予想弾位置を示し、目標の実際のレーダー測距に基づくものではありません。

F-16やF/A-18と異なり、F-15Cはレーダー測距がないときに機関砲ファンネルを表示せず、この固定距離の照準を使用します。

[索引に戻る · 機関砲モード](#hud-gun) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-gun-gds"></a>

### 図2 · GDS機関砲照準

機関砲選択時、GDS（Gun Director Sight）は、レーダーが単一目標追尾のSTT（Single Target Track）にあり、目標が機関砲射程内にいる場合のみ表示されます。

![図2 · GDS機関砲照準](/assets/F-15C/HUD/gun-gds.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図2 · GDS機関砲照準">
  <a href="#hud-gds-item-1">1. GDSレティクル</a>
  <a href="#hud-gds-item-2">2. 目標指示枠</a>
  <a href="#hud-gds-item-3">3. 機関砲残弾数</a>
  <a href="#hud-gds-item-4">4. 射程指示</a>
  <a href="#hud-gds-item-5">5. 接近率</a>
  <a href="#hud-gds-item-6">6. レーダー距離目盛</a>
  <a href="#hud-gds-item-7">7. 目標斜距離</a>
</nav>

<a id="hud-gds-item-1"></a>

#### 1. GDSレティクル

円周の各目盛は**1,000フィート**です。中央の小さな点が計算された照準点です。

点を目標に安定して重ねながら発砲するか、目標の揚力ベクトル方向に点を横切らせながら発砲します。GDSは予測照準であり、命中は弾の飛翔中の目標運動にも左右されます。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds)

<a id="hud-gds-item-2"></a>

#### 2. 目標指示枠

TD（Target Designator）枠は、レーダーロックした目標への視線方向LOSを示します。目標の現在方向であり、偏差を加えた機関砲照準点ではありません。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds)

<a id="hud-gds-item-3"></a>

#### 3. 機関砲残弾数

残りの弾数を示します。この例の`950`は残弾950発です。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds)

<a id="hud-gds-item-4"></a>

#### 4. 射程指示

レティクル外周付近の明るい点は、機関砲の射程判断を助ける指示です。現在の条件で変化し、固定距離を表すものではありません。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds)

<a id="hud-gds-item-5"></a>

#### 5. 接近率

自機と目標の距離が変化する速さをノットで示します。正なら接近、負なら離隔です。この例は`0`です。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds)

<a id="hud-gds-item-6"></a>

#### 6. レーダー距離目盛

HUD右側の目盛は目標距離を示します。上端の`10`は最大目盛が**10海里**、中央の`5`は5海里であることを表します。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds)

<a id="hud-gds-item-7"></a>

#### 7. 目標斜距離

番号7の3か所はいずれも、自機と目標を直線で結ぶ斜距離を示します。

- レティクル円周の距離マーク：1目盛1,000フィート。図の位置は見た目で約3,300フィートです。
- レーダー距離目盛のポインター：海里単位の目盛上で目標距離を示します。
- 右下の数字：`R 0.6`は斜距離0.6海里です。

レティクルのフィート単位と、レーダー目盛・数字の海里単位を区別してください。

[索引に戻る · 図2 · GDS機関砲照準](#hud-gun-gds) · [索引に戻る · 機関砲モード](#hud-gun) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-gun-batr"></a>

### 図3 · 目標距離到達時の弾位置（BATR）

番号1はBATR三角、番号2は接近率を示します。

![図3 · 目標距離到達時の弾位置（BATR）](/assets/F-15C/HUD/gun-batr.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図3 · 目標距離到達時の弾位置（BATR）">
  <a href="#hud-batr-item-1">1. BATR三角</a>
  <a href="#hud-batr-item-2">2. 負の接近率</a>
</nav>

<a id="hud-batr-item-1"></a>

#### 1. BATR三角

BATRはBullets at Target Rangeの略です。発砲後、弾が目標の現在距離に到達したときの位置を三角で示します。

GDSの点は発砲時の予測です。目標に重ねても、弾の飛翔時間中に目標の加速度が大きく変われば命中しないことがあります。一方BATRは発砲後の評価に使い、目標距離に達した弾が目標に重なるかを示します。

BATR三角が継続して目標に重なるなら、弾列が命中していると判断できます。目標と離れていれば、その距離では弾が脇を通過しています。

[索引に戻る · 図3 · 目標距離到達時の弾位置（BATR）](#hud-gun-batr)

<a id="hud-batr-item-2"></a>

#### 2. 負の接近率

`-11`はノット単位の接近率です。負号は目標が離れていることを示し、両機の距離が約11ノットの割合で増えています。

[索引に戻る · 図3 · 目標距離到達時の弾位置（BATR）](#hud-gun-batr) · [索引に戻る · 機関砲モード](#hud-gun) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9"></a>

## AIM-9サイドワインダー・モード

この図解は本ゲームのHUDを説明します。シーカーの状態、レーダーを用いた発射支援、目標が最大射程外から最小射程内へ近づく際の表示変化を扱います。

射程条件とシーカーロックは別々に確認します。ASE拡大や`IN RNG`だけではロックを確認できません。シーカーが目標を指し、高いロック音が鳴っていることも確認してください。

<nav class="term-cloud tac-editor-index" aria-label="索引 · AIM-9サイドワインダー・モード">
  <a href="#hud-aim9-caged">図1 · SM選択とCaged状態</a>
  <a href="#hud-aim9-uncaged">図2 · Uncaged状態</a>
  <a href="#hud-aim9-dlz">図3 · PDTと動的発射領域</a>
  <a href="#hud-aim9-in-range">図4 · 射程内だがシーカーはCaged</a>
  <a href="#hud-aim9-slaved">図5 · UncageとPDTへの連動</a>
  <a href="#hud-aim9-rtr">図6 · RTR内と近距離リング</a>
  <a href="#hud-aim9-too-close">図7 · 最小射程未満：Break X</a>
  <a href="#hud-aim9-gun-composite">機関砲複合モード</a>
</nav>

<a id="hud-aim9-caged"></a>

### 図1 · SM選択とCaged状態

短射程ミサイル（SM）を選ぶと、AIM-9の兵装状態とシーカーシンボルが表示されます。シーカーは初期状態でCaged（固定）となり、機体軸線付近を向きます。

![図1 · SM選択とCaged状態](/assets/F-15C/HUD/aim9-01-caged.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図1 · SM選択とCaged状態">
  <a href="#hud-aim9-caged-item-1">1. 兵装状態：S 2M</a>
  <a href="#hud-aim9-caged-item-2">2. シーカー方向</a>
  <a href="#hud-aim9-caged-item-3">3. シーカー捜索範囲（未実装）</a>
</nav>

<a id="hud-aim9-caged-item-1"></a>

#### 1. 兵装状態：S 2M

左下の`S 2M`は兵装と残数です。`S`はSM（短射程ミサイル）、`2`は残り2発、`M`はAIM-9M型を示します。

[索引に戻る · 図1 · SM選択とCaged状態](#hud-aim9-caged)

<a id="hud-aim9-caged-item-2"></a>

#### 2. シーカー方向

小さな円はシーカーの現在方向です。ここでは目標を追わず、機体軸線付近に固定されています。

[索引に戻る · 図1 · SM選択とCaged状態](#hud-aim9-caged)

<a id="hud-aim9-caged-item-3"></a>

#### 3. シーカー捜索範囲（未実装）

外側の大きな円はシーカーの捜索範囲を示します。対応する捜索機能は未実装です。この円を、捜索や目標ロックが完了した証拠と解釈しないでください。

[索引に戻る · 図1 · SM選択とCaged状態](#hud-aim9-caged) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-uncaged"></a>

### 図2 · Uncaged状態

Uncageでシーカーの固定が解除されます。この図では小円が軸線付近から移動し、目標を追尾しています。

![図2 · Uncaged状態](/assets/F-15C/HUD/aim9-02-uncaged.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図2 · Uncaged状態">
  <a href="#hud-aim9-uncaged-item-1">1. U：固定解除状態</a>
  <a href="#hud-aim9-uncaged-item-2">2. 追尾中のシーカー方向</a>
</nav>

<a id="hud-aim9-uncaged-item-1"></a>

#### 1. U：固定解除状態

右下の`U`はシーカーがUncagedであることを示します。シーカーモードの表示であり、単独で目標ロックを保証するものではありません。

[索引に戻る · 図2 · Uncaged状態](#hud-aim9-uncaged)

<a id="hud-aim9-uncaged-item-2"></a>

#### 2. 追尾中のシーカー方向

小円は追尾シーカーの視線方向を示します。発射前に、意図した目標を向いていることと、ヘッドセットで高いロック音が聞こえることを確認します。

[索引に戻る · 図2 · Uncaged状態](#hud-aim9-uncaged) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-dlz"></a>

### 図3 · PDTと動的発射領域

レーダーに主要指定目標PDT（Primary Designated Target）があると、目標データから動的発射領域DLZを計算し、ASE円、操舵点、TD枠、射程マークを表示できます。この図の目標はまだ最大射程外です。

![図3 · PDTと動的発射領域](/assets/F-15C/HUD/aim9-03-dlz.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図3 · PDTと動的発射領域">
  <a href="#hud-aim9-dlz-item-1">1. ASEと目標速度ベクトル</a>
  <a href="#hud-aim9-dlz-item-2">2. 操舵点</a>
  <a href="#hud-aim9-dlz-item-3">3. 目標指示枠</a>
  <a href="#hud-aim9-dlz-item-4">4. RMax：最大射程</a>
  <a href="#hud-aim9-dlz-item-5">5. RTR：反転逃走を考慮した射程</a>
  <a href="#hud-aim9-dlz-item-6">6. RMin：最小射程</a>
</nav>

<a id="hud-aim9-dlz-item-1"></a>

#### 1. ASEと目標速度ベクトル

ASE（Allowable Steering Error：許容操舵誤差）円は、目標が最大射程外のとき小さく表示されます。

円から伸びる線は上面視での目標速度ベクトルです。HUD上の目標の上下移動を表す線ではありません。

[索引に戻る · 図3 · PDTと動的発射領域](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-2"></a>

#### 2. 操舵点

明るい点は操舵点です。ASE円内に入れるよう機動すると、発射後のミサイルの旋回を減らし、エネルギーを節約して有利な迎撃姿勢を作れます。

この点は発射の操舵基準であり、シーカーロックの表示ではありません。ここでは目標が射程外なので、ASE内に入れただけで発射してはいけません。

[索引に戻る · 図3 · PDTと動的発射領域](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-3"></a>

#### 3. 目標指示枠

TD枠はレーダーPDTへの視線方向LOSを示します。レーダー指定目標の位置であり、AIM-9赤外線シーカーのロックを確認するものではありません。

[索引に戻る · 図3 · PDTと動的発射領域](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-4"></a>

#### 4. RMax：最大射程

DLZ上側のマークは現在条件で計算した最大射程です。RMaxより遠い目標は計算上の発射領域外です。

[索引に戻る · 図3 · PDTと動的発射領域](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-5"></a>

#### 5. RTR：反転逃走を考慮した射程

RTR（Range Turn and Run）は、目標が反転して逃走する場合の射程推定値で、一般に逃避不能射程と呼ばれます。RTR内では発射条件が有利になりますが、命中保証ではありません。

[索引に戻る · 図3 · PDTと動的発射領域](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-6"></a>

#### 6. RMin：最小射程

DLZ下側のマークは最小射程です。RMin未満では発射しないでください。対応する警告は[図7](#hud-aim9-too-close)を参照してください。

[索引に戻る · 図3 · PDTと動的発射領域](#hud-aim9-dlz) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-in-range"></a>

### 図4 · 射程内だがシーカーはCaged

目標が最大射程内に入るとASEが拡大し、`IN RNG`が表示されます。距離条件上は命中の可能性がありますが、赤外線ロックの確認にはなりません。

![図4 · 射程内だがシーカーはCaged](/assets/F-15C/HUD/aim9-04-in-range.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図4 · 射程内だがシーカーはCaged">
  <a href="#hud-aim9-in-range-item-1">1. 拡大したASE円</a>
  <a href="#hud-aim9-in-range-item-2">2. 接近率と距離ポインター</a>
</nav>

<a id="hud-aim9-in-range-item-1"></a>

#### 1. 拡大したASE円

ASEは拡大していますが、シーカーの小円は左のTD枠にある目標を指さず、軸線付近に残っています。**この状態では発射しません。**

シーカーが目標を向き、高いロック音が鳴ることを、射程条件と合わせて確認します。ASE拡大や`IN RNG`だけでは不十分です。

[索引に戻る · 図4 · 射程内だがシーカーはCaged](#hud-aim9-in-range)

<a id="hud-aim9-in-range-item-2"></a>

#### 2. 接近率と距離ポインター

番号2はレーダー距離ポインターと隣の接近率を示します。`709`の単位はノットで、正の値は距離の減少を意味します。シーカーロック表示ではありません。

[索引に戻る · 図4 · 射程内だがシーカーはCaged](#hud-aim9-in-range) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-slaved"></a>

### 図5 · UncageとPDTへの連動

レーダーPDTがあるときUncageすると、シーカーはその目標の視線方向LOSへ連動します。

![図5 · UncageとPDTへの連動](/assets/F-15C/HUD/aim9-05-slaved.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図5 · UncageとPDTへの連動">
  <a href="#hud-aim9-slaved-item-1">1. 目標LOSに連動したシーカー</a>
</nav>

<a id="hud-aim9-slaved-item-1"></a>

#### 1. 目標LOSに連動したシーカー

小円がTD枠に重なり、右下に`U`が表示されています。レーダーが目標方向を提供し、シーカーをそこへ向けます。

方向の連動と赤外線ロックは別です。発射前に高いロック音と適切な射程条件を確認してください。

[索引に戻る · 図5 · UncageとPDTへの連動](#hud-aim9-slaved) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-rtr"></a>

### 図6 · RTR内と近距離リング

目標がRTR内に入るとTD枠の下に三角が現れ、ASEが点滅します。非常に有利な条件ですが、シーカーロックとRMin制限は引き続き必要です。

![図6 · RTR内と近距離リング](/assets/F-15C/HUD/aim9-06-rtr.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図6 · RTR内と近距離リング">
  <a href="#hud-aim9-rtr-item-1">1. 近距離リング</a>
  <a href="#hud-aim9-rtr-item-2">2. TD枠の下の三角</a>
</nav>

<a id="hud-aim9-rtr-item-1"></a>

#### 1. 近距離リング

目標距離が12,000フィート未満になると、斜距離を示す円形の追加表示が現れます。外側のASE円とは役割が異なります。

この図の内側の弧はほぼ半円で、目標が約6,000フィートに入ったところです。右下にも`R 1.0`と表示されています。

[索引に戻る · 図6 · RTR内と近距離リング](#hud-aim9-rtr)

<a id="hud-aim9-rtr-item-2"></a>

#### 2. TD枠の下の三角

三角は目標がRTR内にいることを示します。点滅するASEとともに有利な発射条件を知らせます。静止画では点滅は確認できません。

[索引に戻る · 図6 · RTR内と近距離リング](#hud-aim9-rtr) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-too-close"></a>

### 図7 · 最小射程未満：Break X

目標が最小射程より近くなるとASEが消え、代わりに大きなBreak Xが点滅します。

![図7 · 最小射程未満：Break X](/assets/F-15C/HUD/aim9-07-break-x.png)

<nav class="term-cloud tac-editor-index" aria-label="索引 · 図7 · 最小射程未満：Break X">
  <a href="#hud-aim9-too-close-item-1">1. Break X：目標が近すぎる</a>
</nav>

<a id="hud-aim9-too-close-item-1"></a>

#### 1. Break X：目標が近すぎる

大きなXは発射禁止の警告です。ミサイルが有効な速度へ加速する時間が足りない可能性があり、爆発の破片が自機の飛行経路に及ぶおそれもあります。

シーカーが目標を向いたままでも、TD枠の下に三角が残っていても、最小射程警告を無視しないでください。距離を広げてから再評価します。

[索引に戻る · 図7 · 最小射程未満：Break X](#hud-aim9-too-close) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-gun-composite"></a>

### 機関砲複合モード

SM選択中に<strong>Coolie Up（Coolieスイッチ上）</strong>を操作すると機関砲複合モードになります。SMの選択を保ったまま機関砲も選択・使用でき、HUDに両方の兵装シンボルを組み合わせて表示します。

<nav class="term-cloud tac-editor-index" aria-label="索引 · 機関砲複合モード">
  <a href="#hud-aim9-gun-composite-normal">図1 · 通常HUD</a>
  <a href="#hud-aim9-gun-composite-rej">図2 · HUD REJ</a>
</nav>

<a id="hud-aim9-gun-composite-normal"></a>

#### 図1 · 通常HUD

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite.png" alt="図1 · 通常HUD" />
  <figcaption>図1 · 通常HUD</figcaption>
</figure>

GDS照準、TD枠、ミサイルのシーカー方向を同時に表示します。左下の`S2M950`は、`S2M`がAIM-9Mを2発、`950`が機関砲残弾950発を意味します。

[GDSの説明](#hud-gun-gds)と[SMシーカー方向](#hud-aim9-uncaged-item-2)も参照してください。

[索引に戻る · 機関砲複合モード](#hud-aim9-gun-composite) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim9-gun-composite-rej"></a>

#### 図2 · HUD REJ

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite-rej.png" alt="図2 · HUD REJ" />
  <figcaption>図2 · HUD REJ</figcaption>
</figure>

同じ複合モードでHUD REJを選択した表示です。**方位、対気速度、高度の3つの目盛が非表示**となり、視界を整理します。照準、シーカー方向、TD枠、レーダー距離目盛は残ります。

変わるのはHUDの表示量だけで、複合モードは解除されません。右側に残る`0–10`はレーダー距離目盛であり、高度目盛ではありません。

[索引に戻る · 機関砲複合モード](#hud-aim9-gun-composite) · [索引に戻る · AIM-9サイドワインダー・モード](#hud-aim9) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim7"></a>

## AIM-7スパロー・モード

ASE、操舵点、TD枠、DLZ、目標距離など、多くの表示は[AIM-9M](#hud-aim9)と共通です。ここでは違いを説明します。

<strong>本ゲームのAIM-7は、レーダーがSTT（単一目標追尾）の状態で発射する必要があります。</strong>セミアクティブ・レーダー誘導のため、発射後も命中まで照射を続けます。AIM-9のCage/Uncageや赤外線ロック音の確認はスパローには適用しません。

<nav class="term-cloud tac-editor-index" aria-label="索引 · AIM-7スパロー・モード">
  <a href="#hud-aim7-selected">図1 · AIM-7選択と12°照射円</a>
  <a href="#hud-aim7-stt">図2 · STTと発射支援表示</a>
  <a href="#hud-aim7-rtr">図3 · RTR内</a>
  <a href="#hud-aim7-flood">図4 · FLOOD照射モード</a>
</nav>

<a id="hud-aim7-selected"></a>

### 図1 · AIM-7選択と12°照射円

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-01-selected.png" alt="図1 · AIM-7選択と12°照射円" />
  <figcaption>図1 · AIM-7選択と12°照射円</figcaption>
</figure>

MR（中射程ミサイル）でAIM-7を選択すると、FLOOD時のレーダー照射範囲を表す**12°の円**が現れます。FLOODでは目標をこの円内に保ちます。

この大円はASEでもAIM-9の捜索範囲でもありません。AIM-7を選んだ時点で表示されるため、**円があるだけではFLOOD作動中とは限りません**。実際の表示は[図4](#hud-aim7-flood)を参照してください。

[索引に戻る · AIM-7スパロー・モード](#hud-aim7) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim7-stt"></a>

### 図2 · STTと発射支援表示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-02-stt.png" alt="図2 · STTと発射支援表示" />
  <figcaption>図2 · STTと発射支援表示</figcaption>
</figure>

STTで目標を追尾すると、AIM-9に似た距離・操舵表示が出ます。外側はFLOOD基準円、内側がASE、明るい点が操舵点です。

- [ASEと目標速度ベクトル](#hud-aim9-dlz-item-1)：AIM-9Mと同じ上面視で読みます。
- [操舵点](#hud-aim9-dlz-item-2)：ASE内に入れ、ミサイルの旋回とエネルギー消費を減らします。
- [TD枠](#hud-aim9-dlz-item-3)：レーダー追尾目標への視線方向です。
- [DLZ](#hud-aim9-dlz-item-4)：RMax、RTR、RMinの意味は共通ですが、現在のAIM-7の計算値を読みます。

ここではASEが拡大し、`IN RNG`と斜距離9.3海里の`R 9.3`が表示されています。**発射時にはSTTが必要**で、発射後も追尾と照射を続けます。

[索引に戻る · AIM-7スパロー・モード](#hud-aim7) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim7-rtr"></a>

### 図3 · RTR内

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-03-rtr.png" alt="図3 · RTR内" />
  <figcaption>図3 · RTR内</figcaption>
</figure>

TD枠の下に三角があり、`R 7.4`は7.4海里です。三角とASE点滅は[AIM-9のRTR説明](#hud-aim9-rtr)と同じく有利な条件を示し、命中保証ではありません。静止画では点滅は見えません。

AIM-7は依然として発射時のSTTと、その後の継続照射を必要とします。RTR内でも自律誘導になるわけではありません。

[索引に戻る · AIM-7スパロー・モード](#hud-aim7) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim7-flood"></a>

### 図4 · FLOOD照射モード

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-04-flood.png" alt="図4 · FLOOD照射モード" />
  <figcaption>図4 · FLOOD照射モード</figcaption>
</figure>

右下の`FLOOD`が実際の作動状態を示します。目標を12°円内に連続して保ち、AIM-7誘導に必要なレーダー反射波を供給します。

STTで発射したAIM-7の飛翔中にロックが失われた場合、FLOODで照射を継続できます。これは発射後の支援であり、**本ゲームで発射時にSTTが必要な点は変わりません**。

FLOODは自動的にSTTを確立せず、AIM-7を自律誘導化もしません。[自動捕捉のFLOOD説明](#hud-aacq-flood)も参照してください。

[索引に戻る · AIM-7スパロー・モード](#hud-aim7) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim120"></a>

## AIM-120 AMRAAMモード

ASE、操舵点、TD枠、DLZの読み方は[AIM-9](#hud-aim9)や[AIM-7](#hud-aim7)とほぼ共通です。ここでは本ゲームの目視発射と、RTR内での異なる目標枠シンボルを扱います。

<nav class="term-cloud tac-editor-index" aria-label="索引 · AIM-120 AMRAAMモード">
  <a href="#hud-aim120-visual">図1 · PDTなしの目視発射</a>
  <a href="#hud-aim120-pdt">図2 · PDTと射程表示</a>
  <a href="#hud-aim120-in-range">図3 · 射程内</a>
  <a href="#hud-aim120-rtr">図4 · RTR内の六芒星マーク</a>
</nav>

<a id="hud-aim120-visual"></a>

### 図1 · PDTなしの目視発射

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-01-visual.png" alt="図1 · PDTなしの目視発射" />
  <figcaption>図1 · PDTなしの目視発射</figcaption>
</figure>

**AIM-120はレーダーPDTなしでも発射できます。**HUDには`VISUAL`と**破線の12°円**が表示されます。目標が**10海里以内**にあることを確認し、円内に入れます。

この範囲内でも遠い目標には、現在位置だけを狙わず、移動を見越した見越し角を取ります。

破線円は目視モードの基準であり、ASEやAIM-7のFLOOD円ではありません。この目視モードにはAIM-7のSTT発射条件は適用されません。

[索引に戻る · AIM-120 AMRAAMモード](#hud-aim120) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim120-pdt"></a>

### 図2 · PDTと射程表示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-02-pdt.png" alt="図2 · PDTと射程表示" />
  <figcaption>図2 · PDTと射程表示</figcaption>
</figure>

PDTがあるとTD枠、ASE、操舵点、DLZが表示されます。`R 40.7`は斜距離40.7海里。ASEは小さく、目標は現在計算されている最大射程外です。

[ASEと目標ベクトル](#hud-aim9-dlz-item-1)、[操舵点](#hud-aim9-dlz-item-2)、[TD枠](#hud-aim9-dlz-item-3)、[RMax](#hud-aim9-dlz-item-4)、[RTR](#hud-aim9-dlz-item-5)、[RMin](#hud-aim9-dlz-item-6)を参照してください。意味は共通ですが、現在のAIM-120のDLZ値を使います。

図1の10海里条件はPDTなしの目視発射に限られます。PDTがある場合のAIM-120全般の射程上限ではありません。

[索引に戻る · AIM-120 AMRAAMモード](#hud-aim120) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim120-in-range"></a>

### 図3 · 射程内

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-03-in-range.png" alt="図3 · 射程内" />
  <figcaption>図3 · 射程内</figcaption>
</figure>

現在の発射領域内に目標が入り、ASEが拡大して`IN RNG`が表示されます。`R 27.6`は斜距離27.6海里です。

操舵点とDLZ・射程マークを合わせて判断します。`IN RNG`は命中保証ではありません。AIM-9のCage/Uncage状態や赤外線ロック音は、ここでの発射基準ではありません。

[索引に戻る · AIM-120 AMRAAMモード](#hud-aim120) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aim120-rtr"></a>

### 図4 · RTR内の六芒星マーク

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-04-rtr.png" alt="図4 · RTR内の六芒星マーク" />
  <figcaption>図4 · RTR内の六芒星マーク</figcaption>
</figure>

**目標がRTR内に入るとTD枠の下に6つの角を持つマークが表示されます**。図では六芒星です。AIM-9とAIM-7の三角とは異なります。

意味は[RTRの説明](#hud-aim9-dlz-item-5)を参照してください。有利な条件を示しますが命中保証ではなく、ASE、DLZ、最小射程の確認は必要です。

`R 28.8`は28.8海里です。RTRは現在の条件で変化するため、画像にある距離は固定のしきい値ではありません。

[索引に戻る · AIM-120 AMRAAMモード](#hud-aim120) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-auto-acquisition"></a>

## レーダー自動捕捉モード

レーダーカーソルで手動指定せず、捜索範囲内の目標を素早くロックするモードです。SS、VS、BSTの自動ロック上限は10海里（NM）、LR BSTは40 NMです。

<nav class="term-cloud tac-editor-index" aria-label="索引 · レーダー自動捕捉モード">
  <a href="#hud-aacq-ss">SS — スーパーサーチ</a>
  <a href="#hud-aacq-vs">VS — 垂直走査</a>
  <a href="#hud-aacq-bst">BST — ボアサイト</a>
  <a href="#hud-aacq-lr-bst">LR BST — 長距離ボアサイト</a>
  <a href="#hud-aacq-flood">FLOOD — 広域照射</a>
</nav>

<a id="hud-aacq-ss"></a>

### SS — スーパーサーチ

大円は20°の捜索範囲です。本ゲームではアンテナ仰角操作で上下それぞれ最大10°動かせます。目標を範囲内に入れると10 NMまで自動捕捉します。

3枚は中央、上方、下方に移動した円です。偏移させると円の一部がHUD外へ出ることがあります。

<div class="hud-scan-gallery">
  <figure>
    <img src="/assets/F-15C/HUD/ss-center.png" alt="SS — スーパーサーチ · 中央" loading="lazy">
    <figcaption>中央</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-up.png" alt="SS — スーパーサーチ · 上方へ10°移動" loading="lazy">
    <figcaption>上方へ10°移動</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-down.png" alt="SS — スーパーサーチ · 下方へ10°移動" loading="lazy">
    <figcaption>下方へ10°移動</figcaption>
  </figure>
</div>

[索引に戻る · レーダー自動捕捉モード](#hud-auto-acquisition) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aacq-vs"></a>

### VS — 垂直走査

VSは2本の走査線（two-bar）を使い、胴体基準線（FRL）の上方+5°から+55°まで、方位幅7.5°の範囲を走査します。

HUDの縦線は走査方向で、捜索範囲はHUDより上まで延びます。この縦長で狭い範囲に目標を入れると10 NMまで自動ロックします。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/vs.png" alt="VS — 垂直走査" loading="lazy">
  <figcaption>VS — 垂直走査</figcaption>
</figure>

[索引に戻る · レーダー自動捕捉モード](#hud-auto-acquisition) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aacq-bst"></a>

### BST — ボアサイト

レーダー軸線方向を捜索します。HUD中央の円に目標を入れると10 NMまで自動ロックします。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/bst.png" alt="BST — ボアサイト" loading="lazy">
  <figcaption>BST — ボアサイト</figcaption>
</figure>

[索引に戻る · レーダー自動捕捉モード](#hud-auto-acquisition) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aacq-lr-bst"></a>

### LR BST — 長距離ボアサイト

BSTと同様ですが、HUDの円が小さくなり、自動ロック上限が40 NMになります。小円内に目標を保つことでSS、VS、BSTより遠方で捕捉できます。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/lr-bst.png" alt="LR BST — 長距離ボアサイト" loading="lazy">
  <figcaption>LR BST — 長距離ボアサイト</figcaption>
</figure>

[索引に戻る · レーダー自動捕捉モード](#hud-auto-acquisition) · [ページ先頭に戻る](#hud-page-top)

<a id="hud-aacq-flood"></a>

### FLOOD — 広域照射

通常はセミアクティブ・レーダー誘導のAIM-7と使います。自動捕捉モードのようにSTTロックを確立せず、機体前方の範囲を照射します。

AIM-7飛翔中にSTTロックを失ったらFLOODに切り替え、目標をHUD照射円内に保ち、誘導用の反射波を供給します。

HUDには照射円と`FLOOD`が表示されます。切替後も照射を続ける必要があり、ミサイルが自律誘導になるわけではありません。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/flood.png" alt="FLOOD — 広域照射" loading="lazy">
  <figcaption>FLOOD — 広域照射</figcaption>
</figure>

[索引に戻る · レーダー自動捕捉モード](#hud-auto-acquisition) · [ページ先頭に戻る](#hud-page-top)
