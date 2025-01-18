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
        with open("output.txt", "w") as file:
            file.write(str(valor))
            # print(elemento.get_text().replace(',', '.'))
