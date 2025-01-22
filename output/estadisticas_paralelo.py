import execjs
import os
from datetime import datetime, timedelta
import pytz

# Directorio
directorio = 'output'
archivo = 'outputParalelo.js'
ruta = os.path.join(directorio, archivo)


with open('server.js', 'r') as file:
    js_code = file.read()
    

ctx = execjs.compile(js_code)
paral = ctx.eval('paral')

# Zona horaria de Venezuela
venezuela_tz = pytz.timezone('America/Caracas')

# Leer el contenido actual del archivo
if os.path.exists(ruta):
    with open(ruta, 'r') as file:
        content = file.read().strip()
else:
    content = ""

# Convertir el contenido en una lista
paralelo_numbers = content.replace("const graf_paralelo = [", "").replace("];\nmodule.exports = { graf_paralelo };", "").split(", ") if content else []

# Contar el número de días desde una fecha de inicio en la zona horaria de Venezuela
start_date = datetime(2025, 1, 20, tzinfo=venezuela_tz)
today = datetime.now(venezuela_tz)
days_passed = (today - start_date).days

# Check de tiempo
if len(paralelo_numbers) <= days_passed:
    paralelo_numbers.append(str(paral)) 
else:
    paralelo_numbers[days_passed] = str(paral)

# Unir los números y el contenido anterior si existe
new_content = ", ".join(paralelo_numbers)

# Escribir el nuevo contenido en el archivo (sin saltos de línea)
with open(ruta, 'w') as file:
    file.write(f"const graf_paralelo = [{new_content}];\nmodule.exports = {{ graf_paralelo}};")
