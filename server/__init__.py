import os
from flask import Flask
from flask_mysqldb import MySQL


db = MySQL()

def create_app():
    # create and configure the app
    app = Flask(__name__)
    
    # database connection credentials
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] ='2641034@Er12'
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_DB'] = 'martketext'
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

    db.init_app(app)
    
    from server.controllers import user_controller
    app.register_blueprint(user_controller.bp)

    return app

    