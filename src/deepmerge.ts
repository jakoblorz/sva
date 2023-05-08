import createDeepMergeAll from "@fastify/deepmerge";

export const px: <T extends {}>(v1: T, v2: T) => T = createDeepMergeAll({
  mergeArray(options) {
    return (source, target) => {
      return [...source, ...target].flat(Infinity).filter(Boolean);
    };
  },
}) as any;
