module.exports = function(context, myBlob) {
  context.log(
    'This is working \n Name:',
    context.bindingData.name,
    '\n Blob Size:',
    myBlob.length,
    'Bytes'
  );
  context.done();
};
