Instructions for starting the backend.

## Important Prerequisites
- Python 3
- MySQL
- Visual Studios

## Steps to starting the backend

### Step 1
Install all the require dependencies:
Make sure you are in the server folder before running this command!

`pip install -r requirements.txt`

### Step 2

Create a .env file outside the server folder.
In that .env file, paste the following text:

FLASK_APP=server<br/>
FLASK_ENV=development

### Step 3

Head over to the client folder and run:

`npm run dev`

### Step 4

Using any browser, visit the following url to check if it is working:

[http://127.0.0.1:5000/auth/login](http://127.0.0.1:5000/auth/login)

It should be display some sort of text.

## Concerns For Windows Only

### Getting Errors Using `pip`

Make sure you have an environment set up by following<br/>
[https://flask.palletsprojects.com/en/1.1.x/installation/](https://flask.palletsprojects.com/en/1.1.x/installation/)

### Getting Errors in Step 1

- If you are getting errors stating:<br/>
`Running setup.py install for mysqlclient ... error`<br/>
Check your Python 3, Visual Studios, MySQL (the things that are downloaded in the installer), make sure they are all the correct bits (32-bits, 64-bits) as each other.
- If that is not the issue, you could manually install mysqlclient by running:<br/>
`pip install mysqlclient`<br/>
- If you have an issue with that, you can download an alternative version of mysqlclient by heading over to <br/>
[https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient](https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient)<br/>
download one of the files at a time and run<br/>
`pip install [Name of Downloaded File]`<br/>
until one of them works.
- If you are still getting an issue, delete line 7 (mysqlclient) in the init.py file.
Run the command again:<br/>
`pip install -r requirements.txt`<br/>
This would install the other dependencies, skipping over mysqlclient.
You could now proceed to Step 2. Just make sure to put back line 7 (mysqlclient) in the init.py file.

### Getting Errors in Step 3

Make sure you have the MySQL server open.<br/>
If you are getting errors stating:<br/>
`ModuleNotFoundError: No module named 'MySQLdb'`<br/>
You might need to reinstall another Python 3 version.
Since Flask-MySQLdb might not be compatiable with what you are using.
[https://stackoverflow.com/questions/57130527/getting-flask-fail-to-import-error-for-flask-mysqldb-when-the-module-is-already](https://stackoverflow.com/questions/57130527/getting-flask-fail-to-import-error-for-flask-mysqldb-when-the-module-is-already)


## Steps to set up the Database 
### Step 1

Create a .env file inside the server folder.

### Step 2
Make sure to change the value of these variables to the credentials of your database!<br/>
In that .env file, paste the following text:<br/>


MYSQL_USER=Your database username<br/>
MYSQL_PASSWORD=Your database password<br/>
MYSQL_HOST=localhost<br/>
MYSQL_DB=Your Database name<br/>

# Steps to create the database and tables needed

### Option One
If you are accesing MySql via terminal run the following script
Make sure to change the path to the corresponding path of where the database.sql live

SOURCE PATH/database.sql

### Option two
If you are using MySql workbechn them there are two ways of running the script

1. File -> Open SQL Script: This simply loads the file contents into a new SQL query tab in the SQL editor. From here, execute the query exactly like you would if you typed it in.

2. File -> Run SQL Script: This opens the SQL script in its own "Run SQL Script" wizard that includes a [Run] button to execute the query. This only displays part of the query, but does allow the user to override the selected schema and character set. Note: This feature was added in Workbench 6.2.