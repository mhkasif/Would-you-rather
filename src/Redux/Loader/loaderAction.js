import { LOADER_END, LOADER_START } from "./loaderConstant";
export const loaderStart = () => ({
  type: LOADER_START,
});

export const loaderEnd = () => ({
  type: LOADER_END,
});
