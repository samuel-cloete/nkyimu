import { AbstractAttribute } from "../Abstract/AbstractAttribute";

/**
 * The type attribute is used in various element to identify a type without
 * restrictions as to its values.
 */
export class TypeAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

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