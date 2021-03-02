import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template, jsonify
import pandas as pd

####################
# flask setup
####################
app = Flask(__name__)

####################
# flask routes
####################


@app.route("/recommender")
def recommend():
     return render_template('recommender.html')


if __name__ == "__main__":
    app.run(debug=True)