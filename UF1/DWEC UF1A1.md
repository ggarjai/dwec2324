---
marp: false
paginate: true
---
# DESARROLLO DE APLICACIONES WEB ENTORNO CLIENTE
## Proyecto 1 - Explorando los fundamentos web: Investigación de los modelos de programación en entornos cliente/servidor:

### 1. Modelos de programación en entornos cliente/servidor

1. **Modelo de ejecución Secuencial:**
    - Las instrucciones se ejecutan una detrás de otra en un orden predefinido *(secuencia)*, con un principio y un fin.
    - Ideal para tareas básicas y lineales, sin necesidad de paralelismo.

2. **Modelo de ejecución Concurrente:**
    - La concurrencia es la capacidad de descomponer un programa en partes ejecutables independientes entre ellas. La programación concurrente es una técnica en que dos o más threads se ejecutan de forma intercalada y gestionan el acceso a recursos compartidos. Existen dos modelos de programación concurrente.
        - **Memoria compartida:** Los módulos concurrentes interactúan leyendo y escribiendo objetos compartidos en la memoria:
            - Dos procesadores o nucleos de un CPU en la misma máquina compartiendo la misma memoria física.
            - Dos programas que se ejecutan en la misma máquina leyendo y escribiendo archivos en un mismo sistema de ficheros.
            - Dos hilos *(threads)* de un programa en Java que comparten objetos.
        - **Paso de mensajes:** Los módulos concurrentes interactúan **enviándose mensajes entre sí** a través de un canal de comunicación. Los módulos mandan mensajes y los entrantes a cada módulo se ponen en cola para su posterior procesamiento. Los modelos
            - Dos equipos comunicandose mediante una conexión de red.
            - Un navegador y un servidor web que se comunican para mostrar una página web solicitada.
            - Un cliente y servidor de mensajería instantánea.
            - Dos programas ejecutandose en la misma máquina cuya entrada y salida hayan sido conectadas mediante una tubería. 
                > Por ejemplo, en Linux el comando **ls | grep** escrito en el terminal, que **ls** muestra los directorios y **grep** filtra la lista mostrando solo las líneas que contienen el patrón de búsqueda especificado. El símbolo **|** (pipe o tubería) se utiliza para redirigir la salida del comando anterior como la entrada al siguiente comando.
    <!-- https://www.unir.net/ingenieria/revista/programacion-concurrente/ -->

3. **Modelo de Ejecución basado en Eventos:**
    - Los eventos son aquellos sucesos o cambios significativos en el estado del hardware o el software de un sistema. El modelo de ejecución basado en eventos se basa en el launcher para coordinar la activación de subprocesos en función de los eventos desencadenantes. Interfaces de escucha se utilizan para detectar estos eventos. Un evento puede originarse por estímulos internos o externos, por ejemplo, presionar una tecla o hacer un clic. Una vez que se detecta un evento, este se transmite y se procesa de manera asíncrona
    - Apache Kafka es una conocida plataforma de transmisión de datos distribuida, que sirve para el procesamiento de eventos. Puede gestionar la publicación, el almacenamiento y el procesamiento de flujos de eventos de inmediato, así como la suscripción a ellos. La plataforma admite varios casos prácticos donde la alta productividad y la capacidad de ajuste son fundamentales. Es la alternativa a un sistema de mensajería tradicional para empresas.
    <!-- https://www.redhat.com/es/topics/integration/what-is-event-driven-architecture -->
    <!-- https://www.ibm.com/docs/es/ste/8.4.1?topic=methods-event-driven-execution-model -->

4. **Modelo de Ejecución basado en Máquinas Virtuales:**
    - Es un concepto en el desarrollo de software donde el programa es ejecutado dentro de un entorno virtualizado. Funcionan como entornos de software independientes y aislados dentro de un sistema físico o servidor. Cada máquina virtual simula una computadora completa, incluido hardware virtualizado como CPU, memoria RAM, almacenamiento y dispositivos de red. Esto permite la consolidación de múltiples sistemas en un solo servidor físico.
    - Uno de los ámbitos donde más se usa este modelo de ejecución es en los entornos de pruebas de seguridad, donde los expertos en seguridad pueden utilizar máquinas virtuales para crear redes aisladas y seguras en las que pueden probar y analizar amenazas de seguridad sin riesgo para la red de producción.

5. **Modelo de Ejecución basado en Contenedores:**
    - Un modelo de ejecución basado en contenedores es una estrategia de implementación de software que utiliza tecnología de contenedores para crear, distribuir y ejecutar aplicaciones de manera consistente y eficiente en distintos entornos. Cada contenedor puede ejecutar una aplicación web o un servicio al completo. En este ejemplo, el host de Docker es un **host de contenedor**, y App 1, App 2, Svc 1 y Svc 2 son aplicaciones o **servicios en contenedor**.
    
    ![contenedores docker](https://learn.microsoft.com/es-es/dotnet/architecture/microservices/container-docker-introduction/media/index/multiple-containers-single-host.png)

6. **Modelo de Ejecución basado en Funciones (Serverless):**
    - Se trata de un modelo de desarrollo directamente en la nube que posibilita el diseño y la ejecución de aplicaciones sin que sea necesario gestionar servidores. Una vez que se instalan las aplicaciones sin servidor, responden a la demanda y se amplían o reducen automáticamente en función de las necesidades.
    - La arquitectura sin servidor es ideal para las aplicaciones asíncronas y sin estado que pueden iniciarse de forma instantánea. También es una buena opción para los casos en los que la demanda aumenta de manera inusual e impredecible. Otras situaciones comunes son las aplicaciones web y las API de backend, la automatización de los procesos empresariales, los sitios web sin servidor y la integración en varios sistemas.
    <!-- https://www.redhat.com/es/topics/cloud-native-apps/what-is-serverless#casos-pr%C3%A1cticos -->

7. **Modelo de Ejecución Distribuida:**
    - Un Modelo de Ejecución Distribuida en programación se refiere a un enfoque en el que **un programa o sistema se ejecuta en múltiples nodos o dispositivos de manera concurrente y coordinada** para realizar tareas específicas. En este contexto, un "nodo" puede ser una computadora individual, un servidor, un dispositivo IoT o cualquier otro componente de hardware capaz de ejecutar código. La programación distribuida permite la cooperación y coordinación de estos nodos para lograr un objetivo común.
        - **Comunicación:** Los nodos en una ejecución distribuida necesitan comunicarse entre sí para compartir información y coordinar sus acciones.
        - **Coordinación:** Los nodos deben coordinar sus actividades para evitar conflictos y asegurarse de que trabajen juntos de manera eficiente.
        - **Paralelismo:** Uno de los principales objetivos de la ejecución distribuida es aprovechar el paralelismo, lo que significa que múltiples nodos pueden realizar tareas simultáneamente, lo que acelera la ejecución de ciertas operaciones.
    - Algunos ejemplos de uso del modelo de ejecución distribuida son:
        - **Sistemas de Bases de Datos Distribuidas:** En lugar de almacenar datos en una sola base de datos centralizada, los sistemas de bases de datos distribuidas almacenan datos en múltiples nodos o servidores.
        - **Aplicaciones Web Escalables:** Los sitios web y aplicaciones web escalables utilizan servidores web distribuidos y equilibrio de carga para manejar un gran número de solicitudes de usuarios concurrentes.
        - **Juegos en línea multijugador:** Los juegos en línea multijugador suelen utilizar modelos de ejecución distribuida para gestionar la interacción en tiempo real entre jugadores distribuidos en todo el mundo.
        - **Redes de Computadoras Peer-to-Peer (P2P):** Las redes P2P permiten que múltiples nodos compartan recursos y servicios directamente entre sí, sin depender de servidores centralizados.

8. **Modelo de Ejecución Quantum:**
    - Un modelo de ejecución cuántica se refiere a la forma en que se lleva a cabo la computación cuántica, que es un paradigma de computación basado en los principios de la mecánica cuántica. A diferencia de la computación clásica, que utiliza bits como unidades de información que pueden estar en estados de 0 o 1, la computación cuántica utiliza qubits, que pueden estar en superposición de estados 0 y 1 al mismo tiempo y pueden estar entrelazados en una propiedad llamada entrelazamiento cuántico.
    - Algunos ejemplos de aplicaciones del modelo son por ejemplo la factorización de números, simulación cuántica, optimización cuántica, machine learning, criptoanálisis, entre otros.

9. **Patrón de Diseño MVC (Model-View-Controller):**
    - El patrón de diseño Modelo Vista Controlador es un patrón arquitectónico ampliamente utilizado en el desarrollo de aplicaciones software, especialmente para el desarrollo web y de escritorio.
        - **Modelo:** El modelo representa los datos y la lógica empresarial de la aplicación.
        - **Vista:** La Vista es la capa de presentación de la aplicación. Muestra los datos al usuario y se encarga de la interfaz de usuario.
        - **Controlador:** El Controlador actúa como intermediario entre el Modelo y la Vista. Recibe las solicitudes del usuario a través de la interfaz de usuario y las envía al Modelo para realizar operaciones de lógica empresarial. Luego, toma los resultados del Modelo y los presenta a través de la Vista.
    - Una aplicación simple del modelo MVC sería en un lista de tareas, donde tenemos el modelo que almacena y gestiona las tareas pendientes, la vista que se encarga de mostrar los datos al usuario, y el controlador que es un intermediario entre el modelo y la vista. Tiene métodos para agregar tareas o mostrar tareas como completadas, por ejemplo.

10. **Patrón de Diseño MVVM (Model-View-ViewModel):**
    - Hay tres componentes principales en el patrón MVVM: el modelo, la vista y el modelo de vista. Cada uno de ellos sirve para un propósito diferente. Además de comprender las responsabilidades de cada componente, también es importante comprender cómo interactúan. En general, la vista "conoce" el modelo de vista y el modelo de vista "conoce" el modelo, pero el modelo desconoce el modelo de vista y el modelo de vista desconoce la vista. Por lo tanto, el modelo de vista aísla la vista del modelo y permite que el modelo evolucione independientemente de la vista. **Es un patrón de diseño que tiene por finalidad separar la parte de la interfaz del usuario(de ahí la V de View) de la parte de la lógica del negocio(de ahí la M de Model)**, logrando así que la parte visual sea totalmente independiente. El otro componente es el ViewModel que es la parte que va a interactuar como puente entre la Vista y el Modelo.
        | Conoce   ->   | Model           | View          | ViewModel     |
        |:------------- |:---------------:| -------------:| -------------:|
        | Model         |                 |               |       ✗       |
        | View          |                 |               |       ✓       |
        | ViewModel     |       ✓        |       ✗       |               |
    <!-- https://learn.microsoft.com/es-es/dotnet/architecture/maui/mvvm#the-mvvm-pattern -->

### 2. Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones de Ejecución. Compatibilidad con Navegadores Web.
1. Estudio de cómo se ejecuta el código JavaScript en un navegador
    - Javascript es un lenguaje interpretado. Esto quiere decir que no se compila el código antes de ser enviado al navegador. El intérprete puede coger el código crudo de Javascript y ejecutarlo.
    <!-- https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f -->
2. Evaluación de las diferencias de compatibilidad entre navegadores.
    - Existen muchas herramientas destinadas a la evaluación de las diferencias de compatibilidad y sirven para conocer cómo sería el funcionamiento de una web desde distintos navegadores y distintas versiones. Esto es debido a que las distintas versiones de los sistemas operativos interpretan los datos de maneras diferentes. En consecuencia, algunos navegadores pueden mostrar el contenido de una aplicación o sitio web de forma inadecuada. La visualización incorrecta o errónea del contenido de un sitio web provoca la decepción del usuario. Algunas de estas herramientas son: LambdaTest, Conchas o BrowserStack. Dentro de esas herramientas podemos realizar pruebas de responsive design, pruebas de velocidad o compatibilidad con características específicas o de accesibilidad. También nos permiten llevar un registro de los problemas encontrados junto con las soluciones para facilitar pruebas futuras.
    <!-- https://geekflare.com/es/cross-browsers-testing-tools/ -->
3. Resolución de problemas de compatibilidad en una aplicación web.
    - La mejor manera de resolver problemas de compatibilidad de una aplicación web entre navegadores es hacer tests y debugs minuciosamente y con regularidad. Se deben usar herramientas y recursos que te ayuden a comprobar tu web en distintos navegadores y dispositivos. Normalmente se utiliza un proceso general para abordar problemas.
        - Identificar los problemas
        - Determinar los navegadores y dispositivos afectados.
        - Inspeccionar y depurar código.
        - Realizar pruebas exhaustivas para asegurarse de que los problemas se han resuelto.
        - Realizar tests reales con usuarios puede ayudar a solucionar problemas que hayan pasado desapercibidos.
        - Mantenimiento periódico.
        - Documentación correcta y actualizada para ayudar a futuros desarrolladores para el mantenimiento a largo plazo.

### 3. Lenguajes de programación en Entorno Cliente.
1. Investigación de lenguajes como JavaScript, TypeScript y otros: JavaScript y TypeScript parecen muy similares, pero hay una diferencia importante. La diferencia clave entre JavaScript y TypeScript es que JavaScript carece de un sistema de tipos. En JavaScript, las variables pueden cambiar de forma al azar, mientras que TypeScript en modo estricto lo prohíbe. Esto hace que TypeScript sea más fácil de administrar y mantener, especialmente con una base de código grande.
    ~~~
    let foo = 1
    let bar = "text"
    bar = 123  // permitido en JavaScript
    ~~~
    ~~~
    let foo: number = 1
    let bar: string = "text"
    bar = 123 // no permitido en TypeScript 
    ~~~
    Sin embargo, el uso de tipo *number* o *string* permite a TypeScript imponer la regla de que si una variable se declara como un tipo determinado, no se puede cambiar más adelante.
2. Javascript es un lenguaje de tipado dinámico, con una sintáxis más flexible y menos restrictiva en comparación con TypeScript. Se utiliza principalmente en el desarrollo web y cuenta con una comunidad muy grande y activa con gran variedad de librerías y frameworks como React, Angular o Vue. TypeScript es un superconjunto de JavaScript que agrega tipado estático al lenguaje. Tiene una sintáxis similar, pero con anotaciones para definir los tipos de datos de las variables y parámetros de función. Es ámpliamente usado en proyectos de desarrollo web y aplicaciones, especialmente en las más grandes.
<!-- https://www.theserverside.com/tip/JavaScript-vs-TypeScript-Whats-the-difference -->

### 4. Características de los Lenguajes de Script. Ventajas y desventajas.   
- La diferencia clave de un lenguaje de scripting, en comparación a los lenguajes de programación tradicionales, es que es interpretado *(ejecutado línea por línea en lugar de traducirse a lenguaje máquina)*. Por otra parte, los lenguajes compilados son traducidos a código máquina y guardados en un archivo ejecutable.
- Las principales ventajas de usar lenguajes de script son, automatizar tareas, añadir características dinámicas o manipular páginas web, conectar partes de un software o exploración de datos, entre otras. Sin embargo, tiene otras desventajas como el desarrollo de aplicaciones a gran escala, controladores de dispositivos u otros componentes a bajo nivel, consultas a bases de datos debido a que su rendimiento es inferior, puesto que al ser interpretados en tiempo de ejecución, lleva más tiempo, es menos eficiente, depende de un intérprete, tiene menos control a bajo nivel y suelen ser más susceptibles a vulnerabilidades como la inyección de código.

    - **Ventajas:**
        ___
        - **Es un lenguaje interpretado**, lo que es una ventaja en algunos casos, es una desventaja en otros.
        - Interactividad: Debido a que son lenguajes interpretados, se puede desarrollar y probar rápidamente. Esto facilita probar ideas y ver resultados, por lo que se usa en programación exploratoria.
        - Accesibilidad: los lenguajes de scripting están diseñados para ser simples, centrándose en hacer que las tareas comúnes sean sencillas e intuitivas. Esto lo hace una buena opción para principiantes o para tareas simples que no requieren mucha potencia de cómputo.
    - **Desventajas:**
        ___
        - Rendimiento: El código interpretado puede tener peor rendimiento y uso menos eficiente de los recursos del sistema, lo que hace poco adecuados para un cómputo intensivo o software a gran escala.
        - Seguridad: Los lenguajes interpretados son dinámicos, lo que les hace tener como ventaja una gran flexibilidad, creando al mismo tiempo una desventaja en su seguridad, ya que al cambiar los tipos de las variables en tiempo de ejecución, puede llevar a comportamientos inesperados o problemas de seguridad.
        <!-- https://www.unosquare.com/blog/scripting-and-programming-languages-differences-advantages-and-optimal-use-cases/ -->

### 5. Tecnologías y lenguajes asociados. Integración del código con las etiquetas HTML.
1. **HTML:** Lenguaje de Marcas de Hipertexto, del inglés (HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript). "Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web.
<!-- https://developer.mozilla.org/es/docs/Web/HTML -->
2. **CSS:** Hojas de Estilo en Cascada del inglés (Cascading Style Sheets) es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML). CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios. CSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C.
<!-- https://developer.mozilla.org/es/docs/Web/CSS -->

### 6. Herramientas de programación.
- **Visual Studio Code:** Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.
- **Chrome DevTools:** Es un conjunto de herramientas para desarrolladores web integradas directamente en el navegador Google Chrome que sirven para ayudar a editar páginas sobre la marcha y diagnosticar y depurar problemas rápidamente, lo que en última instancia le ayuda a crear mejores sitios web y más rápido.
---


