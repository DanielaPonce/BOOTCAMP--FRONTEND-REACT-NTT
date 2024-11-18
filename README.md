# My Market


## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)

## Instalación

### Requisitos Previos

- **Node.js**: Asegúrate de tener instalada una versión compatible (versión 20.17.0).
- **npm**: npm debería instalarse junto con Node.js, pero si es necesario, verifica tu versión usando `npm -v`.

### Pasos de Instalación

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/
cd tu-repositorio
```

Luego, instala las dependencias necesarias:

```bash
npm install
```

## Uso

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Esto debería iniciar el proyecto en un entorno local. Generalmente, la aplicación estará disponible en [http://localhost:5173](http://localhost:5173) (o en el puerto configurado).

## Scripts Disponibles

A continuación se describen algunos de los comandos de npm que puedes usar:

- **`npm run dev`**: Inicia la aplicación en modo de desarrollo.

## Estructura del Proyecto

Aquí se muestra la estructura general del proyecto:

```
📦BOOTCAMP-FIRST-PROJECT
 ┣ 📂public
 ┃ ┃ ┗ 📂assets
 ┣ 📂src
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┣ 📂mappers
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜index.ts
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```


## Contribuciones

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request en el repositorio original.

