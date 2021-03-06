import { Core } from "../AttributeGroups/Core";
import { Idopt } from "../AttributeGroups/Idopt";
import { Linkopt } from "../AttributeGroups/Linkopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The complex type anyOtherType defines an open content model for
 * elements that may use elements from other namespaces.
 */
export class AnyOtherType implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    aots: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        any: { minOccur: 0, options: {} },
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new Idopt()).items,
    ...(new Linkopt()).items,
  ];
}
