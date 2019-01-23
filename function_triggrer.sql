create function sendchange()
returns trigger
as $$
import pika
import json

payload = {'source': TD['args'][0], 'table': TD['args'][1], 'data': TD['new']}

connection = None

try:
	connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=5627))
	channel = connection.channel()
	channel.queue_declare(queue=TD['args'][2])

	channel.basic_publish(exchange='',
		routing_key=TD['args'][3],
		body=json.dumps(payload))
except Exception as e:
	print('Sender: CONNECTION ERROR')
finally:
	if connection is not None:
		connection.close()

$$ language plpythonu;