// Ex-36  

 // function make_shirt(size,textdesign){
        //         console.log(textdesign.slice(0,Number(size)));
        // }

        // make_shirt(10,`This should not print as it is`)










//  Ex-37 

 
        // function tshirtMaker(size,textdesign){

        //         if(size !== "L" && size !== "M" ){
        //                 console.log(`Enter the size in "M" or "L" OR Send the design in string. Thank you!`);
        //         }
        //         else if(size == "L" && textdesign == ""){ 
        //         console.log(`JavaScript is super useful`);
        //         }else if(size == "M" && textdesign == "" ){
        //         console.log(`JavaScript is super useful`);
        //         }else if(size == "L" && textdesign){
        //          console.log(textdesign)
        //         }else{
        //          console.log(textdesign.slice(0,15));
        //         }

        // }

        // tshirtMaker("M","yo yo")









        //Ex-38



          // let country1= "Pakistan";

        // function describe_city(city,country) {

        //        console.log(`${city} is  in ${country}.`);

        // }

        // describe_city(`Karachi`,country1)
        // describe_city(`Lahore`,country1)
        // describe_city(`Maraqash`,country1)








        //Ex-39

        // function city_country(city,country){
        //         console.log(`${city},${country}`);
        // }

        // city_country(`"Makkah,Arab"`);
        // city_country(`"Karachi,Pakistan"`);
        // city_country(`"Bursa,Turkey"`);











        // Ex-40 


//         function make_album(artist_name,album_title,tracks){
                
//                 if(tracks === undefined ){ 
//                         let album = {
//                         Artistname: artist_name,
//                         Albumtitle: album_title,
                        
//                         }
//                         return album
                       
//                 }else{
//                         let  album = {
//                                 Artistname: artist_name,
//                                 Albumtitle: album_title,
//                                 Tracks: tracks,
                                
//                                 }
//                                 return album
//                 }
        
                
//         }


//        let dic1 = [] ;
//        dic1.push(make_album(`artist1`,`album1`))
//        dic1.push(make_album(`artist2`,`album2`))
//        dic1.push(make_album(`artist3`,`album3`))
//        console.log(dic1); 

//        let dic2 = [] ;
//        dic2.push(make_album(`artist1`,`album1`))
//        dic2.push(make_album(`artist2`,`album2`))
//        dic2.push(make_album(`artist3`,`album3`))
//        console.log(dic2); 

//        let dic3 = [] ;
//        dic3.push(make_album(`artist1`,`album1`))
//        dic3.push(make_album(`artist2`,`album2`))
//        dic3.push(make_album(`artist3`,`album3`,4))
//        console.log(dic3); 













// Ex-41 




   // let magicians = [`magician1`,`magician2`,`magician3`,`magician4`,`magician5`]

        // function showMagicians(namesOfMagicians){
        //          console.log(...namesOfMagicians); ;
        // }

        // showMagicians(magicians);










        //Ex-42 

            // function showMagicians(namesOfMagicians){


        //          console.log(namesOfMagicians); ;
        // }

        // function makeGreat(arrayOfMag){
        //         arrayOfMag.forEach((element,index) => {
        //              arrayOfMag[index] = `The Great ${element}` ;
        //         });
        // }

        // makeGreat(magicians)
        // showMagicians(magicians);









        // Ex-43 


           //  let magicians = [`magician1`,`magician2`,`magician3`,`magician4`,`magician5`]
        //  let magiciansCopy = [`magician1`,`magician2`,`magician3`,`magician4`,`magician5`]
         

        //  function makeGreat(arrayOfMag){
        //                 arrayOfMag.forEach((element,index) => {
        //                      arrayOfMag[index] = `The Great ${element}` ;
        //                 });
        //         }
      
        //         function showMagicians(mags,greatMags){
      
        //               console.log(mags); 
        //               console.log(greatMags); 
        //               }


        //   makeGreat(magiciansCopy);
        //   showMagicians(magicians,magiciansCopy)















        // Ex-44 


          // let items_required_in_order1 = [`order-1:`,`tomato`,`cheese`];
        // let items_required_in_order2 = [`order-2:`,`cookies`,`coffee`];
        // let items_required_in_order3 = [`order-3:`,`tea`,`biscuits`];

        // function  orderCollector(param1){
        //         return console.log(`${param1}`)
        // }

        // orderCollector(...[items_required_in_order1])
        // orderCollector(...[items_required_in_order2])
        // orderCollector(...[items_required_in_order3])















        

        //Ex-45


        
        // function carInfoCollector(manufacturar,car_model,car_number,color,isBrandNew){

        //         if(manufacturar === undefined | car_model === undefined | car_number === undefined){
        //                 console.log(`Manufacturer,Car Model and Car Number are required`);
        //                 return
        //         }
        //         if(color === undefined && isBrandNew === undefined){ 
        //         let object = {
        //                 manufacturar : manufacturar,
        //                 carModel : car_model,
        //                 carNumber : String(car_number),           
        //         }
        //          console.log(object)
        //          return
        //         }
        //         if(typeof(color) === "string" && isBrandNew === undefined){
        //                 let object = {
        //                         manufacturar : manufacturar,
        //                         carModel : car_model,
        //                         carNumber : String(car_number),
        //                         color : color,


        //                 }
        //                  console.log(object)
        //                  return
        //         }else {
        //                 let object = {
        //                         manufacturar : manufacturar,
        //                         carModel : car_model,
        //                         carNumber : String(car_number),
        //                         color : color,
        //                         isBrandNew : isBrandNew,

        //                 }
                //          console.log(object)
                //          return
                // }

        // }
        // carInfoCollector(`Honda`,`Civic`,`Kfj8095`)