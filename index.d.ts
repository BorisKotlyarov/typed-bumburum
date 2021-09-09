// Type definitions for bumburum 1.0.4
// Project: https://www.npmjs.com/package/bumburum
// Definitions by: Kotlyarov Boris <https://github.com/BorisKotlyarov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Bumburum;
export as namespace bumburum;

declare namespace Bumburum {
  interface IBumburumObj {
    Black: string,
    Red: string,
    Green: string,
    Yellow: string,
    Blue: string,
    Magenta: string,
    Cyan: string,
    White: string,
  }

  const font: IBumburumObj;
  const background: IBumburumObj;
}
