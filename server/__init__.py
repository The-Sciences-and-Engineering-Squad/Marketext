import os
from dotenv import load_dotenv
from flask import Flask
from flask_mysqldb import MySQL


load_dotenv()


db = MySQL()


# @app.route('/')
# def index():
#     return app.send_static_file('index.html')
#
#
# @app.errorhandler(404)
# def not_found(e):
#     return app.send_static_file('index.html')
#
#
# if __name__ == "__main__":
#     app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

assets = Environment(app)
assets.register(bundles)


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


@app.route("/")
@app.route('/<path:path>')
def home(path=None):
    return render_template('./build/templates/index.html')


@app.route("/manifest.json")
def manifest():
    return app.send_static_file("./build/manifest.json")


@app.route("/service-worker.js")
def service():
    return app.send_static_file("./build/service-worker.js")


@app.route("/precache-manifest.11e2223c4fce4224cba124fb9325d82e.js")  # This should match file below
def precache():
    # This should match above decorator route
    return app.send_static_file("./build/precache-manifest.11e2223c4fce4224cba124fb9325d82e.js")


def create_app():
    # create and configure the app
    app = Flask(__name__, static_folder='../../client/build', static_url_path='/')
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
