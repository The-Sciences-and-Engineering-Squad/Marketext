from server import db
from hashlib import md5

# User table from the database
class TransactionModel:
    def __init__(self,userId = None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.transactionId = None
        self.price = None
        self.transactionDate = None
        self.category = None
        self.ISBN = None
        self.userOneId = None
        self.userTwoId = None

        if userId is not None:
            self.dataCur.execute('SELECT * FROM Transaction WHERE userOneId = ' + "'" + str(userId) + "'" + ' OR userTwoId = ' + "'" + str(userId) + "'" )
            results = self.dataCur.fetchone()
            if results:
                self.transactionId = results['transactionId']
                self.price = results['price']
                self.category = results['category']
                self.ISBN = results['ISBN']
                self.userOneId = results['userOneId']
                self.userTwoId = results['userTwoId']

    def addTransaction(self,price,category,ISBN,userOneId,userTwoId):
        self.dataCur.execute('INSERT INTO Transaction(price,transactionDate,category,ISBN,userOneId,userTwoId) VALUES (' + "'" + str(price) + "',"  + 'NOW(), ' + "'" + str(category) + "'," "'" + str(ISBN) + "'," + "'" + str(userOneId) + "'," +  "'" + str(userTwoId) + "'" + ')')
        self.database.commit()

    def getTransaction(self,userId):
        self.dataCur.execute('SELECT * FROM Transaction WHERE userOneId = ' + "'" + str(userId) + "'" + ' OR userTwoId = ' + "'" + str(userId) + "'")
        results = self.dataCur.fetchall()
        return results