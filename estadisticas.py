import os
import random
from datetime import datetime, timedelta

# Leer el contenido actual del archivo
if os.path.exists('output.txt'):
    with open('output.txt', 'r') as file:
        content = file.read().strip()
else:
    content = ""

# Convertir el contenido en una lista
bcv_numbers = content.split(", ") if content else []

# Contar el número de días desde una fecha de inicio
start_date = datetime(2025, 1, 17)
today = datetime.now()
days_passed = (today - start_date).days

# Generar un número aleatorio solo para el día actual
if len(bcv_numbers) <= days_passed:
    bcv_numbers.append(str(random.randint(1, 100)))  # Puedes ajustar el rango según tus necesidades
else:
    bcv_numbers[days_passed] = str(random.randint(1, 100))

# Unir los números y el contenido anterior si existe
new_content = ", ".join(bcv_numbers)

# Escribir el nuevo contenido en el archivo (sin saltos de línea)
with open('output.txt', 'w') as file:
    file.write(new_content)
