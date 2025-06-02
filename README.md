# 📱 Menú Hamburguesa Responsive

## ⚙️ ¿Cómo funciona la función?

Encapsulamos el código dentro de una **función autoejecutable (IIFE)** que se activa apenas se carga la página. Esto permite:

- Asegurarnos de que el DOM ya esté disponible.
- Evitar variables globales innecesarias.

### Paso a paso:
1. Seleccionamos el botón del menú  y la lista de navegación.
2. Verificamos que existan en el DOM (para prevenir errores).
3. Agregamos un `addEventListener` al botón.
4. Cuando se hace clic, se **agrega o quita** la clase `.active` al menú.
5. El CSS detecta esa clase y usa **transiciones con `max-height` y `opacity`** para mostrar u ocultar el menú suavemente.

✅ Con pocas líneas de JavaScript y estilos en CSS, conseguimos que el menú aparezca y desaparezca animadamente al tocar el ícono.

---

## 🧩 ¿Por qué es útil o necesaria para nuestro proyecto?

Este fragmento de JavaScript es el que hace que el menú sea interactivo en **dispositivos móviles o pantallas pequeñas**.

- Mejora la experiencia de navegación en espacios reducidos.
- Permite mantener el diseño limpio, sin sobrecargar la interfaz.
- Facilita que el usuario acceda a las secciones desde el celular de forma clara y sencilla.

---

## 🛠️ ¿Cómo la pensamos y cómo la implementamos?

### 💡 La idea:
Nos dimos cuenta de que en pantallas chicas, el menú horizontal no entraba bien. Por eso, decidimos implementar un **menú tipo hamburguesa**, visible solo en móviles.

### 🔨 La implementación:
1. **HTML:**  
   Agregamos un botón que actúa como ícono del menú. Este botón muestra u oculta las opciones.

2. **CSS:**  
   Usamos `@media (max-width: 768px)` para cambiar el comportamiento del menú según el tamaño de pantalla.  
   Aplicamos:
   - `max-height` y `opacity` para animaciones suaves.
   - `transition` para que el menú se deslice en lugar de aparecer de golpe.

3. **JavaScript:**  
   Usamos una función IIFE que selecciona el botón y el menú. Al hacer clic, alterna la clase `.active`, que activa la animación definida en el CSS.

4. **Pruebas:**  
   Lo probamos en escritorio y móvil, ajustamos detalles visuales y de accesibilidad para que el resultado final sea funcional, claro y agradable.

> _(¡O eso esperamos! jejeje 😄)_

---

### 🎉 Resultado:
Un menú simple, animado y adaptado a dispositivos móviles, manteniendo el diseño limpio y la experiencia de usuario cuidada.

---

