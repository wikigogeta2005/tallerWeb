# Registro de Nota Conceptual 2026

## Descripción del Proyecto

Este proyecto consiste en una aplicación web desarrollada con HTML, CSS y JavaScript para el registro de Notas Conceptuales de proyectos de vinculación e investigación.

La aplicación permite ingresar información relacionada con:

* Datos generales del proyecto.
* Sede y departamento responsable.
* Plazo de ejecución.
* Cobertura geográfica.
* Ubicación del proyecto.
* Sector de la población beneficiaria.
* Ámbito prioritario.
* Objetivos de Desarrollo Sostenible (ODS).
* Metas ODS asociadas.
* Validación de datos ingresados.
* Generación de un resumen del registro.

El sistema utiliza JavaScript para realizar validaciones de formularios, controlar la selección dinámica de metas según el ODS elegido y mostrar la información registrada por el usuario.

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* Docker
* Nginx

## Estructura del Proyecto

```text
Taller/
│
├── index.html
├── styles.css
├── app.js
├── Dockerfile
└── .dockerignore
```

## Construcción de la Imagen Docker

Para construir la imagen Docker ejecute:

```bash
docker build -t kenaposo2005/espe-tal:latest .

## Ejecución del Contenedor

Para iniciar el contenedor:

bash
docker run -d -p 8081:80 kenaposo2005/espe-tal:latest


docker push
docker push kenaposo2005/espe-tal:tagname

## Acceso a la Aplicación

Una vez ejecutado el contenedor, la aplicación estará disponible en:

```text
http://localhost:8081
```
