from flask import Blueprint

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/registration', methods=['POST'])
def registration():
    #TODO:
    return 'ok'


@auth_bp.route('/auth')
def get_jwt_token():
    #TODO:
    return 'ok'
