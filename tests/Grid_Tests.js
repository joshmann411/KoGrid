﻿/// <reference path="qunit/qunit.js" />
/// <reference path="../lib/jquery-1.7.js" />
/// <reference path="../lib/knockout-2.0.0.debug.js" />
/// <reference path="../koGrid.debug.js" />

module("Grid Tests");

test("Basic Grid Test", function () {

    var data = ko.observableArray([{ prop1: 'test1', prop2: 'test2'}]);

    var grid = new kg.KoGrid({
        data: data,
        autogenerateColumns: true
    });

    ok(grid, 'Grid Instantiated!');
    equals(grid.columns().length, 4, 'Autogenerated 2 Columns'); //4 columns bc of RowIndex and Selected

});