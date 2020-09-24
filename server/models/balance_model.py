from server import db


# User table from the database
class BalanceModel:
    def __init__(self):
        self.database = db.connection.cursor()