import type { SceneDefinition } from "../../types/scenes";
import { addToInventory, setMessage, setScene } from "../../effects/mutators";

const porchBoots: SceneDefinition = {
  id: "porch",
  name: "Back Steps & Porch",
  description:
    "By the back steps: forgotten boots. Nearby: yesterday’s newspaper. Human carelessness remains my supply chain.",
  imageSrc: "/scenes/chapter01/porch.png",
  interactions: [
    {
      label: "Return to the clothesline",
      effect: setScene("backyard-clothesline"),
    },
    {
      label: "Get to the street",
      effect: (state) => {
        const hasBoots = state.inventory.includes("oversized-boots");
        if (!hasBoots) {
          return setMessage("Bare feet are a liability. Acquire boots.")(state);
        }
        return setScene("street-exit")(state);
      },
    },
  ],
  objects: [
    {
      id: "boots",
      name: "Worn boots",
      description:
        "Men’s size. Too big. Still better than frostbite or police attention.",
      visible: (s) => !s.inventory.includes("oversized-boots"),
      imageSrc: "/scenes/chapter01/porch-boots.png",
      boundingBox: { x: 0.5, y: 0.37, width: 0.29, height: 0.14 },
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
      boundingBox: { x: 0.06, y: 0.63, width: 0.56, height: 0.22 },
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
