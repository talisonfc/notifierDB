create function sendchange()
returns trigger
as $$e
import pika
import json

payload =TD['new']

connection = None

try:
	connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
	channel = connection.channel()
	channel.queue_declare(queue=TD['args'][0])

	channel.basic_publish(exchange='',
		routing_key=TD['args'][0],
		body=json.dumps(payload))
except Exception as e:
	print('Sender: CONNECTION ERROR')
finally:
	if connection is not None:
		connection.close()

$$ language plpythonu;