Angular-JS geeknight
===
Demo code used for my Angular Geeknight.

Getting started
--
Make sure you already have [git](http://git-scm.org) and [Vagrant](http://vagrantup.com) installed.

```
$ git clone https://github.com/mwl/geeknight-angularjs --recursive
$ cd geeknight-angularjs
$ vagrant up
```

This will clone the angular repository and boot up a Vagrant image with the application deployed. If the above went well you can now open [http://192.168.33.10/](http://192.168.33.10/) in your favourite browser.

Closing down
---
When done playing you proably don't want to have a VM running in the background. To shutdown the machine simply fire off

```
$ vagrant destroy
```
You can always boot up the machine again with

```
$ vagrant up
```