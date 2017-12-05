const config={
  "svg_id": "radar",
	"width": 1450,
	"height": 1000,
	"colors": {
		"background": "#fff",
		"grid": "#bbb",
		"inactive": "#ddd"
	},
	"title": "Sapient Razorfish Tech Radar",
	"quadrants": [{
			"name": "Languages"
		},
		{
			"name": "Infrastructure"
		},
		{
			"name": "Frameworks"
		},
		{
			"name": "Data Management"
		}
	],
	"rings": [{
			"name": "ADOPT",
			"color": "#93c47d"
		},
		{
			"name": "TRIAL",
			"color": "#93d2c2"
		},
		{
			"name": "ASSESS",
			"color": "#fbdb84"
		},
		{
			"name": "HOLD",
			"color": "#efafa9"
		}
	],
	"print_layout": true,
	// zoomed_quadrant: 0,
	"entries": [
		{
			"quadrant": 3,
			"ring": 0,
			"label": "AWS EMR",
			"active": false,
    }
  ]

}
radar_visualization(config);