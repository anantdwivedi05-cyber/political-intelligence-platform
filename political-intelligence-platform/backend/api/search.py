from fastapi import APIRouter
from pydantic import BaseModel

from services.wikipedia_service import get_politician_summary

router = APIRouter()


class SearchRequest(BaseModel):
    politician_name: str


@router.post("/search")
def search_politician(request: SearchRequest):

    result = get_politician_summary(request.politician_name)

    return result
