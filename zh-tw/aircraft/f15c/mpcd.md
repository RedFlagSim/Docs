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

多功能彩色顯示器（MPCD）目前實作兩個頁面：<strong>SIT（態勢感知顯示器）</strong>和 <strong>AA（空對空武器頁面）</strong>。<strong>預設顯示 SIT 頁面。</strong>

SIT 彙整任務資訊、資料鏈報告和本機雷達取得的追蹤；AA 用於查看飛機掛載、選取的掛架、機砲彈藥和反制措施數量。

<a id="mpcd-index"></a>

## 頁面索引

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 SIT 顯示與符號</a>
  <a href="#sit-mission">2 任務資訊與顯示控制</a>
  <a href="#sit-modes">3 游標控制與顯示模式</a>
  <a href="#sit-friendly">4 友機與牛眼</a>
  <a href="#sit-workflow">5 SIT 與 VSD 配合使用</a>
  <a href="#mpcd-aa">6 AA 空對空武器頁面</a>
</div>

點擊顯示器截圖可查看原始解析度大圖。各處編號說明均對應目前圖片中的標註。

<a id="mpcd-sit"></a>

## SIT 顯示與符號

SIT 以俯視方式顯示戰術態勢，包括飛機、飛行計畫航點、地理圍欄和距離參考。

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="SIT 顯示總覽，標註編號 1–13" /></a>
  <figcaption>SIT 顯示總覽。此例中的目標截獲門正在跟隨 VSD 游標。</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### 符號編號

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 Zulu 時間</a>
  <a href="#sit-item-2">2 羅盤</a>
  <a href="#sit-item-3">3 資料鏈資訊</a>
  <a href="#sit-item-4">4 半量程距離環</a>
  <a href="#sit-item-5">5 武器資訊</a>
  <a href="#sit-item-6">6 地理圍欄</a>
  <a href="#sit-item-7">7 顯示距離</a>
  <a href="#sit-item-8">8 游標相對本機的座標</a>
  <a href="#sit-item-9">9 SAM 攻擊範圍</a>
  <a href="#sit-item-10">10 飛行計畫航點</a>
  <a href="#sit-item-11">11 目標截獲門</a>
  <a href="#sit-item-12">12 反制措施數量</a>
  <a href="#sit-item-13">13 游標相對牛眼的座標</a>
</div>

<a id="sit-item-1"></a>

### 1. Zulu 時間

左上角顯示 Zulu 時間（UTC）。圖中的 `23:00:51Z` 表示 Zulu 時間 23 時 00 分 51 秒。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. 羅盤

羅盤提供本機周圍的方位參考，可結合方向刻度讀取目標方位。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. 資料鏈資訊

紅色符號是一隊由資料鏈報告的敵機。符號使用<strong>虛線輪廓</strong>，表示這些資訊來自資料鏈。從資料鏈報告到關聯雷達追蹤的過程，見 [SIT 與 VSD 配合使用](#sit-workflow)。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. 半量程距離環

白色內圓表示[編號 7](#sit-item-7) 所示顯示距離的一半。此中心顯示視圖的距離為 `80` 海里，因此內圓表示距本機 40 海里。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. 武器資訊

左下角集中顯示武器資訊。[AA 頁面](#mpcd-aa)進一步按掛架位置顯示對應的掛載情況。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. 地理圍欄

虛線多邊形是任務中設定的地理圍欄（Geofence），用於將目前態勢與[任務編輯器](#sit-mission)中定義的區域對應起來。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. 顯示距離

在此中心顯示視圖中，右上角的 `80` 表示<strong>從本機到羅盤頂部的距離為 80 海里</strong>。切換到 [Decenter 模式](#sit-decenter)後，本機在畫面中的位置會改變，具體距離參考見下方範例。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. 游標相對本機的座標

青色讀數表示游標相對於本機的方位和距離。`092-22` 表示游標位於本機 092° 方位、22 海里處。該讀數隨[編號 11](#sit-item-11) 的目標截獲門位置變化。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. SAM 攻擊範圍

紅色圓圈表示地對空飛彈（SAM）的攻擊範圍，也屬於一種地理圍欄。範例中的圓圈帶有 `MEZ` 標記，是 Missile Engagement Zone（飛彈攻擊範圍）的縮寫。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. 飛行計畫航點

黃色航點符號及其連線表示本飛行小隊的飛行計畫航點序列。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. 目標截獲門

兩條青色豎線組成游標，也稱目標截獲門。<strong>虛線</strong>表示 SIT 的目標截獲門正在跟隨 VSD 游標；將游標控制權交給 SIT 後，截獲門變為<strong>實線</strong>，TDC 可直接控制 SIT 游標。操作方法見[游標控制與顯示模式](#sit-modes)。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. 反制措施數量

綠色 `C 120` 和 `F 60` 分別表示剩餘 120 份干擾絲和 60 枚熱焰彈。

[返回編號索引](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. 游標相對牛眼的座標

黃色讀數表示游標相對於公共參考點<strong>牛眼（Bullseye）</strong>的方位和距離。`121-30` 表示游標位於牛眼 121° 方位、30 海里處。右上角的青色座標則以本機為參考點。

[返回編號索引](#sit-symbol-index)

<a id="sit-mission"></a>

## 任務資訊與顯示控制

### 來自任務編輯器的資訊

SIT 中的大部分資訊來自你在任務編輯器中設定的內容。上例中的飛行計畫航點序列和地理圍欄，可以與下方的任務設定直接對照。

請根據你的裝置效能設定任務。過多的單位會消耗更多運算資源和記憶體。

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="任務編輯器中的飛行計畫航點、牛眼、飛機和地理圍欄" loading="lazy" /></a>
  <figcaption>任務編輯器中的設定構成了 SIT 顯示的任務背景。</figcaption>
</figure>

任務設定方法見 [Tac 編輯器](/zh-tw/Docs/basics/tac-editor.html)。

### 控制 SIT 顯示的內容

開啟 [Touch UI 功能面板](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-1)，選擇 <strong>MAIN 頁面</strong>。其中的 <strong>SIT</strong> 一欄用於控制顯示內容，以及顯示距離是否跟隨 VSD。

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="MAIN 功能面板中的 SIT 控制項，WP、DLK、AUTO RANGE 和 GEO FENCE 標註為 1–4" loading="lazy" /></a>
</figure>

| 編號 | 控制項 | 功能 |
| --- | --- | --- |
| 1 | `WP` | 顯示或隱藏飛行計畫航點。 |
| 2 | `DLK` | 顯示或隱藏資料鏈資訊。 |
| 3 | `AUTO RANGE` | 控制 SIT 的顯示距離是否跟隨 VSD 的顯示距離一起變化。 |
| 4 | `GEO FENCE` | 顯示或隱藏地理圍欄。 |

[返回頁面索引](#mpcd-index)

<a id="sit-modes"></a>

## 游標控制與顯示模式

### 將游標控制權交給 SIT

<div class="mpcd-controls">
  <div>
    <p>當 TDC 指定到 VSD 時，將<strong>城堡開關向上撥動（UP）</strong>，即可讓 SIT 成為目前主控顯示器（SOI）。此時移動 TDC 只會控制 SIT 的目標截獲門，截獲門的兩條豎線顯示為<strong>實線</strong>。</p>
    <p>城堡向上可在 VSD 與 SIT 之間切換游標控制權。當 SIT 游標再次跟隨 VSD 時，截獲門恢復為虛線。</p>
    <p>旁邊是 Touch UI 中的<a href="/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-19">城堡開關</a>和<a href="/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-18">游標（TDC）控制項</a>。</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Touch UI 城堡開關" loading="lazy" /></a>
      <figcaption>城堡開關</figcaption>
    </figure>
    <figure>
      <a href="/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Touch UI 游標 / TDC 控制項" loading="lazy" /></a>
      <figcaption>游標 / TDC</figcaption>
    </figure>
  </div>
</div>

以下向右、向左和向下的操作，均以 <strong>SIT 已取得游標控制權</strong>為前提。

| 城堡方向 | SIT 模式 | 用途 |
| --- | --- | --- |
| 向右 | Decenter（偏心顯示） | 將本機移至顯示器較下方，為前方態勢留出更多空間。 |
| 向左 | EXP（擴展顯示） | 聚焦 10 海里範圍，透過游標控制顯示區域的偏移。 |
| 向下 | 飛行小隊模式 | 固定使用 5 海里範圍，查看本小隊的態勢。 |

<a id="sit-decenter"></a>

### Decenter 模式

SIT 主控時，將<strong>城堡開關向右撥動</strong>，進入 Decenter 模式。本機移到顯示器較下方，為 SIT 上半部分留出更多空間，以顯示前方態勢。

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="Decenter 模式下的 SIT，編號 1 是實線目標截獲門，編號 2 是本機" loading="lazy" /></a>
  <figcaption>1：由 SIT 主控的實線目標截獲門。2：本機。</figcaption>
</figure>

此圖右上角的 `120` 表示<strong>從本機到大圓頂部的距離為 120 海里</strong>。

<a id="sit-exp"></a>

### EXP 模式

SIT 主控時，將<strong>城堡開關向左撥動</strong>，進入 EXP 模式。此時聚焦 <strong>10 海里範圍</strong>，右上角顯示 `E10`。透過游標控制顯示區域的偏移，可以放大需要觀察的一小片區域。

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="SIT EXP 模式，右上角顯示 E10，資料鏈飛機符號分散顯示" loading="lazy" /></a>
  <figcaption>EXP 模式放大局部區域，便於區分各架飛機並觀察附近的地理圍欄。</figcaption>
</figure>

<a id="sit-flight"></a>

### 飛行小隊模式

SIT 主控時，將<strong>城堡開關向下撥動</strong>，進入飛行小隊模式。此模式固定使用 <strong>5 海里顯示範圍</strong>，右上角顯示 `F5`，用於查看本小隊各架飛機的位置和高度。

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="SIT 飛行小隊模式，右上角顯示 F5，本機周圍顯示 2、3、4 號僚機" loading="lazy" /></a>
  <figcaption>飛行小隊模式用於近距離查看本小隊的態勢。</figcaption>
</figure>

[返回頁面索引](#mpcd-index)

<a id="sit-friendly"></a>

## 友機與牛眼

SIT 會區分本飛行小隊的飛機和同一任務 <strong>Package（任務編組）</strong>中的其他飛機。下圖同時展示如何讀取游標相對於牛眼的位置。

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT 友機與牛眼範例，1 為 Package 飛機，2 為牛眼，3 為僚機，4 為本機" loading="lazy" /></a>
</figure>

| 編號 | 符號 | 含義 |
| --- | --- | --- |
| 1 | 綠色 Package 飛機 | 同一 Package 中的另一架飛機，此例是一架預警機。符號中間的小點表示本機正在接收它的資料鏈貢獻；底部的 `15` 表示高度為 15,000 英尺。 |
| 2 | 黃色牛眼 | 公共參考點。右下角黃色的 `037-12` 表示游標位於牛眼 037° 方位、12 海里處。 |
| 3 | 青色僚機 | 本飛行小隊的另外三架飛機。符號中間的數字是小隊編號：2、3、4 號，長機為 1 號；符號底部的數字表示高度，單位為千英尺。 |
| 4 | 青色本機符號 | 本機在 SIT 上的位置。 |

[返回頁面索引](#mpcd-index)

<a id="sit-workflow"></a>

## SIT 與 VSD 配合使用

一種實用的操作流程是：先透過 SIT 的資料鏈資訊確定需要搜尋的區域，再透過 VSD 對相應位置進行雷達掃描、取得目標。下面的圖例依次說明資料鏈報告、本機雷達追蹤和追蹤關聯後的顯示。

### 1. 根據資料鏈資訊搜尋目標區域

利用 SIT 中報告的目標位置，引導 VSD 的雷達搜尋。<strong>左側 SIT 中的青色扇形</strong>表示雷達搜尋的方位和距離，可以將它與目標位置對照，同時在 VSD 上確認掃描高度涵蓋目標所在高度。

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="左側 SIT 顯示資料鏈目標與青色雷達搜尋扇形，右側 VSD 顯示搜尋回波" loading="lazy" /></a>
  <figcaption>左側 SIT 提供戰術位置參考，右側 VSD 顯示雷達搜尋資訊。</figcaption>
</figure>

天線俯仰、搜尋範圍和目標截獲門的操作，見[雷達與 VSD：遠距搜尋（LRS）](/zh-tw/Docs/aircraft/f15c/radar.html#radar-lrs)。

### 2. 識別本機取得的追蹤

當雷達建立目標追蹤後，此例中的 SIT 會顯示<strong>白色實線方框</strong>。其中，<strong>實線輪廓</strong>表示由本機雷達取得的追蹤，<strong>白色</strong>表示身分未知。此階段在本機追蹤的背景中，仍能看到紅色虛線的資料鏈目標。

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="SIT 上的白色方框本機追蹤與紅色虛線資料鏈目標重疊，右側為對應的 VSD 追蹤" loading="lazy" /></a>
  <figcaption>1：醒目標示的武器讀數。2：SIT 中的本機追蹤。3：VSD 中對應的雷達追蹤。</figcaption>
</figure>

### 3. 識別關聯追蹤與 PDT

經過一段時間，本機雷達取得的追蹤檔案和資料鏈接收的追蹤檔案會被關聯，合併為同一個追蹤。此時 SIT 中的目標符號顯示為<strong>實心</strong>。下例中，關聯後的敵機顯示為紅色。

編號 1 標出的<strong>藍色虛線</strong>指向 <strong>PDT（Primary Designated Target，主要指定目標）</strong>。

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="SIT 中關聯後的實心敵機符號與指向 PDT 的藍色虛線，右側為 TWS 模式的 VSD" loading="lazy" /></a>
  <figcaption>藍色虛線標示主要指定目標的方向。</figcaption>
</figure>

### 4. 用 EXP 查看目標小隊細節

將 SIT 切換到 [EXP 模式](#sit-exp)，可以觀察目標飛行小隊中各架飛機的細節。放大後，目標符號更容易分辨，可結合 VSD 查看小隊分布和高度讀數。

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="EXP 模式下四架實心敵機符號的細節，編號 1 指向 SIT 目標，編號 2 指向對應的 VSD 追蹤" loading="lazy" /></a>
  <figcaption>1：EXP 模式下的 SIT 目標小隊細節。2：VSD 中對應的追蹤。</figcaption>
</figure>

| 本組圖例中的顯示 | 含義 |
| --- | --- |
| 目標虛線輪廓 | 資料鏈報告。 |
| 目標實線輪廓 | 本機雷達取得的追蹤。 |
| 白色目標 | 身分未知。 |
| 實心目標符號 | 本機與資料鏈追蹤已經關聯。 |
| 藍色虛線 | 指向 PDT。 |

[返回頁面索引](#mpcd-index)

<a id="mpcd-aa"></a>

## AA 空對空武器頁面

### 開啟 AA 頁面

當 <strong>TDC 指定到 VSD</strong> 時，將<strong>城堡開關向右撥動</strong>，即可把 MPCD 從 SIT 切換到 <strong>AA 空對空武器頁面</strong>。在同樣的控制狀態下，城堡向左可返回 SIT。

城堡開關的作用取決於目前由哪個顯示器主控游標：VSD 主控時向右開啟 AA；SIT 主控時向右進入 Decenter 模式。

### 讀取掛載資訊

AA 頁面圍繞飛機輪廓顯示各位置的掛載，並集中顯示機砲彈藥和反制措施數量。

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="兩幅 AA 頁面範例，標註空掛架、副油箱、彈藥、反制措施和選取的掛架" loading="lazy" /></a>
  <figcaption>圖中兩處標註均為 3：左圖 3 指機砲彈藥，右圖 3 指反制措施數量。</figcaption>
</figure>

| 標註 | 讀數 | 含義 |
| --- | --- | --- |
| 左圖 1 | `PYLON` | 空掛架，未掛載外掛物。 |
| 左圖 2 | `FUEL` | 此掛架掛有副油箱。 |
| 左圖 3 | `950` | 剩餘機砲彈藥數量，此例為 950 發。 |
| 右圖 3 | `CHF 120`、`FLR 60` | 剩餘反制措施數量：120 份干擾絲、60 枚熱焰彈。 |
| 右圖 4 | 醒目標示的 `AMRM / 120B` | 目前選取的掛架，以綠色醒目顯示和武器型號外的白框標示。 |

### 與飛機設定中的掛載對照

下方 <strong>LOADOUT（掛載）</strong>設定與前面的 AA 頁面範例相對應。對照掛載類型和彈藥數量，可以了解設定頁面中的配置如何顯示在 MPCD 上。

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="與 AA 頁面對應的 LOADOUT 設定，包括 9M、120B、7M、副油箱、950 發機砲彈藥、120 份干擾絲和 60 枚熱焰彈" loading="lazy" /></a>
</figure>

| LOADOUT 配置 | AA 頁面中的對應顯示 |
| --- | --- |
| 8A、2A 掛點的 `9M` | 兩處 `SRM / 9M`。 |
| 7、3 掛點的 `120B` | 兩處 `AMRM / 120B`。 |
| 6、4 掛點的 `7M` | 兩處 `MRM / 7M`。 |
| 5 號掛點的 `Tank` | 中間的 `FUEL`。 |
| Gun `950`、Chaff `120`、Flare `60` | AA 頁面中的機砲彈藥和反制措施數量。 |

[返回頁面索引](#mpcd-index)
