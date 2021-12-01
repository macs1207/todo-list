from flask import Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required

task_bp = Blueprint('task', __name__)


@task_bp.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    # TODO:
    return 'ok'


@task_bp.route('/tasks', methods=['POST'])
@jwt_required()
def create_task():
    # TODO:
    return 'ok'


@task_bp.route('/task/<int:id>', methods=['GET'])
@jwt_required()
def get_task(id):
    # TODO:
    return 'ok'


@task_bp.route('/task/<int:id>', methods=['PATCH'])
@jwt_required()
def update_task(id):
    # TODO:
    return 'ok'


@task_bp.route('/task/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_task(id):
    # TODO:
    return 'ok'
