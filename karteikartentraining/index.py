import http.server
import socketserver
import os
import json

PORT = 8000
CARDS_DIR = "cards"

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/cards":
            try:
                files = [f for f in os.listdir(CARDS_DIR) if f.endswith(".yaml")]
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(files).encode())
            except Exception as e:
                self.send_error(500, str(e))
        else:
            super().do_GET()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server läuft auf http://localhost:{PORT}")
    httpd.serve_forever()
