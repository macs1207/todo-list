from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from .config import config
from .api import api_bp
from .model import db

migrate = Migrate()
jwt = JWTManager()

def create_app(config_name='development'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    app.register_blueprint(api_bp, url_prefix='/api')

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    return app
