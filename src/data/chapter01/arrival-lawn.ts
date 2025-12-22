import type { SceneDefinition } from "../../types/scenes";
import { setMessage, setScene } from "../../effects/mutators";

const arrivalLawn: SceneDefinition = {
  id: "arrival-lawn",
  name: "Arrival",
  description:
    "I materialize on a manicured suburban lawn at 2:32 AM. Naked. Alone. Whoever invented time travel had jokes.",
  imageSrc: "/scenes/chapter01/arrival-lawn.png",
  interactions: [
    {
      label: "Scan for cover",
      effect: (state) => {
        // Optional: if player already has clothes (dev testing), skip ahead.
        const dressed =
          state.inventory.includes("stolen-jeans") &&
          state.inventory.includes("hang-in-there-t-shirt");
        if (dressed) return setScene("car-mirror-check")(state);

        return setMessage(
          "First priority: acquire clothing. Preferably without meeting law enforcement."
        )(state);
      },
    },
  ],
  objects: [
    {
      id: "streetlamp",
      name: "Flickering street lamp",
      description:
        "A street lamp above me flickers like it’s judging. It’s not wrong.",
      boundingBox: { x: 0.58, y: 0.04, width: 0.35, height: 0.35 },
      interactions: [
        {
          label: "Look where the light doesn’t reach",
          effect: setScene("backyard-clothesline"),
        },
      ],
    },
    {
      id: "houses",
      name: "Silent houses",
      description:
        "Rows of sleeping houses. Inside them: people with opinions. I prefer them asleep.",
      boundingBox: { x: 0.0, y: 0.1, width: 0.55, height: 0.35 },
      interactions: [
        {
          label: "Move toward the backyards",
          effect: setScene("backyard-clothesline"),
        },
      ],
    },
  ],
};

export default arrivalLawn;
