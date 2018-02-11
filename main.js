var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepController = require('creep.controller');

const CREEP_ROLE = {
    harvester: 'Harvester',
    upgrader: 'Upgrader',
    builder: 'Builder'
};

module.exports.loop = function () {

    creepController.checkCreepsCount();
    creepController.visualizaCreepSpawning();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        switch(creep.memory.role) {
            case CREEP_ROLE.harvester: roleHarvester.run(creep); break;
            case CREEP_ROLE.upgrader: roleUpgrader.run(creep); break;
            case CREEP_ROLE.builder: roleBuilder.run(creep); break;
        }
    }
};

