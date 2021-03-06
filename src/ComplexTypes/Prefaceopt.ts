import { Coreopt } from "../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";
import { PrefaceContainers } from "../ElementGroups/PrefaceContainers";

/**
 * The complex type prefaceopt defines the content model and
 * attributes used by preface. Here the eId attribute is optional.
 */
export class Prefaceopt implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    prefOptsChoice: {
      choice: true,
      minOccur: 1,
      options: {
        preOptsChoiceBlkElGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new BlockElements()).CHILDREN_MAP,
          }
        },
        prefOptsChoicePrefContGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new PrefaceContainers()).CHILDREN_MAP,
          }
        }
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items,
  ];
}