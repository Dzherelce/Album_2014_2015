Album_2014_2015
===============

Фото альбом школи за 2014/15 навчальний рік


# Setup

## Install git, ruby

- Depending on your OS
- Use either RVM or rbenv

## Fork  and clone repository

    git clone git@github.com:Dzherelce/Album_2014_2015.git

## Install gems

    bundle install

## Setup build directory

    git clone -b gh-pages git@github.com:Dzherelce/Album_2014_2015.git build

## Preview

    middleman

## Build and push

    middleman build
    cd build
    git push origin gh-pages
