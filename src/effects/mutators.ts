import { InventoryItemId } from "../types/inventory";
import { FlagId } from "../types/flags";
import type { SceneId } from "../data/scenes";
import { GameState, GameStateLook } from "./useGameState";

export const setScene = (sceneId: SceneId) => {
  return (state: GameState): GameState => {
    return {
      ...state,
      currentSceneId: sceneId,
    };
  };
};

export const addToInventory = (itemId: InventoryItemId) => {
  return (state: GameState): GameState => {
    if (state.inventory.includes(itemId)) {
      return state;
    }
    return {
      ...state,
      inventory: [...state.inventory, itemId],
    };
  };
};

export const setFlag = (flagId: FlagId, value = true) => {
  return (state: GameState): GameState => {
    if (state.flags[flagId] === value) {
      return state;
    }
    return {
      ...state,
      flags: {
        ...state.flags,
        [flagId]: value,
      },
    };
  };
};

export const setStateLook = (look: GameStateLook) => {
  return (state: GameState): GameState => {
    return {
      ...state,
      look,
    };
  };
};

export const setMessage = (message: string) => {
  return (state: GameState): GameState => {
    return {
      ...state,
      message,
    };
  };
};

export const addScore = (points: number) => {
  return (state: GameState): GameState => {
    return {
      ...state,
      score: state.score + points,
    };
  };
};
