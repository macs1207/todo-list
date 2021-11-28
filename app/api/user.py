from flask import Blueprint
from flask_restful import Api, Resource

user_bp = Blueprint('user', __name__)
user_api = Api(user_bp)


class User(Resource):
    def get(self, id):
        # TODO:
        return 'ok'

    def patch(self, id):
        # TODO:
        return 'ok'


user_api.add_resource(User, '/user/<int:id>')
