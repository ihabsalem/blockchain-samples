/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
# 
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# or in the "license" file accompanying this file. This file is distributed 
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
# express or implied. See the License for the specific language governing 
# permissions and limitations under the License.
#
*/

let configObject = {
    "caEndpoint": process.env.CA_ENDPOINT || "ca.m-zdttkfdpyvbrvcp2d23fjp27dm.n-quosox5k7bdojpltizv2shw7de.managedblockchain.us-east-1.amazonaws.com:30002",
    "peerEndpoint": process.env.PEER_ENDPOINT || "grpc://nd-mofgrlszuvgvnfxvxul2e5stly.m-zdttkfdpyvbrvcp2d23fjp27dm.n-quosox5k7bdojpltizv2shw7de.managedblockchain.us-east-1.amazonaws.com:30003",
    "ordererEndpoint": process.env.ORDERER_ENDPOINT || "grpc://orderer.n-quosox5k7bdojpltizv2shw7de.managedblockchain.us-east-1.amazonaws.com:30001",
    "channelName": process.env.CHANNEL_NAME || "mychannel",
    "chaincodeId": process.env.CHAIN_CODE_ID || "abstore",
    "cryptoFolder": process.env.CRYPTO_FOLDER || '/tmp',
    "mspID": process.env.MSP || 'm-ZDTTKFDPYVBRVCP2D23FJP27DM',
    "memberName": process.env.MEMBERNAME || "Org1"
}

module.exports = configObject;