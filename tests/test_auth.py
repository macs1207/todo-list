import unittest
from flask import url_for
from flask_testing import TestCase
from app import create_app, db, model
import json


class SettingBase(TestCase):
    def create_app(self):
        return create_app("testing")

    def setUp(self):
        db.create_all()
        self.username = "username"
        self.passwords = "password"
        
        model.User.create_user("username", "password")

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def registrarion(self):
        response = self.client.post(url_for('api.auth.registration'), follow_redirects=True, json={
                                    "username": self.username, "password": self.passwords})
        return response

    def auth(self):
        response = self.client.post(url_for('api.auth.auth'), follow_redirects=True, json={
                                    "username": self.username, "password": self.passwords})
        return response


class CheckRegistrarion(SettingBase):
    def test_registrarion(self):
        self.username = "username1"
        response = self.registrarion()
        self.assertEqual(response.status_code, 201)

    def test_registrarion_400(self):
        # 密碼少於六位數
        self.passwords = '123'
        response = self.registrarion()
        self.assertEqual(response.status_code, 400)

    def test_registrarion_409(self):
        # 重複註冊
        response = self.registrarion()
        response = self.registrarion()
        self.assertEqual(response.status_code, 409)


class CheckAuth(SettingBase):
    def test_auth(self):
        response = self.auth()
        self.assertEqual(response.status_code, 200)

    def test_auth_401(self):
        # 使用者不存在
        self.username = 'username1'
        response = self.auth()
        self.assertEqual(response.status_code, 401)


if __name__ == '__main__':
    unittest.main()
