from flask import Flask 
from flask.helpers import send_file
import os


app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get('SECRET_KEY')

@app.route('/')
def index():
  return send_file('frontend/dist/index.html')