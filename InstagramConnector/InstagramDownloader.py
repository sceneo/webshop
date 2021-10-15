from datetime import datetime
from tqdm import tqdm
import requests
import re
import sys


def downloader(url, targetPath, targetName):

    final = re.sub('meta property="og:image" content="', '', url)
    _response = requests.get(final).content
    file_size_request = requests.get(final, stream=True)
    file_size = int(file_size_request.headers['Content-Length'])
    block_size = 1024
    t=tqdm(total=file_size, unit='B', unit_scale=True, desc=targetName, ascii=True)
    with open(targetPath + targetName + '.jpg', 'wb') as f:
        for data in file_size_request.iter_content(block_size):
            t.update(len(data))
            f.write(data)
    t.close()
    print("Image " + targetName + "downloaded successfully")


if __name__ == "__main__":
    testUrl = "https://scontent-muc2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/149535580_182738326976258_5969608369284917019_n.jpg?_nc_ht=scontent-muc2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=00jOWKR5q30AX_IsJuv&edm=APU89FABAAAA&ccb=7-4&oh=89851e748e0d6ee0d6a34e8f1fb3f92e&oe=61704199&_nc_sid=86f79a"
    testTargetPath = "public/test/"
    testTargetName = "RocketMan"
    downloader(testUrl, testTargetPath, testTargetName)