from server.models import currently_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash


bp = Blueprint('currently', __name__, url_prefix='/currently')

# Boiler Plate Test Code
@bp.route('/add',methods=['POST'])
def balance_add():
    currently = currently_model.CurrentlyModel()
    return None

@bp.route('/remove',methods=['POST'])
def balance_sub():
    currently = currently_model.CurrentlyModel()
    return None