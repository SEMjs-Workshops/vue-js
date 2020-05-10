#!/bin/bash

LAB_NAME=$1

if [ -z $LAB_NAME ]; then
    echo "ERROR: Lab name not specified"
    exit 1
fi

./node_modules/.bin/vue-cli-service serve src/$LAB_NAME/start/main.js
