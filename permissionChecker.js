function PermissionChecker(checkFunction) {
  this.check = function(userRoles) {
    return checkFunction(userRoles);
  }
  this.and = function(other) {
    var newEval = function(userRoles) {
      return checkFunction(userRoles) && other.check(userRoles);
    }
    return new PermissionChecker(newEval);
  }
  
  this.or = function(other) {
    var newEval = function(userRoles) {
      return check(userRoles) || other.check(userRoles);
    }
    return new PermissionChecker(newEval);
  }
}
 
 
function hasAll(requiredRoles) {
  return new PermissionChecker(function(userRoles) {
    return _.intersection([requiredRoles, userRoles]).length == requiredRoles.length;
  });
}
 
function hasAny(requiredRoles) {
  return new PermissionChecker(function(userRoles) {
    return _.intersection([requiredRoles, userRoles]).length > 0;
  });
}
