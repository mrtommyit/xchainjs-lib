import mock, { importjson } from './axios-adapter'

export default {
  reset: mock.reset,
  restore: mock.restore,
  init: () => {
    mock.onGet(/\/v2\/actions/).reply(async () => {
      const resp = await importjson(`./responses/midgard/actions.json`)
      return [200, resp]
    })
    mock.onGet(/\/v2\/pools/).reply(async () => {
      const resp = await importjson(`./responses/midgard/pools.json`)
      return [200, resp]
    })
    mock.onGet(/\/v2\/mayaname\/lookup\/eld/).reply(async () => {
      const resp = await importjson(`./responses/midgard/mayaname.json`)
      return [200, resp]
    })
    mock.onGet(/\/v2\/mayaname\/rlookup\/maya13x0f2r0jltfplmxe40cc67hhca27np34ezmcjn/).reply(async () => {
      const resp = await importjson(`./responses/midgard/owner.json`)
      return [200, resp]
    })
  },
}
