// https://www.chattriggers.com/modules/v/ruler
// func made by debug 
// ever so slightly modified by me for my mod
// check out Ruler

export const rayTrace = (dist) => {
    let rayBlockPos = Player.getPlayer().func_174822_a(dist, Tessellator.partialTicks)?.func_178782_a();
    
    let rayx = rayBlockPos.func_177958_n();
    let rayy = rayBlockPos.func_177956_o();
    let rayz = rayBlockPos.func_177952_p();
  
    let blockAt = World.getBlockAt(rayx, rayy, rayz);
  
    return blockAt.getType().getRegistryName() === "minecraft:air" ? null : /* changed from { x: rayx, y: rayy, z: rayz } */ blockAt;
}
  
