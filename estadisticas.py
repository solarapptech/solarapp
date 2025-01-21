import requests
from bs4 import BeautifulSoup
import os
from datetime import datetime, timedelta
import pytz

# bcv 
url = 'https://www.bcv.org.ve/'
response = requests.get(url, verify=False)

if response.status_code == 200:
    # Parseo de HTML
    soup = BeautifulSoup(response.content, 'html.parser')

    # Clase específica
    elementos = soup.find_all(class_='col-sm-6 col-xs-6 centrado')

    valor = elementos[4].get_text().replace(',', '.') if len(elementos) > 4 else "N/A"

    # Definir la zona horaria de Venezuela
    venezuela_tz = pytz.timezone('America/Caracas')

    # Leer el contenido actual del archivo
    if os.path.exists('output.js'):
        with open('output.txt', 'r') as file:
            content = file.read().strip()
    else:
        content = ""

    # Convertir el contenido en una lista
    bcv_numbers = content.split(", ") if content else []

    # Contar el número de días desde una fecha de inicio en la zona horaria de Venezuela
    start_date = datetime(2025, 1, 20, tzinfo=venezuela_tz)
    today = datetime.now(venezuela_tz)
    days_passed = (today - start_date).days

    # Generar un número aleatorio solo para el día actual
    if len(bcv_numbers) <= days_passed:
        bcv_numbers.append(str(valor))  # Puedes ajustar el rango según tus necesidades
    else:
        bcv_numbers[days_passed] = str(77)

    # Unir los números y el contenido anterior si existe
    new_content = ", ".join(bcv_numbers)

    # Escribir el nuevo contenido en el archivo (sin saltos de línea)
    with open('output.js', 'w') as file:
        file.write(f"const graf_bcv = [{new_content}];\nmodule.exports = {{ graf_bcv }};")
