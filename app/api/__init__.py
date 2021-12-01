from flask import Blueprint
from .auth import auth_bp
from .task import task_bp

api_bp = Blueprint('api', __name__)

api_bp.register_blueprint(auth_bp)
api_bp.register_blueprint(task_bp)
