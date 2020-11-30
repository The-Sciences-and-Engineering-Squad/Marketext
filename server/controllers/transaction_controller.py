from server.models import transaction_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from server.controllers.token import token_required
import json
bp = Blueprint('transaction', __name__, url_prefix='/transaction')

# Boiler Plate Test Code
@bp.route('/add',methods=['GET', 'POST'])
def addTransaction():
   
    if request.method == 'POST':
        transaction = transaction_model.TransactionModel(session['userId'])
        req = request.json        
        transaction.addTransaction(req['price'],req['category'],req['ISBN'],req['userOneId'],req['userTwoId'])
        return json.dumps({'Added': True})

    return json.dumps({'Added': False})

@bp.route('/showList',methods=['GET', 'POST'])
def showTransaction():
    transaction = transaction_model.TransactionModel(session['userId'])
    req = request.json
    print(transaction.getTransaction(session['userId']))
    return json.dumps({'transactionList': transaction.getTransaction(session['userId'])})