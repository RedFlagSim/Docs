<script setup lang="ts">
import packageImage from '../../../assets/TacEditor/package-inspector.png'
import flightImage from '../../../assets/TacEditor/flight-inspector.png'
import slotImage from '../../../assets/TacEditor/slot-inspector.png'
import steerpointsImage from '../../../assets/TacEditor/steerpoints-inspector.png'
import geofenceListImage from '../../../assets/TacEditor/geofence-list.png'
import geofenceCircleImage from '../../../assets/TacEditor/geofence-circle.png'
import geofencePolygonImage from '../../../assets/TacEditor/geofence-polygon.png'
import npUnitListImage from '../../../assets/TacEditor/np-unit-list.png'

const panels = {
  package: { src: packageImage, width: 474, height: 1337 },
  flight: { src: flightImage, width: 474, height: 1376 },
  slot: { src: slotImage, width: 475, height: 1376 },
  steerpoints: { src: steerpointsImage, width: 472, height: 1099 },
  'geofence-list': { src: geofenceListImage, width: 474, height: 812 },
  'geofence-circle': { src: geofenceCircleImage, width: 473, height: 989 },
  'geofence-polygon': { src: geofencePolygonImage, width: 474, height: 1082 },
  'np-unit-list': { src: npUnitListImage, width: 474, height: 920 }
}

defineProps<{
  panel: keyof typeof panels
  alt: string
  openLabel: string
}>()
</script>

<template>
  <div class="tac-inspector-panel">
    <figure class="tac-inspector-panel__figure">
      <a :href="panels[panel].src" target="_blank" rel="noopener" :title="openLabel">
        <img
          :src="panels[panel].src" :alt="alt"
          :width="panels[panel].width" :height="panels[panel].height"
          loading="lazy" decoding="async"
        >
      </a>
      <figcaption>{{ openLabel }}</figcaption>
    </figure>
    <div class="tac-inspector-panel__description">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tac-inspector-panel {
  display: grid;
  grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
  align-items: start;
  gap: 24px;
  margin: 20px 0 28px;
}

.tac-inspector-panel__figure {
  margin: 0;
  min-width: 0;
}

.tac-inspector-panel__figure a {
  display: block;
  border-radius: 8px;
}

.tac-inspector-panel__figure a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}

.tac-inspector-panel__figure img {
  width: 100%;
  height: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.tac-inspector-panel__figure figcaption {
  margin-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.5;
}

.tac-inspector-panel__description {
  min-width: 0;
  overflow-wrap: anywhere;
}

.tac-inspector-panel__description :deep(> :first-child) {
  margin-top: 0;
}

.tac-inspector-panel__description :deep(> :last-child) {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .tac-inspector-panel {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  .tac-inspector-panel__figure {
    width: min(100%, 220px);
    margin-inline: auto;
  }
}
</style>
