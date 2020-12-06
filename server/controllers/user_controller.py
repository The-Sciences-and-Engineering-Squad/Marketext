from hashlib import md5
from io import SEEK_CUR
from server.models import profile_model
from server.models import user_model
from server.models import balance_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from flask import current_app
from flask_mail import Message
from flask_mail import Mail
import json
import jwt
import datetime
from server.controllers.token import token_required


bp = Blueprint('auth', __name__, url_prefix='/auth')

# Boiler Plate Test Code


@bp.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        req = request.json
        username = req['username']
        password = req['password']
        user = user_model.UserModel()
        user.setUser(username)
        app = current_app._get_current_object()    

        if user.getUserName() is None or user.getPassword() != md5(password.encode('utf-8')).hexdigest():
            error = 'Invalid username or password.'

        if error is None:
            session.clear()
            session['userId'] = user.getUserId()
            session['username'] = user.getUserName()
            session['email'] = user.getEmail()
            token = jwt.encode({'userId': user.getUserId(), 'username': user.getUserName(), 'email': user.getEmail(), 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=50)}, app.config['SECRET_KEY'])
            return json.dumps({'authenticated': True, 'token': token.decode('UTF-8')})

        flash(error)

    return json.dumps({'authenticated': False, 'error': error})


@bp.route('/register', methods=['GET', 'POST'])
def register():
    error = None
    if request.method == 'POST':
        req = request.json
        username = req['username']
        email = req['email']
        password = req['password']
        

        user = user_model.UserModel()
        userBalance = balance_model.BalanceModel()
        userProfile = profile_model.ProfileModel()

        if user.isExist("userName", username):
            error = 'Username already taken'
        elif user.isExist("email", email):
            error = 'Email already used'
        if error is None:
            user.setUserName(username)
            user.setEmail(email)
            user.setPassword(password)
            user.insertUser()
            user.setUser(username)
            userBalance.initBalance(user.getUserId(),'USD')
            userProfile.initProfile(user.getUserId())
            return json.dumps({'registered': True})

    return json.dumps({'registered': False, 'error': error})


@bp.route('/forgot_password', methods=['GET', 'POST'])
def forgot_password(): 
    req = request.json
    user = user_model.UserModel()
    user.setUser(req['username'])
    app = current_app._get_current_object()

    if user.getUserName() is not None:
         #forgot password procedure
        random_password = user.get_random_password(16)
        user.updateField("password",random_password)
        mail = Mail(app)
        msg = Message("Password Change - Marketext",
                  recipients=[user.getEmail()])
        msg.html = "<b>\
                        \
            Hi Marketext user: " + user.getUserName() + "! <br><br> \
            Seems like you have forgotten your account password. Do not worry, though - we got you!<br><br> \
            The old password is no longer available, please use this new password you can use to log back into your account:  " + random_password + "<br><br> \
            You may use this to gain access back to your account, then change it to a new password to your liking. <br><br>\
            Hope our website continues to be of your service!<br><br> \
            - The Marketext Team\
              </b>"
       
        mail.send(msg)
        return json.dumps({'userExist': True}) 

    return json.dumps({'userExist': False, 'error': 'User does not exist'})


@bp.route('/profile', methods=['GET', 'POST'])
@token_required
def profile():
    user = user_model.UserModel()
    return None

@bp.route('/getUserName', methods=['GET', 'POST'])
def getUserName():
    req = request.json
    user = user_model.UserModel(req['userId'])
    return json.dumps({'username': user.getUserName()})