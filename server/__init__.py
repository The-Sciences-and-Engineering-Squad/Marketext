from server.controllers import transaction_controller
from server.controllers import contact_controller
from server.controllers import profile_controller
from server.controllers import currently_controller
from server.controllers import balance_controller
from server.controllers import books_controller
from server.controllers import user_controller
import os
from dotenv import load_dotenv
from flask import Flask
from flask_mysqldb import MySQL


load_dotenv()


db = MySQL()


app = Flask(__name__, static_folder='../client/build', static_url_path='/')
app.config['SECRET_KEY'] = os.urandom(12)
# database connection credentials
app.config['MYSQL_USER'] = 'b2393fd53cce34'
app.config['MYSQL_PASSWORD'] = 'bbab5204'
app.config['MYSQL_HOST'] = 'us-cdbr-east-02.cleardb.com'
app.config['MYSQL_DB'] = 'heroku_c28054944c75e38'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['SESSION_COOKIE_SAMESITE'] = "Strict"

# MySQL configurations
# app.config['MYSQL_DATABASE_USER'] = 'b2393fd53cce34'
# app.config['MYSQL_DATABASE_PASSWORD'] = 'bbab5204'
# app.config['MYSQL_DATABASE_DB'] = 'heroku_c28054944c75e38'
# app.config['MYSQL_DATABASE_HOST'] = 'us-cdbr-east-02.cleardb.com'
# app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
# app.config['SESSION_COOKIE_SAMESITE'] = "Strict"

app.config.update(
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_PORT=os.getenv("MAIL_PORT"),
    MAIL_USE_SSL=True,
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_DEFAULT_SENDER=os.getenv("MAIL_DEFAULT_SENDER")
)

db.init_app(app)

# app.register_blueprint(user_controller.bp)
#
# app.register_blueprint(books_controller.bp)
#
# app.register_blueprint(balance_controller.bp)
#
# app.register_blueprint(currently_controller.bp)
#
# app.register_blueprint(profile_controller.bp)
#
# app.register_blueprint(contact_controller.bp)
#
# app.register_blueprint(transaction_controller.bp)
