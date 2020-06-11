import ProgressBar from 'progress';
import { ReleaseVersion, Component } from './types';
import { toId } from './normalize';

export const normalizeGeneric = async (
  upstreamReleaseVersion: ReleaseVersion
) => {
  const bar = new ProgressBar(
    `${upstreamReleaseVersion.sourceId}@${upstreamReleaseVersion.version} conversion to GovtNZ MetaTemplate Inputs... :bar :percent`,
    {
      total: upstreamReleaseVersion.components.length
    }
  );

  const newComponents = upstreamReleaseVersion.components.map(
    (component: Component) => {
      bar.tick();
      return {
        ...component,
        id: toId(component.id)
      };
    }
  );

  return {
    ...upstreamReleaseVersion,
    components: newComponents
  };
};
