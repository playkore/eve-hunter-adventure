import type { SceneDefinition } from "../../types/scenes";
import { addToInventory, setMessage, setScene } from "../../effects/mutators";

const backyardClothesline: SceneDefinition = {
  id: "backyard-clothesline",
  name: "Backyard Clothesline",
  description:
    "Laundry sways on a clothesline in the night breeze. It’s not stylish, but it’s fabric. Fabric is victory.",
  imageSrc: "/scenes/chapter01/backyard-clothesline.png",
  interactions: [
    {
      label: "Go to the porch steps",
      effect: (state) => {
        const dressed =
          state.inventory.includes("stolen-jeans") &&
          state.inventory.includes("hang-in-there-t-shirt");
        if (!dressed) {
          return setMessage(
            "Not leaving without clothes. I’m not a tourist attraction."
          )(state);
        }
        return setScene("porch")(state);
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
      imageSrc: "/scenes/chapter01/backyard-clothesline-jeans.png",
      boundingBox: {
        x: 0.13,
        y: 0.23,
        width: 0.37,
        height: 0.47,
      },
      interactions: [
        {
          label: "Take jeans",
          effect: addToInventory("stolen-jeans"),
        },
      ],
    },
    {
      id: "tshirt",
      name: "Cat t-shirt",
      description:
        "A shirt with a cat dangling from a branch. “HANG IN THERE.” The universe is smug.",
      visible: (s) => !s.inventory.includes("hang-in-there-t-shirt"),
      imageSrc: "/scenes/chapter01/backyard-clothesline-tshirt.png",
      boundingBox: {
        x: 0.51,
        y: 0.24,
        width: 0.41,
        height: 0.32,
      },
      interactions: [
        {
          label: "Take t-shirt",
          effect: addToInventory("hang-in-there-t-shirt"),
        },
      ],
    },
  ],
};

export default backyardClothesline;
