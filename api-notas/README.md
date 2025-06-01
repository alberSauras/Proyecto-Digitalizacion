# Proyecto-Digitalizacion
# API REST de Notas
autor: Alberto Sauras Molina

Descripción:
Una API REST sencilla para gestionar notas. Permite crear, editar, eliminar y listar notas mediante peticiones HTTP.

El servidor se ejecutará en http://localhost:3000.

Tecnologías utilizadas:
-node.js con express.js para el servidor
-PostgreSQL como base de datos.
-Render para el despliegue en la nube.
-GitHub para control de versiones.

Instalación y configuración
1️⃣ Clonar el repositorio
bash
git clone [TU_URL_DEL_REPOSITORIO]
cd api-notas

2️⃣ Instalar dependencias
bash
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env con las siguientes variables:
env
DATABASE_URL=[TU_URL_DE_BASE_DE_DATOS]
PORT=3000

4️⃣ Ejecutar en local
bash
node index.js


Rutas de la API
Método	Ruta	Descripción
GET	/notas	Obtiene todas las notas
POST	/notas	Crea una nueva nota
PUT	/notas/:id	Edita una nota
DELETE	/notas/:id	Elimina una nota