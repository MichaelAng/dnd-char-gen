#!/bin/bash

# execute this to backup mongodb's databases

echo "Restoring a backup of mongodb"

if [ ! -d "/db/dump/" ]; then
    echo "Nothing in /db/dump/, not doing anything . . ."
    exit 0;
fi

mongorestore --host db --dir /db/dump/

echo "Done"
