import type { SceneDefinition } from "../../types/scenes";
import { setMessage, setScene } from "../../effects/mutators";

const carMirrorCheck: SceneDefinition = {
  id: "car-mirror-check",
  name: "Car Mirror",
  description:
    "I check my reflection in a parked car’s side mirror. Baggy clothes, oversized boots. Runaway teenager: plausible cover.",
  imageSrc: "/scenes/chapter01/car-mirror-check.png",
  interactions: [
    { label: "Leave the yard", effect: setScene("street-exit") },
    { label: "Go back to the porch", effect: setScene("porch") },
  ],
  objects: [
    {
      id: "mirror",
      name: "Side mirror",
      description:
        "A warped, slightly dirty mirror that still does its job: tell me what humans will assume.",
      boundingBox: { x: 0.58, y: 0.23, width: 0.36, height: 0.26 },
      interactions: [
        {
          label: "Confirm disguise",
          effect: (state) => {
            // const dressed =
            //   state.inventory.includes("stolen-jeans") &&
            //   state.inventory.includes("hang-in-there-t-shirt") &&
            //   state.inventory.includes("oversized-boots");

            // if (!dressed) {
            //   return setMessage(
            //     "Not convincing yet. I’m missing key components: fabric."
            //   )(state);
            // }

            const stuffed = state.inventory.includes("newspaper-stuffing");
            return setMessage(
              stuffed
                ? "Disguise acceptable. Boots still ridiculous, but less dangerous."
                : "Disguise acceptable. Boots are too big. Consider stuffing them."
            )(state);
          },
        },
      ],
    },
  ],
};

export default carMirrorCheck;
