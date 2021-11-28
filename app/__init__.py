from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from .config import config
from .api import api_bp

db = SQLAlchemy()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    app.register_blueprint(api_bp, url_prefix='/api')

    db.init_app(app)

    return app
