import requests

DEBUG_LEVEL = 0

TOKEN = 'IGQVJWX0lBc0lQVDdUbk5yeHdrZAFoyVUxUdVoyOFN2SmpOLVJnWTcydzBSUzZApSjJkQ2xEaVA3MGYwcy1mVDhWYlNrS0RVVE96T010Q1g0cmwwZA1B0TzFmVzNBV24zMXd2TlJ2bjQ0OXM2Wks3RlBXaQZDZD'
GRAPH_QL_ENDPOINT = 'https://instagram.com/graphql/query/'
QUERY_ID = "?query_id=17888483320059182"
VARIABLES_MATERIAL = '&variables={%22id%22:%2236263564391%22,%22first%22:2048,%22after%22:%22%22}'
VARIABLES_AIDALI = '&variables={%22id%22:%2228987909415%22,%22first%22:2048,%22after%22:%22%22}'


VARIABLES_TOKEN = '&access_token=' + TOKEN
URL_REFRESH = 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token' + VARIABLES_TOKEN
URL_MATERIAL = GRAPH_QL_ENDPOINT + QUERY_ID + VARIABLES_MATERIAL + VARIABLES_TOKEN
URL_AIDALI = GRAPH_QL_ENDPOINT + QUERY_ID + VARIABLES_AIDALI + VARIABLES_TOKEN

def checkRequest(status_code, content):
    if DEBUG_LEVEL > 0:
        print(content)

    if status_code == 429:
        print("Zu viele Requests abgesendet - wir müssen warten")
        return False
    return True

def storeRequest(path, content):
    with open(path + 'content.json', 'w') as f:
        f.write(content)

def refreshToken():
    refreshRequest = requests.get(URL_REFRESH)
    if refreshRequest.status_code == 200:
        print("TOKEN is refreshed")
    else:
        print("We could not refresh the TOKEN")

def requestMainData():
    aidaliRequest = requests.get(URL_AIDALI, headers = {'User-agent': 'Aidali Content'})
    isAidaliRequestValid = checkRequest(aidaliRequest.status_code, aidaliRequest.content)
    if isAidaliRequestValid:
        storeRequest("public/galery/", aidaliRequest.text)

def main():
    refreshToken()

    materialRequest = requests.get(URL_MATERIAL, headers = {'User-agent': 'Aidali Material'})
    isMaterialRequestValid = checkRequest(materialRequest.status_code, materialRequest.content)
    if isMaterialRequestValid:
        storeRequest("public/material/", materialRequest.text)
    print("content for materials is fetched")
    print(URL_MATERIAL)

    contentRequest = requests.get(URL_AIDALI, headers = {'User-agent': 'Aidali Content Data Collector'})
    isContentRequestValid = checkRequest(contentRequest.status_code, contentRequest.content)
    if isContentRequestValid:
        storeRequest("public/galery/", contentRequest.text)
    print("content for aidali is fetched")
    print(URL_AIDALI)
if __name__ == "__main__":
    main()

















