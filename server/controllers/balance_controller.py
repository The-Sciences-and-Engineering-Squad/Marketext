from server.models import balance_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash


bp = Blueprint('balance', __name__, url_prefix='/balance')

# Boiler Plate Test Code
@bp.route('/add',methods=['POST'])
def balance_add():
    balance = balance_model.BalanceModel()
    return None

@bp.route('/sub',methods=['POST'])
def balance_sub():
    balance = balance_model.BalanceModel()
    return None

