var server = require('./server');
var ds = server.dataSources.mysql;
var lbTables = ['AccessToken', 'ACL', 'RoleMapping', 'Role', 'user', 'idh-project'];
ds.automigrate(lbTables, function(er) {
    if (er) throw er;
    console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
    ds.disconnect();
});