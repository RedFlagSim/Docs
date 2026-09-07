---
title: AN/APG-63雷達和VSD
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

## 遠距搜索（LRS）

LRS（遠距搜索）用於在尚未鎖定目標時搜索遠距離空中目標，瞭解目標相對本機的方位和距離，為後續截獲與跟蹤提供參考。通常可將 VSD 顯示範圍設為 **40～80 海裡**，以觀察較遠區域的雷達回波；這裡指的是顯示範圍，並不表示雷達對所有目標都能達到這一探測距離。

使用 LRS 時，需要結合預期目標位置調整天線俯仰和方位掃描範圍，使搜索區域覆蓋目標可能出現的空域。發現需要跟蹤的回波後，可用[截獲門](#lrs-item-9)框住它併發起手動截獲，成功後進入 STT 單目標跟蹤模式。因此，LRS 主要解決“目標在哪裡”的問題，精確跟蹤則由後續跟蹤模式完成。

顯示區橫向表示方位，縱向表示距離，越靠上表示距離越遠。

點擊一次 Touch UI 的 **AA（自動截獲）按鈕**，即可從雷達待機狀態進入 LRS；再點擊一次，則返回待機狀態。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Touch UI AA 自動截獲按鈕">

按鈕的其他操作見 [Touch UI：自動截獲開關](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-28)。

### 掃描行數

首次點擊 AA 按鈕開始 LRS 搜索後，默認採用 **120° 方位範圍、6 行掃描**。

“行”（bar）是指天線在一個俯仰位置上的橫向掃描。多行掃描通過在不同俯仰位置逐行掃描來覆蓋一定的高度範圍；6 行掃描就是依次完成 6 行掃描。相鄰掃描行之間的間隔稱為行距，行距會隨搜索距離範圍變化，並不是固定值。

如需更改 LRS 的掃描行數，可打開 [Touch UI 的“1. 功能面板”](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-1)，在 **MAIN 頁面**選擇掃描行數。

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="VSD 遠距搜索（LRS）模式，標注編號 1–15">
</a>

點擊圖片可查看原始分辨率大圖，點擊下方編號可跳轉到對應解釋。

<a id="lrs-index"></a>

### 符號編號

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 雷達回波</a>
  <a href="#lrs-item-2">2 高度覆蓋</a>
  <a href="#lrs-item-3">3 天線俯仰指示</a>
  <a href="#lrs-item-4">4 回波歷史</a>
  <a href="#lrs-item-5">5 掃描條帶與 PRF</a>
  <a href="#lrs-item-6">6 截獲門的牛眼坐標</a>
  <a href="#lrs-item-7">7 本機地速</a>
  <a href="#lrs-item-8">8 VSD 最遠顯示範圍</a>
  <a href="#lrs-item-9">9 截獲門</a>
  <a href="#lrs-item-10">10 本地地平線參考</a>
  <a href="#lrs-item-11">11 牛眼參考點</a>
  <a href="#lrs-item-12">12 3 號導航點</a>
  <a href="#lrs-item-13">13 天線方位指示</a>
  <a href="#lrs-item-14">14 方位掃描邊界</a>
  <a href="#lrs-item-15">15 本機真空速</a>
</div>

<a id="lrs-item-1"></a>

### 1. 雷達回波

綠色短橫塊表示搜索探測到的回波。它的位置提供方位和距離參考，本身不表示已經鎖定，也不能僅憑這種形狀判斷敵我。

[返回編號索引](#lrs-index)

<a id="lrs-item-2"></a>

### 2. 高度覆蓋

左側兩個圓圈及數字表示截獲門所在距離處的掃描高度上下限，單位為千英尺。圖中 `29` 和 `-2` 對應約 29,000 至 -2,000 英尺；負值是掃描幾何範圍的讀數，不表示存在地下目標。改變截獲門距離或天線俯仰時，需要重新讀取覆蓋範圍。

[返回編號索引](#lrs-index)

<a id="lrs-item-3"></a>

### 3. 天線俯仰指示

左側標尺上的尖括號指示天線俯仰方向。它與編號 2 的高度覆蓋讀數配合使用，不是目標高度標記。

左側標尺由 6 個刻度分段，表示雷達向上 60° 至向下 60° 的掃描角度範圍。讀取天線俯仰角時，按尖括號在這組刻度上的位置判斷：中間為 0°，向上為正俯仰角，向下為負俯仰角。

使用天線 **ELE 旋鈕**控制天線俯仰。觸控操作使用下圖中的天線俯仰控件，調整時觀察左側尖括號的位置和高度覆蓋讀數。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="Touch UI 天線俯仰控件">

控件說明見 [Touch UI：天線俯仰](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-25)。

[返回編號索引](#lrs-index)

<a id="lrs-item-4"></a>

### 4. 回波歷史

回波歷史保留之前掃描到的位置，可用於觀察回波的位置變化。讀取連續短橫塊時，需要區分歷史位置與當前回波，不能把每一塊都當作獨立目標。

[返回編號索引](#lrs-index)

<a id="lrs-item-5"></a>

### 5. 掃描條帶與 PRF

`6HI` 是掃描條帶和脈衝重復頻率（PRF）狀態讀數，其中 `HI` 表示高 PRF。

[返回編號索引](#lrs-index)

<a id="lrs-item-6"></a>

### 6. 截獲門的牛眼坐標

這裡顯示的是[截獲門（編號 9）](#lrs-item-9)所在位置的牛眼坐標，以 Bullseye（牛眼）為統一參考點，給出方位與距離。圖中 `310-12` 表示截獲門位於牛眼的 310° 方向、距離牛眼 12 海裡。

未來聯機時，可使用這個坐標與隊友溝通目標位置。將截獲門移到需要報告的位置後，即可讀取相應的牛眼坐標。

[返回編號索引](#lrs-index)

<a id="lrs-item-7"></a>

### 7. 本機地速

`G 589` 表示本機地速為 589 節，即相對於地面的速度。

[返回編號索引](#lrs-index)

<a id="lrs-item-8"></a>

### 8. VSD 最遠顯示範圍

右上角 `80` 表示 VSD 當前最遠顯示範圍為 80 海裡。它是顯示範圍，不是某個目標的距離，也不代表雷達的最大探測距離。

通過移動[截獲門](#lrs-item-9)越過視圖邊界，可調整顯示距離：

- 向上移動截獲門，超過視圖頂部：增大最遠顯示範圍。
- 向下移動截獲門，超過視圖底部：縮小最遠顯示範圍。

[返回編號索引](#lrs-index)

<a id="lrs-item-9"></a>

### 9. 截獲門

兩條竪線組成截獲門，用於選擇顯示區中的位置或原始回波。截獲門所在距離也用於讀取編號 2 的高度覆蓋。

使用 Touch UI 右側的 **Cursor（TDC 游標控制）按鈕**移動截獲門，對應控件如下圖。截獲門越過視圖邊界時，還可調整[顯示距離](#lrs-item-8)和[方位掃描範圍](#lrs-item-14)。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Touch UI 右側 Cursor 游標控制按鈕">

控件說明見 [Touch UI：Cursor](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-18)。

手動截獲目標的操作：

1. 移動截獲門，框住一個原始雷達回波。
2. 雙擊 Touch UI 右側的 Cursor（TDC 游標控制）按鈕，發起手動截獲。
3. 截獲成功後，雷達自動進入 **STT（單目標跟蹤）模式**，鎖定並跟蹤該目標。

[返回編號索引](#lrs-index)

<a id="lrs-item-10"></a>

### 10. 本地地平線參考

帶下折端點的橫線是本地地平線參考。它位於畫面中部時表示飛機正在平飛，其旋轉反映飛機的滾轉。觀察雷達時，可通過這條線保持對本機姿態的參考。

[返回編號索引](#lrs-index)

<a id="lrs-item-11"></a>

### 11. 牛眼參考點

Bullseye（牛眼）是報告方位和距離時使用的統一參考點。截獲門的牛眼坐標讀法見[編號 6](#lrs-item-6)。

[返回編號索引](#lrs-index)

<a id="lrs-item-12"></a>

### 12. 3 號導航點

箭頭指向 3 號導航點。空心三角表示導航點的位置，旁邊的 `3` 是導航點編號。

[返回編號索引](#lrs-index)

<a id="lrs-item-13"></a>

### 13. 天線方位指示

底部尖角形標記指示天線當前掃描方位，應與旁邊的圓形邊界標記區分。它表示天線指向，不是目標航向。

掃描時，這個符號會隨天線掃描左右移動，實時反映天線當前的方位。

[返回編號索引](#lrs-index)

<a id="lrs-item-14"></a>

### 14. 方位掃描邊界

底部左右兩個圓形標記表示方位掃描邊界，箭頭指向右側邊界。兩者界定掃描寬度，不是兩架目標。

通過移動[截獲門](#lrs-item-9)越過視圖左右邊界，可調整方位掃描範圍：

- 向左移動截獲門，超過視圖左側邊界：縮小方位掃描範圍。
- 向右移動截獲門，超過視圖右側邊界：放大方位掃描範圍。

方位掃描範圍最大為 **120°**，最小為 **10°**。這裡調整的是方位掃描寬度，與編號 8 的顯示距離不同。

[返回編號索引](#lrs-index)

<a id="lrs-item-15"></a>

### 15. 本機真空速

`T 589` 表示本機真空速為 589 節，即相對於周圍空氣的速度。它與編號 7 的地速是不同參數，即使本圖中讀數相同，也不能混用。

[返回編號索引](#lrs-index)

## 單目標跟蹤（STT）

STT（Single Target Track，單目標跟蹤）集中跟蹤一個目標，持續提供目標位置、運動狀態及武器解算所需的數據。在 LRS 中，用截獲門框住原始回波並雙擊 Touch UI 右側的 Cursor 按鈕，截獲成功後便會自動進入 STT。具體操作見[截獲門](#lrs-item-9)。

與 LRS 的區域搜索不同，STT 主要用於維持選定目標的跟蹤。它可為機炮瞄准和導彈使用提供目標數據；本遊戲中的 AIM-7 要求在 STT 下發射，發射後仍需雷達照射支持。STT 也可支持 AIM-120，但不能把兩種導彈的制導要求混用。

STT 跟蹤會觸發敵機的雷達鎖定告警。距離較近時，目標可能投放箔條干擾，或執行 Notch（多普勒缺口）機動，試圖擺脫鎖定或干擾本機的發射條件。因此，進入 STT 後仍需持續觀察目標機動、跟蹤狀態和動態發射區的變化。

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="圖 1：AIM-7 的 VSD 單目標跟蹤（STT）顯示，標注編號 1–14">
</a>

圖 1：目標位於最大射程之外，ASE 環處於縮小狀態。

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 目標真空速</a>
  <a href="#stt-item-2">2 H/T 標識與目標航向</a>
  <a href="#stt-item-3">3 目標高度讀數</a>
  <a href="#stt-item-4">4 PDT 主目標</a>
  <a href="#stt-item-5">5 轉向點</a>
  <a href="#stt-item-6">6 ASE 圓</a>
  <a href="#stt-item-7">7 目標接近率</a>
  <a href="#stt-item-8">8 目標距離指示</a>
  <a href="#stt-item-9">9 Rmax 最大射程</a>
  <a href="#stt-item-10">10 優化的最大射程</a>
  <a href="#stt-item-11">11 RTR 射程參考</a>
  <a href="#stt-item-12">12 最小射程</a>
  <a href="#stt-item-13">13 導彈時間讀數</a>
  <a href="#stt-item-14">14 目標方位與距離</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="圖 2：AIM-7 的 STT 顯示，目標朝向為 13L，標注編號 15–17">
</a>

圖 2：目標進入最大射程以內，ASE 環開始放大。

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 目標朝向角</a>
  <a href="#stt-item-16">16 放大的 ASE 圓</a>
  <a href="#stt-item-17">17 圖 2 的目標距離與接近率</a>
</div>

點擊圖片可查看原始分辨率大圖，點擊各圖下方編號可跳轉到對應解釋。兩張圖例均選中了 **AIM-7 導彈**。距離網格、本地地平線參考和導航點等共用符號可參考前面的 LRS 部分；圖 1 右上角 `40` 表示 VSD 最遠顯示範圍為 40 海裡，圖 2 的 `20` 表示 20 海裡。

<a id="stt-item-1"></a>

### 1. 目標真空速

頂部左側的 `397` 表示目標真空速為 397 節，不是本機速度。圖 2 同一位置的 `577` 表示目標真空速為 577 節。

[返回編號索引](#stt-index)

<a id="stt-item-2"></a>

### 2. H/T 標識與目標航向

`H` 表示 **HOT**，意味著目標正以機頭朝向本機；面對敵機時，這是一種危險態勢。目標背對本機時顯示 `T`。這組標識描述目標相對本機的朝向，不是敵我識別結果。

後面的 `313` 表示目標航向為 313°，不是本機航向。H/T 與航向需要區分：前者描述目標相對本機的朝向，後者給出目標航向的數值。帶左右方向的朝向角讀法見[編號 15](#stt-item-15)。

[返回編號索引](#stt-index)

<a id="stt-item-3"></a>

### 3. 目標高度讀數

左側 `13-4` 表示目標高度為 13,400 英尺 MSL，即相對於平均海平面的高度。

[返回編號索引](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT 主目標

五角星代表 PDT（Primary Designated Target，主指定目標），在方位—距離顯示區中標出其位置。五角星前方的長線表示目標的速度方向。

[返回編號索引](#stt-index)

<a id="stt-item-5"></a>

### 5. 轉向點

箭頭所指的亮點是轉向點。發射導彈時，用編號 6 的 ASE 圓套住轉向點，可以減少導彈發射後所需的轉彎，節省導彈能量。這裡的顯示邏輯與 HUD 相同，詳見 [HUD 的轉向點說明](/zh-tw/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2)。

[返回編號索引](#stt-index)

<a id="stt-item-6"></a>

### 6. ASE 圓

圓形符號是允許轉向誤差（ASE）參考。只有當 ASE 圓放大後，才表示開始滿足發射條件；在縮小狀態下，即使轉向點位於圓內，也不能據此判斷可以發射。

ASE 圓放大後，仍需結合轉向點、射程和所選導彈的制導要求判斷。這裡的顯示邏輯與 HUD 相同，詳細含義見 [HUD 的 ASE 說明](/zh-tw/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1)。

[返回編號索引](#stt-index)

<a id="stt-item-7"></a>

### 7. 目標接近率

`1006` 表示本機與目標之間的接近率，單位為節。它描述雙方距離變化的快慢，不是目標自身的飛行速度。

[返回編號索引](#stt-index)

<a id="stt-item-8"></a>

### 8. 目標距離指示

右側的 `>` 標記指示目標在當前距離標尺上的位置。讀取時應結合右上角的 `40` 海裡量程；旁邊的 `1006` 是接近率，不是距離。

[返回編號索引](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax 最大射程

第一條（最上方）短橫線是 Rmax（最大射程）標記，表示當前解算條件下的最大射程。

[返回編號索引](#stt-index)

<a id="stt-item-10"></a>

### 10. 優化的最大射程

第二條短橫線表示優化的最大射程。

[返回編號索引](#stt-index)

<a id="stt-item-11"></a>

### 11. RTR 射程參考

右側長方框的上端是 RTR（Range Turn and Run）標記，即考慮目標轉向逃離後的射程參考，通常稱為不可逃逸射程。它表示相對有利的發射條件，不保證命中。

[返回編號索引](#stt-index)

<a id="stt-item-12"></a>

### 12. 最小射程

長方框下端是 RMin（最小射程）標記。應將目標距離指示與這個標記比較，而不是把接近目標本身理解為發射條件一定更好。

編號 9、10、11、12 的射程標記共同組成 DLZ（動態發射區）。它不是固定的，會受到本機高度、雙方高度差、目標飛行方向、目標速度、本機速度等多種因素影響，並隨當前條件變化。

因此，發射武器前需要綜合評估。在盡力保證本機安全、同時滿足最小射程限制的前提下，應盡可能接近目標再發射。

[返回編號索引](#stt-index)

<a id="stt-item-13"></a>

### 13. 導彈時間讀數

`53SEC` 表示：如果現在發射導彈，預計將在 53 秒後命中目標。這個時間是基於雙方當前運動態勢計算的結果，不是已經發射後的倒計時。

只有目標在發射後不轉彎並保持當前運動狀態，這個預計時間才準確；如果目標改變航向或速度，實際命中時間也會變化。

[返回編號索引](#stt-index)

<a id="stt-item-14"></a>

### 14. 目標方位與距離

右下角 `129-21` 表示以本機為參考的目標方位角和距離：目標方位為 129°，距本機 21 海裡。方位角單位為度，距離單位為海裡。不要與牛眼坐標混用。

[返回編號索引](#stt-index)

<a id="stt-item-15"></a>

### 15. 目標朝向角

圖 2 的 `13L` 表示目標機頭以 130° 向左朝向；若顯示 `13R`，則表示以 130° 向右朝向。數字以十度為單位，`L` 和 `R` 分別表示左、右。

這是目標相對本機的朝向角，不是航向 130°。同一行後面的 `351` 才表示目標航向為 351°，應與[編號 2 的 H/T 標識及航向](#stt-item-2)結合閱讀。

[返回編號索引](#stt-index)

<a id="stt-item-16"></a>

### 16. 放大的 ASE 圓

圖 1 中目標位於最大射程之外，ASE 環處於縮小狀態；圖 2 中目標進入當前計算的最大射程以內，ASE 環開始放大。其作用仍與[編號 6](#stt-item-6)相同，需要結合轉向點和射程標記判斷。圖例選擇的是 AIM-7，ASE 放大並不取消維持雷達跟蹤和照射的要求。

[返回編號索引](#stt-index)

<a id="stt-item-17"></a>

### 17. 圖 2 的目標距離與接近率

箭頭指向右側的目標距離指示 `>`，它與圖 1 的[編號 8](#stt-item-8)是同一類符號。圖 2 應按 20 海裡的最遠顯示範圍讀取其位置，不能沿用圖 1 的 40 海裡量程。

旁邊的 `915` 表示目標接近率為 915 節，讀法與[編號 7](#stt-item-7)相同。

[返回編號索引](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="STT 進入 RTR，VSD 底部出現三角形發射提示">
    </a>
    <figcaption>圖 3 · 進入 RTR：三角發射提示</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="STT 目標距離小於最小發射射程，VSD 中央出現交叉的 Break X 提示">
    </a>
    <figcaption>圖 4 · 小於最小射程：Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### 圖 3 · 進入 RTR：三角發射提示

目標進入 RTR（不可逃逸射程）後，VSD 底部會出現三角形，提示當前具備有利的發射條件。圖中三角形位於底部中央、`8SEC` 時間讀數左側。

發射前仍需結合 ASE、轉向點和最小射程判斷，並保持 AIM-7 所需的雷達跟蹤與照射支持。三角提示不代表必然命中。

[返回編號索引](#stt-index)

<a id="stt-break-x"></a>

### 圖 4 · 小於最小射程：Break X

當目標距離小於最小發射射程時，VSD 中央出現交叉的 **Break X** 標誌，提示不能發射。

距離過近時，導彈可能來不及加速到所需速度；即使命中目標，本機的飛行路徑也可能穿過爆炸破片區域。因此，不能僅因目標已經鎖定或距離很近就發射，必須注意最小射程限制。

[返回編號索引](#stt-index)

## 邊掃描邊跟蹤（TWS）

TWS（邊掃描邊跟蹤）在繼續掃描的同時維護多個目標航跡，主要工作在 40 海裡以內，主要服務於 AIM-120 導彈的使用。

為了提供較高的目標刷新率，TWS 會限制掃描行數和方位掃描範圍的組合。方位範圍越寬，可使用的掃描行數越少；選擇方位掃描範圍後，系統會自動匹配掃描行數，無需單獨選擇。

| 方位掃描範圍 | 自動匹配的掃描行數 |
| --- | --- |
| 60° | 2 行 |
| 30° | 4 行 |
| 15° | 6 行 |

### 進入 TWS

可以通過以下兩種方式進入 TWS：

1. **已鎖定目標時：** 在 STT 單目標跟蹤狀態下，將 AA（自動截獲）按鈕向下撥動，即可進入 TWS。
2. **未鎖定目標時：** 將截獲門移到沒有目標回波的空白處，雙擊 TDC（Touch UI 右側的 Cursor 按鈕）發起手動截獲，同時迅速將 AA 按鈕向下撥動，即可進入 TWS。

控件位置見 [Touch UI：Cursor](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-18)和 [Touch UI：自動截獲開關](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-28)。

TWS 在跟蹤目標的同時仍需掃描其他空域，因此單個目標的刷新率低於 STT；距離較遠時，雷達分辨率也有限。如果目標執行高過載機動、投放箔條（chaff）干擾，或原本被識別為一個目標的編隊突然散開，雷達可能無法將新回波與已有航跡正確關聯，導致關聯失敗並丟失跟蹤。

### 退出 TWS

- **已有 PDT 時：** 使用 **AA Down（AA 開關向下撥動）**，轉為對當前 PDT 的 STT 單目標跟蹤，並丟棄其他所有跟蹤檔案。
- **沒有 PDT 時：** 點擊一次 **AA 按鈕**，退出 TWS，返回 LRS 遠距搜索模式。

### 目標航跡分類

TWS 中需要區分未指定目標、首要指定目標和次要指定目標。以下數量說明適用於本遊戲。

進入 TWS 後，雷達會對掃描到的目標自動建立跟蹤檔案。剛掃描到目標時，先以不帶速度矢量的正方形顯示；隨著後續掃描積累足夠信息並建立跟蹤檔案，目標符號才會出現速度矢量。

| 類別 | 含義 | 支持數量 |
| --- | --- | --- |
| NDT（Non-designated Target） | 未指定目標，尚未被選為首要指定目標或次要指定目標 | 最多 16 個 |
| PDT（Primary Designated Target） | 首要指定目標，當前主要關注和交戰的目標 | 同時 1 個 |
| SDT（Secondary Designated Target） | 次要指定目標，可供後續選擇和交戰 | 最多 7 個 |

這些類別表示目標的指定狀態，不是敵我識別結果。沒有 PDT 時為 NDTWS；已有 PDT 時為 DTWS。

<a id="tws-designation"></a>

### 指定與切換 PDT

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="Touch UI 的 Coolie 開關">

目標建立跟蹤檔案後，可通過 **Coolie Up（Coolie 開關向上撥動）**指定目標：

- **自動指定：** 使用 Coolie Up，系統會自動指定一個 PDT，並指定 SDT。
- **循環切換：** 再次使用 Coolie Up，會在各個 SDT 中循環選擇新的 PDT。
- **手動指定：** 用截獲門套住需要選擇的 NDT 或 SDT，再使用 Coolie Up，將門內目標指定為 PDT。

同一時刻只能有一個 PDT。已有 PDT 時，若將其他目標指定為 PDT，原來的 PDT 會自動降為 SDT。

使用 **Coolie Down（Coolie 開關向下撥動）**，可取消所有指定目標，將 PDT 和 SDT 恢復為 NDT，返回未指定目標的 NDTWS 模式。

控件位置見 [Touch UI：Coolie 開關](/zh-tw/Docs/aircraft/f15c/touch-ui.html#item-26)。

### AIM-120 多目標交戰

在 TWS 模式下，只能針對當前 PDT 發射武器。AIM-120 支持同時攻擊多個目標，但需要逐個切換 PDT 併發射：

1. 對當前 PDT 發射 AIM-120。
2. 使用 Coolie Up 循環選擇，或用截獲門配合 Coolie Up 手動指定下一個 PDT。
3. 對新的 PDT 再次發射 AIM-120。

原目標從 PDT 降為 SDT 後，數據鏈仍可繼續為此前發射的導彈提供目標信息更新。切換 PDT 並不意味著停止支持上一枚導彈，仍需維持相關目標的跟蹤。

<a id="tws-ndt-index"></a>

### 圖 1 · 未指定目標

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="TWS 未指定目標顯示：編號 1 為無方向向量的目標符號，2 為帶方向向量的 NDT，3 為 TWS 狀態讀數">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 尚未建立跟蹤檔案的目標</a>
  <a href="#tws-ndt-item-2">2 NDT 未指定目標</a>
  <a href="#tws-ndt-item-3">3 TWS 狀態讀數</a>
</div>

點擊圖片可查看原始分辨率大圖，點擊下方編號可跳轉到對應解釋。

<a id="tws-ndt-item-1"></a>

#### 1. 尚未建立跟蹤檔案的目標

箭頭指向剛掃描到的目標，以實心正方形顯示，此時尚未積累足夠信息建立跟蹤檔案，因此沒有速度矢量。後續掃描建立跟蹤檔案後，才會出現編號 2 所示的速度矢量。

[返回圖 1 編號索引](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT 未指定目標

實心目標符號及其速度矢量表示已建立跟蹤檔案的 NDT（未指定目標），線段提供目標的運動方向參考。跟蹤檔案由雷達在掃描過程中自動建立，無需手動指定；該目標尚未被指定為 PDT 或 SDT。本遊戲最多支持 16 個 NDT。

[返回圖 1 編號索引](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. TWS 狀態讀數

左下角的 `2TWSM` 是雷達工作狀態讀數。其中 `TWS` 表示邊掃描邊跟蹤，`M` 表示中脈衝重復頻率（MPRF），前面的數字是掃描條帶指示。

[返回圖 1 編號索引](#tws-ndt-index)

<a id="tws-designated-index"></a>

### 圖 2 · 首要指定目標與次要指定目標

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="TWS 指定目標顯示：編號 1 為 SDT，2 為 PDT，3 為截獲門內目標的高度，4 為 AIM-120 激活距離">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT 次要指定目標</a>
  <a href="#tws-designated-item-2">2 PDT 首要指定目標</a>
  <a href="#tws-designated-item-3">3 截獲門內目標的高度</a>
  <a href="#tws-designated-item-4">4 AIM-120 激活距離</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT 次要指定目標

空心目標符號及其方向向量表示 SDT（次要指定目標）。它是已經指定、但當前不是 PDT 的目標。本遊戲最多支持 7 個 SDT。

[返回圖 2 編號索引](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT 首要指定目標

五角星表示 PDT（首要指定目標），前方長線表示目標的速度方向。圖中截獲門位於該目標處。PDT 是當前主要關注和交戰的目標，VSD 上的目標數據及武器解算圍繞它顯示。

同一時刻只有一個 PDT；其他已指定目標作為 SDT 保留。PDT 與 SDT 的區別在於指定優先級，不表示其中一個目標已被 STT 鎖定。

[返回圖 2 編號索引](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. 截獲門內目標的高度

外側的小方塊表示截獲門內目標的高度位置。通過它與掃描天花板、地板的位置關係，可以判斷當前掃描高度範圍是否覆蓋該目標：小方塊位於兩者之間時表示覆蓋；超出上下限時，應調整天線俯仰。

從原始回波到 NDT、SDT 或 PDT，只要用截獲門套住，就能查看門內目標或回波的高度。

[返回圖 2 編號索引](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. AIM-120 激活距離

箭頭指向右側射程標尺上的空心圓，表示 AIM-120 的激活距離。如果目標距離小於這個圓圈所表示的距離，AIM-120 一經發射就會激活自身雷達，主動捕獲目標。

[返回圖 2 編號索引](#tws-designated-index)

### 進入射程與 RTR 的提示

點擊圖片可查看原始分辨率大圖。

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="TWS 目標進入射程，虛線 ASE 圓環放大">
    </a>
    <figcaption>圖 3 · 進入射程：虛線 ASE 圓環放大</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="TWS 目標進入 RTR，底部中央顯示六角星發射提示">
    </a>
    <figcaption>圖 4 · 進入 RTR：六角星與 ASE 閃爍提示</figcaption>
  </figure>
</div>

**圖 3：** 目標進入導彈射程後，虛線 ASE 圓環開始放大，表示開始滿足發射條件。

**圖 4：** 目標進入 RTR 後，VSD 底部中央出現六角星，同時 ASE 圓環閃爍，提示當前具有較好的發射條件。圖中截取了 ASE 閃爍時未顯示圓環的瞬間。

### 發射後的導彈支持

在 TWS 模式下發射 AIM-120 後，雷達繼續維護目標的跟蹤檔案，並通過數據鏈嚮導彈提供目標信息更新。發射後仍需關注目標的跟蹤狀態，尤其是在導彈尚未激活自身雷達、主動捕獲目標之前。

**切換 PDT 不會自動中斷對上一枚導彈的支持。** 對當前 PDT 發射後，可以指定下一個 PDT 並繼續發射。原來的 PDT 降為 SDT 後，只要其跟蹤檔案仍被維持，數據鏈就可以繼續為已發射的導彈提供目標更新。

支持多枚導彈時，需要讓相關目標保持在雷達掃描覆蓋範圍內。如果目標機動、干擾或超出掃描範圍導致跟蹤丟失，就無法繼續提供該目標的最新跟蹤數據。轉入 STT 會丟棄其他目標的跟蹤檔案，因此切換模式前，也要考慮對其他已發射導彈的支持。

AIM-120 激活自身雷達後，會主動捕獲目標。若發射時目標已經位於[激活距離](#tws-designated-item-4)以內，導彈一經發射就會激活自身雷達，主動捕獲目標。

<a id="tws-missile-support-index"></a>

點擊圖片可查看原始分辨率大圖，點擊下方編號可跳轉到對應解釋。

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="TWS 發射後的導彈支持：編號 1 為激活進度標記，2 為已發射導彈的小點，3 為導彈激活剩餘時間">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 激活進度標記</a>
  <a href="#tws-missile-support-item-2">2 已發射導彈標記</a>
  <a href="#tws-missile-support-item-3">3 導彈激活剩餘時間</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. 激活進度標記

箭頭指向線段上的短橫標記。發射後，該標記會持續向編號 2 的小點移動；當它移動到小點處時，表示按發射時條件計算，導彈應已激活自身雷達，開始主動搜索目標。

[返回編號索引](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. 已發射導彈標記

這個小點表示已經針對該目標發射了一枚 AIM-120，並且正在為該導彈提供數據鏈支持。它同時也是編號 1 的移動標記到達激活時刻的參考位置。

[返回編號索引](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. 導彈激活剩餘時間

右上方的 `A 9` 表示預計還有 9 秒，導彈將激活自身雷達並開始主動搜索目標。該倒計時與編號 1 的移動標記共同提供導彈激活進度參考。

[返回編號索引](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### 導彈激活後的顯示

導彈激活後，右上方的 **A 倒計時變為 T 倒計時**，表示導彈與目標預計交匯的剩餘時間。圖中的 `T 17` 表示預計再過 17 秒，導彈將與目標交匯並命中。

點擊圖片可查看原始分辨率大圖，點擊下方編號可跳轉到對應解釋。

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="TWS 導彈激活後的顯示：編號 1 為導彈已激活標記，2 為向目標五角星移動的 X 標記，右上方顯示 T 17">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 導彈已激活標記</a>
  <a href="#tws-missile-active-item-2">2 導彈飛行進度標記</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. 導彈已激活標記

編號 1 指向的標記表示，針對該目標發射的導彈已經激活自身雷達，開始主動搜索目標。

[返回編號索引](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. 導彈飛行進度標記

這個 X 標記會持續向代表目標的五角星移動，表示導彈正在飛向目標，並會在預先計算的交匯時刻到達五角星的位置。

這些時間和進度提示依據發射時的條件計算。若目標隨後採取機動或反制措施，導彈的實際飛行時間通常會比預估時間更長。因此，倒計時結束或 X 標記到達五角星只表示預計交匯時刻已到，不代表已經確認命中。

[返回編號索引](#tws-missile-active-index)

## 近距自動捕獲與 Flood 模式

在近距自動捕獲與 Flood 模式下，天線掃描或照射的基準是**飛機縱軸**，隨本機姿態變化；前面的 LRS 和 TWS 模式則以**雲台維持的水平面**為天線掃描基準。

自動捕獲模式主要用於 **WVR（視距內空戰）**。除遠距離孔徑模式可以鎖定 **40 海裡以內**的目標外，其他自動捕獲模式均工作在 **10 海裡範圍內**。

### 模式選擇

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="AA 自動截獲開關">

將 **AA（自動截獲）按鈕向上撥動**，可依次進入以下模式：

1. 第一次：**SS（超級搜索）模式**。
2. 第二次：**VS（垂直掃描）模式**。
3. 第三次：**孔徑模式**。
4. 第四次：**長距離孔徑模式**。

將 **AA 按鈕向上長按**，則進入 **Flood 模式**。

### SS 超級搜索模式

第一次將 AA 按鈕向上撥動，進入 SS（Supersearch，超級搜索）模式。HUD 上的大圓表示 **20° 搜索範圍**；將目標置於搜索範圍內，雷達便可自動捕獲 **10 海裡內**的目標。

使用雷達天線俯仰控制，可使搜索範圍向上或向下偏移最多 **10°**。下圖依次顯示居中、上移和下移時的 HUD 搜索圓；偏移後，圓圈可能有一部分超出 HUD 顯示範圍。

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS 超級搜索：搜索圓居中" loading="lazy">
    <figcaption>居中</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS 超級搜索：搜索範圍向上偏移 10°" loading="lazy">
    <figcaption>向上偏移 10°</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS 超級搜索：搜索範圍向下偏移 10°" loading="lazy">
    <figcaption>向下偏移 10°</figcaption>
  </figure>
</div>

### 垂直掃描

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="VS 垂直掃描：HUD 上方向上的垂直掃描指示線" loading="lazy">
  <figcaption>VS 垂直掃描</figcaption>
</figure>

垂直掃描搜索機頭上方狹長區域，適合合併後目標穿過機頭上方時使用。

### 孔徑模式

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="BST 孔徑模式：HUD 中央的孔徑搜索圓" loading="lazy">
  <figcaption>BST 孔徑模式</figcaption>
</figure>

孔徑模式搜索機頭前方窄圓錐，鎖定第一個進入範圍的目標。

### 遠距離孔徑模式

LR BST（遠距離孔徑模式）的使用方式與孔徑模式類似，但 HUD 搜索圓更小，自動鎖定距離上限增加到 **40 海裡**。將目標保持在小圓內，雷達便可自動捕獲目標。

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="LR BST 遠距離孔徑模式：HUD 中央較小的搜索圓" loading="lazy">
  <figcaption>LR BST 遠距離孔徑模式</figcaption>
</figure>

### Flood 泛指模式

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood 泛指照射模式：HUD 照射圓與 FLOOD 提示" loading="lazy">
  <figcaption>Flood 模式下的 HUD</figcaption>
</figure>

泛指模式為 AIM-7 提供寬波束照射，目標必須保持在泛指圓內直到導彈命中。

進入 Flood 模式後，VSD 顯示如下：左上方出現 `FLOOD` 標識，距離網格不再顯示，畫面保留本地地平線參考、截獲門和導航點等符號。

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood 模式下的 VSD：左上方顯示 FLOOD，保留本地地平線參考、截獲門及導航點">
  </a>
  <figcaption>Flood 模式下的 VSD（點擊查看原圖）</figcaption>
</figure>

## 實用流程

1. 以 LRS 建立遠距態勢。
2. 根據目標高度調整天線俯仰。
3. 多目標排序時使用 TWS。
4. 需要穩定照射或近距精確鎖定時使用 STT。
5. 交匯後改用自動捕獲模式。
