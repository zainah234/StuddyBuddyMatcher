from flask import Flask
from repositories.base import Base, engine
from app import bp
import logging

def create_app():
    app = Flask(__name__)
    Base.metadata.create_all(bind=engine)
    logging.basicConfig(level=logging.DEBUG)
    app.register_blueprint(bp)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5002)


