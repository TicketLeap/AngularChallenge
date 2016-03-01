'use strict';

angular.module('sherlock.version', [
  'sherlock.version.interpolate-filter',
  'sherlock.version.version-directive'
])

.value('version', '0.1');
