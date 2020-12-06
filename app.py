'''server/app.py - main api app declaration'''
from flask_mysqldb import MySQL
from flask import Flask
from dotenv import load_dotenv
import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)

##
# API routes
##
##


@app.route('/api/items')
def items():
    '''Sample API route for data'''
    return jsonify([{'title': 'A'}, {'title': 'B'}])

##
# View route
##


# @app.route('/', defaults={'path': ''})
@app.route('/')
def index():
    return app.send_static_file('index.html')


# @app.route('/<path:path>')
# def index(path):
#     '''Return index.html for all non-api routes'''
#     #pylint: disable=unused-argument
#     return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


load_dotenv()


db = MySQL()


def create_app():
    # create and configure the app
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.urandom(12)
    # database connection credentials
    app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
    app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
    app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
    app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
    app.config['SESSION_COOKIE_SAMESITE'] = "Strict"

    app.config.update(
        MAIL_SERVER=os.getenv("MAIL_SERVER"),
        MAIL_PORT=os.getenv("MAIL_PORT"),
        MAIL_USE_SSL=True,
        MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
        MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
        MAIL_DEFAULT_SENDER=os.getenv("MAIL_DEFAULT_SENDER")
    )

    db.init_app(app)

    from server.controllers import user_controller
    app.register_blueprint(user_controller.bp)

    from server.controllers import books_controller
    app.register_blueprint(books_controller.bp)

    from server.controllers import balance_controller
    app.register_blueprint(balance_controller.bp)

    from server.controllers import currently_controller
    app.register_blueprint(currently_controller.bp)

    from server.controllers import profile_controller
    app.register_blueprint(profile_controller.bp)

    from server.controllers import contact_controller
    app.register_blueprint(contact_controller.bp)

    from server.controllers import transaction_controller
    app.register_blueprint(transaction_controller.bp)

    return app
