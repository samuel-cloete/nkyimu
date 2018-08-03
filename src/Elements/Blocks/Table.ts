import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element ol is an HTML element and is used in Akoma Ntoso
 * as in HTML, for an ordered list of list item (elements li)
 */
export class Table extends AbstractNode {
  abbreviation = '';

  nodeName = 'table';

  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      options: {
        caption: { options: {} },
        tr: { minOccur: 1, options: {} },
      },
    },
  };

  readonly SEQUENCE: string[] = [
    'caption:?',
    'tr',
  ];
}