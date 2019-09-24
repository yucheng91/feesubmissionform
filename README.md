# Fees Submission Page

_Developed By Yu Cheng_

## Index
1. Introduction
2. UI/UX
3. Technologies Used
4. Features
5. Testing
6. Deployment
7. Credit

## Introduction
A simple page where users can enter a fees and depend on the countries it'll show the result in the table below in its current & GST (if applicable)

## UI/UX 
### Design
- Bootstrap is used in the development of the site as it provides a framework for a mobile responsive site. Buttons & table are all based on the same Bootstrap framework to ensure consistency in design.

### User Stories
- _As the user, I would like to have the breakdown of every information at first glance in the website_

### Wireframe
_Please refer to wireframe folder_

## Technologies Used
1. HTML/CSS
2. Bootstrap
3. Flask
4. MySQL & PhpMyAdmin
5. Google Fonts (for consistency of font in the different platform)

## Features
- Main page : fees submission & history shown below once submitted
- Total amount will be shown in History table in their own respective currency symbol
- Date : only selectable for 2019
- Country : GST applicable for Singapore
- Fee : only number input, negative number not allowed

## Testing
- Testing on Macbook Air & Windows laptop, Google Chrome inspect function has been used to test the mobile responsive of the components.
- During initial testing, I found out that the float are always shown for more than 2 decimal point hence I used javascript to ensure the decimal point will be fixed to 0.01 point.
- As the javascript function are activated by onkeyup in the 'fee' input, I have switched the position of Country & Fee from the given wireframe to ensure that the fees are updated exactly based on the country selected.

## Deployment
The website has been developed on AWS Cloud9 and push to Github. Should you want to deploy it as a sharable link. The best approach is to use Heroku & ClearDB.

The deployment of the website are as following methods:
- install Heroku via command ```sudo snap install --classic heroku```
- Login through bash ```heroku login -i```
- Create the app (deployment repo on heroku) through ```heroku create <app_name>```
- followed by ```git remote -v```
- Install gunicorn via ```pip3 install gunicorn```
- Created file called Procfile under root of the folder and add this line ```web gunicorn <python file without .py>:app```
- Create requirements file with ```pip3 freeze --local > requirement.txt```
- followed by ```git add```, ```git commit -m "<message>"``` and ```git push heroku master``` to push it to heroku site

Database from MySQL has been downloaded and imported to ClearDB as MYSQL is not supported natively on Heroku. User can use ClearDB MySQL directly as an Add-on in Heroku and connect it via SQL client such as Dbeaver and add field based on MySQL syntax.
The method of linking MySQL to ClearDB are as following:
- install ClearDB ```heroku addons:create cleardb:ignite``` (take note that ignite is the only free tier for ClearDB)
- perform ```heroku config``` to get the string consists of all the host/user/password/url for ClearDB
- The string will then be breakdown to the following: 
```
The syntax is mysql://<clear_db_user>:<clear_db_password>@<clear_db_host>/<reconnect_url> ?reconnect = true
Example: mysql://b80f8d428xxxxx:f48exxxx@us-cdbr-iron-east-02.cleardb.net/heroku_586 32fb6debxxxx?reconnect=true

# clear_db_host will be: us-cdbr-iron-east-02.cleardb.net 
# clear_db_user will be: B80f8d428xxxxx
# clear_db_password will be: F48exxxx
# reconnect URL will be: heroku_58632fb6debxxxx
```
- ```sudo mysqldump -uroot your_database_name_here > database.sql``` to generate a database in the system and name it database.sql
- Proceed to .bashrc (shown hidden file), and key in the following ``` export CLEARDB_DATABASE_URL="<your ClearDB string which you get when you type in heroku config at the CLI>"```
- Save and restart all terminals
- In app.py, proceed to add the following after last import:
```
import urllib.parse
from urllib.parse import urlparse
urllib.parse.uses_netloc.append('mysql')
```
- Replace the original pymysql.connect to the following so that it will connect to ClearDB directly:
```
url = urlparse(os.environ['CLEARDB_DATABASE_URL') name = url.path[1:]
user = url.username
password= url.password
host = url.hostname
port= url.port
def connect():
    connection = pymysql.connect(
        host=host,
        user=user,
        password=password,
        port=port,
        database=name
    )
    return connection)
```
- Take note to input ```connection = connect()``` and ```connection.close()``` under the app.route in app.py to prevent timeout error in Heroku deployment, example
```
@app.route('/')
def viewall():
    connection = connect()
         
    cursor.close()
    connection.close()
    return render_template('index.html')
```

## Credit

Popularchips.com for color & fonts inspiration
Github (https://gist.github.com/voskobovich/43f851859c23a8261514) for full countries & currency list for mysql
