import type { SceneDefinition } from "../../types/scenes";
import { setMessage, setScene } from "../../effects/mutators";

const streetExit: SceneDefinition = {
  id: "street-exit",
  name: "Suburban Street",
  description:
    "Now dressed, I can think about money, transport, and my target. One crisis at a time.",
  imageSrc: "/scenes/chapter01/street-exit.png",
  interactions: [
    {
      label: "Head toward town",
      effect: (state) => {
        return setScene("smithtown-view")(state);
      },
    },
  ],
  objects: [
    {
      id: "car-side-mirror",
      name: "Side mirror",
      description: "A perfect spot to check how I look.",
      boundingBox: {
        x: 0.6,
        y: 0.42,
        width: 0.13,
        height: 0.08,
      },
      interactions: [
        {
          label: "Check reflection",
          effect: setScene("car-mirror-check"),
        },
      ],
    },
  ],
};

export default streetExit;
