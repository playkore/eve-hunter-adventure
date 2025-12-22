import type { SceneDefinition } from "../../types/scenes";
import { setMessage, setScene } from "../../effects/mutators";

const streetExit: SceneDefinition = {
  id: "street-exit",
  name: "Suburban Street",
  description:
    "Now dressed, I can think about money, transport, and my target. One crisis at a time.",
  imageSrc: "/scenes/chapter01_clothes/street-exit.png",
  interactions: [
    { label: "Look back", effect: setScene("car-mirror-check") },
    {
      label: "Head toward town",
      effect: (state) =>
        setMessage("Next objective: cash. There’s a bank in town. The night is young.")(state),
      // Later you can swap this to setScene("bank-atm") when you add it.
    },
  ],
  objects: [],
};

export default streetExit;
