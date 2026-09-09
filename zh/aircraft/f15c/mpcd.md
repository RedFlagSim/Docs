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

多功能彩色显示器（MPCD）目前实现两个页面：<strong>SIT（态势感知显示器）</strong>和 **AA（空对空武器页面）**。**默认显示 SIT 页面。**

SIT 汇集任务信息、数据链报告和本机雷达获取的跟踪；AA 用于查看飞机挂载、选中的挂架、机炮弹药和对抗措施数量。

<a id="mpcd-index"></a>

## 页面索引

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 SIT 显示与符号</a>
  <a href="#sit-mission">2 任务信息与显示控制</a>
  <a href="#sit-modes">3 游标控制与显示模式</a>
  <a href="#sit-friendly">4 友机与牛眼</a>
  <a href="#sit-workflow">5 SIT 与 VSD 配合使用</a>
  <a href="#mpcd-aa">6 AA 空对空武器页面</a>
</div>

点击显示器截图可查看原始分辨率大图。各处编号说明均对应当前图片中的标注。

<a id="mpcd-sit"></a>

## SIT 显示与符号

SIT 以俯视方式显示战术态势，包括飞机、飞行计划路点、地理围栏和距离参考。

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="SIT 显示总览，标注编号 1–13" /></a>
  <figcaption>SIT 显示总览。此例中的目标截获门正在跟随 VSD 游标。</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### 符号编号

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 Zulu 时间</a>
  <a href="#sit-item-2">2 罗盘</a>
  <a href="#sit-item-3">3 数据链信息</a>
  <a href="#sit-item-4">4 半量程距离环</a>
  <a href="#sit-item-5">5 武器信息</a>
  <a href="#sit-item-6">6 地理围栏</a>
  <a href="#sit-item-7">7 显示距离</a>
  <a href="#sit-item-8">8 游标相对本机的坐标</a>
  <a href="#sit-item-9">9 SAM 攻击范围</a>
  <a href="#sit-item-10">10 飞行计划路点</a>
  <a href="#sit-item-11">11 目标截获门</a>
  <a href="#sit-item-12">12 对抗措施数量</a>
  <a href="#sit-item-13">13 游标相对牛眼的坐标</a>
</div>

<a id="sit-item-1"></a>

### 1. Zulu 时间

左上角显示 Zulu 时间（UTC）。图中的 `23:00:51Z` 表示 Zulu 时间 23 时 00 分 51 秒。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. 罗盘

罗盘提供本机周围的方位参考，可结合方向刻度读取目标方位。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. 数据链信息

红色符号是一队由数据链报告的敌机。符号使用**虚线轮廓**，表示这些信息来自数据链。从数据链报告到关联雷达跟踪的过程，见 [SIT 与 VSD 配合使用](#sit-workflow)。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. 半量程距离环

白色内圆表示[编号 7](#sit-item-7) 所示显示距离的一半。此中心显示视图的距离为 `80` 海里，因此内圆表示距本机 40 海里。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. 武器信息

左下角集中显示武器信息。[AA 页面](#mpcd-aa)进一步按挂架位置显示对应的挂载情况。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. 地理围栏

虚线多边形是任务中设置的地理围栏（Geofence），用于将当前态势与[任务编辑器](#sit-mission)中定义的区域对应起来。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. 显示距离

在此中心显示视图中，右上角的 `80` 表示**从本机到罗盘顶部的距离为 80 海里**。切换到 [Decenter 模式](#sit-decenter)后，本机在画面中的位置会改变，具体距离参考见下方示例。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. 游标相对本机的坐标

青色读数表示游标相对于本机的方位和距离。`092-22` 表示游标位于本机 092° 方位、22 海里处。该读数随[编号 11](#sit-item-11) 的目标截获门位置变化。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. SAM 攻击范围

红色圆圈表示地对空导弹（SAM）的攻击范围，也属于一种地理围栏。示例中的圆圈带有 `MEZ` 标记，是 Missile Engagement Zone（导弹攻击范围）的缩写。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. 飞行计划路点

黄色路点符号及其连线表示本飞行小队的飞行计划路点序列。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. 目标截获门

两条青色竖线组成游标，也称目标截获门。**虚线**表示 SIT 的目标截获门正在跟随 VSD 游标；将游标控制权交给 SIT 后，截获门变为**实线**，TDC 可直接控制 SIT 游标。操作方法见[游标控制与显示模式](#sit-modes)。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. 对抗措施数量

绿色 `C 120` 和 `F 60` 分别表示剩余 120 份箔条和 60 枚红外干扰弹。

[返回编号索引](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. 游标相对牛眼的坐标

黄色读数表示游标相对于公共参考点<strong>牛眼（Bullseye）</strong>的方位和距离。`121-30` 表示游标位于牛眼 121° 方位、30 海里处。右上角的青色坐标则以本机为参考点。

[返回编号索引](#sit-symbol-index)

<a id="sit-mission"></a>

## 任务信息与显示控制

### 来自任务编辑器的信息

SIT 中的大部分信息来自你在任务编辑器中配置的内容。上例中的飞行计划路点序列和地理围栏，可以与下方的任务设置直接对照。

请根据你的设备性能配置任务。过多的单位会消耗更多计算资源和内存。

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="任务编辑器中的飞行计划路点、牛眼、飞机和地理围栏" loading="lazy" /></a>
  <figcaption>任务编辑器中的设置构成了 SIT 显示的任务背景。</figcaption>
</figure>

任务设置方法见 [Tac 编辑器](/zh/Docs/basics/tac-editor.html)。

### 控制 SIT 显示的内容

打开 [Touch UI 功能面板](/zh/Docs/aircraft/f15c/touch-ui.html#item-1)，选择 **MAIN 页面**。其中的 **SIT** 一栏用于控制显示内容，以及显示距离是否跟随 VSD。

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="MAIN 功能面板中的 SIT 控件，WP、DLK、AUTO RANGE 和 GEO FENCE 标注为 1–4" loading="lazy" /></a>
</figure>

| 编号 | 控件 | 功能 |
| --- | --- | --- |
| 1 | `WP` | 显示或隐藏飞行计划路点。 |
| 2 | `DLK` | 显示或隐藏数据链信息。 |
| 3 | `AUTO RANGE` | 控制 SIT 的显示距离是否跟随 VSD 的显示距离一起变化。 |
| 4 | `GEO FENCE` | 显示或隐藏地理围栏。 |

[返回页面索引](#mpcd-index)

<a id="sit-modes"></a>

## 游标控制与显示模式

### 将游标控制权交给 SIT

<div class="mpcd-controls">
  <div>
    <p>当 TDC 指定到 VSD 时，将<strong>城堡开关向上拨动（UP）</strong>，即可让 SIT 成为当前主控显示器（SOI）。此时移动 TDC 只会控制 SIT 的目标截获门，截获门的两条竖线显示为<strong>实线</strong>。</p>
    <p>城堡向上可在 VSD 与 SIT 之间切换游标控制权。当 SIT 游标再次跟随 VSD 时，截获门恢复为虚线。</p>
    <p>旁边是 Touch UI 中的<a href="/zh/Docs/aircraft/f15c/touch-ui.html#item-19">城堡开关</a>和<a href="/zh/Docs/aircraft/f15c/touch-ui.html#item-18">游标（TDC）控件</a>。</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/zh/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="Touch UI 城堡开关" loading="lazy" /></a>
      <figcaption>城堡开关</figcaption>
    </figure>
    <figure>
      <a href="/zh/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="Touch UI 游标 / TDC 控件" loading="lazy" /></a>
      <figcaption>游标 / TDC</figcaption>
    </figure>
  </div>
</div>

以下向右、向左和向下的操作，均以 **SIT 已取得游标控制权**为前提。

| 城堡方向 | SIT 模式 | 用途 |
| --- | --- | --- |
| 向右 | Decenter（偏心显示） | 将本机移至显示器较下方，为前方态势留出更多空间。 |
| 向左 | EXP（扩展显示） | 聚焦 10 海里范围，通过游标控制显示区域的偏移。 |
| 向下 | 飞行小队模式 | 固定使用 5 海里范围，查看本小队的态势。 |

<a id="sit-decenter"></a>

### Decenter 模式

SIT 主控时，将**城堡开关向右拨动**，进入 Decenter 模式。本机移到显示器较下方，为 SIT 上半部分留出更多空间，以显示前方态势。

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="Decenter 模式下的 SIT，编号 1 是实线目标截获门，编号 2 是本机" loading="lazy" /></a>
  <figcaption>1：由 SIT 主控的实线目标截获门。2：本机。</figcaption>
</figure>

此图右上角的 `120` 表示**从本机到大圆顶部的距离为 120 海里**。

<a id="sit-exp"></a>

### EXP 模式

SIT 主控时，将**城堡开关向左拨动**，进入 EXP 模式。此时聚焦 **10 海里范围**，右上角显示 `E10`。通过游标控制显示区域的偏移，可以放大需要观察的一小片区域。

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="SIT EXP 模式，右上角显示 E10，数据链飞机符号分散显示" loading="lazy" /></a>
  <figcaption>EXP 模式放大局部区域，便于区分各架飞机并观察附近的地理围栏。</figcaption>
</figure>

<a id="sit-flight"></a>

### 飞行小队模式

SIT 主控时，将**城堡开关向下拨动**，进入飞行小队模式。该模式固定使用 **5 海里显示范围**，右上角显示 `F5`，用于查看本小队各架飞机的位置和高度。

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="SIT 飞行小队模式，右上角显示 F5，本机周围显示 2、3、4 号僚机" loading="lazy" /></a>
  <figcaption>飞行小队模式用于近距离查看本小队的态势。</figcaption>
</figure>

[返回页面索引](#mpcd-index)

<a id="sit-friendly"></a>

## 友机与牛眼

SIT 会区分本飞行小队的飞机和同一任务 <strong>Package（任务编组）</strong>中的其他飞机。下图同时展示了如何读取游标相对于牛眼的位置。

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT 友机与牛眼示例，1 为 Package 飞机，2 为牛眼，3 为僚机，4 为本机" loading="lazy" /></a>
</figure>

| 编号 | 符号 | 含义 |
| --- | --- | --- |
| 1 | 绿色 Package 飞机 | 同一 Package 中的另一架飞机，此例是一架预警机。符号中间的小点表示本机正在接收它的数据链贡献；底部的 `15` 表示高度为 15,000 英尺。 |
| 2 | 黄色牛眼 | 公共参考点。右下角黄色的 `037-12` 表示游标位于牛眼 037° 方位、12 海里处。 |
| 3 | 青色僚机 | 本飞行小队的另外三架飞机。符号中间的数字是小队编号：2、3、4 号，长机为 1 号；符号底部的数字表示高度，单位为千英尺。 |
| 4 | 青色本机符号 | 本机在 SIT 上的位置。 |

[返回页面索引](#mpcd-index)

<a id="sit-workflow"></a>

## SIT 与 VSD 配合使用

一种实用的操作流程是：先通过 SIT 的数据链信息确定需要搜索的区域，再通过 VSD 对相应位置进行雷达扫描、获取目标。下面的图例依次说明数据链报告、本机雷达跟踪和跟踪关联后的显示。

### 1. 根据数据链信息搜索目标区域

利用 SIT 中报告的目标位置，引导 VSD 的雷达搜索。**左侧 SIT 中的青色扇形**表示雷达搜索的方位和距离，可以将它与目标位置对照，同时在 VSD 上确认扫描高度覆盖目标所在高度。

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="左侧 SIT 显示数据链目标与青色雷达搜索扇形，右侧 VSD 显示搜索回波" loading="lazy" /></a>
  <figcaption>左侧 SIT 提供战术位置参考，右侧 VSD 显示雷达搜索信息。</figcaption>
</figure>

天线俯仰、搜索范围和目标截获门的操作，见[雷达与 VSD：远距搜索（LRS）](/zh/Docs/aircraft/f15c/radar.html#radar-lrs)。

### 2. 识别本机获取的跟踪

当雷达建立目标跟踪后，此例中的 SIT 会显示**白色实线方框**。其中，**实线轮廓**表示由本机雷达获取的跟踪，**白色**表示身份未知。此阶段在本机跟踪的背景中，仍能看到红色虚线的数据链目标。

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="SIT 上的白色方框本机跟踪与红色虚线数据链目标重叠，右侧为对应的 VSD 跟踪" loading="lazy" /></a>
  <figcaption>1：高亮的武器读数。2：SIT 中的本机跟踪。3：VSD 中对应的雷达跟踪。</figcaption>
</figure>

### 3. 识别关联跟踪与 PDT

经过一段时间，本机雷达获取的跟踪文件和数据链接收的跟踪文件会被关联，合并为同一个跟踪。此时 SIT 中的目标符号显示为**实心**。下例中，关联后的敌机显示为红色。

编号 1 标出的**蓝色虚线**指向 **PDT（Primary Designated Target，主要指定目标）**。

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="SIT 中关联后的实心敌机符号与指向 PDT 的蓝色虚线，右侧为 TWS 模式的 VSD" loading="lazy" /></a>
  <figcaption>蓝色虚线标示主要指定目标的方向。</figcaption>
</figure>

### 4. 用 EXP 查看目标小队细节

将 SIT 切换到 [EXP 模式](#sit-exp)，可以观察目标飞行小队中各架飞机的细节。放大后，目标符号更容易分辨，可结合 VSD 查看小队分布和高度读数。

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="EXP 模式下四架实心敌机符号的细节，编号 1 指向 SIT 目标，编号 2 指向对应的 VSD 跟踪" loading="lazy" /></a>
  <figcaption>1：EXP 模式下的 SIT 目标小队细节。2：VSD 中对应的跟踪。</figcaption>
</figure>

| 本组图例中的显示 | 含义 |
| --- | --- |
| 目标虚线轮廓 | 数据链报告。 |
| 目标实线轮廓 | 本机雷达获取的跟踪。 |
| 白色目标 | 身份未知。 |
| 实心目标符号 | 本机与数据链跟踪已经关联。 |
| 蓝色虚线 | 指向 PDT。 |

[返回页面索引](#mpcd-index)

<a id="mpcd-aa"></a>

## AA 空对空武器页面

### 打开 AA 页面

当 **TDC 指定到 VSD** 时，将**城堡开关向右拨动**，即可把 MPCD 从 SIT 切换到 **AA 空对空武器页面**。在同样的控制状态下，城堡向左可返回 SIT。

城堡开关的作用取决于当前由哪个显示器主控游标：VSD 主控时向右打开 AA；SIT 主控时向右进入 Decenter 模式。

### 读取挂载信息

AA 页面围绕飞机轮廓显示各位置的挂载，并集中显示机炮弹药和对抗措施数量。

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="两幅 AA 页面示例，标注空挂架、副油箱、弹药、对抗措施和选中挂架" loading="lazy" /></a>
  <figcaption>图中两处标注均为 3：左图 3 指机炮弹药，右图 3 指对抗措施数量。</figcaption>
</figure>

| 标注 | 读数 | 含义 |
| --- | --- | --- |
| 左图 1 | `PYLON` | 空挂架，未挂载外挂物。 |
| 左图 2 | `FUEL` | 该挂架挂有副油箱。 |
| 左图 3 | `950` | 剩余机炮弹药数量，此例为 950 发。 |
| 右图 3 | `CHF 120`、`FLR 60` | 剩余对抗措施数量：120 份箔条、60 枚红外干扰弹。 |
| 右图 4 | 高亮的 `AMRM / 120B` | 当前选中的挂架，以绿色高亮和武器型号外的白框标示。 |

### 与飞机设置中的挂载对照

下方 <strong>LOADOUT（挂载）</strong>设置与前面的 AA 页面示例相对应。对照挂载类型和弹药数量，可以了解设置页面中的配置如何显示在 MPCD 上。

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="与 AA 页面相对应的 LOADOUT 设置，包括 9M、120B、7M、副油箱、950 发机炮弹药、120 份箔条和 60 枚红外干扰弹" loading="lazy" /></a>
</figure>

| LOADOUT 配置 | AA 页面中的对应显示 |
| --- | --- |
| 8A、2A 挂点的 `9M` | 两处 `SRM / 9M`。 |
| 7、3 挂点的 `120B` | 两处 `AMRM / 120B`。 |
| 6、4 挂点的 `7M` | 两处 `MRM / 7M`。 |
| 5 号挂点的 `Tank` | 中间的 `FUEL`。 |
| Gun `950`、Chaff `120`、Flare `60` | AA 页面中的机炮弹药和对抗措施数量。 |

[返回页面索引](#mpcd-index)
