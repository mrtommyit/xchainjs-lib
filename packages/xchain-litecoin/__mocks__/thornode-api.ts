import mock, { importjson } from './axios-adapter'

export default {
  restore: mock.restore,
  init: () => {
    //Mock testnet thorchain/inbound_addresses
    mock.onGet(/testnet(.*)\/thorchain\/inbound_addresses/).reply(async () => {
      const resp = await importjson(`./response/inbound_addresses/testnet.json`)
      return [200, resp]
    })

    // inbound_addresses
    mock.onGet(/\/inbound_addresses/).reply(async () => {
      const resp = await importjson(`./response/inbound_addresses/mainnet.json`)
      return [200, resp]
    })

    //Mock thorchain/mimir
    mock.onGet(/\/thorchain\/mimir/).reply(async () => {
      const resp = await importjson(`./response/thornode/mimir.json`)
      return [200, resp]
    })

    // Mock ltc node send tx
    mock.onPost(/ltc.thorchain.info/).reply(async () => {
      return [
        200,
        {
          id: '1',
          result: 'mock-txid',
          error: null,
        },
      ]
    })
  },
}
