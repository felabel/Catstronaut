# Catstronauts - server

The starting point of the `server` code for Odyssey Lift-off I course.

Steps I took to set it up

1. Installed dependencies
2. setup schema
3. start up server
4. defined mocked data

To add a new API

1. Define it in the track-api.js file
2. Then add it in the resolver

A resolver function populates the data for a
field

in your schema. The function has four parameters. The first,
parent

, contains the returned data of the previous function in the
resolver chain

. The second, args, is an object that contains all the
arguments

provided to the field. We use the third parameter,
contextValue

, to access
data sources

such as a database or REST API. Finally, the fourth parameter,
info

, contains informational properties about the operation state.
