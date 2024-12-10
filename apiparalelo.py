import requests
import json

url = 'https://pydolarve.org/api/v1/dollar?page=enparalelovzla'
response = requests.get(url)

data = json.loads(response.text)

price = data["monitors"]["enparalelovzla"]["price"]

print(price)
