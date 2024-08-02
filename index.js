/// <reference types="../CTAutocomplete" />

// whats over yonder?
// check out debug's ruler mod. https://www.chattriggers.com/modules/v/ruler (raytrace func)

import { rayTrace } from "./util/debugRaytraceModified" 

// gets if player is in debug screen

const isDebugging = () => Client.settings.getSettings().field_74330_P;
const regularRenderDistance = Client.settings.video.getRenderDistance()

// renders looking at infinite distance

register('renderOverlay', () => {
  if (!isDebugging()) return;
  if (!Player.lookingAt().toString().includes('minecraft:air')) return;
  const block = rayTrace((regularRenderDistance * 16) * (regularRenderDistance * 16));
  if (block === null) return;
  const text = `Looking at: ${block.x} ${block.y} ${block.z} (ctrl + c)`;
  // used obfuscated methods cuz im lazy
  // drawRect
  net.minecraft.client.gui.Gui.func_73734_a(1, 127, Renderer.getStringWidth(text) + 3, 136, -1873784752);
  // drawString
  Renderer.getFontRenderer().func_78276_b(text, 2, 128, 14737632);
})

// copy coords
const ckeybind = Client.getKeyBindFromKey(Keyboard.KEY_C);

ckeybind.registerKeyPress(() => {
  if (!Client.isControlDown()) return;
  const block = rayTrace((regularRenderDistance * 16) * (regularRenderDistance * 16));
  if (block === null) return ChatLib.chat('&4no block found.');
  ChatLib.command(`ct copy ${block.x} ${block.y} ${block.z}`, true);
  ChatLib.chat(`&2copied coords &8${block.x} ${block.y} ${block.z}`);
})