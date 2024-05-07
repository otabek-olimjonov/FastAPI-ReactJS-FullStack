from pydantic_settings import BaseSettings, SettingsConfigDict

class PostgresSettings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env", env_ignore_empty=True, extra="ignore"
    )

    DB_HOSTNAME: str
    DB_PORT: int
    DB_PASSWORD: str
    DB_NAME: str
    DB_USERNAME: str

    def __str__(self):
        return f"postgresql+psycopg://{self.DB_USERNAME}:{self.DB_PASSWORD}@{self.DB_HOSTNAME}:{self.DB_PORT}/{self.DB_NAME}"
    
postgres_uri = PostgresSettings()