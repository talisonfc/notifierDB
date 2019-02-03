import pika
import time

inicio = 0

connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()


channel.queue_declare(queue='pje-pessoa')

def callback(ch, method, properties, body):
	now = int(round(time.time() * 1000))
	print(now)
	with open('time-receiver.txt', 'a') as arq:
		arq.write(str(now))
		arq.write('\n')
	print(" [x] Received %r" % body)

channel.basic_consume(callback,
                      queue='pje-pessoa',
                      no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
