# coding: utf-8
import sys
import os

# import websockets
from geventwebsocket.handler import WebSocketHandler
from gevent.pywsgi import WSGIServer
import gevent

# import flask
from flask import Flask, jsonify, request, render_template, send_from_directory
import random

# define app
app = Flask(__name__)
MIN_DELAY, MAX_DELAY = 1, 3

# ====================
# define routes
@app.route('/api', methods=['GET'])
def get_tasks():
    return jsonify({'api': "works"})

# ============= WEBSOCKET
@app.route("/updated")
def updated():
    """
    Notify the client that an update is ready. Contacted by the client to
    'subscribe' to the notification service.
    """
    ws = request.environ.get('wsgi.websocket')
    if ws:
        while True:
            delay = random.randint(MIN_DELAY, MAX_DELAY)
            gevent.sleep(delay)
            ws.send(str(delay))
    else:
        raise RuntimeError("Environment lacks WSGI WebSocket support")

# ==== DEFINE RELOADER
if __name__ == "__main__":
    print("Serving on port: 5000")
    http_server = WSGIServer(('', 5000), app, handler_class=WebSocketHandler)
    http_server.serve_forever()