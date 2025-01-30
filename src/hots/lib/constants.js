import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
 pancakeFactory: '0xdd538E4Fd1b69B7863E1F741213276A6Cf1EfB3B',
 panecakeRouter: '0x3047799262d8D2EF41eD2a222205968bC9B0d895',
 WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
 HOTS: '0x793766efcA4CEF8c55EE950E759AD6FF73D49c09',
 HOTSWBNB: '0xCF33801D538C7895c4405D13E801Af6F3C6fCEF8',
 WBNBBUSD: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
 KP3RBWBNB: '0x2113bA4000d8a0B201C3e916E63Fe0DCDfBe476a',
 USDCWBNB: '0x578e8CEc62666D2750D92EcC70bE0961FF3Ab269',
 KP3RBBUSD: '0xA457b4dBC29bb20482Ecd2DEB8D41B154445d50d',
 WBNBUSDT: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
 CHSWBNB: '0x51A162dd678d75C269Ef6680193C019e0B4Bda7E',
 DAIWBNB: '0x89D20Dcda1DC49F47BcDA00C3b84Fe30AC3d127b',
 KP3RBCHS: '0xe05207A432f6B06Fe9f78B598c1f890b260Dec45',
 DOGEKKSHIB: '0xb0694Cda0e4644dF144eb8e7F1a6A2e54C831bed',
  }

export const contractAddresses = {
  hots: {
    56: '0x793766efcA4CEF8c55EE950E759AD6FF73D49c09',
  },
  hotsMaker: {
    56: '0x0093D493BB6fB0a4dCb76e636e8a350ACc7f5167',
  },
  wbnb: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
}

//BELOW ARE LISTED POOLS
export const supportedPools = [
  {
     pid: 4,
     lpAddresses: {
       56: '0xCF33801D538C7895c4405D13E801Af6F3C6fCEF8',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'HOTS - BNB',
     symbol: 'HOTS-BNB LP',
     symbolShort: 'HOTS-BNB',
     tokenSymbol: 'HOTS',
     token2Symbol: 'BNB',
     isHot: true,
     isNew: false,
     rewardValue: '1.07 HOTS',
     apyValue: '2210%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0xCF33801D538C7895c4405D13E801Af6F3C6fCEF8'

   },
   {
      pid: 14,
      lpAddresses: {
        56: '0xb0694Cda0e4644dF144eb8e7F1a6A2e54C831bed',
      },
      tokenAddresses: {
        56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
      },
      name: 'DOGEK - KSHIB',
      symbol: 'DOGEK-KSHIB LP',
      symbolShort: 'DOGEK-KSHIB',
      tokenSymbol: 'DOGEK',
      token2Symbol: 'KSHIB',
      isHot: true,
      isNew: false,
      rewardValue: '2.07 HOTS',
      apyValue: '2210%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
      pairLink: 'https://cheeseswap.info/#/'

    },

   {
      pid: 13,
      lpAddresses: {
        56: '0xe05207A432f6B06Fe9f78B598c1f890b260Dec45',
      },
      tokenAddresses: {
        56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
      },
      name: 'KP3RB - CHS',
      symbol: 'KP3RB-CHS LP',
      symbolShort: 'KP3RB-CHS',
      tokenSymbol: 'KP3RB',
      token2Symbol: 'CHS',
      isHot: true,
      isNew: false,
      rewardValue: '0.77 HOTS',
      apyValue: '1210%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
      pairLink: 'https://cheeseswap.info/#/pair/0xe05207A432f6B06Fe9f78B598c1f890b260Dec45'

    },

   {
     pid: 9,
     lpAddresses: {
       56: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'BUSD - BNB',
     symbol: 'BUSD-BNB LP',
     symbolShort: 'BUSD-BNB',
     tokenSymbol: 'BUSD',
     token2Symbol: 'BNB',
     isHot: true,
     isNew: false,
     rewardValue: '0.9 HOTS',
     apyValue: '1290%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0xF455f6f7988B752F75488E2CCcC030346d0Cac72'
   },

   {
     pid: 8,
     lpAddresses: {
       56: '0x2113bA4000d8a0B201C3e916E63Fe0DCDfBe476a',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'KP3RB - BNB',
     symbol: 'KP3RB-BNB LP',
     symbolShort: 'KP3RB-BNB',
     tokenSymbol: 'KP3RB',
     token2Symbol: 'BNB',
     isHot: true,
     isNew: false,
     rewardValue: '0.55 HOTS',
     apyValue: '1090%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0x2113bA4000d8a0B201C3e916E63Fe0DCDfBe476a'
   },

   {
     pid: 10,
     lpAddresses: {
       56: '0x578e8CEc62666D2750D92EcC70bE0961FF3Ab269',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'USDC - BNB',
     symbol: 'USDC-BNB LP',
     symbolShort: 'USDC-BNB',
     tokenSymbol: 'USDC',
     token2Symbol: 'BNB',
     isHot: true,
     isNew: false,
     rewardValue: '0.45 HOTS',
     apyValue: '1120%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0x578e8CEc62666D2750D92EcC70bE0961FF3Ab269'
   },

   {
     pid: 6,
     lpAddresses: {
       56: '0xA457b4dBC29bb20482Ecd2DEB8D41B154445d50d',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'KP3RB - BUSD',
     symbol: 'KP3RB-BUSD LP',
     symbolShort: 'KP3RB-BUSD',
     tokenSymbol: 'KP3RB',
     token2Symbol: 'BUSD',
     isHot: true,
     isNew: false,
     rewardValue: '0.65 HOTS',
     apyValue: '1300%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0xA457b4dBC29bb20482Ecd2DEB8D41B154445d50d'
   },

   {
     pid: 11,
     lpAddresses: {
       56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'WBNB - USDT',
     symbol: 'WBNB-USDT LP',
     symbolShort: 'WBNB-USDT',
     tokenSymbol: 'WBNB',
     token2Symbol: 'USDT',
     isHot: true,
     isNew: false,
     rewardValue: '0.25 HOTS',
     apyValue: '900%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD'
   },

   {
     pid: 7,
     lpAddresses: {
       56: '0x51A162dd678d75C269Ef6680193C019e0B4Bda7E',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'CHS - WBNB',
     symbol: 'CHS-WBNB LP',
     symbolShort: 'CHS-WBNB',
     tokenSymbol: 'CHS',
     token2Symbol: 'WBNB',
     isHot: true,
     isNew: false,
     rewardValue: '1.25 HOTS',
     apyValue: '2900%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0x51A162dd678d75C269Ef6680193C019e0B4Bda7E'
   },

   {
     pid: 12,
     lpAddresses: {
       56: '0x89D20Dcda1DC49F47BcDA00C3b84Fe30AC3d127b',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'DAI - WBNB',
     symbol: 'DAI-WBNB LP',
     symbolShort: 'DAI-WBNB',
     tokenSymbol: 'DAI',
     token2Symbol: 'WBNB',
     isHot: true,
     isNew: false,
     rewardValue: '0.22 HOTS',
     apyValue: '800%',
     protocal: 'CheeseSwap',
     iconProtocal: 'https://raw.githubusercontent.com/cheeseswapbsc/cheeseswap-interface/master/public/favicon.png',
     pairLink: 'https://cheeseswap.info/#/pair/0x89D20Dcda1DC49F47BcDA00C3b84Fe30AC3d127b'
   }

]
