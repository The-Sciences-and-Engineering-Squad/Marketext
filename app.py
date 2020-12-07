'''server/app.py - main api app declaration'''
import os
from flask import Flask, jsonify
from flask_cors import CORS

'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)

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
