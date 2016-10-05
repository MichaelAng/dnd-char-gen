# The DND project
A basic dnd application built on angular 2.

All of the angular code lives in the `client/` folder and all the server code lives in the `api/` folder.

## Getting started

To start development

1. Build the virtual machine (vm) with `docker-machine` (only do this once)
```
docker-machine create -d virtualbox --virtualbox-disk-size 100000 --virtualbox-cpu-count 4 --virtualbox-memory 4096 dnd
```

2. Start your dnd vm and set the docker environment variables with `docker-machine`
```
docker-machine start dnd && eval $(docker-machine env dnd)
```

3. Build and run your containers with `docker-compose`
```
docker-compose build && docker-compose up -d
```

3. Check the status of your containers with `docker-compose`
```
docker-compose ps
```

## Help

Read the project [wiki](https://github.com/MichaelAng/dnd-char-gen/wiki)

Read the angular client application [readme](client/README.md)

Read the REST API's [readme](api/README.md)

Read the [change log](CHANGELOG.md)

Read how to backup and restore the database in the [wiki](https://github.com/MichaelAng/dnd-char-gen/wiki/Database-restore-and-backup)
