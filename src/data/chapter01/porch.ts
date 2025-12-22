import type { SceneDefinition } from "../../types/scenes";
import { addToInventory, setMessage, setScene } from "../../effects/mutators";

const porchBoots: SceneDefinition = {
  id: "porch",
  name: "Back Steps & Porch",
  description:
    "By the back steps: forgotten boots. Nearby: yesterday’s newspaper. Human carelessness is my supply chain.",
  imageSrc: "/scenes/chapter01/porch.png",
  interactions: [
    {
      label: "Return to the clothesline",
      effect: setScene("backyard-clothesline"),
    },
    {
      label: "Check reflection in the car",
      effect: (state) => {
        const hasBoots = state.inventory.includes("oversized-boots");
        if (!hasBoots) {
          return setMessage("Bare feet are a liability. Acquire boots.")(state);
        }
        return setScene("car-mirror-check")(state);
      },
    },
  ],
  objects: [
    {
      id: "boots",
      name: "Worn boots",
      description:
        "Men’s size. Too big. Still better than frostbite and police attention.",
      visible: (s) => !s.inventory.includes("oversized-boots"),
      imageSrc: "/scenes/chapter01/porch-boots.png",
      boundingBox: { x: 0.24, y: 0.62, width: 0.36, height: 0.22 },
      interactions: [
        { label: "Take boots", effect: addToInventory("oversized-boots") },
      ],
    },
    {
      id: "newspaper",
      name: "Old newspaper",
      description:
        "Ink, lies, and useful stuffing. Tonight, it’s mostly the third one.",
      visible: (s) => !s.inventory.includes("newspaper-stuffing"),
      imageSrc: "/scenes/chapter01/porch-newspaper.png",
      boundingBox: { x: 0.62, y: 0.67, width: 0.28, height: 0.18 },
      interactions: [
        {
          label: "Tear for boot stuffing",
          effect: (state) => {
            if (!state.inventory.includes("oversized-boots")) {
              return setMessage(
                "Stuffing is pointless without boots. Acquire boots first."
              )(state);
            }
            return addToInventory("newspaper-stuffing")(state);
          },
        },
      ],
    },
  ],
};

export default porchBoots;
