var sharp=require('sharp');
sharp(__dirname+'/images/Snip20170605_1.png')
   .overlayWith(__dirname+'/images/13344760.jpg',{gravity:sharp.gravity.southeast,top:100,left:10,raw:{width:10,height:10,channels:1}})
   .resize(null,300)//按照height去压缩
   .rotate(-90) //旋转
   .background('#ff6600')
   .toFile(__dirname+'/images/qqq2.png',function (error) {
       console.log(error);
    //    console.log(typeOptions.isEmpty(error));
    //    if(typeOptions.isEmpty(error)){
    //        //不报错。
    //        console.log("不报错。");
    //        sharp.cache(false);//清除占用资源
    //    }else{
    //        console.log("报错。");
    //     }
    })
    .toBuffer()
    .then(function(outputBuffer) {
        console.log(outputBuffer)
    // outputBuffer contains upside down, 300px wide, alpha channel flattened
    // onto orange background, composited with overlay.png with SE gravity,
    // sharpened, with metadata, 90% quality WebP image data. Phew!
    });
