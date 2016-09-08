#!/bin/bash

# execute this to backup mongodb's databases

echo "About to restore the database"

if [ ! -d "/db/dump/" ]; then
    echo "Nothing in /db/dump/, not doing anything . . ."
    exit 0;
fi

echo "Restoring a backup of mongodb"

mongorestore --host db --dir /db/dump/

echo "Done"
