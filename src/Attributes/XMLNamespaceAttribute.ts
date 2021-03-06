import { AbstractAttribute } from "../Abstracts/AbstractAttribute";

export class XMLNamespaceAttribute extends AbstractAttribute {

  static getClassName(): string { return 'XMLNamespaceAttribute'; }

  get className(): string { return 'XMLNamespaceAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'xmlns';

  static getName() { return 'xmlns'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return true;
  }
}