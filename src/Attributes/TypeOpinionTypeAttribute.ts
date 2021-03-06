import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { OpinionType } from "../SimpleTypes/OpinionType";

export class TypeOpinionTypeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'TypeOpinionTypeAttribute'; }

  get className(): string { return 'TypeOpinionTypeAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

  static getName() { return 'type__opinion'; }

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
    return (new OpinionType()).validate(value, 'type');
  }
}
