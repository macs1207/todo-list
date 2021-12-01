from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import bcrypt

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    
    uid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(24), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    create_at = db.Column(db.DateTime, default=datetime.now)
    update_at = db.Column(
        db.DateTime, default=datetime.now, onupdate=datetime.now)
    
    user_task = db.relationship("Task", backref="user")

    def __init__(self, username, password):
        self.username = username
        self.password = password
    
    @classmethod
    def create_user(cls, username, password):
        query = cls.query.filter_by(username=username).first()
        if query:
            return False

        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())
        user = cls(username, hashed_password)
        db.session.add(user)
        db.session.commit()
        return True
    
    @classmethod
    def find_user_by_username(cls, username):
        return cls.query.filter_by(username=username).first()
    
    @staticmethod
    def validate_password(password, hashed_password):
        if bcrypt.hashpw(password, hashed_password) == hashed_password:
            return True
        return False


class Task(db.Model):
    __tablename__ = 'task'
    
    tid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    done = db.Column(db.Boolean, default=False, nullable=False)
    expire_at = db.Column(db.DateTime, nullable=False)
    create_at = db.Column(db.DateTime, default=datetime.now)
    update_at = db.Column(
        db.DateTime, default=datetime.now, onupdate=datetime.now)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.uid'), nullable=False)

    def __init__(self, title, content, expire_at):
        self.title = title
        self.content = content
        self.expire_at = expire_at
