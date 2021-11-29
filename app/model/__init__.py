from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

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
