from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .config import config
from .api import api_bp
from .model import db

migrate = Migrate()

def create_app(config_name='development'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    app.register_blueprint(api_bp, url_prefix='/api')

    db.init_app(app)
    migrate.init_app(app, db)

    return app
