# ProyectoAPINoticias---Integrador-1-Sis.-Software---51643
## Proyecto de vista de noticias: Chasky news.

![LogoChaskyNews](FronetApiNoticias\public\assets\imagenes\logoActualizado.png)

El siguiente proyecto pretende servir como una plataforma de noticias dirigida a personas que deseen seguir una historia completa. El proyecto está construido principalmente usando el framework **Angular 18** para el ___Front-End___ y **Spring boot** para el manejo del ___Back-End___. Asimismo, utiliza una API externa, NewsAPI, para la recolección de las noticias.

 De manera sencilla el proyecto, una vez terminado, se compondrá de los siguientes elementos:

1. Página de inicio de sesión.
2. Página de registro.
3. _Feed_ de noticias.
4. Ventana modal para la lectura de una noticia.
5. Página de creación y edición de una línea de tiempo.
6. Página _overview_ de todas las líneas de tiempo creadas por el usuario.

Los casos de uso del proyecto se indica en el siguiente diagrama, del cual en el 40% de los casos de uso se incluye:
* Registro de usuario.
* Inicio de sesión.
* Verificar usuario.
* Mostrar error.
* Mostrar noticias en forma de tarjetas.
* Agregar filtros.
* Leer noticia.


![CasoUsoRevisado](https://github.com/user-attachments/assets/361735ec-d6fd-40a8-918d-2a10ec2b1e6b)

De lo avanzado actualmente, se tiene la siguiente documentación

## Inicio de sesión
El componente de inicio de sesión toman dos _inputs_: 
- Correo electrónico.
- Contraseña.

Usando la validación de Bootsrasp 5.3, busca los _inputs_ dentro del _Local Storage_. De no encontrar los datos es marcado como inválido y no se puede proceder más en el sistema, de ser válido se redirige al usuario al feed de noticias.

El uso de _Local Storage_ es meramente temporal, se utiliza para simular correctamente el funcionamiento del panel, pronto se terminará la conexión completa con Spring Boot y la API de nuestra base de datos.

## Registro
El componente de registro toma los siguientes _inputs_:
* Nombre de usuario.
* Correo electrónico.
* Contraseña.
* Contraseña de confirmación.
* Método de pago.
* Numero de cuenta de 20 dígitos.

Usando la validación de Bootstrao 5.3, se busca el correo electrónico dentro del _Local Storage_, de encontrarse se marca como inválido y no se procede con el sistema. Esto también ocurre en caso de que las contraseñas no coincidan. En caso de que los datos sean validados, el usuario es redirigido a la página de inicio de sesión.

En el proceso de registro en sí, se guardan los siguientes datos:
* Nombre de usuario.
* Correo electrónico.
* Contraseña.
* Número de cuenta.
* Monto: S/5.
* Tipo de suscripción: Estándar.

Los últimos dos datos son agregados estáticamente por el sistema.

## _Feed_ de noticias
Dentro del feed de noticias, se tiene los siguiente elementos principales
* Barra de navegación: Barra superior que contiene accesos a otras páginas, en el futuro contendrá un enlace al overview de las líneas de tiempo y a la creación en sí de las mismas.
* Contenedor de noticias en forma de tarjeta: Es un campo donde las noticias, que toman las formas de tarjetas, son presentadas.
* Barra de búsqueda: Filtra las noticias según el titular ingresado.
* Filtros específicos: 
    - Categoría: Categoría de las noticias, específicamente: Tecnología, salud, finanzas, deportes y cultura.
    - Región América del Norte, América del Sur, Europa, Asia y África.
    - Autor: Nombre del autor.
    - Fecha inicial: Año que supone el límite en que tan antiguas pueden ser la noticias. Por ejemplo, si se ingresase el año 2014 solo se mostrarían las noticias publicadas a partir de ese año.
    - Fecha final: Similar al anterior, solo que esta muestra solo muestra las noticias publicadas anteriormente al año ingresado.

De estos filtros, actualmente funcionan todos menos el filtro de región. Esto se debe a que nuestro equipo está considerando si mantener este filtro o no, pues nuestra API externa no contiene esta información y su correcta clasificación sería muy complicada de hacer manualmente.

Dentro del feed en sí de las noticias, estas aparecen en forma de tarjeta, y muestran el titular de la noticia y una imagen relacionada. Una vez que se clica una noticia, es cuando la ventana modal del artículo completo aparece.

## Ventana modal del artículo

Intimamente relacionado con el componente anterior, forma parte del _feed_ dentro del código. Este, junto a las tarjetas, cargan datos usando Typescript y los presentan en un artículo completo. Los elementos que se ven involucrados son los siguientes y aparecen en el siguiente orden:

* Categoría de la noticia.
* Portal redactor de la noticia.
* Titular.
* Subtítulo.
* Imagen relacionada.
* Nombre del autor.
* Fecha de publicación (DD/MM/AA).
* Cuerpo del artículo

Actualmente los datos que toman las tarjetas y el artículo son estáticos, a futuro los datos se recibirán desde un archivo JSON guardado en nuestra base de datos.

