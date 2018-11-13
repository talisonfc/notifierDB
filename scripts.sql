/*
create function sendtest5(a integer)
returns trigger
as $$
import requests
import json

url = "http://localhost:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'application': 'pje', 'id': a}
r = requests.post(url, data=json.dumps(payload), headers=headers)
$$ language plpythonu;

*/


/*
select sendtest3(id) from usuario;
*/

/*
CREATE TRIGGER tgtest BEFORE INSERT OR UPDATE OR DELETE
   ON usuario FOR EACH ROW
   EXECUTE PROCEDURE sendtest5();
*/

insert into usuario values (2,'maria','322.342.234-33','maria@gmail.com','123456')
