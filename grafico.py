import matplotlib.pyplot as plt
import numpy as np

def readfile(name):
	temp = []
	with open(name,'r') as receiver:
		conteudo = receiver.readlines()
		for row in conteudo:
			row = row[0:len(row)-1]
			temp.append(row)
		return temp

def subvec(v1, v2):
	temp = []
	for i in range(0,len(v1)):
		temp.append(int(v1[i])-int(v2[i]))
	return temp

def estatistica(file1, file2, diff):
	receiver = (int(file1[len(file1)-1])-int(file1[0]))/1000
	sender = (int(file1[len(file2)-1])-int(file2[0]))/1000
	print(receiver,'s\t',sender,'s\t',np.mean(y),'ms')
	'''
	print('Intervalo Receiver:',(int(file1[len(file1)-1])-int(file1[0]))/1000,'s')
	print('Intervalo Sender',(int(file1[len(file2)-1])-int(file2[0]))/1000,'s')
	print('Transmissao Média:',np.mean(y),'ms')
	'''

print('Intervalo\tIntervalo\tMedia')

fig, ax_lst = plt.subplots(5,2)
x = np.arange(1, 1001, 1)
fileindex = 1
for i in range(0,5):
	for j in range(0,2):
		file1 = readfile('dados-teste-integracao/time-receiver-'+str(fileindex)+'.txt')
		file2 = readfile('dados-teste-integracao/tempo-sender-'+str(fileindex)+'.txt')
		fileindex = fileindex + 1
		y = subvec(file1, file2)

		estatistica(file1, file2, y)

		ax_lst[i][j].plot(x,y)
		ax_lst[i][j].set_ylim(0,700)
		ax_lst[i][j].set_xlabel('Mensagem')

		if i!=4:
			ax_lst[i][j].xaxis.set_visible(False)
		
		if j==0:
			ax_lst[i][j].set_ylabel('$\Delta$t (s)')

		if i==0:
			ax_lst[i][j].set_title('$\Delta$t(s)/Mensagem')

plt.savefig('grafico.png')

file1 = readfile('dados-teste-integracao/time-receiver-1s.txt')
file2 = readfile('dados-teste-integracao/tempo-sender-1s.txt')
y = subvec(file1, file2)
estatistica(file1, file2, y)
fig, ax = plt.subplots(2,1)
ax[0].plot(x,y)
ax[0].set_ylim(0,500)
ax[0].set_ylabel('$\Delta$t (s)')
ax[0].set_title('$\Delta$t/Mensagem')

file1 = readfile('dados-teste-integracao/time-receiver-aleatorio.txt')
file2 = readfile('dados-teste-integracao/tempo-sender-aleatorio.txt')
y = subvec(file1, file2)
estatistica(file1, file2, y)
ax[1].plot(x,y)
ax[1].set_ylim(0,500)
ax[1].set_ylabel('$\Delta$t (s)')
ax[1].set_xlabel('Mensagem')

plt.savefig('grafico2.png')
