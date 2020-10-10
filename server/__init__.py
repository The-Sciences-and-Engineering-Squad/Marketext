import os
from dotenv import load_dotenv
from flask import Flask
from flask_mysqldb import MySQL


load_dotenv()


db = MySQL()

def create_app():
    # create and configure the app
    app = Flask(__name__)
    app.secret_key = os.urandom(12)
    # database connection credentials
    app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
    app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
    app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
    app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
    app.config['SESSION_COOKIE_SAMESITE'] = "Strict"
    db.init_app(app)
    
    from server.controllers import user_controller
    app.register_blueprint(user_controller.bp)

    from server.controllers import books_controller
    app.register_blueprint(books_controller.bp)

    from server.controllers import balance_controller
    app.register_blueprint(balance_controller.bp)

    from server.controllers import currently_controller
    app.register_blueprint(currently_controller.bp)

    return app

    