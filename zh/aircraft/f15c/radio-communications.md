# F-15C 无线电通信

无线电将 F-15C 与编队、AWACS/GCI、塔台及地勤连结。讯息遵循简单格式：呼叫对象、要求的动作，以及执行所需战术资讯。

## 讯息结构

1. 呼号：接收者与发话者，例如 `Chevy 22, Chevy 21`。
2. 指令或报告：动作或状态，例如 `engage bandits` 或 `missile launch`。
3. 细节：方位、距离、高度、目标类型、时钟方向或结果。

通话应简短精确；战斗中的无线电时间也是资源。

## 编队与僚机指令

| 指令组 | 用途 |
| --- | --- |
| Engage my target | 命令僚机攻击玩家指定目标 |
| Engage bandits | 命令搜寻并攻击空中敌机 |
| Cover me | 处理对玩家最直接的威胁 |
| Rejoin | 返回编队 |
| Go to route / RTB | 沿规划航线前进或返航 |
| Radar on/off | 控制僚机雷达发射 |
| ECM on/off | 控制僚机干扰 |
| Smoke on/off | 目视识别或特技拉烟 |
| Formation commands | 调整间距与队形 |

僚机通常以 `Copy`、`Roger`、`Affirm` 简短确认；不能执行时会回覆 `Negative` 或 `Unable`。

## AWACS 与 GCI 请求

F-15C 雷达静默、受干扰或注意其他方向时，预警机或地面管制可提供战术态势。

| 请求 | 回传资讯 |
| --- | --- |
| Bogey dope | 最近敌机或不明飞机的方位、距离、高度与相对朝向 |
| Picture | 区域内侦测到的机群摘要 |
| Vector to home plate | 最近合适友军机场的方位与距离 |
| Vector to tanker | 最近友军加油机的方位与距离 |

报告受限于感测器覆盖与阵营掌握的情报，仍应用雷达、TEWS 与目视交叉核实。

## 空中交通管制

ATC 用于地面移动、起飞、进场与降落。常见请求包括：

- 滑行许可
- 起飞许可
- 返场或进场请求
- 降落许可
- 重飞或间隔指示

进场时塔台可提供跑道、航道、航机间隔及下滑道修正。

## 地勤

停在有效机场或服务区域时可使用地勤指令。依任务条件，可加油、补充武器、维修与调整挂载。

## 其他单位的无线电讯息

| 来源 | 含义范例 |
| --- | --- |
| 僚机 | 起飞滑跑、收轮、归队、交战、防御、返航 |
| 僚机武器呼叫 | `Fox One`、`Fox Two`、`Fox Three`、`Guns`、`Winchester` |
| 僚机威胁呼叫 | 雷达锁定、地面雷达锁定、飞弹发射、SAM 发射 |
| AWACS/GCI | 敌情、交会告警、未发现威胁、引导 |
| ATC | 滑行、起飞、降落、盘旋、下滑道修正 |

## 语音告警系统

F-15C 的语音告警系统常称 Betty，提示紧急机况与故障。

| 触发条件 | 语音讯息 |
| --- | --- |
| 右发动机起火 | `Engine fire right` |
| 左发动机起火 | `Engine fire left` |
| 飞控损坏 | `Flight controls` |
| 起落架放下时超过安全速度 | `Gear down` |
| ILS 进场时未放起落架 | `Gear up` |
| 燃油达 Bingo 设定 | `Bingo fuel` |
| 低燃油 | `Fuel 1500`, `Fuel 800`, `Fuel 500` |
| 自动驾驶／控制系统故障 | `ACS failure` |
| 导航电脑故障 | `NCS failure` |
| 电子干扰故障 | `ECM failure` |
| 液压故障 | `Hydraulics failure` |
| 雷达故障 | `Radar failure` |
| 超过最大 G | `Maximum G` |
| 超过最大攻角 | `Maximum angle of attack` |
| 临界速度 | `Critical speed` |
| 飞弹告警 | `Missile` 后接时钟方向及高／低提示。 |

语音告警应优先处理。先辨识威胁或故障，维持飞机操纵，再修正配置或防御。
