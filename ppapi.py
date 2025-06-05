import requests
from bs4 import BeautifulSoup

url = "https://www.intergiros.com/"

response = requests.get(url)
html_content = response.text

soup = BeautifulSoup(html_content, "html.parser")

info_box = soup.find("div", class_="aio-icon-description ult-responsive")

if info_box:
    p_element = info_box.find("p")
    if p_element and p_element.find("em"):
        texto = p_element.text 
        resultado = texto.split("=")[1].strip()
        print(resultado)
    else:
        print("0 Bs.")
else:
    print("0 Bs.")
