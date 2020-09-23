from server.models import user_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash


bp = Blueprint('auth', __name__, url_prefix='/auth')

# Boiler Plate Test Code
@bp.route('/login',methods=['POST'])
def login():
    user = user_model.UserModel()
    return None

@bp.route('/register',methods=['POST'])
def register():
    user = user_model.UserModel()
    return None

@bp.route('/forgot_password',methods=['POST'])
def forgot_password():
    user = user_model.UserModel()
    return None

@bp.route('/profile',methods=['POST'])
def profile():
    user = user_model.UserModel()
    return None
