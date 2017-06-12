
const sharp = require('sharp');


// console.log(sharp('./images/input.jpg')
//     .toFile('./images/output1.jpg')
//     .then(function(err){
//         console.log('err',err);
//     })
// );

// console.log(sharp('./images/input.jpg').metadata().then(function(data){
//     console.log('data',data);
// }));

console.log(
    sharp('./images/input.jpg').toBuffer(function(err,data,info){
        // console.log('err',err);
        // console.log('data',data);
        // console.log('info',info);
    }).withMetadata({orientation: 4})
);
