<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# F-15C 头盔显示器（HMD）

HMD 将飞行、友机、目标和武器信息显示在视野中，并可为雷达天线或红外导弹导引头提供指向。

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 开启与自检</a>
  <a href="#datalink">2 数据链友机显示</a>
  <a href="#sensor-cueing">3 为传感器提供指向</a>
  <a href="#weapon-range">4 目标与武器射程</a>
  <a href="#infrared-example">5 红外制导导弹引导头随动 HMD 演示</a>
</div>

点击下方截图可查看原始分辨率大图。

<a id="power-on"></a>

## 1. 开启与自检

在 HMD 控制区域的 `BRT` 触控控件上向上滑动，开启 HMD。

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="图 1：HMD 开启控件，向上滑动 BRT" loading="lazy" />
  </a>
  <figcaption>图 1：HMD 开启控件，向上滑动 BRT</figcaption>
</figure>

开启后，HMD 先显示 `TESTING` 自检画面；自检完成后进入正常显示，呈现航向、空速、高度等飞行信息。

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="图 2：HMD 开机自检" loading="lazy" />
  </a>
  <figcaption>图 2：HMD 开机自检</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="图 3：自检完成后的 HMD 飞行显示" loading="lazy" />
  </a>
  <figcaption>图 3：自检完成后的 HMD 飞行显示</figcaption>
</figure>

<a id="datalink"></a>

## 2. 数据链友机显示

开启数据链后，可直接在 HMD 中看到友机的位置。图 4 展示 SIT 中的飞行小队信息，图 5 展示 HMD 视野中的友机符号，可用于在观察外界时辨认友机方位。

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="图 4：SIT 中的飞行小队数据链信息" loading="lazy" />
  </a>
  <figcaption>图 4：SIT 中的飞行小队数据链信息</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="图 5：HMD 视野中的友机位置" loading="lazy" />
  </a>
  <figcaption>图 5：HMD 视野中的友机位置</figcaption>
</figure>

数据链与 SIT 符号的说明见 [MPCD](/zh/Docs/aircraft/f15c/mpcd.html)。

<a id="sensor-cueing"></a>

## 3. 为传感器提供指向

HMD 的重要功能是为传感器提供方向，例如雷达天线或红外导弹导引头。孔径模式（BST）和远距离孔径模式（LR BST）都支持使用 HMD 控制雷达天线指向。图 6 展示了孔径模式下的操作。

在雷达天线云台的可动范围内，将 HMD 指向目标，可引导天线朝向目标并进行捕获、锁定。天线指向仍受云台可动范围限制。

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="图 6：HMD 在孔径模式下控制雷达天线指向" loading="lazy" />
  </a>
  <figcaption>图 6：HMD 在孔径模式下控制雷达天线指向</figcaption>
</figure>

雷达模式与自动捕获操作见 [AN/APG-63 雷达和 VSD](/zh/Docs/aircraft/f15c/radar.html)。

<a id="weapon-range"></a>

## 4. 目标与武器射程

HMD 也包含目标和武器射程信息。图 7 展示目标框与射程标尺，使飞行员在视线偏离 HUD 时仍能读取相关信息。

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="图 7：HMD 中的目标与武器射程信息" loading="lazy" />
  </a>
  <figcaption>图 7：HMD 中的目标与武器射程信息</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. 红外制导导弹引导头随动 HMD 演示

关于 HMD 控制红外导弹导引头的操作示例，请观看[红外制导导弹引导头随动 HMD 演示（从 7 秒开始）](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s)。
