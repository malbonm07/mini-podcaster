# Mini Podcaster
Una aplicación mini podcast desarrollado con VueJS. Incluye 3 vistas, el home con la lista de podcasts, la vista de detalle del podcast seleccionado con su lista de episodios y la vista para el episodio en detalle.

## IMPORTANTE❗
Para los problemas de cors se cambio el servicio de [cors-anywhere](https://cors-anywhere.herokuapp.com/) por un servidor proxy propio que desplegué en heroku.

## Demo
[DEMO](https://mini-podcaster.netlify.app/)

## Screenshots
![App Podcaster](https://i.imgur.com/M3LgGIZ.png)
![App Podcaster](https://i.imgur.com/MAHA5Qf.png?1)
![App Podcaster](https://i.imgur.com/qxEQpqA.png?1)

## Tecnologías/frameworks usados
<b>Desarrollado con:</b>
- [VueJS](https://v2.vuejs.org/)
- JavaScript
- Html
- CSS: Sass

## Proyecto setup
```
npm install
```

### Compilación y hot-reloads para modo development
```
npm run start
```

### Compilar y minimizar para modo production
```
npm run build
```


### Proceso de despliegue

El sitio está desplegado con el servicio de Netlify. Una vez hecho el build se creará un folder con el nombre dist y este lo subiremos a netlify, puede ser manualmente o automatico creando un PR. Para más detalles:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter)

###### html:
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
