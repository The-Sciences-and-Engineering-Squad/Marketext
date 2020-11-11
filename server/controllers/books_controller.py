from server.models import books_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash


bp = Blueprint('books', __name__, url_prefix='/books')

# Boiler Plate Test Code
@bp.route('/search',methods=['GET', 'POST'])
def search():
    books = books_model.BooksModel()
    return None


@bp.route('/buy',methods=['GET', 'POST'])
def buy():
    books = books_model.BooksModel()
    return None

@bp.route('/trade',methods=['GET', 'POST'])
def trade():
    books = books_model.BooksModel()
    return None

@bp.route('/sell',methods=['GET', 'POST'])
def sell():
    books = books_model.BooksModel()
    return None

@bp.route('/swap',methods=['GET', 'POST'])
def swap():
    books = books_model.BooksModel()
    return None