# Manual de pilotaje en dispositivos móviles

Este documento se aplica a dispositivos móviles iOS/Android.

## Regla básica: sujetar la pantalla verticalmente

Este es el paso fundamental para controlar la actitud con precisión:

![Regla básica: sujetar la pantalla verticalmente](/assets/tilt-guide.png)

- ❌ INCORRECTO: sujetar el teléfono plano u horizontal. En esta posición se acoplan los ejes de alabeo y guiñada, dificultando distinguir con fiabilidad las órdenes de alabeo.
- ✅ POSICIÓN NORMAL: sujetar el dispositivo con ambas manos y la pantalla perpendicular al suelo, mirando directamente hacia ti.

### ¿Por qué debe sujetarse verticalmente?

El control por movimiento necesita distinguir claramente el eje de alabeo. Al colocar el dispositivo plano, los ejes de alabeo y guiñada se acoplan durante el cálculo de actitud y el sistema no puede distinguirlos con fiabilidad. Por eso, la posición vertical debe ser la referencia del control por movimiento.

## Entradas de control

- Cabeceo (timón de profundidad): inclina la parte superior del teléfono hacia atrás, hacia el cuerpo, para levantar el morro y ascender; hacia delante, alejándola del cuerpo, para bajar el morro y descender.
- Alabeo (alerones): gira el teléfono a izquierda o derecha como un volante.

## Joystick táctil virtual

La versión móvil también admite un joystick en pantalla como alternativa al control por movimiento. Selecciona ese modo antes del vuelo si deseas mantener el dispositivo quieto.

![Joystick táctil virtual](/assets/mobile-virtual-stick.jpeg)

- Cabeceo: arrastra el joystick hacia abajo para subir el morro y hacia arriba para bajarlo.
- Alabeo: arrástralo a izquierda o derecha para girar en la dirección correspondiente.
- Neutro: al soltarlo vuelve automáticamente al centro.

La posición vertical y la calibración solo se requieren con el control por movimiento. Con el joystick táctil puedes sujetar el dispositivo en cualquier posición cómoda para verlo.

## Preparación y consejos de precisión

1. Establecer la referencia (calibración): tras entrar en cabina o antes de despegar, siéntate cómodamente, sujeta el dispositivo vertical y estable, abre el menú principal y pulsa Calibrate Gyro. El ángulo actual se guardará como punto neutro.

    ![Preparación y consejos de precisión](/assets/mobile-gyro-calibration.jpeg)

2. Estabilizar los controles: en formaciones cerradas, reabastecimiento aéreo o combate cercano, apoya los codos en las rodillas o reposabrazos. Así reduces los temblores y puedes lograr una precisión inferior a un grado.

## Modo de edición de la interfaz táctil

Toca rápidamente cuatro veces seguidas una zona vacía de la pantalla para abrir el editor. También puedes elegir `UI Editor` en el menú principal.

![Modo de edición de la interfaz táctil](/assets/mobile-ui-editor.jpeg)

En el editor puedes:

- Reorganizar controles: seleccionarlos y moverlos para personalizar la disposición.
- Activar la transparencia: usar `CLEAR MODE` para cambiar a la presentación transparente.
- Ajustar la opacidad general: reducir cuánto obstruye la interfaz la vista de vuelo.
- Configurar los MFD flotantes: ajustar el tamaño y la visibilidad de las pantallas multifunción. Consulta la [documentación de la interfaz táctil del F-15C](/es/Docs/aircraft/f15c/touch-ui.html#item-3) para los controles y el panel de edición.
