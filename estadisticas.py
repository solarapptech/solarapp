import os
# import requests
from datetime import datetime, timedelta
# from bs4 import BeautifulSoup



# bcv 
# url = 'https://www.bcv.org.ve/'
# response = requests.get(url, verify=False)

# if response.status_code == 200:
#     # Parseo de HTML
#     soup = BeautifulSoup(response.content, 'html.parser')

#     # Clase específica
#     elementos = soup.find_all(class_='col-sm-6 col-xs-6 centrado')

#     # Iterar el elemento y extraer el texto
#     for elemento in elementos[4]:
#         valorbcv = elemento.get_text().replace(',', '.')
        # print(elemento.get_text().replace(',', '.'))




# Leer el contenido actual del archivo
if os.path.exists('output.txt'):
    with open('output.txt', 'r') as file:
        content = file.read().strip()
else:
    content = ""

# Contar el número de días desde una fecha de inicio
start_date = datetime(2025, 1, 16)
today = datetime.now()
days_passed = (today - start_date).days

# Generar tantos números aleatorios como días pasados más uno
bcv_numbers = [str(5) for _ in range(days_passed + 1)]

# Unir los números aleatorios y el contenido anterior si existe
new_content = ", ".join(bcv_numbers)

# Escribir el nuevo contenido en el archivo (sin saltos de línea)
with open('output.txt', 'w') as file:
    file.write(new_content)
