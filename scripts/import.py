#!/usr/bin/env python

# A hackish script to extract images and their metadata from a snapshot
# of the Lakeland Omeka data at s3://mith-lakeland-data
#
# You need to first get the data:
#
#    cd /Volumes/ed/Data
#    aws s3 sync s3://mith-lakeland-data
#
# and then run this script:
#
#    scripts/import.py /Volumes/ed/Data/mith-lakeland-data
#
# resulting metadata and image files will be written to the static dir
# in the project directory

import os
import sys
import json

from shutil import copyfile
from collections import Counter
from os.path import join, isdir, dirname

data_dir = sys.argv[1]
output_dir =  join(dirname(__file__), '../static')

if not os.path.isdir(output_dir):
    os.mkdir(output_dir)

items = []

def metadata(item):
    m = {
        'id': item['id'],
        'created': item['added'],
        'published': item.get('public', False)
    }
    for et in item['element_texts']:
        name = et['element']['name'].lower().replace(' ', '_')
        m[name] = et['text']
    return m

def copy_files(path, item):
    files_dir = join(path, 'files')
    if not isdir(files_dir):
        return False
    file_id = os.listdir(files_dir)[0]
    file_path = join(files_dir, file_id)
    if isdir(file_path):
        files = os.listdir(file_path)
        if 'fullsize.jpg' in files:
            dest = join(output_dir, str(item['id']))
            if not isdir(dest):
                os.mkdir(dest)
            for file in files:
                copyfile(join(file_path, file), join(dest, file))
            return True
    return False

collections = {}
counts = Counter()

for dirpath, dirnames, filenames in os.walk(data_dir):
    for filename in filenames:
        if filename == 'collection.json':
            coll = json.load(open(join(dirpath, filename)))
            collections[coll['id']] = metadata(coll)['title']
        if filename == 'item.json':
            item = json.load(open(join(dirpath, filename)))
            if not item or item['item_type'] == None:
                continue
            if item['item_type']['name'] != 'Still Image':
                continue
            found = copy_files(dirpath, item)
            if found:
                coll_id = item['collection']['id']
                coll_name = collections[coll_id]
                counts.update([coll_name])
                m = metadata(item)
                m['collection'] = coll_name
                items.append(m)

colls = counts.most_common(10)

js = 'var DATA={items: %s, collections: %s};' % (
    json.dumps(items, indent=2), 
    json.dumps(colls, indent=2)
)

open(join(output_dir, 'data.js'), 'w').write(js)
