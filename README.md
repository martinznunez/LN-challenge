# Proyecto Acumulado Grilla

Se optó por utilizar Next.js v15 para la construcción de la aplicación, lo que permitió mejorar el rendimiento de los datos mediante el uso de componentes de **Server-Side Rendering (SSR)**, optimizando la carga de la información externa y asegurando una experiencia de usuario fluida.

## Características Principales

### 1. **Vista de Artículos y Recetas**
La aplicación presenta una grilla con los artículos más relevantes, basados en las recetas más mencionadas o populares. Esta vista inicial permite a los usuarios acceder a los artículos de manera organizada.

### 2. **Grilla de Resultados**
Además de la vista de artículos, se incluyó una funcionalidad que permite al usuario ingresar un **"slug"** (identificador único) para filtrar y ver todas las recetas asociadas a ese slug. Esta funcionalidad permite al usuario obtener información precisa y personalizada.

### 3. **Vista Individual**
Se implementó una vista individual para cada receta, permitiendo al usuario ver los detalles de forma más clara y detallada. Para facilitar esta visualización, se eligió utilizar un contexto que gestiona la información de la receta seleccionada, lo que permite acceder a los detalles y explorar otros puntos de vista relacionados con la receta.

Esta solución fue seleccionada teniendo en cuenta que no es posible acceder directamente a los datos de la receta solo con la URL. Una posible alternativa habría sido realizar un nuevo fetch para obtener los detalles de la receta a través de un identificador específico, pero se optó por el contexto para manejar los datos de manera más centralizada.


### 4. **Optimización con SSR en la Grilla de Artículos Frecuentes**
En la grilla de los artículos más frecuentes, se optó por **Server-Side Rendering (SSR)** para mejorar la eficiencia de la carga de datos. Se determinó que hacer una nueva petición en el servidor era más eficiente y de menor costo que almacenar los datos localmente, lo que permite que la aplicación siempre entregue información actualizada sin sobrecargar el navegador del usuario.

## Objetivos y Propósito


1. **Agrupación, Ordenamiento y Totalización de Tags**: 
   - Se extrajeron los **tags** de cada artículo desde el atributo `taxonomy.tags`.
   - Se **agrupó y totalizó** la cantidad de veces que cada tag apareció, para luego ordenarlos de mayor a menor.
   - Los 10 primeros tags fueron mostrados debajo del título "Acumulado Grilla", tal como se indica en los requerimientos.
   - El `href` para cada tag contiene el slug correspondiente, de la forma: `/tema/[tag.slug]`.

2. **Listado de Artículos**:
   - Se listaron **30 artículos** en una grilla, pero solo se consideraron aquellos cuyo **subtype** era igual a `"7"`.
   - Se extrajo el **título** de cada artículo desde `headline.basic`.
   - La **fecha** se extrajo desde el atributo `display_date` y se formateó de acuerdo con la maqueta.
   - Las imágenes de cada artículo se tomaron desde el atributo `promo_items.basics.url`.



## Installation

To set up the project on your local machine, follow these steps:

```bash
npm install
npm run dev

```

```bash
npm run test

npm test -- --coverage

```

NEXT_PUBLIC_API_BASE_URL=KEY
