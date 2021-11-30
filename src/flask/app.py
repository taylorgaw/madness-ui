from flask import Flask, render_template
from datetime import date
from scores import update
import json
import requests


app = Flask(__name__)

@app.route("/")
def index():
	with open('./data/schedule.json', 'r') as f:
		schedule_data = json.load(f)
	with open('./data/picks.json', 'r') as f:
		pick_data = json.load(f)
	with open('./data/losers.json', 'r') as f:
		loser_data = json.load(f)

	return render_template("index.html", picks = pick_data, losers = loser_data['losers'], schedule = schedule_data)


@app.route("/update")
def refresh():
	update()
	return "Done!"

@app.route("/health")
def heartbeat():
    return jsonify({"status": "healthy"})


if __name__ == "__main__":
	app.run(debug=True, port=8000, host='0.0.0.0')
