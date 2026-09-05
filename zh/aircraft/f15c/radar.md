---
title: AN/APG-63雷达和VSD
---

## 远距搜索（LRS）

LRS 是中远距交战的基础搜索模式。

![图 54. VSD 远距搜索模式](/assets/F-15C/Manual/fig-54-vsd-lrs-mode.png)

VSD 会显示距离标尺、天线俯仰覆盖、目标回波、目标指示游标（TDC）以及雷达工作状态。应结合距离标尺和天线俯仰使用，否则目标即使在距离内也可能因为高度覆盖错误而被漏掉。

## 单目标跟踪（STT）

STT 将雷达能量集中到一个目标上，提供精确目标数据。

![图 55. VSD STT 模式](/assets/F-15C/Manual/fig-55-vsd-stt-mode.png)

STT 可用于 AIM-7 制导，也可支持 AIM-120 发射。代价是雷达不再搜索其他目标，且目标通常会收到被硬锁的 RWR 告警。

## 边扫描边跟踪（TWS）

TWS 在继续扫描的同时维护多个目标航迹。

![图 56. TWS 模式](/assets/F-15C/Manual/fig-56-tws-mode.png)

TWS 适合多目标态势管理和 AIM-120 发射，但航迹稳定性不如 STT。目标剧烈机动、距离过近或需要最高精度时，应考虑切换 STT。

## 干扰导引（HOJ）

当目标强烈电子干扰时，雷达可能显示干扰方向而不是完整距离/高度数据。

![图 57. HOJ 模式](/assets/F-15C/Manual/fig-57-hoj-mode.png)

HOJ 允许导弹沿干扰源方向飞行，但在烧穿前不能提供完整目标解算。应把它作为压制手段，而不是干净雷达锁定的替代品。

## 近距自动捕获

### 垂直扫描

![图 58. 垂直扫描模式](/assets/F-15C/Manual/fig-58-radar-vertical-scan-mode.png)

垂直扫描搜索机头上方狭长区域，适合合并后目标穿过机头上方时使用。

### 孔径模式

![图 59. 孔径模式](/assets/F-15C/Manual/fig-59-radar-boresight-mode.png)

孔径模式搜索机头前方窄圆锥，锁定第一个进入范围的目标。

### 机炮自动模式

![图 60. 机炮自动模式](/assets/F-15C/Manual/fig-60-radar-gun-acquisition-mode.png)

机炮自动模式搜索机炮瞄准区域，捕获后进入 STT，为机炮解算提供数据。

### 泛指模式

![图 61. 泛指模式](/assets/F-15C/Manual/fig-61-radar-flood-mode.png)

泛指模式为 AIM-7 提供宽波束照射，目标必须保持在泛指圆内直到导弹命中。

## 实用流程

1. 以 LRS 建立远距态势。
2. 根据目标高度调整天线俯仰。
3. 多目标排序时使用 TWS。
4. 需要稳定照射或近距精确锁定时使用 STT。
5. 合并后改用自动捕获模式。
6. 遭遇强干扰时评估 HOJ，并继续争取烧穿距离。
