import { Api, JsonRpc, RpcError, Eos } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'; 

const host = process.env.EOS_NETWORK_HOST
const port = process.env.EOS_NETWORK_PORT
const chainId = process.env.EOS_NETWORK_CHAINID

const network = {
    blockchain: `eos`,
    protocol: `https`,
    host,
    port,
    chainId,
}

const eos = Eos({ httpEndpoint: `${network.protocol}://${network.host}:${network.port}` })

const ROWS_LIMIT = 99999

const getKings = () => eos
        .getTableRows({
            json: true,
            code: `kingofeos`,
            scope: `kingofeos`,
            table: `claims`,
            table_key: `kingdomKingIndex`,
            lower_bound: 0,
            upper_bound: -1,
            limit: ROWS_LIMIT,
        })
        .catch(console.err)

export { network, getKings }

