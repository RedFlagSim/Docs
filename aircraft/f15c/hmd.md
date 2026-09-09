<script setup>
import image1 from '/assets/F-15C/HMD/power-control.png'
import image2 from '/assets/F-15C/HMD/startup-test.png'
import image3 from '/assets/F-15C/HMD/flight-display.png'
import image4 from '/assets/F-15C/HMD/datalink-sit.png'
import image5 from '/assets/F-15C/HMD/datalink-friendlies.png'
import image6 from '/assets/F-15C/HMD/radar-cueing.png'
import image7 from '/assets/F-15C/HMD/target-weapon-range.png'
</script>

# F-15C Helmet-Mounted Display (HMD)

The HMD presents flight, friendly aircraft, target and weapon information in your field of view. It can also cue the radar antenna or an infrared missile seeker.

<div class="term-cloud tac-editor-index">
  <a href="#power-on">1 Power-on and self-test</a>
  <a href="#datalink">2 Datalink friendly aircraft display</a>
  <a href="#sensor-cueing">3 Sensor cueing</a>
  <a href="#weapon-range">4 Target and weapon range</a>
  <a href="#infrared-example">5 HMD-slaved infrared-guided missile seeker demonstration</a>
</div>

Click a screenshot below to view it at its original resolution.

<a id="power-on"></a>

## 1. Power-on and self-test

Swipe upward on the `BRT` touch control in the HMD control area to turn on the HMD.

<figure>
  <a :href="image1" target="_blank" rel="noopener">
    <img :src="image1" alt="Image 1: swipe upward on the HMD BRT control to power on" loading="lazy" />
  </a>
  <figcaption>Image 1: swipe upward on the HMD BRT control to power on</figcaption>
</figure>

After power-on, the HMD displays the `TESTING` self-test screen. Once the test finishes, the normal display shows flight information such as heading, airspeed and altitude.

<figure>
  <a :href="image2" target="_blank" rel="noopener">
    <img :src="image2" alt="Image 2: HMD startup self-test" loading="lazy" />
  </a>
  <figcaption>Image 2: HMD startup self-test</figcaption>
</figure>

<figure>
  <a :href="image3" target="_blank" rel="noopener">
    <img :src="image3" alt="Image 3: normal HMD flight display after self-test" loading="lazy" />
  </a>
  <figcaption>Image 3: normal HMD flight display after self-test</figcaption>
</figure>

<a id="datalink"></a>

## 2. Datalink friendly aircraft display

With the datalink enabled, you can see friendly aircraft positions directly in the HMD. Image 4 shows flight members on the SIT page; image 5 shows friendly symbols in the HMD, helping you locate friendlies while looking outside.

<figure>
  <a :href="image4" target="_blank" rel="noopener">
    <img :src="image4" alt="Image 4: flight-member datalink information on SIT" loading="lazy" />
  </a>
  <figcaption>Image 4: flight-member datalink information on SIT</figcaption>
</figure>

<figure>
  <a :href="image5" target="_blank" rel="noopener">
    <img :src="image5" alt="Image 5: friendly aircraft positions in the HMD" loading="lazy" />
  </a>
  <figcaption>Image 5: friendly aircraft positions in the HMD</figcaption>
</figure>

For datalink and SIT symbols, see [MPCD](/Docs/aircraft/f15c/mpcd.html).

<a id="sensor-cueing"></a>

## 3. Sensor cueing

One of the HMD’s main functions is to cue sensors, such as the radar antenna or an infrared missile seeker. Both boresight (BST) and long-range boresight (LR BST) modes support HMD radar antenna cueing. Image 6 shows its use in boresight mode.

Within the radar antenna’s gimbal limits, pointing the HMD toward a target can direct the antenna toward it for acquisition and lock-on. Antenna movement remains limited by its gimbal range.

<figure>
  <a :href="image6" target="_blank" rel="noopener">
    <img :src="image6" alt="Image 6: HMD radar antenna cueing in boresight mode" loading="lazy" />
  </a>
  <figcaption>Image 6: HMD radar antenna cueing in boresight mode</figcaption>
</figure>

For radar modes and auto-acquisition controls, see [AN/APG-63 Radar and VSD](/Docs/aircraft/f15c/radar.html).

<a id="weapon-range"></a>

## 4. Target and weapon range

The HMD also includes target and weapon-range information. Image 7 shows a target box and range scale, allowing the pilot to read this information while looking away from the HUD.

<figure>
  <a :href="image7" target="_blank" rel="noopener">
    <img :src="image7" alt="Image 7: target and weapon-range information in the HMD" loading="lazy" />
  </a>
  <figcaption>Image 7: target and weapon-range information in the HMD</figcaption>
</figure>

<a id="infrared-example"></a>

## 5. HMD-slaved infrared-guided missile seeker demonstration

For an example of using the HMD to cue an infrared missile seeker, watch the [HMD-slaved infrared-guided missile seeker demonstration (starting at 7 seconds)](https://www.youtube.com/watch?v=JnmCEVeKtQc&t=7s).
