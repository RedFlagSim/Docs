---
title: AN/APG-63 레이더와 VSD
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

## 장거리 탐색(LRS)

LRS는 포착 전에 원거리 공중 표적을 탐색하여 자기를 기준으로 한 방위와 거리를 표시합니다. 보통 VSD 표시 범위를 **40–80해리**로 설정해 원거리 반사파를 관찰합니다. 이는 표시 축척이며, 모든 표적을 해당 거리에서 탐지한다는 뜻은 아닙니다.

예상 표적 영역이 포함되도록 안테나 고각과 방위각 탐색 폭을 조정합니다. 반사파에 [포착 게이트](#lrs-item-9)를 맞추고 수동 포착을 시작하면, 성공 시 STT로 전환됩니다. LRS는 표적을 찾고 후속 추적 모드는 표적을 집중 추적합니다.

가로축은 방위각, 세로축은 거리이며 위쪽일수록 멀어집니다.

Touch UI의 **AA(자동 포착) 버튼**을 한 번 누르면 레이더 대기 상태에서 LRS로 전환됩니다. 다시 누르면 대기 상태로 돌아갑니다.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="장거리 탐색(LRS)">

다른 조작은 [Touch UI: 자동 포착](/ko/Docs/aircraft/f15c/touch-ui.html#item-28)을 참조하세요.

### 스캔 바

AA를 눌러 시작한 LRS의 기본 설정은 **방위각 120°, 6바 스캔**입니다.

바는 일정한 고각에서 안테나가 수평으로 한 번 훑는 탐색입니다. 여러 고각을 순차적으로 훑어 고도 영역을 탐색하며, 6바 스캔은 이런 탐색을 여섯 번 수행합니다. 인접 바 사이의 간격은 고정되어 있지 않고 탐색 범위에 따라 달라집니다.

LRS 스캔 바 수는 [Touch UI: 1. 기능 패널](/ko/Docs/aircraft/f15c/touch-ui.html#item-1)의 **MAIN 페이지**에서 선택합니다.

<a :href="lrsOverviewImage" target="_blank" rel="noopener">
  <img :src="lrsOverviewImage" alt="스캔 바">
</a>

이미지를 클릭하면 원본 해상도로 볼 수 있습니다. 아래 번호를 누르면 해당 설명으로 이동합니다.

<a id="lrs-index"></a>

### 기호 번호

<div class="term-cloud tac-editor-index">
  <a href="#lrs-item-1">1 레이더 반사파</a>
  <a href="#lrs-item-2">2 탐색 고도 범위</a>
  <a href="#lrs-item-3">3 안테나 고각 지시기</a>
  <a href="#lrs-item-4">4 반사파 이력</a>
  <a href="#lrs-item-5">5 스캔 바와 PRF</a>
  <a href="#lrs-item-6">6 포착 게이트의 불스아이 좌표</a>
  <a href="#lrs-item-7">7 자기 지상속도</a>
  <a href="#lrs-item-8">8 VSD 최대 표시 범위</a>
  <a href="#lrs-item-9">9 포착 게이트</a>
  <a href="#lrs-item-10">10 국부 수평선 기준</a>
  <a href="#lrs-item-11">11 불스아이 기준점</a>
  <a href="#lrs-item-12">12 항법 지점 3</a>
  <a href="#lrs-item-13">13 안테나 방위각 지시기</a>
  <a href="#lrs-item-14">14 방위각 탐색 경계</a>
  <a href="#lrs-item-15">15 자기 진대기속도</a>
</div>

<a id="lrs-item-1"></a>

### 1. 레이더 반사파

짧은 녹색 블록은 탐색 중 탐지된 반사파입니다. 위치로 방위와 거리를 읽을 수 있지만, 모양만으로 포착 여부나 피아를 판단할 수는 없습니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-2"></a>

### 2. 탐색 고도 범위

왼쪽의 원 두 개와 숫자는 포착 게이트 거리에서의 탐색 상한과 하한을 천 피트 단위로 표시합니다. 여기서 `29`와 `-2`는 약 29,000~−2,000피트입니다. 음수는 탐색 기하를 나타내며 지하 표적을 뜻하지 않습니다. 게이트 거리나 안테나 고각을 바꾸면 범위를 다시 확인하세요.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-3"></a>

### 3. 안테나 고각 지시기

왼쪽 눈금의 꺾쇠는 안테나 고각을 표시합니다. 2번의 탐색 고도 범위와 함께 읽으며, 표적 고도 표시는 아닙니다.

왼쪽 눈금은 +60°부터 −60°까지 6구간으로 나뉩니다. 중앙은 0°, 위쪽은 양의 고각, 아래쪽은 음의 고각입니다.

안테나 **ELE 노브**로 고각을 조정합니다. 터치 기기에서는 아래 조작부를 사용하면서 왼쪽 꺾쇠와 탐색 고도 범위를 확인합니다.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/25-antenna-elevation.png" alt="3. 안테나 고각 지시기">

[Touch UI: 안테나 고각](/ko/Docs/aircraft/f15c/touch-ui.html#item-25)을 참조하세요.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-4"></a>

### 4. 반사파 이력

이전 스캔의 반사파 위치를 남겨 이동을 보여 줍니다. 과거 위치와 현재 반사파를 구분하여 모든 블록을 별도 표적으로 해석하지 않도록 합니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-5"></a>

### 5. 스캔 바와 PRF

`6HI`는 스캔 바 수와 펄스 반복 주파수(PRF) 상태입니다. `HI`는 높은 PRF를 뜻합니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-6"></a>

### 6. 포착 게이트의 불스아이 좌표

공통 기준점 Bullseye에서 [포착 게이트(9번)](#lrs-item-9)까지의 방위와 거리입니다. `310-12`는 불스아이 기준 방위 310°, 거리 12해리입니다.

향후 멀티플레이에서 팀원에게 위치를 전달할 때 사용합니다. 보고할 위치로 게이트를 옮긴 뒤 이 좌표를 읽습니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-7"></a>

### 7. 자기 지상속도

`G 589`는 지면을 기준으로 한 자기의 지상속도 589노트입니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-8"></a>

### 8. VSD 최대 표시 범위

오른쪽 위 `80`은 VSD의 현재 최대 표시 범위가 80해리라는 뜻입니다. 표적 거리나 레이더의 최대 탐지 거리는 아닙니다.

[포착 게이트](#lrs-item-9)를 화면 경계 밖으로 옮겨 거리 축척을 바꿉니다.

- 위쪽 경계를 넘으면 최대 표시 범위가 증가합니다.
- 아래쪽 경계를 넘으면 최대 표시 범위가 감소합니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-9"></a>

### 9. 포착 게이트

두 세로 막대가 포착 게이트를 구성하며 위치나 원시 반사파를 선택할 때 사용합니다. 게이트 거리는 2번의 고도 범위를 계산하는 거리이기도 합니다.

아래와 같이 Touch UI 오른쪽의 **Cursor(TDC 조작) 버튼**으로 게이트를 옮깁니다. 화면 경계를 넘기면 [표시 범위](#lrs-item-8)와 [방위각 탐색 폭](#lrs-item-14)도 조정할 수 있습니다.

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="9. 포착 게이트">

[Touch UI: Cursor](/ko/Docs/aircraft/f15c/touch-ui.html#item-18)를 참조하세요.

수동 포착 절차:

1. 원시 레이더 반사파를 포착 게이트 안에 넣습니다.
2. 오른쪽 Cursor(TDC 조작) 버튼을 두 번 눌러 포착을 시작합니다.
3. 포착에 성공하면 자동으로 **STT(단일 표적 추적)**로 전환되어 해당 표적을 추적합니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-10"></a>

### 10. 국부 수평선 기준

양 끝이 아래로 꺾인 수평선은 국부 수평선 기준입니다. 화면 중앙에 있으면 수평 비행, 회전하면 항공기의 롤을 나타냅니다. 레이더를 관찰하면서 항공기 자세를 파악하는 데 사용합니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-11"></a>

### 11. 불스아이 기준점

Bullseye는 방위와 거리를 보고하는 공통 기준점입니다. 게이트의 불스아이 좌표는 [6번](#lrs-item-6)을 참조하세요.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-12"></a>

### 12. 항법 지점 3

화살표는 3번 항법 지점을 가리킵니다. 빈 삼각형이 위치를, `3`이 항법 지점 번호를 나타냅니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-13"></a>

### 13. 안테나 방위각 지시기

아래쪽 꺾쇠는 안테나의 현재 방위각입니다. 원형 탐색 경계 표시와 구분해야 하며, 표적 기수가 아닌 안테나 방향을 나타냅니다.

스캔 중 이 기호는 안테나를 따라 좌우로 움직여 실시간 방향을 보여 줍니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-14"></a>

### 14. 방위각 탐색 경계

왼쪽과 오른쪽 아래의 원 두 개는 탐색 경계이며, 화살표는 오른쪽 경계를 가리킵니다. 두 항공기가 아니라 탐색 폭을 나타냅니다.

[포착 게이트](#lrs-item-9)를 좌우 경계 밖으로 옮겨 방위각 탐색 폭을 바꿉니다.

- 왼쪽 경계를 넘으면 탐색 폭이 좁아집니다.
- 오른쪽 경계를 넘으면 탐색 폭이 넓어집니다.

탐색 폭은 최소 **10°**, 최대 **120°**입니다. 8번의 거리 범위가 아니라 방위각 폭을 바꾸는 조작입니다.

[번호 색인으로 돌아가기](#lrs-index)

<a id="lrs-item-15"></a>

### 15. 자기 진대기속도

`T 589`는 주위 공기를 기준으로 한 자기의 진대기속도 589노트입니다. 7번의 지상속도와는 다른 값이며, 이 그림에서는 우연히 같습니다.

[번호 색인으로 돌아가기](#lrs-index)

## 단일 표적 추적(STT)

STT는 하나의 표적에 집중하여 위치, 운동 및 무장 계산 자료를 지속적으로 제공합니다. LRS에서 원시 반사파에 게이트를 맞추고 오른쪽 Cursor 버튼을 두 번 누르면, 포착 성공 시 STT로 전환됩니다. [포착 게이트](#lrs-item-9)를 참조하세요.

영역을 탐색하는 LRS와 달리 STT는 선택한 표적을 집중 추적하여 기총 조준과 미사일 운용을 지원합니다. 이 게임의 AIM-7은 STT에서 발사해야 하며 발사 후에도 레이더 조명이 필요합니다. AIM-120도 지원하지만 두 미사일의 유도 요구 조건은 다릅니다.

STT는 상대 항공기의 레이더 락온 경보를 작동시킵니다. 가까운 표적은 채프를 살포하거나 노치 기동을 하여 추적을 끊거나 발사 조건을 악화시킬 수 있습니다. 표적 기동, 추적 상태와 동적 발사 구역을 계속 확인하세요.

<a :href="sttOverviewImage" target="_blank" rel="noopener">
  <img :src="sttOverviewImage" alt="단일 표적 추적(STT)">
</a>

그림 1: 표적이 최대 사거리 밖에 있어 ASE 원이 작습니다.

<a id="stt-index"></a>

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-1">1 표적 진대기속도</a>
  <a href="#stt-item-2">2 H/T 방향 관계와 표적 기수 방위</a>
  <a href="#stt-item-3">3 표적 고도</a>
  <a href="#stt-item-4">4 PDT — 주 지정 표적</a>
  <a href="#stt-item-5">5 조향점</a>
  <a href="#stt-item-6">6 ASE 원</a>
  <a href="#stt-item-7">7 접근률</a>
  <a href="#stt-item-8">8 표적 거리 지시기</a>
  <a href="#stt-item-9">9 Rmax — 최대 사거리</a>
  <a href="#stt-item-10">10 최적화된 최대 사거리</a>
  <a href="#stt-item-11">11 RTR 사거리 기준</a>
  <a href="#stt-item-12">12 최소 사거리</a>
  <a href="#stt-item-13">13 미사일 시간 표시</a>
  <a href="#stt-item-14">14 표적 방위와 거리</a>
</div>

<a :href="sttAspectImage" target="_blank" rel="noopener">
  <img :src="sttAspectImage" alt="단일 표적 추적(STT)">
</a>

그림 2: 표적이 최대 사거리 안으로 들어오면 ASE 원이 확대되기 시작합니다.

<div class="term-cloud tac-editor-index">
  <a href="#stt-item-15">15 표적 상대 방향각</a>
  <a href="#stt-item-16">16 확대된 ASE 원</a>
  <a href="#stt-item-17">17 그림 2의 거리와 접근률</a>
</div>

이미지를 클릭하면 원본 해상도, 아래 번호를 클릭하면 설명을 볼 수 있습니다. 두 예시 모두 **AIM-7을 선택한 상태**입니다. 거리 격자, 국부 수평선, 항법 지점 등의 공통 기호는 LRS 설명을 참조하세요. 그림 1 오른쪽 위 `40`은 표시 범위 40해리, 그림 2의 `20`은 20해리입니다.

<a id="stt-item-1"></a>

### 1. 표적 진대기속도

왼쪽 위 `397`은 표적 진대기속도 397노트이며 자기 속도가 아닙니다. 그림 2의 같은 위치에 있는 `577`은 577노트입니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-2"></a>

### 2. H/T 방향 관계와 표적 기수 방위

`H`는 **HOT**으로, 표적 기수가 자기를 향한다는 뜻이며 적기라면 위협적인 상황입니다. 반대쪽을 향하면 `T`가 표시됩니다. 이는 상대 방향 관계이지 피아 식별 결과가 아닙니다.

뒤의 `313`은 표적 기수 방위 313°이며 자기 기수 방위가 아닙니다. H/T는 상대 방향 관계, 숫자는 기수 방위를 나타냅니다. 좌우 방향각은 [15번](#stt-item-15)을 참조하세요.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-3"></a>

### 3. 표적 고도

왼쪽 `13-4`는 평균 해수면 기준(MSL) 고도 13,400피트입니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-4"></a>

### 4. PDT — 주 지정 표적

오각별은 방위각–거리 화면의 PDT(Primary Designated Target, 주 지정 표적)입니다. 앞으로 뻗은 긴 선은 표적의 속도 방향을 나타냅니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-5"></a>

### 5. 조향점

밝은 점은 조향점입니다. 발사 시 ASE 원(6번) 안에 넣으면 미사일의 초기 선회를 줄여 에너지를 절약할 수 있습니다. [HUD 조향점](/ko/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-2)과 같은 표시 논리입니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-6"></a>

### 6. ASE 원

ASE는 허용 조향 오차(Allowable Steering Error)입니다. 원이 확대되어야 발사 조건을 충족하기 시작합니다. 작은 원 안에 조향점이 있다는 것만으로는 충분하지 않습니다.

확대된 뒤에도 조향점, 거리와 선택한 미사일의 유도 요구 조건을 함께 평가합니다. [HUD ASE 설명](/ko/Docs/aircraft/f15c/hud-operation.html#hud-aim9-dlz-item-1)을 참조하세요.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-7"></a>

### 7. 접근률

`1006`은 자기와 표적 사이의 접근률이며 단위는 노트입니다. 거리 변화율을 나타내며 표적 대기속도는 아닙니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-8"></a>

### 8. 표적 거리 지시기

오른쪽 `>`는 현재 거리 눈금에서의 표적 위치입니다. 오른쪽 위 `40`해리 축척에 맞춰 읽습니다. 옆의 `1006`은 거리가 아니라 접근률입니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-9"></a>

### 9. Rmax — 최대 사거리

첫 번째, 가장 위의 짧은 눈금은 현재 조건으로 계산한 최대 사거리 Rmax입니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-10"></a>

### 10. 최적화된 최대 사거리

두 번째 짧은 눈금은 최적화된 최대 사거리입니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-11"></a>

### 11. RTR 사거리 기준

긴 상자 위쪽은 RTR(Range Turn and Run)로, 표적이 선회해 도주하는 경우를 고려한 사거리 기준이며 흔히 회피 불능 거리라고 합니다. 비교적 유리한 발사 조건을 나타내지만 명중을 보장하지는 않습니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-12"></a>

### 12. 최소 사거리

상자 아래쪽은 RMin(최소 사거리)입니다. 표적 거리를 이 눈금과 비교하세요. 무조건 가까울수록 좋은 것은 아닙니다.

9, 10, 11, 12번은 함께 DLZ(동적 발사 구역)를 구성합니다. 자기 고도, 고도 차, 표적 비행 방향과 속도, 자기 속도 등 여러 요인에 따라 변합니다.

발사 전 이 요인을 종합 평가합니다. 자기 안전과 최소 사거리를 지키면서 가능한 한 접근한 뒤 발사하세요.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-13"></a>

### 13. 미사일 시간 표시

`53SEC`는 지금 발사하면 53초 후 명중할 것으로 계산되었다는 뜻입니다. 현재 운동 상황에 따른 예상값이며 이미 발사한 미사일의 카운트다운이 아닙니다.

발사 후 표적이 선회하지 않고 운동을 유지할 때 정확합니다. 기수 방향이나 속도가 바뀌면 실제 명중 시간도 달라집니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-14"></a>

### 14. 표적 방위와 거리

오른쪽 아래 `129-21`은 자기 기준 표적 방위 129°, 거리 21해리입니다. 방위 단위는 도, 거리 단위는 해리이며 불스아이 좌표와 구분합니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-15"></a>

### 15. 표적 상대 방향각

그림 2의 `13L`은 표적 기수가 왼쪽 130° 방향이라는 뜻입니다. `13R`이면 오른쪽 130°입니다. 숫자는 10° 단위이며 `L`과 `R`은 좌우를 나타냅니다.

이는 자기와의 상대 방향각이지 기수 방위 130°가 아닙니다. 뒤의 `351`은 표적 기수 방위 351°입니다. [2번의 H/T와 기수 방위](#stt-item-2)를 함께 참조하세요.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-16"></a>

### 16. 확대된 ASE 원

그림 1은 최대 사거리 밖이어서 원이 작고, 그림 2는 계산된 최대 사거리 안에 들어와 원이 확대됩니다. [6번](#stt-item-6)처럼 조향점 및 거리 눈금과 함께 판단합니다. AIM-7을 선택한 상태이므로 확대되어도 레이더 추적과 조명 요구 조건은 유지됩니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-item-17"></a>

### 17. 그림 2의 거리와 접근률

화살표는 [8번](#stt-item-8)과 같은 표적 거리 `>`를 가리킵니다. 그림 1의 40해리가 아니라 그림 2의 20해리 축척으로 읽습니다.

옆의 `915`는 접근률 915노트이며 [7번](#stt-item-7)과 같은 방식으로 읽습니다.

[번호 색인으로 돌아가기](#stt-index)

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="sttRtrImage" target="_blank" rel="noopener">
      <img :src="sttRtrImage" alt="17. 그림 2의 거리와 접근률">
    </a>
    <figcaption>그림 3 · RTR 진입: 삼각형 발사 표시</figcaption>
  </figure>
  <figure>
    <a :href="sttBreakImage" target="_blank" rel="noopener">
      <img :src="sttBreakImage" alt="17. 그림 2의 거리와 접근률">
    </a>
    <figcaption>그림 4 · 최소 사거리 안쪽: Break X</figcaption>
  </figure>
</div>

<a id="stt-rtr"></a>

### 그림 3 · RTR 진입: 삼각형 발사 표시

표적이 RTR에 들어오면 VSD 하단에 삼각형이 나타나 유리한 발사 조건을 알립니다. 이 그림에서는 하단 중앙 `8SEC` 왼쪽에 있습니다.

발사 전 ASE, 조향점과 최소 사거리를 확인하고 AIM-7에 필요한 레이더 추적과 조명을 유지합니다. 삼각형은 명중 보장이 아닙니다.

[번호 색인으로 돌아가기](#stt-index)

<a id="stt-break-x"></a>

### 그림 4 · 최소 사거리 안쪽: Break X

최소 발사 거리보다 가까워지면 VSD 중앙에 교차한 **Break X**가 나타나 발사하면 안 됨을 알립니다.

너무 가까우면 미사일이 필요한 속도까지 가속하지 못할 수 있습니다. 명중하더라도 자기 비행 경로가 파편 영역을 통과할 수 있습니다. 포착과 접근만으로는 충분하지 않으므로 최소 사거리를 지켜야 합니다.

[번호 색인으로 돌아가기](#stt-index)

## 탐색 중 추적(TWS)

TWS는 스캔을 계속하면서 여러 표적의 추적을 유지합니다. 주로 40해리 이내에서 사용하며 AIM-120 운용을 지원합니다.

높은 갱신률을 위해 TWS는 스캔 바와 방위각 조합을 제한합니다. 탐색 폭이 넓으면 바 수가 줄어듭니다. 방위각 범위를 선택하면 바 수가 자동 선택되므로 별도 선택은 필요 없습니다.

| 방위각 범위 | 자동 선택되는 바 수 |
| --- | --- |
| 60° | 2바 |
| 30° | 4바 |
| 15° | 6바 |

### TWS 진입

두 가지 방법으로 진입할 수 있습니다.

1. **표적을 포착한 경우:** STT에서 AA(자동 포착)를 아래로 조작하면 TWS로 전환됩니다.
2. **포착한 표적이 없는 경우:** 빈 공간에 게이트를 놓고 TDC(오른쪽 Cursor 버튼)를 두 번 눌러 수동 포착을 시작하면서 빠르게 AA를 아래로 조작합니다.

[Touch UI: Cursor](/ko/Docs/aircraft/f15c/touch-ui.html#item-18)와 [자동 포착](/ko/Docs/aircraft/f15c/touch-ui.html#item-28)을 참조하세요.

TWS는 다른 공역도 스캔하므로 개별 표적의 갱신률은 STT보다 낮습니다. 원거리에서는 분해능도 제한됩니다. 고기동, 채프 살포 또는 하나의 표적으로 보이던 편대가 흩어지면 새 반사파와 기존 추적의 연관에 실패하여 추적이 끊길 수 있습니다.

### TWS 종료

- **PDT가 있는 경우:** **AA Down**으로 해당 PDT의 STT에 진입하며 다른 추적 파일은 모두 폐기됩니다.
- **PDT가 없는 경우:** **AA**를 한 번 누르면 LRS로 돌아갑니다.

### 추적 표적 종류

TWS는 비지정, 주 지정, 부 지정 표적을 구분합니다. 아래 수량은 이 게임에 적용됩니다.

탐지된 표적의 추적 파일은 자동 생성됩니다. 처음 탐지되면 속도 벡터 없는 정사각형으로 표시되고, 후속 스캔에서 충분한 정보를 모아 추적을 확립하면 벡터가 나타납니다.

| 종류 | 의미 | 최대 수량 |
| --- | --- | --- |
| NDT(비지정 표적) | 주 또는 부 표적으로 지정하지 않음 | 16개 |
| PDT(주 지정 표적) | 현재 집중 관찰 및 교전하는 주 표적 | 동시에 1개 |
| SDT(부 지정 표적) | 추후 주 표적으로 선택할 수 있는 지정 표적 | 7개 |

이는 지정 상태이며 피아 식별이 아닙니다. PDT가 없으면 NDTWS, 있으면 DTWS입니다.

<a id="tws-designation"></a>

### PDT 지정과 전환

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/26-coolie-switch.png" alt="PDT 지정과 전환">

추적이 확립되면 **Coolie Up(Coolie 스위치를 위로 조작)**으로 표적을 지정합니다.

- **자동 지정:** Coolie Up은 PDT와 SDT를 자동 지정합니다.
- **순환 선택:** 다시 Coolie Up을 입력하면 SDT 중에서 PDT를 순환 지정합니다.
- **수동 지정:** NDT 또는 SDT에 게이트를 맞춘 뒤 Coolie Up을 입력하면 그 표적이 PDT가 됩니다.

PDT는 하나만 존재합니다. 다른 표적을 지정하면 기존 PDT는 SDT로 내려갑니다.

**Coolie Down**은 모든 지정을 취소하고 PDT와 SDT를 NDT로 되돌려 NDTWS로 복귀합니다.

[Touch UI: Coolie 스위치](/ko/Docs/aircraft/f15c/touch-ui.html#item-26)를 참조하세요.

### AIM-120 다중 표적 교전

TWS에서는 현재 PDT에만 무장을 발사할 수 있습니다. AIM-120은 PDT를 바꾸며 순차 발사하여 여러 표적과 동시에 교전할 수 있습니다.

1. 현재 PDT에 AIM-120을 발사합니다.
2. Coolie Up으로 순환하거나 게이트와 Coolie Up으로 다음 PDT를 수동 지정합니다.
3. 새 PDT에 AIM-120을 발사합니다.

이전 표적이 SDT가 되어도 이미 발사한 미사일에 데이터링크 갱신을 계속 제공할 수 있습니다. PDT 변경은 지원 중단이 아니며 관련 추적을 유지해야 합니다.

<a id="tws-ndt-index"></a>

### 그림 1 · 비지정 표적

<a :href="twsNdtImage" target="_blank" rel="noopener">
  <img :src="twsNdtImage" alt="그림 1 · 비지정 표적">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-ndt-item-1">1 추적 파일이 아직 확립되지 않은 표적</a>
  <a href="#tws-ndt-item-2">2 NDT — 비지정 표적</a>
  <a href="#tws-ndt-item-3">3 TWS 상태 표시</a>
</div>

이미지를 클릭하면 원본 해상도로 볼 수 있습니다. 아래 번호를 누르면 해당 설명으로 이동합니다.

<a id="tws-ndt-item-1"></a>

#### 1. 추적 파일이 아직 확립되지 않은 표적

화살표는 새로 탐지한 표적을 가리킵니다. 정보가 충분하지 않아 속도 벡터 없는 채운 정사각형입니다. 후속 스캔으로 추적이 확립되면 2번과 같은 벡터가 나타납니다.

[번호 색인으로 돌아가기](#tws-ndt-index)

<a id="tws-ndt-item-2"></a>

#### 2. NDT — 비지정 표적

속도 벡터가 있는 채운 기호는 추적이 확립된 NDT입니다. 선은 이동 방향입니다. 수동 지정 없이 자동으로 생성되지만 아직 PDT나 SDT로 선택하지 않은 상태입니다. 최대 16개를 지원합니다.

[번호 색인으로 돌아가기](#tws-ndt-index)

<a id="tws-ndt-item-3"></a>

#### 3. TWS 상태 표시

왼쪽 아래 `2TWSM`은 레이더 상태입니다. `TWS`는 탐색 중 추적, `M`은 중간 PRF(MPRF), 앞의 숫자는 스캔 바 표시입니다.

[번호 색인으로 돌아가기](#tws-ndt-index)

<a id="tws-designated-index"></a>

### 그림 2 · 주 지정 및 부 지정 표적

<a :href="twsDesignatedImage" target="_blank" rel="noopener">
  <img :src="twsDesignatedImage" alt="그림 2 · 주 지정 및 부 지정 표적">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-designated-item-1">1 SDT — 부 지정 표적</a>
  <a href="#tws-designated-item-2">2 PDT — 주 지정 표적</a>
  <a href="#tws-designated-item-3">3 게이트 안 표적의 고도</a>
  <a href="#tws-designated-item-4">4 AIM-120 활성화 거리</a>
</div>

<a id="tws-designated-item-1"></a>

#### 1. SDT — 부 지정 표적

방향 벡터가 있는 빈 기호는 지정되었지만 현재 PDT가 아닌 SDT입니다. 이 게임에서는 최대 7개를 지원합니다.

[번호 색인으로 돌아가기](#tws-designated-index)

<a id="tws-designated-item-2"></a>

#### 2. PDT — 주 지정 표적

오각별은 PDT이며 앞으로 뻗은 긴 선은 속도 방향입니다. 이 그림에서는 게이트가 표적 위에 있습니다. PDT는 VSD 표적 자료와 무장 계산의 기준이 되는 주 관찰·교전 표적입니다.

PDT는 하나뿐이며 나머지 지정 표적은 SDT입니다. 이는 지정 우선순위의 구분이지 STT 여부의 구분이 아닙니다.

[번호 색인으로 돌아가기](#tws-designated-index)

<a id="tws-designated-item-3"></a>

#### 3. 게이트 안 표적의 고도

눈금 바깥의 작은 사각형은 게이트 안 표적의 고도를 표시합니다. 탐색 상한과 하한 사이에 있으면 고도 범위에 포함되고, 밖이면 안테나 고각을 조정해야 합니다.

원시 반사파부터 NDT, SDT, PDT까지 게이트 안에 넣으면 해당 반사파나 표적의 고도를 확인할 수 있습니다.

[번호 색인으로 돌아가기](#tws-designated-index)

<a id="tws-designated-item-4"></a>

#### 4. AIM-120 활성화 거리

오른쪽 거리 눈금의 빈 원은 AIM-120 활성화 거리입니다. 표적이 이 거리보다 가까우면 발사 직후 자체 레이더를 활성화하여 능동적으로 표적을 포착합니다.

[번호 색인으로 돌아가기](#tws-designated-index)

### 사거리 및 RTR 진입 표시

이미지를 클릭하면 원본 해상도로 볼 수 있습니다.

<div class="hud-scan-gallery radar-stt-pair">
  <figure>
    <a :href="twsInRangeImage" target="_blank" rel="noopener">
      <img :src="twsInRangeImage" alt="사거리 및 RTR 진입 표시">
    </a>
    <figcaption>그림 3 · 사거리 진입: 점선 ASE 원 확대</figcaption>
  </figure>
  <figure>
    <a :href="twsRtrImage" target="_blank" rel="noopener">
      <img :src="twsRtrImage" alt="사거리 및 RTR 진입 표시">
    </a>
    <figcaption>그림 4 · RTR: 육각별과 ASE 점멸</figcaption>
  </figure>
</div>

**그림 3:** 표적이 미사일 사거리에 들어오면 점선 ASE 원이 확대되어 발사 조건을 충족하기 시작함을 표시합니다.

**그림 4:** RTR에 진입하면 하단 중앙의 육각별과 ASE 점멸이 유리한 발사 조건을 알립니다. 이 스크린샷은 점멸 중 원이 꺼진 순간입니다.

### 발사 후 미사일 지원

TWS에서 AIM-120을 발사하면 레이더는 표적 추적을 유지하고 데이터링크로 갱신 정보를 제공합니다. 특히 미사일 자체 레이더가 활성화되어 표적을 포착하기 전에는 추적 상태를 계속 확인합니다.

**PDT 변경으로 이전 미사일 지원이 자동 중단되지는 않습니다.** 다른 PDT를 선택해 발사할 수 있으며, 이전 PDT가 SDT로 바뀌어도 추적을 유지하면 데이터링크 갱신이 계속됩니다.

여러 미사일을 지원하려면 해당 표적들을 탐색 범위에 유지합니다. 기동, 간섭 또는 탐색 영역 이탈로 추적이 끊기면 새 표적 정보를 제공할 수 없습니다. STT 전환은 다른 파일을 폐기하므로 다른 미사일에 미치는 영향을 고려하세요.

AIM-120은 자체 레이더 활성화 후 능동적으로 표적을 포착합니다. 발사 시 이미 [활성화 거리](#tws-designated-item-4) 안이면 활성화와 능동 포착이 즉시 시작됩니다.

<a id="tws-missile-support-index"></a>

이미지를 클릭하면 원본 해상도로 볼 수 있습니다. 아래 번호를 누르면 해당 설명으로 이동합니다.

<a :href="twsMissileSupportImage" target="_blank" rel="noopener">
  <img :src="twsMissileSupportImage" alt="발사 후 미사일 지원">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-support-item-1">1 활성화 진행 표시</a>
  <a href="#tws-missile-support-item-2">2 발사된 미사일 표시</a>
  <a href="#tws-missile-support-item-3">3 활성화까지 남은 시간</a>
</div>

<a id="tws-missile-support-item-1"></a>

#### 1. 활성화 진행 표시

발사 후 선 위의 짧은 눈금이 2번 점을 향해 이동합니다. 점에 도달하면 발사 조건에 따른 계산상 미사일이 자체 레이더를 활성화하고 능동 탐색을 시작했을 시점입니다.

[번호 색인으로 돌아가기](#tws-missile-support-index)

<a id="tws-missile-support-item-2"></a>

#### 2. 발사된 미사일 표시

점은 이 표적에 AIM-120 한 발을 발사했으며 데이터링크 지원 중임을 나타냅니다. 예상 활성화 시점에 1번 표시가 도달하는 기준점이기도 합니다.

[번호 색인으로 돌아가기](#tws-missile-support-index)

<a id="tws-missile-support-item-3"></a>

#### 3. 활성화까지 남은 시간

오른쪽 위 `A 9`는 레이더 활성화 및 능동 탐색까지 예상 9초라는 뜻입니다. 1번 표시와 함께 활성화 진행을 보여 줍니다.

[번호 색인으로 돌아가기](#tws-missile-support-index)

<a id="tws-missile-active-index"></a>

#### 미사일 활성화 후 표시

활성화 후 오른쪽 위의 **A 카운트다운은 T로 바뀌며**, 미사일과 표적의 예상 교차까지 남은 시간입니다. `T 17`은 17초 후 교차 및 명중할 것으로 예측합니다.

이미지를 클릭하면 원본 해상도로 볼 수 있습니다. 아래 번호를 누르면 해당 설명으로 이동합니다.

<a :href="twsMissileActiveImage" target="_blank" rel="noopener">
  <img :src="twsMissileActiveImage" alt="미사일 활성화 후 표시">
</a>

<div class="term-cloud tac-editor-index">
  <a href="#tws-missile-active-item-1">1 미사일 활성화 표시</a>
  <a href="#tws-missile-active-item-2">2 미사일 비행 진행 표시</a>
</div>

<a id="tws-missile-active-item-1"></a>

#### 1. 미사일 활성화 표시

1번은 해당 표적에 발사한 미사일이 자체 레이더를 활성화하고 능동 탐색을 시작했음을 나타냅니다.

[번호 색인으로 돌아가기](#tws-missile-active-index)

<a id="tws-missile-active-item-2"></a>

#### 2. 미사일 비행 진행 표시

X는 표적의 오각별을 향해 움직여 미사일의 접근을 나타냅니다. 미리 계산한 교차 시점에 별에 도달합니다.

시간과 진행 표시는 발사 당시 조건으로 계산됩니다. 표적 기동이나 대응 수단으로 실제 비행 시간이 예상보다 길어질 수 있습니다. 카운트다운 종료나 X의 별 도달은 예상 교차 시점이지 명중 확인이 아닙니다.

[번호 색인으로 돌아가기](#tws-missile-active-index)

## 근거리 자동 포착과 Flood

자동 포착 스캔과 Flood 조명은 **항공기 세로축**을 기준으로 하며 항공기 자세를 따릅니다. LRS와 TWS는 **짐벌로 수평 안정화된 평면**을 기준으로 합니다.

자동 포착은 주로 **WVR(가시거리 내 전투)**에 사용합니다. 장거리 보어사이트는 **40해리** 이내, 나머지 자동 포착 모드는 **10해리** 이내에서 작동합니다.

### 모드 선택

<img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/28-auto-acquisition.png" alt="모드 선택">

**AA(자동 포착)를 위로** 조작하면 순서대로 진입합니다.

1. 첫 번째: **SS(슈퍼서치)**.
2. 두 번째: **VS(수직 스캔)**.
3. 세 번째: **보어사이트**.
4. 네 번째: **장거리 보어사이트**.

**AA를 위로 길게 유지**하면 **Flood**에 진입합니다.

### SS — 슈퍼서치

AA를 처음 위로 조작하면 SS에 진입합니다. HUD의 큰 원은 **20° 탐색 범위**입니다. 표적을 원 안에 유지하면 **10해리** 이내에서 자동 포착합니다.

안테나 고각 조작으로 탐색 영역을 위아래 각각 **10°**까지 옮길 수 있습니다. 아래 그림은 중앙, 위, 아래 상태이며 이동한 원 일부는 HUD 밖으로 나갈 수 있습니다.

<div class="hud-scan-gallery">
  <figure>
    <img width="1206" height="1210" src="/assets/F-15C/HUD/ss-center.png" alt="SS — 슈퍼서치" loading="lazy">
    <figcaption>중앙</figcaption>
  </figure>
  <figure>
    <img width="1206" height="1214" src="/assets/F-15C/HUD/ss-up.png" alt="SS — 슈퍼서치" loading="lazy">
    <figcaption>위로 10°</figcaption>
  </figure>
  <figure>
    <img width="1225" height="1169" src="/assets/F-15C/HUD/ss-down.png" alt="SS — 슈퍼서치" loading="lazy">
    <figcaption>아래로 10°</figcaption>
  </figure>
</div>

### 수직 스캔

<figure class="hud-mode-figure">
  <img width="1200" height="1171" src="/assets/F-15C/HUD/vs.png" alt="수직 스캔" loading="lazy">
  <figcaption>VS 수직 스캔</figcaption>
</figure>

수직 스캔은 기수 위쪽의 좁고 긴 영역을 탐색합니다. 교차 후 표적이 기수 위로 지나갈 때 유용합니다.

### 보어사이트

<figure class="hud-mode-figure">
  <img width="1232" height="1137" src="/assets/F-15C/HUD/bst.png" alt="보어사이트" loading="lazy">
  <figcaption>BST 보어사이트</figcaption>
</figure>

전방의 좁은 원뿔 영역을 탐색하여 처음 들어온 표적을 포착합니다.

### 장거리 보어사이트

LR BST는 보어사이트와 같은 원리지만 HUD 탐색 원이 더 작고 자동 포착 범위는 **40해리**입니다. 작은 원 안에 표적을 유지합니다.

<figure class="hud-mode-figure">
  <img width="1202" height="1111" src="/assets/F-15C/HUD/lr-bst.png" alt="장거리 보어사이트" loading="lazy">
  <figcaption>LR BST 장거리 보어사이트</figcaption>
</figure>

### Flood

<figure class="hud-mode-figure">
  <img width="1193" height="1140" src="/assets/F-15C/HUD/flood.png" alt="Flood" loading="lazy">
  <figcaption>Flood 모드 HUD</figcaption>
</figure>

Flood는 AIM-7에 넓은 빔 조명을 제공합니다. 미사일이 명중할 때까지 표적을 조명 원 안에 유지합니다.

Flood의 VSD는 다음과 같이 바뀝니다. 왼쪽 위에 `FLOOD`가 표시되고 거리 격자가 사라지며 국부 수평선, 포착 게이트와 항법 지점은 남습니다.

<figure class="hud-mode-figure">
  <a :href="floodVsdImage" target="_blank" rel="noopener">
    <img :src="floodVsdImage" width="651" height="652" alt="Flood">
  </a>
  <figcaption>Flood 모드 VSD(클릭하여 원본 보기)</figcaption>
</figure>

## 운용 순서

1. LRS로 원거리 공중 상황을 파악합니다.
2. 표적 고도에 맞게 안테나 고각을 조정합니다.
3. TWS로 여러 표적의 우선순위를 관리합니다.
4. 집중 추적이나 안정된 조명이 필요하면 STT를 사용합니다.
5. 교차 후에는 자동 포착을 사용합니다.
