<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# Нашлемный дисплей (HMD) F-15C

HMD выводит в поле зрения информацию о полёте, дружественных самолётах, целях и вооружении. Он также позволяет задавать направление антенне РЛС или инфракрасной головке самонаведения ракеты.

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 Включение и самопроверка</a>
  <a href="#datalink">2 Дружественные самолёты по каналу обмена данными</a>
  <a href="#sensor-cueing">3 Целеуказание датчикам</a>
  <a href="#weapon-range">4 Цель и дальность применения оружия</a>
  <a href="#infrared-example">5 Демонстрация следования инфракрасной ГСН за HMD</a>
</div>

Нажмите на снимок экрана, чтобы открыть его в исходном разрешении.

<a id="power-on"></a>

## 1. Включение и самопроверка

Проведите вверх по сенсорному элементу `BRT` в области управления HMD, чтобы включить дисплей.

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="Изображение 1: проведите вверх по элементу BRT для включения HMD" loading="lazy" />
  </a>
  <figcaption>Изображение 1: проведите вверх по элементу BRT для включения HMD</figcaption>
</figure>

После включения HMD показывает экран самопроверки `TESTING`. По её завершении появляется обычная индикация с курсом, воздушной скоростью, высотой и другими полётными данными.

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="Изображение 2: самопроверка HMD при включении" loading="lazy" />
  </a>
  <figcaption>Изображение 2: самопроверка HMD при включении</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="Изображение 3: обычная полётная индикация HMD после самопроверки" loading="lazy" />
  </a>
  <figcaption>Изображение 3: обычная полётная индикация HMD после самопроверки</figcaption>
</figure>

<a id="datalink"></a>

## 2. Дружественные самолёты по каналу обмена данными

При включённом канале обмена данными положения дружественных самолётов видны непосредственно в HMD. На изображении 4 показаны участники звена на странице SIT, а на изображении 5 — их символы в HMD. Это помогает определять направление на дружественные самолёты, наблюдая за обстановкой вне кабины.

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="Изображение 4: данные об участниках звена на странице SIT" loading="lazy" />
  </a>
  <figcaption>Изображение 4: данные об участниках звена на странице SIT</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="Изображение 5: положения дружественных самолётов в HMD" loading="lazy" />
  </a>
  <figcaption>Изображение 5: положения дружественных самолётов в HMD</figcaption>
</figure>

Описание канала обмена данными и символов SIT см. в разделе [MPCD](/ru/Docs/aircraft/f15c/mpcd.html).

<a id="sensor-cueing"></a>

## 3. Целеуказание датчикам

Одна из основных функций HMD — задавать направление датчикам, например антенне РЛС или инфракрасной головке самонаведения ракеты. Управление направлением антенны через HMD поддерживается как в режиме boresight (BST), так и в режиме дальнего boresight (LR BST). На изображении 6 показано применение режима BST.

В пределах углов отклонения антенны РЛС наведение HMD на цель позволяет направить на неё антенну для обнаружения и захвата. Движение антенны по-прежнему ограничено её механическими пределами отклонения.

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="Изображение 6: наведение антенны РЛС через HMD в режиме BST" loading="lazy" />
  </a>
  <figcaption>Изображение 6: наведение антенны РЛС через HMD в режиме BST</figcaption>
</figure>

Режимы РЛС и управление автоматическим захватом описаны в разделе [РЛС AN/APG-63 и VSD](/ru/Docs/aircraft/f15c/radar.html).

<a id="weapon-range"></a>

## 4. Цель и дальность применения оружия

HMD также показывает информацию о цели и дальности применения оружия. На изображении 7 видны рамка цели и шкала дальности, которые можно читать, даже когда взгляд направлен в сторону от HUD.

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="Изображение 7: информация о цели и дальности применения оружия в HMD" loading="lazy" />
  </a>
  <figcaption>Изображение 7: информация о цели и дальности применения оружия в HMD</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. Демонстрация следования инфракрасной ГСН за HMD

Пример управления инфракрасной головкой самонаведения ракеты через HMD показан в видео [«Демонстрация следования инфракрасной ГСН за HMD» (с 7-й секунды)](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s).
