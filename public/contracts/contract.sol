pragma solidity ^0.4.21;
/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    // uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return a / b;
  }

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract Ownable {
  address public owner;


  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() public {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}

contract ERC20Interface {
    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}



contract TokenTicket is ERC20Interface, Ownable{
    using SafeMath for uint256;
    mapping (address=>uint256) public balances;
    mapping (address => mapping (address => uint256)) internal allowed;
    uint256 ticketsSold = 0;//
    bool public pause = false;
    uint8 public constant decimals = 0;
    bool public saleComplete = false;
    string public name; //
    string public symbol; //
    uint256 public totalSupply;
    string public EventLocation; //
    string public EventInformation; //
    uint256 public EventStartTime; //
    uint256 public feeForTicket; //
    uint256 public EventEndTime;
    string public Organizer;
    string public OrganizerInfo;

    function TokenTicket(string _name, string _symbol, uint256 _totalSupply, string _EventLocation, string _EventInformation, uint256 _EventStartTime, uint256 _EventEndTime, uint256 _feeForTicket, string _Organizer, string _OrganizerInfo) public onlyOwner{
        name = _name;
        symbol  = _symbol;
        totalSupply = _totalSupply;
        EventLocation = _EventLocation;
        EventInformation = _EventInformation;
        EventStartTime = _EventStartTime;
        feeForTicket = _feeForTicket;
        EventEndTime = _EventEndTime;
        Organizer = _Organizer;
        OrganizerInfo = _OrganizerInfo;
        balances[owner] = _totalSupply;
    }

    function totalSupply() public constant returns(uint){
        return totalSupply;
    }

    function balanceOf(address _caller) public constant returns(uint){
        return balances[_caller];
    }

    function transfer(address _to, uint _tokens) public returns (bool){
        require(_to != address(0));
        require(_tokens <= balances[msg.sender] );
        balances[msg.sender] = balances[msg.sender].sub(_tokens);
        balances[_to] = balances[_to].add(_tokens);
        emit Transfer(msg.sender, _to, _tokens);
        return true;

    }

    function approve(address _spender, uint _tokens) public returns (bool){
        allowed[msg.sender][_spender] = _tokens;
        emit Approval(msg.sender, _spender, _tokens);
        return true;
    }

    function transferFrom(address _from, address _to, uint _tokens) public returns (bool){
        require(_to != address(0));
        require(_tokens <= balances[_from]);
        require(_tokens <= allowed[_from][msg.sender]);
        balances[_from] = balances[_from].sub(_tokens);
        balances[_to] = balances[_to].add(_tokens);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_tokens);
        emit Transfer(_from, _to, _tokens);
        return true;
    }

    function allowance(address _tokenOwner, address _spender) public constant returns (uint){
        return allowed[_tokenOwner][_spender];
    }

    function pauseSales() external onlyOwner {
        pause = true;
    }

    function resumeSales() external onlyOwner{
        pause = false;
    }

    function hikeFee(uint _fee) external onlyOwner{
        feeForTicket = _fee;
    }

    function mint(uint256 _newTickets) external onlyOwner{
        balances[owner] = balances[owner].add(_newTickets);
        totalSupply = totalSupply.add(_newTickets);
    }

    function withdraw() external onlyOwner{
        address myAddress = this;
        owner.transfer(myAddress.balance);
    }

    function buy() external payable returns (bool){
        require(msg.value == feeForTicket && !saleComplete && ticketsSold<totalSupply && !pause);
        balances[msg.sender] = balances[msg.sender].add(1);
        balances[owner] = balances[owner].sub(1);
        ticketsSold = ticketsSold.add(1);
        if(ticketsSold==totalSupply){
            saleComplete = true;
        }
        return true;

    }
    function getInfo() external view returns(string, string, string, string, uint256, uint256, uint256){

        return (name, symbol, EventLocation, EventInformation, EventStartTime,EventEndTime, feeForTicket);
    }
    function getOrganizerInfo() external view returns(string, string){
        return (Organizer, OrganizerInfo);
    }
}
