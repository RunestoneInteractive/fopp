# least restrictive version
from json import loads
from urllib.request import urlopen
from urllib.request import HTTPError

class Response:

	def __init__(self, data, url, status_code = 0):
		self.text = data.decode('utf-8')
		self.status_code = status_code
		self.url = url

	def json(self):
		return loads(self.text)

	def __str__(self):
		return "A response object for the following request: {}".format(self.request_url)


def requestURL(baseurl, params = {}):
	if len(params) == 0:
		return baseurl
	complete_url = baseurl + "?"
	pairs = [str(pair) + "=" + str(params[pair]).replace(" ", "+") for pair in params]
	complete_url += "&".join(pairs)
	return complete_url

def get(baseurl, params = {}):
	user_req = requestURL(baseurl, params)
	try: 
		data = urlopen(user_req)
		text_data = data.read().decode('unicode_escape').encode('utf-8').strip()
		user_resp_obj = Response(text_data, user_req, data.status)
		return user_resp_obj
	except HTTPError as e:
		return e
		if e.code >=400 and e.code < 500:
			print("There was an error with your request. Try checking that the url you are constructing is valid.")
			return e
		if e.code >= 500:
			print("There was an error with the server. Try contacting an administrator or try again at a later time.")
			return e
