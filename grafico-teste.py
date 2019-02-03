import matplotlib.pyplot as plt
import numpy as np 

x = np.arange(0,10,.1)
y = np.sin(x)

fig, ax_lst = plt.subplots(2,2)

ax_lst[0][0].plot(x,y)
ax_lst[0][0].xaxis.set_visible(False)

print(ax_lst)

plt.savefig('grafico.png')