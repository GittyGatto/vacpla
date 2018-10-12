#!/bin/bash

docker run --rm \
	--env POSTGRES_USER=vacpla \
	--env POSTGRES_PASSWORD=asdfasdf \
	--env POSTGRES_DB=vacpla \
	-p 15234:5432 \
	postgres:9.6
