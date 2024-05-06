from fastapi import FastAPI
from app.endpoints.routers import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    debug=True,
    title='FastAPI-React-Fullstack Project',
    summary='This project is a template for all fullstacks that we will have in the future!',
    description='This Project is to build a lot than just FastAPI-React',
    version='0.0.1',
    openapi_url='/api/openapi.json',
    docs_url='/api/docs',
    redoc_url='/api/redocs',
    terms_of_service='http://example.com/terms/',
    contact={
                "name": "FastAPI-React-Fullstack",
                "url": "http://example.com/contact/",
                "email": "bekdevs01@gmail.com",
            }
)

# Set the allowed origins for CORS requests.
origins = [
    '*'
]

# Add a CORS middleware to the app.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the router defined in the `routers` module in the app.
app.include_router(router)