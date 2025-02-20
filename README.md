# MasQueMascotas
Entrega obligatoria UTN node
MasQueMascotas es una aplicación web diseñada para ayudar a personas que buscan un hogar para perros perdidos o abandonados. El prototipo permite a los usuarios publicar detalles sobre perros encontrados, incluyendo su nombre, edad, tamaño, descripción, y ubicación, para facilitar su adopción.
---

# MasQueMascotas

**MasQueMascotas** es una aplicación web diseñada para ayudar a personas que buscan un hogar para perros perdidos o abandonados. El prototipo permite a los usuarios publicar detalles sobre perros encontrados, incluyendo su nombre, edad, tamaño, descripción y ubicación, para facilitar su adopción. Este proyecto está siendo desarrollado como parte de un trabajo práctico de la **Universidad Tecnológica Nacional (UTN)** en el curso de **Desarrollo de Aplicaciones Web**.

## Funcionalidades

### Frontend

- 📄 **Página de inicio** con un listado de perros disponibles para adopción.
- 📝 **Formulario para publicar perros encontrados** con campos como nombre, edad, tamaño, descripción y ubicación.
- 🎨 **Interfaz amigable y fácil de usar** que permite a los usuarios acceder rápidamente a la información.

### Backend

- 🌐 **API REST** para manejar las solicitudes de creación, edición y visualización de perros encontrados.
- 💾 **Base de datos** para almacenar los datos de los perros publicados.
- 🔐 **Autenticación de usuario** para permitir que los usuarios gestionen sus publicaciones de manera segura.

## Instalación

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/faustinaretamar/MasQueMascotas.git
    cd MasQueMascotas
    ```

2. **Instalar dependencias**:
    - Para el frontend:
      ```bash
      cd frontend
      npm install
      ```
    - Para el backend:
      ```bash
      cd backend
      npm install
      ```

3. **Configurar variables de entorno**:
    - En la carpeta **backend**, crear un archivo `.env` con las variables necesarias, como la conexión a la base de datos.

4. **Correr el proyecto**:
    - Ejecutar el backend:
      ```bash
      cd backend
      npm start
      ```
    - Ejecutar el frontend:
      ```bash
      cd frontend
      npm run dev
      ```
