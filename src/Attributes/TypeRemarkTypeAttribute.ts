import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { RemarkType } from "../SimpleTypes/RemarkType";

export class TypeRemarkTypeAttribute extends AbstractAttribute {

  static getClassName(): string { return 'TypeRemarkTypeAttribute'; }

  get className(): string { return 'TypeRemarkTypeAttribute'; }
  /**
   * The name of the attribute.
   */
  readonly name: string = 'type';

  static getName() { return 'type__remark'; }

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
    return (new RemarkType()).validate(value, 'type');
  }
}
