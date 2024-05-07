# Import necessary modules from SQLAlchemy and project-specific modules.
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.conifg import postgres_uri

# Create the database engine using the URL
engine = create_engine(postgres_uri)

# Create a declarative base for the models
Base = declarative_base()

# Create a session maker to interact with the database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency to get a database session
def get_db():
    # Create a new session
    db = SessionLocal()
    try:
        # Yield the session to be used by the caller
        yield db
    finally:
        # Close the session when done
        db.close()