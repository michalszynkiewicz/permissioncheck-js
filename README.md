permissioncheck-js
==================

Javascript permission checking (requires underscore.js)


Usage:

var permissions = hasAny(['A', 'B']).and(hasAll(['C']))

permissions.check(['A', 'C']); // returns true
permissions.check(['A', 'B']); // returns false
