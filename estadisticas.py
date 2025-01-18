import os
from datetime import datetime, timedelta
import pytz
import requests
from bs4 import BeautifulSoup

# bcv 
url = 'https://www.bcv.org.ve/'
response = requests.get(url, verify=False)

if response.status_code == 200:
    # Parseo de HTML
    soup = BeautifulSoup(response.content, 'html.parser')

    # Clase específica
    elementos = soup.find_all(class_='col-sm-6 col-xs-6 centrado')

    # Iterar el elemento y extraer el texto
    for elemento in elementos[4]:
        valor = elemento.get_text().replace(',', '.')
        # print(elemento.get_text().replace(',', '.'))

    # Definir la zona horaria de Venezuela
    venezuela_tz = pytz.timezone('America/Caracas')

    # Leer el contenido actual del archivo
    if os.path.exists('output.txt'):
        with open('output.txt', 'r') as file:
            content = file.read().strip()
    else:
        content = ""

    # Convertir el contenido en una lista
    bcv_numbers = content.split(", ") if content else []

    # Contar el número de días desde una fecha de inicio en la zona horaria de Venezuela
    start_date = datetime(2025, 1, 16, tzinfo=venezuela_tz)
    today = datetime.now(venezuela_tz)
    days_passed = (today - start_date).days

    # Generar un número aleatorio solo para el día actual
    if len(bcv_numbers) <= days_passed:
        bcv_numbers.append(valor)  # Puedes ajustar el rango según tus necesidades
    else:
        bcv_numbers[days_passed] = str(valor)

    # Unir los números y el contenido anterior si existe
    new_content = ", ".join(bcv_numbers)

    # Escribir el nuevo contenido en el archivo (sin saltos de línea)
    with open('output.txt', 'w') as file:
        file.write(new_content)
