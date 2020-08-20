# MinutosSinInternet
Una herramienta para saber cuánto tiempo te quedas sin internet y demostrarle a tu ISP que está haciendo mal su trabajo.

### ¿Qué hace?
MinutosSinInternet es una herramienta simple (pero poderosa(?)) que realiza un ping a una URL (a un servidor).  Si el resultado del ping no es satisfactorio, se guarda la hora del suceso y espera a que se realice un ping satisfactorio para guardar una línea en un TXT como esta:

`05/12/2019 14:39:48 - 05/12/2019 14:41:02 - 1,23367147833333 minutos sin internet. Total Acumulado: 2,758209765 minutos`

La línea está compuesta por: 
1. Hora que te quedaste sin internet
2. Hora que regresó el internet 
3. Minutos que te quedaste sin internet
4. Minutos acumulados que no has tenido internet durante la ejecución del programa.

Cada línea en el TXT es una pérdida de conexión con el servidor. Si tienes varias, así sea por microsegundos, deberías llamar a tu ISP porque es un problema.

El TXT aparece en la misma carpeta dónde descomprimiste el zip.

### ¿Cómo lo uso?
Descarga la [última versión](https://github.com/hugobullont/MinutosSinInternet/releases/download/v1.0/MinutosSinInternet-v1.0.zip "Descargar - v1.0") de MinutosSinInternet, descomprímelo y ejecuta **WithoutInternetWindows.exe **. El programa ejecuta un ping a *quicksight.us-east-1.amazonaws.com*  que es un servidor AWS. (AWS son los CloudServices dónde la mayoría de páginas se alojan, así que es un buen servidor para probar tu conexión.) Si decides cambiar de URL, puedes cambiarla en **WithoutInternetWindows.exe.config** con el Bloc de Notas o tu editor de texto preferido.

El TXT aparece en la misma carpeta dónde descomprimiste el zip.

### ¿La ejecución afecta el rendimiento de mi PC?
Para nada. El programa consume una milésima parte de tu ancho de banda y RAM. 

*MinutosSinInternet solo analiza la cantidad de tiempo que te quedas sin internet y muestra el tiempo de respuesta que se tiene con el servidor correspondiente.*
