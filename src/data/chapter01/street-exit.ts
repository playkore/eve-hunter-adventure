import type { SceneDefinition } from "../../types/scenes";
import { setMessage, setScene } from "../../effects/mutators";

const streetExit: SceneDefinition = {
  id: "street-exit",
  name: "Suburban Street",
  description:
    "Now dressed, I can think about money, transport, and my target. One crisis at a time.",
  imageSrc: "/scenes/chapter01/street-exit.png",
  interactions: [
    { label: "Look back", effect: setScene("car-mirror-check") },
    {
      label: "Head toward town",
      effect: (state) => {
        if (!state.flags.disguiseChecked) {
          return setMessage(
            "Not yet. One look in a mirror first. I need to know what story my face is telling."
          )(state);
        }
        return setMessage(
          "Next objective: cash. There’s a bank in town. The night is still young."
        )(state);
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
