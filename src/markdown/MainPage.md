# Proyecto de ejemplo usando git (con GitHub)

## Primeramente nos instalaremos git.

Para ello, realizaremos los siguiente paSos:
    
    1. Nos dirigiremos a la pagina de descarga de Git y pusalrEmos en descargar.
![image](../public/images/installation/image.png)

    2. Pulsaremos sobre la descarga que nos corresponda.
       En caso de estar en un sistema operativo basado en UniX / Linux, recomendamos usar el gestor de paquetes correspondiente a esa distribucion
![image2](../public/images/installation/image2.png)

    3. Como en cualquier otra instalacion pulsaremos en siguiente (obviamente cambiandO los parametros de instalacion a nuestro gusto).
       Y nos detendremos hasta el punto en el que encontremos hasta que encontremos una opcion como la siguiente
![image8](../public/images/installation/image8.png)

> Esta opcion nos permira cambiar la rama por defecto al crear nuestros repositorios locales, en nuestro caso recomendamos usar el nombre main, ya que si dejamos la que viene por defeceto, es decir 'master', creara conflictos con el repositorio remoto que usemos en GitHub, ya que este ultimo por defecto crea las ramas con el nombre main

    4.  Seguiremos pulsando en siguiente, hasta que llegemos a este punto:
![image15](../public/images/installation/image15.png)

> Esta opcion nos permite elegir el metodo de inicio de sesion para el repositorio remoto, en nuestro caso, elegiremos no elegir ningun metodo, esto para englobar mas el uso de git para cualquier sistema operativo. Ya que en sistemas Linux no viene preinstalado el Git Crendential Manager

# Comenzaremos con el tutorial de uso basico, en el que veremos como crear un repositorio tanto local como remoto hasta como aceptar pull requests

# 1. Primeramente, crearemos el repositorio local, de la siguiente manera:
    - Iremos a la carpeta donde queremos crear nuestro repositorio
    - Usaremos la terminal para crear nuestro repositorio, escribiendo el siguiente comando:

![image1-repo](../public/images/repo_creation/Captura%20de%20pantalla%202023-03-31%20191358.png)

> De esta forma el repositorio estara creado localmente.

# 2. Ahora crearemos el repositorio remoto, ya que vamos a utilizar GitHub para hostearlo, necesitaremos una cuenta, que se crearia como en cualquier otra plataforma.
- ## Para ello accederemos a nuestra cuenta de GitHub y haremos click sobre 'Your Repositories':

![image2-repo](../public/images/repo_creation/Captura%20de%20pantalla%202023-03-31%20193608.png)

- ## Clicaremos sobre `New`

![image3-repo](../public/images/repo_creation/Captura%20de%20pantalla%202023-03-31%20194404.png)

- ## Y rellenaremos los campos que nos piden de informacion

![image4-repo](../public/images/repo_creation/Captura%20de%20pantalla%202023-03-31%20194938.png)

- ## Una vez hayamos pulsado sobre 'Create repository', tendremos por fin nuestro repositorio remoto creado:
![image5-repo](../public/images/repo_creation/Captura%20de%20pantalla%202023-03-31%20195354.png)

# 3. A continuacion, agregaremos los archivos que queramos subir a nuestro repositorio local.
- De esta forma Git tendra en cuenta los archivos del repositorio,
    para manejarlos mas tarde, ya sea para publicarlos en un repositorio remoto o hacer un cambio en varios ficheros as la vez.
- Para ello utilizaremos el siguiente comando:

![image3-repo](../public/images/repo_creation/Captura%20de%20pantalla%202023-03-31%20195701.png)

> Esto hara que git guarde los ficheros en lo que se suele conocer como un stage

# 4. 
