import requests
import json
import sys

data = {
"additionalKycVerifyFilter": 0,
"asset": "USDT",
"classifies": ["mass", "profession", "fiat_trade"],
"countries": [],
"fiat": "VES",
"filterType": "all",
"page": 1,
"payTypes": [],
"periods": [],
"proMerchantAds": False,
"publisherType": "merchant",
"rows": 10,
"shieldMerchantAds": False,
"tradeType": "BUY",
"transAmount": 600
}

#print (data)

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data)

result = json.loads(result.text)
asset = result['data'][0]['adv']['asset']
fiat = result['data'][0]['adv']['fiatUnit']
price1 = float(result['data'][0]['adv']['price'])
price2 = float(result['data'][1]['adv']['price'])
price3 = float(result['data'][2]['adv']['price'])
price4 = float(result['data'][3]['adv']['price'])
price5 = float(result['data'][4]['adv']['price'])
price6 = float(result['data'][5]['adv']['price'])
price7 = float(result['data'][6]['adv']['price'])
price8 = float(result['data'][7]['adv']['price'])
price9 = float(result['data'][8]['adv']['price'])
price10 = float(result['data'][9]['adv']['price'])

numeros = [price1, price2, price3, price4, price5, price6, price7, price8, price9, price10]

promedio = sum(numeros) / len(numeros)

# print(asset, "<--->",fiat,round(promedio,2))
print(round(promedio,2))

output = round(promedio,2)
sys.stdout.flush()
