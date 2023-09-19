const getProxyURL = (port: number): string => `http://127.0.0.1:${port}/proxy`;

type ProxiedChains = "namada" | "cosmos" | "ethereum";

// Define unique Proxy URLs for each chain:
export const ProxyMappings: Record<ProxiedChains, string> = {
  namada: getProxyURL(8010),
  cosmos: getProxyURL(8011),
  ethereum: getProxyURL(8012),
}
