import PreviewPorsche from "@/public/3d/previews/porsche.png";
import PreviewIronman from "@/public/3d/previews/ironman.png";
import PreviewBlackhole from "@/public/3d/previews/blackhole.png";
import PreviewGoose from "@/public/3d/previews/goose.png";
import PreviewMinutes from "@/public/3d/previews/minutes.png";
import { StaticImageData } from "next/image";
import { ModelName } from "./state";

type Model = {
  id: ModelName;
  name: string;
  model: string;
  preview: StaticImageData;
};

const modelData: Model[] = [
  {
    id: "porsche",
    name: "Porsche",
    model: "/3d/porsche.glb",
    preview: PreviewPorsche,
  },
  {
    id: "ironman",
    name: "Iron Man",
    model: "/3d/ironman.glb",
    preview: PreviewIronman,
  },
  {
    id: "blackhole",
    name: "Black Hole",
    model: "/3d/blackhole.glb",
    preview: PreviewBlackhole,
  },
  {
    id: "goose",
    name: "Goose",
    model: "/3d/goose.glb",
    preview: PreviewGoose,
  },
  {
    id: "minutes",
    name: "Minutes",
    model: "/3d/minutes.glb",
    preview: PreviewMinutes,
  },
];

export default modelData;
