from Marketext import db
from hashlib import md5

# User table from the database


class ProfileModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.firstName = None
        self.lastName = None
        self.phoneNumber = None
        self.street = None
        self.city = None
        self.state = None
        self.zipCode = None
        self.userId = userId

        if userId is not None:
            self.dataCur.execute('SELECT * FROM Profile WHERE userId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.firstName = results['firstName']
                self.lastName = results['lastName']
                self.phoneNumber = results['phoneNumber']
                self.street = results['street']
                self.city = results['city']
                self.state = results['state']
                self.country = results['country']
                self.zipCode = results['zipCode']

    def setFirstName(self, firstName):
        self.firstName = firstName

    def setLastName(self, lastName):
        self.lastName = lastName

    def setPhoneNumber(self, phoneNumber):
        self.phoneNumber = phoneNumber

    def setStreet(self, street):
        self.street = street

    def setCity(self, city):
        self.city = city

    def setState(self, state):
        self.state = state

    def setZipCode(self, zipCode):
        self.zipCode = zipCode

    def getFirstName(self):
        return self.firstName

    def getLastName(self):
        return self.lastName

    def getPhoneNumber(self):
        return self.phoneNumber

    def getStreet(self):
        return self.street

    def getCity(self):
        return self.city

    def getState(self):
        return self.state

    def getCountry(self):
        return self.country

    def getZipCode(self):
        return self.zipCode

    def updateField(self, field, attribute):
        self.dataCur.execute('UPDATE Profile Set ' + field + ' = ' + "'" +
                             attribute + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()

    def initProfile(self, userId):
        self.dataCur.execute('INSERT INTO Profile(firstName,lastName,phoneNumber,street,city,state,country,zipCode,userId) VALUES (' +
                             " '','' , '', '', '', '','', '0', " + "'" + str(userId) + "'" + ')')
        self.database.commit()
