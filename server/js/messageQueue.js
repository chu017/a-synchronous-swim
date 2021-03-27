const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  console.log(messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  var temp = messages.shift();
  console.log(`Dequeueing message: ${temp}`);
  return temp;
};

// if enqueue and dequeue are exported here, we dont want to invoke them on this file

