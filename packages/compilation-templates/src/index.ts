import compilationSketch from "./compilation.sketch";
import compilationPdf from "./compilation.pdf";

export default async (props: Props): Promise<Object[]> => {
  return await Promise.all(
    Object.keys(compilations).map(id => compilations[id](props))
  );
};

const compilations = {
  sketch: compilationSketch,
  pdf: compilationPdf
};

export type Props = {
  patterns: Pattern[];
  css: string;
  responsiveModes?: Viewport[];
};

export type Pattern = {
  id: string;
  html: string;
};

export type Viewport = {
  name: string;
  width: number;
  height: number;
};
