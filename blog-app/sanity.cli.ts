import { defineCliConfig, CliConfig } from 'sanity/cli';

interface MyCliConfig extends CliConfig {
  api: {
    projectId: string;
    dataset: string;
  };
}

export default defineCliConfig<MyCliConfig>({
  api: {
    projectId: 'cze1d23v',
    dataset: 'production',
  },
});
