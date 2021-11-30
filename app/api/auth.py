from flask import Blueprint, request, jsonify
import bcrypt
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from ..repository.user import UserRepo

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/registration', methods=['POST'])
def registration():
    username = request.json['username']
    password = request.json['password']
    
    if UserRepo.create_user(username, password):
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
    
    query = UserRepo.find_user_by_username(username)
    if query:
        if bcrypt.hashpw(password, query.password) == query.password:
            access_token = create_access_token(query.username)
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
