import os
from datetime import datetime, timedelta
import pytz
from babel.dates import format_date

# Directorio
directorio = 'output'
archivo = 'outputFecha.js'
ruta = os.path.join(directorio, archivo)

# Definir la zona horaria de Venezuela
venezuela_tz = pytz.timezone('America/Caracas')
current_time = datetime.now(venezuela_tz)

formatted_date = format_date(current_time, format='d MMM YYYY', locale='es')

# Leer el contenido actual del archivo
if os.path.exists(ruta):
    with open(ruta, 'r') as file:
        content = file.read().strip()
else:
    content = ""

# Convertir el contenido en una lista
fecha_nums = content.replace("const graf_fecha = [", "").replace("];\nmodule.exports = { graf_fecha };", "").split(", ") if content else []

# Contar el número de días desde una fecha de inicio en la zona horaria de Venezuela
start_date = datetime(2025, 1, 20, tzinfo=venezuela_tz)
today = datetime.now(venezuela_tz)
days_passed = (today - start_date).days


# Check de tiempo
if len(fecha_nums) <= days_passed:
    fecha_nums.append(str(formatted_date)) 
else:
    fecha_nums[days_passed] = str(formatted_date)

# Unir los números y el contenido anterior si existe
new_content = ", ".join(fecha_nums)

# Escribir el nuevo contenido en el archivo (sin saltos de línea)
with open(ruta, 'w') as file:
    file.write(f"const graf_fecha = [{str(new_content)}];\nmodule.exports = {{ graf_fecha }};")
