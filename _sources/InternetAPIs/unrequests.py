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
		if e.code >=400 and e.code < 500:
			print("There was an error with your request. Try checking that the url you are constructing is valid.")
			return e
		if e.code >= 500:
			print("There was an error with the server. Try contacting an administrator or try again at a later time.")
			return e



#obj = get("https://www.omdbapi.com/", params = {"apikey": "d9ef00e2", 't': "The Matrix", 'r': 'json'})
# obj = get("https://itunes.apple.com/search", params = {"term": "Cell7", "limit": 10})
# obj = get("https://itunes.apple.com/search", params = {"term": "Cell7"})
# obj = get("https://github.com/presnick/runestone")
# print(obj.text)

# pd = {}
# pd["method"] = "flickr.photos.search"
# pd["format"] = "json"
# pd["api_key"] = "9cb167cbf55c273ca293aa822444cef4"
# pd["tags"] = "mountain"
# pd["tag_mode"] = "all"
# pd["per_page"] = 10
# pd["nojsoncallback"] = 1
# obj = get("https://api.flickr.com/services/rest/", params = pd)

# obj = get("https://events.umich.edu/day/json")
# other = requestURL("https://events.umich.edu/day/json")
# print(other)
# obj = get("https://www.umich.edu")
# obj = get("https://www.google.com/")
# obj = get("https://www.michigandaily.com?")

# print(obj)
# print(obj.text[:400])
# print(obj.status_code)
# print(obj.json())