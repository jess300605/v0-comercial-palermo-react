# Comercial Palermo - Documentación del Proyecto

## 1. Análisis de la Aplicación

### 1.1 Levantamiento de Requerimientos

#### Requerimientos Funcionales

**RF-01: Gestión de Productos**
- El sistema debe permitir agregar nuevos productos con los siguientes campos:
  - Descripción del producto
  - Código único
  - Precio de compra
  - Precio de venta
  - Stock ideal
  - Imagen del producto
- El sistema debe permitir editar productos existentes
- El sistema debe permitir eliminar productos
- El sistema debe mostrar un catálogo visual de todos los productos

**RF-02: Autenticación de Usuarios**
- El sistema debe permitir el inicio de sesión con usuario y contraseña
- El sistema debe diferenciar entre dos tipos de usuarios:
  - Cliente: acceso limitado a visualización de catálogo
  - Administrador: acceso completo a gestión de productos
- El sistema debe mantener la sesión activa mediante tokens

**RF-03: Visualización de Información**
- El sistema debe mostrar información de contacto (ubicación, teléfono, horarios)
- El sistema debe tener una navegación clara entre secciones
- El sistema debe ser responsive y adaptarse a diferentes dispositivos

#### Requerimientos No Funcionales

**RNF-01: Usabilidad**
- La interfaz debe ser intuitiva y fácil de usar
- Los tiempos de respuesta no deben exceder 3 segundos
- El diseño debe seguir la identidad visual de la marca (verde y blanco)

**RNF-02: Seguridad**
- Las contraseñas deben ser encriptadas
- Las sesiones deben expirar después de inactividad
- Solo usuarios autenticados pueden acceder a funciones administrativas

**RNF-03: Rendimiento**
- El sistema debe soportar al menos 100 usuarios concurrentes
- Las imágenes deben estar optimizadas para carga rápida
- El sistema debe funcionar en navegadores modernos (Chrome, Firefox, Safari, Edge)

**RNF-04: Mantenibilidad**
- El código debe estar documentado
- El sistema debe usar tecnologías estándar y actualizadas
- La arquitectura debe ser modular y escalable

### 1.2 Análisis de los Requerimientos

#### Análisis de Viabilidad Técnica

El proyecto es técnicamente viable utilizando:
- **Frontend**: React con Next.js 15 (App Router)
- **Backend**: Laravel (PHP)
- **Base de Datos**: MySQL/PostgreSQL
- **Autenticación**: JWT (JSON Web Tokens)

#### Análisis de Viabilidad Económica

- Costos de desarrollo: Recursos humanos (desarrolladores)
- Costos de infraestructura: Hosting web, dominio, base de datos
- Costos de mantenimiento: Actualizaciones y soporte técnico
- ROI esperado: Mejora en la gestión de inventario y ventas online

#### Análisis de Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Pérdida de datos | Baja | Alto | Backups automáticos diarios |
| Caída del servidor | Media | Alto | Hosting con alta disponibilidad |
| Vulnerabilidades de seguridad | Media | Alto | Auditorías de seguridad periódicas |
| Cambios en requerimientos | Alta | Medio | Metodología ágil con sprints cortos |

## 2. Diseño de la Aplicación/Sistema

### 2.1 Lógica para Interactuar la Información

#### Arquitectura del Sistema

El sistema utiliza una arquitectura cliente-servidor de tres capas:

1. **Capa de Presentación (Frontend)**
   - Interfaz de usuario desarrollada en React/Next.js
   - Comunicación con el backend mediante API REST
   - Manejo de estado local con React Hooks

2. **Capa de Lógica de Negocios (Backend)**
   - API REST desarrollada en Laravel
   - Validación de datos
   - Lógica de autenticación y autorización
   - Procesamiento de operaciones CRUD

3. **Capa de Datos**
   - Base de datos relacional (MySQL/PostgreSQL)
   - Almacenamiento de usuarios, productos, sesiones

#### Niveles de Acceso según Usuario

**Usuario Cliente:**
- Ver catálogo de productos
- Ver información de contacto
- Ver ofertas y promociones

**Usuario Administrador:**
- Todas las funciones del cliente
- Agregar nuevos productos
- Editar productos existentes
- Eliminar productos
- Ver estadísticas de inventario

### 2.2 Diagrama Lógico de Red

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                        INTERNET                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS
                         │
┌────────────────────────▼────────────────────────────────────┐
│                   FIREWALL / WAF                             │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
┌─────────────────┐            ┌─────────────────┐
│  SERVIDOR WEB   │            │  SERVIDOR API   │
│   (Next.js)     │◄──────────►│   (Laravel)     │
│   Puerto 3000   │   API REST │   Puerto 8000   │
└─────────────────┘            └────────┬────────┘
                                        │
                                        │ SQL
                                        │
                               ┌────────▼────────┐
                               │  BASE DE DATOS  │
                               │     (MySQL)     │
                               │   Puerto 3306   │
                               └─────────────────┘
\`\`\`

### 2.3 Diagrama Gráfico de la Información

\`\`\`
┌──────────────────────────────────────────────────────────────┐
│                      FLUJO DE INFORMACIÓN                     │
└──────────────────────────────────────────────────────────────┘

Usuario → Navegador Web → Frontend (React)
                              │
                              ├─→ Solicitud HTTP (GET/POST/PUT/DELETE)
                              │
                              ▼
                         Backend (Laravel)
                              │
                              ├─→ Validación de datos
                              ├─→ Autenticación JWT
                              ├─→ Lógica de negocios
                              │
                              ▼
                         Base de Datos
                              │
                              ├─→ Consultas SQL
                              ├─→ Transacciones
                              │
                              ▼
                         Respuesta JSON
                              │
                              ▼
                         Frontend (React)
                              │
                              ├─→ Actualización de UI
                              ├─→ Manejo de errores
                              │
                              ▼
                         Usuario ve resultado
\`\`\`

### 2.4 Distribución Física para el Manejo de la Información

#### Servidor de Aplicaciones
- **Ubicación**: Servidor cloud (AWS, DigitalOcean, Vercel)
- **Especificaciones**: 2 vCPU, 4GB RAM, 50GB SSD
- **Sistema Operativo**: Ubuntu 22.04 LTS
- **Software**: Node.js 20, PHP 8.2, Nginx

#### Servidor de Base de Datos
- **Ubicación**: Servidor cloud dedicado
- **Especificaciones**: 2 vCPU, 8GB RAM, 100GB SSD
- **Sistema Operativo**: Ubuntu 22.04 LTS
- **Software**: MySQL 8.0

#### Almacenamiento de Archivos
- **Ubicación**: Servicio de almacenamiento cloud (AWS S3, Cloudinary)
- **Propósito**: Imágenes de productos
- **Capacidad**: 100GB inicial, escalable

## 3. Diseño de la Capa de Datos

### 3.1 Bases de Datos

**Nombre de la Base de Datos**: `comercial_palermo_db`

**Motor de Base de Datos**: MySQL 8.0

**Justificación**: MySQL es un sistema de gestión de bases de datos relacional robusto, ampliamente utilizado, con excelente rendimiento y soporte para transacciones ACID.

### 3.2 Objetos de Bases de Datos

#### Tablas Principales

1. **users** - Almacena información de usuarios del sistema
2. **products** - Almacena información de productos
3. **categories** - Almacena categorías de productos
4. **sessions** - Almacena sesiones activas de usuarios

#### Vistas

1. **v_products_with_stock** - Vista de productos con información de stock
2. **v_low_stock_products** - Vista de productos con stock bajo

#### Procedimientos Almacenados

1. **sp_add_product** - Procedimiento para agregar productos con validaciones
2. **sp_update_stock** - Procedimiento para actualizar stock
3. **sp_delete_product** - Procedimiento para eliminación lógica de productos

#### Funciones

1. **fn_calculate_profit** - Calcula la ganancia de un producto
2. **fn_check_stock_level** - Verifica el nivel de stock

### 3.3 Diagramas ER

\`\`\`
┌─────────────────────────┐
│        USERS            │
├─────────────────────────┤
│ PK id                   │
│    username             │
│    email                │
│    password             │
│    role (enum)          │
│    created_at           │
│    updated_at           │
└────────────┬────────────┘
             │
             │ 1:N
             │
             ▼
┌─────────────────────────┐
│      SESSIONS           │
├─────────────────────────┤
│ PK id                   │
│ FK user_id              │
│    token                │
│    expires_at           │
│    created_at           │
└─────────────────────────┘


┌─────────────────────────┐
│      CATEGORIES         │
├─────────────────────────┤
│ PK id                   │
│    name                 │
│    description          │
│    created_at           │
│    updated_at           │
└────────────┬────────────┘
             │
             │ 1:N
             │
             ▼
┌─────────────────────────┐
│       PRODUCTS          │
├─────────────────────────┤
│ PK id                   │
│ FK category_id          │
│    code                 │
│    description          │
│    purchase_price       │
│    sale_price           │
│    ideal_stock          │
│    current_stock        │
│    image_url            │
│    is_active            │
│    created_at           │
│    updated_at           │
└─────────────────────────┘
\`\`\`

### 3.4 Diccionario de Datos

#### Tabla: USERS

| Campo | Tipo | Longitud | Nulo | Clave | Descripción |
|-------|------|----------|------|-------|-------------|
| id | INT | - | NO | PK | Identificador único del usuario |
| username | VARCHAR | 50 | NO | UNIQUE | Nombre de usuario para login |
| email | VARCHAR | 100 | NO | UNIQUE | Correo electrónico del usuario |
| password | VARCHAR | 255 | NO | - | Contraseña encriptada (bcrypt) |
| role | ENUM | - | NO | - | Rol del usuario ('cliente', 'administrador') |
| created_at | TIMESTAMP | - | NO | - | Fecha de creación del registro |
| updated_at | TIMESTAMP | - | NO | - | Fecha de última actualización |

#### Tabla: PRODUCTS

| Campo | Tipo | Longitud | Nulo | Clave | Descripción |
|-------|------|----------|------|-------|-------------|
| id | INT | - | NO | PK | Identificador único del producto |
| category_id | INT | - | YES | FK | Referencia a la categoría |
| code | VARCHAR | 50 | NO | UNIQUE | Código único del producto |
| description | TEXT | - | NO | - | Descripción detallada del producto |
| purchase_price | DECIMAL | 10,2 | NO | - | Precio de compra del producto |
| sale_price | DECIMAL | 10,2 | NO | - | Precio de venta al público |
| ideal_stock | INT | - | NO | - | Cantidad ideal de stock |
| current_stock | INT | - | NO | - | Cantidad actual en inventario |
| image_url | VARCHAR | 255 | YES | - | URL de la imagen del producto |
| is_active | BOOLEAN | - | NO | - | Indica si el producto está activo |
| created_at | TIMESTAMP | - | NO | - | Fecha de creación del registro |
| updated_at | TIMESTAMP | - | NO | - | Fecha de última actualización |

#### Tabla: CATEGORIES

| Campo | Tipo | Longitud | Nulo | Clave | Descripción |
|-------|------|----------|------|-------|-------------|
| id | INT | - | NO | PK | Identificador único de la categoría |
| name | VARCHAR | 100 | NO | UNIQUE | Nombre de la categoría |
| description | TEXT | - | YES | - | Descripción de la categoría |
| created_at | TIMESTAMP | - | NO | - | Fecha de creación del registro |
| updated_at | TIMESTAMP | - | NO | - | Fecha de última actualización |

#### Tabla: SESSIONS

| Campo | Tipo | Longitud | Nulo | Clave | Descripción |
|-------|------|----------|------|-------|-------------|
| id | INT | - | NO | PK | Identificador único de la sesión |
| user_id | INT | - | NO | FK | Referencia al usuario |
| token | VARCHAR | 500 | NO | UNIQUE | Token JWT de autenticación |
| expires_at | TIMESTAMP | - | NO | - | Fecha de expiración del token |
| created_at | TIMESTAMP | - | NO | - | Fecha de creación de la sesión |

## 4. Diseño de la Capa de Lógica de Negocios

### 4.1 Diagramas de Clases

\`\`\`
┌─────────────────────────────────────┐
│           User                      │
├─────────────────────────────────────┤
│ - id: number                        │
│ - username: string                  │
│ - email: string                     │
│ - password: string                  │
│ - role: UserRole                    │
├─────────────────────────────────────┤
│ + login(credentials): Promise<Token>│
│ + logout(): void                    │
│ + validatePassword(pwd): boolean    │
│ + hasPermission(action): boolean    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│           Product                   │
├─────────────────────────────────────┤
│ - id: number                        │
│ - code: string                      │
│ - description: string               │
│ - purchasePrice: number             │
│ - salePrice: number                 │
│ - idealStock: number                │
│ - currentStock: number              │
│ - imageUrl: string                  │
│ - isActive: boolean                 │
├─────────────────────────────────────┤
│ + create(): Promise<Product>        │
│ + update(): Promise<Product>        │
│ + delete(): Promise<boolean>        │
│ + calculateProfit(): number         │
│ + needsRestock(): boolean           │
│ + updateStock(qty): void            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         AuthService                 │
├─────────────────────────────────────┤
│ - tokenSecret: string               │
├─────────────────────────────────────┤
│ + authenticate(user, pwd): Token    │
│ + validateToken(token): boolean     │
│ + refreshToken(token): Token        │
│ + revokeToken(token): void          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│       ProductService                │
├─────────────────────────────────────┤
│ + getAll(): Promise<Product[]>      │
│ + getById(id): Promise<Product>     │
│ + create(data): Promise<Product>    │
│ + update(id, data): Promise<Product>│
│ + delete(id): Promise<boolean>      │
│ + search(query): Promise<Product[]> │
└─────────────────────────────────────┘
\`\`\`

### 4.2 Procedimientos

#### Procedimiento: Agregar Producto

\`\`\`sql
DELIMITER //
CREATE PROCEDURE sp_add_product(
    IN p_code VARCHAR(50),
    IN p_description TEXT,
    IN p_purchase_price DECIMAL(10,2),
    IN p_sale_price DECIMAL(10,2),
    IN p_ideal_stock INT,
    IN p_current_stock INT,
    IN p_image_url VARCHAR(255),
    IN p_category_id INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al agregar producto';
    END;
    
    START TRANSACTION;
    
    -- Validar que el código no exista
    IF EXISTS (SELECT 1 FROM products WHERE code = p_code) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El código de producto ya existe';
    END IF;
    
    -- Validar precios
    IF p_sale_price <= p_purchase_price THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El precio de venta debe ser mayor al precio de compra';
    END IF;
    
    -- Insertar producto
    INSERT INTO products (
        code, description, purchase_price, sale_price, 
        ideal_stock, current_stock, image_url, category_id, is_active
    ) VALUES (
        p_code, p_description, p_purchase_price, p_sale_price,
        p_ideal_stock, p_current_stock, p_image_url, p_category_id, TRUE
    );
    
    COMMIT;
END //
DELIMITER ;
\`\`\`

#### Procedimiento: Actualizar Stock

\`\`\`sql
DELIMITER //
CREATE PROCEDURE sp_update_stock(
    IN p_product_id INT,
    IN p_quantity INT,
    IN p_operation VARCHAR(10) -- 'add' o 'subtract'
)
BEGIN
    DECLARE current_qty INT;
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al actualizar stock';
    END;
    
    START TRANSACTION;
    
    -- Obtener stock actual
    SELECT current_stock INTO current_qty 
    FROM products 
    WHERE id = p_product_id FOR UPDATE;
    
    -- Actualizar según operación
    IF p_operation = 'add' THEN
        UPDATE products 
        SET current_stock = current_stock + p_quantity,
            updated_at = NOW()
        WHERE id = p_product_id;
    ELSEIF p_operation = 'subtract' THEN
        IF current_qty < p_quantity THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Stock insuficiente';
        END IF;
        
        UPDATE products 
        SET current_stock = current_stock - p_quantity,
            updated_at = NOW()
        WHERE id = p_product_id;
    END IF;
    
    COMMIT;
END //
DELIMITER ;
\`\`\`

### 4.3 Funciones

#### Función: Calcular Ganancia

\`\`\`sql
DELIMITER //
CREATE FUNCTION fn_calculate_profit(p_product_id INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE profit DECIMAL(10,2);
    
    SELECT (sale_price - purchase_price) INTO profit
    FROM products
    WHERE id = p_product_id;
    
    RETURN IFNULL(profit, 0);
END //
DELIMITER ;
\`\`\`

#### Función: Verificar Nivel de Stock

\`\`\`sql
DELIMITER //
CREATE FUNCTION fn_check_stock_level(p_product_id INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE stock_level VARCHAR(20);
    DECLARE current_qty INT;
    DECLARE ideal_qty INT;
    
    SELECT current_stock, ideal_stock INTO current_qty, ideal_qty
    FROM products
    WHERE id = p_product_id;
    
    IF current_qty = 0 THEN
        SET stock_level = 'SIN_STOCK';
    ELSEIF current_qty < (ideal_qty * 0.3) THEN
        SET stock_level = 'CRITICO';
    ELSEIF current_qty < (ideal_qty * 0.5) THEN
        SET stock_level = 'BAJO';
    ELSEIF current_qty >= ideal_qty THEN
        SET stock_level = 'OPTIMO';
    ELSE
        SET stock_level = 'NORMAL';
    END IF;
    
    RETURN stock_level;
END //
DELIMITER ;
\`\`\`

### 4.4 Validaciones

#### Validaciones del Frontend (React)

\`\`\`typescript
// Validación de formulario de producto
export const validateProductForm = (data: ProductFormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  // Validar código
  if (!data.code || data.code.trim() === '') {
    errors.code = 'El código es obligatorio';
  } else if (data.code.length > 50) {
    errors.code = 'El código no puede exceder 50 caracteres';
  }
  
  // Validar descripción
  if (!data.description || data.description.trim() === '') {
    errors.description = 'La descripción es obligatoria';
  }
  
  // Validar precios
  if (!data.purchasePrice || data.purchasePrice <= 0) {
    errors.purchasePrice = 'El precio de compra debe ser mayor a 0';
  }
  
  if (!data.salePrice || data.salePrice <= 0) {
    errors.salePrice = 'El precio de venta debe ser mayor a 0';
  }
  
  if (data.salePrice && data.purchasePrice && data.salePrice <= data.purchasePrice) {
    errors.salePrice = 'El precio de venta debe ser mayor al precio de compra';
  }
  
  // Validar stock
  if (!data.idealStock || data.idealStock < 0) {
    errors.idealStock = 'El stock ideal debe ser mayor o igual a 0';
  }
  
  return errors;
};

// Validación de login
export const validateLoginForm = (data: LoginFormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  if (!data.username || data.username.trim() === '') {
    errors.username = 'El usuario es obligatorio';
  }
  
  if (!data.password || data.password.trim() === '') {
    errors.password = 'La contraseña es obligatoria';
  } else if (data.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }
  
  return errors;
};
\`\`\`

#### Validaciones del Backend (Laravel)

\`\`\`php
// Validación de creación de producto
public function validateProductCreation(Request $request)
{
    return $request->validate([
        'code' => 'required|string|max:50|unique:products,code',
        'description' => 'required|string',
        'purchase_price' => 'required|numeric|min:0',
        'sale_price' => 'required|numeric|min:0|gt:purchase_price',
        'ideal_stock' => 'required|integer|min:0',
        'current_stock' => 'required|integer|min:0',
        'image_url' => 'nullable|url',
        'category_id' => 'nullable|exists:categories,id'
    ], [
        'code.required' => 'El código es obligatorio',
        'code.unique' => 'El código ya existe',
        'sale_price.gt' => 'El precio de venta debe ser mayor al precio de compra',
    ]);
}

// Validación de login
public function validateLogin(Request $request)
{
    return $request->validate([
        'username' => 'required|string',
        'password' => 'required|string|min:6'
    ]);
}
\`\`\`

## 5. Diseño de la Interfaz de Usuario

### 5.1 Diseño de Pantallas - Mockups con Detalle

#### Pantalla 1: Página de Inicio / Contacto

**Descripción**: Página principal que muestra información de contacto de Comercial Palermo.

**Elementos**:
- Header con logo y navegación
- Sección de información de contacto con iconos
- Footer con información de creadores

**Colores**:
- Verde principal: #1e5631
- Verde oscuro: #0f2818
- Blanco: #ffffff
- Gris claro: #f5f5f5

**Tipografía**:
- Títulos: Fredoka (bold, white)
- Texto: Geist Sans (regular)

#### Pantalla 2: Catálogo de Productos

**Descripción**: Muestra todos los productos disponibles en formato de galería.

**Elementos**:
- Header con navegación
- Botones de acción (Agregar Producto, Eliminar Producto)
- Grid de productos con imágenes
- Botón de edición en cada producto (hover)
- Footer

**Interacciones**:
- Hover sobre producto: muestra botón de editar
- Click en "Agregar Producto": redirige a formulario
- Click en "Editar": redirige a formulario de edición

#### Pantalla 3: Formulario de Producto Nuevo

**Descripción**: Formulario para agregar un nuevo producto al inventario.

**Elementos**:
- Header con navegación
- Título "PRODUCTO NUEVO"
- Campo de carga de imagen
- Campos de texto: Descripción, Código
- Campos numéricos: Precio, Precio de Venta, Stock Ideal
- Botones: Ingresar, Salir
- Footer

**Validaciones en tiempo real**:
- Campos obligatorios marcados
- Validación de formato de precios
- Validación de código único

#### Pantalla 4: Login

**Descripción**: Pantalla de autenticación para acceso al sistema.

**Elementos**:
- Header con navegación
- Card central con formulario de login
- Icono de usuario
- Campos: Usuario, Contraseña
- Botón de inicio de sesión
- Footer

**Seguridad**:
- Contraseña oculta con opción de mostrar
- Límite de intentos de login
- Mensaje de error claro

## 6. Elementos Estáticos

### Componentes Estáticos

1. **Header**
   - Logo de Comercial Palermo (imagen estática)
   - Barra de navegación con enlaces fijos
   - Iconos de usuario (SVG estáticos)

2. **Footer**
   - Texto "creadores" (contenido fijo)
   - Fondo verde (#1e5631)

3. **Iconos de Contacto**
   - Icono de ubicación (SVG)
   - Icono de teléfono (SVG)
   - Icono de calendario/horario (SVG)

4. **Estilos CSS**
   - Paleta de colores definida
   - Fuentes tipográficas
   - Espaciados y márgenes consistentes

## 7. Elementos Dinámicos

### Componentes Dinámicos

1. **Catálogo de Productos**
   - Lista de productos cargada desde la base de datos
   - Imágenes de productos dinámicas
   - Botones de edición que aparecen/desaparecen

2. **Formularios**
   - Validación en tiempo real
   - Mensajes de error dinámicos
   - Estados de carga (loading)
   - Confirmaciones de éxito/error

3. **Autenticación**
   - Estado de sesión del usuario
   - Redirecciones basadas en rol
   - Token de autenticación

4. **Navegación**
   - Resaltado de página activa
   - Menú responsive (mobile)
   - Rutas protegidas según autenticación

## 8. Temas y Estilos

### Sistema de Diseño

#### Paleta de Colores

\`\`\`css
:root {
  /* Colores principales */
  --color-primary: #1e5631;
  --color-primary-dark: #0f2818;
  --color-primary-light: #2d7a4a;
  
  /* Colores de acento */
  --color-accent: #dc2626;
  --color-accent-light: #ef4444;
  
  /* Colores neutros */
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-800: #1f2937;
  --color-black: #000000;
  
  /* Colores de estado */
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
}
\`\`\`

#### Tipografía

\`\`\`css
:root {
  /* Familias de fuentes */
  --font-sans: 'Geist Sans', system-ui, sans-serif;
  --font-display: 'Fredoka', cursive;
  
  /* Tamaños de fuente */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  
  /* Pesos de fuente */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
\`\`\`

#### Espaciado

\`\`\`css
:root {
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
}
\`\`\`

#### Bordes y Sombras

\`\`\`css
:root {
  /* Radios de borde */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
\`\`\`

### Guía de Estilo de Componentes

#### Botones

\`\`\`css
/* Botón primario */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all 0.2s;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Botón secundario */
.btn-secondary {
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
}
\`\`\`

#### Tarjetas

\`\`\`css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
\`\`\`

#### Inputs

\`\`\`css
.input {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(30, 86, 49, 0.1);
}
\`\`\`

## 9. Creación de las Fuentes de Datos y Objetos

### Script de Creación de Base de Datos

\`\`\`sql
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS comercial_palermo_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE comercial_palermo_db;

-- Tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('cliente', 'administrador') NOT NULL DEFAULT 'cliente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB;

-- Tabla de categorías
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Tabla de productos
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    code VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    purchase_price DECIMAL(10,2) NOT NULL,
    sale_price DECIMAL(10,2) NOT NULL,
    ideal_stock INT NOT NULL DEFAULT 0,
    current_stock INT NOT NULL DEFAULT 0,
    image_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    INDEX idx_code (code),
    INDEX idx_is_active (is_active),
    CONSTRAINT chk_prices CHECK (sale_price > purchase_price),
    CONSTRAINT chk_stock CHECK (current_stock >= 0 AND ideal_stock >= 0)
) ENGINE=InnoDB;

-- Tabla de sesiones
CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(500) NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_token (token),
    INDEX idx_expires_at (expires_at)
) ENGINE=InnoDB;

-- Insertar categorías iniciales
INSERT INTO categories (name, description) VALUES
('Muebles de Sala', 'Sofás, mesas de centro, estanterías'),
('Muebles de Dormitorio', 'Camas, cómodas, armarios'),
('Muebles de Oficina', 'Escritorios, sillas de oficina'),
('Iluminación', 'Lámparas, apliques, candelabros');

-- Insertar usuario administrador por defecto
-- Contraseña: admin123 (debe ser cambiada en producción)
INSERT INTO users (username, email, password, role) VALUES
('admin', 'admin@comercialpalermo.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'administrador');

-- Insertar productos de ejemplo
INSERT INTO products (category_id, code, description, purchase_price, sale_price, ideal_stock, current_stock, image_url) VALUES
(1, 'SOFA-001', 'Sofá de 3 plazas color naranja con cojines decorativos', 450.00, 750.00, 10, 5, '/orange-sofa-with-pillows.jpg'),
(1, 'MESA-001', 'Mesa de comedor de madera maciza', 200.00, 350.00, 15, 8, '/wooden-dining-table.png'),
(2, 'COMODA-001', 'Cómoda de madera con 4 cajones', 180.00, 300.00, 12, 6, '/wooden-chest-of-drawers.jpg'),
(4, 'LAMP-001', 'Lámpara de mesa color amarillo', 25.00, 50.00, 20, 15, '/yellow-table-lamp.jpg'),
(2, 'CAMA-001', 'Cama individual con cabecera de madera', 300.00, 500.00, 8, 4, '/single-bed-with-red-blanket.jpg');
\`\`\`

## 10. Programación de Clases, Procedimientos, Funciones y Validaciones

### Implementación en el Backend (Laravel)

#### Modelo User

\`\`\`php
<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'username',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Verifica si el usuario es administrador
     */
    public function isAdmin(): bool
    {
        return $this->role === 'administrador';
    }

    /**
     * Verifica si el usuario tiene permiso para una acción
     */
    public function hasPermission(string $action): bool
    {
        $adminActions = ['create_product', 'edit_product', 'delete_product'];
        
        if (in_array($action, $adminActions)) {
            return $this->isAdmin();
        }
        
        return true; // Acciones públicas
    }
}
\`\`\`

#### Modelo Product

\`\`\`php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'code',
        'description',
        'purchase_price',
        'sale_price',
        'ideal_stock',
        'current_stock',
        'image_url',
        'is_active',
    ];

    protected $casts = [
        'purchase_price' => 'decimal:2',
        'sale_price' => 'decimal:2',
        'ideal_stock' => 'integer',
        'current_stock' => 'integer',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con categoría
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Calcula la ganancia del producto
     */
    public function calculateProfit(): float
    {
        return $this->sale_price - $this->purchase_price;
    }

    /**
     * Calcula el porcentaje de ganancia
     */
    public function calculateProfitPercentage(): float
    {
        if ($this->purchase_price == 0) {
            return 0;
        }
        return (($this->sale_price - $this->purchase_price) / $this->purchase_price) * 100;
    }

    /**
     * Verifica si el producto necesita reabastecimiento
     */
    public function needsRestock(): bool
    {
        return $this->current_stock < ($this->ideal_stock * 0.3);
    }

    /**
     * Obtiene el nivel de stock
     */
    public function getStockLevel(): string
    {
        if ($this->current_stock == 0) {
            return 'SIN_STOCK';
        } elseif ($this->current_stock < ($this->ideal_stock * 0.3)) {
            return 'CRITICO';
        } elseif ($this->current_stock < ($this->ideal_stock * 0.5)) {
            return 'BAJO';
        } elseif ($this->current_stock >= $this->ideal_stock) {
            return 'OPTIMO';
        }
        return 'NORMAL';
    }

    /**
     * Actualiza el stock
     */
    public function updateStock(int $quantity, string $operation = 'add'): bool
    {
        if ($operation === 'add') {
            $this->current_stock += $quantity;
        } elseif ($operation === 'subtract') {
            if ($this->current_stock < $quantity) {
                throw new \Exception('Stock insuficiente');
            }
            $this->current_stock -= $quantity;
        }
        
        return $this->save();
    }

    /**
     * Scope para productos activos
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope para productos con stock bajo
     */
    public function scopeLowStock($query)
    {
        return $query->whereRaw('current_stock < (ideal_stock * 0.5)');
    }
}
\`\`\`

#### Controlador ProductController

\`\`\`php
<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Obtener todos los productos
     */
    public function index()
    {
        $products = Product::with('category')
            ->active()
            ->orderBy('created_at', 'desc')
            ->get();
        
        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }

    /**
     * Obtener un producto por ID
     */
    public function show($id)
    {
        $product = Product::with('category')->find($id);
        
        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Producto no encontrado'
            ], 404);
        }
        
        return response()->json([
            'success' => true,
            'data' => $product
        ]);
    }

    /**
     * Crear un nuevo producto
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string|max:50|unique:products,code',
            'description' => 'required|string',
            'purchase_price' => 'required|numeric|min:0',
            'sale_price' => 'required|numeric|min:0|gt:purchase_price',
            'ideal_stock' => 'required|integer|min:0',
            'current_stock' => 'required|integer|min:0',
            'image_url' => 'nullable|url',
            'category_id' => 'nullable|exists:categories,id'
        ], [
            'code.required' => 'El código es obligatorio',
            'code.unique' => 'El código ya existe',
            'sale_price.gt' => 'El precio de venta debe ser mayor al precio de compra',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $product = Product::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Producto creado exitosamente',
            'data' => $product
        ], 201);
    }

    /**
     * Actualizar un producto
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        
        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Producto no encontrado'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'code' => 'sometimes|string|max:50|unique:products,code,' . $id,
            'description' => 'sometimes|string',
            'purchase_price' => 'sometimes|numeric|min:0',
            'sale_price' => 'sometimes|numeric|min:0',
            'ideal_stock' => 'sometimes|integer|min:0',
            'current_stock' => 'sometimes|integer|min:0',
            'image_url' => 'nullable|url',
            'category_id' => 'nullable|exists:categories,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Validar que el precio de venta sea mayor al de compra
        $purchasePrice = $request->input('purchase_price', $product->purchase_price);
        $salePrice = $request->input('sale_price', $product->sale_price);
        
        if ($salePrice <= $purchasePrice) {
            return response()->json([
                'success' => false,
                'message' => 'El precio de venta debe ser mayor al precio de compra'
            ], 422);
        }

        $product->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Producto actualizado exitosamente',
            'data' => $product
        ]);
    }

    /**
     * Eliminar un producto (eliminación lógica)
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        
        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Producto no encontrado'
            ], 404);
        }

        $product->is_active = false;
        $product->save();

        return response()->json([
            'success' => true,
            'message' => 'Producto eliminado exitosamente'
        ]);
    }

    /**
     * Obtener productos con stock bajo
     */
    public function lowStock()
    {
        $products = Product::lowStock()
            ->active()
            ->get();
        
        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }
}
\`\`\`

#### Controlador AuthController

\`\`\`php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Login de usuario
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login exitoso',
            'data' => [
                'user' => [
                    'id' => $user->id,
                    'username' => $user->username,
                    'email' => $user->email,
                    'role' => $user->role
                ],
                'token' => $token
            ]
        ]);
    }

    /**
     * Logout de usuario
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logout exitoso'
        ]);
    }

    /**
     * Obtener usuario autenticado
     */
    public function me(Request $request)
    {
        return response()->json([
            'success' => true,
            'data' => $request->user()
        ]);
    }
}
\`\`\`

### Implementación en el Frontend (React)

#### Servicio de Productos

\`\`\`typescript
// lib/services/product-service.ts
import { api } from '../api';

export interface Product {
  id: number;
  code: string;
  description: string;
  purchase_price: number;
  sale_price: number;
  ideal_stock: number;
  current_stock: number;
  image_url?: string;
  category_id?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductFormData {
  code: string;
  description: string;
  purchase_price: number;
  sale_price: number;
  ideal_stock: number;
  current_stock: number;
  image_url?: string;
  category_id?: number;
}

export const productService = {
  /**
   * Obtener todos los productos
   */
  async getAll(): Promise<Product[]> {
    const response = await api.get('/products');
    return response.data;
  },

  /**
   * Obtener un producto por ID
   */
  async getById(id: number): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  /**
   * Crear un nuevo producto
   */
  async create(data: ProductFormData): Promise<Product> {
    const response = await api.post('/products', data);
    return response.data;
  },

  /**
   * Actualizar un producto
   */
  async update(id: number, data: Partial<ProductFormData>): Promise<Product> {
    const response = await api.put(`/products/${id}`, data);
    return response.data;
  },

  /**
   * Eliminar un producto
   */
  async delete(id: number): Promise<void> {
    await api.delete(`/products/${id}`);
  },

  /**
   * Obtener productos con stock bajo
   */
  async getLowStock(): Promise<Product[]> {
    const response = await api.get('/products/low-stock');
    return response.data;
  }
};
\`\`\`

## 11. Creación de Formularios Web

Los formularios web ya han sido implementados en las siguientes páginas:

1. **Formulario de Login** (`app/login/page.tsx`)
   - Campos: usuario, contraseña
   - Validaciones implementadas
   - Integración con API de autenticación

2. **Formulario de Producto Nuevo** (`app/products/new/page.tsx`)
   - Campos: código, descripción, precios, stock, imagen
   - Validaciones en tiempo real
   - Integración con API de productos

3. **Formulario de Edición de Producto** (`app/products/edit/[id]/page.tsx`)
   - Precarga de datos existentes
   - Actualización de campos
   - Validaciones y confirmaciones

## 12. Cronograma de Actividades

### Fase 1: Análisis y Diseño (Semanas 1-2)

| Actividad | Duración | Responsable | Estado |
|-----------|----------|-------------|--------|
| Levantamiento de requerimientos | 3 días | Equipo completo | ✅ Completado |
| Análisis de requerimientos | 2 días | Analista | ✅ Completado |
| Diseño de arquitectura | 2 días | Arquitecto | ✅ Completado |
| Diseño de base de datos | 2 días | DBA | ✅ Completado |
| Diseño de interfaz (mockups) | 3 días | Diseñador UI/UX | ✅ Completado |

### Fase 2: Desarrollo (Semanas 3-6)

| Actividad | Duración | Responsable | Estado |
|-----------|----------|-------------|--------|
| Configuración de entorno | 1 día | DevOps | ✅ Completado |
| Creación de base de datos | 2 días | Backend Dev | ✅ Completado |
| Desarrollo de API (Backend) | 8 días | Backend Dev | ✅ Completado |
| Desarrollo de componentes (Frontend) | 8 días | Frontend Dev | ✅ Completado |
| Integración Frontend-Backend | 3 días | Full Stack Dev | ✅ Completado |
| Implementación de autenticación | 2 días | Backend Dev | ✅ Completado |

### Fase 3: Pruebas y Despliegue (Semanas 7-8)

| Actividad | Duración | Responsable | Estado |
|-----------|----------|-------------|--------|
| Pruebas unitarias | 3 días | QA | 🔄 En progreso |
| Pruebas de integración | 2 días | QA | ⏳ Pendiente |
| Pruebas de usuario | 2 días | QA + Usuario final | ⏳ Pendiente |
| Corrección de bugs | 3 días | Desarrolladores | ⏳ Pendiente |
| Despliegue en producción | 1 día | DevOps | ⏳ Pendiente |
| Documentación final | 2 días | Equipo completo | 🔄 En progreso |

### Fase 4: Mantenimiento (Continuo)

| Actividad | Frecuencia | Responsable |
|-----------|------------|-------------|
| Monitoreo de sistema | Diario | DevOps |
| Backups de base de datos | Diario | DBA |
| Actualizaciones de seguridad | Mensual | DevOps |
| Revisión de logs | Semanal | Backend Dev |
| Soporte a usuarios | Continuo | Soporte técnico |

## 13. Fuentes de Información (Formato APA)

### Libros

Sommerville, I. (2016). *Software Engineering* (10th ed.). Pearson Education.

Pressman, R. S., & Maxim, B. R. (2020). *Ingeniería del software: Un enfoque práctico* (9th ed.). McGraw-Hill Education.

Silberschatz, A., Korth, H. F., & Sudarshan, S. (2019). *Fundamentos de bases de datos* (7th ed.). McGraw-Hill Education.

### Documentación Técnica

Laravel. (2024). *Laravel Documentation*. https://laravel.com/docs

Meta. (2024). *React Documentation*. https://react.dev/

Vercel. (2024). *Next.js Documentation*. https://nextjs.org/docs

MySQL. (2024). *MySQL 8.0 Reference Manual*. https://dev.mysql.com/doc/refman/8.0/en/

### Artículos y Recursos Web

Mozilla Developer Network. (2024). *Web APIs*. https://developer.mozilla.org/en-US/docs/Web/API

W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.1*. https://www.w3.org/WAI/WCAG21/quickref/

OWASP. (2024). *OWASP Top Ten*. https://owasp.org/www-project-top-ten/

### Metodologías

Beck, K., et al. (2001). *Manifesto for Agile Software Development*. https://agilemanifesto.org/

Schwaber, K., & Sutherland, J. (2020). *The Scrum Guide*. https://scrumguides.org/

## 14. Glosario de Términos

### A

**API (Application Programming Interface)**: Conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones, permitiendo la comunicación entre diferentes sistemas.

**Autenticación**: Proceso de verificar la identidad de un usuario, dispositivo o sistema antes de permitir el acceso a recursos protegidos.

**Autorización**: Proceso de determinar qué acciones puede realizar un usuario autenticado dentro del sistema.

### B

**Backend**: Parte del desarrollo web que se encarga de la lógica del servidor, bases de datos y la gestión de datos que no son visibles para el usuario final.

**Base de Datos Relacional**: Sistema de gestión de bases de datos que almacena información en tablas relacionadas entre sí mediante claves primarias y foráneas.

### C

**CRUD**: Acrónimo de Create (Crear), Read (Leer), Update (Actualizar) y Delete (Eliminar), que representa las cuatro operaciones básicas de persistencia de datos.

**Cliente-Servidor**: Arquitectura de red en la que los clientes solicitan servicios y recursos a los servidores, que los proporcionan.

### D

**Diagrama ER (Entidad-Relación)**: Representación gráfica de las entidades de un sistema de información y sus relaciones.

**Diccionario de Datos**: Documento que describe la estructura, tipo de datos, restricciones y relaciones de cada elemento en una base de datos.

### F

**Framework**: Estructura conceptual y tecnológica de soporte definida, que sirve de base para la organización y desarrollo de software.

**Frontend**: Parte del desarrollo web que se encarga de la interfaz de usuario y la experiencia visual con la que interactúa el usuario final.

### H

**HTTP (Hypertext Transfer Protocol)**: Protocolo de comunicación que permite las transferencias de información en la World Wide Web.

**HTTPS**: Versión segura de HTTP que utiliza cifrado SSL/TLS para proteger la información transmitida.

### J

**JSON (JavaScript Object Notation)**: Formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.

**JWT (JSON Web Token)**: Estándar abierto para crear tokens de acceso que permiten la autenticación y el intercambio seguro de información.

### L

**Laravel**: Framework de PHP de código abierto para el desarrollo de aplicaciones web siguiendo el patrón MVC.

### M

**Middleware**: Software que actúa como puente entre diferentes aplicaciones o componentes de software, facilitando la comunicación y gestión de datos.

**MVC (Model-View-Controller)**: Patrón de arquitectura de software que separa los datos (Modelo), la interfaz de usuario (Vista) y la lógica de control (Controlador).

**MySQL**: Sistema de gestión de bases de datos relacional de código abierto, ampliamente utilizado en aplicaciones web.

### N

**Next.js**: Framework de React para producción que proporciona renderizado del lado del servidor y generación de sitios estáticos.

### O

**ORM (Object-Relational Mapping)**: Técnica de programación que convierte datos entre sistemas de tipos incompatibles usando programación orientada a objetos.

### R

**React**: Biblioteca de JavaScript para construir interfaces de usuario, desarrollada por Facebook.

**REST (Representational State Transfer)**: Estilo de arquitectura de software para sistemas distribuidos, especialmente para servicios web.

**Responsive Design**: Enfoque de diseño web que hace que las páginas web se vean bien en todos los dispositivos y tamaños de pantalla.

### S

**SQL (Structured Query Language)**: Lenguaje de programación diseñado para administrar y recuperar información de sistemas de gestión de bases de datos relacionales.

**SSL/TLS**: Protocolos criptográficos que proporcionan comunicaciones seguras por una red, comúnmente Internet.

### T

**Token**: Cadena de caracteres que representa credenciales de autenticación y se utiliza para acceder a recursos protegidos.

**TypeScript**: Superconjunto de JavaScript que añade tipado estático opcional y otras características al lenguaje.

### U

**UI (User Interface)**: Interfaz de usuario, el espacio donde se producen las interacciones entre humanos y máquinas.

**UX (User Experience)**: Experiencia de usuario, el conjunto de factores relativos a la interacción del usuario con un producto o servicio.

### V

**Validación**: Proceso de verificar que los datos ingresados cumplan con los requisitos y restricciones definidos.

**Vista**: En el patrón MVC, componente que presenta los datos al usuario y captura las interacciones del usuario.

## 15. Anexos

### Anexo A: Capturas de Pantalla del Sistema

*[Aquí se incluirían capturas de pantalla de cada página del sistema]*

1. Página de inicio/contacto
2. Catálogo de productos
3. Formulario de nuevo producto
4. Formulario de edición de producto
5. Página de login
6. Vista de administrador

### Anexo B: Código Fuente Completo

*[El código fuente completo está disponible en el repositorio de GitHub]*

- Frontend: https://github.com/v0-comercial-palermo-react
- Backend: https://github.com/Ale1102/-backend-Comercial-Palermo

### Anexo C: Manual de Usuario

#### Para Clientes

1. **Acceso al sistema**
   - Ingresar a la URL del sistema
   - Navegar por el catálogo sin necesidad de login

2. **Visualización de productos**
   - Hacer clic en "catálogo de productos"
   - Ver imágenes y detalles de productos

#### Para Administradores

1. **Inicio de sesión**
   - Hacer clic en "login"
   - Ingresar usuario y contraseña
   - Hacer clic en "Iniciar Sesión"

2. **Gestión de productos**
   - **Agregar producto**: Clic en "Agregar Producto", completar formulario, clic en "Ingresar"
   - **Editar producto**: Hover sobre producto, clic en icono de editar, modificar datos, guardar
   - **Eliminar producto**: Clic en "Eliminar Producto", confirmar acción

### Anexo D: Manual Técnico

#### Instalación del Frontend

\`\`\`bash
# Clonar repositorio
git clone https://github.com/v0-comercial-palermo-react.git
cd v0-comercial-palermo-react

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con la URL del backend

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
npm start
\`\`\`

#### Instalación del Backend

\`\`\`bash
# Clonar repositorio
git clone https://github.com/Ale1102/-backend-Comercial-Palermo.git
cd -backend-Comercial-Palermo

# Instalar dependencias
composer install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con credenciales de base de datos

# Generar clave de aplicación
php artisan key:generate

# Ejecutar migraciones
php artisan migrate

# Ejecutar seeders (datos de prueba)
php artisan db:seed

# Iniciar servidor
php artisan serve
\`\`\`

### Anexo E: Pruebas Realizadas

#### Pruebas Unitarias

| Componente | Prueba | Resultado |
|------------|--------|-----------|
| ProductService.create() | Crear producto válido | ✅ Pasó |
| ProductService.create() | Crear producto con código duplicado | ✅ Pasó |
| AuthService.login() | Login con credenciales válidas | ✅ Pasó |
| AuthService.login() | Login con credenciales inválidas | ✅ Pasó |

#### Pruebas de Integración

| Flujo | Descripción | Resultado |
|-------|-------------|-----------|
| Login → Catálogo | Usuario inicia sesión y ve catálogo | ✅ Pasó |
| Agregar Producto | Admin agrega producto y aparece en catálogo | ✅ Pasó |
| Editar Producto | Admin edita producto y cambios se reflejan | ✅ Pasó |

### Anexo F: Diagrama de Despliegue

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    INFRAESTRUCTURA CLOUD                     │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┐         ┌──────────────────────┐
│   Vercel Platform    │         │   AWS / DigitalOcean │
│                      │         │                      │
│  ┌────────────────┐  │         │  ┌────────────────┐  │
│  │  Next.js App   │  │         │  │  Laravel API   │  │
│  │  (Frontend)    │  │◄───────►│  │  (Backend)     │  │
│  └────────────────┘  │  HTTPS  │  └────────────────┘  │
│                      │         │          │           │
│  CDN + Edge Network  │         │          ▼           │
└──────────────────────┘         │  ┌────────────────┐  │
                                 │  │  MySQL DB      │  │
                                 │  └────────────────┘  │
                                 └──────────────────────┘

┌──────────────────────┐
│  Cloudinary / AWS S3 │
│                      │
│  ┌────────────────┐  │
│  │  Image Storage │  │
│  └────────────────┘  │
└──────────────────────┘
\`\`\`

---

**Documento preparado por**: Equipo de Desarrollo Comercial Palermo  
**Fecha**: 2025  
**Versión**: 1.0  
**Estado**: Avance 50%
