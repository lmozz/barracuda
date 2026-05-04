# Barracuda - Resumen de Pagos

Aplicación web estática para visualizar el desglose individual de consumos y propinas de un evento en el restaurante **Barracuda**.

## Descripción

Este proyecto muestra un resumen de pagos con diseño moderno (glassmorphism) donde cada participante puede ver:

- Su consumo individual (comida, extras, bebida)
- El total a pagar
- El estado de pago (pagado/pendiente)
- Información bancaria para realizar transferencias

## Características

- **Diseño responsivo** con Tailwind CSS
- **Efecto glassmorphism** con animaciones suaves
- **Modales** para ver la tabla resumen y el ticket del restaurante
- **Open Graph** para compartir en redes sociales
- **Sin dependencias externas** (solo Tailwind Play CDN y Animate.css)

## Estructura

```
barracuda/
├── index.html          # Página principal
├── tailwind.js         # Tailwind CSS (CDN local)
├── animate.min.css     # Animate.css
├── wall.jpg            # Imagen de fondo
├── tabla.png           # Tabla resumen (modal)
├── ticket.jpeg         # Ticket del restaurante (modal)
├── logo-dizucar.png    # Logo
└── icon.png            # Favicon
```

## Uso

1. Abre el archivo `index.html` en cualquier navegador moderno
2. O despliega en GitHub Pages para acceso remoto

## Tecnologías

- HTML5
- CSS3 (Glassmorphism, animaciones)
- JavaScript vanilla
- Tailwind CSS
- Animate.css

## Licencia

Sin licencia definida.