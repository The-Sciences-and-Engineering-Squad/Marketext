'''server/app.py - main api app declaration'''
import os
from flask import jsonify
from flask_cors import CORS
from server import app
'''Main wrapper for app creation'''
CORS(app)


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
