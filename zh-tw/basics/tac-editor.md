<a id="tac-editor-top"></a>

# Tac 編輯器

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Tac 編輯器用於建立自訂任務、組織飛行小隊、放置單位和規劃航路。文件分為七個部分：先透過編號總覽認識介面，再逐步說明各項編輯操作。

**章節導覽**

- [第一部分：介面總覽](#part-1)
- [第二部分：Package 與 Flight](#part-2)
- [第三部分：飛機設定](#part-3)
- [第四部分：飛行計畫](#part-4)
- [第五部分：地圖物件](#part-5)
- [第六部分：任務設定](#part-6)
- [第七部分：儲存與試飛](#part-7)

<a id="part-1"></a>

## 第一部分：介面總覽

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="Tac 編輯器介面總覽，標註編號 1–11">
</a>

點擊圖片可查看原始解析度大圖。點擊下方編號可跳至對應說明。

<a id="ui-terms-top"></a>

### UI 編號

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight（飛行小隊）</a>
  <a href="#item-2">2 Bullseye（牛眼）</a>
  <a href="#item-3">3 Package（任務包）</a>
  <a href="#item-4">4 額外的非玩家單位</a>
  <a href="#item-5">5 Inspector（資訊面板）</a>
  <a href="#item-6">6 比例尺</a>
  <a href="#item-7">7 地圖工具列</a>
  <a href="#item-8">8 飛行小隊的飛行計畫航路</a>
  <a href="#item-9">9 當地時間與 Zulu 時間</a>
  <a href="#item-10">10 Geo Fence（地理圍欄）</a>
  <a href="#item-11">11 編輯器工具列</a>
</div>

<a id="item-1"></a>

### 1. Flight（飛行小隊）

**Flight** 是一個飛行小隊，最多包含 **4 架飛機**。頂部的每張卡片代表一個小隊，卡片內的飛機圖示表示小隊成員。選取卡片後，可查看小隊資訊並設定其中的飛機。

[繼續閱讀 Flight](#part-2-flight)

[返回編號索引](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye（牛眼）

<strong>Bullseye（牛眼）</strong>是回報方位與距離時使用的共用地理參考點。地圖上的黃色同心圓標示它的位置。

地圖上的距離環以 Bullseye 為圓心，相鄰同心圓環的半徑相差 **20 海里（20 NM）**。

[返回編號索引](#ui-terms-top)

<a id="item-3"></a>

### 3. Package（任務包）

<strong>Package（任務包）</strong>用於組織同一陣營的飛行小隊。頂部藍色與紅色長條分別包含各自任務包內的 Flight。選取任務包，可查看及管理其中的小隊。

[繼續閱讀 Package](#part-2-package)

[返回編號索引](#ui-terms-top)

<a id="item-4"></a>

### 4. 額外的非玩家單位

這些是 Package/Flight 結構之外、由 AI 控制的額外單位。圖中包含一架獨立飛機與一個地對空飛彈單位。透過編輯器工具列中的 **NP Unit** 管理這些單位。

[查看詳細說明: NP Unit](#part-5-np-unit-list)

[返回編號索引](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector（資訊面板）

右側面板顯示目前選取物件的詳細資訊與可用操作。截圖中顯示任務總資訊，包括任務名稱、場景與難度。

**Scenery** 目前不支援選擇。未來版本提供多個區域後，才能在這裡選擇地圖區域。

**連點地圖空白處兩下**，即可讓 Inspector 返回任務總資訊。

**依物件查看 Inspector**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[返回編號索引](#ui-terms-top)

<a id="item-6"></a>

### 6. 比例尺

比例尺表示目前縮放倍率下，標尺長度對應的實際距離。**NM** 表示海里，圖中為 **16.66 NM**。可用它估算地圖上的距離。

[返回編號索引](#ui-terms-top)

<a id="item-7"></a>

### 7. 地圖工具列

左下方地圖工具列由左至右有四個按鈕：

- **移動**（四向箭頭）：按住後可移動選取的地圖元素。
- **放大**（帶 + 的放大鏡）：放大地圖。
- **縮小**（帶 − 的放大鏡）：顯示更大範圍的地圖。
- **Home**（房屋圖示）：關閉編輯器並返回主介面。

::: tip 移動地圖元素
1. 先選取要移動的單位或元素。
2. 用**左手按住「移動」按鈕**。
3. 持續按住，同時用**右手在地圖上拖曳**，調整選取元素的位置。
:::

[返回編號索引](#ui-terms-top)

<a id="item-8"></a>

### 8. 飛行小隊的飛行計畫航路

連接各航點的線條表示飛行小隊的計畫航路。選取小隊後，可查看其飛行計畫並編輯航點。此航路屬於對應 Flight，用於小隊導航。

[查看詳細說明](#part-4)

[返回編號索引](#ui-terms-top)

<a id="item-9"></a>

### 9. 當地時間與 Zulu 時間

底部顯示任務時間：前方是**當地時間**，方括號內帶 **Z** 的是 **Zulu 時間（UTC）**。圖中的 **16:00:00** 與 **23:00:00 Z** 表示同一個時刻。

[返回編號索引](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence（地理圍欄）

<strong>Geo Fence（地理圍欄）</strong>用於在地圖上標示戰術區域或邊界，可以是圓形或多邊形。圖中示例為圓形區域與標有 **MEZ** 的多邊形。透過編輯器工具列中的 **Geo Fence** 管理這些區域。

[查看詳細說明: Geo Fence](#part-5-geofence-list)

[返回編號索引](#ui-terms-top)

<a id="item-11"></a>

### 11. 編輯器工具列

任務總資訊面板中有六個按鈕。以下依照截圖順序分別說明：先上排由左至右，再下排由左至右。

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time（天氣與時間）</a>
  <a href="#item-11-2">11.2 File（檔案）</a>
  <a href="#item-11-3">11.3 Config（設定）</a>
  <a href="#item-11-4">11.4 Geo Fence（地理圍欄）</a>
  <a href="#item-11-5">11.5 NP Unit（非玩家單位）</a>
  <a href="#item-11-6">11.6 Go Fly（開始飛行）</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time（天氣與時間）

開啟任務天氣與時間設定，調整任務的環境條件與時刻。

[返回編號索引](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File（檔案）

開啟任務檔案選單，可建立新任務、儲存目前任務、載入已儲存的任務，或刪除已儲存的任務。

[返回編號索引](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config（設定）

開啟任務設定與限制規則。設定是否允許修改掛載、塗裝、天氣與時間，以及是否允許時間凍結；也可設定飛機與掛載限制。

[返回編號索引](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence（地理圍欄）

開啟地理圍欄清單，新增、選取與編輯戰術區域及邊界。

[查看詳細說明: Geo Fence](#part-5-geofence-list)

[返回編號索引](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit（非玩家單位）

開啟非玩家單位清單，新增與管理任務包之外的單位。選取單位後，在 Inspector 中編輯詳細資訊。

[查看詳細說明: NP Unit](#part-5-np-unit-list)

[返回編號索引](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly（開始飛行）

依照目前編輯器設定啟動任務。任務必須恰好有一架玩家控制的飛機，且玩家具有對應飛機模組的使用權限。啟動失敗時，依照畫面提示調整任務設定。

[返回編號索引](#ui-terms-top)

[返回頂部](#tac-editor-top)

<a id="part-2"></a>

## 第二部分：Package 與 Flight

先用 Package 組織飛行小隊，再進入 Flight 設定成員與任務參數。以下依這兩個層級說明 Inspector。

飛機的組織層級為 **Mission（任務）→ Package（任務包）→ Flight（飛行小隊）→ Slot（單架飛機）**。每個 Flight 屬於一個 Package，最多包含 **4 架飛機**。

<a id="part-2-package"></a>

### Package（任務包）

在地圖頂部選擇 Package 後，Inspector 顯示所含 Flight 與任務包時間。圖中任務包名稱為 blue1。

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>名稱與 Flight 清單</strong>：頂部顯示任務包名稱，點擊名稱即可重新命名。下方為 Flight1、Flight2、Flight3；成員編號對應各小隊內的飛機。
- <strong>＋</strong>：新增 Flight。選擇已有小隊卡片，可進入其 Flight Inspector。
- <strong>Take-off Time</strong>：任務包起飛時間，圖中為 23:03。
- <strong>Time on Target（TOT）</strong>：任務包目標抵達時間，圖中為 23:33。

</TacInspectorPanel>

[返回介面總覽](#item-3)

<a id="part-2-flight"></a>

### Flight（飛行小隊）

在 Package 中選擇 Flight 後，Inspector 顯示小隊成員與任務設定。圖中為 Flight1，包含 4 架飛機。

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>成員圖</strong>：顯示小隊飛機與編號。選擇成員後進入 Slot Inspector，設定單架飛機。
- <strong>Airbase</strong>：小隊基地，圖中選擇 NAS_Fallon。
- <strong>Mission Role</strong>：小隊任務職責，圖中選擇 CAP。
- <strong>Take-off Time / Time on Target</strong>：小隊起飛與目標抵達時間，圖中分別為 23:03 與 23:12。
- <strong>Station Time</strong>：巡邏任務中，在兩個目標類型航點之間巡邏的時長，以分鐘設定。
- <strong>Steer Points</strong>：進入小隊航點編輯；詳細航線與航點操作放在第四部分。
- <strong>Rebuild</strong>：重新計算 Flight 的 Time on Target（TOT，目標抵達時間）。
- <strong>Delete</strong>：位於 Rebuild 下方，用於刪除整個 Flight（飛行小隊）定義，而非只刪除一個飛機 Slot。

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### 巡邏範例：加油機與預警機

讓加油機或預警機在指定位置巡邏時：

1. 在計畫巡邏的位置設定兩個導航點，並將兩者都設為<strong>目標類型</strong>。
2. 在 Flight Inspector 中，將 <strong>Station Time</strong> 設為所需巡邏時長（分鐘）。
3. 飛機會在這兩個目標類型導航點之間巡邏，持續 Station Time 所設定的時長。

[返回介面總覽](#item-1)

[查看詳細說明: Slot](#part-3-slot) · [Steer Points](#part-4)

[返回頂部](#tac-editor-top)

<a id="part-3"></a>

## 第三部分：飛機設定

<a id="part-3-slot"></a>

### Slot（單架飛機）

Slot 代表 Flight 中的一架飛機。在 Flight 的成員圖中選擇飛機，可進入對應的單機 Inspector。

<TacInspectorPanel panel="slot" alt="Slot（單架飛機） Inspector" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>機型與成員編號</strong>：頂部顯示 1 號 F-15C；下方機型下拉選單用於選擇飛機型號。
- <strong>Loadout / Livery</strong>：進入掛載與塗裝設定。
- <strong>Spawn Type</strong>：選擇 Airborne（空中出生）或 Airbase（基地出生）；圖中選中 Airbase。
- <strong>Spawn Point ID</strong>：出生點選擇，圖中顯示 Auto。
- <strong>Initial State</strong>：進入飛機初始狀態設定。
- <strong>Delete</strong>：刪除目前飛機 Slot，而非整個 Flight 或 Package。

</TacInspectorPanel>

[返回介面總覽](#item-1)

[返回頂部](#tac-editor-top)

### 出生方式

Airbase 使用機場與停機位，是玩家編隊最穩妥的預設。Airborne 使用緯度、經度、高度、真航向及校準空速。Surface 適用於地面、水面與設施單位。

一般飛機 Slot 尚未實作 Surface 出生，請使用 Airbase 或 Airborne。空中出生航向以真北為 0，順時針增加；機場出生由停機位決定位置、姿態與初始地面狀態。

<a id="part-4"></a>

## 第四部分：飛行計畫

從 Flight Inspector 點擊 Steer Points，編輯目前小隊的導航點。截圖顯示編號為 3 的航點。

[查看詳細說明: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points（導航點面板）

<TacInspectorPanel panel="steerpoints" alt="Steer Points（導航點面板）" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>左右箭頭與編號</strong>：點擊左右箭頭切換目前航點，中間顯示選中的航點編號；圖中為 3。
- <strong>航點類型</strong>：下拉選單用於選擇航點類型，圖中為 Target（目標類型）。
- <strong>Elev (MSL)</strong>：航點的計畫海拔高度，以平均海平面（MSL）為基準，單位為英尺（FT）。圖中為 15000 FT，並非距地面高度。
- <strong>KCAS</strong>：航點的計畫校準空速，單位為節。圖中為 529 KCAS，並非地速或真空速。
- <strong>Time(Z) Over Steerpoint</strong>：計畫通過目前航點的 Zulu 時間（UTC）。左右兩欄分別為小時與分鐘，圖中為 23:15 Z，並非飛行時長。
- <strong>New</strong>：新增導航點。
- <strong>Delete</strong>：刪除目前選中的導航點，不會刪除整個 Flight。

</TacInspectorPanel>

為加油機或預警機規劃巡邏航線時，在巡邏位置設定兩個 Target 類型航點，再以 Flight 的 Station Time 設定兩點間的巡邏時長。需重新計算 Flight 的 TOT 時，在 Flight Inspector 點擊 Rebuild。

[巡邏設定範例](#flight-station-time-example) · [地圖元素移動方法](#item-7)

[返回頂部](#tac-editor-top)

### 航線與導航點

Flight 航線由導航點組成，可表示離場、集結、攔截、目標、返航或訓練航線。

- 從起飛機場或空中起始點開始。
- 導航點保留清楚間距。
- 明確標記戰術目標或進入攻擊的點。
- 除非訓練需要，避免低空航線穿越地形。
- 更改距離或巡航速度後重新檢查時間。

導航系統與 F-15C 顯示器使用任務航線資料，清楚的導航點可直接改善座艙操作。

<a id="part-5"></a>

## 第五部分：地圖物件

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Geo Fence 清單</a>
  <a href="#part-5-geofence-circle">圓形圍欄（Circle）</a>
  <a href="#part-5-geofence-polygon">多邊形圍欄（Polygon）</a>
  <a href="#part-5-np-unit-list">NP Unit（非玩家單位）清單</a>
</div>

<a id="bullseye-and-geofences"></a>

### Bullseye

<strong>Bullseye（牛眼）</strong>是回報方位與距離時使用的共用地理參考點。地圖上的黃色同心圓標示它的位置。

地圖上的距離環以 Bullseye 為圓心，相鄰同心圓環的半徑相差 **20 海里（20 NM）**。

### Geo Fence（地理圍欄）

從任務總資訊面板的 Geo Fence 按鈕進入清單，再選擇圍欄查看 Inspector。圓形與多邊形使用不同的幾何編輯控制項。

牛眼是戰術通話與航電共用的參考，應放在作戰區、靶場中心或已知地標附近。

地理圍欄是地圖覆蓋層與邊界，可標示訓練區、限制空域、威脅圈、目標區、進出走廊、禁火或禁飛區。即使不強制執行遊戲規則，也能使態勢更清楚。

<a id="part-5-geofence-list"></a>

#### Geo Fence 清單

<TacInspectorPanel panel="geofence-list" alt="Geo Fence 清單" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>＋</strong>：新增 Geo Fence。
- <strong>清單項目</strong>：圖中有名為 11 的圓形與名為 MEZ 的多邊形；前方圖示區分形狀。
- <strong>選擇項目</strong>：進入圍欄 Inspector，編輯用途、形狀、陣營與幾何參數。

</TacInspectorPanel>

[返回介面總覽](#item-10)

<a id="part-5-geofence-circle"></a>

#### 圓形圍欄（Circle）

<TacInspectorPanel panel="geofence-circle" alt="圓形圍欄（Circle） Inspector" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>名稱</strong>：頂部的 11 是圍欄名稱。
- <strong>Geo Fence Role / Shape</strong>：用途為 MEZ，形狀為 Circle；名稱、用途與形狀是不同資訊。
- <strong>Coalition</strong>：圍欄所屬陣營，圖中為 Red。
- <strong>Threat Radius</strong>：設定圓形區域的半徑。
- <strong>Delete</strong>：刪除目前圍欄。

</TacInspectorPanel>

[返回介面總覽](#item-10)

<a id="part-5-geofence-polygon"></a>

#### 多邊形圍欄（Polygon）

<TacInspectorPanel panel="geofence-polygon" alt="多邊形圍欄（Polygon） Inspector" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>名稱 / Geo Fence Role</strong>：頂部名稱為 MEZ，但用途選擇 ROZ；不要把名稱當作用途。
- <strong>Shape / Coalition</strong>：圖中分別為 Polygon 與 Red。
- <strong>左右箭頭與中間編號</strong>：選擇要編輯的頂點，圖中編號為 0。
- <strong>New Vertice</strong>：新增頂點。
- <strong>Rotate</strong>：旋轉多邊形。
- <strong>Delete Vertex / Delete</strong>：Delete Vertex 刪除選中頂點；底部 Delete 刪除整個圍欄。

調整地圖元素位置時，使用第一部分的「選中元素 → 左手按住移動 → 右手拖曳」操作。

</TacInspectorPanel>

[返回介面總覽](#item-10)

[查看詳細說明](#item-7)

<a id="part-5-np-unit-list"></a>

### NP Unit（非玩家單位）清單

從任務總資訊面板的 NP Unit 按鈕進入 Units 清單，管理 Package / Flight 之外的單位。

<TacInspectorPanel panel="np-unit-list" alt="NP Unit（非玩家單位）清單" open-label="點擊圖片查看原圖。">

**面板欄位與操作**

- <strong>＋</strong>：新增非玩家單位。
- <strong>清單項目</strong>：圖中有 9K37 Buk np 與 F-15C np，分別展示地對空飛彈單位與獨立飛機。
- <strong>選擇項目</strong>：開啟該單位 Inspector。

</TacInspectorPanel>

[返回介面總覽](#item-4)

[返回頂部](#tac-editor-top)

非玩家單位可獨立於 Package/Flight，用於 SAM 陣地、地面部隊、艦船、設施、靶場目標或獨立飛機。需要沿航線飛行或維持編隊的飛機宜使用 Package 的 Flight；靜態或戰術地圖物件使用非玩家單位。

<a id="part-6"></a>

## 第六部分：任務設定

在地圖空白處按兩下，開啟任務總資訊面板。

- [Weather / Time](#item-11-1)：設定任務的天氣與時間。
- [Config](#item-11-3)：設定任務規則、限制與權限。

[返回頂部](#tac-editor-top)

### 任務結構

- Mission：名稱、難度、場景、天氣／時間、藍紅機場、牛眼、限制與全域選項。
- Package：陣營層級任務群，包含起飛與到達目標時間參考。
- Flight：群內編隊，具有呼號、陣營、機場、角色、航線、AI 行為與飛機 Slot。
- Slot：一架飛機，玩家飛機也是 Slot。
- Steerpoints：導航與時間規劃使用的航點。
- GeoFence：戰術邊界、訓練區、威脅區或參考覆蓋層。
- 非玩家單位：不屬於 Package 的地面、水面、設施或獨立空中單位。

這些元素儲存為任務草稿。按 Go Fly 後，先複製成執行階段任務快照，再載入 World 場景。

### 任務設定

任務層級設定決定環境與出發前可修改的內容：名稱顯示在編輯器與清單；Scenery 是地形與機場資料庫背景，在 Inspector 中唯讀；天氣／時間在 World 啟動時套用；藍紅機場是新增 Flight/Slot 的預設；Bullseye 是航電共用參考；配置權限決定能否修改掛載、塗裝或天氣。

請先確認場景並設定機場，後續編隊機場與自動產生的航點等預設均依賴它們。

### 任務限制

限制決定可用飛機與掛載，包含飛機世代／年代，以及武器類型或導引方式：紅外線、半主動雷達、主動雷達、被動雷達與電視導引。

以限制聚焦訓練：純機砲近戰應禁用飛彈；超視距課程應限定預期飛機與武器。

<a id="part-7"></a>

## 第七部分：儲存與試飛

先確認 Flight、飛機 Slot 與航線，再儲存並試飛。

- [File](#item-11-2)：儲存任務或載入已有任務。
- [Go Fly](#item-11-6)：啟動目前任務，檢查配置是否符合預期。

[返回頂部](#tac-editor-top)


### 建議流程

1. 確認場景與藍紅預設機場。
2. 設定名稱、技能等級、天氣、時間、牛眼與全域選項。
3. 建立藍紅 Package。
4. 加入 Flight 並分配角色。
5. 加入 Slot，選擇機型、出生方式、塗裝、燃油與掛載。
6. 建立航點航線。
7. 加入圍欄與非玩家單位。
8. 檢查限制與玩家存取要求。
9. 儲存並用 Go Fly 測試。

以小步驟迭代；只有一個玩家編隊且可成功啟動的任務，比大量未測單位的場景更容易排錯。

### 儲存、載入與 Go Fly

儲存／載入可保留重用的任務草稿。更改機型、出生、航線時間或限制等重大項目後應測試。

Go Fly 走統一啟動流程，載入 World 前檢查：任務資料存在、恰有一架可辨識的玩家飛機、玩家可使用該模組、可建立快照，以及所選功能、變體與非預設塗裝包均獲允許。

若啟動失敗，先簡化為一架玩家飛機、機場出生、預設掛載與塗裝，再逐步增加複雜度。

### 實用檢查單

- 任務名稱與場景清楚。
- 藍紅機場有效。
- 牛眼靠近戰術區。
- 恰有一個玩家 Slot。
- 玩家採用 Airbase 或 Airborne 出生。
- 每個 Flight 具有呼號、陣營、角色與航線。
- 掛載與塗裝符合權限。
- 圍欄與目標區清楚可辨。
- 限制符合訓練目的。
- 至少用 Go Fly 測試一次。
