from flask import Blueprint
from flask_restful import Api, Resource

task_bp = Blueprint('task', __name__)
task_api = Api(task_bp)


class Tasks(Resource):
    def get(self):
        # TODO:
        return 'ok'

    def post(self):
        # TODO:
        return 'ok'


class Task(Resource):
    def get(self, id):
        # TODO:
        return 'ok'

    def patch(self, id):
        # TODO:
        return 'ok'

    def delete(self, id):
        # TODO:
        return 'ok'


task_api.add_resource(Tasks, '/tasks')
task_api.add_resource(Task, '/task/<int:id>')
