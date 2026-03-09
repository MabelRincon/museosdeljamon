# Museos del Jamón — Proyecto JavaScript Ev2

Sitio web temático sobre los **Museos del Jamón** desarrollado como proyecto de evaluación para el módulo de JavaScript. Incluye una página principal y un formulario de creación de cuenta con validaciones en JavaScript.

## 🌐 Demo en vivo

🔗 [Ver proyecto en Neocities](https://museosdeljamon.neocities.org/)

---

## 📁 Estructura del proyecto
```
proyectoFormulario/
├── index.html
├── formulario.html
├── estilos/
│   └── estilos.css
└── imagenes/
    └── ...
```

---

## 📄 Páginas

### `index.html`
Página principal del sitio web temático Museos del Jamón. Contiene:
- Título y presentación del sitio
- Enlace de acceso al formulario de registro
- Estructura semántica HTML5

### `formulario.html`
Formulario de creación de cuenta adaptado a la temática. Campos incluidos:
- Nombre
- Primer apellido
- Segundo apellido *(opcional)*
- Fecha de nacimiento
- Correo electrónico
- Contraseña y confirmación de contraseña
- Botón **Crear cuenta**

---

## ✅ Validaciones JavaScript

El formulario implementa las siguientes validaciones antes de procesar el envío:

| Validación | Descripción |
|---|---|
| Campos obligatorios | Nombre, apellido 1, fecha, email y contraseña no pueden estar vacíos |
| Formato de email | Debe seguir el patrón `texto@texto.texto` |
| Mayoría de edad | El usuario debe tener 18 años o más |
| Fecha no futura | La fecha de nacimiento no puede ser posterior a hoy |
| Contraseñas coincidentes | Ambos campos de contraseña deben ser iguales |
| Longitud de contraseña | Mínimo 8 caracteres |

En caso de error, se muestra un mensaje descriptivo indicando el campo con el problema.

Al completar el registro correctamente, aparece un mensaje de confirmación con el nombre del usuario y el fondo de la página cambia de color.

---

## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- CSS3
- JavaScript (Vanilla JS, sin librerías externas)

---

## 👩‍💻 Autora

**Mabel Rincón** — DAW · Módulo de Lenguajes de Marcas y Sistemas de Gestión de Información
