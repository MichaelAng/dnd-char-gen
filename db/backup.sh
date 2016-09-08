#!/bin/bash

# execute this to backup mongodb's databases
# this runs in the context of docker

echo "Making a backup of mongodb"

# make a temporary copy of the database dump
if [ -d "/db/dump/" ]; then
    # echo "Making a temporary copy of /db/dump at /db/dump/"
    mv /db/dump/ /db/temp/
fi

mongodump --host db --out /db/dump/

if [ -d "/db/temp/" ]; then
    # echo "Deleting temporary copy of database"
    rm -rf /db/temp/
fi

echo "Done"
