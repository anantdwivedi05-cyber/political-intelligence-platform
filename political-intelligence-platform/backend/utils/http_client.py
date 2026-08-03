import requests


def get_json(url: str):

    headers = {
        "User-Agent": "Political-Intelligence-Platform"
    }

    response = requests.get(url, headers=headers, timeout=10)

    response.raise_for_status()

    return response.json()
