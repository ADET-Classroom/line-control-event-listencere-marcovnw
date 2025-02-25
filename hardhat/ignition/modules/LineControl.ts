// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LineControlModule = buildModule("LineControlModule", (m) => {
  const lineControl = m.contract("LineControl");
  return { lineControl };
});

export default LineControlModule;
