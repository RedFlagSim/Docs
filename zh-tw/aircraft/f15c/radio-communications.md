# F-15C 無線電通信

無線電將 F-15C 與編隊、AWACS/GCI、塔台及地勤連結。訊息遵循簡單格式：呼叫對象、要求的動作，以及執行所需戰術資訊。

## 訊息結構

1. 呼號：接收者與發話者，例如 `Chevy 22, Chevy 21`。
2. 指令或報告：動作或狀態，例如 `engage bandits` 或 `missile launch`。
3. 細節：方位、距離、高度、目標類型、時鐘方向或結果。

通話應簡短精確；戰鬥中的無線電時間也是資源。

## 編隊與僚機指令

| 指令組 | 用途 |
| --- | --- |
| Engage my target | 命令僚機攻擊玩家指定目標 |
| Engage bandits | 命令搜尋並攻擊空中敵機 |
| Cover me | 處理對玩家最直接的威脅 |
| Rejoin | 返回編隊 |
| Go to route / RTB | 沿規劃航線前進或返航 |
| Radar on/off | 控制僚機雷達發射 |
| ECM on/off | 控制僚機干擾 |
| Smoke on/off | 目視識別或特技拉煙 |
| Formation commands | 調整間距與隊形 |

僚機通常以 `Copy`、`Roger`、`Affirm` 簡短確認；不能執行時會回覆 `Negative` 或 `Unable`。

## AWACS 與 GCI 請求

F-15C 雷達靜默、受干擾或注意其他方向時，預警機或地面管制可提供戰術態勢。

| 請求 | 回傳資訊 |
| --- | --- |
| Bogey dope | 最近敵機或不明飛機的方位、距離、高度與相對朝向 |
| Picture | 區域內偵測到的機群摘要 |
| Vector to home plate | 最近合適友軍機場的方位與距離 |
| Vector to tanker | 最近友軍加油機的方位與距離 |

報告受限於感測器覆蓋與陣營掌握的情報，仍應用雷達、TEWS 與目視交叉核實。

## 空中交通管制

ATC 用於地面移動、起飛、進場與降落。常見請求包括：

- 滑行許可
- 起飛許可
- 返場或進場請求
- 降落許可
- 重飛或間隔指示

進場時塔台可提供跑道、航道、航機間隔及下滑道修正。

## 地勤

停在有效機場或服務區域時可使用地勤指令。依任務條件，可加油、補充武器、維修與調整掛載。

## 其他單位的無線電訊息

| 來源 | 含義範例 |
| --- | --- |
| 僚機 | 起飛滑跑、收輪、歸隊、交戰、防禦、返航 |
| 僚機武器呼叫 | `Fox One`、`Fox Two`、`Fox Three`、`Guns`、`Winchester` |
| 僚機威脅呼叫 | 雷達鎖定、地面雷達鎖定、飛彈發射、SAM 發射 |
| AWACS/GCI | 敵情、交會告警、未發現威脅、引導 |
| ATC | 滑行、起飛、降落、盤旋、下滑道修正 |

## 語音告警系統

F-15C 的語音告警系統常稱 Betty，提示緊急機況與故障。

| 觸發條件 | 語音訊息 |
| --- | --- |
| 右發動機起火 | `Engine fire right` |
| 左發動機起火 | `Engine fire left` |
| 飛控損壞 | `Flight controls` |
| 起落架放下時超過安全速度 | `Gear down` |
| ILS 進場時未放起落架 | `Gear up` |
| 燃油達 Bingo 設定 | `Bingo fuel` |
| 低燃油 | `Fuel 1500`, `Fuel 800`, `Fuel 500` |
| 自動駕駛／控制系統故障 | `ACS failure` |
| 導航電腦故障 | `NCS failure` |
| 電子干擾故障 | `ECM failure` |
| 液壓故障 | `Hydraulics failure` |
| 雷達故障 | `Radar failure` |
| 超過最大 G | `Maximum G` |
| 超過最大攻角 | `Maximum angle of attack` |
| 臨界速度 | `Critical speed` |
| 飛彈告警 | `Missile` 後接時鐘方向及高／低提示。 |

語音告警應優先處理。先辨識威脅或故障，維持飛機操縱，再修正配置或防禦。
