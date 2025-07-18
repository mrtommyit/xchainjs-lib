import mock, { importjson } from './axios-adapter'

export default {
  reset: mock.reset,
  restore: mock.restore,
  init: () => {
    //Mock midgard pools
    mock.onGet(/\/v2\/pools/).reply(async () => {
      const resp = await importjson(`./responses/midgard/pools.json`)
      return [200, resp]
    })
    //Mock thorchain/mimir
    mock.onGet(/\/v2\/thorchain\/mimir/).reply(async () => {
      const resp = await importjson(`./responses/mimir/mimirConstants.json`)
      return [200, resp]
    })
    //Mock thorchain/mimir
    mock.onGet(/\/v2\/thorchain\/constants/).reply(async () => {
      const resp = await importjson(`./responses/thorchain/thorchainConstants.json`)
      return [200, resp]
    })
    //Mock thorchain/mimir
    mock.onGet(/\/v2\/thorchain\/queue/).reply(async () => {
      const resp = await importjson(`./responses/thorchain/outboundQueue.json`)
      return [200, resp]
    })
    //Mock midgard health
    mock.onGet(/\/v2\/health/).reply(async () => {
      const resp = await importjson(`./responses/midgard/health.json`)
      return [200, resp]
    })
    //Mock midgard actions
    mock.onGet(/\/v2\/actions?/).reply(async () => {
      const resp = await importjson(`./responses/midgard/actions.json`)
      return [200, resp]
    })
  },
}
