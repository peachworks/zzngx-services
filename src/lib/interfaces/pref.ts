/**
 * Preference
 *
 * @export
 * @interface Pref
 */
export interface Pref {

  /**
   * Id of preference
   *
   * @readonly
   * @type {number}
   * @memberof Pref
   */
  readonly id?: number;

  /**
   * Application id
   *
   * @type {number}
   * @memberof Pref
   */
  app_id?: number;

  /**
   * Key of preference
   *
   * @type {string}
   * @memberof Pref
   */
  key?: string;

  /**
   * Value of preference
   *
   * @type {string}
   * @memberof Pref
   */
  value?: string;

  /**
   * Created at
   *
   * @readonly
   * @type {string}
   * @memberof Pref
   */
  readonly created_at?: string;

  /**
   * Created by
   *
   * @readonly
   * @type {string}
   * @memberof Pref
   */
  readonly created_by?: number;

  /**
   * Updated at
   *
   * @readonly
   * @type {string}
   * @memberof Pref
   */
  readonly updated_at?: string;

  /**
   * Updated by
   *
   * @readonly
   * @type {string}
   * @memberof Pref
   */
  readonly updated_by?: number;
}
