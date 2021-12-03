from flask import Blueprint, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from datetime import datetime
from ..model import User, Task

task_bp = Blueprint('task', __name__)


@task_bp.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    identity = get_jwt_identity()
    query_tasks = User.find_tasks_by_username(identity['username'])
    tasks_json = [task.get_task() for task in query_tasks]
    return {
        'status': 'success',
        'data': tasks_json
    }


@task_bp.route('/tasks', methods=['POST'])
@jwt_required()
def create_task():
    try:
        title = request.json['title']
        content = request.json['content']
        done = request.json['done']
        expire_at = request.json['expire_at']
    except KeyError:
        return {
            'status': 'fail',
            'detail': 'Missing params.'
        }, 400
    except TypeError:
        return {
            'status': 'fail',
            'detail': 'Missing params.'
        }, 400

    identity = get_jwt_identity()
    user_id = identity['uid']
    expire_at_parse = datetime.strptime(expire_at, "%Y-%m-%d %H:%M")
    Task.create_task(title, content, done, expire_at_parse, user_id)
    return {
        'status': 'success'
    }, 201


# @task_bp.route('/task/<int:id>', methods=['GET'])
# @jwt_required()
# def get_task(id):
#     # TODO:
#     return 'ok'


@task_bp.route('/task/<int:tid>', methods=['PATCH'])
@jwt_required()
def update_task(tid):
    try:
        title = request.json['title']
        content = request.json['content']
        done = request.json['done']
        expire_at = request.json['expire_at']
    except KeyError:
        return {
            'status': 'fail',
            'detail': 'Missing params.'
        }, 400
    except TypeError:
        return {
            'status': 'fail',
            'detail': 'Missing params.'
        }, 400

    identity = get_jwt_identity()
    user_id = identity['uid']
    expire_at_parse = datetime.strptime(expire_at, "%Y-%m-%d %H:%M")
    if Task.update_task(tid, title, content, done, expire_at_parse, user_id):
        return {
            'status': 'success'
        }
    return {
        'status': 'fail'
    }, 403


@task_bp.route('/task/<int:tid>', methods=['DELETE'])
@jwt_required()
def delete_task(tid):
    identity = get_jwt_identity()
    user_id = identity['uid']
    if Task.delete_task(tid, user_id):
        return {
            'status': 'success'
        }
    return {
        'status': 'fail'
    }, 403
