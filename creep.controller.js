const CREEP_ROLE = {
    harvester: 'Harvester',
    upgrader: 'Upgrader',
    builder: 'Builder'
};

var creepController = {

    checkCreepsCount: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.harvester);
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.builder);
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.upgrader);

        if (harvesters.length < 2) {
            creepController.createCreep(CREEP_ROLE.harvester);
        } else {
            if (upgraders < 2) {
                creepController.createCreep(CREEP_ROLE.upgrader);
            }
            if (builders < 2) {
                creepController.createCreep(CREEP_ROLE.builder);
            } else {
                if (harvesters.length < 4) {
                    creepController.createCreep(CREEP_ROLE.harvester);
                } else {
                    if (upgraders < 5) {
                        creepController.createCreep(CREEP_ROLE.upgrader);
                    }
                }
            }
        }
    },

    visualizaCreepSpawning: function () {
        if(Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    },

    createCreep: function (type) {
        var newName = type + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: type}});
    }


};

module.exports = creepController;