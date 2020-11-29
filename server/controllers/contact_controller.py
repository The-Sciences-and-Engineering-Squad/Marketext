from hashlib import md5
from io import SEEK_CUR
from random import getstate

from server.models import currently_model
from server.models import contact_model
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


bp = Blueprint('messages', __name__, url_prefix='/messages')

# Boiler Plate Test Code
@bp.route('/contact', methods=['GET', 'POST'])
def initContact():
  req = request.json
  contact = contact_model.ContactModel()
  print(req['ISBN'])
  if session['userId']:
    contact.initContact(session['userId'],req['userTwoId'],req['listedId'])
    return json.dumps({'Login': True})

  return json.dumps({'Login': False, 'error': 'Please log in'})

@bp.route('/contactList',methods=['GET', 'POST'])
def showListing():
    contact = contact_model.ContactModel()
    currentlyListed = currently_model.CurrentlyModel()
    req = request.json
    print(contact.showContact(session['userId'])[0])
    contactList = contact.showContact(session['userId'])
    for i in range(len(contactList)):
        listedId = contactList[i]['listedId']
        print(listedId)
        price = currentlyListed.getOneListing(listedId)['price']
        category = currentlyListed.getOneListing(listedId)['category']
        ISBN = currentlyListed.getOneListing(listedId)['ISBN']
        print(ISBN)
        contactList[i]['price'] = price
        contactList[i]['category'] = category
        contactList[i]['ISBN'] = ISBN
    return json.dumps({'contactList': contactList})