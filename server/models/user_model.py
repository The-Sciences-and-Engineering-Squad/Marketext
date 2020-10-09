from server import db
import hashlib
from hashlib import md5

# User table from the database
class UserModel:
    
    def __init__(self,username = None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.dataCur.execute('SELECT * FROM User WHERE email = ' + "'" + username + "'" + ' OR userName = ' "'" + username + "'" )
        results = self.dataCur.fetchone()
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

    def setUserName(self,username):
        self.username = username

    def setEmail(self,email):
        self.email = email

    def setPassword(self,password):
        self.password = md5(password.encode('utf-8')).hexdigest()
    
    def insertUser(self):
        self.dataCur.execute('INSERT INTO User(userName,password,email,resgistrationDate) VALUES (' +  "'" + self.username + "'," +  "'" + self.password + "'," +  "'" + self.email + "'," + ' NOW() )')
        self.database.commit()