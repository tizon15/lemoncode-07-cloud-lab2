# Ejercicio 2

En este ejercicio del laboratorio modulo 7 cloud del master frontend de Lemoncode

Vamos a crear un workflow de githubs actions para subir nuestro proyecto a GitHub Pages

Para ello hemos creado dos nuevos directorios *.github* y dentro de este el directorio *workflows*. 

Una vez creados los dos directorios dentro creamos un ficher *.yml* para crear nuestro workflow. Al fichero le hemos llamado **deploy.yml**

En este workflow creamos el flujo para nuestro deploy. Primero, montamos el SO que queremos que tenga nuestra maquina, en este caso *ubuntu-latest*

Despues, hemos configurado en nuestro repository, las clave **ssh** para poder subir el proyecto a traves de un **Secret** y una **Deploy Key**

Luego, configuramos el mail y usuario de git

Y los siguientes pasos serían los pasos que hariamos de forma manual. **NPM install** para las dependencias. **NPM run build** para compilar el proyecto. Y **npm run deploy** para publicar el proyecto. En este ultimo caso hemos añadido por medio de la flag **--repo** nuestro repositorio git@github.com:tizon15/lemoncode-07-cloud-lab2.git 

Para poder visualizar el proyecto solo nos quedaría visualizarlo en la URL https://tizon15.github.io/lemoncode-07-cloud-lab2/#/characters