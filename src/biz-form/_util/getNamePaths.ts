import { isArray } from 'ut2';

type NamePath = string | number;
type NamePaths = NamePath[];

const getNamePaths = (name: NamePath | NamePaths, parentListName?: (NamePath | NamePaths)[]) => {
  const paths: NamePaths = [];
  if (isArray(parentListName) && parentListName.length > 0) {
    parentListName.forEach((parentItemPath) => {
      if (isArray(parentItemPath)) {
        paths.push(...parentItemPath);
      } else {
        paths.push(parentItemPath);
      }
    });
  }
  if (isArray(name)) {
    paths.push(...name);
  } else {
    paths.push(name);
  }
  return paths;
};

export default getNamePaths;
