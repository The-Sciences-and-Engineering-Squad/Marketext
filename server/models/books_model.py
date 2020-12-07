import db


# User table from the database
class BooksModel:
    def __init__(self):
        self.database = db.connection.cursor()
