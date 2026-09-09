<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# F-15C 頭盔顯示器（HMD）

HMD 將飛行、友機、目標與武器資訊顯示在視野中，並可為雷達天線或紅外線飛彈尋標器提供指向。

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 開啟與自我測試</a>
  <a href="#datalink">2 資料鏈友機顯示</a>
  <a href="#sensor-cueing">3 為感測器提供指向</a>
  <a href="#weapon-range">4 目標與武器射程</a>
  <a href="#infrared-example">5 紅外線導引飛彈尋標器隨動 HMD 示範</a>
</div>

點擊下方截圖可查看原始解析度大圖。

<a id="power-on"></a>

## 1. 開啟與自我測試

在 HMD 控制區域的 `BRT` 觸控控制項上向上滑動，開啟 HMD。

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="圖 1：HMD 開啟控制項，向上滑動 BRT" loading="lazy" />
  </a>
  <figcaption>圖 1：HMD 開啟控制項，向上滑動 BRT</figcaption>
</figure>

開啟後，HMD 先顯示 `TESTING` 自我測試畫面；測試完成後進入正常顯示，呈現航向、空速、高度等飛行資訊。

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="圖 2：HMD 開機自我測試" loading="lazy" />
  </a>
  <figcaption>圖 2：HMD 開機自我測試</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="圖 3：自我測試完成後的 HMD 飛行顯示" loading="lazy" />
  </a>
  <figcaption>圖 3：自我測試完成後的 HMD 飛行顯示</figcaption>
</figure>

<a id="datalink"></a>

## 2. 資料鏈友機顯示

開啟資料鏈後，可直接在 HMD 中看到友機的位置。圖 4 展示 SIT 中的飛行小隊資訊，圖 5 展示 HMD 視野中的友機符號，可在觀察外界時辨認友機方位。

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="圖 4：SIT 中的飛行小隊資料鏈資訊" loading="lazy" />
  </a>
  <figcaption>圖 4：SIT 中的飛行小隊資料鏈資訊</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="圖 5：HMD 視野中的友機位置" loading="lazy" />
  </a>
  <figcaption>圖 5：HMD 視野中的友機位置</figcaption>
</figure>

資料鏈與 SIT 符號的說明見 [MPCD](/zh-tw/Docs/aircraft/f15c/mpcd.html)。

<a id="sensor-cueing"></a>

## 3. 為感測器提供指向

HMD 的重要功能是為感測器提供方向，例如雷達天線或紅外線飛彈尋標器。孔徑模式（BST）與遠距離孔徑模式（LR BST）都支援使用 HMD 控制雷達天線指向。圖 6 展示孔徑模式下的操作。

在雷達天線雲台的可動範圍內，將 HMD 指向目標，可引導天線朝向目標並進行捕獲、鎖定。天線指向仍受雲台可動範圍限制。

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="圖 6：HMD 在孔徑模式下控制雷達天線指向" loading="lazy" />
  </a>
  <figcaption>圖 6：HMD 在孔徑模式下控制雷達天線指向</figcaption>
</figure>

雷達模式與自動捕獲操作見 [AN/APG-63 雷達與 VSD](/zh-tw/Docs/aircraft/f15c/radar.html)。

<a id="weapon-range"></a>

## 4. 目標與武器射程

HMD 也包含目標與武器射程資訊。圖 7 展示目標框與射程標尺，使飛行員在視線偏離 HUD 時仍能讀取相關資訊。

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="圖 7：HMD 中的目標與武器射程資訊" loading="lazy" />
  </a>
  <figcaption>圖 7：HMD 中的目標與武器射程資訊</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. 紅外線導引飛彈尋標器隨動 HMD 示範

關於 HMD 控制紅外線飛彈尋標器的操作範例，請觀看[紅外線導引飛彈尋標器隨動 HMD 示範（從第 7 秒開始）](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s)。
