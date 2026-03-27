# Documentacion del Proyecto

## a) Descripcion del proyecto
- Nombre del sitio: Caine Cafe
- Tematica elegida: Cafeteria de especialidad
- Objetivo: Ofrecer una experiencia web multipagina moderna, responsive y accesible para presentar la marca, el menu y un canal de contacto.

## b) Estructura del sitio (3 templates)
- Home ([home.html](home.html)): Presenta hero principal, propuesta de valor, tarjetas de especialidades, planes y enlaces de accion.
- Menu ([menu.html](menu.html)): Muestra productos organizados por categorias con botones de accion y filtro dinamico.
- Contacto ([contact.html](contact.html)): Incluye formulario validado con JavaScript, informacion de contacto y seccion de ubicacion referencial.

## c) Funcionalidades implementadas (JavaScript)
Archivo principal: [js/main.js](js/main.js)

- Menu responsive:
  - Boton hamburguesa en movil.
  - Apertura/cierre del menu de navegacion.
  - Cierre automatico al elegir una opcion.

- Navegacion por botones:
  - Botones principales redirigen a las vistas correspondientes usando `data-target`.

- Filtro de tarjetas en Menu:
  - Filtro por categoria: Todos, Cafe Caliente, Metodos, Bebidas Frias y Reposteria.
  - Oculta/muestra tarjetas segun categoria.

- Formulario de contacto con validaciones:
  - Nombre minimo de 3 caracteres.
  - Email con formato valido.
  - Mensaje minimo de 10 caracteres.
  - Mensajes de error por campo.
  - Mensaje de confirmacion al enviar correctamente.

- Retroalimentacion al usuario:
  - Toast de confirmacion en acciones de pedido/membresia/formulario.

- Boton volver arriba:
  - Aparece al hacer scroll y desplaza suavemente al inicio.

## d) Mejoras de accesibilidad y usabilidad
- Estructura semantica con `header`, `nav`, `main`, `section`, `article` y `footer`.
- Imagenes con atributo `alt`.
- Formulario con `label` asociados a cada control.
- Elementos interactivos con texto claro y comportamiento consistente.
- `aria-label`, `aria-expanded` y `aria-controls` en menu responsive.
- `aria-live` en mensajes de estado (feedback y errores) para mejor soporte asistivo.
- Navegacion consistente entre las 3 paginas.
- Diseño adaptable para escritorio, tablet y movil con Flexbox/Grid + media queries.

## e) Capturas del resultado final (pendiente de adjuntar)
- Vista escritorio: colocar captura en carpeta `capturas/vista_escritorio`.
- Vista tablet: colocar captura en carpeta `capturas/vista_tablet`.
- Vista movil: colocar captura en carpeta `capturas/vista_movil`.


## Verificacion tecnica realizada
- Navegacion entre templates revisada y funcional.
- Botones principales enlazados o con retroalimentacion visible.
- SCSS compilado sin errores a `dist/css/main.css`.
- Validaciones JavaScript activas en el formulario de contacto.
