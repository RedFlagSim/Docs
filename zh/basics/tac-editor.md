<a id="tac-editor-top"></a>

# Tac 编辑器

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Tac 编辑器用于创建自定义任务、组织飞行小队、放置单位和规划航路。文档分为七个部分：先通过编号总览认识界面，再逐步说明各项编辑操作。

**章节导航**

- [第一部分：界面总览](#part-1)
- [第二部分：Package 与 Flight](#part-2)
- [第三部分：飞机配置](#part-3)
- [第四部分：飞行计划](#part-4)
- [第五部分：地图对象](#part-5)
- [第六部分：任务设置](#part-6)
- [第七部分：保存与试飞](#part-7)

<a id="part-1"></a>

## 第一部分：界面总览

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="Tac 编辑器界面总览，标注编号 1–11">
</a>

点击图片可查看原始分辨率大图。点击下方编号可跳转到对应解释。

<a id="ui-terms-top"></a>

### UI 编号

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight（飞行小队）</a>
  <a href="#item-2">2 Bullseye（牛眼）</a>
  <a href="#item-3">3 Package（任务包）</a>
  <a href="#item-4">4 额外的非玩家单位</a>
  <a href="#item-5">5 Inspector（信息面板）</a>
  <a href="#item-6">6 比例尺</a>
  <a href="#item-7">7 地图工具栏</a>
  <a href="#item-8">8 飞行小队的飞行计划航路</a>
  <a href="#item-9">9 本地时间与 Zulu 时间</a>
  <a href="#item-10">10 Geo Fence（地理围栏）</a>
  <a href="#item-11">11 编辑器工具栏</a>
</div>

<a id="item-1"></a>

### 1. Flight（飞行小队）

**Flight** 是一个飞行小队，最多包含 **4 架飞机**。顶部的每张卡片代表一个小队，卡片内的飞机图标表示小队成员。选中卡片后，可以查看小队信息并配置其中的飞机。

[继续阅读 Flight](#part-2-flight)

[返回编号索引](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye（牛眼）

<strong>Bullseye（牛眼）</strong>是报告方位和距离时使用的统一地理参考点。地图上的黄色同心圆标记它的位置。

地图上的距离环以 Bullseye 为圆心，相邻同心圆环的半径相差 **20 海里（20 NM）**。

[返回编号索引](#ui-terms-top)

<a id="item-3"></a>

### 3. Package（任务包）

<strong>Package（任务包）</strong>用于组织同一阵营的飞行小队。顶部蓝色和红色条带分别包含各自任务包内的 Flight。选中任务包，可以查看和管理其中的小队。

[继续阅读 Package](#part-2-package)

[返回编号索引](#ui-terms-top)

<a id="item-4"></a>

### 4. 额外的非玩家单位

这些是 Package/Flight 结构之外、由 AI 控制的额外单位。图中示例包括一架独立飞机和一个地空导弹单位。通过编辑器工具栏中的 **NP Unit** 管理这些单位。

[查看详细说明: NP Unit](#part-5-np-unit-list)

[返回编号索引](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector（信息面板）

右侧面板显示当前选中对象的具体信息和可用操作。截图中显示的是任务总信息，包括任务名称、场景和难度。

**Scenery** 目前不支持选择。未来版本提供多个区域后，才能在这里选择地图区域。

**双击地图空白处**，即可让 Inspector 返回任务总信息。

**按对象查看 Inspector**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[返回编号索引](#ui-terms-top)

<a id="item-6"></a>

### 6. 比例尺

比例尺表示当前缩放级别下，标尺长度对应的实际距离。**NM** 表示海里，图中为 **16.66 NM**。可以用它估算地图上的距离。

[返回编号索引](#ui-terms-top)

<a id="item-7"></a>

### 7. 地图工具栏

左下方地图工具栏从左到右有四个按钮：

- **移动**（四向箭头）：按住后可以移动选中的地图元素。
- **放大**（带 + 的放大镜）：放大地图。
- **缩小**（带 − 的放大镜）：显示更大范围的地图。
- **Home**（房屋图标）：关闭编辑器并返回主界面。

::: tip 移动地图元素
1. 先选中需要移动的单位或元素。
2. 用**左手按住「移动」按钮**。
3. 保持按住，同时用**右手在地图上拖动**，调整选中元素的位置。
:::

[返回编号索引](#ui-terms-top)

<a id="item-8"></a>

### 8. 飞行小队的飞行计划航路

连接各航点的线条表示飞行小队的计划航路。选中小队后，可以查看其飞行计划并编辑航点。这条航路属于对应 Flight，用于小队导航。

[查看详细说明](#part-4)

[返回编号索引](#ui-terms-top)

<a id="item-9"></a>

### 9. 本地时间与 Zulu 时间

底部显示任务时间：前面是**本地时间**，方括号内带 **Z** 的是 **Zulu 时间（UTC）**。图中的 **16:00:00** 和 **23:00:00 Z** 表示同一个时刻。

[返回编号索引](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence（地理围栏）

<strong>Geo Fence（地理围栏）</strong>用于在地图上标记战术区域或边界，可以是圆形或多边形。图中示例为圆形区域和标有 **MEZ** 的多边形。通过编辑器工具栏中的 **Geo Fence** 管理这些区域。

[查看详细说明: Geo Fence](#part-5-geofence-list)

[返回编号索引](#ui-terms-top)

<a id="item-11"></a>

### 11. 编辑器工具栏

任务总信息面板中有六个按钮。以下按截图顺序分别解释：先上排从左到右，再下排从左到右。

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time（天气与时间）</a>
  <a href="#item-11-2">11.2 File（文件）</a>
  <a href="#item-11-3">11.3 Config（配置）</a>
  <a href="#item-11-4">11.4 Geo Fence（地理围栏）</a>
  <a href="#item-11-5">11.5 NP Unit（非玩家单位）</a>
  <a href="#item-11-6">11.6 Go Fly（开始飞行）</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time（天气与时间）

打开任务天气与时间设置，调整任务的环境条件和时刻。

[返回编号索引](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File（文件）

打开任务文件菜单，可新建任务、保存当前任务、加载已保存的任务，或删除已保存的任务。

[返回编号索引](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config（配置）

打开任务配置和限制规则。设置是否允许修改挂载、涂装、天气与时间，以及是否允许时间冻结；也可设置飞机与挂载限制。

[返回编号索引](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence（地理围栏）

打开地理围栏列表，添加、选择和编辑战术区域及边界。

[查看详细说明: Geo Fence](#part-5-geofence-list)

[返回编号索引](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit（非玩家单位）

打开非玩家单位列表，添加和管理任务包之外的单位。选中单位后，在 Inspector 中编辑具体信息。

[查看详细说明: NP Unit](#part-5-np-unit-list)

[返回编号索引](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly（开始飞行）

按当前编辑器配置启动任务。任务必须有且只有一架玩家控制的飞机，并且玩家拥有对应飞机模组的使用权限。启动失败时，根据界面提示调整任务配置。

[返回编号索引](#ui-terms-top)

[返回顶部](#tac-editor-top)

<a id="part-2"></a>

## 第二部分：Package 与 Flight

先用 Package 组织飞行小队，再进入 Flight 配置成员和任务参数。下面按这两个层级说明 Inspector。

飞机的组织层级为 **Mission（任务）→ Package（任务包）→ Flight（飞行小队）→ Slot（单架飞机）**。每个 Flight 属于一个 Package，最多包含 **4 架飞机**。

<a id="part-2-package"></a>

### Package（任务包）

在地图顶部选择 Package 后，Inspector 显示它所包含的 Flight 及任务包时间。图中任务包名为 blue1。

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>名称与 Flight 列表</strong>：顶部显示任务包名称，点击名称即可改名。下方是 Flight1、Flight2、Flight3；成员编号对应各小队中的飞机。
- <strong>＋</strong>：添加 Flight。选择已有小队卡片，可进入它的 Flight Inspector。
- <strong>Take-off Time</strong>：任务包的起飞时间，截图示例为 23:03。
- <strong>Time on Target（TOT）</strong>：任务包的目标到达时间，截图示例为 23:33。

Package 和 Flight 都有时间字段；它们的联动方式与时间基准将在后续说明。

</TacInspectorPanel>

[返回界面总览](#item-3)

<a id="part-2-flight"></a>

### Flight（飞行小队）

在 Package 中选择 Flight 后，Inspector 显示小队成员及任务设置。图中为 Flight1，包含 4 架飞机。

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>成员图</strong>：显示小队内的飞机和编号。选择成员后进入 Slot Inspector，配置单架飞机。
- <strong>Airbase</strong>：小队基地。截图选择的是 NAS_Fallon。
- <strong>Mission Role</strong>：小队任务职责。截图选择的是 CAP。
- <strong>Take-off Time / Time on Target</strong>：小队的起飞时间与目标到达时间，截图分别为 23:03 和 23:12。
- <strong>Station Time</strong>：巡逻任务中，在两个目标类型航点之间巡逻的时长，以分钟设置。
- <strong>Steer Points</strong>：进入小队的航点编辑。航线与航点的详细操作放在第四部分。
- <strong>Rebuild</strong>：重新计算 Flight 的 Time on Target（TOT，目标到达时间）。
- <strong>Delete</strong>：位于 Rebuild 下方，用于删除整个 Flight（飞行小队）定义，而不是只删除一个飞机 Slot。

当前截图仅显示部分 Rebuild 按钮，未显示其下方的 Delete 按钮。

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### 巡逻示例：加油机与预警机

让加油机或预警机在指定位置巡逻时：

1. 在计划巡逻的位置设置两个导航点，并将两个导航点都设为<strong>目标类型</strong>。
2. 在 Flight Inspector 中，将 <strong>Station Time</strong> 设为所需巡逻时长（分钟）。
3. 飞机会在这两个目标类型导航点之间巡逻，持续 Station Time 所设定的时长。

[返回界面总览](#item-1)

[查看详细说明: Slot](#part-3-slot) · [Steer Points](#part-4)

[返回顶部](#tac-editor-top)

<a id="part-3"></a>

## 第三部分：飞机配置

<a id="part-3-slot"></a>

### Slot（单架飞机）

Slot 代表 Flight 中的一架飞机。在 Flight 的成员图中选择飞机，可进入对应的单机 Inspector。

<TacInspectorPanel panel="slot" alt="Slot（单架飞机） Inspector" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>机型与成员编号</strong>：顶部显示当前机型及成员编号，图中是 1 号 F-15C；下方机型下拉框用于选择飞机型号。
- <strong>Loadout / Livery</strong>：进入挂载与涂装设置。
- <strong>Spawn Type</strong>：选择 Airborne（空中出生）或 Airbase（基地出生）。截图中选中的是 Airbase。
- <strong>Spawn Point ID</strong>：出生点选择，截图显示 Auto。
- <strong>Initial State</strong>：进入飞机初始状态设置。
- <strong>Delete</strong>：删除当前飞机 Slot；不是删除整个 Flight 或 Package。

本图展示 Airbase 状态下的面板。Airborne、Loadout / Livery 和 Initial State 的子面板待后续截图展开。

</TacInspectorPanel>

[返回界面总览](#item-1)

每个 Flight 最多包含 4 个飞机 Slot。Slot 决定实际生成的飞机定义、编队编号、IFF 身份、涂装、挂载、出生状态和可选的单机 AI 行为覆盖。

可起飞任务必须有且只有一个玩家控制飞机 Slot。没有玩家 Slot 时任务无法开始；多个玩家 Slot 会被视为任务配置错误。

新建 Flight Member 时，编辑器默认使用基地出生、热机状态和预装挂载。之后可以再调整出生方式、燃油、武器和航线。

### 出生方式

飞机和实体有不同出生方式：

- **Airbase**：使用机场和停机位。玩家 Flight 最安全的默认选择。
- **Airborne**：使用经纬度、高度、真航向和校准空速在空中生成。
- **Surface**：用于地面、海上和设施实体。

当前限制：普通飞机 Slot 的 Surface 出生尚未实现。飞机应使用 **Airbase** 或 **Airborne**。

空中出生的航向是真航向：0 表示真北，数值顺时针增加。基地出生不使用手填航向，而是由停机位 transform 和地面状态决定。

[返回顶部](#tac-editor-top)

<a id="part-4"></a>

## 第四部分：飞行计划

从 Flight Inspector 点击 Steer Points，编辑当前小队的导航点。截图显示编号为 3 的航点。

[查看详细说明: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points（导航点面板）

<TacInspectorPanel panel="steerpoints" alt="Steer Points（导航点面板）" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>左右箭头与编号</strong>：点击左右箭头切换当前航点，中间显示选中的航点编号；图中为 3。
- <strong>航点类型</strong>：下拉框用于选择航点类型，图中为 Target（目标类型）。
- <strong>Elev (MSL)</strong>：航点的计划海拔高度，以平均海平面（MSL）为基准，单位为英尺（FT）。图中为 15000 FT；不是距地面高度。
- <strong>KCAS</strong>：航点的计划校准空速，单位为节。图中为 529 KCAS；不是地速或真空速。
- <strong>Time(Z) Over Steerpoint</strong>：计划通过当前航点的 Zulu 时间（UTC）。左右两栏分别是小时和分钟，图中为 23:15 Z；不是飞行时长。
- <strong>New</strong>：新增导航点。
- <strong>Delete</strong>：删除当前选中的导航点，不会删除整个 Flight。

</TacInspectorPanel>

为加油机或预警机规划巡逻航线时，在巡逻位置设置两个 Target 类型航点，再用 Flight 的 Station Time 设置两点之间的巡逻时长。需要重新计算 Flight 的 TOT 时，在 Flight Inspector 点击 Rebuild。

[巡逻设置示例](#flight-station-time-example) · [地图元素移动方法](#item-7)

### 航线与航点

Flight 航线由 Steerpoints 构成。航线可以表示离场、集合、截击、目标区、返场或训练图形。

良好航线习惯：

- 从出发基地或空中初始点开始。
- 航点之间保持清晰间隔。
- 有意识地标记 Push 点、Target 点或返场点。
- 除非训练目标就是低空突防，否则不要把低高度航线穿过地形。
- 修改航线距离或巡航速度后，重新检查时间。

导航系统和 F-15C 显示会读取任务航线数据，所以干净的航点会直接改善座舱可读性。

[返回顶部](#tac-editor-top)

<a id="part-5"></a>

## 第五部分：地图对象

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Geo Fence 列表</a>
  <a href="#part-5-geofence-circle">圆形围栏（Circle）</a>
  <a href="#part-5-geofence-polygon">多边形围栏（Polygon）</a>
  <a href="#part-5-np-unit-list">NP Unit（非玩家单位）列表</a>
</div>

<a id="牛眼与-geofence"></a>

### Bullseye

**Bullseye** 是统一战术参考点，用于战术呼叫和航电显示。建议放在任务区域中心、靶场中心或明显地标附近。

### Geo Fence（地理围栏）

从任务总信息面板的 Geo Fence 按钮进入列表，再选择一个围栏查看其 Inspector。圆形和多边形使用不同的几何编辑控件。

**GeoFence** 是地图覆盖层和边界。常见用途包括：

- 训练空域；
- 禁飞区或限制空域；
- 威胁圈；
- 目标区；
- 进入/脱离走廊；
- 禁火区或安全边界。

即使 GeoFence 不直接强制玩法规则，也很有价值。它能让战术图像更容易理解。

<a id="part-5-geofence-list"></a>

#### Geo Fence 列表

<TacInspectorPanel panel="geofence-list" alt="Geo Fence 列表" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>＋</strong>：添加 Geo Fence。
- <strong>列表条目</strong>：图中有名为 11 的圆形围栏和名为 MEZ 的多边形围栏；条目前的图标区分形状。
- <strong>选择条目</strong>：进入对应围栏的 Inspector，继续编辑用途、形状、阵营和几何参数。

</TacInspectorPanel>

[返回界面总览](#item-10)

<a id="part-5-geofence-circle"></a>

#### 圆形围栏（Circle）

<TacInspectorPanel panel="geofence-circle" alt="圆形围栏（Circle） Inspector" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>名称</strong>：顶部的 11 是当前围栏名称。
- <strong>Geo Fence Role / Shape</strong>：用途示例为 MEZ，形状为 Circle。名称、用途和形状是不同的信息。
- <strong>Coalition</strong>：围栏所属阵营，截图为 Red。
- <strong>Threat Radius</strong>：圆形区域的半径，截图数值为 22.6；截图未标注单位，此处暂不指定单位。
- <strong>Delete</strong>：删除当前围栏。

</TacInspectorPanel>

[返回界面总览](#item-10)

<a id="part-5-geofence-polygon"></a>

#### 多边形围栏（Polygon）

<TacInspectorPanel panel="geofence-polygon" alt="多边形围栏（Polygon） Inspector" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>名称 / Geo Fence Role</strong>：顶部名称是 MEZ，但用途字段选择的是 ROZ；不要把名称当作用途。
- <strong>Shape / Coalition</strong>：截图分别为 Polygon 和 Red。
- <strong>左右箭头与中间编号</strong>：选择需要编辑的顶点，截图中显示编号 0。
- <strong>New Vertice</strong>：添加顶点。这里保留按钮在界面中的原文。
- <strong>Rotate</strong>：旋转多边形；步进和角度规则后续补充。
- <strong>Delete Vertex / Delete</strong>：Delete Vertex 删除选中顶点；底部 Delete 删除整个围栏。

需要在地图上调整元素位置时，使用第一部分介绍的“选中元素 → 左手按住移动 → 右手拖动”操作。

</TacInspectorPanel>

[返回界面总览](#item-10)

[查看详细说明](#item-7)

<a id="part-5-np-unit-list"></a>

### NP Unit（非玩家单位）列表

从任务总信息面板的 NP Unit 按钮进入 Units 列表，管理 Package / Flight 之外的单位。

<TacInspectorPanel panel="np-unit-list" alt="NP Unit（非玩家单位）列表" open-label="点击图片查看原图。">

**面板字段与操作**

- <strong>＋</strong>：添加非玩家单位。
- <strong>列表条目</strong>：截图中有 9K37 Buk np 和 F-15C np，展示了地空导弹单位和独立飞机的列表项。
- <strong>选择条目</strong>：打开该单位的 Inspector。单个 NP Unit 的属性面板将在补充截图后说明。

</TacInspectorPanel>

[返回界面总览](#item-4)

非玩家实体可以放在 Package/Flight 结构之外。适合用于 SAM 阵地、地面单位、舰船、设施、靶标或独立空中单位。

如果某架飞机需要按航线飞行或作为编队成员行动，优先使用 Package Flight。静态目标或地图战术对象则更适合使用非玩家实体。

[返回顶部](#tac-editor-top)

<a id="part-6"></a>

## 第六部分：任务设置

本部分后续结合截图补充详细操作。

### 任务结构

Tac 编辑器任务按层级组织：

- **Mission（任务）**：任务标题、难度、场景、天气/时间、蓝红双方基地、牛眼、限制规则和全局选项。
- **Package（任务包）**：按阵营组织的战术任务组，带有起飞时间和 TOT 参考。
- **Flight（飞行小队）**：Package 内的一个飞行小队，包含呼号、阵营、基地、任务职责、航线、AI 行为和飞机槽位。
- **Slot（槽位）**：Flight 内的一架飞机，玩家飞机也是一个 Slot。
- **Steerpoints（航点）**：Flight 使用的航线点，用于导航和时间规划。
- **GeoFence（地理围栏）**：训练空域、威胁区、边界线或参考覆盖层。
- **非玩家实体**：不属于 Package 的地面、海上、设施或独立空中单位。

编辑器保存的是任务草稿。点击 **Go Fly** 时，草稿会先克隆成运行时任务快照，然后再加载 World 场景。

### 任务设置

任务级设置决定环境，以及玩家在起飞前可以修改哪些内容。

关键字段包括：

- **Mission title**：任务标题，显示在编辑器和任务列表中。
- **Scenery**：场景，决定地形、机场和导航数据库上下文，在任务 Inspector 中为只读显示。
- **Weather / time**：进入 World 后应用的天气和时间。
- **Blue / Red airbase**：蓝红双方默认基地，新建 Flight 或 Slot 时会使用。
- **Bullseye**：统一战术参考点，供航电和战术显示使用。
- **Configuration permissions**：是否允许玩家修改挂载、涂装或天气。

尽量先确认当前场景并设置双方基地。很多后续默认值，包括 Flight 基地和自动航点，都依赖这些字段。

### 任务限制

任务限制用于控制允许哪些飞机和挂载。当前覆盖飞机世代/类别限制，以及挂载和武器制导类型限制，例如红外导弹、半主动雷达导弹、主动雷达导弹、被动雷达导弹和电视制导武器。

训练任务应主动使用限制。例如机炮格斗训练应限制导弹；BVR 课程应把机型和武器限制在预期配置内。

[返回顶部](#tac-editor-top)

<a id="part-7"></a>

## 第七部分：保存与试飞

本部分后续结合截图补充详细操作。

### 推荐编辑流程

建议从大到小构建任务：

1. 确认当前场景及默认蓝方/红方基地。
2. 设置任务标题、难度、天气、时间、牛眼和全局选项。
3. 创建蓝方和红方 Package。
4. 在 Package 中添加 Flight，并分配任务职责。
5. 添加飞机 Slot，再选择机型、出生方式、涂装、燃油和挂载。
6. 用 Steerpoints 规划 Flight 航线。
7. 添加 GeoFence 和非玩家实体。
8. 检查任务限制和玩家模组访问条件。
9. 保存任务，然后用 **Go Fly** 试飞。

每次只增加一小块复杂度。一个只有玩家编队、能稳定进入 World 的任务，比一开始就塞满单位的大任务更容易排错。

### 保存、加载与 Go Fly

使用保存/加载保留可复用任务草稿。每次大改机型、出生方式、航线时间或限制规则后，都应重新试飞。

**Go Fly** 会走统一任务启动流程。加载 World 前，游戏会检查：

- 任务数据存在；
- 能解析到唯一玩家飞机；
- 玩家飞机模组可用；
- 能创建任务快照；
- 选中的飞机功能、变体和非默认涂装包具有访问权限。

如果启动失败，先把任务简化后重试：一个玩家飞机、基地出生、默认挂载、默认涂装。确认能进入 World 后，再逐步加回复杂内容。

### 实用检查清单

保存或起飞前检查：

- 任务有清晰标题和有效场景。
- 蓝方/红方基地有效。
- 牛眼位于战术区域附近。
- 只有一个玩家飞机 Slot。
- 玩家飞机使用 Airbase 或 Airborne 出生。
- 每个 Flight 都有呼号、阵营、职责和航线。
- 挂载与涂装符合任务权限。
- GeoFence 和目标区在地图上清晰可读。
- 任务限制符合训练目标。
- 已至少通过 **Go Fly** 试飞一次。

[返回顶部](#tac-editor-top)
