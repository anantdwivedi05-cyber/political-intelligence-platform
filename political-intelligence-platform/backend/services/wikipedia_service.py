from utils.http_client import get_json

WIKIPEDIA_API = "https://en.wikipedia.org/api/rest_v1/page/summary/"


def get_politician_summary(name: str):
    """
    Fetch politician information from Wikipedia.
    """

    try:
        url = WIKIPEDIA_API + name.replace(" ", "_")

        try:
            data = get_json(url)

        except Exception:
            return {
                "success": False,
                "message": "Politician not found."
            }

        return {
            "success": True,
            "name": data.get("title"),
            "description": data.get("description"),
            "summary": data.get("extract"),
            "image": (
                data.get("thumbnail", {}).get("source")
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
