<a id="hud-page-top"></a>

# F-15C HUD 操作

HUD 是 F-15C 最重要的飞行与武器显示。它把姿态、导航、空速、高度、目标和武器信息投射到飞行员正前方，让飞行员在机动和交战中减少低头看仪表的时间。

章节索引：点击可跳转到对应部分。

<nav class="term-cloud tac-editor-index" aria-label="HUD 章节索引">
  <a href="#hud-symbols-top">基本符号</a>
  <a href="#hud-gun">机炮模式</a>
  <a href="#hud-aim9">AIM-9 响尾蛇模式</a>
  <a href="#hud-aim7">AIM-7 麻雀模式</a>
  <a href="#hud-aim120">AIM-120 AMRAAM 模式</a>
  <a href="#hud-auto-acquisition">自动锁定模式</a>
</nav>

<a id="hud-symbols-top"></a>

## 基本符号

许多 HUD 符号在不同模式中都会保留。

航向、空速、高度和迎角标尺上的三角指示符（caret）均用于指示对应参数的当前数值。

![图 38. F-15C HUD 基本符号编号图](/assets/F-15C/Manual/fig-38-hud-basic-symbology.png)

### 符号索引

点击编号可跳转到对应的详细说明。

<div class="term-cloud tac-editor-index">
  <a href="#hud-item-1">1 航向标尺</a>
  <a href="#hud-item-2">2 空速标尺</a>
  <a href="#hud-item-3">3 速度矢量</a>
  <a href="#hud-item-4">4 迎角标尺</a>
  <a href="#hud-item-5">5 马赫数与过载读数</a>
  <a href="#hud-item-6">6 机炮十字</a>
  <a href="#hud-item-7">7 高度标尺</a>
  <a href="#hud-item-8">8 飞机基准符号</a>
  <a href="#hud-item-9">9 坡度转向指示符</a>
  <a href="#hud-item-10">10 俯仰标尺</a>
  <a href="#hud-item-11">11 导航数据</a>
  <a href="#hud-item-12">12 地平线</a>
</div>

### 详细说明

<a id="hud-item-1"></a>
#### 1. 航向标尺

顶部水平标尺显示磁航向。两位数字代表十度，例如 `35` 表示 350°，`00` 表示 000°；三角指示符在标尺上指向飞机当前的航向数值。

标尺下方向下延伸的竖线表示所选导航点的方向。本例中，该标记位于当前航向的右侧，因此需要右转才能朝导航点飞行。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-2"></a>
#### 2. 空速标尺

左侧垂直标尺显示指示空速，单位为节。三角指示符在标尺上指向当前的指示空速数值。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-3"></a>
#### 3. 速度矢量

圆形飞行路径标记表示飞机实际运动方向。它与飞机基准符号的相对位置可以反映机头姿态与飞行路径的差异，包括风或侧滑造成的偏移。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-4"></a>
#### 4. 迎角标尺

空速标尺内侧的标尺以迎角单位（AoA units）显示迎角。三角指示符在标尺上指向当前的迎角数值；机头方向与飞行路径之间的夹角增大时，迎角也会升高。

标尺上最粗的刻度代表在速迎角（on-speed AoA）。着陆时，应让当前迎角的三角指示符对齐这一刻度，以保持正确的着陆迎角。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-5"></a>
#### 5. 马赫数与过载读数

上方数值是当前马赫数。下方两个数值分别为当前过载和最大允许过载；在这种紧凑显示格式中，`10` 表示 1.0 G，`87` 表示 8.7 G。

F-15C 的最大允许过载为 9 G，但系统会根据当前马赫数和挂载情况重新计算最大允许过载。因此，HUD 显示的是当前条件下的允许值，并非始终为 9 G。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-6"></a>
#### 6. 机炮十字

固定十字与 M61 机炮轴线对准，并在主武器开关打开时显示。计算式机炮模式会在这个固定参考之外增加独立的瞄准解算符号。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-7"></a>
#### 7. 高度标尺

正常导航时，右侧垂直标尺显示以英尺为单位的气压高度，三角指示符在标尺上指向当前的高度数值。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-8"></a>
#### 8. 飞机基准符号

W 形符号是固定的飞机基准线参考。把它与速度矢量比较，可以直观看出迎角和飞行路径偏移。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-9"></a>
#### 9. 坡度转向指示符

该符号为飞向所选导航点提供转向指令。通过坡度使速度矢量向指示符靠拢，并在两者逐渐重合时减小坡度。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-10"></a>
#### 10. 俯仰标尺

俯仰梯以 5° 为间隔显示飞机俯仰姿态，并随坡度旋转。正俯仰刻线位于地平线上方，负俯仰刻线位于下方。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-11"></a>
#### 11. 导航数据

右下角数据区依次显示所选航路点与导航模式、导航源/距离，以及预计到达时间。图中 `1 NAV`、`N 30.3` 和 `5 MIN` 分别表示航路点 1、剩余 30.3 海里，以及预计约五分钟到达。

[返回符号索引](#hud-symbols-top)

<a id="hud-item-12"></a>
#### 12. 地平线

地平线是 0° 俯仰参考。在外界地平线难以辨认时，它仍能提供姿态参考，并会随俯仰变化相对飞机基准符号移动。

[返回符号索引](#hud-symbols-top) · [返回顶部](#hud-page-top)

<a id="hud-gun"></a>

## 机炮模式

机炮 HUD 的瞄准显示取决于是否有雷达测距信息。以下三张图分别说明无雷达锁定时的瞄准参考、有 STT 锁定时的 GDS 准星，以及开炮后的 BATR 弹着点提示。

<nav class="term-cloud tac-editor-index" aria-label="机炮模式索引">
  <a href="#hud-gun-no-lock">图 1 · 无雷达锁定</a>
  <a href="#hud-gun-gds">图 2 · GDS 准星</a>
  <a href="#hud-gun-batr">图 3 · BATR 弹着点</a>
</nav>

<a id="hud-gun-no-lock"></a>

### 无雷达锁定机炮

![机炮图 1：无雷达锁定时的瞄准参考](/assets/F-15C/HUD/gun-no-lock.png)

无雷达锁定时，机炮瞄准点按固定 **2000 英尺**的距离计算，表示炮弹飞到该距离时的预计落点；此时并没有雷达提供的实际目标距离。

F-15C 不像 F-16 或 F/A-18 那样，在没有雷达测距信息时显示机炮漏斗，而是使用这一固定计算距离的瞄准参考。

[返回机炮索引](#hud-gun) · [返回顶部](#hud-page-top)

<a id="hud-gun-gds"></a>

### 机炮指引瞄准（GDS）

选择机炮后，只有雷达处于单目标跟踪（STT）状态且目标在射程内，才显示机炮指引瞄准（Gun Director Sight，GDS）准星。

![机炮图 2：GDS 准星与目标数据，编号 1 至 7](/assets/F-15C/HUD/gun-gds.png)

<nav class="term-cloud tac-editor-index" aria-label="GDS 编号索引">
  <a href="#hud-gds-item-1">1. GDS 准星</a>
  <a href="#hud-gds-item-2">2. 目标指示框</a>
  <a href="#hud-gds-item-3">3. 机炮弹药余量</a>
  <a href="#hud-gds-item-4">4. 射程标记</a>
  <a href="#hud-gds-item-5">5. 目标接近率</a>
  <a href="#hud-gds-item-6">6. 雷达测距标尺</a>
  <a href="#hud-gds-item-7">7. 目标斜距</a>
</nav>

<a id="hud-gds-item-1"></a>

#### 1. GDS 准星

准星圆周上的每个刻度代表 **1000 英尺**。中心的小圆点是机炮的计算瞄准点。

射击时，可让中心小圆点稳定压住目标；也可以沿目标升力矢量的方向，让瞄准点扫过目标的同时开炮。GDS 提供的是预测瞄准解，命中还取决于炮弹飞行期间目标运动是否发生变化。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-2"></a>

#### 2. 目标指示框

目标指示框（Target Designator Box，TD Box）标出雷达锁定目标的视线方向（Line of Sight，LOS）。它表示目标当前所在的方向，不是机炮的提前瞄准点。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-3"></a>

#### 3. 机炮弹药余量

显示当前剩余的机炮炮弹数量。图中 `950` 表示剩余 950 发。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-4"></a>

#### 4. 射程标记

图中准星圆周附近的亮点是射程标记，用于辅助判断机炮射程。该标记会随当前条件变化，并非固定不变的距离参考。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-5"></a>

#### 5. 目标接近率

显示本机与目标之间距离的变化率，单位为节。正值表示双方距离正在缩小，负值表示距离正在增大。图中读数为 `0`。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-6"></a>

#### 6. 雷达测距标尺

HUD 右侧的雷达测距标尺用于读取目标距离。顶部的 `10` 表示当前标尺的最大刻度为 **10 海里**，中间的 `5` 表示 5 海里。

[返回 GDS 索引](#hud-gun-gds)

<a id="hud-gds-item-7"></a>

#### 7. 目标斜距

编号 7 指向的三个位置都显示本机到目标的斜距，即两者之间的直线距离：

- **准星圆周上的距离标记**：按每格 1000 英尺读取，图中估读约为 3300 英尺。
- **雷达测距标尺上的指针**：在以海里为单位的标尺上指示目标距离。
- **右下方的数字读数**：`R 0.6` 表示目标斜距为 0.6 海里。

读图时需区分准星上的英尺刻度与雷达标尺、数字读数使用的海里单位。

[返回 GDS 索引](#hud-gun-gds) · [返回机炮索引](#hud-gun) · [返回顶部](#hud-page-top)

<a id="hud-gun-batr"></a>

### BATR 弹着点提示

![机炮图 3：编号 1 为 BATR 三角标记，编号 2 为目标接近率](/assets/F-15C/HUD/gun-batr.png)

<nav class="term-cloud tac-editor-index" aria-label="BATR 编号索引">
  <a href="#hud-batr-item-1">1. BATR 三角标记</a>
  <a href="#hud-batr-item-2">2. 负接近率</a>
</nav>

<a id="hud-batr-item-1"></a>

#### 1. BATR 三角标记

BATR（Bullets at Target Range）表示炮弹到达目标距离时的位置。机炮发射后，当炮弹飞到目标的当前距离时，HUD 会用三角形标出相应的弹着位置。

GDS 准星是开炮时的预测瞄准参考：即使中心瞄准点压住目标，只有目标在炮弹飞行期间的加速度没有剧烈改变，才可能命中。BATR 则用于射后评估，显示已经发射的炮弹到达目标距离时是否与目标重合。

如果 BATR 三角标记持续叠在目标上，可以据此判断弹流正在命中目标；如果标记与目标分离，则说明炮弹在目标距离处从旁边通过。

[返回 BATR 索引](#hud-gun-batr)

<a id="hud-batr-item-2"></a>

#### 2. 负接近率

图中的 `-11` 是目标接近率，单位为节。负号表示目标正在远离本机，双方距离以约 11 节的速率增大。

[返回 BATR 索引](#hud-gun-batr) · [返回机炮索引](#hud-gun) · [返回顶部](#hud-page-top)

<a id="hud-aim9"></a>

## AIM-9 响尾蛇模式

以下按本游戏的 HUD 显示，依次说明导引头状态、雷达辅助发射提示，以及目标从射程外接近到最小射程以内时的变化。

判断能否发射时，需要同时区分射程条件与导引头锁定状态。ASE 放大或出现 `IN RNG` 并不等于导引头已锁定；还需确认导引头指向目标，并听到高频锁定音。

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 模式索引">
  <a href="#hud-aim9-caged">图 1 · SM 与 Cage 模式</a>
  <a href="#hud-aim9-uncaged">图 2 · Uncage 模式</a>
  <a href="#hud-aim9-dlz">图 3 · PDT 与动态发射区（DLZ）</a>
  <a href="#hud-aim9-in-range">图 4 · 进入射程，但导引头仍处于 Cage</a>
  <a href="#hud-aim9-slaved">图 5 · Uncage 后随动到 PDT</a>
  <a href="#hud-aim9-rtr">图 6 · 进入 RTR 与近距射程环</a>
  <a href="#hud-aim9-too-close">图 7 · 小于最小射程：Break X</a>
  <a href="#hud-aim9-gun-composite">机炮合成模式</a>
</nav>

<a id="hud-aim9-caged"></a>

### 图 1 · SM 与 Cage 模式

选择近程导弹（SM）后，HUD 显示 AIM-9 的武器状态和导引头符号。导引头默认处于 Cage（囚笼）模式，指向机头附近。

![图 1 · SM 与 Cage 模式](/assets/F-15C/HUD/aim9-01-caged.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 1 编号索引">
  <a href="#hud-aim9-caged-item-1">1. 武器状态 S 2M</a>
  <a href="#hud-aim9-caged-item-2">2. 导引头指向</a>
  <a href="#hud-aim9-caged-item-3">3. 导引头搜索范围（暂未实现）</a>
</nav>

<a id="hud-aim9-caged-item-1"></a>

#### 1. 武器状态 S 2M

左下角的 `S 2M` 表示当前选择的武器与余量：

- `S`：SM，即近程导弹。
- `2`：剩余 2 枚。
- `M`：当前型号为 AIM-9M。

[返回图 1 索引](#hud-aim9-caged)

<a id="hud-aim9-caged-item-2"></a>

#### 2. 导引头指向

小圆表示导弹导引头当前的指向。图中导引头仍处于 Cage 状态，指向机头附近，并没有跟随画面中的目标。

[返回图 1 索引](#hud-aim9-caged)

<a id="hud-aim9-caged-item-3"></a>

#### 3. 导引头搜索范围（暂未实现）

外侧大圆表示导引头搜索范围。对应的搜索功能目前暂未实现，不应把这个圆当作已经完成目标搜索或锁定的提示。

[返回图 1 索引](#hud-aim9-caged) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-uncaged"></a>

### 图 2 · Uncage 模式

解除囚笼后，导引头进入 Uncage（非囚笼）模式。图中小圆已经离开机头附近，正在跟踪目标。

![图 2 · Uncage 模式](/assets/F-15C/HUD/aim9-02-uncaged.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 2 编号索引">
  <a href="#hud-aim9-uncaged-item-1">1. U：Uncage 状态</a>
  <a href="#hud-aim9-uncaged-item-2">2. 跟踪目标的导引头指向</a>
</nav>

<a id="hud-aim9-uncaged-item-1"></a>

#### 1. U：Uncage 状态

右下方的 `U` 表示导引头已解除囚笼。`U` 只说明导引头的工作状态，本身并不等于锁定确认。

[返回图 2 索引](#hud-aim9-uncaged)

<a id="hud-aim9-uncaged-item-2"></a>

#### 2. 跟踪目标的导引头指向

小圆表示正在跟踪目标的导引头视线方向。发射前，应确认它指向预期目标，并听到耳机中的高频锁定音。

[返回图 2 索引](#hud-aim9-uncaged) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-dlz"></a>

### 图 3 · PDT 与动态发射区（DLZ）

雷达获得主要指定目标（Primary Designated Target，PDT）后，系统可根据目标信息计算导弹的动态发射区（Dynamic Launch Zone，DLZ），并显示 ASE、转向点、目标框和射程标记。图中目标仍在最大射程之外。

![图 3 · PDT 与动态发射区（DLZ）](/assets/F-15C/HUD/aim9-03-dlz.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 3 编号索引">
  <a href="#hud-aim9-dlz-item-1">1. ASE 与目标速度向量</a>
  <a href="#hud-aim9-dlz-item-2">2. 转向点</a>
  <a href="#hud-aim9-dlz-item-3">3. 目标指示框（TD Box）</a>
  <a href="#hud-aim9-dlz-item-4">4. RMax：最大射程</a>
  <a href="#hud-aim9-dlz-item-5">5. RTR：不可逃逸射程</a>
  <a href="#hud-aim9-dlz-item-6">6. RMin：最小射程</a>
</nav>

<a id="hud-aim9-dlz-item-1"></a>

#### 1. ASE 与目标速度向量

ASE（Allowable Steering Error）是允许转向误差圆。目标位于最大射程之外时，ASE 处于缩小状态。

从 ASE 圆周伸出的直线表示目标的速度向量，按俯视视角表达目标运动方向，不是目标在 HUD 画面中上下移动的轨迹。

[返回图 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-2"></a>

#### 2. 转向点

亮点是转向点。操纵飞机，用 ASE 圆套住转向点，有助于让导弹在发射后以较少的转弯跟踪目标，从而节省能量、改善命中条件。

转向点提供的是发射方向参考，不是导引头锁定标记；图中仍在最大射程外，不能仅因转向点进入 ASE 就发射。

[返回图 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-3"></a>

#### 3. 目标指示框（TD Box）

TD Box 标出雷达 PDT 的视线方向（LOS）。它表示雷达指定目标的位置，不代表 AIM-9 红外导引头已经锁定该目标。

[返回图 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-4"></a>

#### 4. RMax：最大射程

DLZ 上方的标记表示当前条件下计算出的最大射程。目标在 RMax 之外时，尚未进入计算发射范围。

[返回图 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-5"></a>

#### 5. RTR：不可逃逸射程

RTR（Range Turn and Run）表示按目标转向并逃离的情况估算的射程，通常称为不可逃逸射程。目标进入 RTR 后，发射条件更有利，但并不意味着必然命中。

[返回图 3 索引](#hud-aim9-dlz)

<a id="hud-aim9-dlz-item-6"></a>

#### 6. RMin：最小射程

DLZ 下方的标记表示最小射程。目标距离小于 RMin 时，不应发射导弹；此时的 HUD 提示见[图 7](#hud-aim9-too-close)。

[返回图 3 索引](#hud-aim9-dlz) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-in-range"></a>

### 图 4 · 进入射程，但导引头仍处于 Cage

目标进入最大射程以内后，ASE 放大，HUD 出现 `IN RNG`。这表示射程条件已允许导弹有机会命中，但不代表红外导引头已经锁定目标。

![图 4 · 进入射程，但导引头仍处于 Cage](/assets/F-15C/HUD/aim9-04-in-range.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 4 编号索引">
  <a href="#hud-aim9-in-range-item-1">1. 放大的 ASE</a>
  <a href="#hud-aim9-in-range-item-2">2. 目标接近率与距离指针</a>
</nav>

<a id="hud-aim9-in-range-item-1"></a>

#### 1. 放大的 ASE

图中 ASE 已放大，但导引头小圆仍停在机头附近，未指向左侧 TD Box 中的目标。因此，这个状态下仍不应发射。

必须让导引头指向目标，并确认耳机中出现高频锁定音，再结合射程条件判断是否发射。仅有放大的 ASE 或 `IN RNG` 提示还不够。

[返回图 4 索引](#hud-aim9-in-range)

<a id="hud-aim9-in-range-item-2"></a>

#### 2. 目标接近率与距离指针

编号 2 指向雷达距离指针及其旁边的接近率读数。`709` 的单位为节，正值表示本机与目标之间的距离正在缩小；它不是导引头锁定提示。

[返回图 4 索引](#hud-aim9-in-range) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-slaved"></a>

### 图 5 · Uncage 后随动到 PDT

已有雷达 PDT 时，解除导引头囚笼，导引头会随动（slave）到该目标的视线方向（LOS）。

![图 5 · Uncage 后随动到 PDT](/assets/F-15C/HUD/aim9-05-slaved.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 5 编号索引">
  <a href="#hud-aim9-slaved-item-1">1. 随动到目标 LOS 的导引头</a>
</nav>

<a id="hud-aim9-slaved-item-1"></a>

#### 1. 随动到目标 LOS 的导引头

图中导引头小圆与目标框重合，右下方显示 `U`。雷达在这里提供目标方向，使导引头转向目标。

随动到目标方向不等于已经完成红外锁定。仍需听到导引头的高频锁定音，并满足射程条件后，才可发射。

[返回图 5 索引](#hud-aim9-slaved) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-rtr"></a>

### 图 6 · 进入 RTR 与近距射程环

目标进入 RTR 后，TD Box 下方出现三角提示，ASE 会闪烁。这些提示表示当前具备很好的发射条件；仍需保持导引头锁定，并注意 RMin 限制。

![图 6 · 进入 RTR 与近距射程环](/assets/F-15C/HUD/aim9-06-rtr.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 6 编号索引">
  <a href="#hud-aim9-rtr-item-1">1. 近距射程环</a>
  <a href="#hud-aim9-rtr-item-2">2. TD Box 下方的三角提示</a>
</nav>

<a id="hud-aim9-rtr-item-1"></a>

#### 1. 近距射程环

目标距离进入 12000 英尺以内时，HUD 还会显示一个圆形射程环，用于读取近距离目标斜距。它与外侧的 ASE 圆作用不同。

图中的内侧射程弧约为半圈，表示目标距离刚进入约 6000 英尺；右下方同时显示 `R 1.0`。

[返回图 6 索引](#hud-aim9-rtr)

<a id="hud-aim9-rtr-item-2"></a>

#### 2. TD Box 下方的三角提示

目标框下方的三角形表示目标已进入 RTR，并与闪烁的 ASE 一起提示有利的发射条件。静态截图无法表现 ASE 的闪烁效果。

[返回图 6 索引](#hud-aim9-rtr) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-too-close"></a>

### 图 7 · 小于最小射程：Break X

目标进入最小射程以内后，ASE 消失，取而代之的是闪烁的 Break X 提示。

![图 7 · 小于最小射程：Break X](/assets/F-15C/HUD/aim9-07-break-x.png)

<nav class="term-cloud tac-editor-index" aria-label="AIM-9 图 7 编号索引">
  <a href="#hud-aim9-too-close-item-1">1. Break X：距离过近</a>
</nav>

<a id="hud-aim9-too-close-item-1"></a>

#### 1. Break X：距离过近

图中的大 X 是脱离提示（Break X），表示此时不应发射。距离过近时，导弹可能来不及加速到有效速度；爆炸产生的碎片也可能波及本机的飞行路径。

即使导引头仍指向目标，或 TD Box 下方仍有三角提示，也不能忽略最小射程警告。应先拉开距离，再重新判断发射条件。

[返回图 7 索引](#hud-aim9-too-close) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-gun-composite"></a>

### 机炮合成模式

选中 SM（近程导弹）时，操作 **Coolie Up（Coolie 开关向上）** 可进入机炮合成模式。在保留 SM 导弹选择的同时，也可以选择使用机炮，HUD 会合成显示导弹与机炮相关符号。

<nav class="term-cloud tac-editor-index" aria-label="机炮合成模式图片索引">
  <a href="#hud-aim9-gun-composite-normal">图 1 · 正常 HUD 显示</a>
  <a href="#hud-aim9-gun-composite-rej">图 2 · HUD REJ 显示</a>
</nav>

<a id="hud-aim9-gun-composite-normal"></a>

#### 图 1 · 正常 HUD 显示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite.png" alt="SM 机炮合成模式：保留航向、空速和高度标尺，同时显示机炮准星与导弹导引头指向" />
  <figcaption>机炮合成模式：正常 HUD 显示</figcaption>
</figure>

图中同时显示机炮 GDS 准星、目标指示框和导弹导引头指向。左下方的 `S2M950` 合并显示了 SM 导弹状态与机炮余弹：`S2M` 表示 2 枚 AIM-9M，`950` 表示机炮剩余 950 发炮弹。

机炮准星的读法与使用方式可参考[机炮 GDS 说明](#hud-gun-gds)，导引头小圆的读法可参考[SM 导引头指向](#hud-aim9-uncaged-item-2)。

[返回机炮合成模式索引](#hud-aim9-gun-composite) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim9-gun-composite-rej"></a>

#### 图 2 · HUD REJ 显示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim9-gun-composite-rej.png" alt="HUD REJ 下的机炮合成模式：航向、空速和高度三个标尺隐藏，机炮准星与目标符号仍显示" />
  <figcaption>HUD REJ：隐藏三个飞行标尺后的机炮合成显示</figcaption>
</figure>

图 2 是同一机炮合成模式在 HUD REJ 下的显示。**航向、空速和高度三个标尺被隐藏**，以减少画面遮挡；机炮准星、导引头指向、目标框和雷达测距标尺仍保留。

这里改变的是 HUD 的显示简化程度，并没有退出机炮合成模式。右侧仍可见的 `0–10` 标尺是雷达测距标尺，不是高度标尺。

[返回机炮合成模式索引](#hud-aim9-gun-composite) · [返回 AIM-9 索引](#hud-aim9) · [返回顶部](#hud-page-top)

<a id="hud-aim7"></a>

## AIM-7 麻雀模式

AIM-7 的大部分 HUD 符号与 [AIM-9M 的介绍](#hud-aim9)相同，包括 ASE 圆、转向点、目标指示框（TD Box）、动态发射区（DLZ）和目标距离读数。本节重点说明 AIM-7 的不同之处。

**在本游戏中，AIM-7 必须在雷达 STT（Single Target Track，单目标跟踪）模式下发射。** AIM-7 使用半主动雷达制导，发射后仍需由本机雷达持续照射目标，直到导弹命中。不能套用 AIM-9 的导引头 Cage / Uncage 和红外锁定音判断方式。

<nav class="term-cloud tac-editor-index" aria-label="AIM-7 模式索引">
  <a href="#hud-aim7-selected">图 1 · 选择 AIM-7</a>
  <a href="#hud-aim7-stt">图 2 · STT 与发射提示</a>
  <a href="#hud-aim7-rtr">图 3 · 进入 RTR</a>
  <a href="#hud-aim7-flood">图 4 · FLOOD 照射</a>
</nav>

<a id="hud-aim7-selected"></a>

### 图 1 · 选择 AIM-7 与 12° 照射圆

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-01-selected.png" alt="选择 AIM-7 后显示的 12° FLOOD 照射参考圆，尚无 FLOOD 模式提示" />
  <figcaption>选择 AIM-7：外侧大圆为 FLOOD 照射区域参考</figcaption>
</figure>

选择 MR（中程导弹）并选中 AIM-7 后，HUD 会显示一个 **12° 圆环**，代表雷达在 FLOOD 模式下的雷达波照射区域。在 FLOOD 模式下，需要用这个圆环套住目标。

这个大圆不是 ASE 圆，也不是 AIM-9 的导引头搜索范围。选择 AIM-7 时就会出现该参考圆，因此，**看到圆环并不代表雷达已经进入 FLOOD 模式**；实际 FLOOD 状态见[图 4](#hud-aim7-flood)。

[返回 AIM-7 索引](#hud-aim7) · [返回顶部](#hud-page-top)

<a id="hud-aim7-stt"></a>

### 图 2 · STT 与发射提示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-02-stt.png" alt="AIM-7 STT 模式：外侧 FLOOD 参考圆、内侧 ASE 圆、转向点、TD Box 与 DLZ" />
  <figcaption>STT 下的发射提示：IN RNG，目标距离 9.3 海里</figcaption>
</figure>

雷达进入 STT 并跟踪目标后，HUD 显示与 AIM-9 类似的射程和转向提示。图中外侧大圆仍是 FLOOD 照射参考，内侧较小的圆才是 ASE 圆，亮点是转向点。

- [ASE 圆与目标速度向量](#hud-aim9-dlz-item-1)：读法参考 AIM-9M。ASE 上伸出的直线按俯视视角表示目标速度向量。
- [转向点](#hud-aim9-dlz-item-2)：用 ASE 圆套住转向点，以减少导弹发射后的转弯，节省导弹能量。
- [TD Box](#hud-aim9-dlz-item-3)：表示雷达跟踪目标的视线方向。
- [DLZ 射程标记](#hud-aim9-dlz-item-4)：RMax、RTR 和 RMin 的读法与 AIM-9 部分相同，应读取当前 AIM-7 的计算值。

图中 ASE 已放大，显示 `IN RNG`，`R 9.3` 表示目标斜距为 9.3 海里。这些符号用于判断射程和转向条件；**发射时仍必须保持雷达处于 STT 模式**，发射后继续保持跟踪和照射。

[返回 AIM-7 索引](#hud-aim7) · [返回顶部](#hud-page-top)

<a id="hud-aim7-rtr"></a>

### 图 3 · 进入 RTR

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-03-rtr.png" alt="AIM-7 目标进入 RTR，TD Box 下方出现三角提示，目标距离 7.4 海里" />
  <figcaption>进入 RTR：目标框下方出现三角提示</figcaption>
</figure>

图中目标框下方出现三角提示，目标距离为 `R 7.4`，即 7.4 海里。进入 RTR 后的三角提示和 ASE 闪烁含义可参考 [AIM-9 的 RTR 说明](#hud-aim9-rtr)：它们表示当前发射条件更有利，并不保证必然命中。静态图片无法展示闪烁效果。

与 AIM-9 相比，这里最重要的区别仍是制导支持：AIM-7 必须在 STT 下发射，且不能在发射后停止雷达照射。即使目标已经进入 RTR，也不意味着导弹可以自主制导。

[返回 AIM-7 索引](#hud-aim7) · [返回顶部](#hud-page-top)

<a id="hud-aim7-flood"></a>

### 图 4 · FLOOD 照射模式

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim7-04-flood.png" alt="AIM-7 FLOOD 模式：HUD 显示 FLOOD，目标保持在 12° 照射圆内" />
  <figcaption>FLOOD 模式：用 12° 照射圆持续套住目标</figcaption>
</figure>

最后一张图显示实际的 FLOOD 模式，HUD 右下方有 `FLOOD` 提示。此时应操纵飞机，让目标持续保持在 12° 圆环内，使雷达波照射目标，为 AIM-7 提供目标反射的制导回波。

如果 AIM-7 已在 STT 下发射，但导弹飞行途中 STT 锁定丢失，可以切换到 FLOOD 继续提供照射支持。这里的 FLOOD 用于说明发射后的丢锁支持，**不改变本游戏中 AIM-7 必须在 STT 下发射的要求**。

FLOOD 不会自动建立 STT 跟踪，也不会让 AIM-7 变成自主制导导弹。操作方式还可参考[自动锁定模式中的 FLOOD 说明](#hud-aacq-flood)。

[返回 AIM-7 索引](#hud-aim7) · [返回顶部](#hud-page-top)

<a id="hud-aim120"></a>

## AIM-120 AMRAAM 模式

AMRAAM 的 ASE、转向点、TD Box 和 DLZ 读法与前面的 [AIM-9](#hud-aim9) 和 [AIM-7](#hud-aim7) 大致相同。本节说明本游戏中 AIM-120 的目视发射方式，以及进入 RTR 后不同的目标框提示。

<nav class="term-cloud tac-editor-index" aria-label="AMRAAM 模式索引">
  <a href="#hud-aim120-visual">图 1 · 无 PDT 目视发射</a>
  <a href="#hud-aim120-pdt">图 2 · PDT 与射程提示</a>
  <a href="#hud-aim120-in-range">图 3 · 进入射程</a>
  <a href="#hud-aim120-rtr">图 4 · RTR 六角提示</a>
</nav>

<a id="hud-aim120-visual"></a>

### 图 1 · 无 PDT 时的目视发射

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-01-visual.png" alt="AIM-120 无 PDT 目视模式：虚线 12° 圆环与 VISUAL 提示" />
  <figcaption>VISUAL 模式：虚线 12° 圆环为目视发射参考</figcaption>
</figure>

**没有雷达 PDT 时，也可以发射 AIM-120。** 图中 HUD 显示 `VISUAL`，并用虚线绘出一个 **12° 圆环**。目视发射时，应确认目标在 **10 海里以内**，并用这个圆环套住目标。

在这一距离范围内，如果目标距离较远，还需要考虑目标运动的提前量，不能只按目标当前的位置瞄准。

这个虚线圆是 AIM-120 目视模式的参考，不是 ASE 圆，也不是 AIM-7 的 FLOOD 照射圆。不要把 AIM-7 必须在 STT 下发射的要求套用到这里的目视模式。

[返回 AMRAAM 索引](#hud-aim120) · [返回顶部](#hud-page-top)

<a id="hud-aim120-pdt"></a>

### 图 2 · PDT 与射程提示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-02-pdt.png" alt="AIM-120 有 PDT 时的缩小 ASE、转向点、TD Box 和 DLZ，目标距离 40.7 海里" />
  <figcaption>有 PDT 的发射前显示：目标仍在最大射程外</figcaption>
</figure>

雷达有 PDT 后，HUD 显示目标指示框、ASE、转向点和 DLZ。图中 `R 40.7` 表示目标斜距为 40.7 海里，ASE 处于缩小状态，目标尚未进入当前计算的最大射程。

共通符号可直接参考前面的说明：

- [ASE 与目标速度向量](#hud-aim9-dlz-item-1)：ASE 的大小变化和圆周上速度向量的读法相同。
- [转向点](#hud-aim9-dlz-item-2)：用 ASE 圆套住转向点，改善发射方向。
- [TD Box](#hud-aim9-dlz-item-3)：标出雷达 PDT 的视线方向。
- [RMax](#hud-aim9-dlz-item-4)、[RTR](#hud-aim9-dlz-item-5) 和 [RMin](#hud-aim9-dlz-item-6)：读法相同，但应读取当前 AIM-120 的 DLZ 计算值。

图一的 10 海里条件针对无 PDT 的目视发射，并不是有 PDT 时 AIM-120 的统一射程上限。

[返回 AMRAAM 索引](#hud-aim120) · [返回顶部](#hud-page-top)

<a id="hud-aim120-in-range"></a>

### 图 3 · 进入射程

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-03-in-range.png" alt="AIM-120 进入射程：ASE 放大，HUD 显示 IN RNG 和 R 27.6" />
  <figcaption>进入当前发射范围：IN RNG，目标距离 27.6 海里</figcaption>
</figure>

图中目标进入当前计算的发射范围，ASE 放大，HUD 显示 `IN RNG`；`R 27.6` 表示目标斜距为 27.6 海里。

ASE 和 DLZ 的判断方式与前面的导弹相同：结合转向点和当前射程标记评估发射条件，不能把 `IN RNG` 理解为必然命中。这里也不使用 AIM-9 的 Cage / Uncage 和红外锁定音作为发射判断。

[返回 AMRAAM 索引](#hud-aim120) · [返回顶部](#hud-page-top)

<a id="hud-aim120-rtr"></a>

### 图 4 · 进入 RTR 后的六角提示

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/aim120-04-rtr.png" alt="AIM-120 进入 RTR 后，TD Box 下方显示六角星状提示符" />
  <figcaption>进入 RTR：TD Box 下方出现六角提示符</figcaption>
</figure>

**目标进入 RTR 后，TD Box 下方会出现六角提示符**，即图中的六角星状符号。这是 AIM-120 与前面 AIM-9、AIM-7 三角提示的区别。

RTR 的含义可参考[不可逃逸射程说明](#hud-aim9-dlz-item-5)。六角提示表示当前具备更有利的发射条件，并不保证命中；仍需结合 ASE、DLZ 和最小射程判断。

图中目标距离为 `R 28.8`，即 28.8 海里。RTR 会随当前条件变化，不能把某一张图中的距离当作固定阈值。

[返回 AMRAAM 索引](#hud-aim120) · [返回顶部](#hud-page-top)

<a id="hud-auto-acquisition"></a>

## 自动锁定模式

雷达自动捕获模式用于快速锁定搜索范围内的目标，无需手动移动雷达光标进行指定。SS、VS 和 BST 的自动锁定距离上限均为 10 海里，LR BST 则可自动锁定最远 40 海里内的目标。

<nav class="term-cloud tac-editor-index" aria-label="自动捕获模式索引">
  <a href="#hud-aacq-ss">SS 超级搜索</a>
  <a href="#hud-aacq-vs">VS 垂直扫描</a>
  <a href="#hud-aacq-bst">BST 孔径模式</a>
  <a href="#hud-aacq-lr-bst">LR BST 远距离孔径模式</a>
  <a href="#hud-aacq-flood">FLOOD 泛指照射</a>
</nav>

<a id="hud-aacq-ss"></a>

### SS — Supersearch（超级搜索）

HUD 上的大圆表示 20° 搜索范围。在本游戏中，可使用雷达天线俯仰控制，使搜索范围向上或向下偏移最多 10°。将目标置于搜索范围内，雷达便可自动捕获 10 海里内的目标。

下图依次显示居中、上移和下移时的 HUD 搜索圆。偏移后，圆圈可能有一部分超出 HUD 显示范围。

<div class="hud-scan-gallery">
  <figure>
    <img src="/assets/F-15C/HUD/ss-center.png" alt="SS 超级搜索：搜索圆居中" loading="lazy">
    <figcaption>居中</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-up.png" alt="SS 超级搜索：搜索范围向上偏移 10°" loading="lazy">
    <figcaption>向上偏移 10°</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/HUD/ss-down.png" alt="SS 超级搜索：搜索范围向下偏移 10°" loading="lazy">
    <figcaption>向下偏移 10°</figcaption>
  </figure>
</div>

[返回模式索引](#hud-auto-acquisition) · [返回顶部](#hud-page-top)

<a id="hud-aacq-vs"></a>

### VS — Vertical Scan（垂直扫描）

VS 使用两条扫描线（two-bar），在机身基准线（FRL）上方 +5° 至 +55° 的范围内进行垂直扫描，方位宽度为 7.5°。

HUD 上的垂直线表示扫描方向，实际搜索范围会延伸到 HUD 上方。让目标进入这一狭长的扫描区域，雷达可自动锁定 10 海里内的目标。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/vs.png" alt="VS 垂直扫描：HUD 上方向上的垂直扫描指示线" loading="lazy">
  <figcaption>VS 垂直扫描</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回顶部](#hud-page-top)

<a id="hud-aacq-bst"></a>

### BST — Boresight（孔径模式）

BST 沿雷达孔径轴线搜索。将目标置于 HUD 的孔径圆内，雷达可自动锁定 10 海里内的目标。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/bst.png" alt="BST 孔径模式：HUD 中央的孔径搜索圆" loading="lazy">
  <figcaption>BST 孔径模式</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回顶部](#hud-page-top)

<a id="hud-aacq-lr-bst"></a>

### LR BST — Long-Range Boresight（远距离孔径模式）

LR BST 的使用方式与 BST 类似，但 HUD 搜索圆更小，自动锁定距离上限增加到 40 海里。将目标保持在小圆内，便可在比 SS、VS 和 BST 更远的距离上自动捕获目标。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/lr-bst.png" alt="LR BST 远距离孔径模式：HUD 中央较小的搜索圆" loading="lazy">
  <figcaption>LR BST 远距离孔径模式</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回顶部](#hud-page-top)

<a id="hud-aacq-flood"></a>

### FLOOD — 泛指照射模式

FLOOD 通常配合 AIM-7 半主动雷达制导导弹使用。它向机头前方的区域提供雷达照射，不会像上述自动捕获模式那样建立 STT 锁定。

如果 AIM-7 已在飞行途中，而雷达的 STT 锁定丢失，可以切换到 FLOOD，继续照射目标，为导弹提供目标反射的雷达回波。此时需要操纵飞机，让目标持续保持在 HUD 的照射圆内，以维持制导支持。

HUD 显示照射圆和 `FLOOD` 提示。切换到该模式后仍需持续照射目标，并不代表导弹已转为自主制导。

<figure class="hud-mode-figure">
  <img src="/assets/F-15C/HUD/flood.png" alt="FLOOD 泛指照射模式：HUD 照射圆与 FLOOD 提示" loading="lazy">
  <figcaption>FLOOD 泛指照射</figcaption>
</figure>

[返回模式索引](#hud-auto-acquisition) · [返回顶部](#hud-page-top)
