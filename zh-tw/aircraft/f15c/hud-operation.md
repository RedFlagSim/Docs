<a id="hud-page-top"></a>

# F-15C HUD 操作

HUD 是 F-15C 最重要的飛行與武器顯示。它把姿態、導航、空速、高度、目標和武器資訊投射到飛行員正前方，讓飛行員在機動和交戰中減少低頭看儀表的時間。

章節索引：點選可跳轉到對應部分。

<nav class="term-cloud tac-editor-index" aria-label="HUD 章節索引">
  <a href="#hud-symbols-top">基本符號</a>
  <a href="#hud-gun">機砲模式</a>
  <a href="#hud-aim9">AIM-9 響尾蛇模式</a>
  <a href="#hud-aim7">AIM-7 麻雀模式</a>
  <a href="#hud-aim120">AIM-120 AMRAAM 模式</a>
  <a href="#hud-auto-acquisition">自動鎖定模式</a>
</nav>

<a id="hud-symbols-top"></a>

## 基本符號

許多 HUD 符號在不同模式中都會保留。

航向、空速、高度和迎角標尺上的三角指示符（caret）均用於指示對應參數的目前數值。

![圖 38. F-15C HUD 基本符號編號圖](/assets/F-15C/Manual/fig-38-hud-basic-symbology.png)

### 符號索引

點選編號可跳轉到對應的詳細說明。

<div class="term-cloud tac-editor-index">
  <a href="#hud-item-1">1 航向標尺</a>
  <a href="#hud-item-2">2 空速標尺</a>
  <a href="#hud-item-3">3 速度向量</a>
  <a href="#hud-item-4">4 迎角標尺</a>
  <a href="#hud-item-5">5 馬赫數與過載讀數</a>
  <a href="#hud-item-6">6 機砲十字</a>
  <a href="#hud-item-7">7 高度標尺</a>
  <a href="#hud-item-8">8 飛機基準符號</a>
  <a href="#hud-item-9">9 坡度轉向指示符</a>
  <a href="#hud-item-10">10 俯仰標尺</a>
  <a href="#hud-item-11">11 導航資料</a>
  <a href="#hud-item-12">12 地平線</a>
</div>

### 詳細說明

<a id="hud-item-1"></a>
#### 1. 航向標尺

頂部水平標尺顯示磁航向。兩位數字代表十度，例如 `35` 表示 350°，`00` 表示 000°；三角指示符在標尺上指向飛機目前的航向數值。

標尺下方向下延伸的竪線表示所選導航點的方向。本例中，該標記位於目前航向的右側，因此需要右轉才能朝導航點飛行。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-2"></a>
#### 2. 空速標尺

左側垂直標尺顯示指示空速，單位為節。三角指示符在標尺上指向目前的指示空速數值。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-3"></a>
#### 3. 速度向量

圓形飛行路徑標記表示飛機實際運動方向。它與飛機基準符號的相對位置可以反映機頭姿態與飛行路徑的差異，包括風或側滑造成的偏移。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-4"></a>
#### 4. 迎角標尺

空速標尺內側的標尺以迎角單位（AoA units）顯示迎角。三角指示符在標尺上指向目前的迎角數值；機頭方向與飛行路徑之間的夾角增大時，迎角也會升高。

標尺上最粗的刻度代表在速迎角（on-speed AoA）。著陸時，應讓目前迎角的三角指示符對齊這一刻度，以保持正確的著陸迎角。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-5"></a>
#### 5. 馬赫數與過載讀數

上方數值是目前馬赫數。下方兩個數值分別為目前過載和最大允許過載；在這種緊湊顯示格式中，`10` 表示 1.0 G，`87` 表示 8.7 G。

F-15C 的最大允許過載為 9 G，但系統會根據目前馬赫數和掛載情況重新計算最大允許過載。因此，HUD 顯示的是目前條件下的允許值，並非始終為 9 G。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-6"></a>
#### 6. 機砲十字

固定十字與 M61 機砲軸線對準，並在主武器開關打開時顯示。計算式機砲模式會在這個固定參考之外增加獨立的瞄准解算符號。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-7"></a>
#### 7. 高度標尺

正常導航時，右側垂直標尺顯示以英尺為單位的氣壓高度，三角指示符在標尺上指向目前的高度數值。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-8"></a>
#### 8. 飛機基準符號

W 形符號是固定的飛機基準線參考。把它與速度向量比較，可以直觀看出迎角和飛行路徑偏移。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-9"></a>
#### 9. 坡度轉向指示符

該符號為飛向所選導航點提供轉向指令。通過坡度使速度向量向指示符靠攏，並在兩者逐漸重合時減小坡度。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-10"></a>
#### 10. 俯仰標尺

俯仰梯以 5° 為間隔顯示飛機俯仰姿態，並隨坡度旋轉。正俯仰刻線位於地平線上方，負俯仰刻線位於下方。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-11"></a>
#### 11. 導航資料

右下角資料區依次顯示所選航路點與導航模式、導航源/距離，以及預計到達時間。圖中 `1 NAV`、`N 30.3` 和 `5 MIN` 分別表示航路點 1、剩餘 30.3 海里，以及預計約五分鐘到達。

[返回符號索引](#hud-symbols-top)

<a id="hud-item-12"></a>
#### 12. 地平線

地平線是 0° 俯仰參考。在外界地平線難以辨認時，它仍能提供姿態參考，並會隨俯仰變化相對飛機基準符號移動。

[返回符號索引](#hud-symbols-top) · [返回頂部](#hud-page-top)

<a id="hud-gun"></a>

## 機砲模式

機砲 HUD 的瞄准顯示取決於是否有雷達測距資訊。以下三張圖分別說明無雷達鎖定時的瞄准參考、有 STT 鎖定時的 GDS 准星，以及開炮後的 BATR 彈著點提示。

<nav class="term-cloud tac-editor-index" aria-label="機砲模式索引">
  <a href="#hud-gun-no-lock">圖 1 · 無雷達鎖定</a>
  <a href="#hud-gun-gds">圖 2 · GDS 准星</a>
  <a href="#hud-gun-batr">圖 3 · BATR 彈著點</a>
</nav>

<a id="hud-gun-no-lock"></a>

### 無雷達鎖定機砲

![機砲圖 1：無雷達鎖定時的瞄准參考](/assets/F-15C/HUD/gun-no-lock.png)

無雷達鎖定時，機砲瞄准點按固定 **2000 英尺**的距離計算，表示炮彈飛到該距離時的預計落點；此時並沒有雷達提供的實際目標距離。

F-15C 不像 F-16 或 F/A-18 那樣，在沒有雷達測距資訊時顯示機砲漏斗，而是使用這一固定計算距離的瞄准參考。

[返回機砲索引](#hud-gun) · [返回頂部](#hud-page-top)

<a id="hud-gun-gds"></a>

### 機砲指引瞄准（GDS）

選擇機砲後，只有雷達處於單目標追蹤（STT）狀態且目標在射程內，才顯示機砲指引瞄准（Gun Director Sight，GDS）准星。

![機砲圖 2：GDS 准星與目標資料，編號 1 至 7](/assets/F-15C/HUD/gun-gds.png)

<nav class="term-cloud tac-editor-index" aria-label="GDS 編號索引">
  <a href="#hud-gds-item-1">1. GDS 准星</a>
  <a href="#hud-gds-item-2">2. 目標指示框</a>
  <a href="#hud-gds-item-3">3. 機砲彈藥餘量</a>
  <a href="#hud-gds-item-4">4. 射程標記</a>
  <a href="#hud-gds-item-5">5. 目標接近率</a>
  <a href="#hud-gds-item-6">6. 雷達測距標尺</a>
  <a href="#hud-gds-item-7">7. 目標斜距</a>
</nav>

<a id="hud-gds-item-1"></a>

#### 1. GDS 准星

准星圓周上的每個刻度代表 **1000 英尺**。中心的小圓點是機砲的計算瞄准點。

射擊時，可讓中心小圓點穩定壓住目標；也可以沿目標升力向量的方向，讓瞄准點掃過目標的同時開炮。GDS 提供的是預測瞄准解，命中還取決於炮彈飛行期間目標運動是否發生變化。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-2"></a>

#### 2. 目標指示框

目標指示框（Target Designator Box，TD Box）標出雷達鎖定目標的視線方向（Line of Sight，LOS）。它表示目標目前所在的方向，不是機砲的提前瞄准點。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-3"></a>

#### 3. 機砲彈藥餘量

顯示目前剩餘的機砲炮彈數量。圖中 `950` 表示剩餘 950 發。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-4"></a>

#### 4. 射程標記

圖中准星圓周附近的亮點是射程標記，用於輔助判斷機砲射程。該標記會隨目前條件變化，並非固定不變的距離參考。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-5"></a>

#### 5. 目標接近率

顯示本機與目標之間距離的變化率，單位為節。正值表示雙方距離正在縮小，負值表示距離正在增大。圖中讀數為 `0`。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-6"></a>

#### 6. 雷達測距標尺

HUD 右側的雷達測距標尺用於讀取目標距離。頂部的 `10` 表示目前標尺的最大刻度為 **10 海里**，中間的 `5` 表示 5 海里。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-7"></a>

#### 7. 目標斜距

編號 7 指向的三個位置都顯示本機到目標的斜距，即兩者之間的直線距離：

- **准星圓周上的距離標記**：按每格 1000 英尺讀取，圖中估讀約為 3300 英尺。
- **雷達測距標尺上的指針**：在以海里為單位的標尺上指示目標距離。
- **右下方的數字讀數**：`R 0.6` 表示目標斜距為 0.6 海里。

讀圖時需區分准星上的英尺刻度與雷達標尺、數字讀數使用的海里單位。

[返回 GDS 索引](#hud-gun-gds) · [返回機砲索引](#hud-gun) · [返回頂部](#hud-page-top)

<a id="hud-gun-batr"></a>

### BATR 彈著點提示

![機砲圖 3：編號 1 為 BATR 三角標記，編號 2 為目標接近率](/assets/F-15C/HUD/gun-batr.png)

<nav class="term-cloud tac-editor-index" aria-label="BATR 編號索引">
  <a href="#hud-batr-item-1">1. BATR 三角標記</a>
  <a href="#hud-batr-item-2">2. 負接近率</a>
</nav>

<a id="hud-batr-item-1"></a>

#### 1. BATR 三角標記

BATR（Bullets at Target Range）表示炮彈到達目標距離時的位置。機砲發射後，當炮彈飛到目標的目前距離時，HUD 會用三角形標出相應的彈著位置。

GDS 准星是開炮時的預測瞄准參考：即使中心瞄准點壓住目標，只有目標在炮彈飛行期間的加速度沒有劇烈改變，才可能命中。BATR 則用於射後評估，顯示已經發射的炮彈到達目標距離時是否與目標重合。

如果 BATR 三角標記持續疊在目標上，可以據此判斷彈流正在命中目標；如果標記與目標分離，則說明炮彈在目標距離處從旁邊通過。

[返回 BATR 索引](#hud-gun-batr)

<a id="hud-batr-item-2"></a>

#### 2. 負接近率

圖中的 `-11` 是目標接近率，單位為節。負號表示目標正在遠離本機，雙方距離以約 11 節的速率增大。

[返回 BATR 索引](#hud-gun-batr) · [返回機砲索引](#hud-gun) · [返回頂部](#hud-page-top)

<a id="hud-aim9"></a>

## AIM-9 響尾蛇模式

以下按本遊戲的 HUD 顯示，依次說明尋標器狀態、雷達輔助發射提示，以及目標從射程外接近到最小射程以內時的變化。

判斷能否發射時，需要同時區分射程條件與尋標器鎖定狀態。ASE 放大或出現 `IN RNG` 並不等於尋標器已鎖定；還需確認尋標器指向目標，並聽到高頻鎖定音。

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 模式索引">
  <a href="#hud-aim9-caged">圖 1 · SM 與 Cage 模式</a>
  <a href="#hud-aim9-uncaged">圖 2 · Uncage 模式</a>
  <a href="#hud-aim9-dlz">圖 3 · PDT 與動態發射區（DLZ）</a>
  <a href="#hud-aim9-in-range">圖 4 · 進入射程，但尋標器仍處於 Cage</a>
  <a href="#hud-aim9-slaved">圖 5 · Uncage 後隨動到 PDT</a>
  <a href="#hud-aim9-rtr">圖 6 · 進入 RTR 與近距射程環</a>
  <a href="#hud-aim9-too-close">圖 7 · 小於最小射程：Break X</a>
  <a href="#hud-aim9-gun-composite">機砲合成模式</a>
</nav>

<a id="hud-aim9-caged"></a>

### 圖 1 · SM 與 Cage 模式

選擇近程飛彈（SM）後，HUD 顯示 AIM-9 的武器狀態和尋標器符號。尋標器默認處於 Cage（囚籠）模式，指向機頭附近。

![圖 1 · SM 與 Cage 模式](/assets/F-15C/HUD/aim9-01-caged.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 1 編號索引">
  <a href="#hud-aim9-caged-item-1">1. 武器狀態 S 2M</a>
  <a href="#hud-aim9-caged-item-2">2. 尋標器指向</a>
  <a href="#hud-aim9-caged-item-3">3. 尋標器搜尋範圍（暫未實現）</a>
</nav>

<a id="hud-aim9-caged-item-1"></a>

#### 1. 武器狀態 S 2M

左下角的 `S 2M` 表示目前選擇的武器與餘量：

- `S`：SM，即近程飛彈。
- `2`：剩餘 2 枚。
- `M`：目前型號為 AIM-9M。

[返回圖 1 索引](#hud-aim9-caged)

<a id="hud-aim9-caged-item-2"></a>

#### 2. 尋標器指向

小圓表示飛彈尋標器目前的指向。圖中尋標器仍處於 Cage 狀態，指向機頭附近，並沒有跟隨畫面中的目標。

[返回圖 1 索引](#hud-aim9-caged)

<a id="hud-aim9-caged-item-3"></a>

#### 3. 尋標器搜尋範圍（暫未實現）

外側大圓表示尋標器搜尋範圍。對應的搜尋功能目前暫未實現，不應把這個圓當作已經完成目標搜尋或鎖定的提示。

[返回圖 1 索引](#hud-aim9-caged) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-uncaged"></a>

### 圖 2 · Uncage 模式

解除囚籠後，尋標器進入 Uncage（非囚籠）模式。圖中小圓已經離開機頭附近，正在追蹤目標。

![圖 2 · Uncage 模式](/assets/F-15C/HUD/aim9-02-uncaged.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 2 編號索引">
  <a href="#hud-aim9-uncaged-item-1">1. U：Uncage 狀態</a>
  <a href="#hud-aim9-uncaged-item-2">2. 追蹤目標的尋標器指向</a>
</nav>

<a id="hud-aim9-uncaged-item-1"></a>

#### 1. U：Uncage 狀態

右下方的 `U` 表示尋標器已解除囚籠。`U` 只說明尋標器的工作狀態，本身並不等於鎖定確認。

[返回圖 2 索引](#hud-aim9-uncaged)

<a id="hud-aim9-uncaged-item-2"></a>

#### 2. 追蹤目標的尋標器指向

小圓表示正在追蹤目標的尋標器視線方向。發射前，應確認它指向預期目標，並聽到耳機中的高頻鎖定音。

[返回圖 2 索引](#hud-aim9-uncaged) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-dlz"></a>

### 圖 3 · PDT 與動態發射區（DLZ）

雷達獲得主要指定目標（Primary Designated Target，PDT）後，系統可根據目標資訊計算飛彈的動態發射區（Dynamic Launch Zone，DLZ），並顯示 ASE、轉向點、目標框和射程標記。圖中目標仍在最大射程之外。

![圖 3 · PDT 與動態發射區（DLZ）](/assets/F-15C/HUD/aim9-03-dlz.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 3 編號索引">
  <a href="#hud-aim9-dlz-item-1">1. ASE 與目標速度向量</a>
  <a href="#hud-aim9-dlz-item-2">2. 轉向點</a>
  <a href="#hud-aim9-dlz-item-3">3. 目標指示框（TD Box）</a>
  <a href="#hud-aim9-dlz-item-4">4. RMax：最大射程</a>
  <a href="#hud-aim9-dlz-item-5">5. RTR：不可逃逸射程</a>
  <a href="#hud-aim9-dlz-item-6">6. RMin：最小射程</a>
</nav>

<a id="hud-aim9-dlz-item-1"></a>

#### 1. ASE 與目標速度向量

ASE（Allowable Steering Error）是允許轉向誤差圓。目標位於最大射程之外時，ASE 處於縮小狀態。

從 ASE 圓周伸出的直線表示目標的速度向量，按俯視視角表達目標運動方向，不是目標在 HUD 畫面中上下移動的軌跡。

[返回圖 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-2"></a>

#### 2. 轉向點

亮點是轉向點。操縱飛機，用 ASE 圓套住轉向點，有助於讓飛彈在發射後以較少的轉彎追蹤目標，從而節省能量、改善命中條件。

轉向點提供的是發射方向參考，不是尋標器鎖定標記；圖中仍在最大射程外，不能僅因轉向點進入 ASE 就發射。

[返回圖 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-3"></a>

#### 3. 目標指示框（TD Box）

TD Box 標出雷達 PDT 的視線方向（LOS）。它表示雷達指定目標的位置，不代表 AIM-9 紅外尋標器已經鎖定該目標。

[返回圖 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-4"></a>

#### 4. RMax：最大射程

DLZ 上方的標記表示目前條件下計算出的最大射程。目標在 RMax 之外時，尚未進入計算發射範圍。

[返回圖 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-5"></a>

#### 5. RTR：不可逃逸射程

RTR（Range Turn and Run）表示按目標轉向並逃離的情況估算的射程，通常稱為不可逃逸射程。目標進入 RTR 後，發射條件更有利，但並不意味著必然命中。

[返回圖 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-6"></a>

#### 6. RMin：最小射程

DLZ 下方的標記表示最小射程。目標距離小於 RMin 時，不應發射飛彈；此時的 HUD 提示見[圖 7](#hud-aim9-too-close)。

[返回圖 3 索引](#hud-aim9-dlz) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-in-range"></a>

### 圖 4 · 進入射程，但尋標器仍處於 Cage

目標進入最大射程以內後，ASE 放大，HUD 出現 `IN RNG`。這表示射程條件已允許飛彈有機會命中，但不代表紅外尋標器已經鎖定目標。

![圖 4 · 進入射程，但尋標器仍處於 Cage](/assets/F-15C/HUD/aim9-04-in-range.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 4 編號索引">
  <a href="#hud-aim9-in-range-item-1">1. 放大的 ASE</a>
  <a href="#hud-aim9-in-range-item-2">2. 目標接近率與距離指針</a>
</nav>

<a id="hud-aim9-in-range-item-1"></a>

#### 1. 放大的 ASE

圖中 ASE 已放大，但尋標器小圓仍停在機頭附近，未指向左側 TD Box 中的目標。因此，這個狀態下仍不應發射。

必須讓尋標器指向目標，並確認耳機中出現高頻鎖定音，再結合射程條件判斷是否發射。僅有放大的 ASE 或 `IN RNG` 提示還不夠。

[返回圖 4 索引](#hud-aim9-in-range)

<a id="hud-aim9-in-range-item-2"></a>

#### 2. 目標接近率與距離指針

編號 2 指向雷達距離指針及其旁邊的接近率讀數。`709` 的單位為節，正值表示本機與目標之間的距離正在縮小；它不是尋標器鎖定提示。

[返回圖 4 索引](#hud-aim9-in-range) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-slaved"></a>

### 圖 5 · Uncage 後隨動到 PDT

已有雷達 PDT 時，解除尋標器囚籠，尋標器會隨動（slave）到該目標的視線方向（LOS）。

![圖 5 · Uncage 後隨動到 PDT](/assets/F-15C/HUD/aim9-05-slaved.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 5 編號索引">
  <a href="#hud-aim9-slaved-item-1">1. 隨動到目標 LOS 的尋標器</a>
</nav>

<a id="hud-aim9-slaved-item-1"></a>

#### 1. 隨動到目標 LOS 的尋標器

圖中尋標器小圓與目標框重合，右下方顯示 `U`。雷達在這裡提供目標方向，使尋標器轉向目標。

隨動到目標方向不等於已經完成紅外鎖定。仍需聽到尋標器的高頻鎖定音，並滿足射程條件後，才可發射。

[返回圖 5 索引](#hud-aim9-slaved) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-rtr"></a>

### 圖 6 · 進入 RTR 與近距射程環

目標進入 RTR 後，TD Box 下方出現三角提示，ASE 會閃爍。這些提示表示目前具備很好的發射條件；仍需保持尋標器鎖定，並注意 RMin 限制。

![圖 6 · 進入 RTR 與近距射程環](/assets/F-15C/HUD/aim9-06-rtr.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 6 編號索引">
  <a href="#hud-aim9-rtr-item-1">1. 近距射程環</a>
  <a href="#hud-aim9-rtr-item-2">2. TD Box 下方的三角提示</a>
</nav>

<a id="hud-aim9-rtr-item-1"></a>

#### 1. 近距射程環

目標距離進入 12000 英尺以內時，HUD 還會顯示一個圓形射程環，用於讀取近距離目標斜距。它與外側的 ASE 圓作用不同。

圖中的內側射程弧約為半圈，表示目標距離剛進入約 6000 英尺；右下方同時顯示 `R 1.0`。

[返回圖 6 索引](#hud-aim9-rtr)

<a id="hud-aim9-rtr-item-2"></a>

#### 2. TD Box 下方的三角提示

目標框下方的三角形表示目標已進入 RTR，並與閃爍的 ASE 一起提示有利的發射條件。靜態截圖無法表現 ASE 的閃爍效果。

[返回圖 6 索引](#hud-aim9-rtr) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-too-close"></a>

### 圖 7 · 小於最小射程：Break X

目標進入最小射程以內後，ASE 消失，取而代之的是閃爍的 Break X 提示。

![圖 7 · 小於最小射程：Break X](/assets/F-15C/HUD/aim9-07-break-x.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 圖 7 編號索引">
  <a href="#hud-aim9-too-close-item-1">1. Break X：距離過近</a>
</nav>

<a id="hud-aim9-too-close-item-1"></a>

#### 1. Break X：距離過近

圖中的大 X 是脫離提示（Break X），表示此時不應發射。距離過近時，飛彈可能來不及加速到有效速度；爆炸產生的碎片也可能波及本機的飛行路徑。

即使尋標器仍指向目標，或 TD Box 下方仍有三角提示，也不能忽略最小射程警告。應先拉開距離，再重新判斷發射條件。

[返回圖 7 索引](#hud-aim9-too-close) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-gun-composite"></a>

### 機砲合成模式

選中 SM（近程飛彈）時，操作 **Coolie Up（Coolie 開關向上）** 可進入機砲合成模式。在保留 SM 飛彈選擇的同時，也可以選擇使用機砲，HUD 會合成顯示飛彈與機砲相關符號。

<nav class="term-cloud tac-editor-index" aria-label="機砲合成模式圖片索引">
  <a href="#hud-aim9-gun-composite-normal">圖 1 · 正常 HUD 顯示</a>
  <a href="#hud-aim9-gun-composite-rej">圖 2 · HUD REJ 顯示</a>
</nav>

<a id="hud-aim9-gun-composite-normal"></a>

#### 圖 1 · 正常 HUD 顯示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite.png" alt="SM 機砲合成模式：保留航向、空速和高度標尺，同時顯示機砲准星與飛彈尋標器指向" />
  <figcaption>機砲合成模式：正常 HUD 顯示</figcaption>
</figure>

圖中同時顯示機砲 GDS 准星、目標指示框和飛彈尋標器指向。左下方的 `S2M950` 合併顯示了 SM 飛彈狀態與機砲余彈：`S2M` 表示 2 枚 AIM-9M，`950` 表示機砲剩餘 950 發炮彈。

機砲准星的讀法與使用方式可參考[機砲 GDS 說明](#hud-gun-gds)，尋標器小圓的讀法可參考[SM 尋標器指向](#hud-aim9-uncaged-item-2)。

[返回機砲合成模式索引](#hud-aim9-gun-composite) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim9-gun-composite-rej"></a>

#### 圖 2 · HUD REJ 顯示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite-rej.png" alt="HUD REJ 下的機砲合成模式：航向、空速和高度三個標尺隱藏，機砲准星與目標符號仍顯示" />
  <figcaption>HUD REJ：隱藏三個飛行標尺後的機砲合成顯示</figcaption>
</figure>

圖 2 是同一機砲合成模式在 HUD REJ 下的顯示。**航向、空速和高度三個標尺被隱藏**，以減少畫面遮擋；機砲准星、尋標器指向、目標框和雷達測距標尺仍保留。

這裡改變的是 HUD 的顯示簡化程度，並沒有退出機砲合成模式。右側仍可見的 `0–10` 標尺是雷達測距標尺，不是高度標尺。

[返回機砲合成模式索引](#hud-aim9-gun-composite) · [返回 AIM-9 索引](#hud-aim9) · [返回頂部](#hud-page-top)

<a id="hud-aim7"></a>

## AIM-7 麻雀模式

AIM-7 的大部分 HUD 符號與 [AIM-9M 的介紹](#hud-aim9)相同，包括 ASE 圓、轉向點、目標指示框（TD Box）、動態發射區（DLZ）和目標距離讀數。本節重點說明 AIM-7 的不同之處。

**在本遊戲中，AIM-7 必須在雷達 STT（Single Target Track，單目標追蹤）模式下發射。** AIM-7 使用半主動雷達制導，發射後仍需由本機雷達持續照射目標，直到飛彈命中。不能套用 AIM-9 的尋標器 Cage / Uncage 和紅外鎖定音判斷方式。

<nav class="term-cloud tac-editor-index" aria-label="AIM-7 模式索引">
  <a href="#hud-aim7-selected">圖 1 · 選擇 AIM-7</a>
  <a href="#hud-aim7-stt">圖 2 · STT 與發射提示</a>
  <a href="#hud-aim7-rtr">圖 3 · 進入 RTR</a>
  <a href="#hud-aim7-flood">圖 4 · FLOOD 照射</a>
</nav>

<a id="hud-aim7-selected"></a>

### 圖 1 · 選擇 AIM-7 與 12° 照射圓

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-01-selected.png" alt="選擇 AIM-7 後顯示的 12° FLOOD 照射參考圓，尚無 FLOOD 模式提示" />
  <figcaption>選擇 AIM-7：外側大圓為 FLOOD 照射區域參考</figcaption>
</figure>

選擇 MR（中程飛彈）並選中 AIM-7 後，HUD 會顯示一個 **12° 圓環**，代表雷達在 FLOOD 模式下的雷達波照射區域。在 FLOOD 模式下，需要用這個圓環套住目標。

這個大圓不是 ASE 圓，也不是 AIM-9 的尋標器搜尋範圍。選擇 AIM-7 時就會出現該參考圓，因此，**看到圓環並不代表雷達已經進入 FLOOD 模式**；實際 FLOOD 狀態見[圖 4](#hud-aim7-flood)。

[返回 AIM-7 索引](#hud-aim7) · [返回頂部](#hud-page-top)

<a id="hud-aim7-stt"></a>

### 圖 2 · STT 與發射提示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-02-stt.png" alt="AIM-7 STT 模式：外側 FLOOD 參考圓、內側 ASE 圓、轉向點、TD Box 與 DLZ" />
  <figcaption>STT 下的發射提示：IN RNG，目標距離 9.3 海里</figcaption>
</figure>

雷達進入 STT 並追蹤目標後，HUD 顯示與 AIM-9 類似的射程和轉向提示。圖中外側大圓仍是 FLOOD 照射參考，內側較小的圓才是 ASE 圓，亮點是轉向點。

- [ASE 圓與目標速度向量](#hud-aim9-dlz-item-1)：讀法參考 AIM-9M。ASE 上伸出的直線按俯視視角表示目標速度向量。
- [轉向點](#hud-aim9-dlz-item-2)：用 ASE 圓套住轉向點，以減少飛彈發射後的轉彎，節省飛彈能量。
- [TD Box](#hud-aim9-dlz-item-3)：表示雷達追蹤目標的視線方向。
- [DLZ 射程標記](#hud-aim9-dlz-item-4)：RMax、RTR 和 RMin 的讀法與 AIM-9 部分相同，應讀取目前 AIM-7 的計算值。

圖中 ASE 已放大，顯示 `IN RNG`，`R 9.3` 表示目標斜距為 9.3 海里。這些符號用於判斷射程和轉向條件；**發射時仍必須保持雷達處於 STT 模式**，發射後繼續保持追蹤和照射。

[返回 AIM-7 索引](#hud-aim7) · [返回頂部](#hud-page-top)

<a id="hud-aim7-rtr"></a>

### 圖 3 · 進入 RTR

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-03-rtr.png" alt="AIM-7 目標進入 RTR，TD Box 下方出現三角提示，目標距離 7.4 海里" />
  <figcaption>進入 RTR：目標框下方出現三角提示</figcaption>
</figure>

圖中目標框下方出現三角提示，目標距離為 `R 7.4`，即 7.4 海里。進入 RTR 後的三角提示和 ASE 閃爍含義可參考 [AIM-9 的 RTR 說明](#hud-aim9-rtr)：它們表示目前發射條件更有利，並不保證必然命中。靜態圖片無法展示閃爍效果。

與 AIM-9 相比，這裡最重要的區別仍是制導支持：AIM-7 必須在 STT 下發射，且不能在發射後停止雷達照射。即使目標已經進入 RTR，也不意味著飛彈可以自主制導。

[返回 AIM-7 索引](#hud-aim7) · [返回頂部](#hud-page-top)

<a id="hud-aim7-flood"></a>

### 圖 4 · FLOOD 照射模式

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-04-flood.png" alt="AIM-7 FLOOD 模式：HUD 顯示 FLOOD，目標保持在 12° 照射圓內" />
  <figcaption>FLOOD 模式：用 12° 照射圓持續套住目標</figcaption>
</figure>

最後一張圖顯示實際的 FLOOD 模式，HUD 右下方有 `FLOOD` 提示。此時應操縱飛機，讓目標持續保持在 12° 圓環內，使雷達波照射目標，為 AIM-7 提供目標反射的制導回波。

如果 AIM-7 已在 STT 下發射，但飛彈飛行途中 STT 鎖定丟失，可以切換到 FLOOD 繼續提供照射支持。這裡的 FLOOD 用於說明發射後的丟鎖支持，**不改變本遊戲中 AIM-7 必須在 STT 下發射的要求**。

FLOOD 不會自動建立 STT 追蹤，也不會讓 AIM-7 變成自主制導飛彈。操作方式還可參考[自動鎖定模式中的 FLOOD 說明](#hud-aacq-flood)。

[返回 AIM-7 索引](#hud-aim7) · [返回頂部](#hud-page-top)

<a id="hud-aim120"></a>

## AIM-120 AMRAAM 模式

AMRAAM 的 ASE、轉向點、TD Box 和 DLZ 讀法與前面的 [AIM-9](#hud-aim9) 和 [AIM-7](#hud-aim7) 大致相同。本節說明本遊戲中 AIM-120 的目視發射方式，以及進入 RTR 後不同的目標框提示。

<nav class="term-cloud tac-editor-index" aria-label="AMRAAM 模式索引">
  <a href="#hud-aim120-visual">圖 1 · 無 PDT 目視發射</a>
  <a href="#hud-aim120-pdt">圖 2 · PDT 與射程提示</a>
  <a href="#hud-aim120-in-range">圖 3 · 進入射程</a>
  <a href="#hud-aim120-rtr">圖 4 · RTR 六角提示</a>
</nav>

<a id="hud-aim120-visual"></a>

### 圖 1 · 無 PDT 時的目視發射

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-01-visual.png" alt="AIM-120 無 PDT 目視模式：虛線 12° 圓環與 VISUAL 提示" />
  <figcaption>VISUAL 模式：虛線 12° 圓環為目視發射參考</figcaption>
</figure>

**沒有雷達 PDT 時，也可以發射 AIM-120。** 圖中 HUD 顯示 `VISUAL`，並用虛線繪出一個 **12° 圓環**。目視發射時，應確認目標在 **10 海里以內**，並用這個圓環套住目標。

在這一距離範圍內，如果目標距離較遠，還需要考慮目標運動的提前量，不能只按目標目前的位置瞄准。

這個虛線圓是 AIM-120 目視模式的參考，不是 ASE 圓，也不是 AIM-7 的 FLOOD 照射圓。不要把 AIM-7 必須在 STT 下發射的要求套用到這裡的目視模式。

[返回 AMRAAM 索引](#hud-aim120) · [返回頂部](#hud-page-top)

<a id="hud-aim120-pdt"></a>

### 圖 2 · PDT 與射程提示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-02-pdt.png" alt="AIM-120 有 PDT 時的縮小 ASE、轉向點、TD Box 和 DLZ，目標距離 40.7 海里" />
  <figcaption>有 PDT 的發射前顯示：目標仍在最大射程外</figcaption>
</figure>

雷達有 PDT 後，HUD 顯示目標指示框、ASE、轉向點和 DLZ。圖中 `R 40.7` 表示目標斜距為 40.7 海里，ASE 處於縮小狀態，目標尚未進入目前計算的最大射程。

共通符號可直接參考前面的說明：

- [ASE 與目標速度向量](#hud-aim9-dlz-item-1)：ASE 的大小變化和圓周上速度向量的讀法相同。
- [轉向點](#hud-aim9-dlz-item-2)：用 ASE 圓套住轉向點，改善發射方向。
- [TD Box](#hud-aim9-dlz-item-3)：標出雷達 PDT 的視線方向。
- [RMax](#hud-aim9-dlz-item-4)、[RTR](#hud-aim9-dlz-item-5) 和 [RMin](#hud-aim9-dlz-item-6)：讀法相同，但應讀取目前 AIM-120 的 DLZ 計算值。

圖一的 10 海里條件針對無 PDT 的目視發射，並不是有 PDT 時 AIM-120 的統一射程上限。

[返回 AMRAAM 索引](#hud-aim120) · [返回頂部](#hud-page-top)

<a id="hud-aim120-in-range"></a>

### 圖 3 · 進入射程

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-03-in-range.png" alt="AIM-120 進入射程：ASE 放大，HUD 顯示 IN RNG 和 R 27.6" />
  <figcaption>進入目前發射範圍：IN RNG，目標距離 27.6 海里</figcaption>
</figure>

圖中目標進入目前計算的發射範圍，ASE 放大，HUD 顯示 `IN RNG`；`R 27.6` 表示目標斜距為 27.6 海里。

ASE 和 DLZ 的判斷方式與前面的飛彈相同：結合轉向點和目前射程標記評估發射條件，不能把 `IN RNG` 理解為必然命中。這裡也不使用 AIM-9 的 Cage / Uncage 和紅外鎖定音作為發射判斷。

[返回 AMRAAM 索引](#hud-aim120) · [返回頂部](#hud-page-top)

<a id="hud-aim120-rtr"></a>

### 圖 4 · 進入 RTR 後的六角提示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-04-rtr.png" alt="AIM-120 進入 RTR 後，TD Box 下方顯示六角星狀提示符" />
  <figcaption>進入 RTR：TD Box 下方出現六角提示符</figcaption>
</figure>

**目標進入 RTR 後，TD Box 下方會出現六角提示符**，即圖中的六角星狀符號。這是 AIM-120 與前面 AIM-9、AIM-7 三角提示的區別。

RTR 的含義可參考[不可逃逸射程說明](#hud-aim9-dlz-item-5)。六角提示表示目前具備更有利的發射條件，並不保證命中；仍需結合 ASE、DLZ 和最小射程判斷。

圖中目標距離為 `R 28.8`，即 28.8 海里。RTR 會隨目前條件變化，不能把某一張圖中的距離當作固定閾值。

[返回 AMRAAM 索引](#hud-aim120) · [返回頂部](#hud-page-top)

<a id="hud-auto-acquisition"></a>

## 自動鎖定模式

雷達自動捕獲模式用於快速鎖定搜尋範圍內的目標，無需手動移動雷達光標進行指定。SS、VS 和 BST 的自動鎖定距離上限均為 10 海里，LR BST 則可自動鎖定最遠 40 海里內的目標。

<nav class="term-cloud tac-editor-index" aria-label="自動捕獲模式索引">
  <a href="#hud-aacq-ss">SS 超級搜尋</a>
  <a href="#hud-aacq-vs">VS 垂直掃描</a>
  <a href="#hud-aacq-bst">BST 孔徑模式</a>
  <a href="#hud-aacq-lr-bst">LR BST 遠距離孔徑模式</a>
  <a href="#hud-aacq-flood">FLOOD 泛指照射</a>
</nav>

<a id="hud-aacq-ss"></a>

### SS — Supersearch（超級搜尋）

HUD 上的大圓表示 20° 搜尋範圍。在本遊戲中，可使用雷達天線俯仰控制，使搜尋範圍向上或向下偏移最多 10°。將目標置於搜尋範圍內，雷達便可自動捕獲 10 海里內的目標。

下圖依次顯示居中、上移和下移時的 HUD 搜尋圓。偏移後，圓圈可能有一部分超出 HUD 顯示範圍。

<div class="hud-scan-gallery">
  <figure>
    <img src="/assets/F-15C/HUD/ss-center.png" alt="SS 超級搜尋：搜尋圓居中" loading="lazy">
    <figcaption>居中</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-up.png" alt="SS 超級搜尋：搜尋範圍向上偏移 10°" loading="lazy">
    <figcaption>向上偏移 10°</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-down.png" alt="SS 超級搜尋：搜尋範圍向下偏移 10°" loading="lazy">
    <figcaption>向下偏移 10°</figcaption>
  </figure>
</div>

[返回模式索引](#hud-auto-acquisition) · [返回頂部](#hud-page-top)

<a id="hud-aacq-vs"></a>

### VS — Vertical Scan（垂直掃描）

VS 使用兩條掃描線（two-bar），在機身基準線（FRL）上方 +5° 至 +55° 的範圍內進行垂直掃描，方位寬度為 7.5°。

HUD 上的垂直線表示掃描方向，實際搜尋範圍會延伸到 HUD 上方。讓目標進入這一狹長的掃描區域，雷達可自動鎖定 10 海里內的目標。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/vs.png" alt="VS 垂直掃描：HUD 上方向上的垂直掃描指示線" loading="lazy">
  <figcaption>VS 垂直掃描</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回頂部](#hud-page-top)

<a id="hud-aacq-bst"></a>

### BST — Boresight（孔徑模式）

BST 沿雷達孔徑軸線搜尋。將目標置於 HUD 的孔徑圓內，雷達可自動鎖定 10 海里內的目標。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/bst.png" alt="BST 孔徑模式：HUD 中央的孔徑搜尋圓" loading="lazy">
  <figcaption>BST 孔徑模式</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回頂部](#hud-page-top)

<a id="hud-aacq-lr-bst"></a>

### LR BST — Long-Range Boresight（遠距離孔徑模式）

LR BST 的使用方式與 BST 類似，但 HUD 搜尋圓更小，自動鎖定距離上限增加到 40 海里。將目標保持在小圓內，便可在比 SS、VS 和 BST 更遠的距離上自動捕獲目標。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/lr-bst.png" alt="LR BST 遠距離孔徑模式：HUD 中央較小的搜尋圓" loading="lazy">
  <figcaption>LR BST 遠距離孔徑模式</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回頂部](#hud-page-top)

<a id="hud-aacq-flood"></a>

### FLOOD — 泛指照射模式

FLOOD 通常配合 AIM-7 半主動雷達制導飛彈使用。它向機頭前方的區域提供雷達照射，不會像上述自動捕獲模式那樣建立 STT 鎖定。

如果 AIM-7 已在飛行途中，而雷達的 STT 鎖定丟失，可以切換到 FLOOD，繼續照射目標，為飛彈提供目標反射的雷達回波。此時需要操縱飛機，讓目標持續保持在 HUD 的照射圓內，以維持制導支持。

HUD 顯示照射圓和 `FLOOD` 提示。切換到該模式後仍需持續照射目標，並不代表飛彈已轉為自主制導。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/flood.png" alt="FLOOD 泛指照射模式：HUD 照射圓與 FLOOD 提示" loading="lazy">
  <figcaption>FLOOD 泛指照射</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回頂部](#hud-page-top)
