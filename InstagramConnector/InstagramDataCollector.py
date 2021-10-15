import json
import InstagramDownloader

def getEdgesFromFile(filename):
    with open(filename) as jsonFile:
        data = json.load(jsonFile)
        jsonFile.close()
        return data['data']['user']['edge_owner_to_timeline_media']['edges']

def loadAidali():
    print('loading data for AIDALI')
    edgesAidali = getEdgesFromFile("public/galery/content.json")
    for e in edgesAidali:
        url = e['node']['display_url']
        path = "public/galery/"
        name = e['node']['id']
        InstagramDownloader.downloader(url,path,name)

    print('loading data for MATERIAL')
    edgesMaterial = getEdgesFromFile("public/material/content.json")
    for e in edgesMaterial:
        url = e['node']['display_url']
        path = "public/material/"
        name = e['node']['id']
        InstagramDownloader.downloader(url,path,name)


def loadMaterials():
    print('loading data for AIDALI')

    with open("public/material/content.json") as jsonFile:
        data = json.load(jsonFile)
        jsonFile.close()




def main():
    loadAidali()
    loadMaterials()




if __name__ == "__main__":
    main()