# PipesApp

Este proyecto trata de una aplicación diseñada para explorar y demostrar el uso de **pipes** en Angular, incluyendo pipes comunes, personalizados y la gestión de datos a través de componentes dinámicos. La aplicación también implementa diseños responsivos y utiliza la biblioteca PrimeNG para optimizar la experiencia de usuario.

## **Descripción**

La aplicación muestra cómo aplicar distintos **pipes** nativos y personalizados de Angular para transformar datos. También se incorporan funcionalidades avanzadas como:

- 📄 **Pipes personalizados:** para convertir textos (mayúsculas/minúsculas) y ordenar listas dinámicamente.
- 📊 **Tablas interactivas:** con PrimeNG, permitiendo ordenación y visualización optimizada de datos.
- 🌐 **Navegación dinámica:** mediante rutas y componentes modulares.
- 🛠️ **Módulos compartidos:** para mejorar la reutilización de componentes y optimización del proyecto.

## **Requisitos previos**

- Node.js y npm instalados.
- Angular CLI versión 12.1.2 o superior.

## **Pasos de instalación**

### 1. Clonar el repositorio

```bash
git clone https://github.com/ramon-molinero/news-app.git
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar claves de la API de News
Edita `src/environments/environment.ts` y `src/environments/environment.prod.ts` con la clave de la API.

### 4. Iniciar el servidor de desarrollo

```bash
ionic serve
```

### 5. Construir para móviles

- **Android:**
  ```bash
  ionic capacitor build android
  ```

- **iOS:**
  ```bash
  ionic capacitor build ios
  ```

### 6. Sincronizar cambios con Capacitor

```bash
ionic capacitor sync
```

## **Construcción del proyecto**

Para crear una compilación optimizada para producción:

```bash
ng build --prod
```
Los artefactos de construcción se almacenarán en el directorio `dist/`.

## **Dependencias principales**

- **Angular Core:** 12.1.2
- **PrimeNG:** 12.1.1
- **PrimeFlex:** 3.0.1
- **Zone.js:** ~0.11.4
- **RxJS:** ~6.6.0
