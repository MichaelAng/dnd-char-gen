#!/bin/bash

# execute this to backup mongodb's databases

if [ ! -d "/db/dump/" ]; then
    echo "Nothing in /db/dump/, not doing anything . . ."
    exit 0;
fi

echo "Restoring a backup of mongodb"

if ! mongorestore --host db --dir /db/dump/ > restore-error.log 2>&1 ; then
    echo "mongodb restore failed"
    cat restore-error.log
    exit 1
fi
