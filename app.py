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
    
    cursor = connection.cursor(pymysql.cursors.DictCursor)
    sql = "SELECT * FROM transaction JOIN currency ON transaction.currencyid = currency.id ORDER BY transaction.id"
    cursor.execute(sql)
    results = []
    for r in cursor:
         results.append(r)
         
    cursor.close()
    
    return render_template('index.html',country=country, results=results)
    
@app.route('/', methods=["POST"])

def add_fee():

    date = request.form.get("date")
    totalfee = request.form.get("totalfee")
    gst = request.form.get("gst")
    country = request.form.get("country")
    
    cursor = connection.cursor(pymysql.cursors.DictCursor)
    sql= "INSERT INTO transaction (totalfee,gst,date,currencyid) VALUE (%s,%s,%s,%s)"
    cursor.execute(sql,[totalfee,gst,date,country])
    
    connection.commit()
    cursor.close()
    
    return redirect(url_for('index'))

# "magic code" -- boilerplate
if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)