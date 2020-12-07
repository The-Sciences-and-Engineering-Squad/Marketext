from server.__init__ import db


# User table from the database
class BalanceModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.amount = None
        self.currencyType = None
        self.userId = userId

        if userId is not None:
            self.dataCur.execute('SELECT * FROM Balance WHERE userId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.amount = results['amount']
                self.currencyType = results['currencyType']

    def addBalance(self, balance):
        self.amount = str(float(self.amount) + float(balance))
        self.dataCur.execute('UPDATE Balance Set amount = ' + "'" + self.amount +
                             "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()

    def subBalance(self, balance):
        self.amount = str(float(self.amount) - float(balance))
        self.dataCur.execute('UPDATE Balance Set amount = ' + "'" + self.amount +
                             "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()

    def getBalance(self):
        return self.amount

    def initBalance(self, userId, currencyType):
        self.dataCur.execute('INSERT INTO Balance(amount,currencyType,userId) VALUES (' +
                             "'" + str(0) + "'," + "'" + currencyType + "'," + "'" + str(userId) + "'" + ')')
        self.database.commit()
