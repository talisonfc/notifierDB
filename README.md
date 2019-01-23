- Enable python inside database

		CREATE EXTENSION plpythonu 
		
- Enable module python **requests**

		pip install requests

- Create function with python

		CREATE FUNCTION pymax (a integer, b integer)
  		RETURNS integer
		AS $$
		if (a is None) or (b is None):
    		return None
  		if a > b:
    	return a
  		return b
		$$ LANGUAGE plpythonu;

- Create function trigger with python

		create function sendchange()
		returns trigger
		as $$
		import requests
		import json
		
		url = "http://localhost:8080/send"
		headers = {'Content-Type': 'application/json'}
		
		payload = {'source': TD['args'][0], 'table': TD['args'][1], 'data': TD['new']}
		r = requests.post(url, data=json.dumps(payload), headers=headers)
		$$ language plpythonu;
		
