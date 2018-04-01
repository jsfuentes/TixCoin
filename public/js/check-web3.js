if (typeof web3 !== 'undefined') {
  web3js = new Web3(web3.currentProvider);
} else {
  alert('web3 not detected. we recommend installing metamask.io')
}
