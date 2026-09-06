---
title: AN/APG-63雷达和VSD
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

## 远距搜索（LRS）

LRS（远距搜索）用于在尚未锁定目标时搜索远距离空中目标，了解目标相对本机的方位和距离，为后续截获与跟踪提供参考。通常可将 VSD 显示范围设为 **40～80 海里**，以观察较远区域的雷达回波；这里指的是显示范围，并不表示雷达对所有目标都能达到这一探测距离。

使用 LRS 时，需要结合预期目标位置调整天线俯仰和方位扫描范围，使搜索区域覆盖目标可能出现的空域。发现需要跟踪的回波后，可用[截获门](#lrs-item-9)框住它并发起手动截获，成功后进入 STT 单目标跟踪模式。因此，LRS 主要解决“目标在哪里”的问题，精确跟踪则由后续跟踪模式完成。

显示区横向表示方位，纵向表示距离，越靠上表示距离越远。

点击一次 Touch UI 的 **AA（自动截获）按钮**，即可从雷达待机状态进入 LRS；再点击一次，则返回待机状态。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="Touch UI AA 自动截获按钮">

按钮的其他操作见 [Touch UI：自动截获开关](/zh/Docs/aircraft/f15c/touch-ui.html#item-28)。

### 扫描行数

首次点击 AA 按钮开始 LRS 搜索后，默认采用 **120° 方位范围、6 行扫描**。

“行”（bar）是指天线在一个俯仰位置上的横向扫描。多行扫描通过在不同俯仰位置逐行扫描来覆盖一定的高度范围；6 行扫描就是依次完成 6 行扫描。相邻扫描行之间的间隔称为行距，行距会随搜索距离范围变化，并不是固定值。

如需更改 LRS 的扫描行数，可打开 [Touch UI 的“1. 功能面板”](/zh/Docs/aircraft/f15c/touch-ui.html#item-1)，在 **MAIN 页面**选择扫描行数。

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="VSD 远距搜索（LRS）模式，标注编号 1–15">
</a>

点击图片可查看原始分辨率大图，点击下方编号可跳转到对应解释。

<a id="lrs-index"></a>

### 符号编号

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 雷达回波</a>
  <a href="#lrs-item-2">2 高度覆盖</a>
  <a href="#lrs-item-3">3 天线俯仰指示</a>
  <a href="#lrs-item-4">4 回波历史</a>
  <a href="#lrs-item-5">5 扫描条带与 PRF</a>
  <a href="#lrs-item-6">6 截获门的牛眼坐标</a>
  <a href="#lrs-item-7">7 本机地速</a>
  <a href="#lrs-item-8">8 VSD 最远显示范围</a>
  <a href="#lrs-item-9">9 截获门</a>
  <a href="#lrs-item-10">10 本地地平线参考</a>
  <a href="#lrs-item-11">11 牛眼参考点</a>
  <a href="#lrs-item-12">12 3 号导航点</a>
  <a href="#lrs-item-13">13 天线方位指示</a>
  <a href="#lrs-item-14">14 方位扫描边界</a>
  <a href="#lrs-item-15">15 本机真空速</a>
</div>

<a id="lrs-item-1"></a>

### 1. 雷达回波

绿色短横块表示搜索探测到的回波。它的位置提供方位和距离参考，本身不表示已经锁定，也不能仅凭这种形状判断敌我。

[返回编号索引](#lrs-index)

<a id="lrs-item-2"></a>

### 2. 高度覆盖

左侧两个圆圈及数字表示截获门所在距离处的扫描高度上下限，单位为千英尺。图中 `29` 和 `-2` 对应约 29,000 至 -2,000 英尺；负值是扫描几何范围的读数，不表示存在地下目标。改变截获门距离或天线俯仰时，需要重新读取覆盖范围。

[返回编号索引](#lrs-index)

<a id="lrs-item-3"></a>

### 3. 天线俯仰指示

左侧标尺上的尖括号指示天线俯仰方向。它与编号 2 的高度覆盖读数配合使用，不是目标高度标记。

左侧标尺由 6 个刻度分段，表示雷达向上 60° 至向下 60° 的扫描角度范围。读取天线俯仰角时，按尖括号在这组刻度上的位置判断：中间为 0°，向上为正俯仰角，向下为负俯仰角。

使用天线 **ELE 旋钮**控制天线俯仰。触控操作使用下图中的天线俯仰控件，调整时观察左侧尖括号的位置和高度覆盖读数。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="Touch UI 天线俯仰控件">

控件说明见 [Touch UI：天线俯仰](/zh/Docs/aircraft/f15c/touch-ui.html#item-25)。

[返回编号索引](#lrs-index)

<a id="lrs-item-4"></a>

### 4. 回波历史

回波历史保留之前扫描到的位置，可用于观察回波的位置变化。读取连续短横块时，需要区分历史位置与当前回波，不能把每一块都当作独立目标。

[返回编号索引](#lrs-index)

<a id="lrs-item-5"></a>

### 5. 扫描条带与 PRF

`6HI` 是扫描条带和脉冲重复频率（PRF）状态读数，其中 `HI` 表示高 PRF。

[返回编号索引](#lrs-index)

<a id="lrs-item-6"></a>

### 6. 截获门的牛眼坐标

这里显示的是[截获门（编号 9）](#lrs-item-9)所在位置的牛眼坐标，以 Bullseye（牛眼）为统一参考点，给出方位与距离。图中 `310-12` 表示截获门位于牛眼的 310° 方向、距离牛眼 12 海里。

未来联机时，可使用这个坐标与队友沟通目标位置。将截获门移到需要报告的位置后，即可读取相应的牛眼坐标。

[返回编号索引](#lrs-index)

<a id="lrs-item-7"></a>

### 7. 本机地速

`G 589` 表示本机地速为 589 节，即相对于地面的速度。

[返回编号索引](#lrs-index)

<a id="lrs-item-8"></a>

### 8. VSD 最远显示范围

右上角 `80` 表示 VSD 当前最远显示范围为 80 海里。它是显示范围，不是某个目标的距离，也不代表雷达的最大探测距离。

通过移动[截获门](#lrs-item-9)越过视图边界，可调整显示距离：

- 向上移动截获门，超过视图顶部：增大最远显示范围。
- 向下移动截获门，超过视图底部：缩小最远显示范围。

[返回编号索引](#lrs-index)

<a id="lrs-item-9"></a>

### 9. 截获门

两条竖线组成截获门，用于选择显示区中的位置或原始回波。截获门所在距离也用于读取编号 2 的高度覆盖。

使用 Touch UI 右侧的 **Cursor（TDC 游标控制）按钮**移动截获门，对应控件如下图。截获门越过视图边界时，还可调整[显示距离](#lrs-item-8)和[方位扫描范围](#lrs-item-14)。

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Touch UI 右侧 Cursor 游标控制按钮">

控件说明见 [Touch UI：Cursor](/zh/Docs/aircraft/f15c/touch-ui.html#item-18)。

手动截获目标的操作：

1. 移动截获门，框住一个原始雷达回波。
2. 双击 Touch UI 右侧的 Cursor（TDC 游标控制）按钮，发起手动截获。
3. 截获成功后，雷达自动进入 **STT（单目标跟踪）模式**，锁定并跟踪该目标。

[返回编号索引](#lrs-index)

<a id="lrs-item-10"></a>

### 10. 本地地平线参考

带下折端点的横线是本地地平线参考。它位于画面中部时表示飞机正在平飞，其旋转反映飞机的滚转。观察雷达时，可通过这条线保持对本机姿态的参考。

[返回编号索引](#lrs-index)

<a id="lrs-item-11"></a>

### 11. 牛眼参考点

Bullseye（牛眼）是报告方位和距离时使用的统一参考点。截获门的牛眼坐标读法见[编号 6](#lrs-item-6)。

[返回编号索引](#lrs-index)

<a id="lrs-item-12"></a>

### 12. 3 号导航点

箭头指向 3 号导航点。空心三角表示导航点的位置，旁边的 `3` 是导航点编号。

[返回编号索引](#lrs-index)

<a id="lrs-item-13"></a>

### 13. 天线方位指示

底部尖角形标记指示天线当前扫描方位，应与旁边的圆形边界标记区分。它表示天线指向，不是目标航向。

扫描时，这个符号会随天线扫描左右移动，实时反映天线当前的方位。

[返回编号索引](#lrs-index)

<a id="lrs-item-14"></a>

### 14. 方位扫描边界

底部左右两个圆形标记表示方位扫描边界，箭头指向右侧边界。两者界定扫描宽度，不是两架目标。

通过移动[截获门](#lrs-item-9)越过视图左右边界，可调整方位扫描范围：

- 向左移动截获门，超过视图左侧边界：缩小方位扫描范围。
- 向右移动截获门，超过视图右侧边界：放大方位扫描范围。

方位扫描范围最大为 **120°**，最小为 **10°**。这里调整的是方位扫描宽度，与编号 8 的显示距离不同。

[返回编号索引](#lrs-index)

<a id="lrs-item-15"></a>

### 15. 本机真空速

`T 589` 表示本机真空速为 589 节，即相对于周围空气的速度。它与编号 7 的地速是不同参数，即使本图中读数相同，也不能混用。

[返回编号索引](#lrs-index)

## 单目标跟踪（STT）

STT（Single Target Track，单目标跟踪）集中跟踪一个目标，持续提供目标位置、运动状态及武器解算所需的数据。在 LRS 中，用截获门框住原始回波并双击 Touch UI 右侧的 Cursor 按钮，截获成功后便会自动进入 STT。具体操作见[截获门](#lrs-item-9)。

与 LRS 的区域搜索不同，STT 主要用于维持选定目标的跟踪。它可为机炮瞄准和导弹使用提供目标数据；本游戏中的 AIM-7 要求在 STT 下发射，发射后仍需雷达照射支持。STT 也可支持 AIM-120，但不能把两种导弹的制导要求混用。

STT 跟踪会触发敌机的雷达锁定告警。距离较近时，目标可能投放箔条干扰，或执行 Notch（多普勒缺口）机动，试图摆脱锁定或干扰本机的发射条件。因此，进入 STT 后仍需持续观察目标机动、跟踪状态和动态发射区的变化。

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="图 1：AIM-7 的 VSD 单目标跟踪（STT）显示，标注编号 1–14">
</a>

图 1：目标位于最大射程之外，ASE 环处于缩小状态。

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 目标真空速</a>
  <a href="#stt-item-2">2 H/T 标识与目标航向</a>
  <a href="#stt-item-3">3 目标高度读数</a>
  <a href="#stt-item-4">4 PDT 主目标</a>
  <a href="#stt-item-5">5 转向点</a>
  <a href="#stt-item-6">6 ASE 圆</a>
  <a href="#stt-item-7">7 目标接近率</a>
  <a href="#stt-item-8">8 目标距离指示</a>
  <a href="#stt-item-9">9 Rmax 最大射程</a>
  <a href="#stt-item-10">10 优化的最大射程</a>
  <a href="#stt-item-11">11 RTR 射程参考</a>
  <a href="#stt-item-12">12 最小射程</a>
  <a href="#stt-item-13">13 导弹时间读数</a>
  <a href="#stt-item-14">14 目标方位与距离</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="图 2：AIM-7 的 STT 显示，目标朝向为 13L，标注编号 15–17">
</a>

图 2：目标进入最大射程以内，ASE 环开始放大。

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 目标朝向角</a>
  <a href="#stt-item-16">16 放大的 ASE 圆</a>
  <a href="#stt-item-17">17 图 2 的目标距离与接近率</a>
</div>

点击图片可查看原始分辨率大图，点击各图下方编号可跳转到对应解释。两张图例均选中了 **AIM-7 导弹**。距离网格、本地地平线参考和导航点等共用符号可参考前面的 LRS 部分；图 1 右上角 `40` 表示 VSD 最远显示范围为 40 海里，图 2 的 `20` 表示 20 海里。

<a id="stt-item-1"></a>

### 1. 目标真空速

顶部左侧的 `397` 表示目标真空速为 397 节，不是本机速度。图 2 同一位置的 `577` 表示目标真空速为 577 节。

[返回编号索引](#stt-index)

<a id="stt-item-2"></a>

### 2. H/T 标识与目标航向

`H` 表示 **HOT**，意味着目标正以机头朝向本机；面对敌机时，这是一种危险态势。目标背对本机时显示 `T`。这组标识描述目标相对本机的朝向，不是敌我识别结果。

后面的 `313` 表示目标航向为 313°，不是本机航向。H/T 与航向需要区分：前者描述目标相对本机的朝向，后者给出目标航向的数值。带左右方向的朝向角读法见[编号 15](#stt-item-15)。

[返回编号索引](#stt-index)

<a id="stt-item-3"></a>

### 3. 目标高度读数

左侧 `13-4` 表示目标高度为 13,400 英尺 MSL，即相对于平均海平面的高度。

[返回编号索引](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT 主目标

五角星代表 PDT（Primary Designated Target，主指定目标），在方位—距离显示区中标出其位置。五角星前方的长线表示目标的速度方向。

[返回编号索引](#stt-index)

<a id="stt-item-5"></a>

### 5. 转向点

箭头所指的亮点是转向点。发射导弹时，用编号 6 的 ASE 圆套住转向点，可以减少导弹发射后所需的转弯，节省导弹能量。这里的显示逻辑与 HUD 相同，详见 [HUD 的转向点说明](/zh/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2)。

[返回编号索引](#stt-index)

<a id="stt-item-6"></a>

### 6. ASE 圆

圆形符号是允许转向误差（ASE）参考。只有当 ASE 圆放大后，才表示开始满足发射条件；在缩小状态下，即使转向点位于圆内，也不能据此判断可以发射。

ASE 圆放大后，仍需结合转向点、射程和所选导弹的制导要求判断。这里的显示逻辑与 HUD 相同，详细含义见 [HUD 的 ASE 说明](/zh/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1)。

[返回编号索引](#stt-index)

<a id="stt-item-7"></a>

### 7. 目标接近率

`1006` 表示本机与目标之间的接近率，单位为节。它描述双方距离变化的快慢，不是目标自身的飞行速度。

[返回编号索引](#stt-index)

<a id="stt-item-8"></a>

### 8. 目标距离指示

右侧的 `>` 标记指示目标在当前距离标尺上的位置。读取时应结合右上角的 `40` 海里量程；旁边的 `1006` 是接近率，不是距离。

[返回编号索引](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax 最大射程

第一条（最上方）短横线是 Rmax（最大射程）标记，表示当前解算条件下的最大射程。

[返回编号索引](#stt-index)

<a id="stt-item-10"></a>

### 10. 优化的最大射程

第二条短横线表示优化的最大射程。

[返回编号索引](#stt-index)

<a id="stt-item-11"></a>

### 11. RTR 射程参考

右侧长方框的上端是 RTR（Range Turn and Run）标记，即考虑目标转向逃离后的射程参考，通常称为不可逃逸射程。它表示相对有利的发射条件，不保证命中。

[返回编号索引](#stt-index)

<a id="stt-item-12"></a>

### 12. 最小射程

长方框下端是 RMin（最小射程）标记。应将目标距离指示与这个标记比较，而不是把接近目标本身理解为发射条件一定更好。

编号 9、10、11、12 的射程标记共同组成 DLZ（动态发射区）。它不是固定的，会受到本机高度、双方高度差、目标飞行方向、目标速度、本机速度等多种因素影响，并随当前条件变化。

因此，发射武器前需要综合评估。在尽力保证本机安全、同时满足最小射程限制的前提下，应尽可能接近目标再发射。

[返回编号索引](#stt-index)

<a id="stt-item-13"></a>

### 13. 导弹时间读数

`53SEC` 表示：如果现在发射导弹，预计将在 53 秒后命中目标。这个时间是基于双方当前运动态势计算的结果，不是已经发射后的倒计时。

只有目标在发射后不转弯并保持当前运动状态，这个预计时间才准确；如果目标改变航向或速度，实际命中时间也会变化。

[返回编号索引](#stt-index)

<a id="stt-item-14"></a>

### 14. 目标方位与距离

右下角 `129-21` 表示以本机为参考的目标方位角和距离：目标方位为 129°，距本机 21 海里。方位角单位为度，距离单位为海里。不要与牛眼坐标混用。

[返回编号索引](#stt-index)

<a id="stt-item-15"></a>

### 15. 目标朝向角

图 2 的 `13L` 表示目标机头以 130° 向左朝向；若显示 `13R`，则表示以 130° 向右朝向。数字以十度为单位，`L` 和 `R` 分别表示左、右。

这是目标相对本机的朝向角，不是航向 130°。同一行后面的 `351` 才表示目标航向为 351°，应与[编号 2 的 H/T 标识及航向](#stt-item-2)结合阅读。

[返回编号索引](#stt-index)

<a id="stt-item-16"></a>

### 16. 放大的 ASE 圆

图 1 中目标位于最大射程之外，ASE 环处于缩小状态；图 2 中目标进入当前计算的最大射程以内，ASE 环开始放大。其作用仍与[编号 6](#stt-item-6)相同，需要结合转向点和射程标记判断。图例选择的是 AIM-7，ASE 放大并不取消维持雷达跟踪和照射的要求。

[返回编号索引](#stt-index)

<a id="stt-item-17"></a>

### 17. 图 2 的目标距离与接近率

箭头指向右侧的目标距离指示 `>`，它与图 1 的[编号 8](#stt-item-8)是同一类符号。图 2 应按 20 海里的最远显示范围读取其位置，不能沿用图 1 的 40 海里量程。

旁边的 `915` 表示目标接近率为 915 节，读法与[编号 7](#stt-item-7)相同。

[返回编号索引](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="STT 进入 RTR，VSD 底部出现三角形发射提示">
    </a>
    <figcaption>图 3 · 进入 RTR：三角发射提示</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="STT 目标距离小于最小发射射程，VSD 中央出现交叉的 Break X 提示">
    </a>
    <figcaption>图 4 · 小于最小射程：Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### 图 3 · 进入 RTR：三角发射提示

目标进入 RTR（不可逃逸射程）后，VSD 底部会出现三角形，提示当前具备有利的发射条件。图中三角形位于底部中央、`8SEC` 时间读数左侧。

发射前仍需结合 ASE、转向点和最小射程判断，并保持 AIM-7 所需的雷达跟踪与照射支持。三角提示不代表必然命中。

[返回编号索引](#stt-index)

<a id="stt-break-x"></a>

### 图 4 · 小于最小射程：Break X

当目标距离小于最小发射射程时，VSD 中央出现交叉的 **Break X** 标志，提示不能发射。

距离过近时，导弹可能来不及加速到所需速度；即使命中目标，本机的飞行路径也可能穿过爆炸破片区域。因此，不能仅因目标已经锁定或距离很近就发射，必须注意最小射程限制。

[返回编号索引](#stt-index)

## 边扫描边跟踪（TWS）

TWS（边扫描边跟踪）在继续扫描的同时维护多个目标航迹，主要工作在 40 海里以内，主要服务于 AIM-120 导弹的使用。

为了提供较高的目标刷新率，TWS 会限制扫描行数和方位扫描范围的组合。方位范围越宽，可使用的扫描行数越少；选择方位扫描范围后，系统会自动匹配扫描行数，无需单独选择。

| 方位扫描范围 | 自动匹配的扫描行数 |
| --- | --- |
| 60° | 2 行 |
| 30° | 4 行 |
| 15° | 6 行 |

### 进入 TWS

可以通过以下两种方式进入 TWS：

1. **已锁定目标时：** 在 STT 单目标跟踪状态下，将 AA（自动截获）按钮向下拨动，即可进入 TWS。
2. **未锁定目标时：** 将截获门移到没有目标回波的空白处，双击 TDC（Touch UI 右侧的 Cursor 按钮）发起手动截获，同时迅速将 AA 按钮向下拨动，即可进入 TWS。

控件位置见 [Touch UI：Cursor](/zh/Docs/aircraft/f15c/touch-ui.html#item-18)和 [Touch UI：自动截获开关](/zh/Docs/aircraft/f15c/touch-ui.html#item-28)。

TWS 在跟踪目标的同时仍需扫描其他空域，因此单个目标的刷新率低于 STT；距离较远时，雷达分辨率也有限。如果目标执行高过载机动、投放箔条（chaff）干扰，或原本被识别为一个目标的编队突然散开，雷达可能无法将新回波与已有航迹正确关联，导致关联失败并丢失跟踪。

### 退出 TWS

- **已有 PDT 时：** 使用 **AA Down（AA 开关向下拨动）**，转为对当前 PDT 的 STT 单目标跟踪，并丢弃其他所有跟踪档案。
- **没有 PDT 时：** 点击一次 **AA 按钮**，退出 TWS，返回 LRS 远距搜索模式。

### 目标航迹分类

TWS 中需要区分未指定目标、首要指定目标和次要指定目标。以下数量说明适用于本游戏。

进入 TWS 后，雷达会对扫描到的目标自动建立跟踪档案。刚扫描到目标时，先以不带速度矢量的正方形显示；随着后续扫描积累足够信息并建立跟踪档案，目标符号才会出现速度矢量。

| 类别 | 含义 | 支持数量 |
| --- | --- | --- |
| NDT（Non-designated Target） | 未指定目标，尚未被选为首要指定目标或次要指定目标 | 最多 16 个 |
| PDT（Primary Designated Target） | 首要指定目标，当前主要关注和交战的目标 | 同时 1 个 |
| SDT（Secondary Designated Target） | 次要指定目标，可供后续选择和交战 | 最多 7 个 |

这些类别表示目标的指定状态，不是敌我识别结果。没有 PDT 时为 NDTWS；已有 PDT 时为 DTWS。

<a id="tws-designation"></a>

### 指定与切换 PDT

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="Touch UI 的 Coolie 开关">

目标建立跟踪档案后，可通过 **Coolie Up（Coolie 开关向上拨动）**指定目标：

- **自动指定：** 使用 Coolie Up，系统会自动指定一个 PDT，并指定 SDT。
- **循环切换：** 再次使用 Coolie Up，会在各个 SDT 中循环选择新的 PDT。
- **手动指定：** 用截获门套住需要选择的 NDT 或 SDT，再使用 Coolie Up，将门内目标指定为 PDT。

同一时刻只能有一个 PDT。已有 PDT 时，若将其他目标指定为 PDT，原来的 PDT 会自动降为 SDT。

使用 **Coolie Down（Coolie 开关向下拨动）**，可取消所有指定目标，将 PDT 和 SDT 恢复为 NDT，返回未指定目标的 NDTWS 模式。

控件位置见 [Touch UI：Coolie 开关](/zh/Docs/aircraft/f15c/touch-ui.html#item-26)。

### AIM-120 多目标交战

在 TWS 模式下，只能针对当前 PDT 发射武器。AIM-120 支持同时攻击多个目标，但需要逐个切换 PDT 并发射：

1. 对当前 PDT 发射 AIM-120。
2. 使用 Coolie Up 循环选择，或用截获门配合 Coolie Up 手动指定下一个 PDT。
3. 对新的 PDT 再次发射 AIM-120。

原目标从 PDT 降为 SDT 后，数据链仍可继续为此前发射的导弹提供目标信息更新。切换 PDT 并不意味着停止支持上一枚导弹，仍需维持相关目标的跟踪。

<a id="tws-ndt-index"></a>

### 图 1 · 未指定目标

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="TWS 未指定目标显示：编号 1 为无方向向量的目标符号，2 为带方向向量的 NDT，3 为 TWS 状态读数">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 尚未建立跟踪档案的目标</a>
  <a href="#tws-ndt-item-2">2 NDT 未指定目标</a>
  <a href="#tws-ndt-item-3">3 TWS 状态读数</a>
</div>

点击图片可查看原始分辨率大图，点击下方编号可跳转到对应解释。

<a id="tws-ndt-item-1"></a>

#### 1. 尚未建立跟踪档案的目标

箭头指向刚扫描到的目标，以实心正方形显示，此时尚未积累足够信息建立跟踪档案，因此没有速度矢量。后续扫描建立跟踪档案后，才会出现编号 2 所示的速度矢量。

[返回图 1 编号索引](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT 未指定目标

实心目标符号及其速度矢量表示已建立跟踪档案的 NDT（未指定目标），线段提供目标的运动方向参考。跟踪档案由雷达在扫描过程中自动建立，无需手动指定；该目标尚未被指定为 PDT 或 SDT。本游戏最多支持 16 个 NDT。

[返回图 1 编号索引](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. TWS 状态读数

左下角的 `2TWSM` 是雷达工作状态读数。其中 `TWS` 表示边扫描边跟踪，`M` 表示中脉冲重复频率（MPRF），前面的数字是扫描条带指示。

[返回图 1 编号索引](#tws-ndt-index)

<a id="tws-designated-index"></a>

### 图 2 · 首要指定目标与次要指定目标

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="TWS 指定目标显示：编号 1 为 SDT，2 为 PDT，3 为截获门内目标的高度，4 为 AIM-120 激活距离">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT 次要指定目标</a>
  <a href="#tws-designated-item-2">2 PDT 首要指定目标</a>
  <a href="#tws-designated-item-3">3 截获门内目标的高度</a>
  <a href="#tws-designated-item-4">4 AIM-120 激活距离</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT 次要指定目标

空心目标符号及其方向向量表示 SDT（次要指定目标）。它是已经指定、但当前不是 PDT 的目标。本游戏最多支持 7 个 SDT。

[返回图 2 编号索引](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT 首要指定目标

五角星表示 PDT（首要指定目标），前方长线表示目标的速度方向。图中截获门位于该目标处。PDT 是当前主要关注和交战的目标，VSD 上的目标数据及武器解算围绕它显示。

同一时刻只有一个 PDT；其他已指定目标作为 SDT 保留。PDT 与 SDT 的区别在于指定优先级，不表示其中一个目标已被 STT 锁定。

[返回图 2 编号索引](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. 截获门内目标的高度

外侧的小方块表示截获门内目标的高度位置。通过它与扫描天花板、地板的位置关系，可以判断当前扫描高度范围是否覆盖该目标：小方块位于两者之间时表示覆盖；超出上下限时，应调整天线俯仰。

从原始回波到 NDT、SDT 或 PDT，只要用截获门套住，就能查看门内目标或回波的高度。

[返回图 2 编号索引](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. AIM-120 激活距离

箭头指向右侧射程标尺上的空心圆，表示 AIM-120 的激活距离。如果目标距离小于这个圆圈所表示的距离，AIM-120 一经发射就会激活自身雷达，主动捕获目标。

[返回图 2 编号索引](#tws-designated-index)

### 进入射程与 RTR 的提示

点击图片可查看原始分辨率大图。

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="TWS 目标进入射程，虚线 ASE 圆环放大">
    </a>
    <figcaption>图 3 · 进入射程：虚线 ASE 圆环放大</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="TWS 目标进入 RTR，底部中央显示六角星发射提示">
    </a>
    <figcaption>图 4 · 进入 RTR：六角星与 ASE 闪烁提示</figcaption>
  </figure>
</div>

**图 3：** 目标进入导弹射程后，虚线 ASE 圆环开始放大，表示开始满足发射条件。

**图 4：** 目标进入 RTR 后，VSD 底部中央出现六角星，同时 ASE 圆环闪烁，提示当前具有较好的发射条件。图中截取了 ASE 闪烁时未显示圆环的瞬间。

### 发射后的导弹支持

在 TWS 模式下发射 AIM-120 后，雷达继续维护目标的跟踪档案，并通过数据链向导弹提供目标信息更新。发射后仍需关注目标的跟踪状态，尤其是在导弹尚未激活自身雷达、主动捕获目标之前。

**切换 PDT 不会自动中断对上一枚导弹的支持。** 对当前 PDT 发射后，可以指定下一个 PDT 并继续发射。原来的 PDT 降为 SDT 后，只要其跟踪档案仍被维持，数据链就可以继续为已发射的导弹提供目标更新。

支持多枚导弹时，需要让相关目标保持在雷达扫描覆盖范围内。如果目标机动、干扰或超出扫描范围导致跟踪丢失，就无法继续提供该目标的最新跟踪数据。转入 STT 会丢弃其他目标的跟踪档案，因此切换模式前，也要考虑对其他已发射导弹的支持。

AIM-120 激活自身雷达后，会主动捕获目标。若发射时目标已经位于[激活距离](#tws-designated-item-4)以内，导弹一经发射就会激活自身雷达，主动捕获目标。

<a id="tws-missile-support-index"></a>

点击图片可查看原始分辨率大图，点击下方编号可跳转到对应解释。

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="TWS 发射后的导弹支持：编号 1 为激活进度标记，2 为已发射导弹的小点，3 为导弹激活剩余时间">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 激活进度标记</a>
  <a href="#tws-missile-support-item-2">2 已发射导弹标记</a>
  <a href="#tws-missile-support-item-3">3 导弹激活剩余时间</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. 激活进度标记

箭头指向线段上的短横标记。发射后，该标记会持续向编号 2 的小点移动；当它移动到小点处时，表示按发射时条件计算，导弹应已激活自身雷达，开始主动搜索目标。

[返回编号索引](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. 已发射导弹标记

这个小点表示已经针对该目标发射了一枚 AIM-120，并且正在为该导弹提供数据链支持。它同时也是编号 1 的移动标记到达激活时刻的参考位置。

[返回编号索引](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. 导弹激活剩余时间

右上方的 `A 9` 表示预计还有 9 秒，导弹将激活自身雷达并开始主动搜索目标。该倒计时与编号 1 的移动标记共同提供导弹激活进度参考。

[返回编号索引](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### 导弹激活后的显示

导弹激活后，右上方的 **A 倒计时变为 T 倒计时**，表示导弹与目标预计交汇的剩余时间。图中的 `T 17` 表示预计再过 17 秒，导弹将与目标交汇并命中。

点击图片可查看原始分辨率大图，点击下方编号可跳转到对应解释。

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="TWS 导弹激活后的显示：编号 1 为导弹已激活标记，2 为向目标五角星移动的 X 标记，右上方显示 T 17">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 导弹已激活标记</a>
  <a href="#tws-missile-active-item-2">2 导弹飞行进度标记</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. 导弹已激活标记

编号 1 指向的标记表示，针对该目标发射的导弹已经激活自身雷达，开始主动搜索目标。

[返回编号索引](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. 导弹飞行进度标记

这个 X 标记会持续向代表目标的五角星移动，表示导弹正在飞向目标，并会在预先计算的交汇时刻到达五角星的位置。

这些时间和进度提示依据发射时的条件计算。若目标随后采取机动或反制措施，导弹的实际飞行时间通常会比预估时间更长。因此，倒计时结束或 X 标记到达五角星只表示预计交汇时刻已到，不代表已经确认命中。

[返回编号索引](#tws-missile-active-index)

## 近距自动捕获与 Flood 模式

在近距自动捕获与 Flood 模式下，天线扫描或照射的基准是**飞机纵轴**，随本机姿态变化；前面的 LRS 和 TWS 模式则以**云台维持的水平面**为天线扫描基准。

自动捕获模式主要用于 **WVR（视距内空战）**。除远距离孔径模式可以锁定 **40 海里以内**的目标外，其他自动捕获模式均工作在 **10 海里范围内**。

### 模式选择

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="AA 自动截获开关">

将 **AA（自动截获）按钮向上拨动**，可依次进入以下模式：

1. 第一次：**SS（超级搜索）模式**。
2. 第二次：**VS（垂直扫描）模式**。
3. 第三次：**孔径模式**。
4. 第四次：**长距离孔径模式**。

将 **AA 按钮向上长按**，则进入 **Flood 模式**。

### SS 超级搜索模式

第一次将 AA 按钮向上拨动，进入 SS（Supersearch，超级搜索）模式。HUD 上的大圆表示 **20° 搜索范围**；将目标置于搜索范围内，雷达便可自动捕获 **10 海里内**的目标。

使用雷达天线俯仰控制，可使搜索范围向上或向下偏移最多 **10°**。下图依次显示居中、上移和下移时的 HUD 搜索圆；偏移后，圆圈可能有一部分超出 HUD 显示范围。

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS 超级搜索：搜索圆居中" loading="lazy">
    <figcaption>居中</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS 超级搜索：搜索范围向上偏移 10°" loading="lazy">
    <figcaption>向上偏移 10°</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS 超级搜索：搜索范围向下偏移 10°" loading="lazy">
    <figcaption>向下偏移 10°</figcaption>
  </figure>
</div>

### 垂直扫描

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="VS 垂直扫描：HUD 上方向上的垂直扫描指示线" loading="lazy">
  <figcaption>VS 垂直扫描</figcaption>
</figure>

垂直扫描搜索机头上方狭长区域，适合合并后目标穿过机头上方时使用。

### 孔径模式

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="BST 孔径模式：HUD 中央的孔径搜索圆" loading="lazy">
  <figcaption>BST 孔径模式</figcaption>
</figure>

孔径模式搜索机头前方窄圆锥，锁定第一个进入范围的目标。

### 远距离孔径模式

LR BST（远距离孔径模式）的使用方式与孔径模式类似，但 HUD 搜索圆更小，自动锁定距离上限增加到 **40 海里**。将目标保持在小圆内，雷达便可自动捕获目标。

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="LR BST 远距离孔径模式：HUD 中央较小的搜索圆" loading="lazy">
  <figcaption>LR BST 远距离孔径模式</figcaption>
</figure>

### Flood 泛指模式

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood 泛指照射模式：HUD 照射圆与 FLOOD 提示" loading="lazy">
  <figcaption>Flood 模式下的 HUD</figcaption>
</figure>

泛指模式为 AIM-7 提供宽波束照射，目标必须保持在泛指圆内直到导弹命中。

进入 Flood 模式后，VSD 显示如下：左上方出现 `FLOOD` 标识，距离网格不再显示，画面保留本地地平线参考、截获门和导航点等符号。

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood 模式下的 VSD：左上方显示 FLOOD，保留本地地平线参考、截获门及导航点">
  </a>
  <figcaption>Flood 模式下的 VSD（点击查看原图）</figcaption>
</figure>

## 实用流程

1. 以 LRS 建立远距态势。
2. 根据目标高度调整天线俯仰。
3. 多目标排序时使用 TWS。
4. 需要稳定照射或近距精确锁定时使用 STT。
5. 交汇后改用自动捕获模式。
