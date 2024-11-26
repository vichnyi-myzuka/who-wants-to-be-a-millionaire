import { ConfigSchema, type Config } from "@/types/config";

export const validateConfig = (config: Config) => {
  return ConfigSchema.safeParse(config);
};
