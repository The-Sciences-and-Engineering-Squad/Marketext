from server import db


# User table from the database
class UserModel:
    def __init__(self):
        self.database = db.connection.cursor()
    def getUserName(self):
        self.database.execute('SELECT * FROM user')
        results = self.database.fetchall()
        return results[0]['username']