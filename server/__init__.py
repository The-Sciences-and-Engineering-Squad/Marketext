import os

from flask import Flask


def create_app():
    # create and configure the app
    app = Flask(__name__)
   
    # a simple test run
    @app.route('/hello',methods=['GET'])
    def hello():
        return {
            'userId':1
        }

    return app