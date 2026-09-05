<a id="tac-editor-top"></a>

# Tac 에디터

<script setup>
import tacOverviewImage from '/assets/TacEditor/overview.png'
</script>

Tac 편집기로 사용자 지정 임무를 만들고, 편대를 구성하고, 유닛을 배치하고, 경로를 계획합니다. 이 문서는 번호가 표시된 화면 개요부터 세부 편집 작업까지 일곱 부분으로 구성됩니다.

**문서 구성**

- [1부: 화면 개요](#part-1)
- [2부: Package와 Flight](#part-2)
- [3부: 항공기 설정](#part-3)
- [4부: 비행 계획](#part-4)
- [5부: 지도 객체](#part-5)
- [6부: 임무 설정](#part-6)
- [7부: 저장 및 시험 비행](#part-7)

<a id="part-1"></a>

## 1부: 화면 개요

<a :href="tacOverviewImage" target="_blank" rel="noopener">
  <img :src="tacOverviewImage" alt="1–11번으로 표시한 Tac 에디터 화면">
</a>

이미지를 누르면 원본 해상도로 볼 수 있습니다. 아래 번호를 누르면 해당 설명으로 이동합니다.

<a id="ui-terms-top"></a>

### UI 번호

<div class="term-cloud tac-editor-index">
  <a href="#item-1">1 Flight（편대）</a>
  <a href="#item-2">2 Bullseye（불스아이）</a>
  <a href="#item-3">3 Package（임무 패키지）</a>
  <a href="#item-4">4 추가 비플레이어 유닛</a>
  <a href="#item-5">5 Inspector（정보 패널）</a>
  <a href="#item-6">6 축척</a>
  <a href="#item-7">7 지도 도구 모음</a>
  <a href="#item-8">8 편대의 비행 계획 항로</a>
  <a href="#item-9">9 현지 시각과 Zulu 시각</a>
  <a href="#item-10">10 Geo Fence（지오펜스）</a>
  <a href="#item-11">11 에디터 도구 모음</a>
</div>

<a id="item-1"></a>

### 1. Flight（편대）

**Flight**는 최대 **4대의 항공기**로 구성된 편대입니다. 상단의 각 카드가 하나의 편대를 나타내며, 항공기 아이콘이 편대원을 표시합니다. 카드를 선택하여 편대 정보를 확인하고 항공기를 설정합니다.

[Flight 설명으로 이동](#part-2-flight)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-2"></a>

### 2. Bullseye（불스아이）

**Bullseye**는 방위와 거리를 보고할 때 사용하는 공통 지리 기준점입니다. 지도의 노란색 동심원이 그 위치를 나타냅니다.

지도의 거리 링은 Bullseye를 중심으로 하는 동심원입니다. 인접한 링의 반지름 차이는 <strong>20해리(20 NM)</strong>입니다.

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-3"></a>

### 3. Package（임무 패키지）

**Package**는 같은 진영의 편대를 묶습니다. 상단의 파란색과 빨간색 띠에 각 패키지의 편대가 표시됩니다. 패키지를 선택하여 소속 편대를 확인하고 관리합니다.

[Package 설명으로 이동](#part-2-package)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-4"></a>

### 4. 추가 비플레이어 유닛

Package/Flight 구조에 속하지 않는 AI 제어 추가 유닛입니다. 이미지에는 독립 항공기와 지대공 미사일 유닛이 표시되어 있습니다. 에디터 도구 모음의 **NP Unit**에서 관리합니다.

[자세한 설명 보기: NP Unit](#part-5-np-unit-list)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-5"></a>

### 5. Inspector（정보 패널）

오른쪽 패널은 선택한 대상의 정보와 조작 항목을 보여줍니다. 이미지에서는 임무 이름, 시너리, 난이도 등 임무 전체 정보를 표시합니다.

**Scenery**는 현재 선택할 수 없습니다. 향후 버전에서 여러 지역을 지원하면 여기에서 지도 지역을 선택할 수 있게 됩니다.

**지도 빈 곳을 두 번 탭하면** Inspector에 임무 전체 정보가 다시 표시됩니다.

**객체별 Inspector**

<div class="term-cloud tac-editor-index">
  <a href="#part-2-package">Package</a>
  <a href="#part-2-flight">Flight</a>
  <a href="#part-3-slot">Slot</a>
  <a href="#part-5-geofence-list">Geo Fence</a>
  <a href="#part-5-np-unit-list">NP Unit</a>
</div>

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-6"></a>

### 6. 축척

축척 막대는 현재 확대 수준에서 막대 길이에 해당하는 실제 거리를 표시합니다. **NM**은 해리이며 이미지의 값은 **16.66 NM**입니다. 지도상의 거리를 가늠할 때 사용합니다.

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-7"></a>

### 7. 지도 도구 모음

왼쪽 아래 도구 모음에는 왼쪽부터 네 개의 버튼이 있습니다.

- **이동**（네 방향 화살표）: 누른 상태에서 선택한 지도 요소를 이동합니다.
- **확대**（+ 돋보기）: 지도를 확대합니다.
- **축소**（− 돋보기）: 더 넓은 지역을 표시합니다.
- **Home**（집 아이콘）: 에디터를 닫고 메인 화면으로 돌아갑니다.

::: tip 지도 요소 이동
1. 이동할 유닛이나 요소를 선택합니다.
2. **왼손으로 이동 버튼을 계속 누릅니다**.
3. 누른 상태에서 **오른손으로 지도를 드래그**하여 선택한 요소의 위치를 조정합니다.
:::

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-8"></a>

### 8. 편대의 비행 계획 항로

항로점을 연결한 선이 편대의 계획 항로를 나타냅니다. 편대를 선택하여 비행 계획을 확인하고 항로점을 편집합니다. 해당 항로는 그 Flight의 항법에 사용됩니다.

[자세한 설명 보기](#part-4)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-9"></a>

### 9. 현지 시각과 Zulu 시각

하단에는 임무 시각이 두 가지로 표시됩니다. 앞쪽은 **현지 시각**, 대괄호 안에서 **Z**로 끝나는 값은 <strong>Zulu 시각（UTC）</strong>입니다. 예시의 **16:00:00**과 **23:00:00 Z**는 같은 순간을 나타냅니다.

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-10"></a>

### 10. Geo Fence（지오펜스）

**Geo Fence**는 지도에 전술 구역이나 경계를 표시합니다. 원형 또는 다각형으로 만들 수 있으며, 이미지에는 원형 구역과 **MEZ**라고 표시된 다각형이 있습니다. 에디터 도구 모음의 **Geo Fence**에서 관리합니다.

[자세한 설명 보기: Geo Fence](#part-5-geofence-list)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-11"></a>

### 11. 에디터 도구 모음

임무 전체 정보를 표시하는 Inspector에는 여섯 개의 버튼이 있습니다. 위쪽 행의 왼쪽부터 오른쪽, 이어서 아래쪽 행의 왼쪽부터 오른쪽 순서로 설명합니다.

<div class="term-cloud tac-editor-index">
  <a href="#item-11-1">11.1 Weather / Time（날씨와 시각）</a>
  <a href="#item-11-2">11.2 File（파일）</a>
  <a href="#item-11-3">11.3 Config（설정）</a>
  <a href="#item-11-4">11.4 Geo Fence（지오펜스）</a>
  <a href="#item-11-5">11.5 NP Unit（비플레이어 유닛）</a>
  <a href="#item-11-6">11.6 Go Fly（비행 시작）</a>
</div>

<a id="item-11-1"></a>

#### 11.1. Weather / Time（날씨와 시각）

임무 날씨와 시각 설정을 열어 환경 조건과 시간대를 조정합니다.

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-11-2"></a>

#### 11.2. File（파일）

임무 파일 메뉴를 엽니다. 새 임무 만들기, 현재 임무 저장, 저장된 임무 불러오기 및 삭제를 할 수 있습니다.

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-11-3"></a>

#### 11.3. Config（설정）

임무 설정과 제한을 엽니다. 무장, 도장, 날씨·시각 변경과 시간 정지의 허용 여부를 설정하고 항공기 및 무장 제한을 지정합니다.

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-11-4"></a>

#### 11.4. Geo Fence（지오펜스）

지오펜스 목록을 열어 전술 구역과 경계를 추가하고 선택하거나 편집합니다.

[자세한 설명 보기: Geo Fence](#part-5-geofence-list)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-11-5"></a>

#### 11.5. NP Unit（비플레이어 유닛）

비플레이어 유닛 목록을 열어 패키지에 속하지 않는 유닛을 추가하고 관리합니다. 유닛을 선택하면 Inspector에서 상세 정보를 편집할 수 있습니다.

[자세한 설명 보기: NP Unit](#part-5-np-unit-list)

[번호 목록으로 돌아가기](#ui-terms-top)

<a id="item-11-6"></a>

#### 11.6. Go Fly（비행 시작）

현재 에디터 설정으로 임무를 시작합니다. 플레이어가 조종하는 항공기는 정확히 한 대여야 하며 해당 항공기 모듈에 대한 사용 권한이 필요합니다. 시작하지 못하면 화면 메시지에 따라 설정을 수정합니다.

[번호 목록으로 돌아가기](#ui-terms-top)

[맨 위로](#tac-editor-top)

<a id="part-2"></a>

## 2부: Package와 Flight

Package로 편대를 구성한 다음 Flight에서 구성원과 임무를 설정합니다. 아래에서는 이 계층에 따라 Inspector를 설명합니다.

항공기의 구성 계층은 **Mission → Package → Flight → Slot(항공기 한 대)** 입니다. 각 Flight는 하나의 Package에 속하며 최대 **4대**의 항공기로 구성됩니다.

<a id="part-2-package"></a>

### Package(임무 패키지)

지도 위쪽에서 Package를 선택하면 소속 Flight와 패키지 시간 설정이 표시됩니다. 예시 이름은 blue1입니다.

<TacInspectorPanel panel="package" alt="Package Inspector" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>이름과 Flight 목록</strong>: 위쪽의 패키지 이름을 탭하면 이름을 변경할 수 있습니다. 아래에 Flight1, Flight2, Flight3가 표시됩니다. 번호는 각 편대의 항공기를 나타냅니다.
- <strong>＋</strong>: Flight를 추가합니다. 기존 카드를 선택하면 Flight Inspector가 열립니다.
- <strong>Take-off Time</strong>: 패키지 이륙 시각입니다. 예시는 23:03입니다.
- <strong>Time on Target(TOT)</strong>: 패키지 목표 도착 시각입니다. 예시는 23:33입니다.

Package와 Flight에는 각각 시간 항목이 있습니다. 연동 방식과 시간 기준은 추후 설명합니다.

</TacInspectorPanel>

[화면 개요로 돌아가기](#item-3)

<a id="part-2-flight"></a>

### Flight(비행 편대)

Package에서 Flight를 선택하면 구성원과 임무 설정이 표시됩니다. 예시는 항공기 4대로 구성된 Flight1입니다.

<TacInspectorPanel panel="flight" alt="Flight Inspector" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>구성원 그림</strong>: 항공기와 번호를 표시합니다. 구성원을 선택하면 Slot Inspector가 열립니다.
- <strong>Airbase</strong>: 편대의 기지입니다. 예시는 NAS_Fallon입니다.
- <strong>Mission Role</strong>: 편대의 임무 역할입니다. 예시는 CAP입니다.
- <strong>Take-off Time / Time on Target</strong>: 이륙 및 목표 도착 시각입니다. 예시는 각각 23:03과 23:12입니다.
- <strong>Station Time</strong>: 순찰 임무에서 목표 유형 항로점 두 개 사이를 순찰하는 시간으로, 분 단위로 설정합니다.
- <strong>Steer Points</strong>: 편대 경로 편집을 엽니다. 경로와 항로점의 자세한 조작은 4부에서 다룹니다.
- <strong>Rebuild</strong>: Flight의 Time on Target(TOT, 목표 도착 시각)을 다시 계산합니다.
- <strong>Delete</strong>: Rebuild 아래에 있으며 Flight 정의 전체를 삭제합니다. 항공기 Slot 하나만 삭제하는 기능이 아닙니다.

현재 스크린샷에는 Rebuild의 일부만 보이며, 그 아래 Delete 버튼은 보이지 않습니다.

</TacInspectorPanel>

<a id="flight-station-time-example"></a>

#### 순찰 예시: 공중급유기와 조기경보기

공중급유기나 조기경보기가 지정한 위치를 순찰하게 하려면:

1. 순찰할 위치에 항로점 두 개를 배치하고 둘 다 <strong>목표 유형</strong>으로 설정합니다.
2. Flight Inspector의 <strong>Station Time</strong>을 원하는 순찰 시간(분)으로 설정합니다.
3. 항공기는 이 두 목표 유형 항로점 사이를 Station Time에 지정한 시간 동안 순찰합니다.

[화면 개요로 돌아가기](#item-1)

[자세한 설명 보기: Slot](#part-3-slot) · [Steer Points](#part-4)

[맨 위로](#tac-editor-top)

<a id="part-3"></a>

## 3부: 항공기 설정

<a id="part-3-slot"></a>

### Slot(개별 항공기)

Slot은 Flight의 항공기 한 대를 나타냅니다. Flight 구성원 그림에서 항공기를 선택하면 개별 Inspector가 열립니다.

<TacInspectorPanel panel="slot" alt="Slot(개별 항공기) Inspector" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>기종과 구성원 번호</strong>: 위쪽에는 1번 F-15C가 표시됩니다. 아래 기종 드롭다운에서 항공기 종류를 선택합니다.
- <strong>Loadout / Livery</strong>: 무장과 도색 설정을 엽니다.
- <strong>Spawn Type</strong>: Airborne(공중) 또는 Airbase(기지)를 선택합니다. 화면에는 Airbase가 선택되어 있습니다.
- <strong>Spawn Point ID</strong>: 스폰 지점을 선택합니다. 예시는 Auto입니다.
- <strong>Initial State</strong>: 항공기 초기 상태 설정을 엽니다.
- <strong>Delete</strong>: 현재 항공기 Slot을 삭제합니다. Flight나 Package 전체를 삭제하는 버튼은 아닙니다.

이 이미지는 Airbase 상태입니다. Airborne, Loadout / Livery, Initial State의 하위 화면은 추후 스크린샷으로 설명합니다.

</TacInspectorPanel>

[화면 개요로 돌아가기](#item-1)

[맨 위로](#tac-editor-top)

<a id="part-4"></a>

## 4부: 비행 계획

Flight Inspector에서 Steer Points를 선택하여 현재 편대의 항로점을 편집합니다. 화면에는 3번 항로점이 표시됩니다.

[자세한 설명 보기: Flight Inspector](#part-2-flight)

<a id="part-4-steerpoints"></a>

### Steer Points(항로점 패널)

<TacInspectorPanel panel="steerpoints" alt="Steer Points(항로점 패널)" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>좌우 화살표와 번호</strong>: 화살표로 항로점을 전환합니다. 가운데에는 선택한 번호가 표시되며, 예시는 3입니다.
- <strong>항로점 유형</strong>: 드롭다운에서 유형을 선택합니다. 화면에는 Target(목표 유형)이 선택되어 있습니다.
- <strong>Elev (MSL)</strong>: 항로점의 계획 고도를 평균 해수면(MSL) 기준, 피트(FT) 단위로 설정합니다. 예시는 15000 FT이며 지면 위 높이가 아닙니다.
- <strong>KCAS</strong>: 항로점의 계획 교정대기속도를 노트 단위로 표시합니다. 예시는 529 KCAS이며 지상속도나 진대기속도가 아닙니다.
- <strong>Time(Z) Over Steerpoint</strong>: 현재 항로점을 통과할 계획 Zulu 시각(UTC)입니다. 왼쪽은 시, 오른쪽은 분으로 예시는 23:15 Z입니다. 비행 소요 시간이 아닙니다.
- <strong>New</strong>: 항로점을 추가합니다.
- <strong>Delete</strong>: 선택한 항로점을 삭제하며 Flight 전체를 삭제하지 않습니다.

</TacInspectorPanel>

공중급유기나 조기경보기의 순찰 경로는 순찰 위치에 Target 유형 항로점 두 개를 배치하고 Flight의 Station Time으로 두 지점 사이의 순찰 시간을 설정합니다. Flight의 TOT를 다시 계산하려면 Flight Inspector에서 Rebuild를 선택합니다.

[순찰 설정 예시](#flight-station-time-example) · [지도 객체 이동 방법](#item-7)

[맨 위로](#tac-editor-top)

<a id="part-5"></a>

## 5부: 지도 객체

<div class="term-cloud tac-editor-index">
  <a href="#part-5-geofence-list">Geo Fence 목록</a>
  <a href="#part-5-geofence-circle">원형 영역(Circle)</a>
  <a href="#part-5-geofence-polygon">다각형 영역(Polygon)</a>
  <a href="#part-5-np-unit-list">NP Unit 목록</a>
</div>

### Bullseye

**Bullseye**는 방위와 거리를 보고할 때 사용하는 공통 지리 기준점입니다. 지도의 노란색 동심원이 그 위치를 나타냅니다.

지도의 거리 링은 Bullseye를 중심으로 하는 동심원입니다. 인접한 링의 반지름 차이는 <strong>20해리(20 NM)</strong>입니다.

### Geo Fence(지오펜스)

임무 개요 패널의 Geo Fence에서 목록을 열고 영역을 선택합니다. 원형과 다각형은 서로 다른 도형 편집 항목을 사용합니다.

<a id="part-5-geofence-list"></a>

#### Geo Fence 목록

<TacInspectorPanel panel="geofence-list" alt="Geo Fence 목록" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>＋</strong>: Geo Fence를 추가합니다.
- <strong>목록 항목</strong>: 이름이 11인 원형과 MEZ인 다각형이 있습니다. 앞쪽 아이콘으로 모양을 구분합니다.
- <strong>항목 선택</strong>: 해당 영역의 Inspector를 열어 용도, 모양, 진영과 도형을 편집합니다.

</TacInspectorPanel>

[화면 개요로 돌아가기](#item-10)

<a id="part-5-geofence-circle"></a>

#### 원형 영역(Circle)

<TacInspectorPanel panel="geofence-circle" alt="원형 영역(Circle) Inspector" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>이름</strong>: 위쪽의 11은 영역 이름입니다.
- <strong>Geo Fence Role / Shape</strong>: 예시 용도는 MEZ, 모양은 Circle입니다. 이름, 용도, 모양은 별개 정보입니다.
- <strong>Coalition</strong>: 영역의 진영입니다. 예시는 Red입니다.
- <strong>Threat Radius</strong>: 원형 영역의 반지름입니다. 값은 22.6이며 스크린샷에 단위는 표시되지 않습니다.
- <strong>Delete</strong>: 현재 영역을 삭제합니다.

</TacInspectorPanel>

[화면 개요로 돌아가기](#item-10)

<a id="part-5-geofence-polygon"></a>

#### 다각형 영역(Polygon)

<TacInspectorPanel panel="geofence-polygon" alt="다각형 영역(Polygon) Inspector" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>이름 / Geo Fence Role</strong>: 이름은 MEZ이지만 선택한 용도는 ROZ입니다. 이름과 용도를 구분해야 합니다.
- <strong>Shape / Coalition</strong>: 예시는 Polygon과 Red입니다.
- <strong>좌우 화살표와 번호</strong>: 편집할 꼭짓점을 선택합니다. 표시된 번호는 0입니다.
- <strong>New Vertice</strong>: 꼭짓점을 추가합니다. 버튼 이름은 화면 표기를 그대로 사용합니다.
- <strong>Rotate</strong>: 다각형을 회전합니다. 변화량과 각도 규칙은 추후 설명합니다.
- <strong>Delete Vertex / Delete</strong>: Delete Vertex는 선택한 꼭짓점, 맨 아래 Delete는 영역 전체를 삭제합니다.

지도 객체의 위치는 1부의 방식으로 변경합니다. 객체를 선택하고 왼손으로 이동 버튼을 누른 채 오른손으로 드래그합니다.

</TacInspectorPanel>

[화면 개요로 돌아가기](#item-10)

[자세한 설명 보기](#item-7)

<a id="part-5-np-unit-list"></a>

### NP Unit 목록

임무 개요 패널의 NP Unit에서 Units 목록을 열어 Package / Flight 밖의 유닛을 관리합니다.

<TacInspectorPanel panel="np-unit-list" alt="NP Unit 목록" open-label="이미지를 선택하면 원본 크기로 표시됩니다.">

**항목과 조작**

- <strong>＋</strong>: 비플레이어 유닛을 추가합니다.
- <strong>목록 항목</strong>: 예시에는 지대공 미사일 유닛 9K37 Buk np와 독립 항공기 F-15C np가 있습니다.
- <strong>항목 선택</strong>: 유닛의 Inspector를 엽니다. 개별 NP Unit 속성은 스크린샷을 추가로 받은 후 설명합니다.

</TacInspectorPanel>

[화면 개요로 돌아가기](#item-4)

[맨 위로](#tac-editor-top)

<a id="part-6"></a>

## 6부: 임무 설정

이 부분에는 스크린샷을 활용한 자세한 조작 설명이 추가될 예정입니다.

- 임무 정보, 지역, 날씨 및 시간
- 설정 권한과 임무 제한

[맨 위로](#tac-editor-top)

<a id="part-7"></a>

## 7부: 저장 및 시험 비행

이 부분에는 스크린샷을 활용한 자세한 조작 설명이 추가될 예정입니다.

- 권장 편집 순서
- File: 저장 및 불러오기
- Go Fly 및 비행 전 점검

[맨 위로](#tac-editor-top)
