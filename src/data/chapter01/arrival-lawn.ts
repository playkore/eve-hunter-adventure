import type { SceneDefinition } from "../../types/scenes";
import { setScene } from "../../effects/mutators";

const arrivalLawn: SceneDefinition = {
  id: "arrival-lawn",
  name: "Arrival",
  description:
    "I materialize on a manicured suburban lawn at 2:32 AM. Naked. Alone. Whoever invented time travel had jokes.",
  imageSrc: "/scenes/chapter01/arrival-lawn.png",
  interactions: [
    {
      label: "Scan for cover",
      effect: setScene("backyard-clothesline"),
    },
  ],
  objects: [],
};

export default arrivalLawn;
