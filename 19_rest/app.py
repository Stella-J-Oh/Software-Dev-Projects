'''
Team COIS (Stella Oh + Ian Chen-Adamczyk)
SoftDev
K19 -- A RESTful Journey Skyward
2021-04-05
'''

from flask import Flask, render_template
import urllib.request
import json

app = Flask(__name__)

@app.route("/")
def root():
    u = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=QIi25sgr9icgfLI5qt4WinQ7opSZcDoXi2Lkgl2p")
    response = u.read()
    data = json.loads(response)
    return render_template("main.html", pic = data['url'])

if __name__ == "__main__": 
    app.debug = True
    app.run()