from server.models import balance_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
import json
from server.controllers.token import token_required

bp = Blueprint('balance', __name__, url_prefix='/balance')



# Boiler Plate Test Code
@bp.route('/add',methods=['GET', 'POST'])
@token_required
def balance_add():
    req = request.json
    balance = balance_model.BalanceModel(session['userId'])
    balance.addBalance(req['addBalance'])
    return json.dumps({'newBalance': balance.getBalance()})

@bp.route('/sub',methods=['GET', 'POST'])
@token_required
def balance_sub():
    req = request.json
    balance = balance_model.BalanceModel(session['userId'])
    balance.subBalance(req['subtractBalance'])
    return json.dumps({'newBalance': balance.getBalance()})

@bp.route('/getBalance',methods=['GET', 'POST'])
@token_required
def getBalance():
    balance = balance_model.BalanceModel(session['userId'])
    return json.dumps({'balance': balance.getBalance()})
