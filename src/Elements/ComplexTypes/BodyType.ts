import { Coreopt } from "../../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HierElements } from "../Groups/HierElements";

const type = new HierElements();

/**
 * The type bodyType specifies a content model of the main hierarchy
 * of a hierarchical document (e.g, an act or a bill)
 */
export class BodyType implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    bodyTypes: {
      choice: true,
      minOccur: 1,
      options: {
        bodyTypeGrps: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...type.CHILDREN_MAP
          },
        },
        componentRef: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items
  ];
}
