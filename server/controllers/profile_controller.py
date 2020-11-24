from hashlib import md5
from io import SEEK_CUR
from random import getstate

from server.models import user_model
from server.models import profile_model
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


bp = Blueprint('profile', __name__, url_prefix='/profile')

# Boiler Plate Test Code
@bp.route('/update', methods=['GET', 'POST'])
@token_required
def updateProfile():
    userProfile = profile_model.ProfileModel(session['userId'])
    user = user_model.UserModel(session['userId'])
    req = request.json
    if md5(req['Password'].encode('utf-8')).hexdigest() == user.getPassword():
        if req['firstName'] != userProfile.getFirstName():
            userProfile.updateField('firstName',req['firstName'])

        if req['lastName'] != userProfile.getLastName():
            userProfile.updateField('lastName',req['lastName'])

        if req['phoneNumber'] != userProfile.getPhoneNumber():
            userProfile.updateField('phoneNumber',req['phoneNumber'])

        if req['address'] != userProfile.getStreet():
            userProfile.updateField('street',req['address'])

        if req['city'] != userProfile.getCity():
            userProfile.updateField('city',req['city'])

        if req['state'] != userProfile.getState():
            userProfile.updateField('state',req['state'])

        if req['zipcode'] != userProfile.getZipCode():
            userProfile.updateField('zipCode',req['zipcode'])

        if req['newPassword']:
            user.updateField('password',req['newPassword'])

        return json.dumps({'error': 'Updated'})

    return json.dumps({'error': 'Current Password is Incorrect'})

@bp.route('/getProfile',methods=['GET', 'POST'])
@token_required
def getProfile():
    userProfile = profile_model.ProfileModel(session['userId'])
    profile = {'firstName': userProfile.getFirstName(),'lastName': userProfile.getLastName(), 'phoneNumber':userProfile.getPhoneNumber(), 'street': userProfile.getStreet(), 'city': userProfile.getCity(),'state': userProfile.getState(), 'country': userProfile.getCountry(), 'zipCode': userProfile.getZipCode()}
    return json.dumps({'profile': profile})