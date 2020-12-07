import db


# User table from the database
class CurrentlyModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.category = None
        self.price = None
        self.userId = userId
        self.condition = None
        self.isbn = None
        self.additional = None
        self.books = None
        if userId is not None:
            self.dataCur.execute(
                'SELECT * FROM CurrentlyListed WHERE userId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchall()
            if results:
                self.books = results

    def setCategory(self, category):
        self.category = category

    def setPrice(self, price):
        self.price = price

    def setISBN(self, ISBN):
        self.isbn = ISBN

    def setAdditional(self, additional):
        self.additional = additional

    def setCondition(self, condition):
        self.condition = condition

    def getCondition(self):
        return self.condition

    def getCategory(self):
        return self.category

    def getPrice(self):
        return self.price

    def getISBN(self):
        return self.isbn

    def getAdditional(self):
        return self.additional

    def userList(self):
        return self.books

    def addListing(self):
        self.dataCur.execute('INSERT INTO CurrentlyListed(category,price,`condition`,userId,ISBN,additional) VALUES (' + "'" + self.category.lower() + "'," +
                             "'" + self.price + "'," + "'" + self.condition + "'," + "'" + str(self.userId) + "'," + "'" + str(self.isbn) + "'," + "'" + self.additional + "'" + ')')
        self.database.commit()

    def showListing(self, ISBN, category):
        self.dataCur.execute('SELECT * FROM CurrentlyListed WHERE ISBN = ' +
                             "'" + str(ISBN) + "'" + ' AND category = ' + "'" + str(category) + "'")
        results = self.dataCur.fetchall()
        return results

    def isExist(self, ISBN, category):
        self.dataCur.execute('SELECT * FROM CurrentlyListed WHERE ISBN = ' + "'" + str(ISBN) + "'" +
                             ' AND category = ' + "'" + str(category) + "'"  ' AND userId = ' + "'" + str(self.userId) + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False

    def getOneListing(self, listedId):
        self.dataCur.execute('SELECT * FROM CurrentlyListed WHERE listedId = ' +
                             "'" + str(listedId) + "'")
        results = self.dataCur.fetchone()
        return results

    def removeListing(self, ISBN=None, category=None, listedId=None):
        if listedId:
            self.dataCur.execute('DELETE FROM ContactUser WHERE listedId IN (SELECT listedId FROM CurrentlyListed WHERE listedId = ' + "'" + str(
                listedId) + "'" + ' AND category = ' + "'" + str(category) + "'"  ' AND userId = ' + "'" + str(self.userId) + "'" + ')')
            self.dataCur.execute(
                'DELETE FROM CurrentlyListed WHERE listedId = ' + "'" + str(listedId) + "'")
        else:
            self.dataCur.execute('DELETE FROM ContactUser WHERE listedId IN (SELECT listedId FROM CurrentlyListed WHERE ISBN = ' + "'" + str(
                ISBN) + "'" + ' AND category = ' + "'" + str(category) + "'"  ' AND userId = ' + "'" + str(self.userId) + "'" + ')')
            self.dataCur.execute('DELETE FROM CurrentlyListed WHERE ISBN = ' + "'" + str(ISBN) + "'" +
                                 ' AND category = ' + "'" + str(category) + "'"  ' AND userId = ' + "'" + str(self.userId) + "'")
        self.database.commit()
