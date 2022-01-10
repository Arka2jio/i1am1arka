'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallax = function () {
    function Parallax(game) {

        _classCallCheck(this, Parallax);
        this.game = game;

        // RailPiece Type Lookup
        this.RailPieceType = {};
        this.RailPieceType['STATION'] = 'RailwayStation';
        this.RailPieceType['RAIL'] = 'Rail';
        this.RailPieceType['ENGINE'] = 'Engine';
        this.RailPieceType['COACH'] = 'Coach';

        // RoadType Lookup
        this.RoadType = {};
        this.RoadType['TAR_ROAD'] = 'TarRoad';
        this.RoadType['MUD_ROAD'] = 'MudRoad';
        this.RoadType['TAR_TO_MUD_ROAD'] = 'TarToMudRoad';
        this.RoadType['MUD_TO_TAR_ROAD'] = 'MudToTarRoad';

        // Global Variables
        this.isUrban = false;
        this.area = 1;
        this.midGroundAlpha = {};
        this.midGroundAlpha.value = 0;
        // this.midGroundAlpha =0;
        this.roadPositionY = this.game.height - 66;

        this.urbanSwitchRangeRange = { 'MIN': 29, 'MAX': 30 };
        this.buildingSpacingRange = { 'MIN': 25, 'MAX': 50 };
        this.trainSpawnRateRange = { 'MIN': 30, 'MAX': 100 };
        this.foregroundRateRange = { 'MIN': 1, 'MAX': 3 };
        this.midGroundRateRange = { 'MIN': 50, 'MAX': 100 };

        // Group variables
        this.monumentGroup = game.add.group();        
        this.midGroundGroup = game.add.group();
        this.buildingsGroup = game.add.group();
        this.hazeGroup = game.add.group();
        this.roadGroup = game.add.group();


        this.init();
    }

    _createClass(Parallax, [{
        key: 'init',
        value: function init() {
            this.initUrbanTimer();
            this.initMonuments();
            this.initBuildings();
            this.initMidGround();
            this.initHaze();
            this.initRoads();
        }
    },{
        key: 'initForeground',
        value: function initForeground () {
            this.foregroundGroup = this.game.add.group();
            this.initForegrounds();
        }
    }, {
        key: 'update',
        value: function update(speed) {
            this.buildingSpeedRatio = speed / 2;
            this.trainSpeedRatio = speed;
            this.roadSpeedRatio = speed;
            this.foregroundSpeedRatio = speed * 2;
            this.monument.autoScroll(-(speed /3), 0);
            this.midGroundSpeedRatio = speed / 2;

            this.timerUpdate();
            this.movementBuildings(speed);
            this.movementRoad(speed);
            this.movementForeground(speed);
            this.movementMidGround(speed);
        }
    }, {
        key: 'initUrbanTimer',
        value: function initUrbanTimer() {
            this.isUrban = false;
            this.lastUrbanSwitch = 0;
            this.urbanSwitchRate = 30;
        }
    }, {
        key: 'timerUpdate',
        value: function timerUpdate() {
            if (this.game.time.totalElapsedSeconds() > this.lastUrbanSwitch + this.urbanSwitchRate) {
                this.isUrban = !this.isUrban;
                if(this.area === 3)  {   
                        this.game.add.tween(this.midGroundAlpha).to( { value: 0 }, 2000, "Linear", true);
                        this.area = 1
                } else {
                        this.area += 1;
                        if(this.area === 3) {
                            this.game.add.tween(this.midGroundAlpha).to( { value: 1 }, 2000, "Linear", true);  
                        }
                }
                //console.log(this.area);
                this.lastUrbanSwitch = this.game.time.totalElapsedSeconds();
                this.urbanSwitchRate = this.game.rnd.integerInRange(this.urbanSwitchRangeRange.MIN, this.urbanSwitchRangeRange.MAX);
            }
        }

        // MONUMENT CODE
        // STARTS HERE

    }, {
        key: 'initMonuments',
        value: function initMonuments() {
            // Add monument in background
            var monumentKey;
            if(this.area === 3){
                monumentKey= 'Monument_' + this.game.rnd.integerInRange (10, 13);
                console.log("Area is 3");
            } else {                
                monumentKey= 'Monument_' + this.game.rnd.integerInRange (1, 9);
                console.log("Area is 1 or 2");
            }
            //var monumentKey = 'Monument_' + this.game.rnd.integerInRange (1, 13);
            var sizeMonument = this.game.add.sprite(0, 0, monumentKey);
            var monumentHeight = sizeMonument.height;
            sizeMonument.kill();

            this.monument = this.game.add.tileSprite(0, 0, 240, monumentHeight, monumentKey);
            this.monument.y = this.roadPositionY - this.monument.height;
            this.monument.autoScroll(0, 0);
            this.monumentGroup.add(this.monument);
        }
        // MONUMENT CODE
        // ENDS HERE

        // BUILDINGS CODE
        // STARTS HERE

    }, {
        key: 'initBuildings',
        value: function initBuildings() {
            // Add buildings
            var previousBuilding = void 0;
            for (var i = 0; i < 25; i++) {
                previousBuilding = this.buildingsGroup.create(0, 0, 'Build_' + (i + 1));
                //previousBuilding.area = i;

                if((i+1) >= 0 && i <= 16) {previousBuilding.area = 1;}
                else if( (i+1) > 16 && (i+1) <= 22) {previousBuilding.area = 2;}
                else if( (i+1) > 22 && (i+1) <= 25) {previousBuilding.area = 3;}

                //previousBuilding.isUrban = i + 1 <= 16;
                previousBuilding.isTrainAsset = false;
                previousBuilding.kill();
            }

            previousBuilding = null;

            for (var _i = 0; _i < 3; _i++) {
                var building = this.fetchBuildingWithArea(this.area);
                building.revive();

                building.x = _i == 0 ? this.game.width : previousBuilding.x + previousBuilding.width + this.game.rnd.integerInRange(this.buildingSpacingRange.MIN, this.buildingSpacingRange.MAX);
                previousBuilding = building;
            }
        }
    },  {
        key: 'movementBuildings',
        value: function movementBuildings(speed) {

            this.buildingsGroup.forEach(function (item) {
                if (item.alive) {
                    item.x -= item.isTrainAsset ? this.trainSpeedRatio : this.buildingSpeedRatio;
                    item.y = this.roadPositionY - item.height;
                }

                if (item.x + item.width < 0 && item.alive) {
                    item.kill();
                }
            }, this);

            this.buildingsGroup.sort('x', Phaser.Group.SORT_DESCENDING);
            var lastItem = this.buildingsGroup.getFirstExists(true);

            var lastItemOuterBound = lastItem.x + lastItem.width;

            if (lastItemOuterBound < this.game.width) {

                if (this.game.time.totalElapsedSeconds() > this.lastTrainAssembly + this.trainAssemblyRate) {
                    this.assembleTrain(lastItem);
                    this.lastTrainAssembly = this.game.time.totalElapsedSeconds();
                    this.trainAssemblyRate = this.game.rnd.integerInRange(this.trainSpawnRateRange.MIN, this.trainSpawnRateRange.MAX);
                } else {
                    var dead = this.fetchBuildingWithArea(this.area);
                    dead.x = lastItem.x + lastItem.width + this.game.rnd.integerInRange(this.buildingSpacingRange.MIN, this.buildingSpacingRange.MAX);
                }
            }
        }
    }, /*{
        key: 'fetchBuilding',
        value: function fetchBuilding(isUrban) {
            var deadList = this.buildingsGroup.filter(function (e, index, children) {
                return !e.alive && e.isUrban == isUrban;
            }, false);
            var dead = null;

            if (deadList.list.length != 0) {
                dead = Phaser.ArrayUtils.getRandomItem(deadList.list);
                dead.revive();
                //console.log (`${dead.key}: revived`);
            }

            return dead;
        }
    }, */{
        key: 'fetchBuildingWithArea',
        value: function fetchBuildingWithArea(area) {
            var deadList = this.buildingsGroup.filter(function (e, index, children) {
                return !e.alive && e.area == area;
            }, false);
            var dead = null;

            if (deadList.list.length != 0) {
                dead = Phaser.ArrayUtils.getRandomItem(deadList.list);
                dead.revive();
                //console.log (`${dead.key}: revived`);
            }

            return dead;
        }
    }, {
        key: 'assembleTrain',
        value: function assembleTrain(lastItem) {
            // Create a start station sprite
            var stationStart = this.fetchRailPiece(this.RailPieceType.STATION);
            stationStart.x = lastItem.x + lastItem.width + 450;
            this.buildingsGroup.add(stationStart);

            // Create start of rails to till engine sprite
            var railStartCount = this.game.rnd.integerInRange(1, 10);
            var previousRailStart = null;

            for (var i = 0; i < railStartCount; i++) {
                var rail = this.fetchRailPiece(this.RailPieceType.RAIL);

                if (previousRailStart == null) {
                    rail.x = stationStart.x + stationStart.width;
                } else {
                    rail.x = previousRailStart.x + previousRailStart.width;
                }

                previousRailStart = rail;
                this.buildingsGroup.add(rail);
            }

            // Create an engine sprite
            var engine = this.fetchRailPiece(this.RailPieceType.ENGINE);
            engine.x = previousRailStart.x + previousRailStart.width;
            this.buildingsGroup.add(engine);

            // Create coaches after engine
            var coachesCount = this.game.rnd.integerInRange(5, 10);
            var previousCoach = null;

            for (var _i2 = 0; _i2 < coachesCount; _i2++) {
                var coach = this.fetchRailPiece(this.RailPieceType.COACH);

                if (previousCoach == null) {
                    coach.x = engine.x + engine.width;
                } else {
                    coach.x = previousCoach.x + previousCoach.width;
                }

                previousCoach = coach;
                this.buildingsGroup.add(coach);
            }

            // Create end of rails to till station sprite
            var railEndCount = this.game.rnd.integerInRange(1, 8);
            var previousRailEnd = null;

            for (var _i3 = 0; _i3 < railEndCount; _i3++) {
                var _rail = this.fetchRailPiece(this.RailPieceType.RAIL);

                if (previousRailEnd == null) {
                    _rail.x = previousCoach.x + previousCoach.width;
                } else {
                    _rail.x = previousRailEnd.x + previousRailEnd.width;
                }

                previousRailEnd = _rail;
                this.buildingsGroup.add(_rail);
            }

            // Create an station end sprite
            var stationEnd = this.fetchRailPiece(this.RailPieceType.STATION);
            stationEnd.x = previousRailEnd.x + previousRailEnd.width;

            this.buildingsGroup.add(stationEnd);
        }
    }, {
        key: 'fetchRailPiece',
        value: function fetchRailPiece(railPieceType) {
            var deadRailPieces = this.buildingsGroup.filter(function (e, index, children) {
                return !e.alive && e.railPieceType == railPieceType;
            }, false);

            var deadRailPiece = null;

            if (deadRailPieces.list.length != 0) {
                deadRailPiece = Phaser.ArrayUtils.getRandomItem(deadRailPieces.list);
                deadRailPiece.revive();
            } else {
                deadRailPiece = this.game.add.sprite(0, 0, railPieceType);
                deadRailPiece.railPieceType = railPieceType;
            }
            deadRailPiece.isTrainAsset = true;
            return deadRailPiece;
        }
        // BUILDINGS CODE
        // ENDS HERE

        // HAZE CODE
        // STARTS HERE

    }, {
        key: 'initHaze',
        value: function initHaze() {
            // Adding Haze
            var haze = this.game.add.sprite(0, 0, 'Haze');
            haze.width = 320;
            haze.x = 0;
            haze.y = this.roadPositionY + 50 - haze.height;
            this.hazeGroup.add(haze);

            /*var auto = this.game.add.sprite(0, 0, 'Auto', 1);
            auto.y = this.roadPositionY - auto.height*/
        }
        // HAZE CODE
        // ENDS HERE

        // ROAD CODE
        // STARTS HERE

    }, {
        key: 'initRoads',
        value: function initRoads() {
            this.lastTrainAssembly = 0;
            this.trainAssemblyRate = 10;

            this.lastRoadType = this.RoadType.TAR_ROAD;

            // Add Inital Road
            for (var i = 0; i < 4; i++) {
                var road = this.roadGroup.create(0, 0, i < 2 ? this.RoadType.TAR_ROAD : this.RoadType.MUD_ROAD);
                road.roadType = i < 2 ? this.RoadType.TAR_ROAD : this.RoadType.MUD_ROAD;
                road.kill();
            }

            var previousRoad = void 0;
            for (var _i4 = 0; _i4 < 2; _i4++) {
                var _road = this.fetchRoad(this.RoadType.TAR_ROAD);
                _road.x = _i4 == 0 ? 0 : (previousRoad.x + previousRoad.width) - 1;
                _road.y = this.roadPositionY;
                previousRoad = _road;
            }
        }
    }, {
        key: 'movementRoad',
        value: function movementRoad(speed) {

            this.roadGroup.forEach(function (item) {
                if (item.alive) {
                    item.x -= this.roadSpeedRatio;
                }

                if (item.x + item.width < 0 && item.alive) {
                    item.kill();
                }
            }, this);

            this.roadGroup.sort('x', Phaser.Group.SORT_DESCENDING);
            var lastItem = this.roadGroup.getFirstExists(true);

            var lastItemOuterBound = lastItem.x + lastItem.width;

            if (lastItemOuterBound < this.game.width) {
                var dead = this.fetchRoad(this.area === 1 ? this.RoadType.TAR_ROAD : this.RoadType.MUD_ROAD);
                dead.y = this.roadPositionY;
                dead.x = lastItem.x + lastItem.width - 2;
            }
        }
    }, {
        key: 'fetchRoad',
        value: function fetchRoad(roadType) {

            if (this.lastRoadType != roadType && this.lastRoadType == this.RoadType.TAR_ROAD) {
                this.lastRoadType = roadType;
                roadType = this.RoadType.TAR_TO_MUD_ROAD;
            } else if (this.lastRoadType != roadType && this.lastRoadType == this.RoadType.MUD_ROAD) {
                this.lastRoadType = roadType;
                roadType = this.RoadType.MUD_TO_TAR_ROAD;
            }

            var deadRoadPieces = this.roadGroup.filter(function (e, index, children) {
                return !e.alive && e.roadType == roadType;
            }, false);

            var deadRoadPiece = null;

            if (deadRoadPieces.list.length != 0) {
                deadRoadPiece = deadRoadPieces.list[0];
                deadRoadPiece.revive();
            } else {
                deadRoadPiece = this.roadGroup.create(0, 0, roadType);
                deadRoadPiece.roadType = roadType;
            }

            return deadRoadPiece;
        }
        // ROAD CODE
        // ENDS HERE

        // MIDGROUND CODE
        // STARTS HERE

    }, /*{
        key: 'initMidGround',
        value: function initMidGround(){
            //Add MidGround
            this.lastMidGroundTime = 0;
            this.midGroundSpawnRate = 1;

            for (var i = 0; i < 5; i++) {
                var midground = this.midGroundGroup.create(0, 0, 'Animal_' + (i + 1));
                midground.kill();
            }

        }
    },{
        key: 'movementMidGround',
        value: function movementMidGround(speed) {
            this.midGroundGroup.forEach(function (item) {
                if (item.alive) {
                    item.x -= this.midGroundSpeedRatio;
                }

                if (item.x + item.width < 0 && item.alive) {
                    //console.log (`${item.key}: killed`);
                    item.kill();
                }
            }, this);

            if (this.game.time.totalElapsedSeconds() > this.lastMidGroundTime + this.midGroundSpawnRate) {
                if(this.area === 3){
                    console.log("Mid Ground");
                    var midground = this.midGroundGroup.getRandom();
                    midground.revive();
                    midground.x = midground.width + this.game.width;
                    midground.y = this.game.height - midground.height;
                    this.lastMidGroundTime = this.game.time.totalElapsedSeconds();
                    this.midGroundSpawnRate = this.game.rnd.integerInRange(this.midGroundRateRange.MIN, this.midGroundRateRange.MAX);
                }
            }
        }
    },*/{
        key: 'initMidGround',
        value: function initMidGround() {
            
            // Add buildings
            var previousMidGround = void 0;
            for (var i = 0; i < 5; i++) {
                previousMidGround = this.midGroundGroup.create(0, 0, 'Animal_' + (i + 1));
                previousMidGround.kill();
            }

            previousMidGround = null;

            for (var _i = 0; _i < 3; _i++) {
                var midGround = this.fetchMidGround();
                midGround.revive();

                midGround.x = _i == 0 ? this.game.width : previousMidGround.x + previousMidGround.width + this.game.rnd.integerInRange(this.midGroundRateRange.MIN, this.midGroundRateRange.MAX);
                previousMidGround = midGround;
            }
        }
    },  {
        key: 'movementMidGround',
        value: function movementMidGround(speed) {

                this.midGroundGroup.forEach(function (item) {
                    if(this.area === 3) {
                        item.alpha = this.midGroundAlpha.value;
                    } else {
                        item.alpha = this.midGroundAlpha.value;
                    }

                    if (item.alive) {
                        item.x -= this.midGroundSpeedRatio;
                        item.y = this.roadPositionY - item.height + 10;
                    }

                    if (item.x + item.width < 0 && item.alive) {
                        item.kill();
                    }
                }, this);
           
                this.midGroundGroup.sort('x', Phaser.Group.SORT_DESCENDING);
                var lastItem = this.midGroundGroup.getFirstExists(true);

                var lastItemOuterBound = lastItem.x + lastItem.width + 50;

                if (lastItemOuterBound < this.game.width) {
                        var dead = this.fetchMidGround();
                        dead.x = lastItem.x + lastItem.width + this.game.rnd.integerInRange(this.midGroundRateRange.MIN, this.midGroundRateRange.MAX);
                }
        }
    },  {
        key: 'fetchMidGround',
        value: function fetchMidGround() {
            var deadList = this.midGroundGroup.filter(function (e, index, children) {
                return !e.alive;
            }, false);
            var dead = null;

            if (deadList.list.length != 0) {
                dead = Phaser.ArrayUtils.getRandomItem(deadList.list);
                dead.revive();
                //console.log (`${dead.key}: revived`);
            }

            return dead;
        }
    },{
        key: 'initForegrounds',
        value: function initForegrounds() {
            this.lastForegroundTime = 0;
            this.foregroundSpawnRate = 1;

            // Add initial foreground
            for (var i = 0; i < 9; i++) {
                var foreground = this.foregroundGroup.create(0, 0, 'Foreground_' + (i + 1));
                foreground.kill();
            }
        }
    }, {
        key: 'movementForeground',
        value: function movementForeground(speed) {
            this.foregroundGroup.forEach(function (item) {
                if (item.alive) {
                    item.x -= this.foregroundSpeedRatio;
                }

                if (item.x + item.width < 0 && item.alive) {
                    //console.log (`${item.key}: killed`);
                    item.kill();
                }
            }, this);

            if (this.game.time.totalElapsedSeconds() > this.lastForegroundTime + this.foregroundSpawnRate) {
                var foreground = this.foregroundGroup.getRandom();
                foreground.revive();
                foreground.x = foreground.width + this.game.width;
                foreground.y = this.game.height - foreground.height;
                this.lastForegroundTime = this.game.time.totalElapsedSeconds();
                this.foregroundSpawnRate = this.game.rnd.integerInRange(this.foregroundRateRange.MIN, this.foregroundRateRange.MAX);
            }
        }
    }, {
        key: 'fetchForeground',
        value: function fetchForeground() {
            var deadForegroundPieces = this.roadGroup.filter(function (e, index, children) {
                return !e.alive;
            }, false);

            var deadForegroundPiece = null;

            if (deadForegroundPieces.list.length != 0) {
                deadForegroundPiece = Phaser.ArrayUtils.getRandomItem(deadForegroundPieces.list);
                deadForegroundPiece.revive();
            } else {
                deadForegroundPiece = this.game.add.sprite(0, 0, roadType);
            }

            return deadForegroundPiece;
        }
        // FOREGROUND CODE
        // ENDS HERE

    },{
        key: 'render',
        value: function render() {
            this.game.debug.text('Building Count: ' + this.buildingsGroup.length, 5, 20);
            this.game.debug.text('Road Count: ' + this.roadGroup.length, 5, 40);
            this.game.debug.text('Foreground Count: ' + this.foregroundGroup.length, 5, 60);
        }
    }]);

    return Parallax;
}();
