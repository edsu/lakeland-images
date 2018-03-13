#!/usr/bin/env python3

import os
import csv
import sys
import json

# massage the js used by the static app into json
js_file = os.path.join(os.path.dirname(__file__), '..', 'static', 'data.js')
json_data = open(js_file).read().replace('var DATA=', '')

# read in all the items
items = json.loads(json_data)['items']

# determine the column names for the csv
fieldnames = set(['url'])
for item in items:
    for k in item.keys():
        fieldnames.add(k)

# write out the csv
writer = csv.DictWriter(sys.stdout, fieldnames=fieldnames) 
writer.writeheader()
for item in items:
    item['url'] = 'https://raw.githubusercontent.com/edsu/lakeland-images/master/static/%s/original.jpg' % item['id']
    writer.writerow(item)
