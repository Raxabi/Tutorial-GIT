const tutorial = "https://gist.githubusercontent.com/Raxabi/041c15fa6fd129ef895314a15320b0cb/raw/88f6248e0d75c5eebdeee987a6c4f90c60fab98f/tutorial.md"

const fetchedTutorial = await fetch(tutorial)
    .then(res => res.text())
    .then(content => content)

const contentData = [
    {
        id: 0,
        titulo: "Trabajo de Entornos de Desarrollo - Sistemas de Control de versiones",
        contenido: `
            Como breve introduccion, un sistema de control de versiones es el software encargado de ayudarnos a tener controlado nuestro codigo.
            De forma que podemos por ejemplo: volver a una version anterior de nuestro codigo, verificar quien hizo determinados cambios,
            o tambien llegar a encontrar ciertos bugs que pueden llegar a ocurrir de una version a otra.
        `
    },
    {
        id: 1,
        titulo: "¿Que es un sistema de control de versiones?",
        contenido: `
            Es el estado en que se encuentra un producto en un dado momento del desarrollo,
            o modificación.
            Al control de versiones se le conoce como el gestor de cambios que se realizan en un dado momento sobre algún elemento o alguna configuración del mismo.
            Estos sistemas, facilitan la administración de las distintas versiones del producto que hemos desarrollado.            
        `
    },
    {   
        id: 2,
        titulo: "Git ⚔ VS ⚔ SVN",
        contenido: `
            Git: es un sistema específico
            diseñado para controlar versiones en un entorno Linux; fue desarrollado por Linus Torvalds con el objetivo
            primordial de gestionar código fuente. Git puede referirse tanto a una forma de controlar versiones como al
            programa utilizado para llevar a cabo dicha tarea.

            Subversión: es un sistema de control de versiones de código abierto y centralizado. Fue creado en el año 2000 como una alternativa mejorada al sistema de control de versiones CVS.
            Subversion permite a los equipos de desarrollo colaborar en proyectos de software manteniendo un registro de todos los cambios realizados en el código fuente, lo que facilita el seguimiento de las versiones anteriores del código y la resolución de conflictos en el código.

        `
    },
    {
        id: 3,
        titulo: "¿Cuando decantarse por uno o por otro?",
        contenido: `
            Si se trabaja en un proyecto con una gran cantidad de colaboradores dispersos geográficamente,
            Git puede ser más adecuado debido a su arquitectura distribuida que permite trabajar de forma independiente sin conexión a internet.
            Por otro lado, SVN puede ser más adecuado para proyectos con un equipo de desarrollo centralizado.
            Si se trabaja en un proyecto grande, Git puede ser más adecuado debido a su eficiencia y rapidez en la gestión de grandes repositorios.
            Si el equipo de desarrollo no está familiarizado con Git y prefiere un sistema de control de versiones más simple, SVN puede ser una mejor opción.
            `
    },
    {
        id: 4,
        titulo: "Proyecto de ejemplo sobre como funciona Git (usando GitHub)",
        contenido: fetchedTutorial
    }
]

export default contentData