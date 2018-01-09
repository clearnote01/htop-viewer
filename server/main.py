from flask import Flask
from flask_cors import CORS, cross_origin
from subprocess import call
app = Flask(__name__)

@app.route('/api/htop')
def htop_getter():
    print('got a calll')
    with open('test.html','w') as f:
        call('echo q | htop | aha --black --line-fix', shell=True, stdout=f)
    with open('test.html','r') as f:
        data = f.read()
        data = data.replace('color:black','color:white')
    return data 

@app.route('/api/psauxf')
def ls_getter():
    print('got a calll')
    with open('test1.html','w') as f:
        call('ps auxf | aha --black --line-fix', shell=True, stdout=f)
    with open('test1.html','r') as f:
        data = f.read()
        data = data.replace('color:black','color:white')
    return data 

@app.route('/api/ls')
def ps_getter():
    print('got a calll')
    with open('test2.html','w') as f:
        call('ls | aha --black --line-fix', shell=True, stdout=f)
    with open('test2.html','r') as f:
        data = f.read()
        data = data.replace('color:black','color:white')
    print(data[:100])
    return data 

CORS(app)
if __name__ == '__main__':
  app.run(debug=True)
