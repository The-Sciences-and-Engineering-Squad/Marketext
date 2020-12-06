from flask import (jsonify,request,current_app)
import jwt
from functools import wraps


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        if request.data:
            req = request.json
            token = req['token']
            app = current_app._get_current_object() 

        if not token:
            return jsonify({'message': 'Token is missing!'}), 403

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'message': 'Token is invalid'}), 403

        return f(*args, **kwargs)

    return decorated