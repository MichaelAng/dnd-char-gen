#!/bin/bash

# execute this to backup mongodb's databases
# this runs in the context of docker

echo "Making a backup of mongodb"

# make a temporary copy of the database dump
if [ -d "/db/dump/" ]; then
    echo "making a temporary copy of /db/dump at /db/dump/"
    mv /db/dump/ /db/.tmp/
fi

# mongodump --host db --out /db/dump/
if ! mongodump --host db --out /db/dump/ > backup-error.log 2>&1 ; then
    echo "mongodb backup failed"

    # put back old copy of the backup
    rm -rf /db/dump/
    mv .tmp/ /db/dump/

    cat backup-error.log
    exit 1
fi

echo "I think it worked?"

if [ -d "/db/.tmp/" ]; then
    echo "deleting temporary copy of database"
    rm -rf /db/.tmp/
fi
