import bcrypt
from ..model import db, User

class UserRepo:
    @staticmethod        
    def create_user(username, password):
        query = User.query.filter_by(username=username).first()
        if query:
            return False
        
        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())
        user = User(username, hashed_password)
        db.session.add(user)
        db.session.commit()
        return True
    
    def find_user_by_username(username):
        query = User.query.filter_by(username=username).first()
        return query
    