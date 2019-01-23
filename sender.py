import pika
import json

connection = None
conteudo = {}
conteudo['nome']="talison"
print(conteudo)

try:
	connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=5627))
	channel = connection.channel()
	channel.queue_declare(queue='request-render-pdf')

	channel.basic_publish(exchange='',
		routing_key='hello',
		body=json.dumps(conteudo))

	print(' [x] Sent +Hello World!+')
except Exception as e:
	print('Sender: CONNECTION ERROR')
finally:
	if connection is not None:
		connection.close()

