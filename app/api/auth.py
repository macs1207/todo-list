from flask import Blueprint, request
from flask_jwt_extended import create_access_token
import bcrypt
from ..model import User

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/registration', methods=['POST'])
def registration():
    username = request.json['username']
    password = request.json['password']
    
    if User.create_user(username, password):
        return {
            'status': 'success'
        }, 201
    else:
        return {
            'status': 'fail',
            'detail': 'The user already exists.'
        }, 409


@auth_bp.route('/auth', methods=['POST'])
def auth():
    username = request.json['username']
    password = request.json['password']
    
    query_user = User.find_user_by_username(username)
    if query_user:
        if User.validate_password(password, query_user.password):
            access_token = create_access_token(
                {'uid': query_user.uid, 'username': query_user.username})
            return {
                'status': 'success',
                'data': {
                    'access_token': access_token
                }
            }, 200
        else:
            return {
                'status': 'fail',
                'detail': 'Invalid password.'
            }, 401
    else:
        return {
            'status': 'fail',
            'detail': 'The user is not exist.'
        }, 401
