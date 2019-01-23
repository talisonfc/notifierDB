/*
create table processo(
	id int,
	conteudo varchar(200)
);
*/

/*
update pg_pltemplate set tmpllibrary='/usr/local/Cellar/python/3.7.1/bin/python3' where tmplname='plpython3u';
select * from pg_pltemplate where tmplname='plpython3u';
CREATE LANGUAGE plpython3u;
*/

/*
create function sendchange()
returns trigger
as $$
import requests
import json

url = "http://172.21.254.99:8080/send"
headers = {'Content-Type': 'application/json'}

payload = {'source': TD['args'][0], 'table': TD['args'][1], 'data': TD['new']}
r = requests.post(url, data=json.dumps(payload), headers=headers)
$$ language plpythonu;
*/

/*
CREATE TRIGGER sendchange AFTER INSERT OR UPDATE
   ON usuario FOR EACH ROW
   EXECUTE PROCEDURE sendchange ('pje','usuario');
*/
/*
create trigger sendChangeProcesso after insert on processo for each row execute procedure sendchange ('pje','processo');
*/

/*
insert into processo values (3,'qualquer texto');
select * from processo;
*/

/*
insert into processo values (0,'167821681726876','motivo','descricao');
insert into usuario values (301,'Talison','2819384738','test@test.com','123456');
*/


update usuario set nome='Joao' where id=302;
