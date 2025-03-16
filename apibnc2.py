import requests
import json

dolarp = 80.12

data1 = {
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
"transAmount": dolarp * 5
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data1)
result = json.loads(result.text)
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
promedio1 = sum(numeros) / len(numeros)



data2 = {
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
"transAmount": dolarp * 10
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data2)
result = json.loads(result.text)
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
promedio2 = sum(numeros) / len(numeros)



data3 = {
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
"transAmount": dolarp * 15
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data3)
result = json.loads(result.text)
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
promedio3 = sum(numeros) / len(numeros)


data4 = {
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
"transAmount": dolarp * 20
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data4)
result = json.loads(result.text)
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
promedio4 = sum(numeros) / len(numeros)


data5 = {
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
"transAmount": dolarp * 50
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data5)
result = json.loads(result.text)
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
promedio5 = sum(numeros) / len(numeros)


data6 = {
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
"transAmount": dolarp * 100
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data6)
result = json.loads(result.text)
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
promedio6 = sum(numeros) / len(numeros)

data7 = {
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
"transAmount": dolarp * 500
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=data7)
result = json.loads(result.text)
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
promedio7 = sum(numeros) / len(numeros)

# Data de Venta


datav1 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 5
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav1)
result = json.loads(result.text)
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
promediov1 = sum(numeros) / len(numeros)



datav2 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 10
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav2)
result = json.loads(result.text)
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
promediov2 = sum(numeros) / len(numeros)



datav3 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 15
}


result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav3)
result = json.loads(result.text)
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
promediov3 = sum(numeros) / len(numeros)


datav4 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 20
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav4)
result = json.loads(result.text)
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
promediov4 = sum(numeros) / len(numeros)


datav5 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 50
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav5)
result = json.loads(result.text)
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
promediov5 = sum(numeros) / len(numeros)


datav6 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 100
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav6)
result = json.loads(result.text)
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
promediov6 = sum(numeros) / len(numeros)


datav7 = {
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
"tradeType": "SELL",
"transAmount": dolarp * 500
}

result = requests.post("https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search", json=datav7)
result = json.loads(result.text)
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
promediov7 = sum(numeros) / len(numeros)


array_1d = promedio1,promedio2,promedio3,promedio4,promedio5,promedio6,promedio7, promediov1,promediov2,promediov3,promediov4,promediov5,promediov6, promediov7
print (array_1d)
