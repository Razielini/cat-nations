# 😺 Feedback

## 🤹 Sobre el ejercicio
El ejercicio en si es sencillo y simple, hay algunas consideraciones que se tienen que tomar:
- Que API usar?
- La lista de razas puede estar en el frontend?
- De donde se toman las coordenadas de los paises?
- Que mapa usar?

El curso de accion tomado fue:
- Investigar sobre APIs de gatos, que tenga la raza y el pais de origen, es lo principal, ganadora `https://thecatapi.com/`.
- Se considero que las razas deberian de venir desde el backend, asi la apliación siempre estaria actualizada, sin importar la información.
- Las coordenadas de los paises se buscaron y se encontro una lista muy completa de ellos.
- En primera instancia seria usar Google Maps, pero en un grupo que estoy estaban promoviendo leaftlet como herramienta, asi que decidi probarla para el ejercicio.

## 🚦 Sobre la metodologia
En este caso se baso en issues:
- Se crea un issue que funciona como una sistema de tareas.
- El desarrollo se hace resolviendo estos issues ó tareas.

Durante el desarrollo se usa Git Flow como metodologia para Git.

## 👁️‍🗨️ Durante el ejercicio

Durante el desarrollo del proyecto lo primero que pense fue:

### Si el API es pequeña podria guardar toda la información en una BD propia para tener mas control.

De momento no lo hice, por que en muchas ocasiones es necesario consumir APIs de 3ros, que no es viable duplicar, es mejor simplemente consultarlas.

### Realzar el pais en lugar de crear un marcador
Pense que me iba a detener la falta de coordenadas de los paises, afortunadamente no me tomo mucho tiempo encontrar una lista de paises con sus respectivas cordenadas.

Las coordenadas si son muchas, especialmente por que en este caso en particular dibujan un poligono, esta información se autocompleta en el frontend, podria ser mejor si se autocompleta desde el backend, se puede poner a discusion al final el frontend no pesa tanto, pero aun tiene mucha oportunidad de mejora, al ser una lista de paises finita y con poca probabilidad de modificación creo que lo mas correcto es que esten en el frontend.

### Agregar más información a la vista

Tambien se agrego un poco de información extra que proporciona el api, ya que no tiene mucho caso solo mostrar el pais, siempre es util que el usuario tenga algo mas de información segun la consideración del desarrollador.

## 🕵️‍♂️ Principales mejoras al proyecto

1. Para el frontend se podria usar una mejor tecnologia como React, Vue, Angular, segun la necesidad final.
2. Para el frontend se puede mejorar la parte en como se toman las coordenadas de los paises, de momento es algo caotico.
3. Para el backend hay ciertas funciones como el models/cats, que puede simplificarse en una funcion llamada por los metodos.
4. Se podria buscar una API que entregue las coordenadas del pais ó construir una que se adapte mejor.
5. Se podria documentar usando una herramienta con notion para tener información mas completa, en caso de que esta API tuviera mas relevancia.
6. Hacer deploy para ver su funcionamiento en vivo, seguramente lo hare uno de estos días.

## 🧾 License

The MIT License (MIT)