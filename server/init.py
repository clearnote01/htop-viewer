import main
from flask import render_template, url_for

@main.app.route('/')
def home_page():
    url_for('static',filename='bundle.js')
    return render_template('index.html')

main.app.run(debug=True)

print('Running server')
