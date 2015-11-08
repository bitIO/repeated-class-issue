Steps to reproduce:

* clone the repo
* start the app
* make sure the render process goes through `DiffingAttributeHandler`
* stop there under condition `value == "ui two column computer one column mobile grid container"``
* check final value passed to `setValue` method has one less element
