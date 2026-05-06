# Модули самолётов

Выберите модуль ниже. Нажмите на элемент, чтобы открыть документацию.

<div class="aircraft-list">
  <a class="aircraft-row" href="./f15c/introduction">
    <img src="/assets/aircraft-icons/F-15C.png" alt="F-15C icon" />
    <h3>F-15C</h3>
  </a>
  <a class="aircraft-row" href="./f5e/introduction">
    <img src="/assets/aircraft-icons/F-5E.png" alt="F-5E icon" />
    <h3>F-5E</h3>
  </a>
  <a class="aircraft-row" href="./f16c/introduction">
    <img src="/assets/aircraft-icons/F-16C.png" alt="F-16C icon" />
    <h3>F-16C</h3>
  </a>
  <a class="aircraft-row" href="./a10c/introduction">
    <img src="/assets/aircraft-icons/A-10C.png" alt="A-10C icon" />
    <h3>A-10C</h3>
  </a>
  <a class="aircraft-row" href="./f15e/introduction">
    <img src="/assets/aircraft-icons/F-15E.png" alt="F-15E icon" />
    <h3>F-15E</h3>
  </a>
</div>

<style scoped>
.aircraft-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
  max-width: 520px;
}

.aircraft-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
  color: inherit;
  text-decoration: none;
  transition: border-color .16s ease, transform .16s ease, background-color .16s ease;
}

.aircraft-row:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateX(2px);
  background: var(--vp-c-bg-elv);
}

.aircraft-row img {
  width: 42px;
  height: 42px;
  object-fit: contain;
  filter: grayscale(1) contrast(0) brightness(0.72);
  opacity: .95;
  flex-shrink: 0;
}

.aircraft-row h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.1;
}
</style>
