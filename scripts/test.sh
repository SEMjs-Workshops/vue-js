#!/bin/bash

LAB_NAME=$1

if [ -z $LAB_NAME ]; then
    echo "ERROR: Lab name not specified"
    exit 1
fi

./node_modules/.bin/jest --watch $LAB_NAME/start
