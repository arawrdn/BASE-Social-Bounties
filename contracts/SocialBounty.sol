// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SocialBounty {
    struct Bounty {
        address creator;
        address hunter;
        uint256 amount;
        string taskProofId;
        bool isCompleted;
        bool isCancelled;
    }

    mapping(uint256 => Bounty) public bounties;
    uint256 public bountyCount;

    event BountyCreated(uint256 indexed id, address indexed creator, uint256 amount);
    event BountyClaimed(uint256 indexed id, address indexed hunter, uint256 amount);

    function createBounty(string memory _taskProofId) external payable {
        require(msg.value > 0, "Reward must be greater than 0");
        
        bounties[bountyCount] = Bounty({
            creator: msg.sender,
            hunter: address(0),
            amount: msg.value,
            taskProofId: _taskProofId,
            isCompleted: false,
            isCancelled: false
        });

        emit BountyCreated(bountyCount, msg.sender, msg.value);
        bountyCount++;
    }

    function claimBounty(uint256 _id) external {
        Bounty storage bounty = bounties[_id];
        require(!bounty.isCompleted, "Bounty already completed");
        require(!bounty.isCancelled, "Bounty cancelled");
        
        bounty.isCompleted = true;
        bounty.hunter = msg.sender;

        (bool success, ) = payable(msg.sender).call{value: bounty.amount}("");
        require(success, "Transfer failed");

        emit BountyClaimed(_id, msg.sender, bounty.amount);
    }
}
