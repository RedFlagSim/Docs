# F-15C 이글 공중우세 전투기

![F-15C Header](/assets/F-15C/header.jpg)

이 장은 Red Flag Sim에서 구현된 F-15C의 시스템(조종 입력, 조종석 계기, 레이더, 무기, 방어 시스템)을 설명합니다. 실제 항공기 정비/비행 매뉴얼이 아닌 시뮬레이션 참조 가이드입니다.

## 비행 물리와 상태

비행 상태는 IAS, TAS/Mach, 고도, 자세, AoA, 과부하, 연료량 등 여러 값의 조합으로 결정됩니다. HUD를 기준으로 보되, 조종석 계기로 항상 교차 확인해야 합니다.

단위는 같은 의미가 아닙니다. AoA는 기하학적 각도와 동일하지 않고, IAS/TAS/Mach/G도 각각 다른 의미를 가집니다.

참조: [조종석 계기](/ko/Docs/aircraft/f15c/cockpit-instruments.html), [HUD 운용](/ko/Docs/aircraft/f15c/hud-operation.html), [터치 UI](/ko/Docs/aircraft/f15c/touch-ui.html).

## 레이더와 표적 정보

AN/APG-63은 VSD에서 표시됩니다. 현재 구현된 핵심 모드는 LRS, TWS, STT, 근거리 자동 포착입니다.

LRS는 검색, TWS는 스캔 중 추적 유지, STT는 단일 표적 추적입니다. 거리 스케일이 곧 고도 커버리지를 보장하지는 않습니다.

원시 리턴(raw), 트랙, STT 락은 서로 다른 상태입니다. 자세한 내용은 [AN/APG-63 레이더 및 VSD](/ko/Docs/aircraft/f15c/radar.html).

## 무기와 디스플레이

F-15C는 기관포, AIM-9, AIM-7, AIM-120을 지원합니다. 유사한 심볼이라도 무기와 모드별 조건이 다릅니다.

| 무기 | 핵심 | 
| --- | --- |
| 기관포 | 거리 데이터 가용 상태에 따라 GDS/BATR 참조가 다르게 표시됩니다. |
| AIM-9 | 시커 상태와 락 모드에 따라 유도 조건이 달라집니다. |
| AIM-7 | 현재 구현에서는 STT가 필요하며 발사 후도 조명 추적이 유지되어야 합니다. |
| AIM-120 | 레이다 조건으로 발사 판정을 하며, PDT 미지정 시 VISUAL 모드도 사용됩니다. |

ASE, 전환점, DLZ 조건은 발사 기하와 데이터 품질에 따라 동적으로 변합니다.

참조: [HUD 운용](/ko/Docs/aircraft/f15c/hud-operation.html), [AN/APG-63 레이더 및 VSD](/ko/Docs/aircraft/f15c/radar.html).

## 경고 및 대응

TEWS/RWR은 레이다 경고와 전자 교란 상태를 보여주며, RWR 심볼 거리값은 실제 거리값이 아닙니다.

참고: [방어 시스템](/ko/Docs/aircraft/f15c/defensive-systems.html).

## 권장 학습 순서

1. [터치 UI](/ko/Docs/aircraft/f15c/touch-ui.html)
2. [조종석 계기](/ko/Docs/aircraft/f15c/cockpit-instruments.html)
3. [HUD 운용](/ko/Docs/aircraft/f15c/hud-operation.html)
4. [AN/APG-63 레이더 및 VSD](/ko/Docs/aircraft/f15c/radar.html)
5. [방어 시스템](/ko/Docs/aircraft/f15c/defensive-systems.html)

약어: [부록: 약어](/ko/Docs/aircraft/f15c/appendix.html).

## 로드맵

현재 미구현:

1. 콜드 스타트(전원 오프 상태에서의 기동)
2. 지상 서비스(급유, 재무장, 정비, 외부 전원)
3. 완전한 공중 분리/탈출 시퀀스
4. 대화형 음성 통신(윙맨/AWACS/GCI/ATC/지상)
