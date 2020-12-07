'''server/app.py - main api app declaration'''
from server.controllers import transaction_controller
from server.controllers import contact_controller
from server.controllers import profile_controller
from server.controllers import currently_controller
from server.controllers import balance_controller
from server.controllers import books_controller
from server.controllers import user_controller
import os
# from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

# load_dotenv()

db = MySQL()

'''Main wrapper for app creation'''
# create and configure the app
app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)
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

app.register_blueprint(user_controller.bp)

app.register_blueprint(books_controller.bp)

app.register_blueprint(balance_controller.bp)

app.register_blueprint(currently_controller.bp)

app.register_blueprint(profile_controller.bp)

app.register_blueprint(contact_controller.bp)

app.register_blueprint(transaction_controller.bp)


@app.route('/api/items')
def items():
    '''Sample API route for data'''
    return jsonify([{'title': 'A'}, {'title': 'B'}])


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
