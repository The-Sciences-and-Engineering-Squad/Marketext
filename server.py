from flask import Flask
flask_app = Flask(__name__)


@flask_app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    flask_app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
