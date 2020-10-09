from hashlib import md5
from server.models import user_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
import json

bp = Blueprint('auth', __name__, url_prefix='/auth')

# Boiler Plate Test Code
@bp.route('/login',methods=['GET', 'POST'])
def login():  
    if request.method == 'POST':
        req = request.json
        email = req['email']
        password = req['password']
        user = user_model.UserModel(email)
        error = None
        
        if user.getEmail() is None:
            error = 'Incorrect username.'
        elif user.getPassword() != md5(password.encode('utf-8')).hexdigest():
            error = 'Incorrect password.'

        if error is None:
            session.clear()
            session['user_id'] = user.getUserId()

            return json.dumps({'authenticated': True,'username': user.getUserName()})

        flash(error)
    
    return json.dumps({'authenticated': False, 'error': 'Invalid email or password'})

@bp.route('/register',methods=['GET', 'POST'])
def register():
    user = user_model.UserModel()
    return None

@bp.route('/forgot_password',methods=['GET', 'POST'])
def forgot_password():
    user = user_model.UserModel()
    return None

@bp.route('/profile',methods=['GET', 'POST'])
def profile():
    user = user_model.UserModel()
    return None
