import pika
import time

def callback(ch, method, properties, body):
	print(" [x] Received ", body)

def run():
	connection = None
	try:
		connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=5627))
		print('Receiver: Connected')
		channel = connection.channel()
		channel.queue_declare('hello')
		channel.basic_consume(callback, queue='hello', no_ack=True)
		channel.start_consuming()
	except Exception as e:
		print('Receiver: CONNECTION ERROR')
		time.sleep(1)
		run()
	finally:
		pass

run()
