# Calculadora de Intereses

Una aplicación web que permite calcular y visualizar el valor futuro de una inversión utilizando interés simple o compuesto. La aplicación proporciona una interfaz para ingresar los parámetros de inversión y muestra los resultados tanto en formato de lista como en un gráfico interactivo.

## Características

- Cálculo de interés simple y compuesto.
- Visualización de resultados en una lista.
- Gráfico interactivo que muestra la evolución del valor de la inversión a lo largo del tiempo.

## Requisitos

- **Python 3.x**: Asegúrate de tener Python 3 instalado.
- **Flask**: Un microframework para Python utilizado para construir la aplicación web.
- **Chart.js**: Biblioteca de JavaScript para crear gráficos interactivos.
- **Pandas**: Biblioteca para manipulación y análisis de datos (opcional si necesitas manipular datos).

## Instalación

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio


2. **Instalar Dependencias**
   ```bash
   pip install flask

3. **Instalar Dependencias de JavaScript**
   ```bash
   npm install

 4. **Configurar Archivos Estáticos**
   
     - Copia el archivo chart.umd.js desde node_modules/chart.js/dist/chart.umd.js a static/js/chart.umd.js.


## Uso
1. Ejecutar la Aplicación
  - Desde el directorio del proyecto, ejecuta:
     ```bash
     python app.py
     
2. Abrir en el Navegador
     - Navega a
   ```
   http://localhost:5000/
   ```
   
4. Ingresar Datos y Calcular
   - Completa los campos del formulario y haz clic en el botón "Calcular" para obtener los resultados y el gráfico.
