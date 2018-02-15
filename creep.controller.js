const CREEP_ROLE = {
    harvester: 'Harvester',
    upgrader: 'Upgrader',
    builder: 'Builder'
};

const creepController = {

    checkCreepsCount: function() {
        const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.harvester);
        const builders = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.builder);
        const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.upgrader);

        if (harvesters.length < 3) {
            creepController.createCreep(CREEP_ROLE.harvester);
        } else if (upgraders.length < 3) {
            creepController.createCreep(CREEP_ROLE.upgrader);
        } else if (builders.length < 3) {
            creepController.createCreep(CREEP_ROLE.builder);
        } else if (harvesters.length < 5) {
            creepController.createCreep(CREEP_ROLE.harvester);
        } else if (upgraders.length < 4) {
            creepController.createCreep(CREEP_ROLE.upgrader);
        }
    },

    visualizaCreepSpawning: function () {
        if(Game.spawns['Spawn1'].spawning) {
            const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    },

    createCreep: function (type) {
        const newName = type + Game.time;
        console.log('Spawning new ' + type + ': ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: type}});
    }


};

module.exports = creepController;