import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { BrowserProvider, Contract, parseEther } from 'ethers'

const CONTRACT_ADDRESS = "0xYourBountyContractAddress";
const ABI = [
  "function createBounty(string memory _taskProofId) external payable",
  "function claimBounty(uint256 _id) external",
  "function bountyCount() view returns (uint256)"
];

export function BountyManager() {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider('eip155');

  const handleCreateBounty = async () => {
    if (!isConnected) return;
    const provider = new BrowserProvider(walletProvider);
    const signer = await provider.getSigner();
    const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);

    try {
      const tx = await contract.createBounty("task-123", { value: parseEther("0.001") });
      await tx.wait();
      console.log("Bounty created successfully");
    } catch (error) {
      console.error("Error creating bounty", error);
    }
  };

  return (
    <div className="bounty-panel">
      <h1>Active Social Bounties</h1>
      {isConnected ? (
        <div className="controls">
          <p>User: {address}</p>
          <button onClick={handleCreateBounty} className="btn-action">
            Post 0.001 ETH Bounty
          </button>
        </div>
      ) : (
        <appkit-button />
      )}
    </div>
  );
}
