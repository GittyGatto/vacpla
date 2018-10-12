#!/bin/bash

message="build_`date +%F_%H:%M:%S:%N`"

mvn clean install &&
cp -v ./webapp/target/vacpla-webapp.war ../vacplaDemo/. &&
cd ../vacplaDemo/ &&
git add -A &&
git commit -m $message &&
git push heroku master &&
echo "Heroku master pushed, Sir. What a beautiful day!"
