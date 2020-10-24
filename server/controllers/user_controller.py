from hashlib import md5
from server.models import user_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
import json

bp = Blueprint('auth', __name__, url_prefix='/auth')

# Boiler Plate Test Code


@bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        req = request.json
        username = req['username']
        password = req['password']
        user = user_model.UserModel()
        user.setUser(username)
        error = None

        if user.getUserName() is None or user.getPassword() != md5(password.encode('utf-8')).hexdigest():
            error = 'Invalid username or password.'

        if error is None:
            session.clear()
            session['user_id'] = user.getUserId()

            return json.dumps({'authenticated': True, 'username': user.getUserName()})

        flash(error)

    return json.dumps({'authenticated': False, 'error': error})


@bp.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        req = request.json
        username = req['username']
        email = req['email']
        password = req['password']
        error = None

        user = user_model.UserModel()

        if user.isExist("userName", username):
            error = 'Username already taken'
        elif user.isExist("email", email):
            error = 'Email already used'
        if error is None:
            user.setUserName(username)
            user.setEmail(email)
            user.setPassword(password)
            user.insertUser()
            return json.dumps({'registered': True})

    return json.dumps({'registered': False, 'error': error})


@bp.route('/forgot_password', methods=['GET', 'POST'])
def forgot_password(): 
    req = request.json
    user = user_model.UserModel()
    user.setUser(req['username'])

    if user.getUserName() is not None:
        #forgot password procedure
        print(user.getEmail())

        return json.dumps({'userExist': True}) 

    return json.dumps({'userExist': False, 'error': 'User does not exist'})


@bp.route('/profile', methods=['GET', 'POST'])
def profile():
    user = user_model.UserModel()
    return None

