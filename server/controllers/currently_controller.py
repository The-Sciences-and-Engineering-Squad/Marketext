from server.models import currently_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from server.controllers.token import token_required
import json
bp = Blueprint('currently', __name__, url_prefix='/currently')

# Boiler Plate Test Code
@bp.route('/add',methods=['GET', 'POST'])
@token_required
def addBook():
    error = None
    if request.method == 'POST':
        currently = currently_model.CurrentlyModel(session['userId'])
        req = request.json

        if currently.isExist(req['ISBN'],req['category']):
            error = 'Listing already exist'
      
        if error is None:
            currently.setISBN(req['ISBN'])
            currently.setPrice(req['price'])
            currently.setCondition(req['condition'])
            currently.setCategory(req['category'])
            currently.setAdditional(req['additionalInformation'])
            currently.addListing()
            return json.dumps({'Added': True})

    return json.dumps({'Added': False, 'error': error})

@bp.route('/remove',methods=['GET', 'POST'])
@token_required
def removeBook():
    currently = currently_model.CurrentlyModel()
    return None

@bp.route('/userList',methods=['GET', 'POST'])
@token_required
def userList():
    currently = currently_model.CurrentlyModel(session['userId'])

    return json.dumps({'books': currently.userList()})

@bp.route('/showList',methods=['GET', 'POST'])
def showListing():
    currently = currently_model.CurrentlyModel()
    req = request.json
    print(currently.showListing(req['ISBN'],req['page']))
    return json.dumps({'booksListed': currently.showListing(req['ISBN'],req['page'])})

