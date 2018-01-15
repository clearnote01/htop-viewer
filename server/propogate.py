import shutil
import subprocess
import os

# steps
# 1. build a new bundle.js by running webpack
# 2. copy the current build/bundle.js to static/
# 3. copy the current index.html to templates/
# 4. replace path of script to static/bundle.js


subprocess.call('cd ../ && npm run build',shell=True)
shutil.copy('../build/bundle.js','static/')
shutil.copy('../index.html','templates/')

with open('templates/index.html','r') as f:
    data = f.read()

data = data.replace('build/bundle.js','static/bundle.js')

with open('templates/index.html','w') as f:
    f.write(data)
