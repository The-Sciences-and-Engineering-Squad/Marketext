from server import db
import hashlib

# User table from the database
class UserModel:
    def __init__(self,username = None):
        self.database = db.connection.cursor()
        self.database.execute('SELECT * FROM User WHERE email = ' + "'" + username + "'" + ' OR userName = ' "'" + username + "'" )
        results = self.database.fetchone()
        if results:
            self.userId =  results['userId']
            self.username = results['userName']
            self.password = results['password']
            self.email = results['email']
        else:
            self.userId = None
            self.username = None
            self.password = None
            self.email = None

    def getUserId(self):
        return self.userId 

    def getUserName(self):
        return self.username

    def getPassword(self):
        return self.password
    
    def getEmail(self):
        return self.email