import ChainConfig from "./chain";

export { default as RPCConfig, type Network } from "./rpc";
export { defaultChainId, type Protocol, type Chain } from "./chain";

const Config = {
  chain: ChainConfig,
};

export default Config;
