from flask import Flask, render_template, request, redirect, url_for
import os
import pymysql

connection = pymysql.connect(
    host='localhost',
    user="admin", 
    password="password", 
    database="fee_submission"
)

app = Flask(__name__)

@app.route('/')

def index():

    cursor = connection.cursor(pymysql.cursors.DictCursor)
    sql = "SELECT * FROM currency"
    cursor.execute(sql)
    country = []
    for r in cursor:
        country.append({
            'id' : r['id'],
            'country': r['country']
        })
    cursor.close()
    
    return render_template('index.html',country=country)

# "magic code" -- boilerplate
if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)