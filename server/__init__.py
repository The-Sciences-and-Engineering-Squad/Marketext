import os
from flask import Flask
from flask_mysqldb import MySQL


db = MySQL()

def create_app():
    # create and configure the app
    app = Flask(__name__)
    
    # database connection credentials
    app.config['MYSQL_USER'] = 'sql9367122'
    app.config['MYSQL_PASSWORD'] ='YFyDn7Yvrk'
    app.config['MYSQL_HOST'] = 'sql9.freemysqlhosting.net'
    app.config['MYSQL_DB'] = 'sql9367122'
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

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

    