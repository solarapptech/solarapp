import requests
import json

url = 'https://pydolarve.org/api/v1/dollar?page=criptodolar'
response = requests.get(url)

data = json.loads(response.text)

price = data["monitors"]["paypal"]["price"]

print(price * 1.01)