module.exports.BADGE_CONTRACT_ADDRS = {
  kovan: [ 
    '0x78895ec026aeff2db73bc30e623c39e1c69b1386', // ETH badge
    '0xd58bdd286e8155b6223e2a62932ae3e0a9a75759' // Ethfinex badge
  ],
  main: [ 
    '0xCb4Aae35333193232421E86Cd2E9b6C91f3B125F', // ETH badge
    '0x916deaB80DFbc7030277047cD18B233B3CE5b4Ab' // Ethfinex badge
  ]
}

module.exports.BADGE_CONTRACT_ABI = [
  {
    constant: true,
    inputs: [],
    name: "challengePeriodDuration",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "governor",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "arbitratorExtraData",
    outputs: [{ name: "", type: "bytes" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_sharedStakeMultiplier", type: "uint256" }],
    name: "changeSharedStakeMultiplier",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "loserStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "countByStatus",
    outputs: [
      { name: "absent", type: "uint256" },
      { name: "registered", type: "uint256" },
      { name: "registrationRequest", type: "uint256" },
      { name: "clearingRequest", type: "uint256" },
      { name: "challengedRegistrationRequest", type: "uint256" },
      { name: "challengedClearingRequest", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_disputeID", type: "uint256" },
      { name: "_ruling", type: "uint256" }
    ],
    name: "rule",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "challengerBaseDeposit",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_requesterBaseDeposit", type: "uint256" }],
    name: "changeRequesterBaseDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "sharedStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_evidence", type: "string" }
    ],
    name: "submitEvidence",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "arbitrator",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "metaEvidenceUpdates",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
      { name: "_contributor", type: "address" }
    ],
    name: "getContributions",
    outputs: [{ name: "contributions", type: "uint256[3]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" }
    ],
    name: "getRequestInfo",
    outputs: [
      { name: "disputed", type: "bool" },
      { name: "disputeID", type: "uint256" },
      { name: "submissionTime", type: "uint256" },
      { name: "resolved", type: "bool" },
      { name: "parties", type: "address[3]" },
      { name: "numberOfRounds", type: "uint256" },
      { name: "ruling", type: "uint8" },
      { name: "arbitrator", type: "address" },
      { name: "arbitratorExtraData", type: "bytes" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_address", type: "address" }],
    name: "executeRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_address", type: "address" }],
    name: "requestStatusChange",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "winnerStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "addresses",
    outputs: [{ name: "status", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_address", type: "address" },
      { name: "_cursor", type: "uint256" },
      { name: "_count", type: "uint256" },
      { name: "_roundCursor", type: "uint256" },
      { name: "_roundCount", type: "uint256" }
    ],
    name: "batchRequestWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_side", type: "uint8" }
    ],
    name: "fundAppeal",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_cursor", type: "uint256" },
      { name: "_count", type: "uint256" }
    ],
    name: "batchRoundWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "requesterBaseDeposit",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_loserStakeMultiplier", type: "uint256" }],
    name: "changeLoserStakeMultiplier",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "addressCount",
    outputs: [{ name: "count", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_winnerStakeMultiplier", type: "uint256" }],
    name: "changeWinnerStakeMultiplier",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "addressList",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_beneficiary", type: "address" },
      { name: "_request", type: "uint256" }
    ],
    name: "amountWithdrawable",
    outputs: [{ name: "total", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" }
    ],
    name: "changeArbitrator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" }
    ],
    name: "withdrawFeesAndRewards",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_address", type: "bytes32" }],
    name: "isPermitted",
    outputs: [{ name: "allowed", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_cursor", type: "address" },
      { name: "_count", type: "uint256" },
      { name: "_filter", type: "bool[8]" },
      { name: "_oldestFirst", type: "bool" }
    ],
    name: "queryAddresses",
    outputs: [
      { name: "values", type: "address[]" },
      { name: "hasMore", type: "bool" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "uint256" }],
    name: "arbitratorDisputeIDToAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_challengePeriodDuration", type: "uint256" }],
    name: "changeTimeToChallenge",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "MULTIPLIER_DIVISOR",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_registrationMetaEvidence", type: "string" },
      { name: "_clearingMetaEvidence", type: "string" }
    ],
    name: "changeMetaEvidence",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_challengerBaseDeposit", type: "uint256" }],
    name: "changeChallengerBaseDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_evidence", type: "string" }
    ],
    name: "challengeRequest",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_governor", type: "address" }],
    name: "changeGovernor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_address", type: "address" }],
    name: "getAddressInfo",
    outputs: [
      { name: "status", type: "uint8" },
      { name: "numberOfRequests", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" }
    ],
    name: "getRoundInfo",
    outputs: [
      { name: "appealed", type: "bool" },
      { name: "paidFees", type: "uint256[3]" },
      { name: "hasPaid", type: "bool[3]" },
      { name: "feeRewards", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
      { name: "_registrationMetaEvidence", type: "string" },
      { name: "_clearingMetaEvidence", type: "string" },
      { name: "_governor", type: "address" },
      { name: "_requesterBaseDeposit", type: "uint256" },
      { name: "_challengerBaseDeposit", type: "uint256" },
      { name: "_challengePeriodDuration", type: "uint256" },
      { name: "_sharedStakeMultiplier", type: "uint256" },
      { name: "_winnerStakeMultiplier", type: "uint256" },
      { name: "_loserStakeMultiplier", type: "uint256" }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_address", type: "address" },
      { indexed: true, name: "_requester", type: "address" }
    ],
    name: "AddressSubmitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_address", type: "address" },
      { indexed: false, name: "_registrationRequest", type: "bool" }
    ],
    name: "RequestSubmitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_requester", type: "address" },
      { indexed: true, name: "_challenger", type: "address" },
      { indexed: true, name: "_address", type: "address" },
      { indexed: false, name: "_status", type: "uint8" },
      { indexed: false, name: "_disputed", type: "bool" },
      { indexed: false, name: "_appealed", type: "bool" }
    ],
    name: "AddressStatusChange",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_address", type: "address" },
      { indexed: true, name: "_contributor", type: "address" },
      { indexed: true, name: "_request", type: "uint256" },
      { indexed: false, name: "_round", type: "uint256" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "RewardWithdrawal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_metaEvidenceID", type: "uint256" },
      { indexed: false, name: "_evidence", type: "string" }
    ],
    name: "MetaEvidence",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_arbitrator", type: "address" },
      { indexed: true, name: "_disputeID", type: "uint256" },
      { indexed: false, name: "_metaEvidenceID", type: "uint256" },
      { indexed: false, name: "_evidenceGroupID", type: "uint256" }
    ],
    name: "Dispute",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_arbitrator", type: "address" },
      { indexed: true, name: "_evidenceGroupID", type: "uint256" },
      { indexed: true, name: "_party", type: "address" },
      { indexed: false, name: "_evidence", type: "string" }
    ],
    name: "Evidence",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_arbitrator", type: "address" },
      { indexed: true, name: "_disputeID", type: "uint256" },
      { indexed: false, name: "_ruling", type: "uint256" }
    ],
    name: "Ruling",
    type: "event"
  }
];
