import requests
import json

url = "http://localhost:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'application': 'pje'}
r = requests.post(url, data=json.dumps(payload), headers=headers)
r.close()
#print(r.status_code, r.reason)

