import type { SceneDefinition } from "../../types/scenes";
import { addToInventory, setMessage, setScene } from "../../effects/mutators";

const backyardClothesline: SceneDefinition = {
  id: "backyard-clothesline",
  name: "Backyard Clothesline",
  description:
    "Laundry dances on a clothesline in the night breeze. It’s not stylish, but it’s fabric. Fabric is victory.",
  imageSrc: "/scenes/chapter01/backyard-clothesline.png",
  interactions: [
    { label: "Back away", effect: setScene("arrival-lawn") },
    {
      label: "Go to the porch steps",
      effect: (state) => {
        const dressed =
          state.inventory.includes("stolen-jeans") &&
          state.inventory.includes("hang-in-there-t-shirt");
        if (!dressed) {
          return setMessage("Not leaving without clothes. I’m not a tourist.")(state);
        }
        return setScene("porch-boots")(state);
      },
    },
  ],
  objects: [
    {
      id: "jeans",
      name: "Baggy jeans",
      description:
        "Loose and clearly not my size. Good. I’m not trying to look like me.",
      visible: (s) => !s.inventory.includes("stolen-jeans"),
      boundingBox: { x: 0.12, y: 0.35, width: 0.28, height: 0.35 },
      interactions: [{ label: "Take jeans", effect: addToInventory("stolen-jeans") }],
    },
    {
      id: "tshirt",
      name: "Cat t-shirt",
      description:
        'A shirt with a cat dangling from a branch: “HANG IN THERE.” The universe is smug.',
      visible: (s) => !s.inventory.includes("hang-in-there-t-shirt"),
      boundingBox: { x: 0.45, y: 0.34, width: 0.28, height: 0.35 },
      interactions: [
        { label: "Take t-shirt", effect: addToInventory("hang-in-there-t-shirt") },
      ],
    },
    {
      id: "clothespins",
      name: "Clothespins",
      description:
        "Tiny wooden clamps holding secrets together. Relatable.",
      boundingBox: { x: 0.77, y: 0.38, width: 0.2, height: 0.2 },
      interactions: [
        {
          label: "Ignore (for now)",
          effect: setMessage("No. I’m not starting a craft project at 2:32 AM."),
        },
      ],
    },
  ],
};

export default backyardClothesline;
