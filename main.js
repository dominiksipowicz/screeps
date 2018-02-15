const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const creepController = require('creep.controller');

const CREEP_ROLE = {
    harvester: 'Harvester',
    upgrader: 'Upgrader',
    builder: 'Builder'
};

module.exports.loop = function () {

    let roomName = Game.spawns['Spawn1'].room.name;

    creepController.checkCreepsCount();
    creepController.visualizaCreepSpawning();

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        switch(creep.memory.role) {
            case CREEP_ROLE.harvester: roleHarvester.run(creep); break;
            case CREEP_ROLE.upgrader: roleUpgrader.run(creep); break;
            case CREEP_ROLE.builder: roleBuilder.run(creep); break;
        }
    }
};

