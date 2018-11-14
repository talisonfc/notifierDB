/*
create function sendtest8()
returns trigger
as $$
import requests
import json

url = "http://localhost:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'application': 'pje', 'data': TD['new']}
r = requests.post(url, data=json.dumps(payload), headers=headers)
$$ language plpythonu;
*/

/*
create function sendtest9()
returns trigger
as $$
import requests
import json

url = "http://localhost:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'application': 'pje', 'id': TD['new']['id']}
r = requests.post(url, data=json.dumps(payload), headers=headers)
$$ language plpythonu;
*/

/*
select sendtest6(id) from usuario;
*/

/*
CREATE TRIGGER tgtest3 AFTER INSERT
   ON usuario FOR EACH ROW
   EXECUTE PROCEDURE sendtest8();
*/

insert into usuario values (21,'Antonio','322.342.234-33','maria@gmail.com','123456')

/*
criando trigger passando argumento
*/
/*
create function sendtest10()
returns trigger
as $$
import requests
import json

url = "http://localhost:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'application': TD['args'][0], 'id': TD['new']['id']}
r = requests.post(url, data=json.dumps(payload), headers=headers)
$$ language plpythonu;
*/

/*
select sendtest6(id) from usuario;
*/

/*
CREATE TRIGGER tgtest AFTER INSERT
   ON usuario FOR EACH ROW
   EXECUTE PROCEDURE sendtest10 ('pje');
*/

/*
>> Usando padrão

create function sendtest12()
returns trigger
as $$
import requests
import json

url = "http://localhost:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'source': TD['args'][0], 'table': TD['args'][1], 'data': TD['new']}
r = requests.post(url, data=json.dumps(payload), headers=headers)
$$ language plpythonu;
*/

/*
select sendtest6(id) from usuario;
*/

/*
CREATE TRIGGER tgtest AFTER INSERT
   ON usuario FOR EACH ROW
   EXECUTE PROCEDURE sendtest12 ('pje','usuario');
*/

/*
insert into usuario values (21,'wellison','322.342.234-33','wellison@gmail.com','123456')
*/