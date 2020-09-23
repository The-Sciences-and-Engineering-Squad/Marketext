from server.models import books_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash


bp = Blueprint('books', __name__, url_prefix='/books')

# Boiler Plate Test Code
@bp.route('/search',methods=['GET'])
def search():
    books = books_model.BooksModel()
    return None

# Boiler Plate Test Code
@bp.route('/buy',methods=['GET'])
def buy():
    books = books_model.BooksModel()
    return None