# Heckplate

Full-stack server and client **Proof of Concept** implementation for real-time communication via sockets. The backend is served as a Python Flask, while the client side is done via Node + Angular (TypeScript).

Usage
----
```
# Terminal 1
$ pip3 install -r server/requirements.txt
$ python3 server/main.py

# Terminal 2
$ cd client
$ npm install
$ npm start
```

Inspect
----
The server side is randomly going to open socket connection and send some data. You can inspect the data changes in real-time on [http://localhost:8080/realtime](http://localhost:8080/realtime).

License
----
MIT
