import requests

WIKIPEDIA_API = "https://en.wikipedia.org/api/rest_v1/page/summary/"


def get_politician_summary(name: str):
    """
    Fetch politician information from Wikipedia.
    """

    try:
        url = WIKIPEDIA_API + name.replace(" ", "_")

        response = requests.get(url)

        if response.status_code != 200:
            return {
                "success": False,
                "message": "Politician not found."
            }

        data = response.json()

        return {
            "success": True,

            "name": data.get("title"),

            "description": data.get("description"),

            "summary": data.get("extract"),

            "image": (
                data.get("thumbnail", {})
                .get("source")
                if data.get("thumbnail")
                else None
            ),

            "source": url
        }

    except Exception as e:

        return {

            "success": False,

            "message": str(e)

        }
