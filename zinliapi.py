import requests
from bs4 import BeautifulSoup
import re

url = "https://www.intergiros.com/"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

info_boxes = soup.find_all("div", class_="aio-icon-description ult-responsive")

results = []
for box in info_boxes:
    em_element = box.find("em")
    if em_element:
        results.append(em_element.text.strip())

# Print only the value part (e.g., "125.00 Bs.") from the third option
if len(results) > 2:
    match = re.search(r'=\s*([\d.,]+\s*Bs\.)', results[2])
    if match:
        print(match.group(1))
    else:
        print("Value not found.")
else:
    print("Not enough results found.")