# Api-Rest-NodeJs-MongoDB  :boom:

El objetivo es crear una **REST-API** con **Node JS**. Node Js lo usaremos para crear nuestro servidor. Ademas utilizaremos **Express** (framework de Node Js) 
que nos ayudara a reducir la dificultad del codigo, ya que tranquilamente podria realizarse la REST-API solamente con Node Js. Ademas utilizaremos **MongoDB**
como base de datos. Se podra realizar distintos tipos de peticiones (GET, POST, DELETE, PUT) que se vera reflejado en la base de datos.


## Pre-requisitos :page_with_curl:

* Git
* Node Js
* MongoDB
* Herramienta de testing (Ej. Postman)
* Editor de codigo (Ej. Visual Studio Code)

## Instalación :wrench:

  :white_check_mark:  ***git clone*** https://github.com/martinez022jose/Api-Rest-NodeJs-MongoDB.git <br>
  
  :white_check_mark: ***npm i o npm install*** <br>
  
  :white_check_mark: ***mongod (Se debe iniciar motor mongodb local)*** <br>

## Despliegue :airplane:

 :white_check_mark: ***npm run dev*** <br>

## Comenzando :loudspeaker:

Todas las peticiones tendran el prefijo **"/api/countries"**, ya que así las definimos .Nuestra base de datos registra paises con determinados datos.
Los registros **.json** poseen la siguiente estructura
 
```
  { 
      id: Number, 
      name: String, 
      capital: String, 
      surface: Number, 
      currency: Number, 
      religion: String,
  }
 ```
  
Peticiones elementales (CRUD) :

- Petición GET :

``` 
GET /api/countries 
```

 Se debera observar listado, en formato **Json**, todos los paises cargados hasta el momento de la petición, caso de no cargar ningun registro sera **[ ]** (vacio)

- Petición POST :

```
POST /api/countries/add-country
```

En este caso se debe pasar un **Json** para su almacenamiento. Se debera observar listado, en formato **Json**, todos los paises incluyendo la almacenada.

- Petición PUT :

```
PUT /api/countries/update-country/id
```

En este caso se debe pasar un "id" por ruta para lograr identificar el registro a actualizar y un **Json** modificado que reemplazara al original. 
Se debera observar listado, en formato **Json**, todos los paises con la actualizacion del registro dado.

- Petición DELETE :

```
DELETE /api/countries/delete-country/id
```

En este caso se debe pasar un "id" por ruta para poder identificar el registro y eliminarlo. Se debera observar listado, en formato **Json**, 
de todos los paises sin el registro dado. 

## Construido con :hammer_and_pick:

* Node Js

* Express

* MongoDB

## Autor/s :fountain_pen:

* **Jose Martinez Gutierrez**
