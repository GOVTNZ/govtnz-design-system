import path from "path";

export const sleep = (duration_ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, duration_ms));

export const fileToUri = (filePath: string): string => {
  let pathName = path.resolve(filePath).replace(/\\/g, "/");

  if (pathName[0] !== "/") {
    // Windows
    pathName = "/" + pathName;
  }

  return encodeURI("file://" + pathName);
};
