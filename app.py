'''server/app.py - main api app declaration'''
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
