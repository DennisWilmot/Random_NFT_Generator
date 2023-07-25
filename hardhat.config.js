require("@nomicfoundation/hardhat-toolbox");
const INFURA_API_KEY = "https://distinguished-newest-brook.ethereum-sepolia.discover.quiknode.pro/1fcf0ee98d4fe175e6313c00ee8b09e6e43d470e/";
const SEPOLIA_PRIVATE_KEY = "8736f21d3e71a998c4426936c9be84d9c6aecfdfab21eeef2c8e56a95691c2bb";

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
