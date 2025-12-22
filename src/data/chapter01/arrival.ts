import type { SceneDefinition } from "../../types/scenes";
import { setScene } from "../../effects/mutators";

const arrivalLawn: SceneDefinition = {
  id: "arrival",
  name: "Arrival",
  description:
    "A flash of light...",
  imageSrc: "/scenes/chapter01/arrival.png",
  interactions: [
    {
      label: "Start a new game",
      effect: setScene("arrival-lawn"),
    },
  ],
  objects: [],
};

export default arrivalLawn;
