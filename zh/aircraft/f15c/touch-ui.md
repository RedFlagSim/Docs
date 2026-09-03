# 触摸 UI

本文适用 iOS 和安卓触控设备。

## Navigation + AA Mode

### Navigation Mode

![Navigation Mode](/assets/F-15C/TouchUI/navigation_mode.png)

### AA Mode

![AA Mode](/assets/F-15C/TouchUI/aa_mode.png)

<a id="ui-terms-top"></a>

## UI 编号

<div class="term-cloud">
  <a href="#item-1">1 功能面板</a>
  <a href="#item-2">2 模式切换</a>
  <a href="#item-3">3 UI 元素编辑</a>
  <a href="#item-4">4 主菜单</a>
  <a href="#item-5">5 输入指示器</a>
  <a href="#item-6">6 起落架开关</a>
  <a href="#item-7">7 襟翼开关</a>
  <a href="#item-8">8 油门</a>
  <a href="#item-9">9 油门模式开关</a>
  <a href="#item-10">10 减速板开关</a>
  <a href="#item-11">11 显示 MFD</a>
  <a href="#item-12">12 显示战术地图</a>
  <a href="#item-13">13 paddle 开关</a>
  <a href="#item-15">15 舵</a>
  <a href="#item-16">16 padlock</a>
  <a href="#item-17">17 相机切换菜单</a>
  <a href="#item-18">18 Cursor</a>
  <a href="#item-19">19 castle 开关</a>
  <a href="#item-20">20 状态栏</a>
  <a href="#item-21">21 chaff/flare 释放</a>
  <a href="#item-22">22 主武器开关</a>
  <a href="#item-23">23 机炮板机</a>
  <a href="#item-24">24 武器选择开关</a>
  <a href="#item-25">25 antenna elevation</a>
  <a href="#item-26">26 coolie 开关</a>
  <a href="#item-27">27 武器释放</a>
  <a href="#item-28">28 auto acquisition 开关</a>
</div>

## 详细解释

<a id="item-1"></a>
### 1. 功能面板

长按或双击可激活临时功能触控面板。面板分为 4 个 Tab：

<div class="panel-grid">
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_main.png" alt="Touch Panel MAIN" />
    <figcaption>MAIN</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_nav.png" alt="Touch Panel NAV" />
    <figcaption>NAV</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_hud.png" alt="Touch Panel HUD" />
    <figcaption>HUD</figcaption>
  </figure>
  <figure>
    <img src="/assets/F-15C/TouchUI/touch_panel_misc.png" alt="Touch Panel MISC" />
    <figcaption>MISC</figcaption>
  </figure>
</div>

[返回顶部](#ui-terms-top)

<a id="item-2"></a>
### 2. 模式切换

在 Navigation 模式与 AA（空对空）模式之间切换。

[返回顶部](#ui-terms-top)

<a id="item-3"></a>
### 3. UI 元素编辑

进入 UI 元素编辑模式。在该模式下，选中 UI 元素会显示简要功能提示；你可以将 UI 元素移动到期望位置，系统会自动持久化保存。

![Edit Mode](/assets/F-15C/TouchUI/edit_mode.png)

[返回顶部](#ui-terms-top)

<a id="item-4"></a>
### 4. 主菜单

打开游戏主菜单，包含以下功能入口：

- `Aircraft Setup`：打开玩家飞机配置 UI
- `Preferences`：打开游戏首选项 UI
- `Weather / Time`：打开天气与时间配置 UI
- `Tac Map`：打开战术地图
- `Tactical`：战术菜单
- `Freeze / Resume`：暂停游戏/恢复游戏
- `Playback`：进入回放模式
- `Restart`：重启当前任务
- `Calibrate`：校准陀螺仪
- `Quit`：退出当前任务

![Main Menu](/assets/F-15C/TouchUI/main_menu.png)

[返回顶部](#ui-terms-top)

<a id="item-5"></a>
### 5. 输入指示器

显示当前玩家输入与飞控输出数据，包含俯仰、滚转、方向舵和油门；该数据支持回放。

[返回顶部](#ui-terms-top)

<a id="item-6"></a>
### 6. 起落架开关

控制起落架收放。必须在 250 节以下放下起落架；250 节以上放下会导致起落架损坏。

[返回顶部](#ui-terms-top)

<a id="item-7"></a>
### 7. 襟翼开关

控制襟翼收放。

[返回顶部](#ui-terms-top)

<a id="item-8"></a>
### 8. 油门

油门输入范围为怠速至最大加力。持续向右拖动 2 秒可切换为单发动机控制模式。

![Single Throttle](/assets/F-15C/TouchUI/single_throttle.png)

[返回顶部](#ui-terms-top)

<a id="item-9"></a>
### 9. 油门模式开关

该开关为三挡：

- 最下挡：手动模式。
- 中挡：IAS 跟随模式。该模式下，通过移动油门设定目标 IAS，飞控自动跟随。
- 最上挡：在速迎角跟随模式。该模式下，油门自动维持在速迎角，适合新手玩家在降落时使用。

[返回顶部](#ui-terms-top)

<a id="item-10"></a>
### 10. 减速板开关

该开关为三位保持式：

- 中位：减速板停止。
- 上位：部署减速板。
- 下位：收回减速板。

操作逻辑类似汽车电动车窗开关，但该开关不会自动回中。

[返回顶部](#ui-terms-top)

<a id="item-11"></a>
### 11. 显示 MFD

在座舱相机时，这两个按钮在按住的情况下会控制相机盯住对应显示器。此时右手拇指可以操作游标和其他功能按钮。下面两图是对应的观察视角。

![VSD View](/assets/F-15C/TouchUI/vsd_.png)

![MPCD View](/assets/F-15C/TouchUI/mpcd_.png)

[返回顶部](#ui-terms-top)

<a id="item-12"></a>
### 12. 显示战术地图

显示运行时战术地图。

![Runtime Tac Map](/assets/F-15C/TouchUI/runtime_tacmap.png)

[返回顶部](#ui-terms-top)

<a id="item-13"></a>
### 13. paddle 开关

自动驾驶开启后，按住该按钮可临时断开自动驾驶。

[返回顶部](#ui-terms-top)

<a id="item-15"></a>
### 15. 舵

左右拖动用于控制方向舵与前轮转向。向上拖动可控制主起落架刹车，以及传感器或武器的 `cage/uncage` 开关。

[返回顶部](#ui-terms-top)

<a id="item-16"></a>
### 16. padlock

用于自动视角锁定。如果本机附近存在其他实体，按住后可使视角锁定该实体。若存在多个实体，可右手按住 `padlock`，左手双击空白区域切换到下一个实体。

[返回顶部](#ui-terms-top)

<a id="item-17"></a>
### 17. 相机切换菜单

用于切换相机位。操作方法如下：

- 点击一次：自动切换到下一个相机位。
- 按住：弹出相机菜单；保持按住并拖动至目标相机位，松开后完成切换。

[返回顶部](#ui-terms-top)

<a id="item-18"></a>
### 18. Cursor

控制 `VSD` 与 `SIT` 屏幕中的游标。双击该按钮可手动指定目标。

[返回顶部](#ui-terms-top)

<a id="item-19"></a>
### 19. castle 开关

用于管理显示器与兴趣显示器（SOI）：

- `castle` 向上拨动：在 `VSD` 与 `SIT` 之间切换兴趣显示器；后续游标控制会作用于当前兴趣显示器。
- 当 `VSD` 作为兴趣显示器时：
  - `castle` 向右拨动：切换 `MPCD` 显示挂载管理界面。
  - `castle` 向左拨动：切换回 `SIT` 显示界面。
- 当 `SIT` 作为兴趣显示器时：
  - `castle` 向右拨动：切换非中心模式。
  - `castle` 向左拨动：切换扩展模式。
  - `castle` 向下拨动：切换到飞行小队模式（该模式固定 5 海里显示范围）。

[返回顶部](#ui-terms-top)

<a id="item-20"></a>
### 20. 状态栏

状态栏从右向左显示以下信息：

- 游戏帧率
- 风速度（节）
- 风方向（相对视线）
- 玩家飞机毛重
- 游戏时间
- 自动驾驶开启标记

[返回顶部](#ui-terms-top)

<a id="item-21"></a>
### 21. chaff/flare 释放

释放逻辑如下：

- 点击：释放 1 枚 `chaff` 和 1 枚 `flare`。
- 向上拨动：释放 1 枚 `chaff`。
- 向下拨动：释放 1 枚 `flare`。
- 向左拨动：释放 5 枚 `chaff` 和 5 枚 `flare`。
- 向右拨动：释放 10 枚 `chaff` 和 10 枚 `flare`。

[返回顶部](#ui-terms-top)

<a id="item-22"></a>
### 22. 主武器开关

发射武器前，需要将该开关置于开启状态。

[返回顶部](#ui-terms-top)

<a id="item-23"></a>
### 23. 机炮板机

当当前武器选择为机炮时，点击即可发射。

[返回顶部](#ui-terms-top)

<a id="item-24"></a>
### 24. 武器选择开关

上下拨动可在 `AAM`（先进中程导弹）、`MRM`（中程导弹）、`SRM`（近程导弹）与 `GUN` 之间切换；左右拨动可在导弹实体间轮流选中。

[返回顶部](#ui-terms-top)

<a id="item-25"></a>
### 25. antenna elevation

当雷达处于 LRW/TWS 模式时，用于调整天线扫描基准的俯仰角度。

[返回顶部](#ui-terms-top)

<a id="item-26"></a>
### 26. Coolie 开关

用于页面和显示器管理。在 F-15C 工作流中，可以把 Coolie 开关理解为快速切换座舱注意力的控件，用来在不打开主菜单的情况下管理战术页面。使用光标或指定目标前，先确认当前激活的是哪块显示器。

[返回顶部](#ui-terms-top)

<a id="item-27"></a>
### 27. 武器释放

当 Master Arm 开启且当前武器就绪时，释放所选导弹或挂载。空空导弹发射前，应确认目标来源、距离提示和飞机姿态。该按钮与机炮扳机分离，机炮仍通过 Gun Trigger 发射。

[返回顶部](#ui-terms-top)

<a id="item-28"></a>
### 28. auto acquisition 开关

自动锁定开关，点击用来切换雷达模式。

[返回顶部](#ui-terms-top)

<style scoped>
.term-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 6px;
}

.term-cloud a {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  line-height: 1.2;
  font-size: 13px;
  transition: border-color .16s ease, background-color .16s ease, transform .16s ease;
}

.term-cloud a:hover {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  transform: translateY(-1px);
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 12px 0 4px;
}

.panel-grid figure {
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  overflow: hidden;
}

.panel-grid img {
  display: block;
  width: 100%;
  height: auto;
}

.panel-grid figcaption {
  padding: 6px 8px;
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}

@media (max-width: 640px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
