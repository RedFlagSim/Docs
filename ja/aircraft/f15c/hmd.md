<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# F-15C ヘルメット装着式ディスプレイ（HMD）

HMD は飛行情報、友軍機、目標、武器の情報を視野内に表示します。また、レーダーアンテナや赤外線ミサイルのシーカーを指向させることもできます。

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 電源投入と自己診断</a>
  <a href="#datalink">2 データリンクによる友軍機表示</a>
  <a href="#sensor-cueing">3 センサーの指向</a>
  <a href="#weapon-range">4 目標と武器射程</a>
  <a href="#infrared-example">5 赤外線誘導ミサイルのシーカーを HMD に追従させる実演</a>
</div>

画像をクリックすると元の解像度で表示できます。

<a id="power-on"></a>

## 1. 電源投入と自己診断

HMD 操作部の `BRT` タッチコントロールを上にスワイプすると、HMD が起動します。

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="図1：HMD の BRT コントロールを上にスワイプして起動" loading="lazy" />
  </a>
  <figcaption>図1：HMD の BRT コントロールを上にスワイプして起動</figcaption>
</figure>

起動すると、HMD は `TESTING` の自己診断画面を表示します。診断が完了すると通常表示に切り替わり、方位、対気速度、高度などの飛行情報が表示されます。

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="図2：HMD 起動時の自己診断" loading="lazy" />
  </a>
  <figcaption>図2：HMD 起動時の自己診断</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="図3：自己診断完了後の通常の HMD 飛行表示" loading="lazy" />
  </a>
  <figcaption>図3：自己診断完了後の通常の HMD 飛行表示</figcaption>
</figure>

<a id="datalink"></a>

## 2. データリンクによる友軍機表示

データリンクを有効にすると、友軍機の位置を HMD で直接確認できます。図4は SIT ページの編隊情報、図5は HMD に表示される友軍機シンボルです。外を見ながら友軍機の方向を確認できます。

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="図4：SIT の編隊データリンク情報" loading="lazy" />
  </a>
  <figcaption>図4：SIT の編隊データリンク情報</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="図5：HMD に表示される友軍機の位置" loading="lazy" />
  </a>
  <figcaption>図5：HMD に表示される友軍機の位置</figcaption>
</figure>

データリンクと SIT シンボルの説明は [MPCD](/ja/Docs/aircraft/f15c/mpcd.html) を参照してください。

<a id="sensor-cueing"></a>

## 3. センサーの指向

HMD の主な機能の一つは、レーダーアンテナや赤外線ミサイルのシーカーなどのセンサーを指向させることです。ボアサイト（BST）と長距離ボアサイト（LR BST）の両モードで、HMD によるレーダーアンテナの指向に対応しています。図6はボアサイトモードでの使用例です。

レーダーアンテナのジンバル可動範囲内で HMD を目標に向けると、アンテナをその方向に向けて捕捉・ロックオンできます。アンテナの動きはジンバルの可動範囲に制限されます。

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="図6：ボアサイトモードで HMD によりレーダーアンテナを指向" loading="lazy" />
  </a>
  <figcaption>図6：ボアサイトモードで HMD によりレーダーアンテナを指向</figcaption>
</figure>

レーダーモードと自動捕捉の操作は [AN/APG-63 レーダーと VSD](/ja/Docs/aircraft/f15c/radar.html) を参照してください。

<a id="weapon-range"></a>

## 4. 目標と武器射程

HMD には目標と武器射程の情報も表示されます。図7は目標枠と距離目盛を示しており、HUD から視線を外しているときにも確認できます。

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="図7：HMD の目標と武器射程情報" loading="lazy" />
  </a>
  <figcaption>図7：HMD の目標と武器射程情報</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. 赤外線誘導ミサイルのシーカーを HMD に追従させる実演

HMD で赤外線ミサイルのシーカーを指向させる操作例は、[赤外線誘導ミサイルのシーカーを HMD に追従させる実演（7秒から）](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s)をご覧ください。
