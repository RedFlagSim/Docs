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

다목적 컬러 디스플레이(MPCD)는 현재 <strong>SIT(상황 인식 화면)</strong>와 <strong>AA(공대공 무장 페이지)</strong> 두 페이지를 제공합니다. <strong>기본 화면은 SIT입니다.</strong>

SIT는 임무 정보, 데이터링크 보고, 자체 레이더가 획득한 트랙을 함께 표시합니다. AA는 장착물, 선택된 장착 위치, 기관포 탄약 및 대응 수단의 잔량을 표시합니다.

<a id="mpcd-index"></a>

## 페이지 목차

<div class="term-cloud tac-editor-index">
  <a href="#mpcd-sit">1 SIT 화면과 기호</a>
  <a href="#sit-mission">2 임무 정보와 표시 설정</a>
  <a href="#sit-modes">3 커서 제어와 표시 모드</a>
  <a href="#sit-friendly">4 아군 항공기와 불스아이</a>
  <a href="#sit-workflow">5 SIT와 VSD 함께 사용하기</a>
  <a href="#mpcd-aa">6 AA 무장 페이지</a>
</div>

화면 이미지를 클릭하면 원본 해상도로 열립니다. 번호 설명은 각 이미지에 표시된 주석에 해당합니다.

<a id="mpcd-sit"></a>

## SIT 화면과 기호

SIT는 항공기, 비행 계획 경유점, 지오펜스, 거리 기준을 포함한 전술 상황을 위에서 내려다보는 형태로 표시합니다.

<figure class="mpcd-figure">
  <a :href="sitOverviewImage" target="_blank" rel="noopener"><img :src="sitOverviewImage" alt="1~13번으로 주석을 단 SIT 전체 화면" /></a>
  <figcaption>SIT 전체 화면. 이 예에서는 획득 게이트가 VSD 커서를 따라갑니다.</figcaption>
</figure>

<a id="sit-symbol-index"></a>

### 기호 번호

<div class="term-cloud tac-editor-index">
  <a href="#sit-item-1">1 줄루 시각</a>
  <a href="#sit-item-2">2 나침반</a>
  <a href="#sit-item-3">3 데이터링크 정보</a>
  <a href="#sit-item-4">4 절반 거리 원</a>
  <a href="#sit-item-5">5 무장 정보</a>
  <a href="#sit-item-6">6 지오펜스</a>
  <a href="#sit-item-7">7 표시 거리</a>
  <a href="#sit-item-8">8 자기 항공기 기준 커서 좌표</a>
  <a href="#sit-item-9">9 SAM 교전 범위</a>
  <a href="#sit-item-10">10 비행 계획 경유점</a>
  <a href="#sit-item-11">11 획득 게이트</a>
  <a href="#sit-item-12">12 대응 수단 잔량</a>
  <a href="#sit-item-13">13 불스아이 기준 커서 좌표</a>
</div>

<a id="sit-item-1"></a>

### 1. 줄루 시각

왼쪽 위 시계는 줄루 시각(UTC)을 표시합니다. `23:00:51Z`는 줄루 시각 23시 00분 51초입니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-2"></a>

### 2. 나침반

나침반은 자기 항공기 주변의 방위 기준을 제공합니다. 방향 눈금으로 표적 방위를 읽을 수 있습니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-3"></a>

### 3. 데이터링크 정보

빨간 기호는 데이터링크로 보고된 적 편대입니다. <strong>파선 윤곽선</strong>은 데이터링크 정보임을 나타냅니다. 데이터링크 보고에서 레이더와 연관된 트랙으로 이어지는 과정은 [SIT와 VSD 함께 사용하기](#sit-workflow)를 참조하세요.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-4"></a>

### 4. 절반 거리 원

안쪽 흰색 원은 [7번](#sit-item-7)에 표시된 거리의 절반입니다. 이 중앙 표시 화면에서 `80`이 선택되어 있으면 원은 자기 항공기로부터 40해리를 나타냅니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-5"></a>

### 5. 무장 정보

왼쪽 아래에는 무장 정보가 요약되어 있습니다. [AA 페이지](#mpcd-aa)는 해당 장착물을 장착 위치별로 보여줍니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-6"></a>

### 6. 지오펜스

파선 다각형은 임무에 정의된 구역인 지오펜스(Geofence)입니다. 이 경계는 전술 상황을 [Tac 편집기](#sit-mission)에서 설정한 구역과 대조하는 데 사용합니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-7"></a>

### 7. 표시 거리

이 중앙 표시 화면에서 오른쪽 위 `80`은 자기 항공기부터 나침반 상단까지의 거리를 해리로 나타냅니다. [Decenter 모드](#sit-decenter)에서는 자기 항공기가 화면 아래로 이동하며, 이때의 거리 기준은 아래에서 설명합니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-8"></a>

### 8. 자기 항공기 기준 커서 좌표

청록색 수치는 자기 항공기로부터 커서까지의 방위와 거리입니다. `092-22`는 자기 항공기에서 방위 092°, 거리 22해리를 나타냅니다. 이 수치는 [11번](#sit-item-11) 획득 게이트를 따라 변합니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-9"></a>

### 9. SAM 교전 범위

빨간 원은 지대공 미사일(SAM) 체계의 교전 범위이며, 지오펜스의 한 종류입니다. 예시의 `MEZ`는 <strong>Missile Engagement Zone(미사일 교전 범위)</strong>의 약자입니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-10"></a>

### 10. 비행 계획 경유점

서로 연결된 노란 경유점 기호는 자기 편대의 비행 계획에 지정된 경유점 순서를 나타냅니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-11"></a>

### 11. 획득 게이트

청록색 세로선 두 개가 커서 또는 표적 획득 게이트를 구성합니다. <strong>파선</strong>은 SIT 게이트가 VSD 커서를 따라가고 있음을 뜻합니다. SIT에 커서 제어권을 주면 선이 <strong>실선</strong>으로 바뀌고 TDC로 SIT 게이트를 직접 움직일 수 있습니다. [커서 제어와 표시 모드](#sit-modes)를 참조하세요.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-12"></a>

### 12. 대응 수단 잔량

녹색 `C 120`과 `F 60`은 채프 120발과 플레어 60발이 남아 있음을 나타냅니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-item-13"></a>

### 13. 불스아이 기준 커서 좌표

노란 수치는 공통 기준점인 <strong>불스아이(Bullseye)</strong>로부터 커서까지의 방위와 거리입니다. `121-30`은 불스아이에서 방위 121°, 거리 30해리를 뜻합니다. 오른쪽 위 청록색 수치는 자기 항공기를 기준으로 합니다.

[기호 목차로 돌아가기](#sit-symbol-index)

<a id="sit-mission"></a>

## 임무 정보와 표시 설정

### Tac 편집기에서 가져오는 정보

SIT 정보의 대부분은 임무 편집기에서 설정한 내용에서 가져옵니다. 예시의 비행 계획 경유점 순서와 지오펜스를 아래 임무 설정과 직접 대조할 수 있습니다.

기기의 성능에 맞게 임무를 설정하세요. 유닛이 많아질수록 더 많은 연산 자원과 메모리를 사용합니다.

<figure class="mpcd-figure">
  <a :href="sitEditorImage" target="_blank" rel="noopener"><img :src="sitEditorImage" alt="비행 계획 경유점, 불스아이, 항공기, 지오펜스를 보여주는 Tac 편집기" loading="lazy" /></a>
  <figcaption>임무 설정은 SIT 화면의 배경 정보를 구성합니다.</figcaption>
</figure>

임무 설정은 [Tac 편집기](/ko/Docs/basics/tac-editor.html)를 참조하세요.

### SIT에 표시할 정보 선택

[터치 UI 기능 패널](/ko/Docs/aircraft/f15c/touch-ui.html#item-1)을 열고 <strong>MAIN</strong>을 선택하세요. <strong>SIT</strong> 행에서 표시할 정보와 표시 거리가 VSD를 따라갈지 여부를 설정합니다.

<figure class="mpcd-figure">
  <a :href="sitControlsImage" target="_blank" rel="noopener"><img :src="sitControlsImage" alt="MAIN 패널의 SIT 설정 WP, DLK, AUTO RANGE, GEO FENCE와 1~4번 주석" loading="lazy" /></a>
</figure>

| 번호 | 조작부 | 기능 |
| --- | --- | --- |
| 1 | `WP` | 비행 계획 경유점을 표시하거나 숨깁니다. |
| 2 | `DLK` | 데이터링크 정보를 표시하거나 숨깁니다. |
| 3 | `AUTO RANGE` | SIT 표시 거리가 VSD 표시 거리 변경을 따라갈지 설정합니다. |
| 4 | `GEO FENCE` | 지오펜스를 표시하거나 숨깁니다. |

[페이지 목차로 돌아가기](#mpcd-index)

<a id="sit-modes"></a>

## 커서 제어와 표시 모드

### SIT에 커서 제어권 부여

<div class="mpcd-controls">
  <div>
    <p>TDC가 VSD에 할당된 상태에서 <strong>캐슬 스위치를 위로(UP)</strong> 조작하면 SIT가 활성 디스플레이(SOI)가 됩니다. 이후 TDC는 SIT 획득 게이트만 제어하며, 두 세로선은 <strong>실선</strong>으로 표시됩니다.</p>
    <p>캐슬 위쪽 조작으로 커서 제어권을 VSD와 SIT 사이에서 전환합니다. 게이트가 다시 VSD를 따라가면 파선으로 표시됩니다.</p>
    <p>옆의 이미지는 터치 UI의 <a href="/ko/Docs/aircraft/f15c/touch-ui.html#item-19">캐슬 스위치</a>와 <a href="/ko/Docs/aircraft/f15c/touch-ui.html#item-18">커서(TDC) 조작부</a>입니다.</p>
  </div>
  <div class="mpcd-control-images">
    <figure>
      <a href="/ko/Docs/aircraft/f15c/touch-ui.html#item-19"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/19-castle-switch.png" alt="터치 UI 캐슬 스위치" loading="lazy" /></a>
      <figcaption>캐슬 스위치</figcaption>
    </figure>
    <figure>
      <a href="/ko/Docs/aircraft/f15c/touch-ui.html#item-18"><img class="touch-ui-control-thumb" src="/assets/F-15C/TouchUI/controls/18-cursor.png" alt="터치 UI 커서 / TDC 조작부" loading="lazy" /></a>
      <figcaption>커서 / TDC</figcaption>
    </figure>
  </div>
</div>

아래의 오른쪽, 왼쪽, 아래쪽 조작은 <strong>SIT에 커서 제어권이 있을 때</strong> 적용됩니다.

| 캐슬 방향 | SIT 모드 | 용도 |
| --- | --- | --- |
| 오른쪽 | Decenter | 자기 항공기를 화면 아래로 옮겨 전방 표시 공간을 확보합니다. |
| 왼쪽 | EXP | 10해리 축척으로 국소 영역을 확대하고 커서로 표시 영역을 이동합니다. |
| 아래쪽 | 편대 | 고정 5해리 축척으로 자기 편대의 상황을 살펴봅니다. |

<a id="sit-decenter"></a>

### Decenter 모드

SIT가 제어 중일 때 <strong>캐슬을 오른쪽으로</strong> 조작하면 Decenter 모드가 됩니다. 자기 항공기가 화면 아래로 이동하여 SIT 상단에 전방 상황을 표시할 공간이 더 생깁니다.

<figure class="mpcd-figure">
  <a :href="sitDecenterImage" target="_blank" rel="noopener"><img :src="sitDecenterImage" alt="실선 획득 게이트 1과 자기 항공기 2를 표시한 Decenter SIT" loading="lazy" /></a>
  <figcaption>1: SIT에서 직접 제어하는 실선 획득 게이트. 2: 자기 항공기.</figcaption>
</figure>

이 화면의 오른쪽 위 `120`은 <strong>자기 항공기부터 큰 원의 상단까지 120해리</strong>임을 뜻합니다.

<a id="sit-exp"></a>

### EXP 모드

SIT가 제어 중일 때 <strong>캐슬을 왼쪽으로</strong> 조작하면 EXP 모드가 됩니다. <strong>10해리 축척</strong>으로 영역을 확대하며, 오른쪽 위에 `E10`이 표시됩니다. 커서로 표시 영역을 이동하여 살펴볼 구역을 확대할 수 있습니다.

<figure class="mpcd-figure">
  <a :href="sitExpImage" target="_blank" rel="noopener"><img :src="sitExpImage" alt="E10과 분리된 데이터링크 항공기 기호를 보여주는 EXP SIT" loading="lazy" /></a>
  <figcaption>EXP는 좁은 영역을 확대하여 개별 항공기와 주변 지오펜스를 구분하기 쉽게 합니다.</figcaption>
</figure>

<a id="sit-flight"></a>

### 편대 모드

SIT가 제어 중일 때 <strong>캐슬을 아래쪽으로</strong> 조작하면 편대 모드가 됩니다. `F5`로 표시되는 <strong>고정 5해리 축척</strong>을 사용하여 자기 편대 항공기들의 위치와 고도를 살펴봅니다.

<figure class="mpcd-figure">
  <a :href="sitFlightImage" target="_blank" rel="noopener"><img :src="sitFlightImage" alt="자기 항공기 주변 2, 3, 4번 윙맨을 표시한 F5 편대 모드 SIT" loading="lazy" /></a>
  <figcaption>편대 모드는 자기 편대의 상황을 가까이에서 보여줍니다.</figcaption>
</figure>

[페이지 목차로 돌아가기](#mpcd-index)

<a id="sit-friendly"></a>

## 아군 항공기와 불스아이

SIT는 자기 편대 항공기와 같은 <strong>Package(임무 편성)</strong>에 속한 다른 항공기를 구분합니다. 아래 예시는 불스아이 기준으로 커서 위치를 읽는 방법도 보여줍니다.

<figure class="mpcd-figure">
  <a :href="sitFriendlyImage" target="_blank" rel="noopener"><img :src="sitFriendlyImage" alt="SIT의 Package 항공기 1, 불스아이 2, 윙맨 3, 자기 항공기 4" loading="lazy" /></a>
</figure>

| 번호 | 기호 | 의미 |
| --- | --- | --- |
| 1 | 녹색 Package 항공기 | 같은 Package의 다른 항공기로, 이 예에서는 조기경보기입니다. 중앙의 점은 자기 항공기가 해당 기체의 데이터링크 정보를 받고 있음을 나타냅니다. 아래의 `15`는 고도 15,000피트입니다. |
| 2 | 노란 불스아이 | 공통 기준점입니다. 오른쪽 아래 노란 `037-12`는 커서가 불스아이에서 방위 037°, 거리 12해리에 있음을 뜻합니다. |
| 3 | 청록색 윙맨 | 자기 편대의 나머지 세 항공기입니다. 기호 안의 숫자는 2, 3, 4번기 번호이며 편대장은 1번기입니다. 기호 아래 숫자는 천 피트 단위의 고도입니다. |
| 4 | 청록색 자기 항공기 기호 | SIT에 표시된 자기 항공기의 위치입니다. |

[페이지 목차로 돌아가기](#mpcd-index)

<a id="sit-workflow"></a>

## SIT와 VSD 함께 사용하기

실용적인 절차는 SIT 데이터링크 정보로 관심 영역을 찾고, VSD에서 해당 위치로 레이더 수색을 지향하여 표적을 획득하는 것입니다. 아래 이미지는 데이터링크 보고에서 자체 레이더 트랙, 연관된 트랙으로 이어지는 과정을 보여줍니다.

### 1. 데이터링크가 가리키는 영역 수색

SIT의 보고된 표적 위치를 바탕으로 VSD의 레이더 수색을 조정하세요. <strong>왼쪽 SIT의 청록색 부채꼴</strong>은 레이더 수색 방위와 거리를 나타냅니다. 보고 위치와 비교하고, VSD 고도 탐색 범위에 표적 고도가 포함되는지도 확인하세요.

<figure class="mpcd-figure">
  <a :href="sitSearchImage" target="_blank" rel="noopener"><img :src="sitSearchImage" alt="SIT의 데이터링크 표적과 청록색 레이더 수색 부채꼴, 옆의 VSD 수색 반사파" loading="lazy" /></a>
  <figcaption>왼쪽 SIT는 전술 상황을, 오른쪽 VSD는 레이더 수색 정보를 표시합니다.</figcaption>
</figure>

안테나 고각, 수색 범위, 획득 게이트 조작은 [레이더와 VSD: LRS](/ko/Docs/aircraft/f15c/radar.html#radar-lrs)를 참조하세요.

### 2. 자체 획득 트랙 읽기

레이더가 추적을 수립하면 이 예시의 SIT에는 <strong>흰색 실선 사각형</strong>이 표시됩니다. <strong>실선 윤곽선</strong>은 자체 레이더가 획득한 트랙이고, <strong>흰색</strong>은 식별 미상을 뜻합니다. 이 단계에서는 자체 트랙 뒤에 빨간 파선 데이터링크 기호가 여전히 보입니다.

<figure class="mpcd-figure">
  <a :href="sitLocalImage" target="_blank" rel="noopener"><img :src="sitLocalImage" alt="SIT의 흰색 자체 트랙과 겹친 빨간 파선 데이터링크 보고, 해당 VSD 트랙" loading="lazy" /></a>
  <figcaption>1: 강조된 무장 표시. 2: SIT의 자체 트랙. 3: VSD의 해당 레이더 트랙.</figcaption>
</figure>

### 3. 연관된 트랙과 PDT 확인

시간이 지나면 자체 레이더의 트랙 파일과 데이터링크로 수신한 트랙 파일이 연관 처리되어 하나의 트랙으로 합쳐집니다. SIT는 표적을 <strong>채워진 기호</strong>로 표시합니다. 이 예시에서 연관 처리된 적기는 빨간색입니다.

1번으로 표시한 <strong>파란 파선</strong>은 <strong>PDT(Primary Designated Target, 주 지정 표적)</strong>를 가리킵니다.

<figure class="mpcd-figure">
  <a :href="sitCorrelatedImage" target="_blank" rel="noopener"><img :src="sitCorrelatedImage" alt="SIT의 채워진 연관 적기 트랙과 PDT를 가리키는 파란 파선, 옆의 TWS VSD" loading="lazy" /></a>
  <figcaption>파란 파선은 주 지정 표적의 방향을 나타냅니다.</figcaption>
</figure>

### 4. EXP로 표적 편대 세부 정보 확인

SIT를 [EXP 모드](#sit-exp)로 전환하면 표적 편대의 개별 항공기를 살펴볼 수 있습니다. 확대하면 기호가 분리되어 편대 분포와 고도 정보를 VSD와 함께 확인하기 쉬워집니다.

<figure class="mpcd-figure">
  <a :href="sitDetailImage" target="_blank" rel="noopener"><img :src="sitDetailImage" alt="EXP에서 채워진 적기 네 대를 가리키는 1과 해당 VSD 트랙을 가리키는 2" loading="lazy" /></a>
  <figcaption>1: EXP 모드 SIT의 표적 편대 세부 표시. 2: VSD의 해당 트랙.</figcaption>
</figure>

| 이 예시의 표시 | 의미 |
| --- | --- |
| 파선 표적 윤곽선 | 데이터링크 보고. |
| 실선 표적 윤곽선 | 자체 레이더가 획득한 트랙. |
| 흰색 표적 | 식별 미상. |
| 채워진 표적 기호 | 자체 트랙과 데이터링크 트랙이 연관 처리됨. |
| 파란 파선 | PDT 방향. |

[페이지 목차로 돌아가기](#mpcd-index)

<a id="mpcd-aa"></a>

## AA 무장 페이지

### AA 열기

<strong>TDC가 VSD에 할당된 상태</strong>에서 <strong>캐슬을 오른쪽으로</strong> 조작하면 MPCD가 SIT에서 <strong>AA 공대공 무장 페이지</strong>로 전환됩니다. 같은 제어 상태에서 캐슬을 왼쪽으로 조작하면 SIT로 돌아옵니다.

캐슬 동작은 어느 디스플레이가 커서를 제어하는지에 따라 달라집니다. 오른쪽 조작은 VSD 제어 시 AA를 열고, SIT 제어 시 Decenter를 선택합니다.

### 장착물 읽기

AA는 항공기 윤곽 주변에 장착물을 배치하여 보여주고, 기관포 탄약과 대응 수단의 잔량을 표시합니다.

<figure class="mpcd-figure">
  <a :href="aaOverviewImage" target="_blank" rel="noopener"><img :src="aaOverviewImage" alt="빈 파일런, 외부 탱크, 탄약, 대응 수단, 선택된 장착 위치를 표시한 AA 예시 두 장" loading="lazy" /></a>
  <figcaption>이미지에서 3번이 두 번 사용됩니다. 왼쪽 3번은 기관포 탄약, 오른쪽 3번은 대응 수단 잔량입니다.</figcaption>
</figure>

| 주석 | 표시 | 의미 |
| --- | --- | --- |
| 왼쪽 1 | `PYLON` | 장착물이 없는 빈 파일런. |
| 왼쪽 2 | `FUEL` | 외부 연료탱크가 장착된 위치. |
| 왼쪽 3 | `950` | 기관포 잔탄. 이 예에서는 950발. |
| 오른쪽 3 | `CHF 120`, `FLR 60` | 대응 수단 잔량: 채프 120발, 플레어 60발. |
| 오른쪽 4 | 강조된 `AMRM / 120B` | 선택된 장착 위치. 녹색 강조와 무장 명칭 주변의 흰색 테두리로 표시됩니다. |

### 항공기 설정과 대조

아래 <strong>LOADOUT</strong> 설정은 앞의 AA 예시와 일치합니다. 장착물 종류와 탄약 수량을 대조하면 설정이 MPCD에 어떻게 표시되는지 알 수 있습니다.

<figure class="mpcd-figure">
  <a :href="aaLoadoutImage" target="_blank" rel="noopener"><img :src="aaLoadoutImage" alt="AA와 일치하는 LOADOUT 설정: 9M, 120B, 7M, 외부 탱크, 기관포 950발, 채프 120발, 플레어 60발" loading="lazy" /></a>
</figure>

| LOADOUT 설정 | 해당 AA 표시 |
| --- | --- |
| 8A, 2A 위치의 `9M` | `SRM / 9M` 두 곳. |
| 7, 3 위치의 `120B` | `AMRM / 120B` 두 곳. |
| 6, 4 위치의 `7M` | `MRM / 7M` 두 곳. |
| 5번 위치의 `Tank` | 중앙 `FUEL` 표시. |
| Gun `950`, Chaff `120`, Flare `60` | AA의 기관포 탄약 및 대응 수단 잔량. |

[페이지 목차로 돌아가기](#mpcd-index)
