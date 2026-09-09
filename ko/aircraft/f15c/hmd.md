<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# F-15C 헬멧 장착 디스플레이(HMD)

HMD는 비행, 아군 항공기, 표적 및 무장 정보를 시야에 표시합니다. 레이더 안테나나 적외선 미사일 탐색기의 방향을 지정할 수도 있습니다.

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 전원 켜기와 자체 시험</a>
  <a href="#datalink">2 데이터링크 아군 표시</a>
  <a href="#sensor-cueing">3 센서 방향 지정</a>
  <a href="#weapon-range">4 표적과 무장 사거리</a>
  <a href="#infrared-example">5 적외선 유도 미사일 탐색기의 HMD 연동 시연</a>
</div>

스크린샷을 클릭하면 원본 해상도로 볼 수 있습니다.

<a id="power-on"></a>

## 1. 전원 켜기와 자체 시험

HMD 제어 영역의 `BRT` 터치 컨트롤을 위로 밀면 HMD가 켜집니다.

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="그림 1: HMD BRT 컨트롤을 위로 밀어 전원 켜기" loading="lazy" />
  </a>
  <figcaption>그림 1: HMD BRT 컨트롤을 위로 밀어 전원 켜기</figcaption>
</figure>

전원을 켜면 HMD에 `TESTING` 자체 시험 화면이 표시됩니다. 시험이 끝나면 정상 화면에서 방위, 대기 속도, 고도 등의 비행 정보를 표시합니다.

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="그림 2: HMD 기동 자체 시험" loading="lazy" />
  </a>
  <figcaption>그림 2: HMD 기동 자체 시험</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="그림 3: 자체 시험이 끝난 뒤의 정상 HMD 비행 화면" loading="lazy" />
  </a>
  <figcaption>그림 3: 자체 시험이 끝난 뒤의 정상 HMD 비행 화면</figcaption>
</figure>

<a id="datalink"></a>

## 2. 데이터링크 아군 표시

데이터링크를 켜면 HMD에서 아군 항공기의 위치를 직접 볼 수 있습니다. 그림 4는 SIT 페이지의 편대 정보를, 그림 5는 HMD의 아군 기호를 보여 줍니다. 외부를 보면서 아군의 방향을 확인할 수 있습니다.

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="그림 4: SIT의 편대 데이터링크 정보" loading="lazy" />
  </a>
  <figcaption>그림 4: SIT의 편대 데이터링크 정보</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="그림 5: HMD에 표시된 아군 항공기 위치" loading="lazy" />
  </a>
  <figcaption>그림 5: HMD에 표시된 아군 항공기 위치</figcaption>
</figure>

데이터링크와 SIT 기호는 [MPCD](/ko/Docs/aircraft/f15c/mpcd.html)를 참조하세요.

<a id="sensor-cueing"></a>

## 3. 센서 방향 지정

HMD의 주요 기능 중 하나는 레이더 안테나나 적외선 미사일 탐색기 같은 센서의 방향을 지정하는 것입니다. 보어사이트(BST)와 장거리 보어사이트(LR BST) 모드 모두 HMD를 통한 레이더 안테나 방향 지정을 지원합니다. 그림 6은 보어사이트 모드의 사용 예입니다.

레이더 안테나의 짐벌 가동 범위 안에서 HMD를 표적 쪽으로 향하면 안테나를 그 방향으로 유도하여 표적을 획득하고 락온할 수 있습니다. 안테나의 움직임은 짐벌 가동 범위로 제한됩니다.

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="그림 6: 보어사이트 모드에서 HMD로 레이더 안테나 방향 지정" loading="lazy" />
  </a>
  <figcaption>그림 6: 보어사이트 모드에서 HMD로 레이더 안테나 방향 지정</figcaption>
</figure>

레이더 모드와 자동 획득 조작은 [AN/APG-63 레이더 및 VSD](/ko/Docs/aircraft/f15c/radar.html)를 참조하세요.

<a id="weapon-range"></a>

## 4. 표적과 무장 사거리

HMD에는 표적과 무장 사거리 정보도 표시됩니다. 그림 7의 표적 상자와 거리 눈금은 HUD에서 시선을 돌린 상태에서도 관련 정보를 확인할 수 있게 합니다.

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="그림 7: HMD의 표적 및 무장 사거리 정보" loading="lazy" />
  </a>
  <figcaption>그림 7: HMD의 표적 및 무장 사거리 정보</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. 적외선 유도 미사일 탐색기의 HMD 연동 시연

HMD로 적외선 미사일 탐색기를 지향하는 조작 예는 [적외선 유도 미사일 탐색기의 HMD 연동 시연(7초부터)](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s)을 참고하세요.
