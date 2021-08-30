"use strict"

const cacheResult = callback => {
	const cache = {}
	return (...args) => (cache[args[0]] = cache[args[0]] || [callback(...args)])[0]
}

const RobloxApi = {
	api: {
		getUncachedProductInfo(assetId) {
			return $.fetch(`https://api.roblox.com/marketplace/productinfo?assetId=${assetId}`).then(resp => resp.json())
		},
		getProductInfo: cacheResult(assetId => RobloxApi.api.getUncachedProductInfo(assetId))
	},
	catalog: {
		getBundleDetails: cacheResult(bundleId => $.fetch(`https://catalog.roblox.com/v1/bundles/${bundleId}/details`).then(resp => resp.json()))
	}
}