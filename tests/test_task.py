import unittest
from flask import url_for
from flask_testing import TestCase
from flask_jwt_extended import create_access_token
from app import create_app, db, model
from datetime import datetime
import json


class SettingBase(TestCase):
    def create_app(self):
        return create_app("testing")

    def setUp(self):
        db.create_all()
        self.username = "username"
        self.passwords = "password"

        model.User.create_user("username", "password")
        model.User.create_user("username1", "password")

        access_token = create_access_token(
            {'uid': 1, 'username': 'username'})

        self.headers = {'Authorization': f'Bearer {access_token}'}

        self.data = {
            'title': 'Title',
            'content': 'Content',
            'done': False,
            'expire_at': '2021-12-31 00:00'
        }
        model.Task.create_task('Title', 'Content', False, datetime.strptime(
            '2021-12-31 00:00', "%Y-%m-%d %H:%M"), 1)
        model.Task.create_task('Title', 'Content', False, datetime.strptime(
            '2021-12-31 00:00', "%Y-%m-%d %H:%M"), 2)

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def get_tasks(self):
        response = self.client.get(
            url_for('api.task.get_tasks'), follow_redirects=True, headers=self.headers)
        return response

    def create_task(self):
        response = self.client.post(url_for(
            'api.task.create_task'), follow_redirects=True, headers=self.headers, json=self.data)
        return response

    def update_task(self, tid):
        response = self.client.patch(url_for(
            'api.task.update_task', tid=tid), follow_redirects=True, headers=self.headers, json=self.data)
        return response

    def delete_task(self, tid):
        response = self.client.delete(url_for(
            'api.task.delete_task', tid=tid), follow_redirects=True, headers=self.headers)
        return response


class CheckTasks(SettingBase):
    def test_get_tasks(self):
        response = self.get_tasks()
        self.assertEqual(response.status_code, 200)

    def test_get_tasks_401(self):
        self.headers['Authorization'] = ""
        response = self.get_tasks()
        self.assertEqual(response.status_code, 401)

    def test_create_task(self):
        response = self.create_task()
        self.assertEqual(response.status_code, 201)


class CheckTask(SettingBase):
    def test_update_task(self):
        response = self.update_task(1)
        self.assertEqual(response.status_code, 200)

    def test_update_task_403(self):
        response = self.update_task(2)
        self.assertEqual(response.status_code, 403)

    def test_delete_task(self):
        response = self.delete_task(1)
        self.assertEqual(response.status_code, 200)

    def test_delete_task_403(self):
        response = self.delete_task(2)
        self.assertEqual(response.status_code, 403)


if __name__ == '__main__':
    unittest.main()
