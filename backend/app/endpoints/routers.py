from fastapi import APIRouter

router = APIRouter(prefix="/api")

@router.get('', tags=['Root'])
async def root():
    return {'message': 'Hello, World!'}