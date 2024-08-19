# Manual de Usuario: Calculadora de Intereses

Bienvenido a la calculadora de intereses, una herramienta web para calcular y visualizar el valor futuro de una inversión utilizando interés simple o compuesto.

## Instrucciones de Uso

1. **Acceso a la Aplicación**
   - Abre tu navegador web y dirígete a [http://localhost:5000/](http://localhost:5000/).

2. **Introducción de Datos**
   - **Valor Inicial**: Ingresa el monto de la inversión inicial.
   - **Tasa de Interés (%)**: Introduce la tasa de interés anual como un porcentaje (por ejemplo, 5 para 5%).
   - **Duración (en periodos)**: Ingresa la duración de la inversión en términos de periodos. La duración se multiplica por el tipo de periodo seleccionado.
   - **Tipo de Periodo**: Selecciona el tipo de periodo (Años, Trimestres, Semestres, Meses).
   - **Tipo de Interés**: Elige entre interés simple o compuesto.

3. **Cálculo y Visualización**
   - Haz clic en el botón **"Calcular"** para procesar los datos.
   - Los resultados se mostrarán en una lista debajo del botón.
   - Un gráfico en la parte inferior de la página visualizará la evolución del valor de la inversión a lo largo del tiempo.

## Ejemplo

- **Valor Inicial**: 500
- **Tasa de Interés (%)**: 12
- **Duración (en periodos)**: 5
- **Tipo de Periodo**: Años
- **Tipo de Interés**: Compuesto

![Ejemplo](img/Captura%20de%20pantalla%202024-08-19%20174552.png)

Al hacer clic en "Calcular", verás los valores anuales de la inversión y un gráfico que muestra cómo crece el valor de la inversión con el tiempo.

## Problemas Comunes

- **El gráfico no se muestra**: Asegúrate de que el archivo `chart.umd.js` está correctamente incluido en la carpeta `static/js` y que el servidor Flask está corriendo sin errores.
- **Datos incorrectos**: Verifica que los datos ingresados son correctos y que la tasa de interés y duración están bien especificados.



