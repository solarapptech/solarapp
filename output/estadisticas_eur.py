import requests
from bs4 import BeautifulSoup
import os
from datetime import datetime, timedelta
import pytz

# Directorio
directorio = 'output'
archivo = 'outputBcv_eur.js'
ruta = os.path.join(directorio, archivo)

# bcv 
url = 'https://www.bcv.org.ve/'
response = requests.get(url, verify=False)

if response.status_code == 200:
    # Parseo de HTML
    soup = BeautifulSoup(response.content, 'html.parser')

    # Clase específica
    elementos = soup.find_all(class_='col-sm-6 col-xs-6 centrado')

    valor = elementos[0].get_text().replace(',', '.') if len(elementos) > 4 else "N/A"

    # Definir la zona horaria de Venezuela
    venezuela_tz = pytz.timezone('America/Caracas')

    # Leer el contenido actual del archivo
    if os.path.exists(ruta):
        with open(ruta, 'r') as file:
            content = file.read().strip()
    else:
        content = ""

    # Convertir el contenido en una lista
    eur_numbers = content.replace("const graf_eur = [", "").replace("];\nmodule.exports = { graf_eur };", "").split(", ") if content else []
    
    # Contar el número de días desde una fecha de inicio en la zona horaria de Venezuela
    start_date = datetime(2025, 1, 20, tzinfo=venezuela_tz)
    today = datetime.now(venezuela_tz)
    days_passed = (today - start_date).days

    # Check de tiempo
    if len(eur_numbers) <= days_passed:
        eur_numbers.append(str(valor)) 
    else:
        eur_numbers[days_passed] = str(valor)

    # Unir los números y el contenido anterior si existe
    new_content = ", ".join(eur_numbers)
    
    # Escribir el nuevo contenido en el archivo (sin saltos de línea)
    with open(ruta, 'w') as file:
        file.write(f"const graf_eur = [{new_content}];\nmodule.exports = {{ graf_eur }};")