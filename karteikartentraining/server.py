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
                files = []
                for root, _, filenames in os.walk(CARDS_DIR):
                    for f in filenames:
                        if f.endswith(".yaml"):
                            full_path = os.path.join(root, f)
                            rel_path = os.path.relpath(full_path, CARDS_DIR)
                            files.append(rel_path)

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
