from Marketext.app import db
from hashlib import md5

# User table from the database


class ContactModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.userOneId = userId
        self.userTwoId = None
        self.ISBN = None

        if userId is not None:
            self.dataCur.execute(
                'SELECT * FROM ContactUser WHERE userOneId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.userOneId = results['userOneId']
                self.userTwoId = results['userTwoId']
                self.ISBN = results['ISBN']

    def initContact(self, userOneId, userTwoId, listedId):
        self.dataCur.execute('INSERT INTO ContactUser(userOneId,userTwoId,listedId) VALUES (' +
                             "'" + str(userOneId) + "'," + "'" + str(userTwoId) + "'," + "'" + str(listedId) + "'" ')')
        self.database.commit()

    def showContact(self, userId):
        self.dataCur.execute('SELECT * FROM ContactUser WHERE userOneId = ' +
                             "'" + str(userId) + "'")
        results = self.dataCur.fetchall()
        return results
