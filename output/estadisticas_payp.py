import requests
from bs4 import BeautifulSoup
import os
from datetime import datetime, timedelta
import pytz
import json

# Directorio
directorio = 'output'
archivo = 'outputPayp.js'
ruta = os.path.join(directorio, archivo)

# bcv 
url = 'https://pydolarve.org/api/v1/dollar?page=criptodolar'
response = requests.get(url)


if response.status_code == 200:

    data = json.loads(response.text)
    price = data["monitors"]["paypal"]["price"]

    # Definir la zona horaria de Venezuela
    venezuela_tz = pytz.timezone('America/Caracas')

    # Leer el contenido actual del archivo
    if os.path.exists(ruta):
        with open(ruta, 'r') as file:
            content = file.read().strip()
    else:
        content = ""

    # Convertir el contenido en una lista
    payp_numbers = content.replace("const graf_payp = [", "").replace("];\nmodule.exports = { graf_payp };", "").split(", ") if content else []
    
    # Contar el número de días desde una fecha de inicio en la zona horaria de Venezuela
    start_date = datetime(2025, 1, 20, tzinfo=venezuela_tz)
    today = datetime.now(venezuela_tz)
    days_passed = (today - start_date).days

    # Check de tiempo
    if len(payp_numbers) <= days_passed:
        payp_numbers.append(str(price)) 
    else:
        payp_numbers[days_passed] = str(price)

    # Unir los números y el contenido anterior si existe
    new_content = ", ".join(payp_numbers)
    
    # Escribir el nuevo contenido en el archivo (sin saltos de línea)
    with open(ruta, 'w') as file:
        file.write(f"const graf_payp = [{new_content}];\nmodule.exports = {{ graf_payp }};")