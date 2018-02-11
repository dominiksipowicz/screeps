const CREEP_ROLE = {
    harvester: 'Harvester',
    upgrader: 'Upgrader',
    builder: 'Builder'
};

var creepController = {

    checkCreepsCount: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == CREEP_ROLE.harvester);
        //console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < 4) {
            var newName = CREEP_ROLE.harvester + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: CREEP_ROLE.harvester}});
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
    }


};

module.exports = creepController;