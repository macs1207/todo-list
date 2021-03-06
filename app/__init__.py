from flask import Flask, render_template
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from .config import config
from .api import api_bp
from .model import db

migrate = Migrate()
jwt = JWTManager()

def create_app(config_name='development'):
    app = Flask(__name__, static_folder='dist',
                template_folder='dist', static_url_path='/')
    CORS(app)
    app.config.from_object(config[config_name])

    app.register_blueprint(api_bp, url_prefix='/api')

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    
    @app.route('/', methods=['GET'])
    def index():
        return render_template('index.html')
        
    return app
