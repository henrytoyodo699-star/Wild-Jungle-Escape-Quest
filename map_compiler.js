/**
 * Wild Jungle - Escape Quest: Auto-Discovery Asset Loader & Real-Time Level Compiler
 * Loads assets relative to index.html. The project is intended to be opened
 * with Live Server from this folder, so probing parent folders only hides
 * real errors and creates misleading 404s.
 */

window.GameAssets = {
  // Exact file names from your zip archive
  registry: {
    character: 'characters/character-female-e.glb',
    tree: 'environments/tree.glb',
    treeTall: 'environments/tree-tall.glb',
    treeLogSmall: 'environments/tree-log-small.glb',
    rockA: 'environments/rock-a.glb',
    rockB: 'environments/rock-b.glb',
    rockC: 'environments/rock-c.glb',
    rockFlat: 'environments/rock-flat.glb',
    rocksTall: 'environments/rocks-tall.glb',
    grassLarge: 'environments/grass-large.glb',
    campfire: 'puzzle items/campfire-pit.glb',
    machete: 'puzzle items/tool-axe.glb',
    curvedWall: 'puzzle items/brick-wall-curve.glb'
    ,altarStone: 'assets/GLB format/altar-stone.glb'
    ,altarWood: 'assets/GLB format/altar-wood.glb'
    ,banner: 'assets/GLB format/banner.glb'
    ,barrel: 'assets/GLB format/barrel.glb'
    ,barrelOpen: 'assets/GLB format/barrel-open.glb'
    ,boatRowSmall: 'assets/GLB format/boat-row-small.glb'
    ,castleDoor: 'assets/GLB format/castle-door.glb'
    ,castleGate: 'assets/GLB format/castle-gate.glb'
    ,castleWall: 'assets/GLB format/castle-wall.glb'
    ,candleMultiple: 'assets/GLB format/candle-multiple.glb'
    ,cannon: 'assets/GLB format/cannon.glb'
    ,cannonMobile: 'assets/GLB format/cannon-mobile.glb'
    ,coffin: 'assets/GLB format/coffin.glb'
    ,coffinOld: 'assets/GLB format/coffin-old.glb'
    ,coin: 'assets/GLB format/coin.glb'
    ,column: 'assets/GLB format/column.glb'
    ,columnLarge: 'assets/GLB format/column-large.glb'
    ,corridor: 'assets/GLB format/corridor.glb'
    ,corridorEnd: 'assets/GLB format/corridor-end.glb'
    ,crypt: 'assets/GLB format/crypt.glb'
    ,cryptA: 'assets/GLB format/crypt-a.glb'
    ,cryptDoor: 'assets/GLB format/crypt-door.glb'
    ,cryptLargeDoor: 'assets/GLB format/crypt-large-door.glb'
    ,detailBowl: 'assets/GLB format/detail-bowl.glb'
    ,detailChalice: 'assets/GLB format/detail-chalice.glb'
    ,floorHole: 'assets/GLB format/floor-hole.glb'
    ,flagHigh: 'assets/GLB format/flag-high.glb'
    ,flagHighPennant: 'assets/GLB format/flag-high-pennant.glb'
    ,gate: 'assets/GLB format/gate.glb'
    ,gateRock: 'assets/GLB format/gate-rock.glb'
    ,grave: 'assets/GLB format/grave.glb'
    ,gravestoneCross: 'assets/GLB format/gravestone-cross.glb'
    ,hayBale: 'assets/GLB format/hay-bale.glb'
    ,ironFenceGate: 'assets/GLB format/iron-fence-border-gate.glb'
    ,key: 'assets/GLB format/key.glb'
    ,lanternGlass: 'assets/GLB format/lantern-glass.glb'
    ,mast: 'assets/GLB format/mast.glb'
    ,palmBend: 'assets/GLB format/palm-bend.glb'
    ,palmStraight: 'assets/GLB format/palm-straight.glb'
    ,patchGrassFoliage: 'assets/GLB format/patch-grass-foliage.glb'
    ,patchSand: 'assets/GLB format/patch-sand.glb'
    ,pine: 'assets/GLB format/pine.glb'
    ,pillarLarge: 'assets/GLB format/pillar-large.glb'
    ,pillarObelisk: 'assets/GLB format/pillar-obelisk.glb'
    ,potion: 'assets/GLB format/potion.glb'
    ,pumpkin: 'assets/GLB format/pumpkin.glb'
    ,pumpkinCarved: 'assets/GLB format/pumpkin-carved.glb'
    ,resourceStone: 'assets/GLB format/resource-stone.glb'
    ,resourceStoneLarge: 'assets/GLB format/resource-stone-large.glb'
    ,resourceWood: 'assets/GLB format/resource-wood.glb'
    ,road: 'assets/GLB format/road.glb'
    ,rockSandA: 'assets/GLB format/rock-sand-a.glb'
    ,rockSandC: 'assets/GLB format/rock-sand-c.glb'
    ,rockFlatGrass: 'assets/GLB format/rock-flat-grass.glb'
    ,rocksSandA: 'assets/GLB format/rocks-sand-a.glb'
    ,rocksSandC: 'assets/GLB format/rocks-sand-c.glb'
    ,shipLarge: 'assets/GLB format/ship-large.glb'
    ,shipMedium: 'assets/GLB format/ship-medium.glb'
    ,shipPirateLarge: 'assets/GLB format/ship-pirate-large.glb'
    ,shipPirateMedium: 'assets/GLB format/ship-pirate-medium.glb'
    ,shipPirateSmall: 'assets/GLB format/ship-pirate-small.glb'
    ,shipWreck: 'assets/GLB format/ship-wreck.glb'
    ,signpost: 'assets/GLB format/signpost.glb'
    ,stoneWall: 'assets/GLB format/stone-wall.glb'
    ,tent: 'assets/GLB format/tent.glb'
    ,toolHammer: 'assets/GLB format/tool-hammer.glb'
    ,toolPaddle: 'assets/GLB format/tool-paddle.glb'
    ,toolShovel: 'assets/GLB format/tool-shovel.glb'
    ,towerBase: 'assets/GLB format/tower-base.glb'
    ,towerBaseDoor: 'assets/GLB format/tower-base-door.glb'
    ,towerCompleteLarge: 'assets/GLB format/tower-complete-large.glb'
    ,towerCompleteSmall: 'assets/GLB format/tower-complete-small.glb'
    ,towerMiddle: 'assets/GLB format/tower-middle.glb'
    ,towerMiddleWindows: 'assets/GLB format/tower-middle-windows.glb'
    ,towerTop: 'assets/GLB format/tower-top.glb'
    ,towerWatch: 'assets/GLB format/tower-watch.glb'
    ,treeAutumn: 'assets/GLB format/tree-autumn.glb'
    ,treeAutumnTall: 'assets/GLB format/tree-autumn-tall.glb'
    ,weaponsSpear: 'assets/GLB format/weapon-spear.glb'
    ,weaponSpear: 'assets/GLB format/weapon-spear.glb'
    ,workbench: 'assets/GLB format/workbench.glb'
  },

  cache: {},

  // Convert each path segment separately so "puzzle items" works on every server.
  getAssetUrl(relativePath) {
    const encodedPath = relativePath
      .split('/')
      .map(segment => encodeURIComponent(segment))
      .join('/');
    return new URL(encodedPath, document.baseURI).href;
  },

  // Load a model from the known project-relative path and preserve the real error.
  loadSingleModel(gltfLoader, key, relativePath) {
    return new Promise((resolve) => {
      const url = this.getAssetUrl(relativePath);
      gltfLoader.load(
        url,
        (gltf) => {
          this.cache[key] = {
            scene: gltf.scene,
            animations: gltf.animations || [],
            path: relativePath,
            status: 'OK'
          };
          resolve({ key, path: relativePath, status: 'LOADED' });
        },
        undefined,
        (error) => {
          const detail = error?.message || 'Could not fetch or parse model';
          console.error(`[Asset load failed] ${relativePath}`, error);
          this.cache[key] = {
            scene: null,
            animations: [],
            path: relativePath,
            status: 'FAILED',
            error: detail
          };
          resolve({ key, path: relativePath, status: 'FAILED', error: detail });
        }
      );
    });
  },

  async loadAll(gltfLoader, onProgress) {
    const keys = Object.keys(this.registry);
    let count = 0;

    for (const key of keys) {
      const relPath = this.registry[key];
      const result = await this.loadSingleModel(gltfLoader, key, relPath);
      count++;
      if (onProgress) {
        onProgress(result.key, result.path, result.status, result.error, count, keys.length);
      }
    }
  }
};

window.LevelManager = (function() {
  const randomDecorPool = [
    'tree', 'treeTall', 'treeAutumn', 'treeAutumnTall', 'pine',
    'palmStraight', 'grassLarge', 'rockB', 'rockC', 'rocksTall',
    'barrel', 'column', 'grave', 'patchGrassFoliage'
  ];
  const randomDecorPositions = [
    [-7, 4], [-7, -4], [-5, 2.5], [-5, -2.5],
    [-1, 5], [-1, -5], [2, 4.5], [2, -4.5],
    [5.5, 3.5], [5.5, -3.5]
  ];

  // Seeded by level ID so the level feels varied but does not change on reload.
  function randomDecor(levelId, excluded = []) {
    let seed = levelId * 9301 + 49297;
    const next = () => {
      seed = (seed * 233 + 17) % 1000003;
      return seed / 1000003;
    };
    const pool = randomDecorPool.filter(key => !excluded.includes(key));
    const used = new Set();
    const count = 5 + (levelId % 3);
    const props = [];

    for (let i = 0; i < count; i++) {
      let positionIndex = Math.floor(next() * randomDecorPositions.length);
      while (used.has(positionIndex)) positionIndex = (positionIndex + 1) % randomDecorPositions.length;
      used.add(positionIndex);
      const [x, z] = randomDecorPositions[positionIndex];
      const assetKey = pool[Math.floor(next() * pool.length)];
      props.push({ assetKey, x, z, scale: 1.35 + next() * 0.8 });
    }
    return props;
  }

  const levels = [
    {
      id: 1, title: "Stage 1: The Bee Grove",
      objective: "Gather dry branches and flint to light the campfire and disperse the hornet swarm!",
      spawn: { x: -6, z: 0 }, gridWidth: 16, gridHeight: 12,
      buildTiles: (x, z) => x >= 2 && x <= 4 ? (z >= -1 && z <= 1 ? 3 : 2) : (z === 0 ? 1 : 0),
      props: [
        { assetKey: 'treeLogSmall', name: 'Dry Branches', type: 'branches', x: -4, z: 3, scale: 2.2 },
        { assetKey: 'rockA', name: 'Chert Flint', type: 'flint', x: -4, z: -3, scale: 1.8 },
        { assetKey: 'campfire', name: 'Stone Hearth', type: 'hearth', x: -1, z: -2, scale: 2.0 },
        { type: 'bees', name: 'Angry Hornets', x: 2, z: 0, scale: 1.0, isObstacle: true },
        { assetKey: 'castleGate', name: 'Next Level Gate', type: 'exit', requiredState: 'beesCleared', x: 6, z: 0, scale: 2.0, isObstacle: true },
        { assetKey: 'tree', x: -7, z: 4, scale: 2.2 }, { assetKey: 'treeTall', x: -7, z: -4, scale: 2.2 },
        { assetKey: 'grassLarge', x: 5, z: -2, scale: 1.8 },
        ...randomDecor(1, ['tree', 'treeTall', 'grassLarge'])
      ]
    },
    {
      id: 2, title: "Stage 2: The Sun Temple Gate",
      objective: "Pick up the machete to slice through the dense vines blocking the ruins!",
      spawn: { x: -6, z: 0 }, gridWidth: 16, gridHeight: 12,
      buildTiles: (x, z) => x >= 4 ? 4 : (z === 0 ? 1 : 0),
      props: [
        { assetKey: 'machete', name: 'Sturdy Machete', type: 'machete', x: -2, z: 3, scale: 2.2 },
        { assetKey: 'curvedWall', name: 'Overgrown Gate', type: 'vines', x: 4, z: 0, scale: 2.0, isObstacle: true },
        { assetKey: 'castleDoor', name: 'Next Level Gate', type: 'exit', requiredState: 'vinesCleared', x: 6, z: 0, scale: 2.0, isObstacle: true },
        { assetKey: 'rocksTall', x: 1, z: 4, scale: 2.0 }, { assetKey: 'treeTall', x: -5, z: 4, scale: 2.2 },
        { assetKey: 'tree', x: -5, z: -4, scale: 2.2 }, { assetKey: 'rockB', x: 5, z: -4, scale: 1.9 },
        ...randomDecor(2, ['tree', 'treeTall', 'rockB', 'rocksTall'])
      ]
    }
  ];

  const adventures = [
    ['Forgotten Ruins', 'Recover the altar relic and carry it to the ruins gate.', 'altarStone', 'castleDoor', 4, [['cryptA', -5, 4], ['columnLarge', 1, 3], ['grave', 6, -4]]],
    ['Crystal Marsh', 'Find the marsh crystal and bring it to the ancient gate.', 'rockC', 'gateRock', 2, [['palmStraight', -7, 4], ['grassLarge', 5, 3], ['rockSandA', 6, -3]]],
    ['Sky Shrine', 'Claim the shrine stone and unlock the sanctuary.', 'altarWood', 'towerCompleteSmall', 4, [['pine', -7, 4], ['column', 1, 3], ['banner', 5, -3]]],
    ['Desert Crossing', 'Recover the golden key from the desert camp.', 'key', 'castleGate', 1, [['palmBend', -6, 4], ['patchSand', 0, -3], ['tent', 2, 3]]],
    ['Pirate Cove', 'Find the captain coin and open the shipyard gate.', 'coin', 'shipWreck', 2, [['shipPirateSmall', 5, 3], ['boatRowSmall', -4, -3], ['barrel', 1, 4]]],
    ['Haunted Graveyard', 'Take the lantern to the crypt entrance.', 'lanternGlass', 'cryptDoor', 4, [['grave', -5, 4], ['gravestoneCross', 1, 3], ['coffin', 5, -3]]],
    ['Castle Courtyard', 'Recover the royal banner and reach the castle door.', 'banner', 'castleDoor', 4, [['castleWall', 4, 4], ['pillarLarge', 1, -3], ['cannon', 6, 3]]],
    ['Old Crypt', 'Find the chalice and unlock the deep crypt.', 'detailChalice', 'cryptLargeDoor', 4, [['crypt', 4, 4], ['coffinOld', -5, 3], ['candleMultiple', 1, -3]]],
    ['Harvest Valley', 'Collect the potion from the abandoned farm.', 'potion', 'towerBaseDoor', 1, [['hayBale', -5, 4], ['pumpkin', 1, 3], ['workbench', 5, -3]]],
    ['Moonlit Dock', 'Recover the ship key at the far dock.', 'key', 'shipMedium', 2, [['shipPirateMedium', 5, 3], ['mast', -5, 4], ['barrelOpen', 1, -3]]],
    ['Stone Fortress', 'Find the spear and open the fortified gate.', 'weaponSpear', 'gate', 4, [['stoneWall', 4, 4], ['ironFenceGate', 2, -3], ['towerBase', 6, 3]]],
    ['Witchwood', 'Bring the carved pumpkin to the forest shrine.', 'pumpkinCarved', 'altarStone', 0, [['treeAutumn', -6, 4], ['treeAutumnTall', -6, -4], ['patchGrassFoliage', 4, 3]]],
    ['Underground Passage', 'Find the hammer and reach the corridor exit.', 'toolHammer', 'corridorEnd', 4, [['corridor', 2, 4], ['floorHole', -2, -3], ['columnLarge', 5, -3]]],
    ['Watchtower Road', 'Recover the shovel and open the tower entrance.', 'toolShovel', 'towerCompleteLarge', 1, [['towerWatch', 5, 4], ['road', 0, 0], ['signpost', -4, -3]]],
    ['Frozen Looking Glass', 'Carry the resource stone to the northern watch gate.', 'resourceStoneLarge', 'towerTop', 4, [['rocksSandC', -6, 4], ['rockFlatGrass', -2, -3], ['towerMiddleWindows', 5, 3]]],
    ['Final Sanctuary', 'Claim the final relic and enter the sanctuary.', 'detailBowl', 'castleGate', 4, [['altarWood', 2, 4], ['columnLarge', -4, -3], ['flagHigh', 5, 3]]],
    ['Hidden Shipyard', 'Find the shipyard tool and reach the pirate ship.', 'toolPaddle', 'shipPirateLarge', 2, [['shipLarge', 5, 4], ['resourceWood', -5, 3], ['cannonMobile', 2, -3]]],
    ['The Last Tower', 'Recover the final stone and unlock the tower.', 'resourceStone', 'towerCompleteLarge', 4, [['towerMiddle', 5, 4], ['pillarObelisk', 2, -3], ['flagHighPennant', -4, 3]]]
  ];

  function makeAdventureLevel(index, spec) {
    const [name, objective, collectible, exit, terrain, decor] = spec;
    const levelId = index + 3;
    const level = {
      id: levelId,
      title: `Stage ${levelId}: ${name}`,
      objective,
      spawn: { x: -6, z: 0 },
      gridWidth: 16,
      gridHeight: 12,
      buildTiles: function(x, z) {
        if (terrain === 1) return x >= 2 && x <= 4 ? (z >= -1 && z <= 1 ? 3 : 2) : (z === 0 ? 1 : 0);
        if (terrain === 2) return x >= 3 ? 2 : (z === 0 ? 1 : 0);
        if (terrain === 4) return x >= 3 ? 4 : (z === 0 ? 1 : 0);
        return z === 0 ? 1 : 0;
      },
      props: [
        { assetKey: collectible, name: `${name} Relic`, type: 'collectible', stateKey: 'hasLevelArtifact', reward: 20 + levelId, x: -2, z: 3, scale: 1.8 },
        { assetKey: exit, name: 'Next Level Gate', type: 'exit', requiredState: 'hasLevelArtifact', x: 6, z: 0, scale: 2.0, isObstacle: true },
        ...decor.map(([assetKey, x, z]) => ({ assetKey, x, z, scale: 1.8 })),
        ...randomDecor(levelId, [collectible, exit])
      ]
    };

    if (levelId === 12) {
      // Keep the ships readable without letting their hulls cover the map.
      level.props = level.props.map(prop =>
        prop.type === 'exit'
          ? { ...prop, assetKey: 'gate', scale: 1.1 }
          : ['shipMedium', 'shipPirateMedium'].includes(prop.assetKey)
            ? { ...prop, scale: 0.55 }
            : prop
      );
      level.props = level.props.filter(prop => prop.assetKey !== 'shipPirateSmall');
    }

    if (levelId === 15) {
      // Leave a clear route to the hammer and the corridor exit.
      level.props = level.props
        .filter(prop => prop.name || ['toolHammer', 'corridorEnd', 'corridor', 'floorHole'].includes(prop.assetKey))
        .map(prop => {
          if (prop.assetKey === 'toolHammer') return { ...prop, x: -3, z: 2.5, scale: 1.0 };
          if (prop.type === 'exit') return { ...prop, assetKey: 'gate', x: 6, z: 0, scale: 1.1 };
          if (prop.assetKey === 'corridor') return { ...prop, x: 3, z: 4, scale: 0.7 };
          if (prop.assetKey === 'floorHole') return { ...prop, x: 1, z: -3, scale: 0.65 };
          return prop;
        });
    }

    return level;
  }

  adventures.forEach((spec, index) => levels.push(makeAdventureLevel(index, spec)));

  return {
    getLevel: (id) => levels.find(l => l.id === id) || levels[0],
    getLevelCount: () => levels.length
  };
})();
