import * as semver from 'semver'
import * as os from 'os'

export class LinuxPerf {
  constructor() {}

  getModulePath(): null | string {
    if (
      os.platform() === 'win32' ||
      !semver.satisfies(process.version, '>=10.4.0')
    ) {
      /* istanbul ignore next */
      return null
    }

    try {
      // It's possible that "diat-custom-linux-perf" module exists while gyp installation failed.
      // We directly require the module to ensure it works.
      require('diat-custom-linux-perf')
      return require.resolve('diat-custom-linux-perf')
    } catch (err) {
      //
    }
    /* istanbul ignore next */
    return null
  }
}
