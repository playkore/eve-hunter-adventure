import type { SceneDefinition } from "../../types/scenes";
import { addScore, setFlag, setMessage, setScene } from "../../effects/mutators";

const carMirrorCheck: SceneDefinition = {
  id: "car-mirror-check",
  name: "Car Mirror",
  description:
    "I check my reflection in a parked car’s side mirror. Baggy clothes. Oversized boots. Runaway teenager: plausible cover.",
  imageSrc: "/scenes/chapter01/car-mirror-check.png",
  interactions: [
    { label: "Get back to the street", effect: setScene("street-exit") },
  ],
  objects: [
    {
      id: "mirror",
      name: "Side mirror",
      description:
        "A warped, slightly dirty mirror that still does its job: telling me what humans will assume.",
      boundingBox: { x: 0.58, y: 0.23, width: 0.36, height: 0.26 },
      interactions: [
        {
          label: "Confirm disguise",
          effect: (state) => {
            const stuffed = state.flags.bootsStuffed;
            const checked = state.flags.disguiseChecked;
            const flaggedState = setFlag("disguiseChecked")(state);
            const nextState = checked ? flaggedState : addScore(1)(flaggedState);
            return setMessage(
              stuffed
                ? "Disguise acceptable. Boots still ridiculous, but less dangerous."
                : "Disguise acceptable. Boot fit still suboptimal."
            )(nextState);
          },
        },
      ],
    },
  ],
};

export default carMirrorCheck;
